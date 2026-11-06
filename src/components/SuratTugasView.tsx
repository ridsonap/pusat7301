import React, { useState, useMemo, useEffect, useRef } from 'react';
import { newId } from '../utils/ids';
import { copyText } from '../utils/clipboard';
import { isValidDateString, isDuplicateNomor } from '../utils/validation';
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
  Pencil,
  FileSpreadsheet,
  ChevronDown,
  ChevronUp
} from 'lucide-react';
import { SuratTugas, Pegawai } from '../types';
import { PORTAL_LINKS } from '../data/seedData';
import { 
  generateNomorSuratTugas, 
  formatTanggalIndonesia, 
  compareNomorUrutDesc, 
  computeNextNomorUrut, 
  getSortedKlasifikasiList,
  parseTanggalToInputFormat,
  getTahunFromTanggal
} from '../utils/formatters';
import { exportTableToCSV } from '../utils/storage';
import { OfficialPrintSuratTugas } from './OfficialPrintSuratTugas';

interface SuratTugasViewProps {
  suratTugasList: SuratTugas[];
  pegawaiList: Pegawai[];
  onAddSuratTugas: (surat: SuratTugas) => void;
  onUpdateSuratTugas: (s: SuratTugas) => void;
  onDeleteSuratTugas: (id: string) => void;
}

