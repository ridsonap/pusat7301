import React, { useState, useMemo, useEffect, useRef } from 'react';
import { newId } from '../utils/ids';
import { copyText } from '../utils/clipboard';
import { isValidDateString, isDuplicateNomor } from '../utils/validation';
import { 
  ClipboardList, 
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
import { FormPermintaan } from '../types';
import { PORTAL_LINKS } from '../data/seedData';
import { 
  generateNomorFormPermintaan, 
  formatTanggalIndonesia, 
  formatRupiah, 
  compareNomorUrutDesc, 
  computeNextNomorUrut,
  parseTanggalToInputFormat,
  getTahunFromTanggal
} from '../utils/formatters';
import { exportTableToCSV } from '../utils/storage';

interface FormPermintaanViewProps {
  formList: FormPermintaan[];
  onAddForm: (form: FormPermintaan) => void;
  onUpdateForm: (form: FormPermintaan) => void;
  onDeleteForm: (id: string) => void;
}

const TIPE_FORM_OPTIONS: FormPermintaan['tipeForm'][] = [
  'Belanja Bahan',
  'Belanja Barang',
  'Belanja Pegawai',
  'Jasa Profesi',
  'Perjalanan Dinas',
  'Lainnya'
];

export const FormPermintaanView: React.FC<FormPermintaanViewProps> = ({
  formList,
  onAddForm,
  onUpdateForm,
  onDeleteForm
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterTipe, setFilterTipe] = useState<string>('Semua');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showOptionalFields, setShowOptionalFields] = useState(false);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [editingId, setEditingId] = useState<string | null>(null);
  const copyTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (copyTimerRef.current) clearTimeout(copyTimerRef.current);
    };
  }, []);

  useEffect(() => {
    if (!isModalOpen) return;
    document.body.style.overflow = 'hidden';
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsModalOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [isModalOpen]);

  const [formData, setFormData] = useState({
    nomorUrut: '1',
    tanggal: new Date().toISOString().slice(0, 10),
    tipeForm: 'Belanja Bahan' as FormPermintaan['tipeForm'],
    perihal: '',
    pemohon: '',
    estimasiBiaya: 0,
    status: 'Diajukan' as FormPermintaan['status']
  });

  // Hitung nomor urut dan tahun dinamis berdasarkan tanggal (reset ke 1 jika tahun berganti)
  const activeTahun = getTahunFromTanggal(formData.tanggal);
  const activeNomorUrut = editingId
    ? formData.nomorUrut
    : computeNextNomorUrut(formList, activeTahun);
  const activeNomorForm = generateNomorFormPermintaan(activeNomorUrut, activeTahun);

  const handleOpenModal = () => {
    setEditingId(null);
    setShowOptionalFields(false);
    const today = new Date().toISOString().slice(0, 10);
    const yr = getTahunFromTanggal(today);
    setFormData({
      nomorUrut: String(computeNextNomorUrut(formList, yr)),
      tanggal: today,
      tipeForm: 'Belanja Bahan',
      perihal: '',
      pemohon: '',
      estimasiBiaya: 0,
      status: 'Diajukan'
    });
    setIsModalOpen(true);
  };

  const handleOpenEdit = (item: FormPermintaan) => {
    setEditingId(item.id);
    setFormData({
      nomorUrut: String(item.nomorUrut),
      tanggal: parseTanggalToInputFormat(item.tanggal),
      tipeForm: item.tipeForm,
      perihal: item.perihal,
      pemohon: item.pemohon || '',
      estimasiBiaya: item.estimasiBiaya || 0,
      status: item.status || 'Diajukan'
    });
    setShowOptionalFields(true);
    setIsModalOpen(true);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.tanggal || !isValidDateString(formData.tanggal)) {
      alert('Tanggal tidak valid.');
      return;
    }

    const finalPerihal = formData.perihal.trim() || `Permintaan ${formData.tipeForm}`;
    const nomorForm = activeNomorForm;

    if (isDuplicateNomor(formList, nomorForm, editingId ?? undefined)) {
      alert(`Nomor form ${nomorForm} sudah terdaftar.`);
      return;
    }

    if (editingId) {
      const existing = formList.find((f) => f.id === editingId);
      onUpdateForm({
        id: editingId,
        nomorUrut: formData.nomorUrut,
        tanggal: formatTanggalIndonesia(formData.tanggal),
        tipeForm: formData.tipeForm,
        nomorForm: nomorForm,
        perihal: finalPerihal,
        pemohon: formData.pemohon.trim() || '-',
        estimasiBiaya: formData.estimasiBiaya || undefined,
        status: formData.status,
        createdAt: existing?.createdAt || new Date().toISOString()
      });
    } else {
      const newForm: FormPermintaan = {
        id: newId('fp'),
        nomorUrut: activeNomorUrut,
        tanggal: formatTanggalIndonesia(formData.tanggal),
        tipeForm: formData.tipeForm,
        nomorForm: nomorForm,
        perihal: finalPerihal,
        pemohon: formData.pemohon.trim() || '-',
        estimasiBiaya: formData.estimasiBiaya || undefined,
        status: formData.status,
        createdAt: new Date().toISOString()
      };

      onAddForm(newForm);
      copyToClipboard(nomorForm, newForm.id);
    }

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
    return formList
      .filter((item) => {
        const matchSearch =
          item.nomorForm.toLowerCase().includes(searchTerm.toLowerCase()) ||
          item.perihal.toLowerCase().includes(searchTerm.toLowerCase()) ||
          (item.pemohon && item.pemohon.toLowerCase().includes(searchTerm.toLowerCase()));

        const matchTipe = filterTipe === 'Semua' || item.tipeForm === filterTipe;

        return matchSearch && matchTipe;
      })
      .sort((a, b) => compareNomorUrutDesc(a.nomorUrut, b.nomorUrut));
  }, [formList, searchTerm, filterTipe]);

  const handleExportCSV = () => {
    const rows = filteredList.map(s => ({
      No: s.nomorUrut,
      Tanggal: s.tanggal,
      Nomor_Form: s.nomorForm,
      Tipe_Form: s.tipeForm,
      Perihal: s.perihal,
      Pemohon: s.pemohon || '',
      Estimasi_Biaya: s.estimasiBiaya || 0,
      Status: s.status || 'Diajukan'
    }));
    exportTableToCSV(`Form_Permintaan_BPS_Selayar_${new Date().toISOString().slice(0, 10)}`, rows);
  };

  return (
    <div className="space-y-4 pb-12">
      
      {/* Header Banner */}
      <div className="bg-white rounded-xl p-4 sm:p-5 border border-slate-200 flex flex-col md:flex-row md:items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-sky-50 border border-sky-100 flex items-center justify-center text-sky-700 shrink-0">
            <ClipboardList className="w-5 h-5 stroke-[1.5]" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-[11px] font-semibold text-sky-800 bg-sky-50 px-2 py-0.5 rounded border border-sky-200">
                Form Permintaan
              </span>
              <span className="text-xs text-slate-500">Satker 7301</span>
            </div>
            <h2 className="text-lg font-bold text-slate-900 tracking-tight mt-0.5">
              Penomoran Form Permintaan
            </h2>
            <p className="text-xs text-slate-500">
              Input tanggal dan kategori belanja untuk nomor otomatis (KU.320).
            </p>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <a
            href={PORTAL_LINKS.formPermintaan}
            target="_blank"
            rel="noopener noreferrer"
            className="px-2.5 py-1.5 rounded-lg border border-slate-200 hover:bg-slate-50 text-slate-700 text-xs font-medium flex items-center gap-1.5 transition-colors"
            title="Buka Spreadsheet Form Permintaan"
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
            <span>Buat Form</span>
          </button>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="bg-white rounded-xl p-3 border border-slate-200 flex flex-col md:flex-row gap-2.5 items-center justify-between">
        <div className="relative w-full md:w-80">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-slate-400" />
          <input
            type="text"
            placeholder="Cari nomor, perihal, atau pemohon..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-9 pr-3 py-1.5 bg-slate-50 border border-slate-200 rounded-lg text-xs focus:outline-hidden focus:ring-1 focus:ring-sky-500"
          />
        </div>

        <div className="w-full md:w-auto">
          <select
            value={filterTipe}
            onChange={(e) => setFilterTipe(e.target.value)}
            className="w-full md:w-auto bg-slate-50 border border-slate-200 text-slate-700 text-xs rounded-lg px-2.5 py-1.5 font-medium focus:outline-hidden focus:ring-1 focus:ring-sky-500"
          >
            <option value="Semua">Semua Kategori Belanja</option>
            {TIPE_FORM_OPTIONS.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Mobile Compact List */}
      <div className="md:hidden bg-white rounded-xl border border-slate-200 divide-y divide-slate-100 overflow-hidden">
        {filteredList.length === 0 ? (
          <div className="p-6 text-center text-slate-400 text-xs">
            Tidak ada form permintaan yang ditemukan.
          </div>
        ) : (
          filteredList.map((item) => (
            <div key={item.id} className="p-2.5 hover:bg-slate-50/70 transition-colors flex items-center justify-between gap-2">
              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-1.5 flex-wrap">
                  <span className="font-mono text-xs font-bold text-sky-900">{item.nomorForm}</span>
                  <span className="text-[10px] text-slate-500 font-mono">• {item.tanggal}</span>
                  <span className="text-[10px] px-1 py-0.2 bg-slate-100 text-slate-600 rounded">
                    {item.tipeForm}
                  </span>
                </div>
                <p className="text-xs text-slate-800 truncate mt-0.5" title={item.perihal}>
                  {item.perihal}
                </p>
                {item.pemohon && item.pemohon !== '-' && (
                  <p className="text-[11px] text-slate-500 truncate">
                    Pemohon: {item.pemohon}
                  </p>
                )}
              </div>

              <div className="flex items-center gap-1 shrink-0">
                <button
                  type="button"
                  onClick={() => copyToClipboard(item.nomorForm, item.id)}
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
                    if (confirm(`Hapus form permintaan ${item.nomorForm}?`)) onDeleteForm(item.id);
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
                <th scope="col" className="py-2 px-2.5 w-56">Nomor Form</th>
                <th scope="col" className="py-2 px-2.5 w-32">Kategori Belanja</th>
                <th scope="col" className="py-2 px-2.5">Perihal Permintaan</th>
                <th scope="col" className="py-2 px-2.5 w-40">Pemohon</th>
                <th scope="col" className="py-2 px-2.5 w-28 text-right">Estimasi</th>
                <th scope="col" className="py-2 px-2.5 w-20 text-center">Aksi</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filteredList.length === 0 ? (
                <tr>
                  <td colSpan={8} className="py-8 text-center text-slate-400">
                    Tidak ada form permintaan yang sesuai kriteria pencarian.
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
                        <span className="select-all">{item.nomorForm}</span>
                        <button
                          type="button"
                          onClick={() => copyToClipboard(item.nomorForm, item.id)}
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
                      <span className="text-[11px] px-1.5 py-0.5 bg-slate-100 rounded text-slate-700">
                        {item.tipeForm}
                      </span>
                    </td>
                    <td className="py-1.5 px-2.5 text-slate-700 max-w-sm">
                      <span className="truncate block" title={item.perihal}>
                        {item.perihal}
                      </span>
                    </td>
                    <td className="py-1.5 px-2.5 text-slate-600 max-w-40">
                      <span className="truncate block" title={item.pemohon}>
                        {item.pemohon || '-'}
                      </span>
                    </td>
                    <td className="py-1.5 px-2.5 text-right font-mono text-slate-700 tabular-nums">
                      {item.estimasiBiaya ? formatRupiah(item.estimasiBiaya) : '-'}
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
                            if (confirm(`Yakin ingin menghapus form ${item.nomorForm}?`)) {
                              onDeleteForm(item.id);
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
          <span>Menampilkan {filteredList.length} dari {formList.length} form permintaan</span>
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
            aria-label={editingId ? 'Edit Form Permintaan' : 'Buat Form Permintaan Baru'}
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded-xl max-w-md w-full p-5 shadow-xl border border-slate-200 max-h-[90vh] overflow-y-auto"
          >
            <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-100">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-sky-50 border border-sky-100 flex items-center justify-center text-sky-700">
                  <ClipboardList className="w-4 h-4 stroke-[1.5]" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-900">
                    {editingId ? 'Edit Form Permintaan' : 'Buat Form Permintaan'}
                  </h3>
                  <p className="text-[11px] text-slate-500">
                    Pilih tanggal dan kategori belanja untuk nomor otomatis
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
              
              {/* Preview Auto-generated Nomor Form */}
              <div className="bg-slate-50 border border-slate-200 p-3 rounded-lg">
                <div className="flex items-center justify-between mb-1 text-[11px]">
                  <span className="text-slate-500 font-medium">Nomor Form (KU.320)</span>
                  <span className="font-mono text-sky-700 font-semibold">
                    #{activeNomorUrut} • Tahun {activeTahun}
                  </span>
                </div>
                <div className="text-base font-mono font-bold text-slate-900 tracking-tight">
                  {activeNomorForm}
                </div>
              </div>

              {/* 1. INPUT TANGGAL */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Tanggal Permintaan <span className="text-rose-500">*</span>
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

              {/* 2. INPUT KATEGORI (Tipe Belanja) */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Kategori Belanja / Tipe Form <span className="text-rose-500">*</span>
                </label>
                <select
                  value={formData.tipeForm}
                  onChange={(e) => setFormData({ ...formData, tipeForm: e.target.value as any })}
                  className="w-full px-2.5 py-1.5 border border-slate-200 rounded-lg text-xs font-medium focus:outline-hidden focus:ring-1 focus:ring-sky-500"
                >
                  {TIPE_FORM_OPTIONS.map((t) => (
                    <option key={t} value={t}>
                      {t}
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
                        Perihal Permintaan
                      </label>
                      <textarea
                        rows={2}
                        placeholder="Jika kosong, terisi otomatis: Permintaan [Kategori]"
                        value={formData.perihal}
                        onChange={(e) => setFormData({ ...formData, perihal: e.target.value })}
                        className="w-full px-2.5 py-1.5 border border-slate-200 rounded-lg text-xs focus:outline-hidden focus:ring-1 focus:ring-sky-500"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-medium text-slate-700 mb-0.5">
                        Pemohon (Opsional)
                      </label>
                      <input
                        type="text"
                        placeholder="Contoh: Tim IPDS / Distribusi"
                        value={formData.pemohon}
                        onChange={(e) => setFormData({ ...formData, pemohon: e.target.value })}
                        className="w-full px-2.5 py-1.5 border border-slate-200 rounded-lg text-xs focus:outline-hidden focus:ring-1 focus:ring-sky-500"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-medium text-slate-700 mb-0.5">
                        Estimasi Biaya (Rp)
                      </label>
                      <input
                        type="number"
                        min={0}
                        step={1000}
                        placeholder="0"
                        value={formData.estimasiBiaya || ''}
                        onChange={(e) => setFormData({ ...formData, estimasiBiaya: Number(e.target.value) || 0 })}
                        className="w-full px-2.5 py-1.5 border border-slate-200 rounded-lg text-xs focus:outline-hidden focus:ring-1 focus:ring-sky-500"
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
                  className="px-4 py-1.5 rounded-lg bg-sky-600 hover:bg-sky-700 text-white text-xs font-semibold shadow-xs transition-colors"
                >
                  {editingId ? 'Simpan Perubahan' : 'Buat Form Permintaan'}
                </button>
              </div>

            </form>
          </div>
        </div>
      )}

    </div>
  );
};
