import React, { useState, useMemo, useEffect, useRef } from 'react';
import { newId } from '../utils/ids';
import { copyText } from '../utils/clipboard';
import { isValidDateString, isDuplicateNomor } from '../utils/validation';
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
  Pencil, 
  Users,
  ChevronDown,
  ChevronUp
} from 'lucide-react';
import { BAST } from '../types';
import { KODE_KLASIFIKASI_BPS, PORTAL_LINKS } from '../data/seedData';
import { 
  generateNomorBAST, 
  formatTanggalIndonesia, 
  compareNomorUrutDesc, 
  computeNextNomorUrut, 
  getSortedKlasifikasiList, 
  parseTanggalToInputFormat,
  getTahunFromTanggal
} from '../utils/formatters';
import { exportTableToCSV } from '../utils/storage';

interface BASTViewProps {
  bastList: BAST[];
  onAddBAST: (bast: BAST) => void;
  onUpdateBAST: (b: BAST) => void;
  onDeleteBAST: (id: string) => void;
}

export const BASTView: React.FC<BASTViewProps> = ({
  bastList,
  onAddBAST,
  onUpdateBAST,
  onDeleteBAST
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterKlasifikasi, setFilterKlasifikasi] = useState<string>('Semua');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showOptionalFields, setShowOptionalFields] = useState(false);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [printingBast, setPrintingBast] = useState<BAST | null>(null);
  const [editingId, setEditingId] = useState<string | null>(null);
  const copyTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (copyTimerRef.current) {
        clearTimeout(copyTimerRef.current);
      }
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

  const activeTahun = getTahunFromTanggal(formData.tanggal);
  const activeNomorUrut = editingId ? formData.nomorUrut : computeNextNomorUrut(bastList, activeTahun);
  const activeNomorBAST = generateNomorBAST(activeNomorUrut, formData.kodeKlasifikasi, activeTahun);

  const handleOpenModal = () => {
    setEditingId(null);
    setShowOptionalFields(false);
    const today = new Date().toISOString().slice(0, 10);
    const yr = getTahunFromTanggal(today);
    setFormData({
      nomorUrut: String(computeNextNomorUrut(bastList, yr)),
      tanggal: today,
      kodeKlasifikasi: 'VS.330',
      perihal: '',
      pihakPertama: 'Ketua Tim Teknis BPS',
      pihakKedua: 'Mitra Statistik',
      keterangan: ''
    });
    setIsModalOpen(true);
  };

  const handleOpenEdit = (item: BAST) => {
    setFormData({
      nomorUrut: String(item.nomorUrut),
      tanggal: parseTanggalToInputFormat(item.tanggal),
      kodeKlasifikasi: item.kodeKlasifikasi,
      perihal: item.perihal,
      pihakPertama: item.pihakPertama,
      pihakKedua: item.pihakKedua,
      keterangan: item.keterangan ?? ''
    });
    setEditingId(item.id);
    setShowOptionalFields(true);
    setIsModalOpen(true);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.tanggal || !isValidDateString(formData.tanggal)) {
      alert('Tanggal BAST tidak valid.');
      return;
    }

    const perihalFinal = formData.perihal.trim() || `Berita Acara Serah Terima Kegiatan BPS Tahun ${activeTahun}`;
    const nomorBAST = activeNomorBAST;

    if (isDuplicateNomor(bastList, nomorBAST, editingId ?? undefined)) {
      alert('Nomor BAST sudah terdaftar, gunakan nomor urut atau klasifikasi lain.');
      return;
    }

    if (editingId) {
      const existing = bastList.find((b) => b.id === editingId);
      onUpdateBAST({
        ...(existing as BAST),
        id: editingId,
        nomorUrut: formData.nomorUrut,
        tanggal: formatTanggalIndonesia(formData.tanggal),
        kodeKlasifikasi: formData.kodeKlasifikasi,
        nomorBAST: nomorBAST,
        perihal: perihalFinal,
        pihakPertama: formData.pihakPertama.trim() || 'Ketua Tim',
        pihakKedua: formData.pihakKedua.trim() || 'Mitra',
        keterangan: formData.keterangan.trim() || undefined,
        createdAt: existing?.createdAt ?? new Date().toISOString()
      });
      setEditingId(null);
      setIsModalOpen(false);
      return;
    }

    const newBast: BAST = {
      id: newId('bast'),
      nomorUrut: activeNomorUrut,
      tanggal: formatTanggalIndonesia(formData.tanggal),
      kodeKlasifikasi: formData.kodeKlasifikasi,
      nomorBAST: nomorBAST,
      perihal: perihalFinal,
      pihakPertama: formData.pihakPertama.trim() || 'Ketua Tim',
      pihakKedua: formData.pihakKedua.trim() || 'Mitra',
      keterangan: formData.keterangan.trim() || undefined,
      createdAt: new Date().toISOString()
    };

    onAddBAST(newBast);
    setEditingId(null);
    setIsModalOpen(false);
  };

  const copyToClipboard = async (text: string, id: string) => {
    const ok = await copyText(text);
    if (!ok) {
      alert('Gagal menyalin nomor BAST.');
      return;
    }
    setCopiedId(id);
    if (copyTimerRef.current) {
      clearTimeout(copyTimerRef.current);
    }
    copyTimerRef.current = setTimeout(() => setCopiedId(null), 2000);
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
    <div className="space-y-4 pb-12">
      
      {/* Header Card */}
      <div className="bg-white rounded-xl p-4 sm:p-5 border border-slate-200 shadow-2xs flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-700 shrink-0">
            <FileCheck2 className="w-5 h-5 stroke-[1.5]" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                Berita Acara
              </span>
              <span className="text-[11px] font-medium text-slate-500">BPS Kab. Kepulauan Selayar</span>
            </div>
            <h2 className="text-lg font-bold text-slate-900 tracking-tight mt-0.5">
              BAST (Berita Acara Serah Terima)
            </h2>
            <p className="text-xs text-slate-500">
              Pengelolaan nomor dan naskah BAST pengadaan dan pekerjaan survei.
            </p>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <a
            href={PORTAL_LINKS.bast}
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
            className="px-3.5 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold flex items-center gap-1.5 transition-colors shadow-xs"
          >
            <Plus className="w-4 h-4" />
            <span>Buat BAST</span>
          </button>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="bg-white rounded-xl p-3 border border-slate-200 flex flex-col md:flex-row gap-2.5 items-center justify-between">
        <div className="relative w-full md:w-80">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-slate-400" />
          <input
            type="text"
            placeholder="Cari nomor BAST, perihal, atau pihak..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-9 pr-3 py-1.5 bg-slate-50 border border-slate-200 rounded-lg text-xs focus:outline-hidden focus:ring-1 focus:ring-emerald-500"
          />
        </div>

        <select
          value={filterKlasifikasi}
          onChange={(e) => setFilterKlasifikasi(e.target.value)}
          className="w-full md:w-auto bg-slate-50 border border-slate-200 text-slate-700 text-xs rounded-lg px-2.5 py-1.5 font-medium focus:outline-hidden focus:ring-1 focus:ring-emerald-500"
        >
          <option value="Semua">Semua Klasifikasi ({sortedKlasifikasi.length})</option>
          {sortedKlasifikasi.map(k => (
            <option key={k.kode} value={k.kode}>{k.kode} - {k.kategori}</option>
          ))}
        </select>
      </div>

      {/* Mobile Compact View (md:hidden) */}
      <div className="md:hidden bg-white rounded-xl border border-slate-200 divide-y divide-slate-100 overflow-hidden">
        {filteredList.length === 0 ? (
          <div className="p-6 text-center text-slate-400 text-xs">
            Tidak ada data BAST yang cocok.
          </div>
        ) : (
          filteredList.map((item) => (
            <div
              key={item.id}
              className="p-3 hover:bg-slate-50/70 transition-colors flex items-start justify-between gap-2.5"
            >
              <div className="flex items-start gap-2.5 min-w-0 flex-1">
                <span className="w-6 h-6 rounded bg-slate-100 text-slate-700 text-[11px] font-mono font-bold flex items-center justify-center shrink-0 mt-0.5">
                  {item.nomorUrut}
                </span>

                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-1.5 flex-wrap">
                    <span className="font-mono font-bold text-xs text-emerald-950 tracking-tight">
                      {item.nomorBAST}
                    </span>
                    <span className="text-[10px] text-slate-400 font-medium">• {item.tanggal}</span>
                  </div>

                  <p className="text-xs text-slate-800 mt-0.5 line-clamp-2">
                    {item.perihal}
                  </p>

                  <div className="flex items-center gap-1.5 mt-1.5 text-[10px] text-slate-500 flex-wrap">
                    <span className="bg-slate-100 px-1.5 py-0.5 rounded text-slate-700">
                      {item.pihakPertama} & {item.pihakKedua}
                    </span>
                    {item.kodeKlasifikasi && (
                      <span className="bg-emerald-50 text-emerald-800 border border-emerald-200 px-1 py-0.5 rounded font-mono font-medium">
                        {item.kodeKlasifikasi}
                      </span>
                    )}
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-1 shrink-0 self-center">
                <button
                  type="button"
                  onClick={() => setPrintingBast(item)}
                  className="p-1.5 text-slate-400 hover:text-emerald-700 hover:bg-emerald-50 rounded-lg transition-colors"
                  title="Cetak Format BAST"
                >
                  <Printer className="w-3.5 h-3.5" />
                </button>
                <button
                  type="button"
                  onClick={() => handleOpenEdit(item)}
                  className="p-1.5 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-lg transition-colors"
                  title="Edit"
                >
                  <Pencil className="w-3.5 h-3.5" />
                </button>
                <button
                  type="button"
                  onClick={() => {
                    if (confirm(`Hapus BAST nomor ${item.nomorBAST}?`)) {
                      onDeleteBAST(item.id);
                    }
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
                <th scope="col" className="py-2 px-2.5 w-48">Nomor BAST</th>
                <th scope="col" className="py-2 px-2.5">Perihal / Pekerjaan</th>
                <th scope="col" className="py-2 px-2.5 w-36">Pihak Pertama</th>
                <th scope="col" className="py-2 px-2.5 w-36">Pihak Kedua</th>
                <th scope="col" className="py-2 px-2.5 w-24 text-center">Aksi</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filteredList.length === 0 ? (
                <tr>
                  <td colSpan={7} className="py-8 text-center text-slate-400">
                    Tidak ada data BAST yang cocok.
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
                    <td className="py-1.5 px-2.5 font-mono font-bold text-emerald-950 whitespace-nowrap">
                      <div className="flex items-center gap-1.5">
                        <span className="select-all">{item.nomorBAST}</span>
                        <button
                          type="button"
                          onClick={() => copyToClipboard(item.nomorBAST, item.id)}
                          className="text-slate-400 hover:text-emerald-700 p-0.5 rounded transition-colors"
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
                    <td className="py-1.5 px-2.5 text-slate-700 max-w-sm">
                      <span className="truncate block" title={item.perihal}>
                        {item.perihal}
                      </span>
                    </td>
                    <td className="py-1.5 px-2.5 text-slate-600 text-xs truncate max-w-[140px]" title={item.pihakPertama}>
                      {item.pihakPertama}
                    </td>
                    <td className="py-1.5 px-2.5 text-slate-600 text-xs truncate max-w-[140px]" title={item.pihakKedua}>
                      {item.pihakKedua}
                    </td>
                    <td className="py-1.5 px-2.5 text-center">
                      <div className="flex items-center justify-center gap-1">
                        <button
                          type="button"
                          onClick={() => handleOpenEdit(item)}
                          className="text-slate-400 hover:text-slate-700 p-1 rounded hover:bg-slate-100 transition-colors"
                          title="Edit BAST"
                        >
                          <Pencil className="w-3.5 h-3.5" />
                        </button>
                        <button
                          type="button"
                          onClick={() => setPrintingBast(item)}
                          className="text-slate-400 hover:text-emerald-700 p-1 rounded hover:bg-emerald-50 transition-colors"
                          title="Pratinjau / Cetak BAST"
                        >
                          <Printer className="w-3.5 h-3.5" />
                        </button>
                        <button
                          type="button"
                          onClick={() => {
                            if (confirm(`Hapus BAST nomor ${item.nomorBAST}?`)) {
                              onDeleteBAST(item.id);
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

        <div className="py-2 px-3 bg-slate-50 border-t border-slate-200 text-xs text-slate-500 flex justify-between items-center">
          <span>Menampilkan {filteredList.length} dari {bastList.length} BAST</span>
          <span className="font-mono text-slate-600">BPS 7301</span>
        </div>
      </div>

      {/* Modal: Input Tanggal & Kategori Saja */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-2xs"
          onClick={() => { setIsModalOpen(false); setEditingId(null); }}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-label={editingId ? 'Edit BAST' : 'Buat BAST Baru'}
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded-xl max-w-md w-full p-5 shadow-xl border border-slate-200 max-h-[90vh] overflow-y-auto"
          >
            <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-100">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-700">
                  <FileCheck2 className="w-4 h-4 stroke-[1.5]" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-900">{editingId ? 'Edit BAST' : 'Buat BAST Baru'}</h3>
                  <p className="text-[11px] text-slate-500">Pilih tanggal dan kode klasifikasi untuk nomor otomatis</p>
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
              
              {/* Preview Auto-generated Nomor BAST */}
              <div className="bg-slate-50 border border-slate-200 p-3 rounded-lg">
                <div className="flex items-center justify-between mb-1 text-[11px]">
                  <span className="text-slate-500 font-medium">Nomor BAST Otomatis</span>
                  <span className="font-mono text-emerald-800 font-semibold">
                    #{activeNomorUrut} • Tahun {activeTahun}
                  </span>
                </div>
                <div className="text-base font-mono font-bold text-slate-900 tracking-tight">
                  {activeNomorBAST}
                </div>
              </div>

              {/* 1. INPUT TANGGAL */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Tanggal BAST <span className="text-rose-500">*</span>
                </label>
                <input
                  type="date"
                  value={formData.tanggal}
                  onChange={(e) => setFormData({ ...formData, tanggal: e.target.value })}
                  className="w-full px-3 py-1.5 border border-slate-200 rounded-lg text-xs font-medium bg-white focus:outline-hidden focus:ring-1 focus:ring-emerald-500"
                  required
                />
                <p className="text-[10px] text-slate-400 mt-0.5">
                  Nomor urut otomatis dimulai dari 1 saat tahun berganti.
                </p>
              </div>

              {/* 2. INPUT KATEGORI (Kode Klasifikasi) */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Kode Klasifikasi <span className="text-rose-500">*</span>
                </label>
                <select
                  value={formData.kodeKlasifikasi}
                  onChange={(e) => setFormData({ ...formData, kodeKlasifikasi: e.target.value })}
                  className="w-full px-2.5 py-1.5 border border-slate-200 rounded-lg text-xs font-medium focus:outline-hidden focus:ring-1 focus:ring-emerald-500"
                >
                  {sortedKlasifikasi.map((k) => (
                    <option key={k.kode} value={k.kode}>
                      {k.kode} - {k.kategori}: {k.uraian}
                    </option>
                  ))}
                </select>
              </div>

              {/* Accordion Rincian Tambahan (Opsional) */}
              <div className="pt-1">
                <button
                  type="button"
                  onClick={() => setShowOptionalFields(!showOptionalFields)}
                  className="w-full flex items-center justify-between text-xs text-slate-600 hover:text-slate-900 py-1 border-t border-slate-100"
                >
                  <span className="font-medium">Rincian Tambahan & Pihak (Opsional)</span>
                  {showOptionalFields ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                </button>

                {showOptionalFields && (
                  <div className="space-y-3 pt-2 text-xs">
                    <div>
                      <label className="block font-medium text-slate-700 mb-1">
                        Perihal / Kegiatan Serah Terima
                      </label>
                      <textarea
                        rows={2}
                        placeholder={`Default: Berita Acara Serah Terima Kegiatan BPS Tahun ${activeTahun}`}
                        value={formData.perihal}
                        onChange={(e) => setFormData({ ...formData, perihal: e.target.value })}
                        className="w-full px-3 py-1.5 border border-slate-200 rounded-lg text-xs focus:outline-hidden focus:ring-1 focus:ring-emerald-500"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-2.5">
                      <div>
                        <label className="block font-medium text-slate-700 mb-1">Pihak Pertama</label>
                        <input
                          type="text"
                          value={formData.pihakPertama}
                          onChange={(e) => setFormData({ ...formData, pihakPertama: e.target.value })}
                          className="w-full px-2.5 py-1.5 border border-slate-200 rounded-lg text-xs focus:outline-hidden focus:ring-1 focus:ring-emerald-500"
                        />
                      </div>

                      <div>
                        <label className="block font-medium text-slate-700 mb-1">Pihak Kedua</label>
                        <input
                          type="text"
                          value={formData.pihakKedua}
                          onChange={(e) => setFormData({ ...formData, pihakKedua: e.target.value })}
                          className="w-full px-2.5 py-1.5 border border-slate-200 rounded-lg text-xs focus:outline-hidden focus:ring-1 focus:ring-emerald-500"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block font-medium text-slate-700 mb-1">
                        Keterangan
                      </label>
                      <textarea
                        rows={2}
                        placeholder="Catatan tambahan..."
                        value={formData.keterangan}
                        onChange={(e) => setFormData({ ...formData, keterangan: e.target.value })}
                        className="w-full px-3 py-1.5 border border-slate-200 rounded-lg text-xs focus:outline-hidden focus:ring-1 focus:ring-emerald-500"
                      />
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
                  className="px-3.5 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold shadow-xs transition-colors"
                >
                  {editingId ? 'Simpan Perubahan' : 'Buat BAST'}
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
              <button type="button"
                onClick={() => window.print()}
                className="px-4 py-2 bg-emerald-600 text-white rounded-xl text-xs font-bold flex items-center gap-1.5"
              >
                <Printer className="w-4 h-4" />
                <span>Cetak BAST</span>
              </button>
              <button type="button"
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
