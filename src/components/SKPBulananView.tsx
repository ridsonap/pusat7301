import React, { useState, useMemo } from 'react';
import { 
  Target, 
  Search, 
  Download, 
  ExternalLink, 
  UploadCloud,
  FileSpreadsheet
} from 'lucide-react';
import { SKPItem, Pegawai } from '../types';
import { PORTAL_LINKS, getSkpDriveUploadUrl } from '../data/seedData';
import { exportTableToCSV } from '../utils/storage';

interface SKPBulananViewProps {
  skpList: SKPItem[];
  pegawaiList: Pegawai[];
  onUpdateSKP: (skp: SKPItem) => void;
}

export const SKPBulananView: React.FC<SKPBulananViewProps> = ({
  skpList,
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeTriwulan, setActiveTriwulan] = useState<'triwulan1' | 'triwulan2' | 'triwulan3' | 'triwulan4' | 'tahunan'>('triwulan1');

  const triwulanLabels = {
    triwulan1: 'Triwulan I (Jan - Mar)',
    triwulan2: 'Triwulan II (Apr - Jun)',
    triwulan3: 'Triwulan III (Jul - Sep)',
    triwulan4: 'Triwulan IV (Okt - Des)',
    tahunan: 'Kinerja Tahunan'
  };

  const filteredList = useMemo(() => {
    return skpList.filter(item =>
      item.nama.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.jabatan.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [skpList, searchTerm]);

  const handleExportCSV = () => {
    const rows = filteredList.map((item, idx) => ({
      No: idx + 1,
      Nama_Pegawai: item.nama,
      Jabatan: item.jabatan,
      TW1_Hasil: item.triwulan1.hasil,
      TW1_Perilaku: item.triwulan1.perilaku,
      TW2_Hasil: item.triwulan2.hasil,
      TW2_Perilaku: item.triwulan2.perilaku,
      TW3_Hasil: item.triwulan3.hasil,
      TW3_Perilaku: item.triwulan3.perilaku,
      TW4_Hasil: item.triwulan4.hasil,
      TW4_Perilaku: item.triwulan4.perilaku,
      Link_Upload_Drive: getSkpDriveUploadUrl(item.nama)
    }));
    exportTableToCSV(`SKP_Triwulanan_BPS_Selayar_${new Date().toISOString().slice(0, 10)}`, rows);
  };

  return (
    <div className="space-y-6 pb-12">
      
      {/* Header Card */}
      <div className="bg-white rounded-3xl p-5 sm:p-8 border border-slate-200 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex items-center gap-3.5 sm:gap-4">
          <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-rose-50 border border-rose-100 p-2.5 sm:p-3 flex items-center justify-center text-rose-600 shrink-0">
            <Target className="w-full h-full stroke-[1.75]" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-rose-700 bg-rose-50 px-2.5 py-0.5 rounded-full border border-rose-200">
                Kinerja Pegawai
              </span>
              <span className="text-[10px] sm:text-xs font-semibold text-slate-500">CKP, SAKIP & Zona Integritas (ZI)</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight mt-1">
              SKP & Penilaian Kinerja Triwulanan
            </h2>
            <p className="text-xs sm:text-sm text-slate-500">
              Evaluasi kinerja triwulanan dan tautan langsung upload berkas SKP ke folder Google Drive tiap pegawai.
            </p>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-2 sm:gap-3">
          <a
            href={PORTAL_LINKS.skpDriveUploadSpreadsheet}
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 sm:px-4 py-2 sm:py-2.5 rounded-xl border border-emerald-200 bg-emerald-50/70 hover:bg-emerald-100 text-emerald-800 text-xs sm:text-sm font-semibold flex items-center gap-1.5 transition-colors shadow-2xs"
            title="Buka Spreadsheet Master SKP di Google Sheets"
          >
            <FileSpreadsheet className="w-4 h-4 text-emerald-600" />
            <span>Sheet SKP</span>
          </a>

          <button
            onClick={handleExportCSV}
            className="flex-1 sm:flex-none justify-center px-3 sm:px-4 py-2 sm:py-2.5 rounded-xl border border-slate-200 hover:bg-slate-50 text-slate-700 text-xs sm:text-sm font-semibold flex items-center gap-1.5 sm:gap-2 transition-colors"
          >
            <Download className="w-4 h-4 text-slate-400" />
            <span>Ekspor CSV</span>
          </button>
        </div>
      </div>

      {/* Triwulan Switcher & Search Bar */}
      <div className="bg-white rounded-2xl p-4 border border-slate-200 shadow-xs flex flex-col md:flex-row gap-3 items-center justify-between">
        <div className="relative w-full md:w-80">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          <input
            type="text"
            placeholder="Cari nama pegawai atau jabatan..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm focus:outline-hidden focus:ring-2 focus:ring-rose-500 transition-all"
          />
        </div>

        {/* Tab Buttons for Triwulan */}
        <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-xl text-[11px] sm:text-xs font-semibold overflow-x-auto w-full md:w-auto max-w-full">
          {(['triwulan1', 'triwulan2', 'triwulan3', 'triwulan4', 'tahunan'] as const).map((tw) => (
            <button
              key={tw}
              onClick={() => setActiveTriwulan(tw)}
              className={`px-3 py-1.5 rounded-lg transition-all shrink-0 whitespace-nowrap ${
                activeTriwulan === tw
                  ? 'bg-rose-600 text-white shadow-xs font-bold'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {tw === 'triwulan1' && 'Triwulan I'}
              {tw === 'triwulan2' && 'Triwulan II'}
              {tw === 'triwulan3' && 'Triwulan III'}
              {tw === 'triwulan4' && 'Triwulan IV'}
              {tw === 'tahunan' && 'Tahunan'}
            </button>
          ))}
        </div>
      </div>

      {/* Mobile Card View (md:hidden) */}
      <div className="md:hidden space-y-3">
        {filteredList.length === 0 ? (
          <div className="bg-white rounded-2xl p-8 text-center text-slate-400 text-xs border border-slate-200">
            Tidak ada pegawai yang cocok dengan pencarian.
          </div>
        ) : (
          filteredList.map((item, idx) => {
            const evalData = item[activeTriwulan];
            const driveUrl = getSkpDriveUploadUrl(item.nama);
            return (
              <div
                key={item.id}
                className="bg-white rounded-2xl p-4 border border-slate-200 shadow-xs space-y-2.5"
              >
                {/* Card Header */}
                <div className="flex items-center justify-between">
                  <span className="w-6 h-6 rounded-full bg-slate-100 text-slate-700 text-[11px] font-mono font-bold flex items-center justify-center">
                    {idx + 1}
                  </span>
                  <span className="text-[10px] font-semibold text-slate-400">
                    {triwulanLabels[activeTriwulan]}
                  </span>
                </div>

                {/* Card Body */}
                <div>
                  <h4 className="font-bold text-slate-900 text-sm leading-snug">
                    {item.nama}
                  </h4>
                  <p className="text-xs text-slate-500 mt-0.5">
                    {item.jabatan}
                  </p>

                  <div className="mt-2.5 grid grid-cols-2 gap-2 text-[11px]">
                    <div className="bg-slate-50 p-2 rounded-xl border border-slate-100">
                      <span className="text-slate-400 block text-[10px]">Hasil Kerja:</span>
                      <span className="font-semibold text-slate-800">{evalData.hasil}</span>
                    </div>
                    <div className="bg-slate-50 p-2 rounded-xl border border-slate-100">
                      <span className="text-slate-400 block text-[10px]">Perilaku Kerja:</span>
                      <span className="font-semibold text-slate-800">{evalData.perilaku}</span>
                    </div>
                  </div>
                </div>

                {/* Card Action: Upload SKP Drive */}
                <div className="pt-2 border-t border-slate-100">
                  <a
                    href={driveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2 bg-emerald-50 hover:bg-emerald-100 text-emerald-800 rounded-xl font-bold text-xs flex items-center justify-center gap-1.5 transition-colors border border-emerald-200"
                  >
                    <UploadCloud className="w-4 h-4 text-emerald-600" />
                    <span>Upload SKP ke Google Drive</span>
                    <ExternalLink className="w-3 h-3 text-emerald-500" />
                  </a>
                </div>
              </div>
            );
          })
        )}
      </div>

      {/* Table of SKP (hidden md:block) */}
      <div className="hidden md:block bg-white rounded-3xl border border-slate-200 shadow-xs overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs sm:text-sm">
            <thead className="bg-slate-50 border-b border-slate-200 text-slate-600 font-bold uppercase tracking-wider text-[11px]">
              <tr>
                <th className="py-3.5 px-4 w-14 text-center">No</th>
                <th className="py-3.5 px-4">Nama Pegawai</th>
                <th className="py-3.5 px-4">Jabatan</th>
                <th className="py-3.5 px-4 w-48">Hasil Kerja ({triwulanLabels[activeTriwulan]})</th>
                <th className="py-3.5 px-4 w-48">Perilaku Kerja</th>
                <th className="py-3.5 px-4 w-48 text-center">Upload SKP (Google Drive)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filteredList.map((item, idx) => {
                const evalData = item[activeTriwulan];
                const driveUrl = getSkpDriveUploadUrl(item.nama);
                return (
                  <tr key={item.id} className="hover:bg-slate-50/80 transition-colors">
                    <td className="py-3 px-4 font-mono font-bold text-center text-slate-500">
                      {idx + 1}
                    </td>
                    <td className="py-3 px-4 font-bold text-slate-900">
                      {item.nama}
                    </td>
                    <td className="py-3 px-4 text-slate-600 text-xs">
                      {item.jabatan}
                    </td>
                    <td className="py-3 px-4 text-slate-700">
                      <span className="px-2.5 py-1 rounded-lg bg-slate-100 font-medium text-xs">
                        {evalData.hasil}
                      </span>
                    </td>
                    <td className="py-3 px-4 text-slate-700">
                      <span className="px-2.5 py-1 rounded-lg bg-slate-100 font-medium text-xs">
                        {evalData.perilaku}
                      </span>
                    </td>
                    <td className="py-3 px-4 text-center">
                      <a
                        href={driveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-emerald-50 hover:bg-emerald-100 text-emerald-800 border border-emerald-200 rounded-xl font-bold text-xs transition-colors shadow-2xs"
                        title={`Buka Folder Upload Drive ${item.nama}`}
                      >
                        <UploadCloud className="w-3.5 h-3.5 text-emerald-600" />
                        <span>Upload Drive</span>
                        <ExternalLink className="w-3 h-3 text-emerald-500" />
                      </a>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        <div className="py-3 px-6 bg-slate-50 border-t border-slate-200 text-xs text-slate-500 flex justify-between items-center">
          <span>Menampilkan {filteredList.length} pegawai BPS Kabupaten Kepulauan Selayar</span>
          <span className="font-semibold text-slate-700">Periode: {triwulanLabels[activeTriwulan]}</span>
        </div>
      </div>

    </div>
  );
};
