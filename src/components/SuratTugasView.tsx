import React, { useState, useMemo } from 'react';
import { 
  Send, 
  Plus, 
  Search, 
  Download, 
  Copy, 
  Check, 
  ExternalLink, 
  Trash2, 
  X, 
  Printer,
  UserCheck,
  Calendar,
  MapPin,
  Clock
} from 'lucide-react';
import { SuratTugas, Pegawai } from '../types';
import { KODE_KLASIFIKASI_BPS, PORTAL_LINKS } from '../data/seedData';
import { generateNomorSuratTugas, formatTanggalIndonesia } from '../utils/formatters';
import { exportTableToCSV } from '../utils/storage';
import { OfficialPrintSuratTugas } from './OfficialPrintSuratTugas';

interface SuratTugasViewProps {
  suratTugasList: SuratTugas[];
  pegawaiList: Pegawai[];
  onAddSuratTugas: (surat: SuratTugas) => void;
  onDeleteSuratTugas: (id: string) => void;
}

export const SuratTugasView: React.FC<SuratTugasViewProps> = ({
  suratTugasList,
  pegawaiList,
  onAddSuratTugas,
  onDeleteSuratTugas
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterKlasifikasi, setFilterKlasifikasi] = useState<string>('Semua');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [printingSurat, setPrintingSurat] = useState<SuratTugas | null>(null);

  const nextNomorUrut = useMemo(() => {
    const maxNo = suratTugasList.reduce((max, item) => (item.nomorUrut > max ? item.nomorUrut : max), 0);
    return maxNo + 1;
  }, [suratTugasList]);

  const [formData, setFormData] = useState({
    nomorUrut: nextNomorUrut,
    tanggal: new Date().toISOString().slice(0, 10),
    tanggalSelesai: '',
    kodeKlasifikasi: 'VS.330',
    selectedPegawaiIds: [] as string[],
    customPetugas: '',
    tujuanTugas: 'Kabupaten Kepulauan Selayar',
    perihal: '',
    status: 'Aktif' as 'Aktif' | 'Selesai' | 'Draf'
  });

  const handleOpenModal = () => {
    setFormData({
      nomorUrut: nextNomorUrut,
      tanggal: new Date().toISOString().slice(0, 10),
      tanggalSelesai: '',
      kodeKlasifikasi: 'VS.330',
      selectedPegawaiIds: [],
      customPetugas: '',
      tujuanTugas: 'Kabupaten Kepulauan Selayar',
      perihal: '',
      status: 'Aktif'
    });
    setIsModalOpen(true);
  };

  const handleTogglePegawai = (id: string) => {
    if (formData.selectedPegawaiIds.includes(id)) {
      setFormData({
        ...formData,
        selectedPegawaiIds: formData.selectedPegawaiIds.filter(pid => pid !== id)
      });
    } else {
      setFormData({
        ...formData,
        selectedPegawaiIds: [...formData.selectedPegawaiIds, id]
      });
    }
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.perihal.trim()) {
      alert('Harap masukkan perihal / tujuan kegiatan penugasan.');
      return;
    }

    let assigneeText = 'Terlampir';
    if (formData.selectedPegawaiIds.length > 0) {
      const selectedNames = pegawaiList
        .filter(p => formData.selectedPegawaiIds.includes(p.id))
        .map(p => p.nama);
      assigneeText = selectedNames.length > 2 ? 'Terlampir' : selectedNames.join(', ');
    } else if (formData.customPetugas.trim()) {
      assigneeText = formData.customPetugas.trim();
    }

    const tahun = new Date(formData.tanggal).getFullYear() || 2026;
    const nomorSurat = generateNomorSuratTugas(formData.nomorUrut, formData.kodeKlasifikasi, tahun);

    const newSurat: SuratTugas = {
      id: `st-${Date.now()}`,
      nomorUrut: formData.nomorUrut,
      tanggal: formatTanggalIndonesia(formData.tanggal),
      tanggalSelesai: formData.tanggalSelesai ? formatTanggalIndonesia(formData.tanggalSelesai) : undefined,
      kodeKlasifikasi: formData.kodeKlasifikasi,
      nomorSurat: nomorSurat,
      petugas: assigneeText,
      petugasIds: formData.selectedPegawaiIds,
      perihal: formData.perihal.trim(),
      tujuanTugas: formData.tujuanTugas.trim() || 'Kabupaten Kepulauan Selayar',
      status: formData.status,
      createdAt: new Date().toISOString()
    };

    onAddSuratTugas(newSurat);
    setIsModalOpen(false);
  };

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const filteredList = useMemo(() => {
    return suratTugasList.filter(item => {
      const matchSearch =
        item.nomorSurat.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.perihal.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.petugas.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.tujuanTugas.toLowerCase().includes(searchTerm.toLowerCase());

      const matchKlasifikasi = filterKlasifikasi === 'Semua' || item.kodeKlasifikasi === filterKlasifikasi;

      return matchSearch && matchKlasifikasi;
    });
  }, [suratTugasList, searchTerm, filterKlasifikasi]);

  const handleExportCSV = () => {
    const rows = filteredList.map(s => ({
      No: s.nomorUrut,
      Tanggal: s.tanggal,
      Nomor_Surat_Tugas: s.nomorSurat,
      Kode_Klasifikasi: s.kodeKlasifikasi,
      Petugas_Pelaksana: s.petugas,
      Perihal: s.perihal,
      Tujuan_Tugas: s.tujuanTugas,
      Status: s.status || 'Aktif'
    }));
    exportTableToCSV(`Surat_Tugas_BPS_Selayar_${new Date().toISOString().slice(0, 10)}`, rows);
  };

  const getAssignedPegawaiForSurat = (surat: SuratTugas): Pegawai[] => {
    if (surat.petugasIds && surat.petugasIds.length > 0) {
      return pegawaiList.filter(p => surat.petugasIds!.includes(p.id));
    }
    const match = pegawaiList.find(p => p.nama.toLowerCase().includes(surat.petugas.toLowerCase()));
    if (match) return [match];
    return [];
  };

  const kepalaBps = pegawaiList.find(p => p.jabatan.toLowerCase().includes('kepala bps'));

  return (
    <div className="space-y-4 sm:space-y-6 pb-12">
      
      {/* Top Header Card */}
      <div className="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-8 border border-slate-200 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-3 sm:gap-4">
        <div className="flex items-center gap-3 sm:gap-4">
          <div className="w-11 h-11 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-blue-50 border border-blue-100 p-2.5 sm:p-3 flex items-center justify-center text-blue-600 flex-shrink-0">
            <Send className="w-full h-full stroke-[1.75]" />
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-2 py-0.5 rounded-full border border-blue-200">
                Surat Tugas
              </span>
              <span className="text-[10px] sm:text-xs font-semibold text-slate-500">BPS Selayar</span>
            </div>
            <h2 className="text-lg sm:text-2xl font-black text-slate-900 tracking-tight mt-0.5">
              Surat Tugas & Penugasan Dinas
            </h2>
            <p className="text-[11px] sm:text-sm text-slate-500 hidden sm:block">
              Penomoran otomatis, penugasan pegawai BPS, dan cetak naskah resmi surat tugas berstandar BPS.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 w-full md:w-auto">
          <a
            href={PORTAL_LINKS.suratTugas}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 sm:px-4 sm:py-2.5 rounded-xl border border-slate-200 hover:bg-slate-50 text-slate-700 text-xs font-semibold flex items-center gap-1.5 transition-colors"
            title="Buka Spreadsheet Asli"
          >
            <ExternalLink className="w-4 h-4 text-slate-400" />
            <span className="hidden sm:inline">Google Sheet</span>
          </a>

          <button
            onClick={handleExportCSV}
            className="p-2 sm:px-4 sm:py-2.5 rounded-xl border border-slate-200 hover:bg-slate-50 text-slate-700 text-xs font-semibold flex items-center gap-1.5 transition-colors"
            title="Ekspor CSV"
          >
            <Download className="w-4 h-4 text-slate-400" />
            <span className="hidden sm:inline">Ekspor CSV</span>
          </button>

          <button
            onClick={handleOpenModal}
            className="flex-1 md:flex-initial px-3.5 py-2 sm:px-4 sm:py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs sm:text-sm font-bold flex items-center justify-center gap-1.5 shadow-xs transition-all active:scale-95"
          >
            <Plus className="w-4 h-4" />
            <span>Buat Surat Tugas</span>
          </button>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="bg-white rounded-2xl p-3 sm:p-4 border border-slate-200 shadow-xs flex flex-col md:flex-row gap-2.5 items-center justify-between">
        <div className="relative w-full md:w-80">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          <input
            type="text"
            placeholder="Cari nomor, tugas, atau nama petugas..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-9 pr-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm focus:outline-hidden focus:ring-2 focus:ring-blue-500 transition-all"
          />
        </div>

        <div className="w-full md:w-auto">
          <select
            value={filterKlasifikasi}
            onChange={(e) => setFilterKlasifikasi(e.target.value)}
            className="w-full md:w-auto bg-slate-50 border border-slate-200 text-slate-700 text-xs rounded-xl px-3 py-2 font-medium focus:outline-hidden focus:ring-2 focus:ring-blue-500"
          >
            <option value="Semua">Semua Kode Klasifikasi</option>
            {KODE_KLASIFIKASI_BPS.map(k => (
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
            Tidak ada surat tugas yang cocok.
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

                <div className="flex items-center gap-1">
                  {item.kodeKlasifikasi && (
                    <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-full bg-sky-50 text-sky-700 border border-sky-200">
                      {item.kodeKlasifikasi}
                    </span>
                  )}
                </div>
              </div>

              {/* Card Body */}
              <div>
                <div className="flex items-center justify-between">
                  <span className="font-mono font-black text-sm text-blue-900 tracking-tight">
                    {item.nomorSurat}
                  </span>
                  <button
                    onClick={() => copyToClipboard(item.nomorSurat, item.id)}
                    className="p-1 text-slate-400 hover:text-blue-600 rounded-md"
                    title="Salin Nomor Surat"
                  >
                    {copiedId === item.id ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                <p className="text-xs font-bold text-slate-900 mt-1 leading-snug">
                  {item.perihal}
                </p>

                <div className="flex flex-wrap items-center gap-2 mt-2 text-[11px] text-slate-600">
                  <span className="inline-flex items-center gap-1 bg-slate-100 px-2 py-0.5 rounded-md font-medium">
                    <UserCheck className="w-3 h-3 text-blue-600" />
                    {item.petugas}
                  </span>
                  <span className="inline-flex items-center gap-1 text-slate-500">
                    <MapPin className="w-3 h-3 text-slate-400" />
                    {item.tujuanTugas || 'Selayar'}
                  </span>
                </div>
              </div>

              {/* Card Actions */}
              <div className="pt-2 border-t border-slate-100 flex items-center gap-2">
                <button
                  onClick={() => setPrintingSurat(item)}
                  className="flex-1 py-2 bg-blue-50 hover:bg-blue-100 text-blue-700 rounded-xl font-bold text-xs flex items-center justify-center gap-1.5 transition-colors border border-blue-200"
                >
                  <Printer className="w-3.5 h-3.5" />
                  <span>Cetak Naskah Dinas Resmi</span>
                </button>
                <button
                  onClick={() => {
                    if (confirm(`Hapus surat tugas ${item.nomorSurat}?`)) {
                      onDeleteSuratTugas(item.id);
                    }
                  }}
                  className="p-2 text-slate-400 hover:text-rose-600 rounded-xl hover:bg-rose-50 border border-slate-100"
                  title="Hapus"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Desktop Table View (hidden on mobile, visible on md+) */}
      <div className="hidden md:block bg-white rounded-3xl border border-slate-200 shadow-xs overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs sm:text-sm">
            <thead className="bg-slate-50 border-b border-slate-200 text-slate-600 font-bold uppercase tracking-wider text-[11px]">
              <tr>
                <th className="py-3.5 px-4 w-14 text-center">No</th>
                <th className="py-3.5 px-4 w-32">Tanggal</th>
                <th className="py-3.5 px-4 w-52">Nomor Surat Tugas</th>
                <th className="py-3.5 px-4">Nama Petugas</th>
                <th className="py-3.5 px-4">Perihal Penugasan</th>
                <th className="py-3.5 px-4 w-44">Tujuan Tugas</th>
                <th className="py-3.5 px-4 w-36 text-center">Aksi / Cetak</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filteredList.length === 0 ? (
                <tr>
                  <td colSpan={7} className="py-12 text-center text-slate-400">
                    Tidak ada surat tugas yang cocok dengan pencarian.
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
                    <td className="py-3 px-4 font-mono font-bold text-blue-900 whitespace-nowrap">
                      <div className="flex items-center gap-1.5">
                        <span>{item.nomorSurat}</span>
                        <button
                          onClick={() => copyToClipboard(item.nomorSurat, item.id)}
                          className="text-slate-400 hover:text-blue-600 p-1 rounded-md transition-colors"
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
                      <span className="inline-flex items-center gap-1.5 bg-slate-100 px-2.5 py-1 rounded-lg text-xs font-semibold text-slate-700">
                        <UserCheck className="w-3.5 h-3.5 text-blue-600" />
                        {item.petugas}
                      </span>
                    </td>
                    <td className="py-3 px-4 text-slate-700">
                      <div className="font-medium line-clamp-2">{item.perihal}</div>
                      {item.kodeKlasifikasi && (
                        <span className="text-[10px] font-mono text-slate-400 bg-slate-100 px-1.5 py-0.5 rounded-sm mt-0.5 inline-block">
                          Kode: {item.kodeKlasifikasi}
                        </span>
                      )}
                    </td>
                    <td className="py-3 px-4 text-slate-600 text-xs">
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3 h-3 text-slate-400" />
                        {item.tujuanTugas || 'Kab. Kepulauan Selayar'}
                      </span>
                    </td>
                    <td className="py-3 px-4 text-center">
                      <div className="flex items-center justify-center gap-1.5">
                        <button
                          onClick={() => setPrintingSurat(item)}
                          className="px-2.5 py-1.5 bg-blue-50 hover:bg-blue-100 text-blue-700 border border-blue-200 rounded-lg font-bold text-xs flex items-center gap-1 transition-colors"
                          title="Cetak Surat Tugas Resmi BPS"
                        >
                          <Printer className="w-3.5 h-3.5" />
                          <span>Cetak</span>
                        </button>
                        <button
                          onClick={() => {
                            if (confirm(`Yakin ingin menghapus surat tugas ${item.nomorSurat}?`)) {
                              onDeleteSuratTugas(item.id);
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
          <span>Menampilkan {filteredList.length} dari {suratTugasList.length} total surat tugas</span>
          <span className="font-semibold text-slate-700">BPS 7301 Selayar</span>
        </div>
      </div>

      {/* Modal Buat Surat Tugas Baru */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-900/60 backdrop-blur-xs animate-fadeIn">
          <div className="bg-white rounded-3xl max-w-2xl w-full p-5 sm:p-8 shadow-2xl border border-slate-200 max-h-[92vh] overflow-y-auto">
            
            <div className="flex items-center justify-between pb-3 sm:pb-4 mb-3 sm:mb-4 border-b border-slate-100">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600">
                  <Send className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-black text-slate-900">Buat Surat Tugas Baru</h3>
                  <p className="text-[11px] sm:text-xs text-slate-500">Penugasan pegawai & format resmi BPS</p>
                </div>
              </div>
              <button
                onClick={() => setIsModalOpen(false)}
                className="text-slate-400 hover:text-slate-600 p-1.5 rounded-xl hover:bg-slate-100"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleFormSubmit} className="space-y-3.5 sm:space-y-4">
              
              <div className="bg-blue-50/80 border border-blue-200 p-3 sm:p-4 rounded-xl sm:rounded-2xl">
                <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-blue-800">
                  Nomor Surat Tugas Diterbitkan
                </span>
                <div className="text-sm sm:text-lg font-mono font-black text-blue-950 mt-0.5">
                  {generateNomorSuratTugas(
                    formData.nomorUrut,
                    formData.kodeKlasifikasi,
                    new Date(formData.tanggal).getFullYear() || 2026
                  )}
                </div>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                <div>
                  <label className="block text-[11px] font-bold text-slate-700 mb-1">
                    Nomor Urut
                  </label>
                  <input
                    type="number"
                    min={1}
                    value={formData.nomorUrut}
                    onChange={(e) => setFormData({ ...formData, nomorUrut: parseInt(e.target.value) || 1 })}
                    className="w-full px-3 py-2 border border-slate-200 rounded-xl text-xs sm:text-sm font-mono focus:ring-2 focus:ring-blue-500 focus:outline-hidden"
                    required
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-slate-700 mb-1">
                    Tanggal Surat
                  </label>
                  <input
                    type="date"
                    value={formData.tanggal}
                    onChange={(e) => setFormData({ ...formData, tanggal: e.target.value })}
                    className="w-full px-3 py-2 border border-slate-200 rounded-xl text-xs sm:text-sm focus:ring-2 focus:ring-blue-500 focus:outline-hidden"
                    required
                  />
                </div>

                <div className="col-span-2 sm:col-span-1">
                  <label className="block text-[11px] font-bold text-slate-700 mb-1">
                    Sampai Tanggal (Opsional)
                  </label>
                  <input
                    type="date"
                    value={formData.tanggalSelesai}
                    onChange={(e) => setFormData({ ...formData, tanggalSelesai: e.target.value })}
                    className="w-full px-3 py-2 border border-slate-200 rounded-xl text-xs sm:text-sm focus:ring-2 focus:ring-blue-500 focus:outline-hidden"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-bold text-slate-700 mb-1">
                  Kode Klasifikasi Kegiatan
                </label>
                <select
                  value={formData.kodeKlasifikasi}
                  onChange={(e) => setFormData({ ...formData, kodeKlasifikasi: e.target.value })}
                  className="w-full px-3 py-2 border border-slate-200 rounded-xl text-xs sm:text-sm font-medium focus:ring-2 focus:ring-blue-500 focus:outline-hidden"
                >
                  {KODE_KLASIFIKASI_BPS.map((k) => (
                    <option key={k.kode} value={k.kode}>
                      {k.kode} - {k.kategori}: {k.uraian}
                    </option>
                  ))}
                </select>
              </div>

              {/* Pegawai Selector */}
              <div>
                <div className="flex items-center justify-between mb-1">
                  <label className="block text-[11px] font-bold text-slate-700">
                    Pilih Pegawai ({formData.selectedPegawaiIds.length} dipilih)
                  </label>
                  <span className="text-[10px] text-slate-400">
                    Klik nama untuk pilih
                  </span>
                </div>
                <div className="max-h-36 overflow-y-auto border border-slate-200 rounded-xl p-2 bg-slate-50 space-y-1">
                  {pegawaiList.map((p) => {
                    const isSelected = formData.selectedPegawaiIds.includes(p.id);
                    return (
                      <div
                        key={p.id}
                        onClick={() => handleTogglePegawai(p.id)}
                        className={`flex items-center justify-between p-2 rounded-lg cursor-pointer text-xs transition-colors ${
                          isSelected
                            ? 'bg-blue-100 text-blue-900 font-bold border border-blue-300'
                            : 'bg-white hover:bg-slate-100 text-slate-700 border border-slate-100'
                        }`}
                      >
                        <div className="flex items-center gap-2">
                          <input
                            type="checkbox"
                            checked={isSelected}
                            onChange={() => {}}
                            className="rounded-sm text-blue-600 pointer-events-none"
                          />
                          <span className="line-clamp-1">{p.nama}</span>
                        </div>
                        <span className="text-[10px] text-slate-400 font-mono">
                          {p.golongan}
                        </span>
                      </div>
                    );
                  })}
                </div>

                {formData.selectedPegawaiIds.length === 0 && (
                  <div className="mt-2">
                    <input
                      type="text"
                      placeholder="Atau tulis manual (contoh: Mitra Statistik / Terlampir)"
                      value={formData.customPetugas}
                      onChange={(e) => setFormData({ ...formData, customPetugas: e.target.value })}
                      className="w-full px-3 py-2 border border-slate-200 rounded-xl text-xs focus:ring-2 focus:ring-blue-500 focus:outline-hidden"
                    />
                  </div>
                )}
              </div>

              {/* Perihal Penugasan */}
              <div>
                <label className="block text-[11px] font-bold text-slate-700 mb-1">
                  Perihal / Kegiatan Penugasan <span className="text-rose-500">*</span>
                </label>
                <textarea
                  rows={2}
                  placeholder="Contoh: Pengawasan Lapangan Survei Angkatan Kerja Nasional (Sakernas) Februari 2026"
                  value={formData.perihal}
                  onChange={(e) => setFormData({ ...formData, perihal: e.target.value })}
                  className="w-full px-3 py-2 border border-slate-200 rounded-xl text-xs sm:text-sm focus:ring-2 focus:ring-blue-500 focus:outline-hidden"
                  required
                />
              </div>

              {/* Lokasi */}
              <div>
                <label className="block text-[11px] font-bold text-slate-700 mb-1">
                  Lokasi / Tujuan Penugasan
                </label>
                <input
                  type="text"
                  placeholder="Contoh: Kecamatan Benteng dan Kecamatan Bontomanai"
                  value={formData.tujuanTugas}
                  onChange={(e) => setFormData({ ...formData, tujuanTugas: e.target.value })}
                  className="w-full px-3 py-2 border border-slate-200 rounded-xl text-xs sm:text-sm focus:ring-2 focus:ring-blue-500 focus:outline-hidden"
                />
              </div>

              <div className="flex items-center justify-end gap-2.5 pt-3 border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-4 py-2 rounded-xl border border-slate-200 text-slate-600 hover:bg-slate-100 text-xs font-semibold"
                >
                  Batal
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold shadow-md active:scale-95"
                >
                  Terbitkan Surat Tugas
                </button>
              </div>

            </form>

          </div>
        </div>
      )}

      {/* Official Print View */}
      {printingSurat && (
        <OfficialPrintSuratTugas
          suratTugas={printingSurat}
          assignedPegawaiList={getAssignedPegawaiForSurat(printingSurat)}
          kepalaBps={kepalaBps}
          onClose={() => setPrintingSurat(null)}
        />
      )}

    </div>
  );
};
