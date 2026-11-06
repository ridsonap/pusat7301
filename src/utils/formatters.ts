export const formatTanggalIndonesia = (dateString?: string): string => {
  if (!dateString) return '-';
  // If already in text format (e.g. "2 Januari 2026"), return as is
  if (/[a-zA-Z]/.test(dateString) && dateString.includes(' ')) {
    return dateString;
  }
  try {
    const d = new Date(dateString);
    if (isNaN(d.getTime())) return dateString;
    return new Intl.DateTimeFormat('id-ID', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    }).format(d);
  } catch {
    return dateString;
  }
};

const BULAN_ID_MAP: Record<string, string> = {
  jan: '01', januari: '01', januiari: '01', januarei: '01',
  feb: '02', februari: '02',
  mar: '03', maret: '03',
  apr: '04', april: '04',
  mei: '05', may: '05',
  jun: '06', juni: '06',
  jul: '07', juli: '07',
  agu: '08', agust: '08', agustus: '08',
  sep: '09', sept: '09', september: '09',
  okt: '10', oktober: '10',
  nov: '11', november: '11',
  des: '12', desember: '12',
};

export const parseTanggalToInputFormat = (val?: string): string => {
  const today = new Date().toISOString().slice(0, 10);
  if (!val || typeof val !== 'string') return today;
  const trimmed = val.trim();
  if (/^\d{4}-\d{2}-\d{2}$/.test(trimmed)) {
    return trimmed;
  }

  // Cek format tanggal teks Indonesia: "29 Mei 2026" atau "2 Jan 2026"
  const m = trimmed.match(/^(\d{1,2})\s+([a-zA-Z]+)\s+(\d{4})$/);
  if (m) {
    const day = m[1].padStart(2, '0');
    const monthKey = m[2].toLowerCase();
    const month = BULAN_ID_MAP[monthKey];
    const year = m[3];
    if (month) {
      return `${year}-${month}-${day}`;
    }
  }

  const d = new Date(trimmed);
  if (!isNaN(d.getTime())) {
    try {
      return d.toISOString().slice(0, 10);
    } catch {
      return today;
    }
  }

  return today;
};

export const getTahunFromTanggal = (val?: string, defaultYear: number = new Date().getFullYear()): number => {
  if (!val) return defaultYear;
  const match = String(val).match(/\b(20\d{2})\b/);
  if (match) {
    const yr = parseInt(match[1], 10);
    if (!isNaN(yr) && yr >= 2000 && yr <= 2100) return yr;
  }
  const d = new Date(val);
  if (!isNaN(d.getTime())) {
    return d.getFullYear();
  }
  return defaultYear;
};

export const formatRupiah = (val?: number): string => {
  if (val === undefined || val === null) return 'Rp 0';
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    maximumFractionDigits: 0
  }).format(val);
};

export const generateNomorSuratUmum = (nomorUrut: number | string, kodeKlasifikasi: string, tahun: number = new Date().getFullYear()): string => {
  return `B-${nomorUrut}/7301/${kodeKlasifikasi || 'PR.710'}/${tahun}`;
};

export const generateNomorSuratTugas = (nomorUrut: number | string, kodeKlasifikasi: string, tahun: number = new Date().getFullYear()): string => {
  return `B-${nomorUrut}/7301/${kodeKlasifikasi || 'VS.330'}/${tahun}`;
};

export const generateNomorSK = (nomorUrut: number | string, tahun: number = new Date().getFullYear()): string => {
  const s = String(nomorUrut ?? '').trim();
  const parts = s.split('.');
  const basePart = parts[0].padStart(3, '0');
  const formattedNo = parts.length > 1 ? `${basePart}.${parts.slice(1).join('.')}` : basePart;
  return `${formattedNo} TAHUN ${tahun}`;
};

export const generateNomorBAST = (nomorUrut: number | string, kodeKlasifikasi: string, tahun: number = new Date().getFullYear()): string => {
  return `${nomorUrut}/7301/${kodeKlasifikasi || 'PL.530'}/${tahun}`;
};

export const generateNomorFormPermintaan = (nomorUrut: number | string, tahun: number = new Date().getFullYear()): string => {
  return `B-${nomorUrut}/7301/KU.320/${tahun}`;
};

export const generateNomorSuratPPK = (nomorUrut: number | string, kodeKlasifikasi: string = 'PL.300', tahun: number = new Date().getFullYear()): string => {
  return `B-${nomorUrut}/7301/${kodeKlasifikasi}/${tahun}`;
};

export const parseNomorUrutParts = (val?: number | string): { base: number; sub: number } => {
  const s = String(val ?? '').trim();
  const parts = s.split('.');
  const base = parseInt(parts[0], 10) || 0;
  const sub = parts[1] ? (parseInt(parts[1], 10) || 0) : 0;
  return { base, sub };
};

export const compareNomorUrut = (a: number | string, b: number | string): number => {
  return String(a).localeCompare(String(b), undefined, { numeric: true, sensitivity: 'base' });
};

export const compareNomorUrutDesc = (a: number | string, b: number | string): number => {
  return String(b).localeCompare(String(a), undefined, { numeric: true, sensitivity: 'base' });
};

