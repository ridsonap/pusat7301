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
  const [copied, setCopied] = useState(false);

  const tahun = new Date().getFullYear();

  // Compute next number
  let nextNumber = '';
  let targetTab: ActiveTab = 'surat-umum';

  if (kategori === 'suratUmum') {
    nextNumber = generateNomorSuratUmum(counts.suratUmum + 1, kodeKlasifikasi, tahun);
    targetTab = 'surat-umum';
  } else if (kategori === 'suratTugas') {
    nextNumber = generateNomorSuratTugas(counts.suratTugas + 1, kodeKlasifikasi, tahun);
    targetTab = 'surat-tugas';
  } else if (kategori === 'skKegiatan') {
    nextNumber = generateNomorSK(counts.skKegiatan + 1, tahun);
    targetTab = 'sk-kegiatan';
  } else if (kategori === 'bast') {
    nextNumber = generateNomorBAST(counts.bast + 1, kodeKlasifikasi, tahun);
    targetTab = 'bast';
  } else if (kategori === 'formPermintaan') {
    nextNumber = generateNomorFormPermintaan(counts.formPermintaan + 1, tahun);
    targetTab = 'form-permintaan';
  } else if (kategori === 'suratPPK') {
    nextNumber = generateNomorSuratPPK(counts.suratPPK + 1, 'PL.300', tahun);
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
              Nomor Surat Berikutnya Yang Tersedia
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

          {/* Action button to open full form */}
          <div className="pt-2 flex flex-col sm:flex-row justify-between items-center gap-1.5 text-xs text-center sm:text-left">
            <span className="text-slate-400">
              Ingin langsung mengisi rincian surat?
            </span>
            <button
              onClick={handleGoToModule}
              className="font-bold text-sky-600 hover:text-sky-700 flex items-center gap-1 group"
            >
              <span>
                Buka Menu {
                  kategori === 'suratUmum' ? 'Surat Umum' :
                  kategori === 'suratTugas' ? 'Surat Tugas' :
                  kategori === 'skKegiatan' ? 'SK Kegiatan' :
                  kategori === 'bast' ? 'BAST' :
                  kategori === 'formPermintaan' ? 'Form Permintaan' : 'Surat PPK'
                }
              </span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

        </div>

      </div>
    </div>
  );
};
