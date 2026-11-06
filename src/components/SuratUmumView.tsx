import React, { useState, useMemo, useEffect, useRef } from 'react';
import { newId } from '../utils/ids';
import { copyText } from '../utils/clipboard';
import { isValidDateString, isDuplicateNomor } from '../utils/validation';
import { 
  Mail, 
  Plus, 
  Search, 
  Download, 
  Copy, 
  Check, 
  ExternalLink, 
  Trash2, 
  X,
  Pencil,
  FileSpreadsheet,
  ChevronDown,
  ChevronUp
} from 'lucide-react';
import { SuratUmum } from '../types';
import { PORTAL_LINKS } from '../data/seedData';
import { 
  generateNomorSuratUmum, 
  formatTanggalIndonesia, 
  compareNomorUrutDesc, 
  computeNextNomorUrut, 
  getSortedKlasifikasiList,
  parseTanggalToInputFormat,
  getTahunFromTanggal
} from '../utils/formatters';
import { exportTableToCSV } from '../utils/storage';

interface SuratUmumViewProps {
  suratList: SuratUmum[];
  onAddSurat: (surat: SuratUmum) => void;
  onUpdateSurat: (s: SuratUmum) => void;
  onDeleteSurat: (id: string) => void;
  initialSearch?: string;
}

