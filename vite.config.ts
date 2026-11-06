import { defineConfig, Plugin } from 'vite';
import react from '@vitejs/plugin-react';
import fs from 'fs';
import path from 'path';

function localApiPlugin(): Plugin {
  const dataDir = path.resolve(process.cwd(), '.data');
  const dbFile = path.join(dataDir, 'local_db.json');

  const getDb = (): Record<string, Record<string, any>> => {
    try {
      if (!fs.existsSync(dataDir)) fs.mkdirSync(dataDir, { recursive: true });
      if (fs.existsSync(dbFile)) {
        return JSON.parse(fs.readFileSync(dbFile, 'utf-8'));
      }
    } catch (e) {
      console.warn('Error reading local db file:', e);
    }
    return {
      suratUmum: {},
      suratTugas: {},
      skKegiatan: {},
      bast: {},
      formPermintaan: {},
      suratPPK: {},
      pegawai: {},
      skp: {}
    };
  };

  const saveDb = (data: Record<string, Record<string, any>>) => {
    try {
      if (!fs.existsSync(dataDir)) fs.mkdirSync(dataDir, { recursive: true });
      fs.writeFileSync(dbFile, JSON.stringify(data, null, 2), 'utf-8');
    } catch (e) {
      console.warn('Error writing local db file:', e);
    }
  };

  return {
    name: 'local-api-middleware',
    configureServer(server) {
      server.middlewares.use(async (req, res, next) => {
        if (!req.url?.startsWith('/api/')) {
          return next();
        }

        const url = new URL(req.url, `http://${req.headers.host}`);
        res.setHeader('Content-Type', 'application/json');
        res.setHeader('Access-Control-Allow-Origin', '*');

        if (req.method === 'OPTIONS') {
          res.statusCode = 200;
          return res.end();
        }

        if (url.pathname === '/api/status') {
          const db = getDb();
          let count = 0;
          for (const k of Object.keys(db)) {
            count += Object.keys(db[k] || {}).length;
          }
          res.statusCode = 200;
          return res.end(
            JSON.stringify({
              status: 'online',
              multiUser: true,
              database: 'local-dev',
              provider: 'Vite Local Multi-User Storage',
              totalRecords: count,
              timestamp: new Date().toISOString()
            })
          );
        }

        if (url.pathname === '/api/records') {
          const db = getDb();

          if (req.method === 'GET') {
            const moduleParam = url.searchParams.get('module');
            if (moduleParam) {
              const items = Object.values(db[moduleParam] || {});
              res.statusCode = 200;
              return res.end(JSON.stringify({ database: 'local-dev', module: moduleParam, data: items }));
            }
            const grouped: Record<string, any[]> = {};
            for (const k of Object.keys(db)) {
              grouped[k] = Object.values(db[k] || {});
            }
            res.statusCode = 200;
            return res.end(JSON.stringify({ database: 'local-dev', data: grouped }));
          }

          if (req.method === 'POST' || req.method === 'PUT') {
            let body = '';
            req.on('data', chunk => { body += chunk; });
            req.on('end', () => {
              try {
                const parsed = JSON.parse(body || '{}');
                const { module, record, action, records } = parsed;

                if (action === 'bulk' && Array.isArray(records) && module) {
                  if (!db[module]) db[module] = {};
                  records.forEach((r: any) => {
                    if (r?.id) db[module][r.id] = r;
                  });
                  saveDb(db);
                  res.statusCode = 200;
                  return res.end(JSON.stringify({ success: true, count: records.length }));
                }

                if (module && record?.id) {
                  if (!db[module]) db[module] = {};
                  db[module][record.id] = record;
                  saveDb(db);
                  res.statusCode = 200;
                  return res.end(JSON.stringify({ success: true, record }));
                }

                res.statusCode = 400;
                return res.end(JSON.stringify({ error: 'Data tidak valid' }));
              } catch (e: any) {
                res.statusCode = 500;
                return res.end(JSON.stringify({ error: e?.message }));
              }
            });
            return;
          }

          if (req.method === 'DELETE') {
            const moduleParam = url.searchParams.get('module');
            const idParam = url.searchParams.get('id');
            if (moduleParam && idParam && db[moduleParam]) {
              delete db[moduleParam][idParam];
              saveDb(db);
              res.statusCode = 200;
              return res.end(JSON.stringify({ success: true }));
            }
            res.statusCode = 400;
            return res.end(JSON.stringify({ error: 'Parameter id dan module wajib' }));
          }
        }

        next();
      });
    }
  };
}

export default defineConfig({
  plugins: [react(), localApiPlugin()],
  // Deploy target dikunci ke Vercel (serve dari root '/')
  base: '/',
  server: {
    port: 3000,
    host: true
  }
});
