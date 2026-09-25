import React, { useState, useMemo } from 'react';
import { 
  Mail, 
  Plus, 
  Search, 
  Filter, 
  Download, 
  Copy, 
  Check, 
  ExternalLink, 
  Trash2, 
  X,
  FileSpreadsheet,
  ArrowUpDown
} from 'lucide-react';
import { SuratUmum, KodeKlasifikasi } from '../types';
import { KODE_KLASIFIKASI_BPS, PORTAL_LINKS } from '../data/seedData';
import { generateNomorSuratUmum, formatTanggalIndonesia } from '../utils/formatters';
import { exportTableToCSV } from '../utils/storage';

interface SuratUmumViewProps {
  suratList: SuratUmum[];
  onAddSurat: (surat: SuratUmum) => void;
  onDeleteSurat: (id: string) => void;
}

export const SuratUmumView: React.FC<SuratUmumViewProps> = ({
  suratList,
  onAddSurat,
  onDeleteSurat,
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterJenis, setFilterJenis] = useState<'Semua' | 'Internal' | 'Eksternal'>('Semua');
  const [filterKlasifikasi, setFilterKlasifikasi] = useState<string>('Semua');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  // New letter form states
  const nextNomorUrut = useMemo(() => {
    const maxNo = suratList.reduce((max, item) => (item.nomorUrut > max ? item.nomorUrut : max), 0);
    return maxNo + 1;
  }, [suratList]);

  const [formData, setFormData] = useState({
    nomorUrut: nextNomorUrut,
    tanggal: new Date().toISOString().slice(0, 10),
    jenisSurat: 'Internal' as 'Internal' | 'Eksternal',
    tujuan: '',
    kodeKlasifikasi: 'PR.710',
    perihal: '',
    ringkasan: '',
  });

  const handleOpenModal = () => {
    setFormData({
      nomorUrut: nextNomorUrut,
      tanggal: new Date().toISOString().slice(0, 10),
      jenisSurat: 'Internal',
      tujuan: '',
      kodeKlasifikasi: 'PR.710',
      perihal: '',
      ringkasan: '',
    });
    setIsModalOpen(true);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.tujuan.trim() || !formData.perihal.trim()) {
      alert('Harap isi Alamat Tujuan dan Perihal surat');
      return;
    }

    const tahun = new Date(formData.tanggal).getFullYear() || 2026;
    const nomorSurat = generateNomorSuratUmum(formData.nomorUrut, formData.kodeKlasifikasi, tahun);

    const newSurat: SuratUmum = {
      id: `su-${Date.now()}`,
      nomorUrut: formData.nomorUrut,
      tanggal: formatTanggalIndonesia(formData.tanggal),
      jenisSurat: formData.jenisSurat,
      tujuan: formData.tujuan.trim(),
      kodeKlasifikasi: formData.kodeKlasifikasi,
      nomorSurat: nomorSurat,
      perihal: formData.perihal.trim(),
      ringkasan: formData.ringkasan.trim(),
      createdAt: new Date().toISOString()
    };

    onAddSurat(newSurat);
    setIsModalOpen(false);
  };

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const filteredList = useMemo(() => {
    return suratList.filter((item) => {
      const matchSearch =
        item.nomorSurat.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.perihal.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.tujuan.toLowerCase().includes(searchTerm.toLowerCase());

      const matchJenis = filterJenis === 'Semua' || item.jenisSurat === filterJenis;
      const matchKlasifikasi = filterKlasifikasi === 'Semua' || item.kodeKlasifikasi === filterKlasifikasi;

      return matchSearch && matchJenis && matchKlasifikasi;
    });
  }, [suratList, searchTerm, filterJenis, filterKlasifikasi]);

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
    exportTableToCSV(`Surat_Umum_BPS_Selayar_7301_${new Date().toISOString().slice(0, 10)}`, rows);
  };

  return (
    <div className="space-y-6 pb-12">
      
      {/* Top Header Card */}
      <div className="bg-white rounded-3xl p-5 sm:p-8 border border-slate-200 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex items-center gap-3.5 sm:gap-4">
          <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-sky-50 border border-sky-100 p-2.5 sm:p-3 flex items-center justify-center text-sky-600 shrink-0">
            <Mail className="w-full h-full stroke-[1.75]" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-sky-700 bg-sky-50 px-2.5 py-0.5 rounded-full border border-sky-200">
                Surat Keluar
              </span>
              <span className="text-[10px] sm:text-xs font-semibold text-slate-500">BPS Kab. Kepulauan Selayar</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight mt-1">
              Agenda & Penomoran Surat Umum
            </h2>
            <p className="text-xs sm:text-sm text-slate-500">
              Pencatatan surat keluar internal & eksternal dengan nomor surat otomatis berformat BPS.
            </p>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-2 sm:gap-3">
          <a
            href={PORTAL_LINKS.suratUmum}
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 sm:px-4 py-2 sm:py-2.5 rounded-xl border border-slate-200 hover:bg-slate-50 text-slate-700 text-xs sm:text-sm font-semibold flex items-center gap-1.5 sm:gap-2 transition-colors"
            title="Buka Spreadsheet Asli"
          >
            <ExternalLink className="w-4 h-4 text-slate-400" />
            <span>Sheet</span>
          </a>

          <button
            onClick={handleExportCSV}
            className="px-3 sm:px-4 py-2 sm:py-2.5 rounded-xl border border-slate-200 hover:bg-slate-50 text-slate-700 text-xs sm:text-sm font-semibold flex items-center gap-1.5 sm:gap-2 transition-colors"
            title="Ekspor Data ke CSV"
          >
            <Download className="w-4 h-4 text-slate-400" />
            <span>CSV</span>
          </button>

          <button
            onClick={handleOpenModal}
            className="flex-1 sm:flex-none justify-center px-4 py-2 sm:py-2.5 rounded-xl bg-sky-600 hover:bg-sky-500 text-white text-xs sm:text-sm font-bold flex items-center gap-2 shadow-xs hover:shadow-md transition-all active:scale-95"
          >
            <Plus className="w-4 h-4" />
            <span>Buat Surat Keluar</span>
          </button>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="bg-white rounded-2xl p-4 border border-slate-200 shadow-xs flex flex-col md:flex-row gap-3 items-center justify-between">
        
        {/* Search */}
        <div className="relative w-full md:w-80">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          <input
            type="text"
            placeholder="Cari nomor, perihal, atau tujuan..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm focus:outline-hidden focus:ring-2 focus:ring-sky-500 transition-all"
          />
        </div>

        {/* Filters */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 w-full md:w-auto">
          {/* Jenis Surat */}
          <div className="flex items-center justify-center gap-1 bg-slate-100 p-1 rounded-xl text-xs font-semibold">
            {(['Semua', 'Internal', 'Eksternal'] as const).map((j) => (
              <button
                key={j}
                onClick={() => setFilterJenis(j)}
                className={`flex-1 sm:flex-none px-3 py-1.5 rounded-lg transition-all text-center ${
                  filterJenis === j ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {j}
              </button>
            ))}
          </div>

          {/* Klasifikasi Dropdown */}
          <select
            value={filterKlasifikasi}
            onChange={(e) => setFilterKlasifikasi(e.target.value)}
            className="w-full sm:w-auto bg-slate-50 border border-slate-200 text-slate-700 text-xs rounded-xl px-3 py-2 font-medium focus:outline-hidden focus:ring-2 focus:ring-sky-500"
          >
            <option value="Semua">Semua Klasifikasi</option>
            {KODE_KLASIFIKASI_BPS.map((k) => (
              <option key={k.kode} value={k.kode}>
                {k.kode} - {k.kategori}
              </option>
            ))}
          </select>
        </div>

      </div>

      {/* Mobile Card View (md:hidden) */}
      <div className="md:hidden space-y-3">
        {filteredList.length === 0 ? (
          <div className="bg-white rounded-2xl p-8 text-center text-slate-400 text-xs border border-slate-200">
            Tidak ada surat keluar yang sesuai dengan pencarian atau filter.
          </div>
        ) : (
          filteredList.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl p-4 border border-slate-200 shadow-xs space-y-2.5"
            >
              {/* Card Header */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <span className="w-6 h-6 rounded-full bg-slate-100 text-slate-700 text-[11px] font-mono font-bold flex items-center justify-center">
                    {item.nomorUrut}
                  </span>
                  <span className="text-[11px] text-slate-500 font-medium">
                    {item.tanggal}
                  </span>
                </div>

                <div className="flex items-center gap-1.5">
                  <span
                    className={`inline-block px-2 py-0.5 rounded-full text-[10px] font-bold ${
                      item.jenisSurat === 'Internal'
                        ? 'bg-blue-50 text-blue-700 border border-blue-200'
                        : 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                    }`}
                  >
                    {item.jenisSurat}
                  </span>
                  {item.kodeKlasifikasi && (
                    <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-full bg-slate-100 text-slate-700 border border-slate-200">
                      {item.kodeKlasifikasi}
                    </span>
                  )}
                </div>
              </div>

              {/* Card Body */}
              <div>
                <div className="flex items-center justify-between">
                  <span className="font-mono font-black text-sm text-sky-900 tracking-tight break-all">
                    {item.nomorSurat}
                  </span>
                  <button
                    onClick={() => copyToClipboard(item.nomorSurat, item.id)}
                    className="p-1 text-slate-400 hover:text-sky-600 rounded-md shrink-0 ml-2"
                    title="Salin Nomor Surat"
                  >
                    {copiedId === item.id ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                <p className="text-xs font-bold text-slate-900 mt-1 leading-snug">
                  {item.perihal}
                </p>

                <div className="mt-2 text-[11px] text-slate-600 bg-slate-50 rounded-xl p-2.5 border border-slate-100 space-y-1">
                  <div>
                    <span className="text-slate-400 font-medium">Tujuan: </span>
                    <span className="font-semibold text-slate-800">{item.tujuan}</span>
                  </div>
                  {item.ringkasan && (
                    <div>
                      <span className="text-slate-400 font-medium">Ringkasan: </span>
                      <span className="text-slate-600">{item.ringkasan}</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Card Action */}
              <div className="pt-2 border-t border-slate-100 flex items-center justify-between">
                <button
                  onClick={() => copyToClipboard(item.nomorSurat, item.id)}
                  className="flex-1 py-1.5 bg-sky-50 hover:bg-sky-100 text-sky-700 rounded-xl font-bold text-xs flex items-center justify-center gap-1.5 transition-colors border border-sky-200 mr-2"
                >
                  <Copy className="w-3.5 h-3.5" />
                  <span>{copiedId === item.id ? 'Tersalin!' : 'Salin Nomor'}</span>
                </button>
                <button
                  onClick={() => {
                    if (confirm(`Yakin ingin menghapus surat nomor ${item.nomorSurat}?`)) {
                      onDeleteSurat(item.id);
                    }
                  }}
                  className="p-2 text-slate-400 hover:text-rose-600 rounded-xl hover:bg-rose-50 border border-slate-100 shrink-0"
                  title="Hapus Surat"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Desktop Data Table (hidden md:block) */}
      <div className="hidden md:block bg-white rounded-3xl border border-slate-200 shadow-xs overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs sm:text-sm">
            <thead className="bg-slate-50 border-b border-slate-200 text-slate-600 font-bold uppercase tracking-wider text-[11px]">
              <tr>
                <th className="py-3.5 px-4 w-14 text-center">No</th>
                <th className="py-3.5 px-4 w-32">Tanggal</th>
                <th className="py-3.5 px-4 w-28">Jenis</th>
                <th className="py-3.5 px-4 w-48">Nomor Surat</th>
                <th className="py-3.5 px-4">Alamat / Tujuan</th>
                <th className="py-3.5 px-4">Perihal</th>
                <th className="py-3.5 px-4 w-24 text-center">Aksi</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filteredList.length === 0 ? (
                <tr>
                  <td colSpan={7} className="py-12 text-center text-slate-400">
                    Tidak ada surat yang sesuai dengan pencarian atau filter.
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
                      <span
                        className={`inline-block px-2.5 py-0.5 rounded-full text-[11px] font-bold ${
                          item.jenisSurat === 'Internal'
                            ? 'bg-blue-50 text-blue-700 border border-blue-200'
                            : 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                        }`}
                      >
                        {item.jenisSurat}
                      </span>
                    </td>
                    <td className="py-3 px-4 font-mono font-bold text-sky-800 whitespace-nowrap">
                      <div className="flex items-center gap-1.5">
                        <span>{item.nomorSurat}</span>
                        <button
                          onClick={() => copyToClipboard(item.nomorSurat, item.id)}
                          className="text-slate-400 hover:text-sky-600 p-1 rounded-md transition-colors"
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
                      <div className="font-medium line-clamp-2">{item.perihal}</div>
                      {item.kodeKlasifikasi && (
                        <span className="text-[10px] font-mono text-slate-400 bg-slate-100 px-1.5 py-0.5 rounded-sm mt-0.5 inline-block">
                          Kode: {item.kodeKlasifikasi}
                        </span>
                      )}
                    </td>
                    <td className="py-3 px-4 text-center">
                      <button
                        onClick={() => {
                          if (confirm(`Yakin ingin menghapus surat nomor ${item.nomorSurat}?`)) {
                            onDeleteSurat(item.id);
                          }
                        }}
                        className="text-slate-400 hover:text-rose-600 p-1.5 rounded-lg hover:bg-rose-50 transition-colors"
                        title="Hapus Surat"
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

        {/* Footer info */}
        <div className="py-3 px-6 bg-slate-50 border-t border-slate-200 text-xs text-slate-500 flex justify-between items-center">
          <span>Menampilkan {filteredList.length} dari {suratList.length} total surat keluar</span>
          <span className="font-semibold text-slate-700">Satker 7301 Selayar</span>
        </div>
      </div>

      {/* Modal Buat Surat Keluar Baru */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-fadeIn">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-slate-200">
            
            <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-100">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-sky-50 border border-sky-100 flex items-center justify-center text-sky-600">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-black text-slate-900">Buat Surat Keluar Baru</h3>
                  <p className="text-xs text-slate-500">Generate nomor naskah dinas resmi BPS 7301</p>
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
              
              {/* Preview Auto-generated Nomor Surat */}
              <div className="bg-sky-50/70 border border-sky-200 p-4 rounded-2xl">
                <span className="text-[11px] font-bold uppercase tracking-wider text-sky-700">
                  Format Nomor Surat Yang Diterbitkan
                </span>
                <div className="text-base sm:text-lg font-mono font-black text-sky-900 mt-0.5">
                  {generateNomorSuratUmum(
                    formData.nomorUrut,
                    formData.kodeKlasifikasi,
                    new Date(formData.tanggal).getFullYear() || 2026
                  )}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {/* Nomor Urut */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Nomor Urut
                  </label>
                  <input
                    type="number"
                    min={1}
                    value={formData.nomorUrut}
                    onChange={(e) => setFormData({ ...formData, nomorUrut: parseInt(e.target.value) || 1 })}
                    className="w-full px-3 py-2 border border-slate-200 rounded-xl text-sm font-mono focus:ring-2 focus:ring-sky-500 focus:outline-hidden"
                    required
                  />
                </div>

                {/* Tanggal */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Tanggal Surat
                  </label>
                  <input
                    type="date"
                    value={formData.tanggal}
                    onChange={(e) => setFormData({ ...formData, tanggal: e.target.value })}
                    className="w-full px-3 py-2 border border-slate-200 rounded-xl text-sm focus:ring-2 focus:ring-sky-500 focus:outline-hidden"
                    required
                  />
                </div>
              </div>

              {/* Jenis Surat */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Jenis Surat
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {(['Internal', 'Eksternal'] as const).map((j) => (
                    <button
                      key={j}
                      type="button"
                      onClick={() => setFormData({ ...formData, jenisSurat: j })}
                      className={`py-2 px-4 rounded-xl text-xs font-bold border transition-all ${
                        formData.jenisSurat === j
                          ? 'bg-sky-600 text-white border-sky-600 shadow-xs'
                          : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                      }`}
                    >
                      {j}
                    </button>
                  ))}
                </div>
              </div>

              {/* Kode Klasifikasi Arsip BPS */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Kode Klasifikasi Arsip
                </label>
                <select
                  value={formData.kodeKlasifikasi}
                  onChange={(e) => setFormData({ ...formData, kodeKlasifikasi: e.target.value })}
                  className="w-full px-3 py-2 border border-slate-200 rounded-xl text-xs sm:text-sm font-medium focus:ring-2 focus:ring-sky-500 focus:outline-hidden"
                >
                  {KODE_KLASIFIKASI_BPS.map((k) => (
                    <option key={k.kode} value={k.kode}>
                      {k.kode} - {k.kategori}: {k.uraian}
                    </option>
                  ))}
                </select>
              </div>

              {/* Alamat / Tujuan */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Alamat / Tujuan Surat <span className="text-rose-500">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Contoh: BPS Provinsi Sulawesi Selatan / Kepala Bappeda Selayar"
                  value={formData.tujuan}
                  onChange={(e) => setFormData({ ...formData, tujuan: e.target.value })}
                  className="w-full px-3 py-2 border border-slate-200 rounded-xl text-sm focus:ring-2 focus:ring-sky-500 focus:outline-hidden"
                  required
                />
              </div>

              {/* Perihal */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Perihal Surat <span className="text-rose-500">*</span>
                </label>
                <textarea
                  rows={2}
                  placeholder="Contoh: Undangan Rapat Koordinasi Evaluasi SAKIP Triwulan I"
                  value={formData.perihal}
                  onChange={(e) => setFormData({ ...formData, perihal: e.target.value })}
                  className="w-full px-3 py-2 border border-slate-200 rounded-xl text-sm focus:ring-2 focus:ring-sky-500 focus:outline-hidden"
                  required
                />
              </div>

              {/* Action Buttons */}
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
                  className="px-5 py-2.5 rounded-xl bg-sky-600 hover:bg-sky-500 text-white text-xs sm:text-sm font-bold shadow-md transition-all active:scale-95"
                >
                  Simpan & Terbitkan
                </button>
              </div>

            </form>

          </div>
        </div>
      )}

    </div>
  );
};
