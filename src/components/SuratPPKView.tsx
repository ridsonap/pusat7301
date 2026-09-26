import React, { useState, useMemo } from 'react';
import { 
  FileText, 
  Plus, 
  Search, 
  Download, 
  ExternalLink, 
  Trash2, 
  X, 
  Copy, 
  Check
} from 'lucide-react';
import { SuratPPK } from '../types';
import { PORTAL_LINKS } from '../data/seedData';
import { generateNomorSuratPPK, formatTanggalIndonesia, compareNomorUrutDesc, computeNextNomorUrut } from '../utils/formatters';
import { exportTableToCSV } from '../utils/storage';

interface SuratPPKViewProps {
  ppkList: SuratPPK[];
  onAddPPK: (ppk: SuratPPK) => void;
  onDeletePPK: (id: string) => void;
}

export const SuratPPKView: React.FC<SuratPPKViewProps> = ({
  ppkList,
  onAddPPK,
  onDeletePPK
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterJenis, setFilterJenis] = useState<'Semua' | 'Eksternal' | 'Internal'>('Semua');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const nextNomorUrut = useMemo(() => {
    return computeNextNomorUrut(ppkList);
  }, [ppkList]);

  const [formData, setFormData] = useState({
    nomorUrut: String(nextNomorUrut),
    tanggal: new Date().toISOString().slice(0, 10),
    jenisSurat: 'Eksternal' as 'Eksternal' | 'Internal',
    tujuan: '',
    kodeKlasifikasi: 'PL.300',
    perihal: ''
  });

  const handleOpenModal = () => {
    setFormData({
      nomorUrut: String(computeNextNomorUrut(ppkList)),
      tanggal: new Date().toISOString().slice(0, 10),
      jenisSurat: 'Eksternal',
      tujuan: '',
      kodeKlasifikasi: 'PL.300',
      perihal: ''
    });
    setIsModalOpen(true);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.tujuan.trim() || !formData.perihal.trim()) {
      alert('Harap isi Alamat Tujuan dan Perihal surat PPK.');
      return;
    }

    const tahun = new Date(formData.tanggal).getFullYear() || 2026;
    const nomorSurat = generateNomorSuratPPK(formData.nomorUrut, formData.kodeKlasifikasi, tahun);

    const newPPK: SuratPPK = {
      id: `ppk-${Date.now()}`,
      nomorUrut: formData.nomorUrut,
      tanggal: formatTanggalIndonesia(formData.tanggal),
      jenisSurat: formData.jenisSurat,
      tujuan: formData.tujuan.trim(),
      kodeKlasifikasi: formData.kodeKlasifikasi,
      nomorSurat: nomorSurat,
      perihal: formData.perihal.trim(),
      createdAt: new Date().toISOString()
    };

    onAddPPK(newPPK);
    setIsModalOpen(false);
  };

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const filteredList = useMemo(() => {
    return ppkList
      .filter((item) => {
        const matchSearch =
          item.nomorSurat.toLowerCase().includes(searchTerm.toLowerCase()) ||
          item.perihal.toLowerCase().includes(searchTerm.toLowerCase()) ||
          item.tujuan.toLowerCase().includes(searchTerm.toLowerCase());

        const matchJenis = filterJenis === 'Semua' || item.jenisSurat === filterJenis;

        return matchSearch && matchJenis;
      })
      .sort((a, b) => compareNomorUrutDesc(a.nomorUrut, b.nomorUrut));
  }, [ppkList, searchTerm, filterJenis]);

  const handleExportCSV = () => {
    const rows = filteredList.map(s => ({
      No: s.nomorUrut,
      Tanggal: s.tanggal,
      Jenis: s.jenisSurat,
      Alamat_Tujuan: s.tujuan,
      Kode_Klasifikasi: s.kodeKlasifikasi,
      Nomor_Surat: s.nomorSurat,
      Perihal: s.perihal
    }));
    exportTableToCSV(`Surat_PPK_BPS_Selayar_${new Date().toISOString().slice(0, 10)}`, rows);
  };

  return (
    <div className="space-y-6 pb-12">
      
      {/* Header */}
      <div className="bg-white rounded-3xl p-5 sm:p-8 border border-slate-200 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex items-center gap-3.5 sm:gap-4">
          <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-teal-50 border border-teal-100 p-2.5 sm:p-3 flex items-center justify-center text-teal-600 shrink-0">
            <FileText className="w-full h-full stroke-[1.75]" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-teal-700 bg-teal-50 px-2.5 py-0.5 rounded-full border border-teal-200">
                Pengadaan Barang/Jasa
              </span>
              <span className="text-[10px] sm:text-xs font-semibold text-slate-500">BPS Kab. Kepulauan Selayar</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight mt-1">
              Surat PPK (Pejabat Pembuat Komitmen)
            </h2>
            <p className="text-xs sm:text-sm text-slate-500">
              Penomoran SPMK (Surat Perintah Mulai Kerja), Berita Acara Penetapan HPS & RAB, dan naskah dinas pengadaan.
            </p>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-2 sm:gap-3">
          <a
            href={PORTAL_LINKS.suratPPK}
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
            className="flex-1 sm:flex-none justify-center px-4 py-2 sm:py-2.5 rounded-xl bg-teal-600 hover:bg-teal-500 text-white text-xs sm:text-sm font-bold flex items-center gap-2 shadow-xs hover:shadow-md transition-all active:scale-95"
          >
            <Plus className="w-4 h-4" />
            <span>Buat Surat PPK</span>
          </button>
        </div>
      </div>

      {/* Filter and Search */}
      <div className="bg-white rounded-2xl p-4 border border-slate-200 shadow-xs flex flex-col md:flex-row gap-3 items-center justify-between">
        <div className="relative w-full md:w-80">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          <input
            type="text"
            placeholder="Cari nomor surat PPK, perihal, atau rekanan..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm focus:outline-hidden focus:ring-2 focus:ring-teal-500 transition-all"
          />
        </div>

        <div className="flex items-center justify-center gap-1 bg-slate-100 p-1 rounded-xl text-xs font-semibold w-full md:w-auto">
          {(['Semua', 'Eksternal', 'Internal'] as const).map((j) => (
            <button
              key={j}
              onClick={() => setFilterJenis(j)}
              className={`flex-1 md:flex-none px-3 py-1.5 rounded-lg transition-all text-center ${
                filterJenis === j ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {j}
            </button>
          ))}
        </div>
      </div>

      {/* Mobile Row View (md:hidden) */}
      <div className="md:hidden bg-white rounded-2xl border border-slate-200 shadow-xs divide-y divide-slate-100 overflow-hidden">
        {filteredList.length === 0 ? (
          <div className="p-8 text-center text-slate-400 text-xs">
            Tidak ada surat PPK yang sesuai pencarian.
          </div>
        ) : (
          filteredList.map((item) => (
            <div
              key={item.id}
              className="p-3.5 hover:bg-slate-50/70 transition-colors flex items-start justify-between gap-3"
            >
              {/* Kolom Kiri: Badge & Info Surat PPK */}
              <div className="flex items-start gap-2.5 min-w-0 flex-1">
                <span className="w-7 h-7 rounded-xl bg-slate-100 text-slate-800 text-[11px] font-mono font-bold flex items-center justify-center shrink-0 border border-slate-200/80 mt-0.5">
                  {item.nomorUrut}
                </span>

                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-1.5 flex-wrap">
                    <span className="font-mono font-bold text-xs text-teal-950 tracking-tight">
                      {item.nomorSurat}
                    </span>
                    <span className="text-[10px] text-slate-400 font-medium">• {item.tanggal}</span>
                  </div>

                  <p className="text-xs font-semibold text-slate-900 mt-0.5 line-clamp-2 leading-snug">
                    {item.perihal}
                  </p>

                  <div className="flex items-center gap-1.5 mt-1.5 text-[10px] text-slate-500 flex-wrap">
                    {item.tujuan && (
                      <span className="bg-slate-100 px-2 py-0.5 rounded-md font-medium text-slate-700">
                        {item.tujuan}
                      </span>
                    )}
                    <span
                      className={`inline-block px-1.5 py-0.5 rounded-md text-[10px] font-bold ${
                        item.jenisSurat === 'Internal'
                          ? 'bg-blue-50 text-blue-700'
                          : 'bg-teal-50 text-teal-800'
                      }`}
                    >
                      {item.jenisSurat}
                    </span>
                    {item.kodeKlasifikasi && (
                      <span className="bg-slate-100 text-slate-600 px-1.5 py-0.5 rounded-md font-mono font-semibold">
                        {item.kodeKlasifikasi}
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Kolom Kanan: Aksi Cepat */}
              <div className="flex items-center gap-1 shrink-0 self-center">
                <button
                  onClick={() => copyToClipboard(item.nomorSurat, item.id)}
                  className="p-2 text-slate-500 hover:text-teal-600 bg-slate-50 hover:bg-teal-50 rounded-xl transition-colors border border-slate-200/80"
                  title="Salin Nomor Surat"
                >
                  {copiedId === item.id ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                </button>
                <button
                  onClick={() => {
                    if (confirm(`Hapus surat PPK nomor ${item.nomorSurat}?`)) {
                      onDeletePPK(item.id);
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

      {/* Table (hidden md:block) */}
      <div className="hidden md:block bg-white rounded-3xl border border-slate-200 shadow-xs overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs sm:text-sm">
            <thead className="bg-slate-50 border-b border-slate-200 text-slate-600 font-bold uppercase tracking-wider text-[11px]">
              <tr>
                <th className="py-3.5 px-4 w-14 text-center">No</th>
                <th className="py-3.5 px-4 w-32">Tanggal</th>
                <th className="py-3.5 px-4 w-28">Jenis</th>
                <th className="py-3.5 px-4 w-48">Nomor Surat PPK</th>
                <th className="py-3.5 px-4">Alamat / Rekanan</th>
                <th className="py-3.5 px-4">Perihal</th>
                <th className="py-3.5 px-4 w-20 text-center">Aksi</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filteredList.length === 0 ? (
                <tr>
                  <td colSpan={7} className="py-12 text-center text-slate-400">
                    Tidak ada surat PPK yang sesuai pencarian.
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
                    <td className="py-3 px-4">
                      <span className="inline-block px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-teal-50 text-teal-800 border border-teal-200">
                        {item.jenisSurat}
                      </span>
                    </td>
                    <td className="py-3 px-4 font-mono font-bold text-teal-900 whitespace-nowrap">
                      <div className="flex items-center gap-1.5">
                        <span>{item.nomorSurat}</span>
                        <button
                          onClick={() => copyToClipboard(item.nomorSurat, item.id)}
                          className="text-slate-400 hover:text-teal-600 p-1 rounded-md transition-colors"
                          title="Salin Nomor Surat"
                        >
                          {copiedId === item.id ? (
                            <Check className="w-3.5 h-3.5 text-emerald-600" />
                          ) : (
                            <Copy className="w-3.5 h-3.5" />
                          )}
                        </button>
                      </div>
                    </td>
                    <td className="py-3 px-4 font-medium text-slate-800">
                      {item.tujuan}
                    </td>
                    <td className="py-3 px-4 text-slate-700">
                      <div className="line-clamp-2">{item.perihal}</div>
                    </td>
                    <td className="py-3 px-4 text-center">
                      <button
                        onClick={() => {
                          if (confirm(`Hapus surat PPK nomor ${item.nomorSurat}?`)) {
                            onDeletePPK(item.id);
                          }
                        }}
                        className="text-slate-400 hover:text-rose-600 p-1.5 rounded-lg hover:bg-rose-50 transition-colors"
                        title="Hapus"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        <div className="py-3 px-6 bg-slate-50 border-t border-slate-200 text-xs text-slate-500 flex justify-between items-center">
          <span>Menampilkan {filteredList.length} dari {ppkList.length} total Surat PPK</span>
          <span className="font-semibold text-slate-700">Kode Klasifikasi PL.300</span>
        </div>
      </div>

      {/* Modal Tambah Surat PPK */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-fadeIn">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-slate-200">
            <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-100">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-teal-50 border border-teal-100 flex items-center justify-center text-teal-600">
                  <FileText className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-black text-slate-900">Buat Surat PPK Baru</h3>
                  <p className="text-xs text-slate-500">Penomoran naskah dinas Pejabat Pembuat Komitmen</p>
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
              
              <div className="bg-teal-50/80 border border-teal-200 p-4 rounded-2xl">
                <span className="text-[11px] font-bold uppercase tracking-wider text-teal-800">
                  Nomor Surat PPK Diterbitkan
                </span>
                <div className="text-base sm:text-lg font-mono font-black text-teal-950 mt-0.5">
                  {generateNomorSuratPPK(formData.nomorUrut, formData.kodeKlasifikasi, new Date(formData.tanggal).getFullYear() || 2026)}
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
                    className="w-full px-3 py-2 border border-slate-200 rounded-xl text-sm font-mono focus:ring-2 focus:ring-teal-500 focus:outline-hidden"
                    required
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Tanggal</label>
                  <input
                    type="date"
                    value={formData.tanggal}
                    onChange={(e) => setFormData({ ...formData, tanggal: e.target.value })}
                    className="w-full px-3 py-2 border border-slate-200 rounded-xl text-sm focus:ring-2 focus:ring-teal-500 focus:outline-hidden"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Jenis Surat</label>
                <div className="grid grid-cols-2 gap-2">
                  {(['Eksternal', 'Internal'] as const).map((j) => (
                    <button
                      key={j}
                      type="button"
                      onClick={() => setFormData({ ...formData, jenisSurat: j })}
                      className={`py-2 px-4 rounded-xl text-xs font-bold border transition-all ${
                        formData.jenisSurat === j
                          ? 'bg-teal-600 text-white border-teal-600 shadow-xs'
                          : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                      }`}
                    >
                      {j}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Alamat / Rekanan / Tujuan <span className="text-rose-500">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Contoh: PT. Rezky Service System / BPS Selayar"
                  value={formData.tujuan}
                  onChange={(e) => setFormData({ ...formData, tujuan: e.target.value })}
                  className="w-full px-3 py-2 border border-slate-200 rounded-xl text-sm focus:ring-2 focus:ring-teal-500 focus:outline-hidden"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Perihal <span className="text-rose-500">*</span>
                </label>
                <textarea
                  rows={2}
                  placeholder="Contoh: Surat Perintah Mulai Kerja (SPMK) Tenaga Outsourcing Cleaning Service Tahun 2026"
                  value={formData.perihal}
                  onChange={(e) => setFormData({ ...formData, perihal: e.target.value })}
                  className="w-full px-3 py-2 border border-slate-200 rounded-xl text-sm focus:ring-2 focus:ring-teal-500 focus:outline-hidden"
                  required
                />
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
                  className="px-5 py-2.5 rounded-xl bg-teal-600 hover:bg-teal-500 text-white text-xs sm:text-sm font-bold shadow-md transition-all active:scale-95"
                >
                  Simpan Surat PPK
                </button>
              </div>

            </form>
          </div>
        </div>
      )}

    </div>
  );
};
