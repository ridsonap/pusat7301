import type { SuratUmum, SuratTugas, SKKegiatan, BAST, FormPermintaan, SuratPPK, Pegawai } from '../types';
import { isValidHttpUrl } from './validation';

const GAS_URL_STORAGE_KEY = 'pusat7301_gas_url';

export const getGasUrl = (): string => {
  try {
    return localStorage.getItem(GAS_URL_STORAGE_KEY) || '';
  } catch {
    return '';
  }
};

export const setGasUrl = (url: string): void => {
  try {
    const clean = url.trim();
    if (clean && !isValidHttpUrl(clean)) throw new Error('URL tidak valid');
    localStorage.setItem(GAS_URL_STORAGE_KEY, clean);
  } catch (e) {
    console.error('setGasUrl failed:', e);
  }
};

export interface GasPingResponse {
  status: 'success' | 'error';
  message: string;
  timestamp?: string;
}

export interface GasModuleData {
  suratUmum: SuratUmum[];
  suratTugas: SuratTugas[];
  skKegiatan: SKKegiatan[];
  bast: BAST[];
  formPermintaan: FormPermintaan[];
  suratPPK: SuratPPK[];
  pegawai: Pegawai[];
}

export interface GasAllDataResponse {
  status: 'success' | 'error';
  message?: string;
  timestamp?: string;
  counts?: Record<string, number>;
  data?: Partial<GasModuleData>;
}

const fetchWithTimeout = async (url: string, init: RequestInit, ms = 15000): Promise<Response> => {
  const ctrl = new AbortController();
  const t = setTimeout(() => ctrl.abort(), ms);
  try {
    return await fetch(url, { ...init, signal: ctrl.signal });
  } finally {
    clearTimeout(t);
  }
};

const parseJsonSafe = async (res: Response): Promise<unknown> => {
  const text = await res.text();
  try {
    return JSON.parse(text);
  } catch {
    throw new Error('Respons server bukan JSON valid');
  }
};

const isGasRecord = (v: unknown): v is Record<string, unknown> =>
  !!v && typeof v === 'object' && !Array.isArray(v);

export const testGasConnection = async (url: string): Promise<GasPingResponse> => {
  try {
    const cleanUrl = url.trim();
    if (!cleanUrl) {
      return { status: 'error', message: 'URL Web App Google Apps Script belum diisi.' };
    }
    if (!isValidHttpUrl(cleanUrl)) {
      return { status: 'error', message: 'URL harus diawali http(s):// dan valid.' };
    }
    const testUrl = `${cleanUrl}${cleanUrl.includes('?') ? '&' : '?'}action=ping`;
    const res = await fetchWithTimeout(testUrl, { method: 'GET', mode: 'cors' });
    if (!res.ok) throw new Error(`HTTP Error: ${res.status}`);
    const json = (await parseJsonSafe(res)) as GasPingResponse;
    if (!isGasRecord(json) || (json.status !== 'success' && json.status !== 'error')) {
      throw new Error('Format respons ping tidak dikenal');
    }
    return json as GasPingResponse;
  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : 'Periksa URL dan akses penerapan Web App';
    return { status: 'error', message: `Gagal terhubung ke Google Apps Script: ${msg}` };
  }
};

const sanitizeList = <T>(v: unknown): T[] => (Array.isArray(v) ? (v as T[]) : []);

export const fetchAllFromGas = async (url: string): Promise<GasAllDataResponse> => {
  try {
    const cleanUrl = url.trim();
    if (!isValidHttpUrl(cleanUrl)) {
      return { status: 'error', message: 'URL Web App tidak valid.' };
    }
    const fetchUrl = `${cleanUrl}${cleanUrl.includes('?') ? '&' : '?'}action=getAll`;
    const res = await fetchWithTimeout(fetchUrl, { method: 'GET', mode: 'cors' });
    if (!res.ok) throw new Error(`HTTP Error: ${res.status}`);
    const json = (await parseJsonSafe(res)) as GasAllDataResponse;
    if (!isGasRecord(json) || (json.status !== 'success' && json.status !== 'error')) {
      throw new Error('Format respons getAll tidak dikenal');
    }
    if (json.status === 'success' && json.data && isGasRecord(json.data)) {
      const d = json.data as Record<string, unknown>;
      return {
        ...json,
        data: {
          suratUmum: sanitizeList<SuratUmum>(d.suratUmum),
          suratTugas: sanitizeList<SuratTugas>(d.suratTugas),
          skKegiatan: sanitizeList<SKKegiatan>(d.skKegiatan),
          bast: sanitizeList<BAST>(d.bast),
          formPermintaan: sanitizeList<FormPermintaan>(d.formPermintaan),
          suratPPK: sanitizeList<SuratPPK>(d.suratPPK),
          pegawai: sanitizeList<Pegawai>(d.pegawai),
        },
      };
    }
    return json;
  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : 'unknown error';
    return { status: 'error', message: `Gagal mengambil data dari Google Apps Script: ${msg}` };
  }
};

export const postSuratToGas = async (
  url: string,
  moduleName: string,
  data: Record<string, unknown>
): Promise<{ status: string; message: string }> => {
  try {
    const cleanUrl = url.trim();
    if (!isValidHttpUrl(cleanUrl)) {
      return { status: 'error', message: 'URL Web App tidak valid.' };
    }
    const res = await fetchWithTimeout(
      cleanUrl,
      {
        method: 'POST',
        mode: 'cors',
        headers: { 'Content-Type': 'text/plain;charset=utf-8' },
        body: JSON.stringify({ action: 'addSurat', module: moduleName, data }),
      },
      15000
    );
    const json = (await parseJsonSafe(res)) as { status: string; message: string };
    if (!isGasRecord(json)) throw new Error('Format respons addSurat tidak dikenal');
    return { status: String(json.status ?? 'error'), message: String(json.message ?? '') };
  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : 'unknown error';
    return { status: 'error', message: `Gagal mengirim ke Google Apps Script: ${msg}` };
  }
};
