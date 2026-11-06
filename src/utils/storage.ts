import {
  Pegawai,
  SuratUmum,
  SuratTugas,
  SKKegiatan,
  BAST,
  FormPermintaan,
  SuratPPK,
  SKPItem
} from '../types';
import {
  INITIAL_PEGAWAI,
  INITIAL_SURAT_UMUM,
  INITIAL_SURAT_TUGAS,
  INITIAL_SK_KEGIATAN,
  INITIAL_BAST,
  INITIAL_FORM_PERMINTAAN,
  INITIAL_SURAT_PPK,
  INITIAL_SKP
} from '../data/seedData';

const CURRENT_VERSION = 'v4';
const LEGACY_VERSIONS = ['v3'];

export const STORAGE_KEYS = {
  PEGAWAI: `pusat7301_${CURRENT_VERSION}_pegawai`,
  SURAT_UMUM: `pusat7301_${CURRENT_VERSION}_surat_umum`,
  SURAT_TUGAS: `pusat7301_${CURRENT_VERSION}_surat_tugas`,
  SK_KEGIATAN: `pusat7301_${CURRENT_VERSION}_sk_kegiatan`,
  BAST: `pusat7301_${CURRENT_VERSION}_bast`,
  FORM_PERMINTAAN: `pusat7301_${CURRENT_VERSION}_form_permintaan`,
  SURAT_PPK: `pusat7301_${CURRENT_VERSION}_surat_ppk`,
  SKP: `pusat7301_${CURRENT_VERSION}_skp`,
};

const legacyKey = (key: string): string => {
  for (const v of LEGACY_VERSIONS) {
    if (key.includes(CURRENT_VERSION)) {
      const lv = key.replace(CURRENT_VERSION, v);
      if (localStorage.getItem(lv)) return lv;
    }
  }
  return key;
};

export const isQuotaError = (e: unknown): boolean =>
  e instanceof DOMException && (e.name === 'QuotaExceededError' || e.name === 'NS_ERROR_DOM_QUOTA_REACHED');

export const getStoredData = <T>(key: string, initialData: T): T => {
  try {
    let item = localStorage.getItem(key);
    if (!item) {
      // migrasi otomatis dari versi lama
      const lv = legacyKey(key);
      item = localStorage.getItem(lv);
      if (item) {
        try {
          const parsed = JSON.parse(item);
          if (Array.isArray(parsed) || (parsed && typeof parsed === 'object')) {
            localStorage.setItem(key, JSON.stringify(parsed));
            return parsed as T;
          }
        } catch {
          /* abaikan, pakai initial */
        }
      }
      try {
        localStorage.setItem(key, JSON.stringify(initialData));
      } catch {
        /* mode privat: tetap kembalikan initial */
      }
      return initialData;
    }
    const parsed = JSON.parse(item);
    // validasi bentuk: data list harus array
    if (Array.isArray(initialData) && !Array.isArray(parsed)) {
      try {
        localStorage.setItem(key, JSON.stringify(initialData));
      } catch { /* abaikan */ }
      return initialData;
    }
    return parsed as T;
  } catch (error) {
    console.error(`Error loading ${key} from localStorage:`, error);
    try {
      localStorage.setItem(`${key}__corrupt_backup`, localStorage.getItem(key) ?? '');
    } catch { /* abaikan */ }
    return initialData;
  }
};

export const saveStoredData = <T>(key: string, data: T): boolean => {
  try {
    localStorage.setItem(key, JSON.stringify(data));
    return true;
  } catch (error) {
    console.error(`Error saving ${key} to localStorage:`, error);
    if (isQuotaError(error)) {
      alert('Penyimpanan penuh: data gagal disimpan. Hapus data lama atau backup ke CSV/JSON lalu reset.');
    }
    return false;
  }
};

