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
  ArrowRight,
  CheckCircle2,
  Building2
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

  const portalCards = [
    {
      id: 'sk-kegiatan' as ActiveTab,
      title: 'SK Kegiatan',
      subtitle: 'Surat Keputusan & Honor',
      icon: FolderClosed,
      count: counts.skKegiatan,
      sheetUrl: PORTAL_LINKS.skKegiatan,
      iconColor: 'text-amber-700 bg-amber-50 border-amber-200',
      badgeColor: 'bg-amber-50 text-amber-800 border-amber-200'
    },
    {
      id: 'bast' as ActiveTab,
      title: 'BAST',
      subtitle: 'Berita Acara Serah Terima',
      icon: FileCheck2,
      count: counts.bast,
      sheetUrl: PORTAL_LINKS.bast,
      iconColor: 'text-emerald-700 bg-emerald-50 border-emerald-200',
      badgeColor: 'bg-emerald-50 text-emerald-800 border-emerald-200'
    },
    {
      id: 'form-permintaan' as ActiveTab,
      title: 'Form Permintaan',
      subtitle: 'Belanja Bahan & Barang',
      icon: ClipboardList,
      count: counts.formPermintaan,
      sheetUrl: PORTAL_LINKS.formPermintaan,
      iconColor: 'text-indigo-700 bg-indigo-50 border-indigo-200',
      badgeColor: 'bg-indigo-50 text-indigo-800 border-indigo-200'
    },
    {
      id: 'surat-umum' as ActiveTab,
      title: 'Surat Umum',
      subtitle: 'Agenda & Penomoran Keluar',
      icon: Mail,
      count: counts.suratUmum,
      sheetUrl: PORTAL_LINKS.suratUmum,
      iconColor: 'text-sky-700 bg-sky-50 border-sky-200',
      badgeColor: 'bg-sky-50 text-sky-800 border-sky-200'
    },
    {
      id: 'surat-tugas' as ActiveTab,
      title: 'Surat Tugas',
      subtitle: 'Penugasan & Cetak Draf',
      icon: Send,
      count: counts.suratTugas,
      sheetUrl: PORTAL_LINKS.suratTugas,
      iconColor: 'text-blue-700 bg-blue-50 border-blue-200',
      badgeColor: 'bg-blue-50 text-blue-800 border-blue-200'
    },
    {
      id: 'skp-bulanan' as ActiveTab,
      title: 'SKP Triwulanan',
      subtitle: 'Penilaian Kinerja Pegawai',
      icon: Target,
      count: counts.pegawai,
      sheetUrl: PORTAL_LINKS.skpDriveUploadSpreadsheet,
      iconColor: 'text-rose-700 bg-rose-50 border-rose-200',
      badgeColor: 'bg-rose-50 text-rose-800 border-rose-200'
    },
    {
      id: 'dokumentasi' as ActiveTab,
      title: 'Dokumentasi',
      subtitle: 'Galeri & Arsip Drive',
      icon: Camera,
      count: undefined,
      sheetUrl: PORTAL_LINKS.dokumentasiDrive,
      iconColor: 'text-purple-700 bg-purple-50 border-purple-200',
      badgeColor: 'bg-purple-50 text-purple-800 border-purple-200'
    },
    {
      id: 'surat-ppk' as ActiveTab,
      title: 'Surat PPK',
      subtitle: 'SPMK, HPS, Kontrak Mitra',
      icon: FileText,
      count: counts.suratPPK,
      sheetUrl: PORTAL_LINKS.suratPPK,
      iconColor: 'text-teal-700 bg-teal-50 border-teal-200',
      badgeColor: 'bg-teal-50 text-teal-800 border-teal-200'
    },
    {
      id: 'spm-digital' as ActiveTab,
      title: 'SPM Digital',
      subtitle: 'Arsip Berkas Keuangan',
      icon: Receipt,
      count: undefined,
      sheetUrl: PORTAL_LINKS.spmDigitalDrive,
      iconColor: 'text-cyan-700 bg-cyan-50 border-cyan-200',
      badgeColor: 'bg-cyan-50 text-cyan-800 border-cyan-200'
    },
  ];

  return (
    <div className="space-y-6 pb-12">
      
      {/* Hero Banner: Clean Slate Executive Chrome */}
      <div className="relative rounded-2xl overflow-hidden bg-slate-900 text-white border border-slate-800 p-5 sm:p-8">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-800 border border-slate-700 text-sky-300 text-[11px] font-semibold mb-3">
            <Building2 className="w-3.5 h-3.5 text-sky-400" />
            BPS Kab. Kepulauan Selayar · Satker 7301
          </div>
          
          <h2 className="text-xl sm:text-3xl font-bold tracking-tight text-white mb-2 leading-tight">
            PUSAT <span className="text-sky-400 font-mono">7301</span>
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 font-normal mb-5 max-w-2xl leading-relaxed">
            Portal Tata Naskah Dinas Terpadu BPS Kab. Kepulauan Selayar. Registrasi nomor surat umum, 
            surat tugas, BAST, dan belanja bahan dengan reset nomor otomatis per tahun kalender.
          </p>

          {/* Quick Search Input */}
          <form onSubmit={handleSearchSubmit} className="flex items-center gap-2 max-w-xl">
            <div className="relative flex-1">
              <Search aria-hidden="true" className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input
                type="text"
                placeholder="Cari nomor surat, perihal, atau tujuan..."
                aria-label="Pencarian global"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-3 py-2 bg-slate-800/90 text-white placeholder-slate-400 border border-slate-700 rounded-lg text-xs sm:text-sm font-medium focus:outline-hidden focus:border-sky-500 focus:ring-1 focus:ring-sky-500 transition-colors"
              />
            </div>
            <button
              type="submit"
              className="px-4 py-2 bg-sky-500 hover:bg-sky-400 text-slate-950 font-semibold text-xs sm:text-sm rounded-lg transition-colors cursor-pointer"
            >
              Cari
            </button>
          </form>

          {/* Quick Stats Grid Mobile */}
          <div className="grid grid-cols-3 gap-2 mt-4 pt-3 border-t border-slate-800 lg:hidden">
            <div className="bg-slate-800/60 border border-slate-700/60 rounded-lg p-2 text-center">
              <div className="text-base font-bold font-mono tabular-nums text-white">{counts.suratUmum}</div>
              <div className="text-[10px] text-slate-400">Surat Umum</div>
            </div>
            <div className="bg-slate-800/60 border border-slate-700/60 rounded-lg p-2 text-center">
              <div className="text-base font-bold font-mono tabular-nums text-amber-400">{counts.suratTugas}</div>
              <div className="text-[10px] text-slate-400">Surat Tugas</div>
            </div>
            <div className="bg-slate-800/60 border border-slate-700/60 rounded-lg p-2 text-center">
              <div className="text-base font-bold font-mono tabular-nums text-emerald-400">{counts.pegawai}</div>
              <div className="text-[10px] text-slate-400">Pegawai</div>
            </div>
          </div>
        </div>

        {/* Quick Stats Desktop */}
        <div className="hidden lg:flex absolute right-8 bottom-8 items-center gap-3 bg-slate-800/70 border border-slate-700 p-3.5 rounded-xl">
          <div className="text-center px-3 border-r border-slate-700">
            <div className="text-xl font-bold font-mono tabular-nums text-white">{counts.suratUmum}</div>
            <div className="text-[11px] text-slate-400">Surat Keluar</div>
          </div>
          <div className="text-center px-3 border-r border-slate-700">
            <div className="text-xl font-bold font-mono tabular-nums text-amber-400">{counts.suratTugas}</div>
            <div className="text-[11px] text-slate-400">Surat Tugas</div>
          </div>
          <div className="text-center px-3">
            <div className="text-xl font-bold font-mono tabular-nums text-emerald-400">{counts.pegawai}</div>
            <div className="text-[11px] text-slate-400">Pegawai</div>
          </div>
        </div>
      </div>

      {/* Main Portal Cards Grid */}
      <div>
        <div className="flex items-center justify-between mb-3">
          <div>
            <h3 className="text-sm sm:text-base font-bold text-slate-900 tracking-tight">
              Layanan Administrasi Naskah Dinas
            </h3>
            <p className="text-[11px] sm:text-xs text-slate-500">
              Pilih modul naskah atau akses tautan Google Drive / Spreadsheet resmi
            </p>
          </div>

          <button
            type="button"
            onClick={onOpenQuickNumber}
            className="text-xs font-semibold text-sky-700 hover:text-sky-800 bg-sky-50 hover:bg-sky-100 px-2.5 py-1.5 rounded-lg border border-sky-200 flex items-center gap-1 transition-colors cursor-pointer"
          >
            <span>+ Ambil Nomor</span>
          </button>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
          {portalCards.map((card) => {
            const Icon = card.icon;
            return (
              <div
                key={card.id}
                role="button"
                tabIndex={0}
                aria-label={card.title}
                onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); setActiveTab(card.id); } }}
                onClick={() => setActiveTab(card.id)}
                className="group relative bg-white border border-slate-200 rounded-xl p-3.5 sm:p-5 shadow-xs hover:border-sky-300 hover:shadow-sm transition-all cursor-pointer flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-start justify-between mb-3">
                    <div className={`w-9 h-9 sm:w-11 sm:h-11 rounded-lg border p-2 flex items-center justify-center shrink-0 ${card.iconColor}`}>
                      <Icon className="w-5 h-5 stroke-[1.8]" />
                    </div>

                    <a
                      href={card.sheetUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="text-slate-400 hover:text-sky-600 p-1 hover:bg-slate-100 rounded-md transition-colors"
                      title="Buka Spreadsheet / Google Drive Asli"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>

                  <h4 className="text-xs sm:text-base font-bold text-slate-900 group-hover:text-sky-700 transition-colors leading-snug mb-1">
                    {card.title}
                  </h4>
                  <p className="text-[11px] text-slate-500 font-normal line-clamp-1 mb-3">
                    {card.subtitle}
                  </p>
                </div>

                <div className="flex items-center justify-between pt-2.5 border-t border-slate-100">
                  {card.count !== undefined ? (
                    <span className={`text-[10px] sm:text-[11px] font-mono tabular-nums font-semibold px-2 py-0.5 rounded-md border ${card.badgeColor}`}>
                      {card.count} Data
                    </span>
                  ) : (
                    <span className="text-[10px] sm:text-[11px] font-medium text-slate-400">
                      Cloud Drive
                    </span>
                  )}

                  <span className="text-[11px] font-semibold text-slate-600 group-hover:text-sky-700 flex items-center gap-0.5 transition-colors">
                    Buka <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Database Pegawai Card */}
        <div
          role="button"
          tabIndex={0}
          aria-label="Database Pegawai 7301"
          onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); setActiveTab('pegawai'); } }}
          onClick={() => setActiveTab('pegawai')}
          className="mt-3 sm:mt-4 group bg-slate-900 text-white rounded-xl p-4 sm:p-5 border border-slate-800 hover:border-slate-700 transition-all cursor-pointer flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
        >
          <div className="flex items-center gap-3 sm:gap-4 text-left w-full sm:w-auto">
            <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-lg bg-slate-800 border border-slate-700 p-2.5 flex items-center justify-center text-sky-400 shrink-0">
              <Users className="w-6 h-6 stroke-[1.8]" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-semibold uppercase tracking-wider text-sky-300 bg-sky-950 px-2 py-0.5 rounded border border-sky-800/80">
                  Master Data
                </span>
                <span className="text-[11px] font-mono tabular-nums text-slate-400">{counts.pegawai} Pegawai</span>
              </div>
              <h4 className="text-sm sm:text-lg font-bold text-white tracking-tight mt-0.5 group-hover:text-sky-300 transition-colors">
                Database Pegawai 7301
              </h4>
              <p className="text-[11px] sm:text-xs text-slate-400 max-w-xl hidden sm:block">
                Data induk pegawai BPS Kab. Kepulauan Selayar: NIP, Pangkat, Golongan, dan Jabatan untuk otomasi naskah dinas.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
            <a
              href={PORTAL_LINKS.databasePegawai}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs font-medium text-slate-300 border border-slate-700 flex items-center gap-1.5 transition-colors"
              title="Buka Google Sheet"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span className="text-xs">Sheet</span>
            </a>

            <button
              type="button"
              className="flex-1 sm:flex-initial px-3.5 py-1.5 bg-sky-500 hover:bg-sky-400 text-slate-950 font-semibold text-xs rounded-lg flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
            >
              <span>Kelola Pegawai</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>

      {/* Info Status Footer */}
      <div>
        <div className="bg-white rounded-xl p-3.5 sm:p-4 border border-slate-200 shadow-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600 shrink-0">
              <CheckCircle2 className="w-4 h-4" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h5 className="text-xs sm:text-sm font-bold text-slate-900">Penyimpanan & Sinkronisasi Sistem</h5>
                <span className="text-emerald-700 font-semibold bg-emerald-50 text-[10px] px-1.5 py-0.5 rounded border border-emerald-200">
                  ● Aktif
                </span>
              </div>
              <p className="text-[11px] text-slate-500 mt-0.5">
                Data tersinkronisasi via IndexedDB/BroadcastChannel lokal & serverless PostgreSQL saat terhubung.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 self-start sm:self-center text-xs text-slate-600 bg-slate-50 px-2.5 py-1 rounded-lg border border-slate-200">
            <span>Satker:</span>
            <strong className="text-slate-900 font-semibold">BPS Kab. Kepulauan Selayar (7301)</strong>
          </div>
        </div>
      </div>

    </div>
  );
};
