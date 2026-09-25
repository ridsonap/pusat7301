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

const STORAGE_KEYS = {
  PEGAWAI: 'pusat7301_pegawai',
  SURAT_UMUM: 'pusat7301_surat_umum',
  SURAT_TUGAS: 'pusat7301_surat_tugas',
  SK_KEGIATAN: 'pusat7301_sk_kegiatan',
  BAST: 'pusat7301_bast',
  FORM_PERMINTAAN: 'pusat7301_form_permintaan',
  SURAT_PPK: 'pusat7301_surat_ppk',
  SKP: 'pusat7301_skp',
};

export const getStoredData = <T>(key: string, initialData: T): T => {
  try {
    const item = localStorage.getItem(key);
    if (!item) {
      localStorage.setItem(key, JSON.stringify(initialData));
      return initialData;
    }
    return JSON.parse(item);
  } catch (error) {
    console.error(`Error loading ${key} from localStorage:`, error);
    return initialData;
  }
};

export const saveStoredData = <T>(key: string, data: T): void => {
  try {
    localStorage.setItem(key, JSON.stringify(data));
  } catch (error) {
    console.error(`Error saving ${key} to localStorage:`, error);
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
  localStorage.setItem(STORAGE_KEYS.PEGAWAI, JSON.stringify(INITIAL_PEGAWAI));
  localStorage.setItem(STORAGE_KEYS.SURAT_UMUM, JSON.stringify(INITIAL_SURAT_UMUM));
  localStorage.setItem(STORAGE_KEYS.SURAT_TUGAS, JSON.stringify(INITIAL_SURAT_TUGAS));
  localStorage.setItem(STORAGE_KEYS.SK_KEGIATAN, JSON.stringify(INITIAL_SK_KEGIATAN));
  localStorage.setItem(STORAGE_KEYS.BAST, JSON.stringify(INITIAL_BAST));
  localStorage.setItem(STORAGE_KEYS.FORM_PERMINTAAN, JSON.stringify(INITIAL_FORM_PERMINTAAN));
  localStorage.setItem(STORAGE_KEYS.SURAT_PPK, JSON.stringify(INITIAL_SURAT_PPK));
  localStorage.setItem(STORAGE_KEYS.SKP, JSON.stringify(INITIAL_SKP));
};

export const exportDataAsJSON = () => {
  const data = loadAllState();
  const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `backup_pusat7301_${new Date().toISOString().slice(0, 10)}.json`;
  a.click();
  URL.revokeObjectURL(url);
};

export const exportTableToCSV = (filename: string, rows: Record<string, unknown>[]) => {
  if (!rows || !rows.length) return;
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
            cellStr = cellStr.replace(/"/g, '""');
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
};
