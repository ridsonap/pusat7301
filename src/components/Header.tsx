import React from 'react';
import { 
  FileText, 
  ExternalLink, 
  PlusCircle, 
  Download, 
  RotateCcw, 
  Hash,
  Building2
} from 'lucide-react';
import { ActiveTab } from '../types';
import { exportDataAsJSON, resetAllData } from '../utils/storage';

interface HeaderProps {
  activeTab: ActiveTab;
  setActiveTab: (tab: ActiveTab) => void;
  onOpenQuickNumber: () => void;
  onResetData: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeTab,
  setActiveTab,
  onOpenQuickNumber,
  onResetData
}) => {
  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Left: BPS Identity */}
          <div 
            className="flex items-center gap-3.5 cursor-pointer group"
            onClick={() => setActiveTab('dashboard')}
          >
            <div className="w-12 h-12 flex-shrink-0 bg-white rounded-xl shadow-xs border border-slate-100 p-1.5 flex items-center justify-center group-hover:scale-105 transition-transform">
              <img src={`${import.meta.env.BASE_URL}bps-logo.svg`} alt="Logo BPS" className="w-full h-full object-contain" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-xs font-bold tracking-wider uppercase text-sky-700 bg-sky-50 px-2 py-0.5 rounded-md border border-sky-100">
                  Satker 7301
                </span>
                <span className="text-xs font-semibold text-slate-500">Sulawesi Selatan</span>
              </div>
              <h1 className="text-base sm:text-lg font-extrabold text-slate-900 tracking-tight leading-tight group-hover:text-sky-600 transition-colors">
                Badan Pusat Statistik
              </h1>
              <p className="text-xs text-slate-500 font-medium leading-none">
                Kabupaten Kepulauan Selayar
              </p>
            </div>
          </div>

          {/* Right: PUSAT Portal Logo & Actions */}
          <div className="flex items-center gap-3 sm:gap-4">
            
            {/* Quick Letter Number Generator Button */}
            <button
              onClick={onOpenQuickNumber}
              className="inline-flex items-center gap-2 px-3.5 py-2 text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-sky-600 to-blue-700 rounded-xl shadow-xs hover:from-sky-500 hover:to-blue-600 hover:shadow-md transition-all active:scale-95"
              title="Ambil Nomor Surat Otomatis"
            >
              <Hash className="w-4 h-4" />
              <span className="hidden sm:inline">Ambil Nomor Surat</span>
              <span className="sm:hidden">Nomor</span>
            </button>

            {/* Backup & Export JSON */}
            <div className="relative group">
              <button 
                onClick={exportDataAsJSON}
                className="p-2 text-slate-600 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 rounded-xl transition-colors"
                title="Backup Database (JSON)"
              >
                <Download className="w-4 h-4" />
              </button>
            </div>

            {/* PUSAT Branding (Matching the slide top right) */}
            <div 
              className="flex items-center gap-2 pl-3 border-l border-slate-200 cursor-pointer"
              onClick={() => setActiveTab('dashboard')}
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-sky-500/10 to-blue-600/10 p-1 flex items-center justify-center">
                <img src={`${import.meta.env.BASE_URL}pusat-logo.svg`} alt="PUSAT Logo" className="w-full h-full object-contain" />
              </div>
              <div className="text-right hidden md:block">
                <div className="text-sm font-black tracking-tight text-slate-900">
                  PUSAT <span className="text-sky-600">7301</span>
                </div>
                <div className="text-[10px] font-semibold text-slate-500 uppercase tracking-wider">
                  Portal Umum Satu Pintu
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </header>
  );
};
