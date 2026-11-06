import type { VercelRequest, VercelResponse } from '@vercel/node';
import { neon } from '@neondatabase/serverless';

// Fallback in-memory cache for standalone / development without DB
const memoryStore: Record<string, Record<string, any>> = {
  suratUmum: {},
  suratTugas: {},
  skKegiatan: {},
  bast: {},
  formPermintaan: {},
  suratPPK: {},
  pegawai: {},
  skp: {}
};

function getDbUrl(): string | null {
  return (
    process.env.POSTGRES_URL ||
    process.env.DATABASE_URL ||
    process.env.POSTGRES_PRISMA_URL ||
    process.env.POSTGRES_URL_NON_POOLING ||
    null
  );
}

async function getSql() {
  const url = getDbUrl();
  if (!url) return null;
  return neon(url);
}

let tableInitialized = false;
async function ensureTable(sql: ReturnType<typeof neon>) {
  if (tableInitialized) return;
  try {
    await sql`
      CREATE TABLE IF NOT EXISTS pusat_records (
        id VARCHAR(128) PRIMARY KEY,
        module VARCHAR(64) NOT NULL,
        data JSONB NOT NULL,
        year INT NOT NULL,
        updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
      );
    `;
    await sql`
      CREATE INDEX IF NOT EXISTS idx_pusat_module ON pusat_records(module);
    `;
    await sql`
      CREATE INDEX IF NOT EXISTS idx_pusat_year ON pusat_records(year);
    `;
    tableInitialized = true;
  } catch (err) {
    console.error('Failed to create pusat_records table:', err);
  }
}

function extractYear(record: any): number {
  if (!record) return new Date().getFullYear();
  const numStr = record.nomorSurat || record.nomorForm || record.nomorSK || record.nomorBAST || '';
  const match = String(numStr).match(/\b(20\d{2})\b/);
  if (match) return parseInt(match[1], 10);
  if (record.tanggal) {
    const dMatch = String(record.tanggal).match(/\b(20\d{2})\b/);
    if (dMatch) return parseInt(dMatch[1], 10);
  }
  return new Date().getFullYear();
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  const sql = await getSql();

  try {
    if (sql) {
      await ensureTable(sql);
    }

    // 1. GET ALL OR MODULE
    if (req.method === 'GET') {
      const { module: targetModule } = req.query;

      if (!sql) {
        // Return memory store
        if (targetModule && typeof targetModule === 'string') {
          return res.status(200).json({
            database: 'memory',
            module: targetModule,
            data: Object.values(memoryStore[targetModule] || {})
          });
        }
        const formatted: Record<string, any[]> = {};
        for (const k of Object.keys(memoryStore)) {
          formatted[k] = Object.values(memoryStore[k] || {});
        }
        return res.status(200).json({
          database: 'memory',
          data: formatted
        });
      }

      if (targetModule && typeof targetModule === 'string') {
        const rows = await sql`
          SELECT data FROM pusat_records 
          WHERE module = ${targetModule}
          ORDER BY updated_at DESC;
        `;
        return res.status(200).json({
          database: 'vercel-postgres',
          module: targetModule,
          data: rows.map(r => r.data)
        });
      }

      // Fetch all records
      const allRows = await sql`
        SELECT module, data FROM pusat_records 
        ORDER BY updated_at DESC;
      `;
      const grouped: Record<string, any[]> = {
        suratUmum: [],
        suratTugas: [],
        skKegiatan: [],
        bast: [],
        formPermintaan: [],
        suratPPK: [],
        pegawai: [],
        skp: []
      };

      for (const row of allRows) {
        if (!grouped[row.module]) grouped[row.module] = [];
        grouped[row.module].push(row.data);
      }

      return res.status(200).json({
        database: 'vercel-postgres',
        data: grouped,
        total: allRows.length
      });
    }

    // 2. POST (ADD OR UPSERT SINGLE RECORD)
    if (req.method === 'POST') {
      const { module, record, action, records } = req.body || {};

      // Bulk action
      if (action === 'bulk' && Array.isArray(records) && module) {
        if (!sql) {
          if (!memoryStore[module]) memoryStore[module] = {};
          records.forEach((r: any) => {
            if (r?.id) memoryStore[module][r.id] = r;
          });
          return res.status(200).json({ success: true, count: records.length });
        }

        for (const r of records) {
          if (!r?.id) continue;
          const y = extractYear(r);
          await sql`
            INSERT INTO pusat_records (id, module, data, year, updated_at)
            VALUES (${r.id}, ${module}, ${JSON.stringify(r)}, ${y}, NOW())
            ON CONFLICT (id) DO UPDATE SET
              data = EXCLUDED.data,
              year = EXCLUDED.year,
              updated_at = NOW();
          `;
        }
        return res.status(200).json({ success: true, count: records.length });
      }

      if (!module || !record || !record.id) {
        return res.status(400).json({ error: 'Parameter module dan record dengan id wajib diisi' });
      }

      const y = extractYear(record);

      if (!sql) {
        if (!memoryStore[module]) memoryStore[module] = {};
        memoryStore[module][record.id] = record;
        return res.status(200).json({ success: true, database: 'memory', record });
      }

      await sql`
        INSERT INTO pusat_records (id, module, data, year, updated_at)
        VALUES (${record.id}, ${module}, ${JSON.stringify(record)}, ${y}, NOW())
        ON CONFLICT (id) DO UPDATE SET
          data = EXCLUDED.data,
          year = EXCLUDED.year,
          updated_at = NOW();
      `;

      return res.status(200).json({ success: true, database: 'vercel-postgres', record });
    }

    // 3. PUT (UPDATE SINGLE RECORD)
    if (req.method === 'PUT') {
      const { module, record } = req.body || {};
      if (!module || !record || !record.id) {
        return res.status(400).json({ error: 'Parameter module dan record dengan id wajib diisi' });
      }

      const y = extractYear(record);

      if (!sql) {
        if (!memoryStore[module]) memoryStore[module] = {};
        memoryStore[module][record.id] = record;
        return res.status(200).json({ success: true, database: 'memory', record });
      }

      await sql`
        INSERT INTO pusat_records (id, module, data, year, updated_at)
        VALUES (${record.id}, ${module}, ${JSON.stringify(record)}, ${y}, NOW())
        ON CONFLICT (id) DO UPDATE SET
          data = EXCLUDED.data,
          year = EXCLUDED.year,
          updated_at = NOW();
      `;

      return res.status(200).json({ success: true, database: 'vercel-postgres', record });
    }

    // 4. DELETE
    if (req.method === 'DELETE') {
      const module = (req.query.module as string) || (req.body && req.body.module);
      const id = (req.query.id as string) || (req.body && req.body.id);

      if (!id || !module) {
        return res.status(400).json({ error: 'Parameter id dan module diperlukan untuk menghapus' });
      }

      if (!sql) {
        if (memoryStore[module]) {
          delete memoryStore[module][id];
        }
        return res.status(200).json({ success: true, database: 'memory' });
      }

      await sql`
        DELETE FROM pusat_records 
        WHERE id = ${id} AND module = ${module};
      `;

      return res.status(200).json({ success: true, database: 'vercel-postgres' });
    }

    return res.status(405).json({ error: 'Metode HTTP tidak didukung' });
  } catch (error: any) {
    console.error('API /records error:', error);
    return res.status(500).json({
      error: 'Terjadi kesalahan server',
      message: error?.message || String(error)
    });
  }
}