export const extractYearFromItem = (item: {
  tanggal?: string;
  nomorSurat?: string;
  nomorForm?: string;
  nomorSK?: string;
  nomorBAST?: string;
}): number => {
  const numStr = item.nomorSurat || item.nomorForm || item.nomorSK || item.nomorBAST || '';
  const match = numStr.match(/\b(20\d{2})\b/);
  if (match) {
    const y = parseInt(match[1], 10);
    if (!isNaN(y) && y >= 2000 && y <= 2100) return y;
  }
  if (item.tanggal) {
    return getTahunFromTanggal(item.tanggal);
  }
  return new Date().getFullYear();
};

export const computeNextNomorUrut = (
  items: Array<{
    nomorUrut: number | string;
    tanggal?: string;
    nomorSurat?: string;
    nomorForm?: string;
    nomorSK?: string;
    nomorBAST?: string;
  }>,
  targetDateOrYear?: string | number
): number | string => {
  let targetDate: string | undefined = undefined;
  let targetYear = new Date().getFullYear();

  if (typeof targetDateOrYear === 'number') {
    targetYear = targetDateOrYear;
  } else if (typeof targetDateOrYear === 'string') {
    const trimmed = targetDateOrYear.trim();
    if (/^\d{4}$/.test(trimmed)) {
      targetYear = parseInt(trimmed, 10);
    } else if (trimmed) {
      targetDate = parseTanggalToInputFormat(trimmed);
      targetYear = getTahunFromTanggal(targetDate, targetYear);
    }
  }

  // Filter semua item yang berasal dari tahun kalender yang sama
  const yearItems = items.filter((item) => extractYearFromItem(item) === targetYear);
  if (yearItems.length === 0) {
    return 1;
  }

  const maxBase = yearItems.reduce((max, item) => {
    const { base } = parseNomorUrutParts(item.nomorUrut);
    return Math.max(max, base);
  }, 0);

  // Jika tidak ada targetDate spesifik (hanya tahun), berikan nomor urut integer berikutnya
  if (!targetDate) {
    return maxBase + 1;
  }

  // Ambil hanya item-item yang memiliki tanggal valid
  const datedItems = yearItems.filter((item) => {
    if (!item.tanggal || typeof item.tanggal !== 'string' || !item.tanggal.trim()) return false;
    const d = parseTanggalToInputFormat(item.tanggal);
    return Boolean(d && d.length === 10);
  });

  if (datedItems.length === 0) {
    return maxBase + 1;
  }

  // Cek apakah terdapat surat yang terbit SETELAH targetDate
  const futureItems = datedItems.filter((item) => {
    const d = parseTanggalToInputFormat(item.tanggal);
    return d > targetDate!;
  });

  // Jika tidak ada surat setelah targetDate, ini bukan tanggal lampau (penomoran normal berlanjut)
  if (futureItems.length === 0) {
    return maxBase + 1;
  }

  // targetDate adalah tanggal lampau (terdapat surat di tanggal sesudahnya).
  // Sistem otomatis menyisipkan nomor (misal 201.1, 201.2 atau 257.2)
  const priorItems = datedItems.filter((item) => {
    const d = parseTanggalToInputFormat(item.tanggal);
    return d <= targetDate!;
  });

  // Jika targetDate lebih lampau dari surat terawal di tahun ini
  if (priorItems.length === 0) {
    const minBase = datedItems.reduce((min, item) => {
      const { base } = parseNomorUrutParts(item.nomorUrut);
      return Math.min(min, base || min);
    }, 1);
    const subs = yearItems
      .map((item) => parseNomorUrutParts(item.nomorUrut))
      .filter((p) => p.base === minBase)
      .map((p) => p.sub);
    const maxSub = subs.reduce((m, sub) => Math.max(m, sub), 0);
    return `${minBase}.${maxSub + 1}`;
  }

  // Cari anchor base tertinggi pada atau sebelum targetDate
  const anchorBase = priorItems.reduce((max, item) => {
    const { base } = parseNomorUrutParts(item.nomorUrut);
    return Math.max(max, base);
  }, 0) || 1;

  // Cari seluruh sub-nomor yang sudah pernah disisipkan pada anchor base ini di tahun yang sama
  const subs = yearItems
    .map((item) => parseNomorUrutParts(item.nomorUrut))
    .filter((p) => p.base === anchorBase)
    .map((p) => p.sub);

  const maxSub = subs.reduce((m, sub) => Math.max(m, sub), 0);
  return `${anchorBase}.${maxSub + 1}`;
};

import { KODE_KLASIFIKASI_BPS } from '../data/seedData';
import { KodeKlasifikasi } from '../types';

export const getSortedKlasifikasiList = (additionalItems?: Array<{ kodeKlasifikasi?: string }>): KodeKlasifikasi[] => {
  // If additional items provided, calculate dynamic frequency bonus
  if (!additionalItems || additionalItems.length === 0) {
    return KODE_KLASIFIKASI_BPS;
  }
  const freq: Record<string, number> = {};
  additionalItems.forEach(item => {
    if (item.kodeKlasifikasi) {
      freq[item.kodeKlasifikasi] = (freq[item.kodeKlasifikasi] || 0) + 1;
    }
  });

  return [...KODE_KLASIFIKASI_BPS].sort((a, b) => {
    const countA = freq[a.kode] || 0;
    const countB = freq[b.kode] || 0;
    if (countB !== countA) return countB - countA;
    // Default to the predefined index in KODE_KLASIFIKASI_BPS
    return 0;
  });
};

