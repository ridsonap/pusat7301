import React, { useState, useEffect, useRef } from 'react';
import { copyText } from '../utils/clipboard';
import { Hash, X, Copy, Check, ArrowRight } from 'lucide-react';
import { KODE_KLASIFIKASI_BPS } from '../data/seedData';
import {
  generateNomorSuratUmum,
  generateNomorSuratTugas,
  generateNomorSK,
  generateNomorBAST,
  generateNomorFormPermintaan,
  generateNomorSuratPPK,
  computeNextNomorUrut,
  getTahunFromTanggal
} from '../utils/formatters';
import { ActiveTab } from '../types';

interface QuickNumberModalProps {
  isOpen: boolean;
  onClose: () => void;
  itemsMap?: {
    suratUmum: any[];
    suratTugas: any[];
    skKegiatan: any[];
    bast: any[];
    formPermintaan: any[];
    suratPPK: any[];
  };
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
  itemsMap,
  counts,
  onNavigateToTab
}) => {
  const [kategori, setKategori] = useState<'suratUmum' | 'suratTugas' | 'skKegiatan' | 'bast' | 'formPermintaan' | 'suratPPK'>('suratUmum');
  const [tanggal, setTanggal] = useState(() => new Date().toISOString().slice(0, 10));
  const [kodeKlasifikasi, setKodeKlasifikasi] = useState('VS.330');
  const [copied, setCopied] = useState(false);
  const closeRef = useRef<HTMLButtonElement>(null);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (!isOpen) return;
    setTanggal(new Date().toISOString().slice(0, 10));
    closeRef.current?.focus();
    document.body.style.overflow = 'hidden';
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const tahun = getTahunFromTanggal(tanggal);

  // Hitung nomor urut berikutnya secara dinamis berdasarkan tahun yang dipilih
  let activeNomor = 1;
  if (itemsMap && itemsMap[kategori]) {
    activeNomor = computeNextNomorUrut(itemsMap[kategori], tahun);
  } else {
    activeNomor = (counts[kategori] || 0) + 1;
  }

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
    nextNumber = generateNomorSuratPPK(activeNomor, kodeKlasifikasi || 'PL.300', tahun);
    targetTab = 'surat-ppk';
  }

  const handleCopy = async () => {
    const ok = await copyText(nextNumber);
    setCopied(ok);
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => setCopied(false), 2500);
    if (!ok) alert('Gagal menyalin. Salin manual: ' + nextNumber);
  };

  const handleGoToModule = () => {
    onClose();
    onNavigateToTab(targetTab);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-900/40 backdrop-blur-2xs"
      onClick={onClose}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Ambil Nomor Surat Cepat"
        className="bg-white rounded-xl max-w-md w-full p-5 shadow-xl border border-slate-200 max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >

        <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-100">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-sky-50 border border-sky-100 flex items-center justify-center text-sky-700 shrink-0">
              <Hash className="w-4 h-4" aria-hidden="true" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-slate-900">Ambil Nomor Surat Cepat</h3>
              <p className="text-[11px] text-slate-500">Nomor resmi BPS 7301 Tahun {tahun}</p>
            </div>
          </div>
          <button
            type="button"
            ref={closeRef}
            onClick={onClose}
            aria-label="Tutup"
            className="text-slate-400 hover:text-slate-600 p-1 rounded-lg hover:bg-slate-100"
          >
            <X className="w-4 h-4" aria-hidden="true" />
          </button>
        </div>

        <div className="space-y-3.5">

          {/* Pilih Kategori Surat */}
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1.5">
              Pilih Jenis Naskah Dinas
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-1.5 text-xs">
              {[
                { id: 'suratUmum', label: 'Surat Umum' },
                { id: 'suratTugas', label: 'Surat Tugas' },
                { id: 'skKegiatan', label: 'SK Kegiatan' },
                { id: 'bast', label: 'BAST' },
                { id: 'formPermintaan', label: 'Form Permintaan' },
                { id: 'suratPPK', label: 'Surat PPK' },
              ].map((item) => (
                <button
                  type="button"
                  key={item.id}
                  onClick={() => setKategori(item.id as typeof kategori)}
                  className={`p-2 rounded-lg border text-center text-xs transition-colors ${
                    kategori === item.id
                      ? 'bg-sky-600 text-white border-sky-600 font-semibold shadow-2xs'
                      : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          {/* Tanggal & Penentuan Nomor oleh Sistem */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            <div>
              <label htmlFor="qn-tanggal" className="block text-xs font-semibold text-slate-700 mb-1">
                Tanggal Surat
              </label>
              <input
                id="qn-tanggal"
                type="date"
                value={tanggal}
                onChange={(e) => setTanggal(e.target.value)}
                className="w-full px-2.5 py-1.5 border border-slate-200 rounded-lg text-xs font-medium focus:outline-hidden focus:ring-1 focus:ring-sky-500 bg-white"
                required
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Nomor Urut Sistem
              </label>
              <div className="flex items-center justify-between px-2.5 py-1.5 bg-slate-50 border border-slate-200 rounded-lg text-xs font-mono text-slate-700">
                <span className="font-bold text-sky-700">#{activeNomor}</span>
                <span className="text-[10px] text-slate-500 font-sans">
                  Tahun {tahun}
                </span>
              </div>
            </div>
          </div>

          {/* Klasifikasi (if applicable) */}
          {kategori !== 'skKegiatan' && kategori !== 'formPermintaan' && (
            <div>
              <label htmlFor="qn-klas" className="block text-xs font-semibold text-slate-700 mb-1">
                Kode Klasifikasi Arsip
              </label>
              <select
                id="qn-klas"
                value={kodeKlasifikasi}
                onChange={(e) => setKodeKlasifikasi(e.target.value)}
                className="w-full px-2.5 py-1.5 border border-slate-200 rounded-lg text-xs font-medium focus:outline-hidden focus:ring-1 focus:ring-sky-500"
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
          <div className="bg-slate-50 border border-slate-200 p-4 rounded-xl text-center">
            <span className="text-[10px] font-semibold uppercase tracking-wider text-slate-500 block mb-1">
              Nomor Surat Otomatis
            </span>
            <div className="text-base sm:text-lg font-mono font-bold text-slate-900 tracking-tight my-1 break-all">
              {nextNumber}
            </div>

            <button
              type="button"
              onClick={handleCopy}
              className={`w-full mt-2 inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-lg font-semibold text-xs shadow-xs transition-colors ${
                copied
                  ? 'bg-emerald-600 text-white'
                  : 'bg-sky-600 hover:bg-sky-700 text-white'
              }`}
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5" aria-hidden="true" />
                  <span>Tersalin ke clipboard</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" aria-hidden="true" />
                  <span>Salin Nomor Surat</span>
                </>
              )}
            </button>
          </div>

          {/* Tombol Aksi Bawah */}
          <div className="flex items-center justify-between pt-2 border-t border-slate-100 text-xs">
            <button
              type="button"
              onClick={handleGoToModule}
              className="text-sky-700 hover:text-sky-800 font-medium inline-flex items-center gap-1"
            >
              <span>Buka modul pencatatan</span>
              <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
            </button>

            <button
              type="button"
              onClick={onClose}
              className="px-3 py-1.5 border border-slate-200 rounded-lg text-slate-600 hover:bg-slate-50 font-medium"
            >
              Tutup
            </button>
          </div>

        </div>

      </div>
    </div>
  );
};