export const loadAllState = () => {
  return {
    pegawai: getStoredData<Pegawai[]>(STORAGE_KEYS.PEGAWAI, INITIAL_PEGAWAI),
    suratUmum: getStoredData<SuratUmum[]>(STORAGE_KEYS.SURAT_UMUM, INITIAL_SURAT_UMUM),
    suratTugas: getStoredData<SuratTugas[]>(STORAGE_KEYS.SURAT_TUGAS, INITIAL_SURAT_TUGAS),
    skKegiatan: getStoredData<SKKegiatan[]>(STORAGE_KEYS.SK_KEGIATAN, INITIAL_SK_KEGIATAN),
    bast: getStoredData<BAST[]>(STORAGE_KEYS.BAST, INITIAL_BAST),
    formPermintaan: getStoredData<FormPermintaan[]>(STORAGE_KEYS.FORM_PERMINTAAN, INITIAL_FORM_PERMINTAAN),
    suratPPK: getStoredData<SuratPPK[]>(STORAGE_KEYS.SURAT_PPK, INITIAL_SURAT_PPK),
    skp: getStoredData<SKPItem[]>(STORAGE_KEYS.SKP, INITIAL_SKP),
  };
};

export const resetAllData = () => {
  try {
    // backup otomatis sebelum reset
    const backup: Record<string, string | null> = {};
    Object.values(STORAGE_KEYS).forEach((k) => { backup[k] = localStorage.getItem(k); });
    localStorage.setItem(
      `pusat7301_${CURRENT_VERSION}_backup_before_reset`,
      JSON.stringify({ at: new Date().toISOString(), backup })
    );
    localStorage.setItem(STORAGE_KEYS.PEGAWAI, JSON.stringify(INITIAL_PEGAWAI));
    localStorage.setItem(STORAGE_KEYS.SURAT_UMUM, JSON.stringify(INITIAL_SURAT_UMUM));
    localStorage.setItem(STORAGE_KEYS.SURAT_TUGAS, JSON.stringify(INITIAL_SURAT_TUGAS));
    localStorage.setItem(STORAGE_KEYS.SK_KEGIATAN, JSON.stringify(INITIAL_SK_KEGIATAN));
    localStorage.setItem(STORAGE_KEYS.BAST, JSON.stringify(INITIAL_BAST));
    localStorage.setItem(STORAGE_KEYS.FORM_PERMINTAAN, JSON.stringify(INITIAL_FORM_PERMINTAAN));
    localStorage.setItem(STORAGE_KEYS.SURAT_PPK, JSON.stringify(INITIAL_SURAT_PPK));
    localStorage.setItem(STORAGE_KEYS.SKP, JSON.stringify(INITIAL_SKP));
  } catch (error) {
    console.error('Error resetAllData:', error);
    throw error;
  }
};

export const exportDataAsJSON = (): boolean => {
  try {
    const data = loadAllState();
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `backup_pusat7301_${new Date().toISOString().slice(0, 10)}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    return true;
  } catch (error) {
    console.error('exportDataAsJSON failed:', error);
    return false;
  }
};

export const exportTableToCSV = (filename: string, rows: Record<string, unknown>[]): boolean => {
  if (!rows || !rows.length) {
    alert('Tidak ada data untuk diekspor.');
    return false;
  }
  try {
    const separator = ',';
    const keys = Object.keys(rows[0]);
    const csvContent =
      keys.join(separator) +
      '\n' +
      rows
        .map(row => {
          return keys
            .map(k => {
              const rawVal = row[k];
              let cellStr = rawVal === null || rawVal === undefined ? '' : String(rawVal);
              if (typeof rawVal === 'object') cellStr = JSON.stringify(rawVal);
              cellStr = cellStr.replace(/"/g, '""').replace(/\r/g, ' ');
              if (cellStr.search(/("|,|\n)/g) >= 0) {
                cellStr = `"${cellStr}"`;
              }
              return cellStr;
            })
            .join(separator);
        })
        .join('\n');

    const blob = new Blob(['\uFEFF' + csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.setAttribute('download', `${filename}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    return true;
  } catch (error) {
    console.error('exportTableToCSV failed:', error);
    return false;
  }
};