export const SuratTugasView: React.FC<SuratTugasViewProps> = ({
  suratTugasList,
  pegawaiList,
  onAddSuratTugas,
  onUpdateSuratTugas,
  onDeleteSuratTugas
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterKlasifikasi, setFilterKlasifikasi] = useState<string>('Semua');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showOptionalFields, setShowOptionalFields] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [printingSurat, setPrintingSurat] = useState<SuratTugas | null>(null);
  const copyTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (!isModalOpen) return;
    document.body.style.overflow = 'hidden';
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsModalOpen(false);
        setEditingId(null);
      }
    };
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [isModalOpen]);

  useEffect(() => {
    return () => {
      if (copyTimerRef.current) clearTimeout(copyTimerRef.current);
    };
  }, []);

  const sortedKlasifikasi = useMemo(() => {
    return getSortedKlasifikasiList(suratTugasList);
  }, [suratTugasList]);

  const [formData, setFormData] = useState({
    nomorUrut: '1',
    tanggal: new Date().toISOString().slice(0, 10),
    tanggalSelesai: '',
    kodeKlasifikasi: 'VS.330',
    selectedPegawaiIds: [] as string[],
    customPetugas: '',
    perihal: '',
    status: 'Aktif' as 'Aktif' | 'Selesai' | 'Draf'
  });

  // Hitung nomor urut dan tahun secara dinamis berdasarkan tanggal
  // Saat tahun berganti (misal ke 2027), nomor urut otomatis mulai dari 1
  const activeTahun = getTahunFromTanggal(formData.tanggal);
  const activeNomorUrut = editingId
    ? formData.nomorUrut
    : computeNextNomorUrut(suratTugasList, activeTahun);
  const activeNomorSurat = generateNomorSuratTugas(activeNomorUrut, formData.kodeKlasifikasi, activeTahun);

  const handleOpenModal = () => {
    setEditingId(null);
    setShowOptionalFields(false);
    const today = new Date().toISOString().slice(0, 10);
    const yr = getTahunFromTanggal(today);
    setFormData({
      nomorUrut: String(computeNextNomorUrut(suratTugasList, yr)),
      tanggal: today,
      tanggalSelesai: '',
      kodeKlasifikasi: 'VS.330',
      selectedPegawaiIds: [],
      customPetugas: '',
      perihal: '',
      status: 'Aktif'
    });
    setIsModalOpen(true);
  };

  const handleOpenEdit = (item: SuratTugas) => {
    setEditingId(item.id);
    setFormData({
      nomorUrut: String(item.nomorUrut),
      tanggal: parseTanggalToInputFormat(item.tanggal),
      tanggalSelesai: item.tanggalSelesai ? parseTanggalToInputFormat(item.tanggalSelesai) : '',
      kodeKlasifikasi: item.kodeKlasifikasi,
      selectedPegawaiIds: item.petugasIds ?? [],
      customPetugas: (!item.petugasIds || item.petugasIds.length === 0) && item.petugas !== 'Terlampir' ? item.petugas : '',
      perihal: item.perihal,
      status: item.status ?? 'Aktif'
    });
    setShowOptionalFields(true);
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
    if (!formData.tanggal || !isValidDateString(formData.tanggal)) {
      alert('Tanggal surat tidak valid.');
      return;
    }

    const matchingKlas = sortedKlasifikasi.find(k => k.kode === formData.kodeKlasifikasi);
    const defaultPerihal = matchingKlas ? `Penugasan ${matchingKlas.kategori}: ${matchingKlas.uraian}` : 'Penugasan Lapangan BPS 7301';
    const finalPerihal = formData.perihal.trim() || defaultPerihal;

    let assigneeText = 'Terlampir';
    if (formData.selectedPegawaiIds.length > 0) {
      const selectedNames = pegawaiList
        .filter(p => formData.selectedPegawaiIds.includes(p.id))
        .map(p => p.nama);
      assigneeText = selectedNames.length > 2 ? 'Terlampir' : selectedNames.join(', ');
    } else if (formData.customPetugas.trim()) {
      assigneeText = formData.customPetugas.trim();
    }

    const nomorSurat = activeNomorSurat;

    if (isDuplicateNomor(suratTugasList, nomorSurat, editingId ?? undefined)) {
      alert(`Nomor surat ${nomorSurat} sudah digunakan.`);
      return;
    }

    if (editingId) {
      const existing = suratTugasList.find(s => s.id === editingId);
      onUpdateSuratTugas({
        id: editingId,
        nomorUrut: formData.nomorUrut,
        tanggal: formatTanggalIndonesia(formData.tanggal),
        tanggalSelesai: formData.tanggalSelesai ? formatTanggalIndonesia(formData.tanggalSelesai) : undefined,
        kodeKlasifikasi: formData.kodeKlasifikasi,
        nomorSurat: nomorSurat,
        petugas: assigneeText,
        petugasIds: formData.selectedPegawaiIds,
        perihal: finalPerihal,
        status: formData.status,
        createdAt: existing?.createdAt
      });
    } else {
      const newSurat: SuratTugas = {
        id: newId('st'),
        nomorUrut: activeNomorUrut,
        tanggal: formatTanggalIndonesia(formData.tanggal),
        tanggalSelesai: formData.tanggalSelesai ? formatTanggalIndonesia(formData.tanggalSelesai) : undefined,
        kodeKlasifikasi: formData.kodeKlasifikasi,
        nomorSurat: nomorSurat,
        petugas: assigneeText,
        petugasIds: formData.selectedPegawaiIds,
        perihal: finalPerihal,
        status: formData.status,
        createdAt: new Date().toISOString()
      };

      onAddSuratTugas(newSurat);
      copyToClipboard(nomorSurat, newSurat.id);
    }
    setEditingId(null);
    setIsModalOpen(false);
  };

  const copyToClipboard = async (text: string, id: string) => {
    await copyText(text);
    setCopiedId(id);
    if (copyTimerRef.current) clearTimeout(copyTimerRef.current);
    copyTimerRef.current = setTimeout(() => setCopiedId(null), 2000);
  };

  const filteredList = useMemo(() => {
    return suratTugasList
      .filter(item => {
        const matchSearch =
          item.nomorSurat.toLowerCase().includes(searchTerm.toLowerCase()) ||
          item.perihal.toLowerCase().includes(searchTerm.toLowerCase()) ||
          item.petugas.toLowerCase().includes(searchTerm.toLowerCase());

        const matchKlasifikasi = filterKlasifikasi === 'Semua' || item.kodeKlasifikasi === filterKlasifikasi;

        return matchSearch && matchKlasifikasi;
      })
      .sort((a, b) => compareNomorUrutDesc(a.nomorUrut, b.nomorUrut));
  }, [suratTugasList, searchTerm, filterKlasifikasi]);

  const handleExportCSV = () => {
    const rows = filteredList.map(s => ({
      No: s.nomorUrut,
      Tanggal: s.tanggal,
      Nomor_Surat_Tugas: s.nomorSurat,
      Kode_Klasifikasi: s.kodeKlasifikasi,
      Petugas_Pelaksana: s.petugas,
      Perihal: s.perihal,
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
    <div className="space-y-4 pb-12">
      
      {/* Header Banner */}
      <div className="bg-white rounded-xl p-4 sm:p-5 border border-slate-200 flex flex-col md:flex-row md:items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-sky-50 border border-sky-100 flex items-center justify-center text-sky-700 shrink-0">
            <Send className="w-5 h-5 stroke-[1.5]" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-[11px] font-semibold text-sky-800 bg-sky-50 px-2 py-0.5 rounded border border-sky-200">
                Surat Tugas
              </span>
              <span className="text-xs text-slate-500">Satker 7301</span>
            </div>
            <h2 className="text-lg font-bold text-slate-900 tracking-tight mt-0.5">
              Penomoran Surat Tugas
            </h2>
            <p className="text-xs text-slate-500">
              Input tanggal dan kategori tugas untuk nomor otomatis.
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
            href={PORTAL_LINKS.suratTugas}
            target="_blank"
            rel="noopener noreferrer"
            className="px-2.5 py-1.5 rounded-lg border border-slate-200 hover:bg-slate-50 text-slate-700 text-xs font-medium flex items-center gap-1.5 transition-colors"
            title="Buka Spreadsheet Asli"
          >
            <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
            <span>Sheet ST</span>
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
            <span>Buat Surat Tugas</span>
          </button>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="bg-white rounded-xl p-3 border border-slate-200 flex flex-col md:flex-row gap-2.5 items-center justify-between">
        <div className="relative w-full md:w-80">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-slate-400" />
          <input
            type="text"
            placeholder="Cari nomor, perihal, atau petugas..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-9 pr-3 py-1.5 bg-slate-50 border border-slate-200 rounded-lg text-xs focus:outline-hidden focus:ring-1 focus:ring-sky-500"
          />
        </div>

        <div className="w-full md:w-auto">
          <select
            value={filterKlasifikasi}
            onChange={(e) => setFilterKlasifikasi(e.target.value)}
            className="w-full md:w-auto bg-slate-50 border border-slate-200 text-slate-700 text-xs rounded-lg px-2.5 py-1.5 font-medium focus:outline-hidden focus:ring-1 focus:ring-sky-500"
          >
            <option value="Semua">Semua Klasifikasi ({sortedKlasifikasi.length})</option>
            {sortedKlasifikasi.map(k => (
              <option key={k.kode} value={k.kode}>
                {k.kode} - {k.kategori}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Mobile Compact List */}
      <div className="md:hidden bg-white rounded-xl border border-slate-200 divide-y divide-slate-100 overflow-hidden">
        {filteredList.length === 0 ? (
          <div className="p-6 text-center text-slate-400 text-xs">
            Tidak ada surat tugas yang ditemukan.
          </div>
        ) : (
          filteredList.map(item => (
            <div key={item.id} className="p-2.5 hover:bg-slate-50/70 transition-colors flex items-center justify-between gap-2">
              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-1.5 flex-wrap">
                  <span className="font-mono text-xs font-bold text-sky-900">{item.nomorSurat}</span>
                  <span className="text-[10px] text-slate-500 font-mono">• {item.tanggal}</span>
                  <span className="text-[10px] font-mono px-1 py-0.2 bg-slate-100 text-slate-600 rounded">
                    {item.kodeKlasifikasi}
                  </span>
                </div>
                <p className="text-xs text-slate-800 truncate mt-0.5" title={item.perihal}>
                  {item.perihal}
                </p>
                <p className="text-[11px] text-slate-500 truncate">
                  Petugas: {item.petugas}
                </p>
              </div>

              <div className="flex items-center gap-1 shrink-0">
                <button
                  type="button"
                  onClick={() => setPrintingSurat(item)}
                  className="p-1.5 text-slate-500 hover:text-slate-800 hover:bg-slate-100 rounded-lg transition-colors"
                  title="Cetak Naskah Resmi"
                >
                  <Printer className="w-3.5 h-3.5" />
                </button>
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
                    if (confirm(`Hapus surat tugas ${item.nomorSurat}?`)) onDeleteSuratTugas(item.id);
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

      {/* Desktop Dense Table View */}
      <div className="hidden md:block bg-white rounded-xl border border-slate-200 overflow-hidden shadow-2xs">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-slate-50/90 border-b border-slate-200 text-slate-500 font-semibold uppercase tracking-wider text-[11px]">
              <tr>
                <th scope="col" className="py-2 px-2.5 w-12 text-center">No</th>
                <th scope="col" className="py-2 px-2.5 w-28">Tanggal</th>
                <th scope="col" className="py-2 px-2.5 w-60">Nomor Surat Tugas</th>
                <th scope="col" className="py-2 px-2.5 w-24">Klasifikasi</th>
                <th scope="col" className="py-2 px-2.5">Perihal / Kegiatan</th>
                <th scope="col" className="py-2 px-2.5 w-44">Petugas</th>
                <th scope="col" className="py-2 px-2.5 w-20 text-center">Aksi</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filteredList.length === 0 ? (
                <tr>
                  <td colSpan={7} className="py-8 text-center text-slate-400">
                    Tidak ada surat tugas yang sesuai kriteria pencarian.
                  </td>
                </tr>
              ) : (
                filteredList.map(item => (
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
                      <span className="truncate block" title={item.perihal}>
                        {item.perihal}
                      </span>
                    </td>
                    <td className="py-1.5 px-2.5 text-slate-600 max-w-44">
                      <span className="truncate block" title={item.petugas}>
                        {item.petugas}
                      </span>
                    </td>
                    <td className="py-1.5 px-2.5 text-center">
                      <div className="flex items-center justify-center gap-1">
                        <button
                          type="button"
                          onClick={() => setPrintingSurat(item)}
                          className="text-slate-400 hover:text-slate-700 p-1 rounded hover:bg-slate-100 transition-colors"
                          title="Cetak Naskah Resmi"
                        >
                          <Printer className="w-3.5 h-3.5" />
                        </button>
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
                            if (confirm(`Yakin ingin menghapus surat tugas ${item.nomorSurat}?`)) {
                              onDeleteSuratTugas(item.id);
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
          <span>Menampilkan {filteredList.length} dari {suratTugasList.length} surat tugas</span>
          <span className="font-mono text-slate-600">Tahun Aktif: {new Date().getFullYear()}</span>
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
            aria-label={editingId ? 'Edit Surat Tugas' : 'Buat Surat Tugas Baru'}
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded-xl max-w-md w-full p-5 shadow-xl border border-slate-200 max-h-[90vh] overflow-y-auto"
          >
            <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-100">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-sky-50 border border-sky-100 flex items-center justify-center text-sky-700">
                  <Send className="w-4 h-4 stroke-[1.5]" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-900">
                    {editingId ? 'Edit Surat Tugas' : 'Buat Surat Tugas Baru'}
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
                  <span className="text-slate-500 font-medium">Nomor Surat Tugas</span>
                  <span className="font-mono text-sky-700 font-semibold">
                    #{activeNomorUrut} • Tahun {activeTahun}
                  </span>
                </div>
                <div className="text-base font-mono font-bold text-slate-900 tracking-tight">
                  {activeNomorSurat}
                </div>
              </div>

              {/* 1. INPUT TANGGAL */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Tanggal Surat Tugas <span className="text-rose-500">*</span>
                </label>
                <input
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
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Kategori Tugas / Kode Klasifikasi <span className="text-rose-500">*</span>
                </label>
                <select
                  value={formData.kodeKlasifikasi}
                  onChange={(e) => setFormData({ ...formData, kodeKlasifikasi: e.target.value })}
                  className="w-full px-2.5 py-1.5 border border-slate-200 rounded-lg text-xs font-medium focus:outline-hidden focus:ring-1 focus:ring-sky-500"
                >
                  {sortedKlasifikasi.map(k => (
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
                    {/* Perihal */}
                    <div>
                      <label className="block text-[11px] font-medium text-slate-700 mb-0.5">
                        Perihal / Uraian Tugas
                      </label>
                      <textarea
                        rows={2}
                        placeholder="Jika kosong, terisi otomatis sesuai kategori"
                        value={formData.perihal}
                        onChange={(e) => setFormData({ ...formData, perihal: e.target.value })}
                        className="w-full px-2.5 py-1.5 border border-slate-200 rounded-lg text-xs focus:outline-hidden focus:ring-1 focus:ring-sky-500"
                      />
                    </div>

                    {/* Petugas Custom / Keterangan */}
                    <div>
                      <label className="block text-[11px] font-medium text-slate-700 mb-0.5">
                        Petugas (Opsional)
                      </label>
                      <input
                        type="text"
                        placeholder="Default: Terlampir"
                        value={formData.customPetugas}
                        onChange={(e) => setFormData({ ...formData, customPetugas: e.target.value })}
                        className="w-full px-2.5 py-1.5 border border-slate-200 rounded-lg text-xs focus:outline-hidden focus:ring-1 focus:ring-sky-500"
                      />
                    </div>

                    {/* Pilih Pegawai dari Database */}
                    <div>
                      <label className="block text-[11px] font-medium text-slate-700 mb-1">
                        Pilih Pegawai BPS (Opsional)
                      </label>
                      <div className="max-h-28 overflow-y-auto border border-slate-200 rounded-lg p-2 space-y-1 bg-slate-50">
                        {pegawaiList.map(p => (
                          <label key={p.id} className="flex items-center gap-2 text-xs text-slate-700 cursor-pointer">
                            <input
                              type="checkbox"
                              checked={formData.selectedPegawaiIds.includes(p.id)}
                              onChange={() => handleTogglePegawai(p.id)}
                              className="rounded text-sky-600 focus:ring-sky-500"
                            />
                            <span className="truncate">{p.nama}</span>
                          </label>
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
                  {editingId ? 'Simpan Perubahan' : 'Buat Surat Tugas'}
                </button>
              </div>

            </form>
          </div>
        </div>
      )}

      {/* Official Print Modal Preview */}
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
