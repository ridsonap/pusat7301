import React, { useState, useMemo } from 'react';
import { 
  Target, 
  Search, 
  Download, 
  ExternalLink, 
  Edit3, 
  CheckCircle2, 
  X, 
  UploadCloud, 
  Award,
  Filter
} from 'lucide-react';
import { SKPItem, Pegawai } from '../types';
import { PORTAL_LINKS } from '../data/seedData';
import { exportTableToCSV } from '../utils/storage';

interface SKPBulananViewProps {
  skpList: SKPItem[];
  pegawaiList: Pegawai[];
  onUpdateSKP: (skp: SKPItem) => void;
}

export const SKPBulananView: React.FC<SKPBulananViewProps> = ({
  skpList,
  pegawaiList,
  onUpdateSKP
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeTriwulan, setActiveTriwulan] = useState<'triwulan1' | 'triwulan2' | 'triwulan3' | 'triwulan4' | 'tahunan'>('triwulan1');
  const [editingSKP, setEditingSKP] = useState<SKPItem | null>(null);

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

  const handleSaveEdit = (e: React.FormEvent) => {
    e.preventDefault();
    if (editingSKP) {
      onUpdateSKP(editingSKP);
      setEditingSKP(null);
    }
  };

  const handleExportCSV = () => {
    const rows = filteredList.map((item, idx) => ({
      No: idx + 1,
      Nama_Pegawai: item.nama,
      Jabatan: item.jabatan,
      TW1_Hasil: item.triwulan1.hasil,
      TW1_Perilaku: item.triwulan1.perilaku,
      TW1_Predikat: item.triwulan1.predikat,
      TW2_Predikat: item.triwulan2.predikat,
      TW3_Predikat: item.triwulan3.predikat,
      TW4_Predikat: item.triwulan4.predikat,
      Tahunan_Predikat: item.tahunan.predikat
    }));
    exportTableToCSV(`SKP_Bulanan_BPS_Selayar_${new Date().toISOString().slice(0, 10)}`, rows);
  };

  return (
    <div className="space-y-6 pb-12">
      
      {/* Header Card */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 rounded-2xl bg-rose-50 border border-rose-100 p-3 flex items-center justify-center text-rose-600">
            <Target className="w-full h-full stroke-[1.75]" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold uppercase tracking-wider text-rose-700 bg-rose-50 px-2.5 py-0.5 rounded-full border border-rose-200">
                Kinerja Pegawai
              </span>
              <span className="text-xs font-semibold text-slate-500">CKP, SAKIP & Zona Integritas (ZI)</span>
            </div>
            <h2 className="text-2xl font-black text-slate-900 tracking-tight mt-1">
              SKP & Penilaian Kinerja Bulanan
            </h2>
            <p className="text-xs sm:text-sm text-slate-500">
              Evaluasi kinerja triwulanan dan tahunan pegawai BPS Kabupaten Kepulauan Selayar.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <a
            href={PORTAL_LINKS.skpBulanan}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2.5 rounded-xl border border-slate-200 hover:bg-slate-50 text-slate-700 text-xs sm:text-sm font-semibold flex items-center gap-2 transition-colors"
          >
            <ExternalLink className="w-4 h-4 text-slate-400" />
            <span className="hidden sm:inline">Google Sheet</span>
          </a>

          <button
            onClick={handleExportCSV}
            className="px-4 py-2.5 rounded-xl border border-slate-200 hover:bg-slate-50 text-slate-700 text-xs sm:text-sm font-semibold flex items-center gap-2 transition-colors"
          >
            <Download className="w-4 h-4 text-slate-400" />
            <span className="hidden sm:inline">Ekspor CSV</span>
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
        <div className="flex flex-wrap items-center gap-1 bg-slate-100 p-1 rounded-xl text-xs font-semibold">
          {(['triwulan1', 'triwulan2', 'triwulan3', 'triwulan4', 'tahunan'] as const).map((tw) => (
            <button
              key={tw}
              onClick={() => setActiveTriwulan(tw)}
              className={`px-3 py-1.5 rounded-lg transition-all ${
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

      {/* Table of SKP */}
      <div className="bg-white rounded-3xl border border-slate-200 shadow-xs overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs sm:text-sm">
            <thead className="bg-slate-50 border-b border-slate-200 text-slate-600 font-bold uppercase tracking-wider text-[11px]">
              <tr>
                <th className="py-3.5 px-4 w-14 text-center">No</th>
                <th className="py-3.5 px-4">Nama Pegawai</th>
                <th className="py-3.5 px-4">Jabatan</th>
                <th className="py-3.5 px-4 w-44">Hasil Kerja ({triwulanLabels[activeTriwulan]})</th>
                <th className="py-3.5 px-4 w-44">Perilaku Kerja</th>
                <th className="py-3.5 px-4 w-36 text-center">Predikat Kinerja</th>
                <th className="py-3.5 px-4 w-28 text-center">Aksi / Edit</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filteredList.map((item, idx) => {
                const evalData = item[activeTriwulan];
                const isGood = evalData.predikat === 'Baik' || evalData.predikat === 'Sangat Baik';
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
                      <span className="px-2 py-0.5 rounded-md bg-slate-100 font-medium text-xs">
                        {evalData.hasil}
                      </span>
                    </td>
                    <td className="py-3 px-4 text-slate-700">
                      <span className="px-2 py-0.5 rounded-md bg-slate-100 font-medium text-xs">
                        {evalData.perilaku}
                      </span>
                    </td>
                    <td className="py-3 px-4 text-center">
                      <span
                        className={`inline-block px-3 py-1 rounded-full text-xs font-bold ${
                          evalData.predikat === 'Sangat Baik'
                            ? 'bg-emerald-100 text-emerald-800 border border-emerald-300'
                            : evalData.predikat === 'Baik'
                            ? 'bg-blue-100 text-blue-800 border border-blue-300'
                            : 'bg-amber-100 text-amber-800 border border-amber-300'
                        }`}
                      >
                        {evalData.predikat}
                      </span>
                    </td>
                    <td className="py-3 px-4 text-center">
                      <button
                        onClick={() => setEditingSKP(item)}
                        className="px-2.5 py-1.5 bg-slate-100 hover:bg-rose-50 hover:text-rose-600 text-slate-700 rounded-lg text-xs font-bold flex items-center gap-1 mx-auto transition-colors"
                      >
                        <Edit3 className="w-3.5 h-3.5" />
                        <span>Update</span>
                      </button>
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

      {/* Edit Modal */}
      {editingSKP && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-fadeIn">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-slate-200">
            <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-100">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-rose-50 border border-rose-100 flex items-center justify-center text-rose-600">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-black text-slate-900">Update Nilai SKP Pegawai</h3>
                  <p className="text-xs text-slate-500">{editingSKP.nama}</p>
                </div>
              </div>
              <button
                onClick={() => setEditingSKP(null)}
                className="text-slate-400 hover:text-slate-600 p-2 rounded-xl hover:bg-slate-100"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSaveEdit} className="space-y-4">
              
              <div className="bg-rose-50/70 border border-rose-200 p-3 rounded-xl text-xs font-semibold text-rose-900">
                Periode Penilaian: {triwulanLabels[activeTriwulan]}
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Hasil Kerja
                </label>
                <select
                  value={editingSKP[activeTriwulan].hasil}
                  onChange={(e) => {
                    setEditingSKP({
                      ...editingSKP,
                      [activeTriwulan]: {
                        ...editingSKP[activeTriwulan],
                        hasil: e.target.value
                      }
                    });
                  }}
                  className="w-full px-3 py-2 border border-slate-200 rounded-xl text-sm focus:ring-2 focus:ring-rose-500 focus:outline-hidden"
                >
                  <option value="Diatas Ekspektasi">Diatas Ekspektasi</option>
                  <option value="Sesuai Ekspektasi">Sesuai Ekspektasi</option>
                  <option value="Dibawah Ekspektasi">Dibawah Ekspektasi</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Perilaku Kerja (Core Values BerAKHLAK)
                </label>
                <select
                  value={editingSKP[activeTriwulan].perilaku}
                  onChange={(e) => {
                    setEditingSKP({
                      ...editingSKP,
                      [activeTriwulan]: {
                        ...editingSKP[activeTriwulan],
                        perilaku: e.target.value
                      }
                    });
                  }}
                  className="w-full px-3 py-2 border border-slate-200 rounded-xl text-sm focus:ring-2 focus:ring-rose-500 focus:outline-hidden"
                >
                  <option value="Diatas Ekspektasi">Diatas Ekspektasi</option>
                  <option value="Sesuai Ekspektasi">Sesuai Ekspektasi</option>
                  <option value="Dibawah Ekspektasi">Dibawah Ekspektasi</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Predikat Kinerja Akhir
                </label>
                <select
                  value={editingSKP[activeTriwulan].predikat}
                  onChange={(e) => {
                    setEditingSKP({
                      ...editingSKP,
                      [activeTriwulan]: {
                        ...editingSKP[activeTriwulan],
                        predikat: e.target.value
                      }
                    });
                  }}
                  className="w-full px-3 py-2 border border-slate-200 rounded-xl text-sm font-bold focus:ring-2 focus:ring-rose-500 focus:outline-hidden"
                >
                  <option value="Sangat Baik">Sangat Baik</option>
                  <option value="Baik">Baik</option>
                  <option value="Butuh Perbaikan">Butuh Perbaikan</option>
                  <option value="Kurang">Kurang</option>
                  <option value="Sangat Kurang">Sangat Kurang</option>
                </select>
              </div>

              <div className="flex items-center justify-end gap-3 pt-4 border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => setEditingSKP(null)}
                  className="px-4 py-2.5 rounded-xl border border-slate-200 text-slate-600 hover:bg-slate-100 text-xs sm:text-sm font-semibold transition-colors"
                >
                  Batal
                </button>
                <button
                  type="submit"
                  className="px-5 py-2.5 rounded-xl bg-rose-600 hover:bg-rose-500 text-white text-xs sm:text-sm font-bold shadow-md transition-all active:scale-95"
                >
                  Simpan Nilai SKP
                </button>
              </div>

            </form>
          </div>
        </div>
      )}

    </div>
  );
};
