import React, { useState, useMemo } from 'react';
import { 
  FileCheck2, 
  Plus, 
  Search, 
  Download, 
  ExternalLink, 
  Trash2, 
  X, 
  Copy, 
  Check,
  Printer,
  Users
} from 'lucide-react';
import { BAST } from '../types';
import { KODE_KLASIFIKASI_BPS, PORTAL_LINKS } from '../data/seedData';
import { generateNomorBAST, formatTanggalIndonesia, compareNomorUrutDesc, computeNextNomorUrut, getSortedKlasifikasiList } from '../utils/formatters';
import { exportTableToCSV } from '../utils/storage';

interface BASTViewProps {
  bastList: BAST[];
  onAddBAST: (bast: BAST) => void;
  onDeleteBAST: (id: string) => void;
}

export const BASTView: React.FC<BASTViewProps> = ({
  bastList,
  onAddBAST,
  onDeleteBAST
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterKlasifikasi, setFilterKlasifikasi] = useState<string>('Semua');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [printingBast, setPrintingBast] = useState<BAST | null>(null);

  const sortedKlasifikasi = useMemo(() => {
    return getSortedKlasifikasiList(bastList);
  }, [bastList]);

  const nextNomorUrut = useMemo(() => {
    return computeNextNomorUrut(bastList);
  }, [bastList]);

  const [formData, setFormData] = useState({
    nomorUrut: String(nextNomorUrut),
    tanggal: new Date().toISOString().slice(0, 10),
    kodeKlasifikasi: 'VS.330',
    perihal: '',
    pihakPertama: 'Ketua Tim Teknis BPS',
    pihakKedua: 'Mitra Statistik',
    keterangan: ''
  });

  const handleOpenModal = () => {
    setFormData({
      nomorUrut: String(computeNextNomorUrut(bastList)),
      tanggal: new Date().toISOString().slice(0, 10),
      kodeKlasifikasi: 'VS.330',
      perihal: '',
      pihakPertama: 'Ketua Tim Teknis BPS',
      pihakKedua: 'Mitra Statistik',
      keterangan: ''
    });
    setIsModalOpen(true);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.perihal.trim()) {
      alert('Harap masukkan perihal BAST.');
      return;
    }

    const tahun = new Date(formData.tanggal).getFullYear() || 2026;
    const nomorBAST = generateNomorBAST(formData.nomorUrut, formData.kodeKlasifikasi, tahun);

    const newBast: BAST = {
      id: `bast-${Date.now()}`,
      nomorUrut: formData.nomorUrut,
      tanggal: formatTanggalIndonesia(formData.tanggal),
      kodeKlasifikasi: formData.kodeKlasifikasi,
      nomorBAST: nomorBAST,
      perihal: formData.perihal.trim(),
      pihakPertama: formData.pihakPertama.trim() || 'Ketua Tim',
      pihakKedua: formData.pihakKedua.trim() || 'Mitra',
      createdAt: new Date().toISOString()
    };

    onAddBAST(newBast);
    setIsModalOpen(false);
  };

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const filteredList = useMemo(() => {
    return bastList
      .filter((item) => {
        const matchSearch =
          item.nomorBAST.toLowerCase().includes(searchTerm.toLowerCase()) ||
          item.perihal.toLowerCase().includes(searchTerm.toLowerCase()) ||
          item.pihakPertama.toLowerCase().includes(searchTerm.toLowerCase()) ||
          item.pihakKedua.toLowerCase().includes(searchTerm.toLowerCase());

        const matchKlasifikasi = filterKlasifikasi === 'Semua' || item.kodeKlasifikasi === filterKlasifikasi;

        return matchSearch && matchKlasifikasi;
      })
      .sort((a, b) => compareNomorUrutDesc(a.nomorUrut, b.nomorUrut));
  }, [bastList, searchTerm, filterKlasifikasi]);

  const handleExportCSV = () => {
    const rows = filteredList.map(s => ({
      No: s.nomorUrut,
      Tanggal: s.tanggal,
      Kode_Klasifikasi: s.kodeKlasifikasi,
      Nomor_BAST: s.nomorBAST,
      Perihal: s.perihal,
      Pihak_Pertama: s.pihakPertama,
      Pihak_Kedua: s.pihakKedua
    }));
    exportTableToCSV(`BAST_BPS_Selayar_${new Date().toISOString().slice(0, 10)}`, rows);
  };

  return (
    <div className="space-y-6 pb-12">
      
      {/* Header */}
      <div className="bg-white rounded-3xl p-5 sm:p-8 border border-slate-200 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex items-center gap-3.5 sm:gap-4">
          <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-emerald-50 border border-emerald-100 p-2.5 sm:p-3 flex items-center justify-center text-emerald-600 shrink-0">
            <FileCheck2 className="w-full h-full stroke-[1.75]" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                Berita Acara
              </span>
              <span className="text-[10px] sm:text-xs font-semibold text-slate-500">BPS Kab. Kepulauan Selayar</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight mt-1">
              BAST (Berita Acara Serah Terima)
            </h2>
            <p className="text-xs sm:text-sm text-slate-500">
              Pengelolaan nomor dan naskah BAST pengadaan, pekerjaan survei, serta serah terima BMN.
            </p>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-2 sm:gap-3">
          <a
            href={PORTAL_LINKS.bast}
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 sm:px-4 py-2 sm:py-2.5 rounded-xl border border-slate-200 hover:bg-slate-50 text-slate-700 text-xs sm:text-sm font-semibold flex items-center gap-1.5 sm:gap-2 transition-colors"
          >
            <ExternalLink className="w-4 h-4 text-slate-400" />
            <span>Sheet</span>
          </a>

          <button
            onClick={handleExportCSV}
            className="px-3 sm:px-4 py-2 sm:py-2.5 rounded-xl border border-slate-200 hover:bg-slate-50 text-slate-700 text-xs sm:text-sm font-semibold flex items-center gap-1.5 sm:gap-2 transition-colors"
          >
            <Download className="w-4 h-4 text-slate-400" />
            <span>CSV</span>
          </button>

          <button
            onClick={handleOpenModal}
            className="flex-1 sm:flex-none justify-center px-4 py-2 sm:py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs sm:text-sm font-bold flex items-center gap-2 shadow-xs hover:shadow-md transition-all active:scale-95"
          >
            <Plus className="w-4 h-4" />
            <span>Buat BAST Baru</span>
          </button>
        </div>
      </div>

      {/* Filter and Search */}
      <div className="bg-white rounded-2xl p-4 border border-slate-200 shadow-xs flex flex-col md:flex-row gap-3 items-center justify-between">
        <div className="relative w-full md:w-80">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          <input
            type="text"
            placeholder="Cari nomor BAST, perihal, atau pihak..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm focus:outline-hidden focus:ring-2 focus:ring-emerald-500 transition-all"
          />
        </div>

        <select
          value={filterKlasifikasi}
          onChange={(e) => setFilterKlasifikasi(e.target.value)}
          className="w-full md:w-auto bg-slate-50 border border-slate-200 text-slate-700 text-xs rounded-xl px-3 py-2 font-medium focus:outline-hidden focus:ring-2 focus:ring-emerald-500"
        >
          <option value="Semua">Semua Kode Klasifikasi (Sering Digunakan)</option>
          {sortedKlasifikasi.map(k => (
            <option key={k.kode} value={k.kode}>{k.kode} - {k.kategori}</option>
          ))}
        </select>
      </div>

      {/* Mobile Row View (md:hidden) */}
      <div className="md:hidden bg-white rounded-2xl border border-slate-200 shadow-xs divide-y divide-slate-100 overflow-hidden">
        {filteredList.length === 0 ? (
          <div className="p-8 text-center text-slate-400 text-xs">
            Tidak ada data BAST yang cocok.
          </div>
        ) : (
          filteredList.map((item) => (
            <div
              key={item.id}
              className="p-3.5 hover:bg-slate-50/70 transition-colors flex items-start justify-between gap-3"
            >
              {/* Kolom Kiri: Badge & Info BAST */}
              <div className="flex items-start gap-2.5 min-w-0 flex-1">
                <span className="w-7 h-7 rounded-xl bg-slate-100 text-slate-800 text-[11px] font-mono font-bold flex items-center justify-center shrink-0 border border-slate-200/80 mt-0.5">
                  {item.nomorUrut}
                </span>

                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-1.5 flex-wrap">
                    <span className="font-mono font-bold text-xs text-emerald-950 tracking-tight">
                      {item.nomorBAST}
                    </span>
                    <span className="text-[10px] text-slate-400 font-medium">• {item.tanggal}</span>
                  </div>

                  <p className="text-xs font-semibold text-slate-900 mt-0.5 line-clamp-2 leading-snug">
                    {item.perihal}
                  </p>

                  <div className="flex items-center gap-1.5 mt-1.5 text-[10px] text-slate-500 flex-wrap">
                    <span className="bg-slate-100 px-2 py-0.5 rounded-md font-medium text-slate-700">
                      Pihak: {item.pihakPertama} & {item.pihakKedua}
                    </span>
                    {item.kodeKlasifikasi && (
                      <span className="bg-emerald-50 text-emerald-700 border border-emerald-100 px-1.5 py-0.5 rounded-md font-mono font-semibold">
                        {item.kodeKlasifikasi}
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Kolom Kanan: Aksi Cepat */}
              <div className="flex items-center gap-1 shrink-0 self-center">
                <button
                  onClick={() => setPrintingBast(item)}
                  className="p-2 text-emerald-600 hover:text-emerald-700 bg-emerald-50 hover:bg-emerald-100 rounded-xl transition-colors border border-emerald-200"
                  title="Cetak Format BAST"
                >
                  <Printer className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={() => copyToClipboard(item.nomorBAST, item.id)}
                  className="p-2 text-slate-500 hover:text-emerald-600 bg-slate-50 hover:bg-emerald-50 rounded-xl transition-colors border border-slate-200/80"
                  title="Salin Nomor BAST"
                >
                  {copiedId === item.id ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                </button>
                <button
                  onClick={() => {
                    if (confirm(`Hapus BAST nomor ${item.nomorBAST}?`)) {
                      onDeleteBAST(item.id);
                    }
                  }}
                  className="p-2 text-slate-400 hover:text-rose-600 hover:bg-rose-50 rounded-xl transition-colors"
                  title="Hapus"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Desktop Table (hidden md:block) */}
      <div className="hidden md:block bg-white rounded-3xl border border-slate-200 shadow-xs overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs sm:text-sm">
            <thead className="bg-slate-50 border-b border-slate-200 text-slate-600 font-bold uppercase tracking-wider text-[11px]">
              <tr>
                <th className="py-3.5 px-4 w-14 text-center">No</th>
                <th className="py-3.5 px-4 w-32">Tanggal</th>
                <th className="py-3.5 px-4 w-48">Nomor BAST</th>
                <th className="py-3.5 px-4">Perihal / Pekerjaan</th>
                <th className="py-3.5 px-4 w-40">Pihak Pertama</th>
                <th className="py-3.5 px-4 w-40">Pihak Kedua</th>
                <th className="py-3.5 px-4 w-28 text-center">Aksi</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filteredList.length === 0 ? (
                <tr>
                  <td colSpan={7} className="py-12 text-center text-slate-400">
                    Tidak ada data BAST yang cocok.
                  </td>
                </tr>
              ) : (
                filteredList.map((item) => (
                  <tr key={item.id} className="hover:bg-slate-50/80 transition-colors">
                    <td className="py-3 px-4 font-mono font-bold text-center text-slate-500">
                      {item.nomorUrut}
                    </td>
                    <td className="py-3 px-4 text-slate-600 whitespace-nowrap">
                      {item.tanggal}
                    </td>
                    <td className="py-3 px-4 font-mono font-bold text-emerald-900 whitespace-nowrap">
                      <div className="flex items-center gap-1.5">
                        <span>{item.nomorBAST}</span>
                        <button
                          onClick={() => copyToClipboard(item.nomorBAST, item.id)}
                          className="text-slate-400 hover:text-emerald-600 p-1 rounded-md transition-colors"
                          title="Salin Nomor BAST"
                        >
                          {copiedId === item.id ? (
                            <Check className="w-3.5 h-3.5 text-emerald-600" />
                          ) : (
                            <Copy className="w-3.5 h-3.5" />
                          )}
                        </button>
                      </div>
                    </td>
                    <td className="py-3 px-4 text-slate-800 font-medium">
                      <div className="line-clamp-2">{item.perihal}</div>
                      {item.kodeKlasifikasi && (
                        <span className="text-[10px] font-mono text-slate-400 bg-slate-100 px-1.5 py-0.5 rounded-sm mt-0.5 inline-block">
                          Kode: {item.kodeKlasifikasi}
                        </span>
                      )}
                    </td>
                    <td className="py-3 px-4 text-slate-700 text-xs">
                      {item.pihakPertama}
                    </td>
                    <td className="py-3 px-4 text-slate-700 text-xs">
                      {item.pihakKedua}
                    </td>
                    <td className="py-3 px-4 text-center">
                      <div className="flex items-center justify-center gap-1">
                        <button
                          onClick={() => setPrintingBast(item)}
                          className="text-emerald-600 hover:bg-emerald-50 p-1.5 rounded-lg transition-colors"
                          title="Pratinjau / Cetak BAST"
                        >
                          <Printer className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => {
                            if (confirm(`Hapus BAST nomor ${item.nomorBAST}?`)) {
                              onDeleteBAST(item.id);
                            }
                          }}
                          className="text-slate-400 hover:text-rose-600 p-1.5 rounded-lg hover:bg-rose-50 transition-colors"
                          title="Hapus"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        <div className="py-3 px-6 bg-slate-50 border-t border-slate-200 text-xs text-slate-500 flex justify-between items-center">
          <span>Menampilkan {filteredList.length} dari {bastList.length} total BAST</span>
          <span className="font-semibold text-slate-700">BPS 7301</span>
        </div>
      </div>

      {/* Modal Buat BAST Baru */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-fadeIn">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-slate-200">
            <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-100">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600">
                  <FileCheck2 className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-black text-slate-900">Buat BAST Baru</h3>
                  <p className="text-xs text-slate-500">Berita Acara Serah Terima Pekerjaan / Pengadaan</p>
                </div>
              </div>
              <button
                onClick={() => setIsModalOpen(false)}
                className="text-slate-400 hover:text-slate-600 p-2 rounded-xl hover:bg-slate-100"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleFormSubmit} className="space-y-4">
              
              <div className="bg-emerald-50/80 border border-emerald-200 p-4 rounded-2xl">
                <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-800">
                  Format Nomor BAST Diterbitkan
                </span>
                <div className="text-base sm:text-lg font-mono font-black text-emerald-950 mt-0.5">
                  {generateNomorBAST(formData.nomorUrut, formData.kodeKlasifikasi, new Date(formData.tanggal).getFullYear() || 2026)}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Nomor Urut <span className="text-[10px] text-slate-400 font-normal">(bisa 20.1)</span>
                  </label>
                  <input
                    type="text"
                    value={formData.nomorUrut}
                    onChange={(e) => setFormData({ ...formData, nomorUrut: e.target.value })}
                    placeholder="Contoh: 10 atau 10.1"
                    className="w-full px-3 py-2 border border-slate-200 rounded-xl text-sm font-mono focus:ring-2 focus:ring-emerald-500 focus:outline-hidden"
                    required
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Tanggal BAST</label>
                  <input
                    type="date"
                    value={formData.tanggal}
                    onChange={(e) => setFormData({ ...formData, tanggal: e.target.value })}
                    className="w-full px-3 py-2 border border-slate-200 rounded-xl text-sm focus:ring-2 focus:ring-emerald-500 focus:outline-hidden"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Kode Klasifikasi</label>
                <select
                  value={formData.kodeKlasifikasi}
                  onChange={(e) => setFormData({ ...formData, kodeKlasifikasi: e.target.value })}
                  className="w-full px-3 py-2 border border-slate-200 rounded-xl text-sm font-medium focus:ring-2 focus:ring-emerald-500 focus:outline-hidden"
                >
                  {sortedKlasifikasi.map((k) => (
                    <option key={k.kode} value={k.kode}>
                      {k.kode} - {k.kategori}: {k.uraian}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Perihal / Kegiatan Serah Terima <span className="text-rose-500">*</span>
                </label>
                <textarea
                  rows={2}
                  placeholder="Contoh: BAST Hasil Pendataan Survei Industri Mikro dan Kecil (IMK) Triwulan I 2026"
                  value={formData.perihal}
                  onChange={(e) => setFormData({ ...formData, perihal: e.target.value })}
                  className="w-full px-3 py-2 border border-slate-200 rounded-xl text-sm focus:ring-2 focus:ring-emerald-500 focus:outline-hidden"
                  required
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Pihak Pertama</label>
                  <input
                    type="text"
                    value={formData.pihakPertama}
                    onChange={(e) => setFormData({ ...formData, pihakPertama: e.target.value })}
                    className="w-full px-3 py-2 border border-slate-200 rounded-xl text-xs sm:text-sm focus:ring-2 focus:ring-emerald-500 focus:outline-hidden"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Pihak Kedua</label>
                  <input
                    type="text"
                    value={formData.pihakKedua}
                    onChange={(e) => setFormData({ ...formData, pihakKedua: e.target.value })}
                    className="w-full px-3 py-2 border border-slate-200 rounded-xl text-xs sm:text-sm focus:ring-2 focus:ring-emerald-500 focus:outline-hidden"
                  />
                </div>
              </div>

              <div className="flex items-center justify-end gap-3 pt-4 border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-4 py-2.5 rounded-xl border border-slate-200 text-slate-600 hover:bg-slate-100 text-xs sm:text-sm font-semibold transition-colors"
                >
                  Batal
                </button>
                <button
                  type="submit"
                  className="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs sm:text-sm font-bold shadow-md transition-all active:scale-95"
                >
                  Simpan BAST
                </button>
              </div>

            </form>
          </div>
        </div>
      )}

      {/* Printable BAST View */}
      {printingBast && (
        <div className="fixed inset-0 z-50 bg-slate-900/80 backdrop-blur-xs flex flex-col items-center justify-start p-4 overflow-y-auto">
          <div className="no-print w-full max-w-3xl bg-white rounded-2xl p-4 mb-4 flex items-center justify-between shadow-xl">
            <span className="text-xs font-bold text-emerald-800">
              Format Cetak BAST: {printingBast.nomorBAST}
            </span>
            <div className="flex items-center gap-2">
              <button
                onClick={() => window.print()}
                className="px-4 py-2 bg-emerald-600 text-white rounded-xl text-xs font-bold flex items-center gap-1.5"
              >
                <Printer className="w-4 h-4" />
                <span>Cetak BAST</span>
              </button>
              <button
                onClick={() => setPrintingBast(null)}
                className="p-2 text-slate-400 hover:text-slate-700 rounded-xl"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          <div className="print-container bg-white w-full max-w-[210mm] min-h-[297mm] p-12 shadow-2xl rounded-2xl text-black font-serif text-xs sm:text-sm">
            {/* Kop */}
            <div className="text-center pb-3 border-b-2 border-slate-900 font-sans">
              <h2 className="text-base font-bold uppercase">Badan Pusat Statistik</h2>
              <h1 className="text-lg font-extrabold uppercase">Kabupaten Kepulauan Selayar</h1>
              <p className="text-[10px] text-slate-600">Jl. WR. Supratman No. 20, Benteng, Kepulauan Selayar</p>
            </div>

            <div className="text-center my-6">
              <h3 className="text-base font-bold uppercase tracking-wider underline">
                BERITA ACARA SERAH TERIMA
              </h3>
              <p className="text-xs font-mono mt-1">NOMOR : {printingBast.nomorBAST}</p>
            </div>

            <p className="mb-4 text-justify leading-relaxed">
              Pada hari ini, tanggal <strong>{printingBast.tanggal}</strong>, bertempat di Kantor Badan Pusat Statistik Kabupaten Kepulauan Selayar, yang bertanda tangan di bawah ini:
            </p>

            <div className="space-y-2 mb-6 pl-4 font-sans">
              <p>1. <strong>{printingBast.pihakPertama}</strong>, selanjutnya disebut sebagai <strong>PIHAK PERTAMA</strong>.</p>
              <p>2. <strong>{printingBast.pihakKedua}</strong>, selanjutnya disebut sebagai <strong>PIHAK KEDUA</strong>.</p>
            </div>

            <p className="mb-4 text-justify leading-relaxed">
              Menyatakan bahwa <strong>PIHAK KEDUA</strong> telah menyerahkan kepada <strong>PIHAK PERTAMA</strong>, dan <strong>PIHAK PERTAMA</strong> telah menerima hasil pekerjaan:
            </p>

            <div className="p-4 bg-slate-50 border border-slate-300 rounded-xl my-4 font-sans font-semibold text-center">
              "{printingBast.perihal}"
            </div >

            <p className="mb-10 text-justify leading-relaxed">
              Demikian Berita Acara Serah Terima ini dibuat dalam rangkap secukupnya untuk dipergunakan sebagaimana mestinya.
            </p>

            <div className="grid grid-cols-2 text-center pt-8 font-sans">
              <div>
                <p className="font-bold">PIHAK KEDUA,</p>
                <div className="h-20 flex items-center justify-center">
                  <span className="text-[10px] text-slate-400 italic no-print">(Tanda Tangan)</span>
                </div>
                <p className="font-bold underline">{printingBast.pihakKedua}</p>
              </div>

              <div>
                <p className="font-bold">PIHAK PERTAMA,</p>
                <div className="h-20 flex items-center justify-center">
                  <span className="text-[10px] text-slate-400 italic no-print">(Tanda Tangan)</span>
                </div>
                <p className="font-bold underline">{printingBast.pihakPertama}</p>
              </div>
            </div>

          </div>
        </div>
      )}

    </div>
  );
};
