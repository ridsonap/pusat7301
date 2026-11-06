import React, { useState } from 'react';
import { 
  Menu, 
  X, 
  Hash, 
  Download, 
  LayoutDashboard, 
  FileSpreadsheet, 
  Mail, 
  FileCheck2, 
  Send, 
  Camera, 
  ClipboardList, 
  Receipt, 
  FileText, 
  Target, 
  Users,
  Cloud,
  Database
} from 'lucide-react';
import { ActiveTab } from '../types';
import { exportDataAsJSON } from '../utils/storage';
import type { DbStatus } from '../utils/api';

interface HeaderProps {
  activeTab: ActiveTab;
  setActiveTab: (tab: ActiveTab) => void;
  onOpenQuickNumber: () => void;
  onOpenSyncModal: () => void;
  onResetData: () => void;
  dbStatus?: DbStatus;
  counts: {
    suratUmum: number;
    suratTugas: number;
    skKegiatan: number;
    bast: number;
    formPermintaan: number;
    suratPPK: number;
    pegawai: number;
  };
}

export const Header: React.FC<HeaderProps> = ({
  activeTab,
  setActiveTab,
  onOpenQuickNumber,
  onOpenSyncModal,
  dbStatus,
  counts
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const menuItems: { id: ActiveTab; label: string; icon: React.ElementType; badge?: number }[] = [
    { id: 'dashboard', label: 'Beranda Portal', icon: LayoutDashboard },
    { id: 'surat-umum', label: 'Surat Umum', icon: Mail, badge: counts.suratUmum },
    { id: 'surat-tugas', label: 'Surat Tugas', icon: Send, badge: counts.suratTugas },
    { id: 'sk-kegiatan', label: 'SK Kegiatan', icon: FileSpreadsheet, badge: counts.skKegiatan },
    { id: 'bast', label: 'BAST', icon: FileCheck2, badge: counts.bast },
    { id: 'form-permintaan', label: 'Form Permintaan', icon: ClipboardList, badge: counts.formPermintaan },
    { id: 'surat-ppk', label: 'Surat PPK', icon: FileText, badge: counts.suratPPK },
    { id: 'skp-bulanan', label: 'SKP Triwulanan', icon: Target },
    { id: 'pegawai', label: 'Database Pegawai', icon: Users, badge: counts.pegawai },
    { id: 'dokumentasi', label: 'Dokumentasi', icon: Camera },
    { id: 'spm-digital', label: 'SPM Digital', icon: Receipt },
  ];

  const handleSelectTab = (tab: ActiveTab) => {
    setActiveTab(tab);
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <header className="sticky top-0 z-40 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14 sm:h-16">
            
            {/* Left: BPS Identity */}
            <div
              role="button"
              tabIndex={0}
              aria-label="Ke Dashboard"
              onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); handleSelectTab('dashboard'); } }}
              className="flex items-center gap-2.5 sm:gap-3 cursor-pointer select-none"
              onClick={() => handleSelectTab('dashboard')}
            >
              <div className="w-8 h-8 sm:w-9 sm:h-9 shrink-0 bg-white rounded-lg border border-slate-200 p-1 flex items-center justify-center">
                <img 
                  src={`${import.meta.env.BASE_URL}bps-logo.svg`} 
                  alt="Logo BPS" 
                  className="w-full h-full object-contain" 
                />
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <span className="text-[10px] font-bold text-sky-800 bg-sky-50 px-1.5 py-0.2 rounded border border-sky-200">
                    7301
                  </span>
                  <span className="text-[11px] font-medium text-slate-500">Selayar</span>
                </div>
                <h1 className="text-xs sm:text-sm font-bold text-slate-900 tracking-tight leading-tight">
                  Badan Pusat Statistik
                </h1>
              </div>
            </div>

            {/* Right: Actions */}
            <div className="flex items-center gap-2 sm:gap-2.5">
              
              {/* Database Multi-User Status Chip */}
              <div
                className="hidden sm:flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-50 border border-slate-200 text-xs"
                title={dbStatus?.multiUser ? 'Multi-user aktif via Vercel Postgres' : 'Multi-user mode lokal'}
              >
                <span className={`w-2 h-2 rounded-full ${dbStatus?.multiUser ? 'bg-emerald-500' : 'bg-sky-500'}`} />
                <span className="text-[11px] font-medium text-slate-700 flex items-center gap-1">
                  <Database className="w-3 h-3 text-slate-500" />
                  {dbStatus?.multiUser ? 'Database Cloud' : 'Multi-User'}
                </span>
              </div>

              {/* Quick Number Button */}
              <button
                type="button"
                onClick={onOpenQuickNumber}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-white bg-sky-600 hover:bg-sky-700 rounded-lg shadow-xs transition-colors"
                title="Ambil Nomor Cepat"
              >
                <Hash className="w-3.5 h-3.5" />
                <span>Nomor</span>
              </button>

              {/* GAS Cloud Sync Button */}
              <button
                type="button"
                onClick={onOpenSyncModal}
                className="inline-flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-medium text-slate-700 hover:text-slate-900 bg-slate-50 hover:bg-slate-100 border border-slate-200 rounded-lg transition-colors"
                title="Sinkronisasi Google Sheets"
              >
                <Cloud className="w-3.5 h-3.5 text-slate-500" />
                <span className="hidden sm:inline">Sync Sheet</span>
              </button>

              {/* Backup & Export JSON */}
              <button
                type="button" 
                onClick={exportDataAsJSON}
                className="hidden sm:flex p-1.5 text-slate-600 hover:text-slate-900 hover:bg-slate-100 border border-slate-200 rounded-lg transition-colors"
                title="Backup Database (JSON)"
              >
                <Download className="w-4 h-4 text-slate-500" />
              </button>

              {/* PUSAT Branding */}
              <div 
                className="hidden md:flex items-center gap-2 pl-2.5 border-l border-slate-200 cursor-pointer select-none"
                onClick={() => handleSelectTab('dashboard')}
              >
                <div className="w-8 h-8 rounded-lg bg-slate-50 border border-slate-200 p-1 flex items-center justify-center">
                  <img src={`${import.meta.env.BASE_URL}pusat-logo.svg`} alt="PUSAT Logo" className="w-full h-full object-contain" />
                </div>
                <div className="text-right">
                  <div className="text-xs font-bold tracking-tight text-slate-900">
                    PUSAT <span className="text-sky-700">7301</span>
                  </div>
                  <div className="text-[10px] text-slate-400">
                    Portal Satu Pintu
                  </div>
                </div>
              </div>

              {/* Mobile Menu Hamburger Toggle */}
              <button
                type="button"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden p-1.5 text-slate-700 hover:bg-slate-100 rounded-lg transition-colors"
                aria-label="Buka Menu"
              >
                {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>

            </div>

          </div>
        </div>
      </header>

      {/* Mobile Menu Drawer */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-50 bg-slate-900/40 backdrop-blur-2xs flex justify-end">
          <div className="w-4/5 max-w-xs bg-white h-full shadow-xl flex flex-col justify-between overflow-y-auto">
            
            <div>
              <div className="p-3.5 border-b border-slate-100 flex items-center justify-between bg-slate-50">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-lg bg-white p-1 border border-slate-200 flex items-center justify-center">
                    <img src={`${import.meta.env.BASE_URL}bps-logo.svg`} alt="BPS" className="w-full h-full object-contain" />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold text-slate-900">PUSAT 7301</h3>
                    <p className="text-[10px] text-slate-500">BPS Kepulauan Selayar</p>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-1 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-200"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Navigation Items */}
              <div className="p-2.5 space-y-0.5">
                {menuItems.map((item) => {
                  const Icon = item.icon;
                  const isActive = activeTab === item.id;
                  return (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => handleSelectTab(item.id)}
                      className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-xs font-medium transition-colors ${
                        isActive
                          ? 'bg-sky-600 text-white font-semibold'
                          : 'text-slate-700 hover:bg-slate-100'
                      }`}
                    >
                      <div className="flex items-center gap-2.5">
                        <Icon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-slate-500'}`} />
                        <span>{item.label}</span>
                      </div>
                      {item.badge !== undefined && (
                        <span className={`text-[10px] font-mono px-1.5 py-0.2 rounded ${isActive ? 'bg-white/20 text-white' : 'bg-slate-100 text-slate-600'}`}>
                          {item.badge}
                        </span>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="p-3 border-t border-slate-100 text-center text-[10px] text-slate-400">
              PUSAT 7301 • Versi Multi-User
            </div>

          </div>
        </div>
      )}
    </>
  );
};
