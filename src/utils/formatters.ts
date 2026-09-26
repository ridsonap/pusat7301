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
  const s = String(nomorUrut).trim();
  const padded = /^\d+$/.test(s) ? s.padStart(3, '0') : s;
  return `${padded} TAHUN ${tahun}`;
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

export const compareNomorUrut = (a: number | string, b: number | string): number => {
  return String(a).localeCompare(String(b), undefined, { numeric: true, sensitivity: 'base' });
};

export const compareNomorUrutDesc = (a: number | string, b: number | string): number => {
  return String(b).localeCompare(String(a), undefined, { numeric: true, sensitivity: 'base' });
};

export const computeNextNomorUrut = (items: { nomorUrut: number | string }[]): number => {
  const maxNo = items.reduce((max, item) => {
    const val = parseFloat(String(item.nomorUrut));
    return (!isNaN(val) && val > max) ? Math.floor(val) : max;
  }, 0);
  return maxNo + 1;
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

