import React, { useState, useEffect } from 'react';
import { 
  X, 
  Cloud, 
  RefreshCw, 
  CheckCircle2, 
  AlertCircle, 
  ExternalLink, 
  Link2, 
  ArrowDownCircle, 
  FileSpreadsheet,
  Info
} from 'lucide-react';
import { getGasUrl, setGasUrl, testGasConnection, fetchAllFromGas } from '../utils/gasSync';

interface SyncModalProps {
  isOpen: boolean;
  onClose: () => void;
  onDataSynced: (data: any) => void;
}

export const SyncModal: React.FC<SyncModalProps> = ({
  isOpen,
  onClose,
  onDataSynced
}) => {
  const [url, setUrl] = useState('');
  const [isTesting, setIsTesting] = useState(false);
  const [isSyncing, setIsSyncing] = useState(false);
  const [testResult, setTestResult] = useState<{ status: 'idle' | 'success' | 'error'; message: string }>({
    status: 'idle',
    message: ''
  });
  const [syncStatus, setSyncStatus] = useState<string | null>(null);

  useEffect(() => {
    if (isOpen) {
      setUrl(getGasUrl());
      setTestResult({ status: 'idle', message: '' });
      setSyncStatus(null);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSaveUrl = () => {
    setGasUrl(url);
    setTestResult({ status: 'success', message: 'URL berhasil disimpan.' });
  };

  const handleTestConnection = async () => {
    setIsTesting(true);
    setTestResult({ status: 'idle', message: '' });
    const res = await testGasConnection(url);
    setIsTesting(false);
    if (res.status === 'success') {
      setGasUrl(url);
      setTestResult({ status: 'success', message: res.message || 'Koneksi ke Google Apps Script berhasil!' });
    } else {
      setTestResult({ status: 'error', message: res.message });
    }
  };

  const handlePullData = async () => {
    if (!url.trim()) {
      setTestResult({ status: 'error', message: 'Masukkan URL Web App terlebih dahulu.' });
      return;
    }
    setIsSyncing(true);
    setSyncStatus('Sedang menarik seluruh data dari 7 Google Sheets...');
    const res = await fetchAllFromGas(url);
    setIsSyncing(false);

    if (res.status === 'success' && res.data) {
      setGasUrl(url);
      setSyncStatus(`Sinkronisasi berhasil! Data surat berhasil diperbarui.`);
      onDataSynced(res.data);
      setTimeout(() => {
        onClose();
      }, 1500);
    } else {
      setTestResult({ status: 'error', message: res.message || 'Gagal sinkronisasi data.' });
      setSyncStatus(null);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-xs">
      <div className="relative w-full max-w-xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        
        {/* Header Modal */}
        <div className="bg-gradient-to-r from-sky-900 via-blue-900 to-indigo-900 text-white p-5 sm:p-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-sky-300">
                <Cloud className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-black tracking-tight text-white">
                  Koneksi Google Apps Script
                </h3>
                <p className="text-xs text-sky-200 font-medium">
                  Hubungkan portal PUSAT 7301 dengan Google Sheets secara langsung
                </p>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-2 text-white/70 hover:text-white hover:bg-white/10 rounded-xl transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="p-5 sm:p-6 space-y-4 text-xs sm:text-sm">
          
          <div className="bg-sky-50 border border-sky-100 rounded-2xl p-3.5 flex items-start gap-2.5 text-sky-950">
            <Info className="w-4 h-4 text-sky-600 shrink-0 mt-0.5" />
            <p className="text-xs leading-relaxed text-sky-800">
              Skrip Google Apps Script (`Code.gs`) bertindak sebagai jembatan API untuk membaca dan menulis penomoran surat ke 7 Google Sheets resmi BPS Kab. Kepulauan Selayar.
            </p>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
              URL Web App Google Apps Script
            </label>
            <div className="relative">
              <Link2 className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input
                type="url"
                placeholder="https://script.google.com/macros/s/AKfycb.../exec"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                className="w-full pl-10 pr-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm font-mono focus:outline-hidden focus:ring-2 focus:ring-sky-500 transition-all"
              />
            </div>
          </div>

          {/* Test Status Alert */}
          {testResult.status === 'success' && (
            <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-xl p-3 flex items-center gap-2 text-xs font-semibold">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>{testResult.message}</span>
            </div>
          )}

          {testResult.status === 'error' && (
            <div className="bg-rose-50 border border-rose-200 text-rose-800 rounded-xl p-3 flex items-center gap-2 text-xs font-semibold">
              <AlertCircle className="w-4 h-4 text-rose-600 shrink-0" />
              <span>{testResult.message}</span>
            </div>
          )}

          {syncStatus && (
            <div className="bg-sky-50 border border-sky-200 text-sky-800 rounded-xl p-3 flex items-center gap-2 text-xs font-semibold">
              <RefreshCw className="w-4 h-4 text-sky-600 animate-spin shrink-0" />
              <span>{syncStatus}</span>
            </div>
          )}

          {/* Buttons */}
          <div className="flex flex-wrap items-center gap-2 pt-2">
            <button
              onClick={handleTestConnection}
              disabled={isTesting || !url.trim()}
              className="flex-1 py-2.5 px-4 bg-slate-100 hover:bg-slate-200 text-slate-800 rounded-xl font-bold text-xs flex items-center justify-center gap-1.5 transition-all disabled:opacity-50"
            >
              <RefreshCw className={`w-3.5 h-3.5 ${isTesting ? 'animate-spin' : ''}`} />
              <span>{isTesting ? 'Menguji...' : 'Uji Koneksi'}</span>
            </button>

            <button
              onClick={handlePullData}
              disabled={isSyncing || !url.trim()}
              className="flex-1 py-2.5 px-4 bg-sky-600 hover:bg-sky-500 text-white rounded-xl font-bold text-xs flex items-center justify-center gap-1.5 shadow-xs transition-all disabled:opacity-50 active:scale-95"
            >
              <ArrowDownCircle className={`w-3.5 h-3.5 ${isSyncing ? 'animate-spin' : ''}`} />
              <span>{isSyncing ? 'Menarik...' : 'Tarik Data Sheet'}</span>
            </button>
          </div>

          {/* Panduan Code.gs */}
          <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
            <span className="flex items-center gap-1">
              <FileSpreadsheet className="w-3.5 h-3.5 text-emerald-600" />
              File skrip: <code className="font-mono text-slate-700 bg-slate-100 px-1 py-0.5 rounded">google-apps-script/Code.gs</code>
            </span>
            <button
              onClick={() => {
                alert('Silakan buka file "google-apps-script/README.md" pada proyek ini untuk langkah deployment Apps Script.');
              }}
              className="text-sky-600 hover:underline font-bold flex items-center gap-0.5"
            >
              <span>Petunjuk Setup</span>
              <ExternalLink className="w-3 h-3" />
            </button>
          </div>

        </div>

      </div>
    </div>
  );
};
