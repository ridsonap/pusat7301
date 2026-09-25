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
  ExternalLink
} from 'lucide-react';
import { ActiveTab } from '../types';
import { exportDataAsJSON } from '../utils/storage';
import { PORTAL_LINKS } from '../data/seedData';

interface HeaderProps {
  activeTab: ActiveTab;
  setActiveTab: (tab: ActiveTab) => void;
  onOpenQuickNumber: () => void;
  onResetData: () => void;
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
  onResetData,
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
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-xs">
        <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            
            {/* Left: BPS Identity */}
            <div 
              className="flex items-center gap-2.5 sm:gap-3.5 cursor-pointer group"
              onClick={() => handleSelectTab('dashboard')}
            >
              <div className="w-9 h-9 sm:w-12 sm:h-12 flex-shrink-0 bg-white rounded-xl shadow-xs border border-slate-100 p-1 sm:p-1.5 flex items-center justify-center group-hover:scale-105 transition-transform">
                <img 
                  src={`${import.meta.env.BASE_URL}bps-logo.svg`} 
                  alt="Logo BPS" 
                  className="w-full h-full object-contain" 
                />
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-sky-700 bg-sky-50 px-1.5 sm:px-2 py-0.5 rounded-md border border-sky-100">
                    7301
                  </span>
                  <span className="text-[10px] sm:text-xs font-semibold text-slate-500">Selayar</span>
                </div>
                <h1 className="text-xs sm:text-lg font-black text-slate-900 tracking-tight leading-none sm:leading-tight group-hover:text-sky-600 transition-colors mt-0.5 sm:mt-0">
                  Badan Pusat Statistik
                </h1>
                <p className="hidden sm:block text-xs text-slate-500 font-medium leading-none">
                  Kabupaten Kepulauan Selayar
                </p>
              </div>
            </div>

            {/* Right: Actions */}
            <div className="flex items-center gap-2 sm:gap-3">
              
              {/* Quick Number Button */}
              <button
                onClick={onOpenQuickNumber}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 sm:px-3.5 sm:py-2 text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-sky-600 to-blue-700 rounded-xl shadow-xs hover:from-sky-500 hover:to-blue-600 transition-all active:scale-95"
                title="Ambil Nomor Surat Otomatis"
              >
                <Hash className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                <span>Nomor</span>
              </button>

              {/* Backup & Export JSON (Desktop) */}
              <button 
                onClick={exportDataAsJSON}
                className="hidden sm:flex p-2 text-slate-600 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 rounded-xl transition-colors"
                title="Backup Database (JSON)"
              >
                <Download className="w-4 h-4" />
              </button>

              {/* PUSAT Branding (Desktop) */}
              <div 
                className="hidden md:flex items-center gap-2 pl-3 border-l border-slate-200 cursor-pointer"
                onClick={() => handleSelectTab('dashboard')}
              >
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-sky-500/10 to-blue-600/10 p-1 flex items-center justify-center">
                  <img src={`${import.meta.env.BASE_URL}pusat-logo.svg`} alt="PUSAT Logo" className="w-full h-full object-contain" />
                </div>
                <div className="text-right">
                  <div className="text-sm font-black tracking-tight text-slate-900">
                    PUSAT <span className="text-sky-600">7301</span>
                  </div>
                  <div className="text-[10px] font-semibold text-slate-500 uppercase tracking-wider">
                    Portal Satu Pintu
                  </div>
                </div>
              </div>

              {/* Mobile Menu Hamburger Toggle */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden p-2 text-slate-700 hover:bg-slate-100 rounded-xl transition-colors"
                aria-label="Buka Menu"
              >
                {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>

            </div>

          </div>
        </div>
      </header>

      {/* Mobile Menu Drawer / Off-canvas */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex justify-end">
          <div className="w-4/5 max-w-xs bg-white h-full shadow-2xl flex flex-col justify-between overflow-y-auto animate-slideLeft">
            
            {/* Drawer Header */}
            <div>
              <div className="p-4 border-b border-slate-100 flex items-center justify-between bg-slate-50">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-white p-1 shadow-xs border border-slate-200 flex items-center justify-center">
                    <img src={`${import.meta.env.BASE_URL}bps-logo.svg`} alt="BPS" className="w-full h-full object-contain" />
                  </div>
                  <div>
                    <h3 className="text-sm font-black text-slate-900">PUSAT 7301</h3>
                    <p className="text-[10px] text-slate-500">BPS Kepulauan Selayar</p>
                  </div>
                </div>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-200"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Navigation Items */}
              <div className="p-3 space-y-1">
                {menuItems.map((item) => {
                  const Icon = item.icon;
                  const isActive = activeTab === item.id;
                  return (
                    <button
                      key={item.id}
                      onClick={() => handleSelectTab(item.id)}
                      className={`w-full flex items-center justify-between p-2.5 rounded-xl text-xs font-bold transition-all ${
                        isActive
                          ? 'bg-sky-600 text-white shadow-xs'
                          : 'text-slate-700 hover:bg-slate-100'
                      }`}
                    >
                      <div className="flex items-center gap-2.5">
                        <Icon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-slate-500'}`} />
                        <span>{item.label}</span>
                      </div>
                      {item.badge !== undefined && (
                        <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
                          isActive ? 'bg-white/20 text-white' : 'bg-slate-100 text-slate-600'
                        }`}>
                          {item.badge}
                        </span>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Drawer Footer Actions */}
            <div className="p-4 border-t border-slate-100 bg-slate-50 space-y-2">
              <button
                onClick={exportDataAsJSON}
                className="w-full py-2 px-3 bg-white border border-slate-200 rounded-xl text-xs font-semibold text-slate-700 flex items-center justify-center gap-2 shadow-xs"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Backup Data (JSON)</span>
              </button>

              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onResetData();
                }}
                className="w-full py-1.5 text-center text-[11px] text-slate-400 hover:text-rose-600"
              >
                Reset Data Awal
              </button>
            </div>

          </div>
        </div>
      )}
    </>
  );
};
