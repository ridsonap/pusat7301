import React from 'react';
import { 
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
  Users 
} from 'lucide-react';
import { ActiveTab } from '../types';

interface NavigationProps {
  activeTab: ActiveTab;
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
}

export const Navigation: React.FC<NavigationProps> = ({
  activeTab,
  setActiveTab,
  counts
}) => {
  const tabs: { id: ActiveTab; label: string; icon: React.ElementType; badge?: number }[] = [
    { id: 'dashboard', label: 'Beranda Portal', icon: LayoutDashboard },
    { id: 'sk-kegiatan', label: 'SK Kegiatan', icon: FileSpreadsheet, badge: counts.skKegiatan },
    { id: 'surat-umum', label: 'Surat Umum', icon: Mail, badge: counts.suratUmum },
    { id: 'bast', label: 'BAST', icon: FileCheck2, badge: counts.bast },
    { id: 'surat-tugas', label: 'Surat Tugas', icon: Send, badge: counts.suratTugas },
    { id: 'dokumentasi', label: 'Dokumentasi', icon: Camera },
    { id: 'form-permintaan', label: 'Form Permintaan', icon: ClipboardList, badge: counts.formPermintaan },
    { id: 'spm-digital', label: 'SPM Digital', icon: Receipt },
    { id: 'surat-ppk', label: 'Surat PPK', icon: FileText, badge: counts.suratPPK },
    { id: 'skp-bulanan', label: 'SKP Triwulanan', icon: Target },
    { id: 'pegawai', label: 'Database Pegawai', icon: Users, badge: counts.pegawai },
  ];

  return (
    <nav className="bg-white border-b border-slate-200 sticky top-14 sm:top-16 z-30">
      <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8">
        <div className="flex space-x-1 overflow-x-auto py-2 no-scrollbar">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                type="button"
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-colors ${
                  isActive
                    ? 'bg-sky-600 text-white font-semibold shadow-2xs'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-white' : 'text-slate-500'}`} />
                <span>{tab.label}</span>
                {tab.badge !== undefined && (
                  <span
                    className={`ml-0.5 px-1.5 py-0.2 text-[10px] rounded font-mono tabular-nums ${
                      isActive
                        ? 'bg-white/20 text-white'
                        : 'bg-slate-100 text-slate-600'
                    }`}
                  >
                    {tab.badge}
                  </span>
                )}
              </button>
            );
          })}
        </div>
      </div>
    </nav>
  );
};
