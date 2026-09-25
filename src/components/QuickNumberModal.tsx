import React, { useState } from 'react';
import { Hash, X, Copy, Check, Sparkles, ArrowRight, ShieldCheck } from 'lucide-react';
import { KODE_KLASIFIKASI_BPS } from '../data/seedData';
import { 
  generateNomorSuratUmum, 
  generateNomorSuratTugas, 
  generateNomorSK, 
  generateNomorBAST, 
  generateNomorFormPermintaan, 
  generateNomorSuratPPK 
} from '../utils/formatters';
import { ActiveTab } from '../types';

interface QuickNumberModalProps {
  isOpen: boolean;
  onClose: () => void;
  counts: {
    suratUmum: number;
    suratTugas: number;
    skKegiatan: number;
    bast: number;
    formPermintaan: number;
    suratPPK: number;
  };
  onNavigateToTab: (tab: ActiveTab) => void;
}

export const QuickNumberModal: React.FC<QuickNumberModalProps> = ({
  isOpen,
  onClose,
  counts,
  onNavigateToTab
}) => {
  if (!isOpen) return null;

  const [kategori, setKategori] = useState<'suratUmum' | 'suratTugas' | 'skKegiatan' | 'bast' | 'formPermintaan' | 'suratPPK'>('suratUmum');
  const [kodeKlasifikasi, setKodeKlasifikasi] = useState('PR.710');
  const [customNomor, setCustomNomor] = useState('');
  const [copied, setCopied] = useState(false);

  const tahun = new Date().getFullYear();

  // Compute default next number
  let defaultCount = counts.suratUmum;
  if (kategori === 'suratTugas') defaultCount = counts.suratTugas;
  if (kategori === 'skKegiatan') defaultCount = counts.skKegiatan;
  if (kategori === 'bast') defaultCount = counts.bast;
  if (kategori === 'formPermintaan') defaultCount = counts.formPermintaan;
  if (kategori === 'suratPPK') defaultCount = counts.suratPPK;

  const activeNomor = customNomor.trim() ? customNomor.trim() : defaultCount + 1;

  let nextNumber = '';
  let targetTab: ActiveTab = 'surat-umum';

  if (kategori === 'suratUmum') {
    nextNumber = generateNomorSuratUmum(activeNomor, kodeKlasifikasi, tahun);
    targetTab = 'surat-umum';
  } else if (kategori === 'suratTugas') {
    nextNumber = generateNomorSuratTugas(activeNomor, kodeKlasifikasi, tahun);
    targetTab = 'surat-tugas';
  } else if (kategori === 'skKegiatan') {
    nextNumber = generateNomorSK(activeNomor, tahun);
    targetTab = 'sk-kegiatan';
  } else if (kategori === 'bast') {
    nextNumber = generateNomorBAST(activeNomor, kodeKlasifikasi, tahun);
    targetTab = 'bast';
  } else if (kategori === 'formPermintaan') {
    nextNumber = generateNomorFormPermintaan(activeNomor, tahun);
    targetTab = 'form-permintaan';
  } else if (kategori === 'suratPPK') {
    nextNumber = generateNomorSuratPPK(activeNomor, 'PL.300', tahun);
    targetTab = 'surat-ppk';
  }

  const handleCopy = () => {
    navigator.clipboard.writeText(nextNumber);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleGoToModule = () => {
    onClose();
    onNavigateToTab(targetTab);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-900/60 backdrop-blur-xs animate-fadeIn">
      <div className="bg-white rounded-3xl max-w-lg w-full p-5 sm:p-8 shadow-2xl border border-slate-200 max-h-[90vh] overflow-y-auto">
        
        <div className="flex items-center justify-between pb-3 sm:pb-4 mb-3 sm:mb-4 border-b border-slate-100">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-sky-50 border border-sky-100 flex items-center justify-center text-sky-600 shrink-0">
              <Hash className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-black text-slate-900">Ambil Nomor Surat Instan</h3>
              <p className="text-[11px] sm:text-xs text-slate-500">Generator nomor urut resmi BPS 7301 Tahun {tahun}</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-slate-600 p-2 rounded-xl hover:bg-slate-100"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="space-y-4">
          
          {/* Pilih Kategori Surat */}
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1.5">
              Pilih Jenis Naskah Dinas
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs font-semibold">
              {[
                { id: 'suratUmum', label: 'Surat Umum' },
                { id: 'suratTugas', label: 'Surat Tugas' },
                { id: 'skKegiatan', label: 'SK Kegiatan' },
                { id: 'bast', label: 'BAST' },
                { id: 'formPermintaan', label: 'Form Permintaan' },
                { id: 'suratPPK', label: 'Surat PPK' },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => setKategori(item.id as typeof kategori)}
                  className={`p-2 sm:p-2.5 rounded-xl border text-center text-xs transition-all ${
                    kategori === item.id
                      ? 'bg-sky-600 text-white border-sky-600 shadow-xs font-bold'
                      : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          {/* Nomor Urut (Auto / Sisip) */}
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">
              Nomor Urut <span className="text-[10px] text-slate-400 font-normal">(bisa diisi manual / disisip misal 20.1)</span>
            </label>
            <input
              type="text"
              placeholder={`Otomatis nomor berikutnya: ${defaultCount + 1}`}
              value={customNomor}
              onChange={(e) => setCustomNomor(e.target.value)}
              className="w-full px-3 py-2 border border-slate-200 rounded-xl text-xs sm:text-sm font-mono focus:ring-2 focus:ring-sky-500 focus:outline-hidden"
            />
          </div>

          {/* Klasifikasi (if applicable) */}
          {kategori !== 'skKegiatan' && kategori !== 'formPermintaan' && (
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Kode Klasifikasi Arsip
              </label>
              <select
                value={kodeKlasifikasi}
                onChange={(e) => setKodeKlasifikasi(e.target.value)}
                className="w-full px-3 py-2 border border-slate-200 rounded-xl text-xs sm:text-sm font-medium focus:ring-2 focus:ring-sky-500 focus:outline-hidden"
              >
                {KODE_KLASIFIKASI_BPS.map((k) => (
                  <option key={k.kode} value={k.kode}>
                    {k.kode} - {k.kategori}: {k.uraian}
                  </option>
                ))}
              </select>
            </div>
          )}

          {/* Generated Number Box */}
          <div className="bg-gradient-to-br from-sky-50 via-blue-50 to-indigo-50 border-2 border-sky-200 p-4 sm:p-5 rounded-2xl text-center relative overflow-hidden">
            <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-sky-700 block mb-1">
              Nomor Surat Yang Diterbitkan
            </span>
            <div className="text-base sm:text-2xl font-mono font-black text-slate-900 tracking-tight my-2 break-all">
              {nextNumber}
            </div>
            
            <button
              onClick={handleCopy}
              className={`w-full sm:w-auto mt-2 inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm shadow-md transition-all active:scale-95 ${
                copied
                  ? 'bg-emerald-600 text-white'
                  : 'bg-sky-600 hover:bg-sky-500 text-white'
              }`}
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4" />
                  <span>Berhasil Disalin ke Clipboard!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4" />
                  <span>Salin Nomor Surat</span>
                </>
              )}
            </button>
          </div>

          {/* Direct module link button */}
          <button
            onClick={handleGoToModule}
            className="w-full py-3 px-4 rounded-xl border border-slate-200 hover:bg-slate-50 text-slate-700 font-bold text-xs flex items-center justify-center gap-2 transition-colors"
          >
            <span>Buka Modul & Catat Detail Surat Lengkap</span>
            <ArrowRight className="w-4 h-4 text-slate-400" />
          </button>

          {/* Notice info */}
          <div className="flex items-start gap-2 text-[11px] text-slate-500 bg-slate-50 p-3 rounded-xl border border-slate-100">
            <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
            <p>
              Nomor surat mengikuti kaidah tata naskah dinas resmi BPS RI Perka BPS No. 12 Tahun 2021 dan Kepka No. 7301 Tahun 2026.
            </p>
          </div>

        </div>

      </div>
    </div>
  );
};
