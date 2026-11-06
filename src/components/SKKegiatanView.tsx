import React, { useState, useMemo, useEffect, useRef } from 'react';
import { newId } from '../utils/ids';
import { copyText } from '../utils/clipboard';
import { isValidDateString, isDuplicateNomor, isValidHttpUrl } from '../utils/validation';
import {
  FolderClosed,
  Plus,
  Search,
  Download,
  ExternalLink,
  Trash2,
  X,
  FileText,
  FileDown,
  Copy,
  Check,
  Pencil,
  ChevronDown,
  ChevronUp
} from 'lucide-react';
import { SKKegiatan } from '../types';
import { PORTAL_LINKS } from '../data/seedData';
import { 
  generateNomorSK, 
  formatTanggalIndonesia, 
  compareNomorUrutDesc, 
  computeNextNomorUrut,
  parseTanggalToInputFormat,
  getTahunFromTanggal,
  isSlotEmpty
} from '../utils/formatters';
import { exportTableToCSV } from '../utils/storage';

interface SKKegiatanViewProps {
  skList: SKKegiatan[];
  onAddSK: (sk: SKKegiatan) => void;
  onUpdateSK: (s: SKKegiatan) => void;
  onDeleteSK: (id: string) => void;
}

export const SKKegiatanView: React.FC<SKKegiatanViewProps> = ({
  skList,
  onAddSK,
  onUpdateSK,
  onDeleteSK
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterSubFungsi, setFilterSubFungsi] = useState<string>('Semua');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showOptionalFields, setShowOptionalFields] = useState(false);
  const [copiedId, setCopiedId] = useState<string | null>(null);
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

  const nextNomorUrut = useMemo(() => {
    return computeNextNomorUrut(skList);
  }, [skList]);

  const [formData, setFormData] = useState({
    nomorUrut: String(nextNomorUrut),
    tanggal: new Date().toISOString().slice(0, 10),
    uraian: '',
    subFungsi: 'UMUM' as SKKegiatan['subFungsi'],
    wordUrl: '',
    pdfUrl: ''
  });

  const activeTahun = getTahunFromTanggal(formData.tanggal);
  const activeNomorUrut = editingId ? formData.nomorUrut : computeNextNomorUrut(skList, formData.tanggal);
  const activeNomorSK = generateNomorSK(activeNomorUrut, activeTahun);

  const handleOpenModal = () => {
    setEditingId(null);
    setShowOptionalFields(false);
    const today = new Date().toISOString().slice(0, 10);
    setFormData({
      nomorUrut: String(computeNextNomorUrut(skList, today)),
      tanggal: today,
      uraian: '',
      subFungsi: 'UMUM',
      wordUrl: '',
      pdfUrl: ''
    });
    setIsModalOpen(true);
  };

  const handleOpenEdit = (item: SKKegiatan) => {
    setFormData({
      nomorUrut: String(item.nomorUrut),
      tanggal: parseTanggalToInputFormat(item.tanggal),
      uraian: item.uraian,
      subFungsi: item.subFungsi,
      wordUrl: item.wordUrl ?? '',
      pdfUrl: item.pdfUrl ?? ''
    });
    setEditingId(item.id);
    setShowOptionalFields(true);
    setIsModalOpen(true);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.tanggal || !isValidDateString(formData.tanggal)) {
      alert('Tanggal SK tidak valid.');
      return;
    }

    const uraianFinal = formData.uraian.trim() || `SK Tim Kerja ${formData.subFungsi} BPS Kabupaten Kepulauan Selayar`;
    const nomorSK = activeNomorSK;

    if (isDuplicateNomor(skList, nomorSK, editingId ?? undefined)) {
      alert('Nomor SK sudah terdaftar, gunakan nomor urut lain.');
      return;
    }

    if (formData.pdfUrl.trim() && !isValidHttpUrl(formData.pdfUrl.trim())) {
      alert('URL PDF harus diawali http(s)://');
      return;
    }
    if (formData.wordUrl.trim() && !isValidHttpUrl(formData.wordUrl.trim())) {
      alert('URL Word harus diawali http(s)://');
      return;
    }

    if (editingId) {
      const existing = skList.find((s) => s.id === editingId);
      onUpdateSK({
        ...(existing as SKKegiatan),
        nomorUrut: formData.nomorUrut,
        nomorSK: nomorSK,
        tanggal: formatTanggalIndonesia(formData.tanggal),
        uraian: uraianFinal,
        subFungsi: formData.subFungsi,
        wordUrl: formData.wordUrl.trim() || undefined,
        pdfUrl: formData.pdfUrl.trim() || undefined,
        createdAt: existing?.createdAt ?? new Date().toISOString()
      });
      setEditingId(null);
      setIsModalOpen(false);
      return;
    }

    const newSK: SKKegiatan = {
      id: newId('sk'),
      nomorUrut: activeNomorUrut,
      nomorSK: nomorSK,
      tanggal: formatTanggalIndonesia(formData.tanggal),
      uraian: uraianFinal,
      subFungsi: formData.subFungsi,
      wordUrl: formData.wordUrl.trim() || undefined,
      pdfUrl: formData.pdfUrl.trim() || undefined,
      createdAt: new Date().toISOString()
    };

    onAddSK(newSK);
    setIsModalOpen(false);
  };

  const copyToClipboard = async (text: string, id: string) => {
    const ok = await copyText(text);
    setCopiedId(id);
    if (copyTimerRef.current) clearTimeout(copyTimerRef.current);
    copyTimerRef.current = setTimeout(() => setCopiedId(null), 2000);
    if (!ok) alert('Gagal menyalin. Salin manual: ' + text);
  };

  const filteredList = useMemo(() => {
    return skList
      .filter((item) => {
        const matchSearch =
          item.nomorSK.toLowerCase().includes(searchTerm.toLowerCase()) ||
          item.uraian.toLowerCase().includes(searchTerm.toLowerCase()) ||
          item.subFungsi.toLowerCase().includes(searchTerm.toLowerCase());

        const matchFungsi = filterSubFungsi === 'Semua' || item.subFungsi === filterSubFungsi;

        return matchSearch && matchFungsi;
      })
      .sort((a, b) => compareNomorUrutDesc(a.nomorUrut, b.nomorUrut));
  }, [skList, searchTerm, filterSubFungsi]);

  const handleExportCSV = () => {
    const rows = filteredList.map(s => ({
      No: s.nomorUrut,
      Nomor_SK: s.nomorSK,
      Tanggal: s.tanggal,
      Uraian: s.uraian,
      Sub_Fungsi: s.subFungsi,
      Link_Word: s.wordUrl || '',
      Link_PDF: s.pdfUrl || ''
    }));
    exportTableToCSV(`SK_Kegiatan_BPS_Selayar_${new Date().toISOString().slice(0, 10)}`, rows);
  };

  return (
    <div className="space-y-4 pb-12">
      
      {/* Header Card */}
      <div className="bg-white rounded-xl p-4 sm:p-5 border border-slate-200 shadow-2xs flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-700 shrink-0">
            <FolderClosed className="w-5 h-5 stroke-[1.5]" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-bold uppercase tracking-wider text-amber-800 bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
                Surat Keputusan
              </span>
              <span className="text-[11px] font-medium text-slate-500">BPS Kab. Kepulauan Selayar</span>
            </div>
            <h2 className="text-lg font-bold text-slate-900 tracking-tight mt-0.5">
              Daftar SK Kegiatan Kantor
            </h2>
            <p className="text-xs text-slate-500">
              Registrasi dan penomoran Surat Keputusan (SK) Kepala BPS dan tim kerja.
            </p>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <a
            href={PORTAL_LINKS.skKegiatan}
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
            className="px-3.5 py-1.5 rounded-lg bg-amber-600 hover:bg-amber-700 text-white text-xs font-semibold flex items-center gap-1.5 transition-colors shadow-xs"
          >
            <Plus className="w-4 h-4" />
            <span>Buat SK</span>
          </button>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="bg-white rounded-xl p-3 border border-slate-200 flex flex-col md:flex-row gap-2.5 items-center justify-between">
        <div className="relative w-full md:w-80">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-slate-400" />
          <input
            type="text"
            placeholder="Cari nomor SK atau uraian..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-9 pr-3 py-1.5 bg-slate-50 border border-slate-200 rounded-lg text-xs focus:outline-hidden focus:ring-1 focus:ring-amber-500"
          />
        </div>

        {/* Sub/Fungsi filter */}
        <div className="flex items-center gap-1 bg-slate-100 p-0.5 rounded-lg text-xs font-medium overflow-x-auto w-full md:w-auto max-w-full">
          {['Semua', 'UMUM', 'IPDS', 'DISTRIBUSI', 'SOSIAL', 'PRODUKSI', 'NERWILIS'].map((f) => (
            <button
              type="button"
              key={f}
              onClick={() => setFilterSubFungsi(f)}
              className={`px-2.5 py-1 rounded-md text-xs transition-colors shrink-0 whitespace-nowrap ${
                filterSubFungsi === f ? 'bg-white text-slate-900 shadow-2xs font-semibold' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      {/* Mobile Compact View (md:hidden) */}
      <div className="md:hidden bg-white rounded-xl border border-slate-200 divide-y divide-slate-100 overflow-hidden">
        {filteredList.length === 0 ? (
          <div className="p-6 text-center text-slate-400 text-xs">
            Tidak ada SK Kegiatan yang sesuai kriteria.
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
                    <span className="font-mono font-bold text-xs text-amber-950 tracking-tight">
                      {item.nomorSK}
                    </span>
                    <span className="text-[10px] text-slate-400 font-medium">• {item.tanggal}</span>
                  </div>

                  {isSlotEmpty(item) ? (
                    <p className="mt-1">
                      <span className="italic text-amber-800 bg-amber-50 px-1.5 py-0.5 rounded text-[10px] border border-amber-200 inline-block font-medium">
                        Nomor Kosong (Tersedia)
                      </span>
                    </p>
                  ) : (
                    <>
                      <p className="text-xs text-slate-800 mt-0.5 line-clamp-2">
                        {item.uraian}
                      </p>

                      <div className="flex items-center gap-1.5 mt-1.5 flex-wrap">
                        <span className="inline-block px-1.5 py-0.5 rounded text-[10px] font-medium bg-amber-50 text-amber-800 border border-amber-200">
                          {item.subFungsi}
                        </span>

                        {item.wordUrl && (
                          <a
                            href={isValidHttpUrl(item.wordUrl) ? item.wordUrl : undefined}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded text-[10px] font-medium bg-blue-50 text-blue-700 border border-blue-200"
                            title="Buka Dokumen Word"
                          >
                            <FileText className="w-3 h-3 text-blue-600" />
                            <span>Word</span>
                          </a>
                        )}
                        {item.pdfUrl && (
                          <a
                            href={isValidHttpUrl(item.pdfUrl) ? item.pdfUrl : undefined}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded text-[10px] font-medium bg-rose-50 text-rose-700 border border-rose-200"
                            title="Buka Dokumen PDF"
                          >
                            <FileDown className="w-3 h-3 text-rose-600" />
                            <span>PDF</span>
                          </a>
                        )}
                      </div>
                    </>
                  )}
                </div>
              </div>

              <div className="flex items-center gap-1 shrink-0 self-center">
                <button
                  type="button"
                  onClick={() => handleOpenEdit(item)}
                  className={`p-1.5 rounded-lg transition-colors ${
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
                      ? `Hapus permanen nomor ${item.nomorSK}?`
                      : `Kosongkan SK ${item.nomorSK}?\nNomor ini tetap tersimpan dan otomatis diberikan jika ada pengajuan di tanggal yang sama.`;
                    if (confirm(msg)) {
                      onDeleteSK(item.id);
                    }
                  }}
                  className="p-1.5 text-slate-400 hover:text-rose-600 hover:bg-rose-50 rounded-lg transition-colors"
                  title={isSlotEmpty(item) ? "Hapus Permanen" : "Kosongkan SK"}
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
                <th scope="col" className="py-2 px-2.5 w-44">Nomor SK</th>
                <th scope="col" className="py-2 px-2.5">Uraian SK Kegiatan</th>
                <th scope="col" className="py-2 px-2.5 w-28">Sub / Fungsi</th>
                <th scope="col" className="py-2 px-2.5 w-20 text-center">Word</th>
                <th scope="col" className="py-2 px-2.5 w-20 text-center">PDF</th>
                <th scope="col" className="py-2 px-2.5 w-20 text-center">Aksi</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filteredList.length === 0 ? (
                <tr>
                  <td colSpan={8} className="py-8 text-center text-slate-400">
                    Tidak ada SK Kegiatan yang sesuai kriteria.
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
                    <td className="py-1.5 px-2.5 font-mono font-bold text-amber-950 whitespace-nowrap">
                      <div className="flex items-center gap-1.5">
                        <span className="select-all">{item.nomorSK}</span>
                        <button
                          type="button"
                          onClick={() => copyToClipboard(item.nomorSK, item.id)}
                          className="text-slate-400 hover:text-amber-700 p-0.5 rounded transition-colors"
                          title="Salin Nomor SK"
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
                      {isSlotEmpty(item) ? (
                        <span className="inline-flex items-center gap-1 italic text-amber-800 bg-amber-50 px-1.5 py-0.5 rounded text-[11px] border border-amber-200 font-medium">
                          Nomor Kosong (Tersedia)
                        </span>
                      ) : (
                        <span className="truncate block" title={item.uraian}>
                          {item.uraian}
                        </span>
                      )}
                    </td>
                    <td className="py-1.5 px-2.5">
                      <span className="inline-block px-1.5 py-0.5 rounded text-[10px] font-medium bg-amber-50 text-amber-800 border border-amber-200">
                        {item.subFungsi}
                      </span>
                    </td>
                    <td className="py-1.5 px-2.5 text-center">
                      {!isSlotEmpty(item) && item.wordUrl ? (
                        <a
                          href={isValidHttpUrl(item.wordUrl) ? item.wordUrl : undefined}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded text-[10px] font-medium bg-blue-50 text-blue-700 hover:bg-blue-100 border border-blue-200 transition-colors"
                          title="Buka / Unduh Dokumen Word"
                        >
                          <FileText className="w-3 h-3 text-blue-600" />
                          <span>Word</span>
                        </a>
                      ) : (
                        <span className="text-slate-300 font-mono text-xs">-</span>
                      )}
                    </td>
                    <td className="py-1.5 px-2.5 text-center">
                      {!isSlotEmpty(item) && item.pdfUrl ? (
                        <a
                          href={isValidHttpUrl(item.pdfUrl) ? item.pdfUrl : undefined}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded text-[10px] font-medium bg-rose-50 text-rose-700 hover:bg-rose-100 border border-rose-200 transition-colors"
                          title="Buka / Unduh Dokumen PDF"
                        >
                          <FileDown className="w-3 h-3 text-rose-600" />
                          <span>PDF</span>
                        </a>
                      ) : (
                        <span className="text-slate-300 font-mono text-xs">-</span>
                      )}
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
                              ? `Hapus permanen nomor ${item.nomorSK}?`
                              : `Kosongkan SK ${item.nomorSK}?\nNomor ini tetap tersimpan dan otomatis diberikan jika ada pengajuan di tanggal yang sama.`;
                            if (confirm(msg)) {
                              onDeleteSK(item.id);
                            }
                          }}
                          className="text-slate-400 hover:text-rose-600 p-1 rounded hover:bg-rose-50 transition-colors"
                          title={isSlotEmpty(item) ? "Hapus Permanen" : "Kosongkan SK"}
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
          <span>Menampilkan {filteredList.length} dari {skList.length} SK Kegiatan</span>
          <span className="font-mono text-slate-600">Satker 7301</span>
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
            aria-label={editingId ? 'Edit SK Kegiatan' : 'Buat SK Kegiatan Baru'}
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded-xl max-w-md w-full p-5 shadow-xl border border-slate-200 max-h-[90vh] overflow-y-auto"
          >
            <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-100">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-700">
                  <FolderClosed className="w-4 h-4 stroke-[1.5]" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-900">{editingId ? 'Edit SK Kegiatan' : 'Buat SK Kegiatan Baru'}</h3>
                  <p className="text-[11px] text-slate-500">Pilih tanggal dan sub fungsi untuk nomor otomatis</p>
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
              
              {/* Preview Auto-generated Nomor SK */}
              <div className="bg-slate-50 border border-slate-200 p-3 rounded-lg">
                <div className="flex items-center justify-between mb-1 text-[11px]">
                  <span className="text-slate-500 font-medium">Nomor SK Otomatis</span>
                  <span className={`font-mono font-semibold px-1.5 py-0.5 rounded text-[10px] ${
                    String(activeNomorUrut).includes('.')
                      ? 'bg-amber-100 text-amber-800 border border-amber-200'
                      : 'text-amber-800 bg-amber-50 border border-amber-200'
                  }`}>
                    #{activeNomorUrut} • {String(activeNomorUrut).includes('.') ? 'Sisip' : `Tahun ${activeTahun}`}
                  </span>
                </div>
                <div className="text-base font-mono font-bold text-slate-900 tracking-tight">
                  {activeNomorSK}
                </div>
              </div>

              {/* 1. INPUT TANGGAL */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Tanggal SK <span className="text-rose-500">*</span>
                </label>
                <input
                  type="date"
                  value={formData.tanggal}
                  onChange={(e) => setFormData({ ...formData, tanggal: e.target.value })}
                  className="w-full px-3 py-1.5 border border-slate-200 rounded-lg text-xs font-medium bg-white focus:outline-hidden focus:ring-1 focus:ring-amber-500"
                  required
                />
                <p className="text-[10px] text-slate-500 mt-0.5">
                  {String(activeNomorUrut).includes('.')
                    ? '⚡ Terdeteksi tanggal lampau: nomor otomatis menyelip (misal 201.1).'
                    : 'Nomor urut sesuai tanggal. Reset ke 1 saat tahun berganti.'}
                </p>
              </div>

              {/* 2. INPUT KATEGORI (Sub/Fungsi) */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Sub / Fungsi <span className="text-rose-500">*</span>
                </label>
                <select
                  value={formData.subFungsi}
                  onChange={(e) => setFormData({ ...formData, subFungsi: e.target.value as SKKegiatan['subFungsi'] })}
                  className="w-full px-2.5 py-1.5 border border-slate-200 rounded-lg text-xs font-medium focus:outline-hidden focus:ring-1 focus:ring-amber-500"
                >
                  <option value="UMUM">UMUM (Tata Usaha, Kepegawaian, BMN, Keuangan)</option>
                  <option value="IPDS">IPDS (Integrasi Pengolahan & Diseminasi Statistik)</option>
                  <option value="DISTRIBUSI">DISTRIBUSI (Harga, Pariwisata, Transportasi)</option>
                  <option value="SOSIAL">SOSIAL (Kependudukan, Susenas, Sakernas)</option>
                  <option value="PRODUKSI">PRODUKSI (Pertanian, Industri, Konstruksi)</option>
                  <option value="NERWILIS">NERWILIS (Neraca Wilayah & Analisis Statistik)</option>
                </select>
              </div>

              {/* Accordion Rincian Tambahan (Opsional) */}
              <div className="pt-1">
                <button
                  type="button"
                  onClick={() => setShowOptionalFields(!showOptionalFields)}
                  className="w-full flex items-center justify-between text-xs text-slate-600 hover:text-slate-900 py-1 border-t border-slate-100"
                >
                  <span className="font-medium">Rincian Tambahan & Berkas (Opsional)</span>
                  {showOptionalFields ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                </button>

                {showOptionalFields && (
                  <div className="space-y-3 pt-2 text-xs">
                    <div>
                      <label className="block font-medium text-slate-700 mb-1">
                        Uraian / Judul SK Kegiatan
                      </label>
                      <textarea
                        rows={2}
                        placeholder={`Default: SK Tim Kerja ${formData.subFungsi} BPS Kabupaten Kepulauan Selayar`}
                        value={formData.uraian}
                        onChange={(e) => setFormData({ ...formData, uraian: e.target.value })}
                        className="w-full px-3 py-1.5 border border-slate-200 rounded-lg text-xs focus:outline-hidden focus:ring-1 focus:ring-amber-500"
                      />
                    </div>

                    <div>
                      <label className="block font-medium text-slate-700 mb-1">
                        Link Berkas Word (.docx)
                      </label>
                      <input
                        type="url"
                        placeholder="https://docs.google.com/document/..."
                        value={formData.wordUrl}
                        onChange={(e) => setFormData({ ...formData, wordUrl: e.target.value })}
                        className="w-full px-3 py-1.5 border border-slate-200 rounded-lg text-xs focus:outline-hidden focus:ring-1 focus:ring-amber-500"
                      />
                    </div>

                    <div>
                      <label className="block font-medium text-slate-700 mb-1">
                        Link Berkas PDF
                      </label>
                      <input
                        type="url"
                        placeholder="https://drive.google.com/file/..."
                        value={formData.pdfUrl}
                        onChange={(e) => setFormData({ ...formData, pdfUrl: e.target.value })}
                        className="w-full px-3 py-1.5 border border-slate-200 rounded-lg text-xs focus:outline-hidden focus:ring-1 focus:ring-amber-500"
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
                  className="px-3.5 py-1.5 rounded-lg bg-amber-600 hover:bg-amber-700 text-white text-xs font-semibold shadow-xs transition-colors"
                >
                  {editingId ? 'Simpan Perubahan' : 'Buat SK'}
                </button>
              </div>

            </form>
          </div>
        </div>
      )}

    </div>
  );
};
