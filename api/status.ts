import type { VercelRequest, VercelResponse } from '@vercel/node';
import { neon } from '@neondatabase/serverless';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  const dbUrl =
    process.env.POSTGRES_URL ||
    process.env.DATABASE_URL ||
    process.env.POSTGRES_PRISMA_URL ||
    process.env.POSTGRES_URL_NON_POOLING;

  if (!dbUrl) {
    return res.status(200).json({
      status: 'online',
      multiUser: false,
      database: 'standalone',
      message: 'Database Vercel Postgres belum dikonfigurasi pada environment variable POSTGRES_URL'
    });
  }

  try {
    const sql = neon(dbUrl);
    const countResult = await sql`
      SELECT COUNT(*) as count FROM information_schema.tables 
      WHERE table_name = 'pusat_records';
    `;
    const tableExists = Number(countResult[0]?.count) > 0;
    let totalRecords = 0;
    if (tableExists) {
      const recordsCount = await sql`SELECT COUNT(*) as total FROM pusat_records;`;
      totalRecords = Number(recordsCount[0]?.total || 0);
    }

    return res.status(200).json({
      status: 'online',
      multiUser: true,
      database: 'vercel-postgres',
      provider: 'Neon Serverless Postgres',
      tableExists,
      totalRecords,
      timestamp: new Date().toISOString()
    });
  } catch (error: any) {
    return res.status(200).json({
      status: 'degraded',
      multiUser: false,
      database: 'error',
      error: error?.message || String(error)
    });
  }
}
