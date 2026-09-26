const GAS_URL_STORAGE_KEY = 'pusat7301_gas_url';

export const getGasUrl = (): string => {
  return localStorage.getItem(GAS_URL_STORAGE_KEY) || '';
};

export const setGasUrl = (url: string): void => {
  localStorage.setItem(GAS_URL_STORAGE_KEY, url.trim());
};

export interface GasPingResponse {
  status: 'success' | 'error';
  message: string;
  timestamp?: string;
}

export interface GasAllDataResponse {
  status: 'success' | 'error';
  message?: string;
  timestamp?: string;
  counts?: Record<string, number>;
  data?: {
    suratUmum: any[];
    suratTugas: any[];
    skKegiatan: any[];
    bast: any[];
    formPermintaan: any[];
    suratPPK: any[];
    pegawai: any[];
  };
}

export const testGasConnection = async (url: string): Promise<GasPingResponse> => {
  try {
    const cleanUrl = url.trim();
    if (!cleanUrl) {
      return { status: 'error', message: 'URL Web App Google Apps Script belum diisi.' };
    }

    const testUrl = `${cleanUrl}${cleanUrl.includes('?') ? '&' : '?'}action=ping`;
    const res = await fetch(testUrl, { method: 'GET', mode: 'cors' });
    if (!res.ok) {
      throw new Error(`HTTP Error: ${res.status}`);
    }
    const json = await res.json();
    return json;
  } catch (err: any) {
    return {
      status: 'error',
      message: `Gagal terhubung ke Google Apps Script: ${err.message || 'Periksa URL dan akses penerapan Web App'}`
    };
  }
};

export const fetchAllFromGas = async (url: string): Promise<GasAllDataResponse> => {
  try {
    const cleanUrl = url.trim();
    const fetchUrl = `${cleanUrl}${cleanUrl.includes('?') ? '&' : '?'}action=getAll`;
    const res = await fetch(fetchUrl, { method: 'GET', mode: 'cors' });
    if (!res.ok) {
      throw new Error(`HTTP Error: ${res.status}`);
    }
    const json = await res.json();
    return json;
  } catch (err: any) {
    return {
      status: 'error',
      message: `Gagal mengambil data dari Google Apps Script: ${err.message}`
    };
  }
};

export const postSuratToGas = async (
  url: string,
  moduleName: string,
  data: any
): Promise<{ status: string; message: string }> => {
  try {
    const cleanUrl = url.trim();
    const res = await fetch(cleanUrl, {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'text/plain;charset=utf-8' // GAS prefers text/plain for CORS preflight avoidance
      },
      body: JSON.stringify({
        action: 'addSurat',
        module: moduleName,
        data: data
      })
    });
    const json = await res.json();
    return json;
  } catch (err: any) {
    return {
      status: 'error',
      message: `Gagal mengirim ke Google Apps Script: ${err.message}`
    };
  }
};
