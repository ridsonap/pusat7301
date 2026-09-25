import React, { useState } from 'react';
import { 
  FolderClosed, 
  Mail, 
  Camera, 
  FileCheck2, 
  Send, 
  FileText, 
  ClipboardList, 
  Target, 
  Receipt, 
  Users, 
  ExternalLink, 
  Search, 
  Sparkles,
  ArrowRight,
  TrendingUp,
  FileSpreadsheet,
  CheckCircle2,
  Calendar
} from 'lucide-react';
import { ActiveTab } from '../types';
import { PORTAL_LINKS } from '../data/seedData';

interface DashboardProps {
  setActiveTab: (tab: ActiveTab) => void;
  counts: {
    suratUmum: number;
    suratTugas: number;
    skKegiatan: number;
    bast: number;
    formPermintaan: number;
    suratPPK: number;
    pegawai: number;
  };
  onGlobalSearch: (query: string) => void;
  onOpenQuickNumber: () => void;
}

export const Dashboard: React.FC<DashboardProps> = ({
  setActiveTab,
  counts,
  onGlobalSearch,
  onOpenQuickNumber
}) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      onGlobalSearch(searchQuery.trim());
    }
  };

  // Portal Cards structure matching the 3x3 layout of the Google Slide
  const portalCards = [
    // Column 1
    {
      id: 'sk-kegiatan' as ActiveTab,
      title: 'SK Kegiatan',
      subtitle: 'Surat Keputusan & Honor',
      icon: FolderClosed,
      count: counts.skKegiatan,
      sheetUrl: PORTAL_LINKS.skKegiatan,
      color: 'from-amber-500/10 to-orange-500/10 text-amber-700 border-amber-200',
      badgeColor: 'bg-amber-100 text-amber-800'
    },
    // Column 2 - Top
    {
      id: 'bast' as ActiveTab,
      title: 'BAST',
      subtitle: 'Berita Acara Serah Terima',
      icon: FileCheck2,
      count: counts.bast,
      sheetUrl: PORTAL_LINKS.bast,
      color: 'from-emerald-500/10 to-teal-500/10 text-emerald-700 border-emerald-200',
      badgeColor: 'bg-emerald-100 text-emerald-800'
    },
    // Column 3 - Top
    {
      id: 'form-permintaan' as ActiveTab,
      title: 'Form Permintaan',
      subtitle: 'Belanja Bahan & Barang',
      icon: ClipboardList,
      count: counts.formPermintaan,
      sheetUrl: PORTAL_LINKS.formPermintaan,
      color: 'from-indigo-500/10 to-violet-500/10 text-indigo-700 border-indigo-200',
      badgeColor: 'bg-indigo-100 text-indigo-800'
    },

    // Column 1 - Middle
    {
      id: 'surat-umum' as ActiveTab,
      title: 'Surat Umum',
      subtitle: 'Agenda & Penomoran Keluar',
      icon: Mail,
      count: counts.suratUmum,
      sheetUrl: PORTAL_LINKS.suratUmum,
      color: 'from-sky-500/10 to-blue-500/10 text-sky-700 border-sky-200',
      badgeColor: 'bg-sky-100 text-sky-800'
    },
    // Column 2 - Middle
    {
      id: 'surat-tugas' as ActiveTab,
      title: 'Surat Tugas',
      subtitle: 'Penugasan & Cetak Draf',
      icon: Send,
      count: counts.suratTugas,
      sheetUrl: PORTAL_LINKS.suratTugas,
      color: 'from-blue-500/10 to-cyan-500/10 text-blue-700 border-blue-200',
      badgeColor: 'bg-blue-100 text-blue-800'
    },
    // Column 3 - Middle
    {
      id: 'skp-bulanan' as ActiveTab,
      title: 'SKP Bulanan',
      subtitle: 'Penilaian Kinerja Pegawai',
      icon: Target,
      count: counts.pegawai,
      sheetUrl: PORTAL_LINKS.skpBulanan,
      color: 'from-rose-500/10 to-pink-500/10 text-rose-700 border-rose-200',
      badgeColor: 'bg-rose-100 text-rose-800'
    },

    // Column 1 - Bottom
    {
      id: 'dokumentasi' as ActiveTab,
      title: 'Dokumentasi',
      subtitle: 'Galeri & Arsip Drive',
      icon: Camera,
      count: undefined,
      sheetUrl: PORTAL_LINKS.dokumentasiDrive,
      color: 'from-purple-500/10 to-fuchsia-500/10 text-purple-700 border-purple-200',
      badgeColor: 'bg-purple-100 text-purple-800'
    },
    // Column 2 - Bottom
    {
      id: 'surat-ppk' as ActiveTab,
      title: 'Surat PPK',
      subtitle: 'SPMK, HPS, Kontrak Mitra',
      icon: FileText,
      count: counts.suratPPK,
      sheetUrl: PORTAL_LINKS.suratPPK,
      color: 'from-teal-500/10 to-emerald-500/10 text-teal-700 border-teal-200',
      badgeColor: 'bg-teal-100 text-teal-800'
    },
    // Column 3 - Bottom
    {
      id: 'spm-digital' as ActiveTab,
      title: 'SPM Digital',
      subtitle: 'Arsip Berkas Keuangan',
      icon: Receipt,
      count: undefined,
      sheetUrl: PORTAL_LINKS.spmDigitalDrive,
      color: 'from-cyan-500/10 to-sky-500/10 text-cyan-700 border-cyan-200',
      badgeColor: 'bg-cyan-100 text-cyan-800'
    },
  ];

  return (
    <div className="space-y-8 pb-12">
      
      {/* Hero Banner with Modern Gradient & Office Vibe */}
      <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-slate-900 via-sky-950 to-blue-900 text-white shadow-xl">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:16px_16px]"></div>
        
        <div className="relative px-6 py-10 sm:px-10 sm:py-12 max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-sky-200 text-xs font-semibold mb-4">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            Portal Tata Naskah Dinas & Administrasi Terpadu
          </div>
          
          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white mb-2 leading-tight">
            PUSAT <span className="text-sky-400 font-black">7301</span>
          </h2>
          <p className="text-base sm:text-lg text-sky-100/90 font-medium mb-6 max-w-2xl leading-relaxed">
            Portal Umum Satu Pintu Badan Pusat Statistik Kabupaten Kepulauan Selayar. 
            Kelola penomoran surat, surat tugas dinas, BAST, SK kegiatan, dan administrasi perkantoran secara instan, tertib, dan akurat.
          </p>

          {/* Quick Search Input */}
          <form onSubmit={handleSearchSubmit} className="flex items-center gap-2 max-w-xl">
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
              <input
                type="text"
                placeholder="Cari nomor surat, perihal, atau tujuan..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3.5 bg-white/95 text-slate-900 placeholder-slate-500 rounded-2xl text-sm font-medium focus:outline-hidden focus:ring-3 focus:ring-sky-400 shadow-md transition-all"
              />
            </div>
            <button
              type="submit"
              className="px-5 py-3.5 bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold text-sm rounded-2xl shadow-md transition-all active:scale-95"
            >
              Cari
            </button>
          </form>

        </div>

        {/* Floating Quick Stats on Right */}
        <div className="hidden lg:flex absolute right-10 bottom-8 items-center gap-4 bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-2xl">
          <div className="text-center px-3 border-r border-white/15">
            <div className="text-2xl font-black text-white">{counts.suratUmum}</div>
            <div className="text-[11px] font-medium text-sky-200">Surat Keluar</div>
          </div>
          <div className="text-center px-3 border-r border-white/15">
            <div className="text-2xl font-black text-amber-400">{counts.suratTugas}</div>
            <div className="text-[11px] font-medium text-sky-200">Surat Tugas</div>
          </div>
          <div className="text-center px-3">
            <div className="text-2xl font-black text-emerald-400">{counts.pegawai}</div>
            <div className="text-[11px] font-medium text-sky-200">Pegawai</div>
          </div>
        </div>
      </div>

      {/* Main Slide Portal Grid (Faithful reproduction of Google Slide 3x3 Layout) */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <div>
            <h3 className="text-lg font-extrabold text-slate-900 tracking-tight">
              Layanan Administrasi PUSAT 7301
            </h3>
            <p className="text-xs text-slate-500">
              Pilih modul surat atau buka lembar spreadsheet resmi yang terhubung
            </p>
          </div>

          <button
            onClick={onOpenQuickNumber}
            className="text-xs font-semibold text-sky-600 hover:text-sky-700 bg-sky-50 hover:bg-sky-100 px-3 py-1.5 rounded-lg border border-sky-200 flex items-center gap-1.5 transition-colors"
          >
            <span>+ Ambil Nomor Cepat</span>
          </button>
        </div>

        {/* 3x3 Card Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {portalCards.map((card) => {
            const Icon = card.icon;
            return (
              <div
                key={card.id}
                onClick={() => setActiveTab(card.id)}
                className="group relative bg-white border border-slate-200 rounded-3xl p-6 shadow-xs hover:shadow-xl hover:border-sky-300 transition-all duration-300 cursor-pointer flex flex-col justify-between overflow-hidden"
              >
                {/* Background Glow */}
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl ${card.color} rounded-bl-full pointer-events-none transition-all group-hover:scale-125`}></div>

                <div>
                  <div className="flex items-start justify-between mb-4">
                    {/* Big Clean Line Icon (Similar to Google Slide) */}
                    <div className="w-16 h-16 rounded-2xl bg-slate-50 border border-slate-100 p-3.5 flex items-center justify-center text-slate-800 group-hover:scale-110 group-hover:text-sky-600 group-hover:bg-sky-50 transition-all shadow-xs">
                      <Icon className="w-full h-full stroke-[1.75]" />
                    </div>

                    {/* External Link directly to Google Sheet/Drive */}
                    <a
                      href={card.sheetUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="text-slate-400 hover:text-sky-600 p-2 hover:bg-sky-50 rounded-xl transition-colors"
                      title="Buka Spreadsheet / Google Drive Asli"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>

                  {/* Title & Subtitle */}
                  <h4 className="text-xl font-bold text-slate-900 group-hover:text-sky-600 transition-colors mb-1">
                    {card.title}
                  </h4>
                  <p className="text-xs text-slate-500 font-medium mb-4">
                    {card.subtitle}
                  </p>
                </div>

                {/* Footer of Card with Badge & Action */}
                <div className="flex items-center justify-between pt-3 border-t border-slate-100">
                  {card.count !== undefined ? (
                    <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${card.badgeColor}`}>
                      {card.count} Data
                    </span>
                  ) : (
                    <span className="text-xs font-medium text-slate-400">
                      Cloud Drive
                    </span>
                  )}

                  <span className="text-xs font-semibold text-slate-700 group-hover:text-sky-600 flex items-center gap-1 group-hover:translate-x-1 transition-all">
                    Buka <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Full-Width Card: Database Pegawai 7301 (Matching Slide bottom bar) */}
        <div
          onClick={() => setActiveTab('pegawai')}
          className="mt-5 group bg-gradient-to-r from-slate-900 via-sky-950 to-slate-900 text-white rounded-3xl p-6 sm:p-7 shadow-lg border border-slate-800 hover:border-sky-500 transition-all cursor-pointer flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          <div className="flex items-center gap-4 text-center sm:text-left">
            <div className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 p-3.5 flex items-center justify-center text-sky-400 group-hover:scale-110 transition-transform">
              <Users className="w-full h-full stroke-[1.75]" />
            </div>
            <div>
              <div className="flex items-center justify-center sm:justify-start gap-2">
                <span className="text-xs font-bold uppercase tracking-wider text-sky-400 bg-sky-900/60 px-2.5 py-0.5 rounded-full border border-sky-700/50">
                  Master Data
                </span>
                <span className="text-xs font-semibold text-slate-400">26 Pegawai Terdaftar</span>
              </div>
              <h4 className="text-xl sm:text-2xl font-black text-white tracking-tight mt-1 group-hover:text-sky-300 transition-colors">
                Database Pegawai 7301
              </h4>
              <p className="text-xs text-slate-300 max-w-xl">
                Data induk pegawai BPS Kabupaten Kepulauan Selayar: NIP, Pangkat, Golongan, dan Jabatan untuk otomasi Surat Tugas dan SKP.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={PORTAL_LINKS.databasePegawai}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-xs font-semibold text-white border border-white/15 flex items-center gap-1.5 transition-colors"
              title="Buka Google Sheet Database Pegawai"
            >
              <ExternalLink className="w-4 h-4" />
              <span>Google Sheet</span>
            </a>

            <button
              className="px-5 py-2.5 bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold text-xs sm:text-sm rounded-xl flex items-center gap-2 shadow-md transition-all active:scale-95"
            >
              <span>Kelola Data Pegawai</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>

      {/* Office Profile & Quick Guide */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pt-4">
        
        {/* Info Satker */}
        <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-xs">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-xl bg-sky-50 border border-sky-100 flex items-center justify-center text-sky-600">
              <Calendar className="w-5 h-5" />
            </div>
            <div>
              <h5 className="text-sm font-bold text-slate-900">Tata Kelola Naskah Dinas</h5>
              <p className="text-xs text-slate-500">Standar Klasifikasi Arsip BPS (Perka BPS)</p>
            </div>
          </div>
          <p className="text-xs text-slate-600 leading-relaxed mb-4">
            Penomoran naskah dinas keluar secara otomatis mengacu pada kode klasifikasi kegiatan, kode satker <strong>7301</strong> (Kabupaten Kepulauan Selayar), serta tahun anggaran berjalan.
          </p>
          <div className="grid grid-cols-2 gap-2 text-xs font-mono text-slate-700 bg-slate-50 p-3 rounded-2xl border border-slate-200">
            <div>• <span className="font-semibold text-sky-700">PR.710</span>: Undangan / Rapat</div>
            <div>• <span className="font-semibold text-sky-700">VS.110</span>: Susenas / SNLIK</div>
            <div>• <span className="font-semibold text-sky-700">VS.210</span>: Sakernas</div>
            <div>• <span className="font-semibold text-sky-700">VS.330</span>: IMK & Distribusi</div>
            <div>• <span className="font-semibold text-sky-700">PL.300</span>: Pengadaan / PPK</div>
            <div>• <span className="font-semibold text-sky-700">KU.320</span>: Pembayaran / Belanja</div>
          </div>
        </div>

        {/* Status Sinkronisasi */}
        <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-xs flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <div>
                <h5 className="text-sm font-bold text-slate-900">Sinkronisasi Portal & Backup</h5>
                <p className="text-xs text-slate-500">Tersimpan lokal & dapat diekspor kapan saja</p>
              </div>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed mb-4">
              Semua penomoran surat yang Anda buat di aplikasi web ini tersimpan secara instan di peramban dan dapat diekspor ke format CSV / JSON untuk arsip cadangan kantor.
            </p>
          </div>

          <div className="flex items-center justify-between pt-3 border-t border-slate-100 text-xs">
            <span className="font-medium text-slate-500">
              Satker: <strong>BPS Kab. Kepulauan Selayar (7301)</strong>
            </span>
            <span className="text-emerald-700 font-bold bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-200">
              ● Sistem Aktif
            </span>
          </div>
        </div>

      </div>

    </div>
  );
};
