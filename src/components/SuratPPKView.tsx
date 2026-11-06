import React, { useState, useMemo, useEffect, useRef } from 'react';
import { newId } from '../utils/ids';
import { copyText } from '../utils/clipboard';
import { isValidDateString, isDuplicateNomor } from '../utils/validation';
import { 
  FileText, 
  Plus, 
  Search, 
  Download, 
  ExternalLink, 
  Trash2, 
  X, 
  Copy, 
  Check,
  Pencil,
  ChevronDown,
  ChevronUp
} from 'lucide-react';
import { SuratPPK } from '../types';
import { PORTAL_LINKS } from '../data/seedData';
import { 
  generateNomorSuratPPK, 
  formatTanggalIndonesia, 
  compareNomorUrutDesc, 
  computeNextNomorUrut,
  parseTanggalToInputFormat,
  getTahunFromTanggal,
  getSortedKlasifikasiList,
  isSlotEmpty
} from '../utils/formatters';
import { exportTableToCSV } from '../utils/storage';

interface SuratPPKViewProps {
  ppkList: SuratPPK[];
  onAddPPK: (ppk: SuratPPK) => void;
  onUpdatePPK: (p: SuratPPK) => void;
  onDeletePPK: (id: string) => void;
}

export const SuratPPKView: React.FC<SuratPPKViewProps> = ({
  ppkList,
  onAddPPK,
  onUpdatePPK,
  onDeletePPK
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterJenis, setFilterJenis] = useState<'Semua' | 'Eksternal' | 'Internal'>('Semua');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showOptionalFields, setShowOptionalFields] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const copyTimerRef = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      if (copyTimerRef.current !== null) window.clearTimeout(copyTimerRef.current);
    };
  }, []);

  useEffect(() => {
    if (!isModalOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsModalOpen(false);
        setEditingId(null);
      }
    };
    document.addEventListener('keydown', onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = prev;
    };
  }, [isModalOpen]);

  const sortedKlasifikasi = useMemo(() => {
    return getSortedKlasifikasiList(ppkList);
  }, [ppkList]);

  const [formData, setFormData] = useState({
    nomorUrut: '1',
    tanggal: new Date().toISOString().slice(0, 10),
    jenisSurat: 'Eksternal' as 'Eksternal' | 'Internal',
    tujuan: '',
    kodeKlasifikasi: 'PL.300',
    perihal: ''
  });

  // Hitung nomor urut dan tahun dinamis berdasarkan tanggal (reset ke 1 jika tahun berganti, sisip jika tanggal lampau)
  const activeTahun = getTahunFromTanggal(formData.tanggal);
  const activeNomorUrut = editingId
    ? formData.nomorUrut
    : computeNextNomorUrut(ppkList, formData.tanggal);
  const activeNomorSurat = generateNomorSuratPPK(activeNomorUrut, formData.kodeKlasifikasi, activeTahun);

  const handleOpenModal = () => {
    setEditingId(null);
    setShowOptionalFields(false);
    const today = new Date().toISOString().slice(0, 10);
    setFormData({
      nomorUrut: String(computeNextNomorUrut(ppkList, today)),
      tanggal: today,
      jenisSurat: 'Eksternal',
      tujuan: '',
      kodeKlasifikasi: 'PL.300',
      perihal: ''
    });
    setIsModalOpen(true);
  };

  const handleOpenEdit = (item: SuratPPK) => {
    setEditingId(item.id);
    setFormData({
      nomorUrut: String(item.nomorUrut),
      tanggal: parseTanggalToInputFormat(item.tanggal),
      jenisSurat: item.jenisSurat,
      tujuan: item.tujuan === '-' ? '' : item.tujuan,
      kodeKlasifikasi: item.kodeKlasifikasi,
      perihal: item.perihal
    });
    setShowOptionalFields(true);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setEditingId(null);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.tanggal || !isValidDateString(formData.tanggal)) {
      alert('Tanggal surat PPK tidak valid.');
      return;
    }

    const matchingKlas = sortedKlasifikasi.find(k => k.kode === formData.kodeKlasifikasi);
    const defaultPerihal = matchingKlas ? `Pengadaan/PPK: ${matchingKlas.uraian}` : 'Administrasi Pengadaan & BMN (PPK)';
    const finalPerihal = formData.perihal.trim() || defaultPerihal;
    const finalTujuan = formData.tujuan.trim() || '-';
    const nomorSurat = activeNomorSurat;

    if (isDuplicateNomor(ppkList, nomorSurat, editingId ?? undefined)) {
      alert(`Nomor surat ${nomorSurat} sudah digunakan.`);
      return;
    }

    if (editingId) {
      const existing = ppkList.find((x) => x.id === editingId);
      onUpdatePPK({
        id: editingId,
        nomorUrut: formData.nomorUrut,
        tanggal: formatTanggalIndonesia(formData.tanggal),
        jenisSurat: formData.jenisSurat,
        tujuan: finalTujuan,
        kodeKlasifikasi: formData.kodeKlasifikasi,
        nomorSurat: nomorSurat,
        perihal: finalPerihal,
        createdAt: existing?.createdAt
      });
    } else {
      const newPPK: SuratPPK = {
        id: newId('ppk'),
        nomorUrut: activeNomorUrut,
        tanggal: formatTanggalIndonesia(formData.tanggal),
        jenisSurat: formData.jenisSurat,
        tujuan: finalTujuan,
        kodeKlasifikasi: formData.kodeKlasifikasi,
        nomorSurat: nomorSurat,
        perihal: finalPerihal,
        createdAt: new Date().toISOString()
      };
      onAddPPK(newPPK);
      copyToClipboard(nomorSurat, newPPK.id);
    }
    setIsModalOpen(false);
    setEditingId(null);
  };

  const copyToClipboard = async (text: string, id: string) => {
    await copyText(text);
    setCopiedId(id);
    if (copyTimerRef.current !== null) window.clearTimeout(copyTimerRef.current);
    copyTimerRef.current = window.setTimeout(() => setCopiedId(null), 2000);
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
    <div className="space-y-4 pb-12">
      
      {/* Header Banner */}
      <div className="bg-white rounded-xl p-4 sm:p-5 border border-slate-200 flex flex-col md:flex-row md:items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-sky-50 border border-sky-100 flex items-center justify-center text-sky-700 shrink-0">
            <FileText className="w-5 h-5 stroke-[1.5]" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-[11px] font-semibold text-sky-800 bg-sky-50 px-2 py-0.5 rounded border border-sky-200">
                Surat PPK
              </span>
              <span className="text-xs text-slate-500">Satker 7301</span>
            </div>
            <h2 className="text-lg font-bold text-slate-900 tracking-tight mt-0.5">
              Penomoran Surat PPK & Pengadaan
            </h2>
            <p className="text-xs text-slate-500">
              Input tanggal dan kategori arsip untuk nomor dinas Pejabat Pembuat Komitmen.
            </p>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <a
            href={PORTAL_LINKS.suratPPK}
            target="_blank"
            rel="noopener noreferrer"
            className="px-2.5 py-1.5 rounded-lg border border-slate-200 hover:bg-slate-50 text-slate-700 text-xs font-medium flex items-center gap-1.5 transition-colors"
            title="Buka Spreadsheet Asli Surat PPK"
          >
            <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
            <span>Sheet</span>
          </a>

          <button
            type="button"
            onClick={handleExportCSV}
            className="px-2.5 py-1.5 rounded-lg border border-slate-200 hover:bg-slate-50 text-slate-700 text-xs font-medium flex items-center gap-1.5 transition-colors"
            title="Ekspor CSV"
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
            <span>Buat Surat PPK</span>
          </button>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="bg-white rounded-xl p-3 border border-slate-200 flex flex-col md:flex-row gap-2.5 items-center justify-between">
        <div className="relative w-full md:w-80">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-slate-400" />
          <input
            type="text"
            placeholder="Cari nomor, perihal, atau tujuan..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-9 pr-3 py-1.5 bg-slate-50 border border-slate-200 rounded-lg text-xs focus:outline-hidden focus:ring-1 focus:ring-sky-500"
          />
        </div>

        <div className="flex items-center gap-1 bg-slate-100 p-0.5 rounded-lg text-xs font-medium">
          {(['Semua', 'Eksternal', 'Internal'] as const).map((j) => (
            <button
              key={j}
              type="button"
              onClick={() => setFilterJenis(j)}
              className={`px-2.5 py-1 rounded-md text-xs transition-colors ${
                filterJenis === j ? 'bg-white text-slate-900 shadow-2xs font-semibold' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {j}
            </button>
          ))}
        </div>
      </div>

      {/* Mobile Compact List */}
      <div className="md:hidden bg-white rounded-xl border border-slate-200 divide-y divide-slate-100 overflow-hidden">
        {filteredList.length === 0 ? (
          <div className="p-6 text-center text-slate-400 text-xs">
            Tidak ada surat PPK yang ditemukan.
          </div>
        ) : (
          filteredList.map((item) => (
            <div key={item.id} className="p-2.5 hover:bg-slate-50/70 transition-colors flex items-center justify-between gap-2">
              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-1.5 flex-wrap">
                  <span className="font-mono text-xs font-bold text-sky-900">{item.nomorSurat}</span>
                  <span className="text-[10px] text-slate-500 font-mono">• {item.tanggal}</span>
                  <span className="text-[10px] font-mono px-1 py-0.2 bg-slate-100 text-slate-600 rounded">
                    {item.kodeKlasifikasi}
                  </span>
                </div>
                {isSlotEmpty(item) ? (
                  <p className="mt-1">
                    <span className="italic text-amber-800 bg-amber-50 px-1.5 py-0.5 rounded text-[10px] border border-amber-200 inline-block font-medium">
                      Nomor Kosong (Tersedia)
                    </span>
                  </p>
                ) : (
                  <>
                    <p className="text-xs text-slate-800 truncate mt-0.5" title={item.perihal}>
                      {item.perihal}
                    </p>
                    {item.tujuan && item.tujuan !== '-' && (
                      <p className="text-[11px] text-slate-500 truncate">
                        Tujuan: {item.tujuan}
                      </p>
                    )}
                  </>
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
                  className={`p-1.5 rounded-lg transition-colors ${
                    isSlotEmpty(item)
                      ? 'text-amber-700 hover:text-amber-800 bg-amber-50 hover:bg-amber-100 border border-amber-200'
                      : 'text-slate-500 hover:text-slate-800 hover:bg-slate-100'
                  }`}
                  title={isSlotEmpty(item) ? "Gunakan Nomor Ini" : "Edit"}
                >
                  <Pencil className="w-3.5 h-3.5" />
                </button>
                <button
                  type="button"
                  onClick={() => {
                    const empty = isSlotEmpty(item);
                    const msg = empty
                      ? `Hapus permanen nomor ${item.nomorSurat}?`
                      : `Kosongkan surat PPK ${item.nomorSurat}?\nNomor ini tetap tersimpan dan otomatis diberikan jika ada pengajuan di tanggal yang sama.`;
                    if (confirm(msg)) onDeletePPK(item.id);
                  }}
                  className="p-1.5 text-slate-400 hover:text-rose-600 hover:bg-rose-50 rounded-lg transition-colors"
                  title={isSlotEmpty(item) ? "Hapus Permanen" : "Kosongkan Surat"}
                >
                  <Trash2 className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Desktop Dense Table View */}
      <div className="hidden md:block bg-white rounded-xl border border-slate-200 overflow-hidden shadow-2xs">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-slate-50/90 border-b border-slate-200 text-slate-500 font-semibold uppercase tracking-wider text-[11px]">
              <tr>
                <th scope="col" className="py-2 px-2.5 w-12 text-center">No</th>
                <th scope="col" className="py-2 px-2.5 w-28">Tanggal</th>
                <th scope="col" className="py-2 px-2.5 w-60">Nomor Surat PPK</th>
                <th scope="col" className="py-2 px-2.5 w-24">Klasifikasi</th>
                <th scope="col" className="py-2 px-2.5">Perihal</th>
                <th scope="col" className="py-2 px-2.5 w-44">Alamat Tujuan</th>
                <th scope="col" className="py-2 px-2.5 w-20 text-center">Jenis</th>
                <th scope="col" className="py-2 px-2.5 w-20 text-center">Aksi</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filteredList.length === 0 ? (
                <tr>
                  <td colSpan={8} className="py-8 text-center text-slate-400">
                    Tidak ada surat PPK yang sesuai kriteria pencarian.
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
                          title="Salin Nomor"
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
                      {isSlotEmpty(item) ? (
                        <span className="inline-flex items-center gap-1 italic text-amber-800 bg-amber-50 px-1.5 py-0.5 rounded text-[11px] border border-amber-200 font-medium">
                          Nomor Kosong (Tersedia)
                        </span>
                      ) : (
                        <span className="truncate block" title={item.perihal}>
                          {item.perihal}
                        </span>
                      )}
                    </td>
                    <td className="py-1.5 px-2.5 text-slate-600 max-w-44">
                      <span className="truncate block" title={item.tujuan}>
                        {isSlotEmpty(item) ? '-' : (item.tujuan || '-')}
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
                          className={`p-1 rounded transition-colors ${
                            isSlotEmpty(item)
                              ? 'text-amber-700 hover:text-amber-800 bg-amber-50 hover:bg-amber-100 border border-amber-200'
                              : 'text-slate-400 hover:text-slate-700 hover:bg-slate-100'
                          }`}
                          title={isSlotEmpty(item) ? "Gunakan Nomor Ini" : "Edit"}
                        >
                          <Pencil className="w-3.5 h-3.5" />
                        </button>
                        <button
                          type="button"
                          onClick={() => {
                            const empty = isSlotEmpty(item);
                            const msg = empty
                              ? `Hapus permanen nomor ${item.nomorSurat}?`
                              : `Kosongkan surat PPK ${item.nomorSurat}?\nNomor ini tetap tersimpan dan otomatis diberikan jika ada pengajuan di tanggal yang sama.`;
                            if (confirm(msg)) {
                              onDeletePPK(item.id);
                            }
                          }}
                          className="text-slate-400 hover:text-rose-600 p-1 rounded hover:bg-rose-50 transition-colors"
                          title={isSlotEmpty(item) ? "Hapus Permanen" : "Kosongkan Surat"}
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
          <span>Menampilkan {filteredList.length} dari {ppkList.length} surat PPK</span>
          <span className="font-mono text-slate-600">Tahun Aktif: {new Date().getFullYear()}</span>
        </div>
      </div>

      {/* Modal: Input Tanggal & Kategori Saja */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-2xs"
          onClick={handleCloseModal}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-label={editingId ? 'Edit Surat PPK' : 'Buat Surat PPK Baru'}
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded-xl max-w-md w-full p-5 shadow-xl border border-slate-200 max-h-[90vh] overflow-y-auto"
          >
            <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-100">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-sky-50 border border-sky-100 flex items-center justify-center text-sky-700">
                  <FileText className="w-4 h-4 stroke-[1.5]" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-900">
                    {editingId ? 'Edit Surat PPK' : 'Buat Surat PPK Baru'}
                  </h3>
                  <p className="text-[11px] text-slate-500">
                    Pilih tanggal dan kategori pengadaan untuk nomor otomatis
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={handleCloseModal}
                className="text-slate-400 hover:text-slate-600 p-1 rounded-lg hover:bg-slate-100"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <form onSubmit={handleFormSubmit} className="space-y-3.5">
              
              {/* Preview Auto-generated Nomor Surat */}
              <div className="bg-slate-50 border border-slate-200 p-3 rounded-lg">
                <div className="flex items-center justify-between mb-1 text-[11px]">
                  <span className="text-slate-500 font-medium">Nomor Surat PPK</span>
                  <span className={`font-mono font-semibold px-1.5 py-0.5 rounded text-[10px] ${
                    String(activeNomorUrut).includes('.')
                      ? 'bg-amber-100 text-amber-800 border border-amber-200'
                      : 'text-sky-700 bg-sky-50 border border-sky-200'
                  }`}>
                    #{activeNomorUrut} • {String(activeNomorUrut).includes('.') ? 'Sisip' : `Tahun ${activeTahun}`}
                  </span>
                </div>
                <div className="text-base font-mono font-bold text-slate-900 tracking-tight">
                  {activeNomorSurat}
                </div>
              </div>

              {/* 1. INPUT TANGGAL */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Tanggal Surat <span className="text-rose-500">*</span>
                </label>
                <input
                  type="date"
                  value={formData.tanggal}
                  onChange={(e) => setFormData({ ...formData, tanggal: e.target.value })}
                  className="w-full px-3 py-1.5 border border-slate-200 rounded-lg text-xs font-medium bg-white focus:outline-hidden focus:ring-1 focus:ring-sky-500"
                  required
                />
                <p className="text-[10px] text-slate-500 mt-0.5">
                  {String(activeNomorUrut).includes('.')
                    ? '⚡ Terdeteksi tanggal lampau: nomor otomatis menyelip (misal 201.1).'
                    : 'Nomor urut sesuai tanggal. Reset ke 1 saat tahun berganti.'}
                </p>
              </div>

              {/* 2. INPUT KATEGORI (Kode Klasifikasi) */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Kategori Pengadaan / Kode Klasifikasi <span className="text-rose-500">*</span>
                </label>
                <select
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

              {/* Toggle Rincian Tambahan (Opsional) */}
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
                    <div>
                      <label className="block text-[11px] font-medium text-slate-700 mb-0.5">
                        Alamat / Tujuan Surat
                      </label>
                      <input
                        type="text"
                        placeholder="Contoh: Penyedia / Rekanan Pengadaan"
                        value={formData.tujuan}
                        onChange={(e) => setFormData({ ...formData, tujuan: e.target.value })}
                        className="w-full px-2.5 py-1.5 border border-slate-200 rounded-lg text-xs focus:outline-hidden focus:ring-1 focus:ring-sky-500"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-medium text-slate-700 mb-0.5">
                        Perihal Surat PPK
                      </label>
                      <textarea
                        rows={2}
                        placeholder="Jika kosong, terisi otomatis sesuai nama kategori"
                        value={formData.perihal}
                        onChange={(e) => setFormData({ ...formData, perihal: e.target.value })}
                        className="w-full px-2.5 py-1.5 border border-slate-200 rounded-lg text-xs focus:outline-hidden focus:ring-1 focus:ring-sky-500"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-medium text-slate-700 mb-1">
                        Jenis Surat
                      </label>
                      <div className="grid grid-cols-2 gap-2">
                        {(['Eksternal', 'Internal'] as const).map((j) => (
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
                  onClick={handleCloseModal}
                  className="px-3 py-1.5 rounded-lg border border-slate-200 text-slate-600 hover:bg-slate-50 text-xs font-medium transition-colors"
                >
                  Batal
                </button>
                <button
                  type="submit"
                  className="px-4 py-1.5 rounded-lg bg-sky-600 hover:bg-sky-700 text-white text-xs font-semibold shadow-xs transition-colors"
                >
                  {editingId ? 'Simpan Perubahan' : 'Buat Surat PPK'}
                </button>
              </div>

            </form>
          </div>
        </div>
      )}

    </div>
  );
};
