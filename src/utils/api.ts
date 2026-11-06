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

export interface AppAllState {
  pegawai: Pegawai[];
  suratUmum: SuratUmum[];
  suratTugas: SuratTugas[];
  skKegiatan: SKKegiatan[];
  bast: BAST[];
  formPermintaan: FormPermintaan[];
  suratPPK: SuratPPK[];
  skp: SKPItem[];
}

export interface DbStatus {
  status: 'online' | 'degraded' | 'offline';
  multiUser: boolean;
  database: string;
  totalRecords?: number;
  lastSynced?: string;
  message?: string;
}

const syncChannel = typeof window !== 'undefined' && 'BroadcastChannel' in window
  ? new BroadcastChannel('pusat7301_multiuser')
  : null;

export const broadcastLocalChange = (module: string, action: 'add' | 'update' | 'delete', recordId: string) => {
  try {
    syncChannel?.postMessage({
      type: 'RECORD_MUTATION',
      module,
      action,
      recordId,
      timestamp: Date.now()
    });
  } catch {
    // abaikan jika browser tidak mendukung
  }
};

export const onMultiUserSync = (callback: () => void) => {
  if (!syncChannel) return () => {};
  const handler = (e: MessageEvent) => {
    if (e.data?.type === 'RECORD_MUTATION') {
      callback();
    }
  };
  syncChannel.addEventListener('message', handler);
  return () => syncChannel.removeEventListener('message', handler);
};

export async function checkServerStatus(): Promise<DbStatus> {
  try {
    const res = await fetch('/api/status', { cache: 'no-store' });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const data = await res.json();
    return {
      status: data.status || 'online',
      multiUser: data.multiUser ?? (data.database === 'vercel-postgres'),
      database: data.database || 'standalone',
      totalRecords: data.totalRecords,
      lastSynced: new Date().toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' }),
      message: data.message
    };
  } catch {
    return {
      status: 'offline',
      multiUser: false,
      database: 'local-storage',
      lastSynced: new Date().toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' })
    };
  }
}

export async function fetchRemoteRecords(): Promise<{ success: boolean; data?: Partial<AppAllState>; database?: string }> {
  try {
    const res = await fetch('/api/records', { cache: 'no-store' });
    if (!res.ok) return { success: false };
    const json = await res.json();
    if (json && json.data) {
      return { success: true, data: json.data, database: json.database };
    }
    return { success: false };
  } catch (err) {
    console.warn('Gagal memuat data dari remote API, menggunakan cache lokal:', err);
    return { success: false };
  }
}

export async function saveRecordRemote(
  module: keyof AppAllState,
  record: any,
  isEdit = false
): Promise<boolean> {
  broadcastLocalChange(module, isEdit ? 'update' : 'add', record.id);
  try {
    const method = isEdit ? 'PUT' : 'POST';
    const res = await fetch('/api/records', {
      method,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ module, record })
    });
    return res.ok;
  } catch (err) {
    console.warn('Gagal menyimpan ke server database:', err);
    return false;
  }
}

export async function deleteRecordRemote(
  module: keyof AppAllState,
  id: string
): Promise<boolean> {
  broadcastLocalChange(module, 'delete', id);
  try {
    const res = await fetch(`/api/records?module=${encodeURIComponent(module)}&id=${encodeURIComponent(id)}`, {
      method: 'DELETE'
    });
    return res.ok;
  } catch (err) {
    console.warn('Gagal menghapus dari server database:', err);
    return false;
  }
}

export async function bulkSeedRemote(module: keyof AppAllState, records: any[]): Promise<boolean> {
  try {
    const res = await fetch('/api/records', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ action: 'bulk', module, records })
    });
    return res.ok;
  } catch {
    return false;
  }
}