export const SuratUmumView: React.FC<SuratUmumViewProps> = ({
  suratList,
  onAddSurat,
  onUpdateSurat,
  onDeleteSurat,
  initialSearch,
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterJenis, setFilterJenis] = useState<'Semua' | 'Internal' | 'Eksternal'>('Semua');
  const [filterKlasifikasi, setFilterKlasifikasi] = useState<string>('Semua');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showOptionalFields, setShowOptionalFields] = useState(false);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [editingId, setEditingId] = useState<string | null>(null);
  const copyTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (initialSearch !== undefined) {
      setSearchTerm(initialSearch);
    }
  }, [initialSearch]);

  useEffect(() => {
    return () => {
      if (copyTimerRef.current) clearTimeout(copyTimerRef.current);
    };
  }, []);

  useEffect(() => {
    if (!isModalOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsModalOpen(false);
        setEditingId(null);
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = prevOverflow;
    };
  }, [isModalOpen]);

  const sortedKlasifikasi = useMemo(() => {
    return getSortedKlasifikasiList(suratList);
  }, [suratList]);

  const [formData, setFormData] = useState({
    nomorUrut: '1',
    tanggal: new Date().toISOString().slice(0, 10),
    jenisSurat: 'Internal' as 'Internal' | 'Eksternal',
    tujuan: '',
    kodeKlasifikasi: 'VS.330',
    perihal: '',
    ringkasan: '',
  });

  // Hitung tahun dan nomor urut secara dinamis berdasarkan tanggal
  // Jika tahun berganti (misal ke 2027), otomatis mulai dari 1
  const activeTahun = getTahunFromTanggal(formData.tanggal);
  const activeNomorUrut = editingId
    ? formData.nomorUrut
    : computeNextNomorUrut(suratList, activeTahun);
  const activeNomorSurat = generateNomorSuratUmum(activeNomorUrut, formData.kodeKlasifikasi, activeTahun);

  const handleOpenModal = () => {
    setEditingId(null);
    setShowOptionalFields(false);
    const today = new Date().toISOString().slice(0, 10);
    const yr = getTahunFromTanggal(today);
    setFormData({
      nomorUrut: String(computeNextNomorUrut(suratList, yr)),
      tanggal: today,
      jenisSurat: 'Internal',
      tujuan: '',
      kodeKlasifikasi: 'VS.330',
      perihal: '',
      ringkasan: '',
    });
    setIsModalOpen(true);
  };

  const handleOpenEdit = (item: SuratUmum) => {
    setFormData({
      nomorUrut: String(item.nomorUrut),
      tanggal: parseTanggalToInputFormat(item.tanggal),
      jenisSurat: item.jenisSurat,
      tujuan: item.tujuan === '-' ? '' : item.tujuan,
      kodeKlasifikasi: item.kodeKlasifikasi,
      perihal: item.perihal,
      ringkasan: item.ringkasan ?? '',
    });
    setEditingId(item.id);
    setShowOptionalFields(true);
    setIsModalOpen(true);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.tanggal || !isValidDateString(formData.tanggal)) {
      alert('Tanggal surat tidak valid');
      return;
    }

    const matchingKlas = sortedKlasifikasi.find(k => k.kode === formData.kodeKlasifikasi);
    const defaultPerihal = matchingKlas ? `${matchingKlas.kategori}: ${matchingKlas.uraian}` : 'Surat Keluar Dinas';
    const finalPerihal = formData.perihal.trim() || defaultPerihal;
    const finalTujuan = formData.tujuan.trim() || '-';
    const nomorSurat = activeNomorSurat;

    if (isDuplicateNomor(suratList, nomorSurat, editingId ?? undefined)) {
      alert(`Nomor surat ${nomorSurat} sudah terdaftar dalam sistem`);
      return;
    }

    if (editingId) {
      const existing = suratList.find((s) => s.id === editingId);
      onUpdateSurat({
        ...existing,
        id: editingId,
        nomorUrut: formData.nomorUrut,
        tanggal: formatTanggalIndonesia(formData.tanggal),
        jenisSurat: formData.jenisSurat,
        tujuan: finalTujuan,
        kodeKlasifikasi: formData.kodeKlasifikasi,
        nomorSurat: nomorSurat,
        perihal: finalPerihal,
        ringkasan: formData.ringkasan.trim(),
        createdAt: existing?.createdAt ?? new Date().toISOString(),
      });
      setEditingId(null);
      setIsModalOpen(false);
      return;
    }

    const newSurat: SuratUmum = {
      id: newId('su'),
      nomorUrut: activeNomorUrut,
      tanggal: formatTanggalIndonesia(formData.tanggal),
      jenisSurat: formData.jenisSurat,
      tujuan: finalTujuan,
      kodeKlasifikasi: formData.kodeKlasifikasi,
      nomorSurat: nomorSurat,
      perihal: finalPerihal,
      ringkasan: formData.ringkasan.trim(),
      createdAt: new Date().toISOString()
    };

    onAddSurat(newSurat);
    // Salin otomatis nomor surat yang baru dibuat
    copyToClipboard(nomorSurat, newSurat.id);
    setEditingId(null);
    setIsModalOpen(false);
  };

  const copyToClipboard = async (text: string, id: string) => {
    const ok = await copyText(text);
    if (!ok) return;
    setCopiedId(id);
    if (copyTimerRef.current) clearTimeout(copyTimerRef.current);
    copyTimerRef.current = setTimeout(() => setCopiedId(null), 2000);
  };

  const filteredList = useMemo(() => {
    return suratList
      .filter((item) => {
        const matchSearch =
          item.nomorSurat.toLowerCase().includes(searchTerm.toLowerCase()) ||
          item.perihal.toLowerCase().includes(searchTerm.toLowerCase()) ||
          item.tujuan.toLowerCase().includes(searchTerm.toLowerCase());

        const matchJenis = filterJenis === 'Semua' || item.jenisSurat === filterJenis;
        const matchKlasifikasi = filterKlasifikasi === 'Semua' || item.kodeKlasifikasi === filterKlasifikasi;

        return matchSearch && matchJenis && matchKlasifikasi;
      })
      .sort((a, b) => compareNomorUrutDesc(a.nomorUrut, b.nomorUrut));
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
    exportTableToCSV(`Surat_Umum_BPS_Selayar_${new Date().toISOString().slice(0, 10)}`, rows);
  };

  return (
    <div className="space-y-4 pb-12">
      
      {/* Header Banner */}
      <div className="bg-white rounded-xl p-4 sm:p-5 border border-slate-200 flex flex-col md:flex-row md:items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-sky-50 border border-sky-100 flex items-center justify-center text-sky-700 shrink-0">
            <Mail className="w-5 h-5 stroke-[1.5]" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-[11px] font-semibold text-sky-800 bg-sky-50 px-2 py-0.5 rounded border border-sky-200">
                Surat Keluar
              </span>
              <span className="text-xs text-slate-500">Satker 7301</span>
            </div>
            <h2 className="text-lg font-bold text-slate-900 tracking-tight mt-0.5">
              Penomoran Surat Umum
            </h2>
            <p className="text-xs text-slate-500">
              Input tanggal dan kategori arsip untuk nomor dinas otomatis.
            </p>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <a
            href={PORTAL_LINKS.klasifikasiSubstantif}
            target="_blank"
            rel="noopener noreferrer"
            className="px-2.5 py-1.5 rounded-lg border border-slate-200 hover:bg-slate-50 text-slate-700 text-xs font-medium flex items-center gap-1.5 transition-colors"
            title="Daftar Kode Klasifikasi Substantif"
          >
            <FileSpreadsheet className="w-3.5 h-3.5 text-sky-600" />
            <span>Substantif</span>
          </a>

          <a
            href={PORTAL_LINKS.klasifikasiFasilitatif}
            target="_blank"
            rel="noopener noreferrer"
            className="px-2.5 py-1.5 rounded-lg border border-slate-200 hover:bg-slate-50 text-slate-700 text-xs font-medium flex items-center gap-1.5 transition-colors"
            title="Daftar Kode Klasifikasi Fasilitatif"
          >
            <FileSpreadsheet className="w-3.5 h-3.5 text-indigo-600" />
            <span>Fasilitatif</span>
          </a>

          <a
            href={PORTAL_LINKS.suratUmum}
            target="_blank"
            rel="noopener noreferrer"
            className="px-2.5 py-1.5 rounded-lg border border-slate-200 hover:bg-slate-50 text-slate-700 text-xs font-medium flex items-center gap-1.5 transition-colors"
            title="Buka Spreadsheet Asli"
          >
            <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
            <span>Sheet</span>
          </a>

          <button
            type="button"
            onClick={handleExportCSV}
            className="px-2.5 py-1.5 rounded-lg border border-slate-200 hover:bg-slate-50 text-slate-700 text-xs font-medium flex items-center gap-1.5 transition-colors"
            title="Ekspor Data ke CSV"
          >
            <Download className="w-3.5 h-3.5 text-slate-400" />
            <span>CSV</span>
          </button>

          <button
            type="button"
            onClick={handleOpenModal}
            className="px-3.5 py-1.5 rounded-lg bg-sky-600 hover:bg-sky-700 text-white text-xs font-semibold flex items-center gap-1.5 transition-colors shadow-xs"
          >
            <Plus className="w-4 h-4" />
            <span>Buat Surat</span>
          </button>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="bg-white rounded-xl p-3 border border-slate-200 flex flex-col md:flex-row gap-2.5 items-center justify-between">
        
        {/* Search */}
        <div className="relative w-full md:w-80">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-slate-400" />
          <input
            type="text"
            placeholder="Cari nomor, perihal, atau tujuan..."
            aria-label="Cari surat"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-9 pr-3 py-1.5 bg-slate-50 border border-slate-200 rounded-lg text-xs focus:outline-hidden focus:ring-1 focus:ring-sky-500"
          />
        </div>

        {/* Filters */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 w-full md:w-auto">
          {/* Jenis Surat */}
          <div className="flex items-center gap-1 bg-slate-100 p-0.5 rounded-lg text-xs font-medium">
            {(['Semua', 'Internal', 'Eksternal'] as const).map((j) => (
              <button
                type="button"
                key={j}
                onClick={() => setFilterJenis(j)}
                className={`px-2.5 py-1 rounded-md text-xs transition-colors ${
                  filterJenis === j ? 'bg-white text-slate-900 shadow-2xs font-semibold' : 'text-slate-600 hover:text-slate-900'
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
            className="w-full sm:w-auto bg-slate-50 border border-slate-200 text-slate-700 text-xs rounded-lg px-2.5 py-1.5 font-medium focus:outline-hidden focus:ring-1 focus:ring-sky-500"
          >
            <option value="Semua">Semua Klasifikasi ({sortedKlasifikasi.length})</option>
            {sortedKlasifikasi.map((k) => (
              <option key={k.kode} value={k.kode}>
                {k.kode} - {k.kategori}
              </option>
            ))}
          </select>
        </div>

      </div>

      {/* Mobile Compact List (md:hidden) */}
      <div className="md:hidden bg-white rounded-xl border border-slate-200 divide-y divide-slate-100 overflow-hidden">
        {filteredList.length === 0 ? (
          <div className="p-6 text-center text-slate-400 text-xs">
            Tidak ada surat yang sesuai kriteria.
          </div>
        ) : (
          filteredList.map((item) => (
            <div
              key={item.id}
              className="p-2.5 hover:bg-slate-50/70 transition-colors flex items-center justify-between gap-2"
            >
              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-1.5 flex-wrap">
                  <span className="font-mono text-xs font-bold text-sky-900">
                    {item.nomorSurat}
                  </span>
                  <span className="text-[10px] text-slate-500 font-mono">• {item.tanggal}</span>
                  <span className="text-[10px] font-mono px-1 py-0.2 bg-slate-100 text-slate-600 rounded">
                    {item.kodeKlasifikasi}
                  </span>
                </div>
                <p className="text-xs text-slate-800 truncate mt-0.5" title={item.perihal}>
                  {item.perihal}
                </p>
                {item.tujuan && item.tujuan !== '-' && (
                  <p className="text-[11px] text-slate-500 truncate">
                    Tujuan: {item.tujuan}
                  </p>
                )}
              </div>

              <div className="flex items-center gap-1 shrink-0">
                <button
                  type="button"
                  onClick={() => copyToClipboard(item.nomorSurat, item.id)}
                  className="p-1.5 text-slate-500 hover:text-sky-700 hover:bg-slate-100 rounded-lg transition-colors"
                  title="Salin Nomor"
                >
                  {copiedId === item.id ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                </button>
                <button
                  type="button"
                  onClick={() => handleOpenEdit(item)}
                  className="p-1.5 text-slate-500 hover:text-slate-800 hover:bg-slate-100 rounded-lg transition-colors"
                  title="Edit"
                >
                  <Pencil className="w-3.5 h-3.5" />
                </button>
                <button
                  type="button"
                  onClick={() => {
                    if (confirm(`Hapus surat ${item.nomorSurat}?`)) onDeleteSurat(item.id);
                  }}
                  className="p-1.5 text-slate-400 hover:text-rose-600 hover:bg-rose-50 rounded-lg transition-colors"
                  title="Hapus"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Desktop Dense Table View (md+) */}
      <div className="hidden md:block bg-white rounded-xl border border-slate-200 overflow-hidden shadow-2xs">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-slate-50/90 border-b border-slate-200 text-slate-500 font-semibold uppercase tracking-wider text-[11px]">
              <tr>
                <th scope="col" className="py-2 px-2.5 w-12 text-center">No</th>
                <th scope="col" className="py-2 px-2.5 w-28">Tanggal</th>
                <th scope="col" className="py-2 px-2.5 w-60">Nomor Surat</th>
                <th scope="col" className="py-2 px-2.5 w-24">Klasifikasi</th>
                <th scope="col" className="py-2 px-2.5">Perihal</th>
                <th scope="col" className="py-2 px-2.5 w-44">Tujuan</th>
                <th scope="col" className="py-2 px-2.5 w-20 text-center">Jenis</th>
                <th scope="col" className="py-2 px-2.5 w-20 text-center">Aksi</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filteredList.length === 0 ? (
                <tr>
                  <td colSpan={8} className="py-8 text-center text-slate-400">
                    Tidak ada surat yang sesuai kriteria pencarian.
                  </td>
                </tr>
              ) : (
                filteredList.map((item) => (
                  <tr key={item.id} className="hover:bg-slate-50/80 transition-colors">
                    <td className="py-1.5 px-2.5 font-mono text-center text-slate-500 tabular-nums">
                      {item.nomorUrut}
                    </td>
                    <td className="py-1.5 px-2.5 text-slate-600 whitespace-nowrap tabular-nums">
                      {item.tanggal}
                    </td>
                    <td className="py-1.5 px-2.5 font-mono font-bold text-sky-900 whitespace-nowrap">
                      <div className="flex items-center gap-1.5">
                        <span className="select-all">{item.nomorSurat}</span>
                        <button
                          type="button"
                          onClick={() => copyToClipboard(item.nomorSurat, item.id)}
                          className="text-slate-400 hover:text-sky-600 p-0.5 rounded transition-colors"
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
                    <td className="py-1.5 px-2.5">
                      <span className="font-mono text-[11px] px-1.5 py-0.5 bg-slate-100 rounded text-slate-700">
                        {item.kodeKlasifikasi}
                      </span>
                    </td>
                    <td className="py-1.5 px-2.5 text-slate-700 max-w-sm">
                      <span className="truncate block" title={item.perihal}>
                        {item.perihal}
                      </span>
                    </td>
                    <td className="py-1.5 px-2.5 text-slate-600 max-w-44">
                      <span className="truncate block" title={item.tujuan}>
                        {item.tujuan || '-'}
                      </span>
                    </td>
                    <td className="py-1.5 px-2.5 text-center">
                      <span
                        className={`inline-block px-1.5 py-0.2 rounded text-[10px] font-medium ${
                          item.jenisSurat === 'Internal'
                            ? 'bg-slate-100 text-slate-700'
                            : 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                        }`}
                      >
                        {item.jenisSurat}
                      </span>
                    </td>
                    <td className="py-1.5 px-2.5 text-center">
                      <div className="flex items-center justify-center gap-1">
                        <button
                          type="button"
                          onClick={() => handleOpenEdit(item)}
                          className="text-slate-400 hover:text-slate-700 p-1 rounded hover:bg-slate-100 transition-colors"
                          title="Edit"
                        >
                          <Pencil className="w-3.5 h-3.5" />
                        </button>
                        <button
                          type="button"
                          onClick={() => {
                            if (confirm(`Yakin ingin menghapus surat ${item.nomorSurat}?`)) {
                              onDeleteSurat(item.id);
                            }
                          }}
                          className="text-slate-400 hover:text-rose-600 p-1 rounded hover:bg-rose-50 transition-colors"
                          title="Hapus"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        {/* Footer Info */}
        <div className="py-2 px-3 bg-slate-50 border-t border-slate-200 text-xs text-slate-500 flex justify-between items-center">
          <span>Menampilkan {filteredList.length} dari {suratList.length} surat keluar</span>
          <span className="font-mono text-slate-600">Tahun Aktif: {new Date().getFullYear()}</span>
        </div>
      </div>

      {/* Modal: Pembuatan hanya perlu Tanggal & Kategori */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-2xs"
          onClick={() => { setIsModalOpen(false); setEditingId(null); }}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-label={editingId ? 'Edit Surat Keluar' : 'Buat Surat Keluar Baru'}
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded-xl max-w-md w-full p-5 shadow-xl border border-slate-200 max-h-[90vh] overflow-y-auto"
          >
            
            <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-100">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-sky-50 border border-sky-100 flex items-center justify-center text-sky-700">
                  <Mail className="w-4 h-4 stroke-[1.5]" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-900">
                    {editingId ? 'Edit Surat Keluar' : 'Buat Surat Keluar Baru'}
                  </h3>
                  <p className="text-[11px] text-slate-500">
                    Pilih tanggal dan kategori untuk nomor otomatis
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => { setIsModalOpen(false); setEditingId(null); }}
                className="text-slate-400 hover:text-slate-600 p-1 rounded-lg hover:bg-slate-100"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <form onSubmit={handleFormSubmit} className="space-y-3.5">
              
              {/* Preview Auto-generated Nomor Surat */}
              <div className="bg-slate-50 border border-slate-200 p-3 rounded-lg">
                <div className="flex items-center justify-between mb-1 text-[11px]">
                  <span className="text-slate-500 font-medium">Nomor Surat Otomatis</span>
                  <span className="font-mono text-sky-700 font-semibold">
                    #{activeNomorUrut} • Tahun {activeTahun}
                  </span>
                </div>
                <div className="text-base font-mono font-bold text-slate-900 tracking-tight">
                  {activeNomorSurat}
                </div>
              </div>

              {/* 1. INPUT TANGGAL (Otomatis deteksi tahun) */}
              <div>
                <label htmlFor="su-tanggal" className="block text-xs font-semibold text-slate-700 mb-1">
                  Tanggal Surat <span className="text-rose-500">*</span>
                </label>
                <input
                  id="su-tanggal"
                  type="date"
                  value={formData.tanggal}
                  onChange={(e) => setFormData({ ...formData, tanggal: e.target.value })}
                  className="w-full px-3 py-1.5 border border-slate-200 rounded-lg text-xs font-medium bg-white focus:outline-hidden focus:ring-1 focus:ring-sky-500"
                  required
                />
                <p className="text-[10px] text-slate-400 mt-0.5">
                  Nomor urut otomatis dimulai dari 1 saat tahun berganti.
                </p>
              </div>

              {/* 2. INPUT KATEGORI (Kode Klasifikasi) */}
              <div>
                <div className="flex items-center justify-between mb-1">
                  <label htmlFor="su-kategori" className="block text-xs font-semibold text-slate-700">
                    Kategori / Kode Klasifikasi <span className="text-rose-500">*</span>
                  </label>
                  <span className="text-[10px] text-slate-400">Arsip BPS</span>
                </div>
                <select
                  id="su-kategori"
                  value={formData.kodeKlasifikasi}
                  onChange={(e) => setFormData({ ...formData, kodeKlasifikasi: e.target.value })}
                  className="w-full px-2.5 py-1.5 border border-slate-200 rounded-lg text-xs font-medium focus:outline-hidden focus:ring-1 focus:ring-sky-500"
                >
                  {sortedKlasifikasi.map((k) => (
                    <option key={k.kode} value={k.kode}>
                      {k.kode} - {k.kategori} ({k.uraian})
                    </option>
                  ))}
                </select>
              </div>

              {/* Toggle Keterangan Tambahan (Opsional) */}
              <div className="pt-1">
                <button
                  type="button"
                  onClick={() => setShowOptionalFields(!showOptionalFields)}
                  className="w-full flex items-center justify-between text-xs text-slate-600 hover:text-slate-900 py-1 border-t border-slate-100"
                >
                  <span className="font-medium">Rincian Tambahan (Opsional)</span>
                  {showOptionalFields ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                </button>

                {showOptionalFields && (
                  <div className="space-y-2.5 pt-2 animate-fadeIn">
                    {/* Alamat Tujuan */}
                    <div>
                      <label className="block text-[11px] font-medium text-slate-700 mb-0.5">
                        Alamat / Tujuan (Opsional)
                      </label>
                      <input
                        type="text"
                        placeholder="Contoh: Bappeda Selayar / Internal"
                        value={formData.tujuan}
                        onChange={(e) => setFormData({ ...formData, tujuan: e.target.value })}
                        className="w-full px-2.5 py-1.5 border border-slate-200 rounded-lg text-xs focus:outline-hidden focus:ring-1 focus:ring-sky-500"
                      />
                    </div>

                    {/* Perihal */}
                    <div>
                      <label className="block text-[11px] font-medium text-slate-700 mb-0.5">
                        Perihal Surat (Opsional)
                      </label>
                      <textarea
                        rows={2}
                        placeholder="Jika dikosongkan, akan terisi otomatis sesuai nama kategori"
                        value={formData.perihal}
                        onChange={(e) => setFormData({ ...formData, perihal: e.target.value })}
                        className="w-full px-2.5 py-1.5 border border-slate-200 rounded-lg text-xs focus:outline-hidden focus:ring-1 focus:ring-sky-500"
                      />
                    </div>

                    {/* Jenis Surat */}
                    <div>
                      <label className="block text-[11px] font-medium text-slate-700 mb-1">
                        Jenis Surat
                      </label>
                      <div className="grid grid-cols-2 gap-2">
                        {(['Internal', 'Eksternal'] as const).map((j) => (
                          <button
                            key={j}
                            type="button"
                            onClick={() => setFormData({ ...formData, jenisSurat: j })}
                            className={`py-1 px-3 rounded-lg text-xs font-medium border transition-colors ${
                              formData.jenisSurat === j
                                ? 'bg-slate-900 text-white border-slate-900'
                                : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                            }`}
                          >
                            {j}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Action Buttons */}
              <div className="flex items-center justify-end gap-2 pt-3 border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => { setIsModalOpen(false); setEditingId(null); }}
                  className="px-3 py-1.5 rounded-lg border border-slate-200 text-slate-600 hover:bg-slate-50 text-xs font-medium transition-colors"
                >
                  Batal
                </button>
                <button
                  type="submit"
                  className="px-4 py-1.5 rounded-lg bg-sky-600 hover:bg-sky-700 text-white text-xs font-semibold shadow-xs transition-colors"
                >
                  {editingId ? 'Simpan Perubahan' : 'Buat Nomor Surat'}
                </button>
              </div>

            </form>
          </div>
        </div>
      )}

    </div>
  );
};
