import React, { useState, useMemo } from 'react';
import { 
  ClipboardList, 
  Plus, 
  Search, 
  Download, 
  ExternalLink, 
  Trash2, 
  X, 
  Copy, 
  Check
} from 'lucide-react';
import { FormPermintaan } from '../types';
import { PORTAL_LINKS } from '../data/seedData';
import { generateNomorFormPermintaan, formatTanggalIndonesia, formatRupiah, compareNomorUrut, computeNextNomorUrut } from '../utils/formatters';
import { exportTableToCSV } from '../utils/storage';

interface FormPermintaanViewProps {
  formList: FormPermintaan[];
  onAddForm: (form: FormPermintaan) => void;
  onDeleteForm: (id: string) => void;
}

export const FormPermintaanView: React.FC<FormPermintaanViewProps> = ({
  formList,
  onAddForm,
  onDeleteForm
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterTipe, setFilterTipe] = useState<string>('Semua');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const nextNomorUrut = useMemo(() => {
    return computeNextNomorUrut(formList);
  }, [formList]);

  const [formData, setFormData] = useState({
    nomorUrut: String(nextNomorUrut),
    tanggal: new Date().toISOString().slice(0, 10),
    tipeForm: 'Belanja Bahan' as FormPermintaan['tipeForm'],
    perihal: '',
    pemohon: '',
    estimasiBiaya: 0,
    status: 'Diajukan' as FormPermintaan['status']
  });

  const handleOpenModal = () => {
    setFormData({
      nomorUrut: String(computeNextNomorUrut(formList)),
      tanggal: new Date().toISOString().slice(0, 10),
      tipeForm: 'Belanja Bahan',
      perihal: '',
      pemohon: '',
      estimasiBiaya: 0,
      status: 'Diajukan'
    });
    setIsModalOpen(true);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.perihal.trim()) {
      alert('Harap masukkan perihal permintaan.');
      return;
    }

    const tahun = new Date(formData.tanggal).getFullYear() || 2026;
    const nomorForm = generateNomorFormPermintaan(formData.nomorUrut, tahun);

    const newForm: FormPermintaan = {
      id: `fp-${Date.now()}`,
      nomorUrut: formData.nomorUrut,
      tanggal: formatTanggalIndonesia(formData.tanggal),
      tipeForm: formData.tipeForm,
      nomorForm: nomorForm,
      perihal: formData.perihal.trim(),
      pemohon: formData.pemohon.trim(),
      estimasiBiaya: formData.estimasiBiaya || undefined,
      status: formData.status,
      createdAt: new Date().toISOString()
    };

    onAddForm(newForm);
    setIsModalOpen(false);
  };

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
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
      .sort((a, b) => compareNomorUrut(a.nomorUrut, b.nomorUrut));
  }, [formList, searchTerm, filterTipe]);

  const handleExportCSV = () => {
    const rows = filteredList.map(s => ({
      No: s.nomorUrut,
      Tanggal: s.tanggal,
      Tipe_Form: s.tipeForm,
      Nomor_Form: s.nomorForm,
      Perihal: s.perihal,
      Pemohon: s.pemohon || '',
      Estimasi_Biaya: s.estimasiBiaya || 0
    }));
    exportTableToCSV(`Form_Permintaan_BPS_Selayar_${new Date().toISOString().slice(0, 10)}`, rows);
  };

  return (
    <div className="space-y-6 pb-12">
      
      {/* Header */}
      <div className="bg-white rounded-3xl p-5 sm:p-8 border border-slate-200 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex items-center gap-3.5 sm:gap-4">
          <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-indigo-50 border border-indigo-100 p-2.5 sm:p-3 flex items-center justify-center text-indigo-600 shrink-0">
            <ClipboardList className="w-full h-full stroke-[1.75]" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-indigo-700 bg-indigo-50 px-2.5 py-0.5 rounded-full border border-indigo-200">
                Formulir Anggaran
              </span>
              <span className="text-[10px] sm:text-xs font-semibold text-slate-500">BPS Kab. Kepulauan Selayar</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight mt-1">
              Form Permintaan Belanja Kantor
            </h2>
            <p className="text-xs sm:text-sm text-slate-500">
              Registrasi nomor form permintaan kebutuhan belanja bahan, barang, jasa dan operasional kantor.
            </p>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-2 sm:gap-3">
          <a
            href={PORTAL_LINKS.formPermintaan}
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
            className="flex-1 sm:flex-none justify-center px-4 py-2 sm:py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs sm:text-sm font-bold flex items-center gap-2 shadow-xs hover:shadow-md transition-all active:scale-95"
          >
            <Plus className="w-4 h-4" />
            <span>Buat Form Permintaan</span>
          </button>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="bg-white rounded-2xl p-4 border border-slate-200 shadow-xs flex flex-col md:flex-row gap-3 items-center justify-between">
        <div className="relative w-full md:w-80">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          <input
            type="text"
            placeholder="Cari nomor atau perihal permintaan..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm focus:outline-hidden focus:ring-2 focus:ring-indigo-500 transition-all"
          />
        </div>

        {/* Tipe filter */}
        <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-xl text-[11px] sm:text-xs font-semibold overflow-x-auto w-full md:w-auto">
          {['Semua', 'Belanja Bahan', 'Belanja Barang', 'Jasa Profesi', 'Perjalanan Dinas'].map((t) => (
            <button
              key={t}
              onClick={() => setFilterTipe(t)}
              className={`px-3 py-1.5 rounded-lg transition-all shrink-0 whitespace-nowrap ${
                filterTipe === t ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {t}
            </button>
          ))}
        </div>
      </div>

      {/* Mobile Card View (md:hidden) */}
      <div className="md:hidden space-y-3">
        {filteredList.length === 0 ? (
          <div className="bg-white rounded-2xl p-8 text-center text-slate-400 text-xs border border-slate-200">
            Tidak ada form permintaan yang sesuai filter.
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

                <span className="inline-block px-2 py-0.5 rounded-full text-[10px] font-bold bg-indigo-50 text-indigo-800 border border-indigo-200">
                  {item.tipeForm}
                </span>
              </div>

              {/* Card Body */}
              <div>
                <div className="flex items-center justify-between">
                  <span className="font-mono font-black text-sm text-indigo-950 tracking-tight break-all">
                    {item.nomorForm}
                  </span>
                  <button
                    onClick={() => copyToClipboard(item.nomorForm, item.id)}
                    className="p-1 text-slate-400 hover:text-indigo-600 rounded-md shrink-0 ml-2"
                    title="Salin Nomor Form"
                  >
                    {copiedId === item.id ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                <p className="text-xs font-bold text-slate-900 mt-1 leading-snug">
                  {item.perihal}
                </p>

                {(item.pemohon || item.estimasiBiaya) && (
                  <div className="mt-2 text-[11px] text-slate-600 bg-slate-50 rounded-xl p-2.5 border border-slate-100 space-y-1">
                    {item.pemohon && (
                      <div>
                        <span className="text-slate-400 font-medium">Pemohon: </span>
                        <span className="font-semibold text-slate-800">{item.pemohon}</span>
                      </div>
                    )}
                    {item.estimasiBiaya ? (
                      <div>
                        <span className="text-slate-400 font-medium">Estimasi Biaya: </span>
                        <span className="font-semibold text-emerald-700">{formatRupiah(item.estimasiBiaya)}</span>
                      </div>
                    ) : null}
                  </div>
                )}
              </div>

              {/* Card Actions */}
              <div className="pt-2 border-t border-slate-100 flex items-center justify-between gap-2">
                <button
                  onClick={() => copyToClipboard(item.nomorForm, item.id)}
                  className="flex-1 py-1.5 bg-indigo-50 hover:bg-indigo-100 text-indigo-800 rounded-xl font-bold text-xs flex items-center justify-center gap-1.5 transition-colors border border-indigo-200"
                >
                  <Copy className="w-3.5 h-3.5" />
                  <span>{copiedId === item.id ? 'Tersalin!' : 'Salin Nomor Form'}</span>
                </button>
                <button
                  onClick={() => {
                    if (confirm(`Hapus form nomor ${item.nomorForm}?`)) {
                      onDeleteForm(item.id);
                    }
                  }}
                  className="p-2 text-slate-400 hover:text-rose-600 rounded-xl hover:bg-rose-50 border border-slate-100 shrink-0"
                  title="Hapus"
                >
                  <Trash2 className="w-4 h-4" />
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
                <th className="py-3.5 px-4 w-36">Tipe Form</th>
                <th className="py-3.5 px-4 w-52">Nomor Form Permintaan</th>
                <th className="py-3.5 px-4">Perihal Permintaan</th>
                <th className="py-3.5 px-4 w-20 text-center">Aksi</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filteredList.length === 0 ? (
                <tr>
                  <td colSpan={6} className="py-12 text-center text-slate-400">
                    Tidak ada form permintaan yang sesuai filter.
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
                      <span className="inline-block px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-indigo-50 text-indigo-800 border border-indigo-200">
                        {item.tipeForm}
                      </span>
                    </td>
                    <td className="py-3 px-4 font-mono font-bold text-indigo-900 whitespace-nowrap">
                      <div className="flex items-center gap-1.5">
                        <span>{item.nomorForm}</span>
                        <button
                          onClick={() => copyToClipboard(item.nomorForm, item.id)}
                          className="text-slate-400 hover:text-indigo-600 p-1 rounded-md transition-colors"
                          title="Salin Nomor Form"
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
                      {item.perihal}
                    </td>
                    <td className="py-3 px-4 text-center">
                      <button
                        onClick={() => {
                          if (confirm(`Hapus form nomor ${item.nomorForm}?`)) {
                            onDeleteForm(item.id);
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
          <span>Menampilkan {filteredList.length} dari {formList.length} total Form Permintaan</span>
          <span className="font-semibold text-slate-700">Kode Akun KU.320</span>
        </div>
      </div>

      {/* Modal Buat Form Permintaan Baru */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-fadeIn">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-slate-200">
            <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-100">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-600">
                  <ClipboardList className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-black text-slate-900">Buat Form Permintaan Baru</h3>
                  <p className="text-xs text-slate-500">Pengajuan kebutuhan anggaran / belanja kantor</p>
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
              
              <div className="bg-indigo-50/80 border border-indigo-200 p-4 rounded-2xl">
                <span className="text-[11px] font-bold uppercase tracking-wider text-indigo-800">
                  Nomor Form Permintaan
                </span>
                <div className="text-base sm:text-lg font-mono font-black text-indigo-950 mt-0.5">
                  {generateNomorFormPermintaan(formData.nomorUrut, new Date(formData.tanggal).getFullYear() || 2026)}
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
                    className="w-full px-3 py-2 border border-slate-200 rounded-xl text-sm font-mono focus:ring-2 focus:ring-indigo-500 focus:outline-hidden"
                    required
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Tanggal</label>
                  <input
                    type="date"
                    value={formData.tanggal}
                    onChange={(e) => setFormData({ ...formData, tanggal: e.target.value })}
                    className="w-full px-3 py-2 border border-slate-200 rounded-xl text-sm focus:ring-2 focus:ring-indigo-500 focus:outline-hidden"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Tipe Form Permintaan</label>
                <select
                  value={formData.tipeForm}
                  onChange={(e) => setFormData({ ...formData, tipeForm: e.target.value as FormPermintaan['tipeForm'] })}
                  className="w-full px-3 py-2 border border-slate-200 rounded-xl text-sm font-medium focus:ring-2 focus:ring-indigo-500 focus:outline-hidden"
                >
                  <option value="Belanja Bahan">Belanja Bahan (Akun 521211 - konsumsi rapat, pelatihan, spanduk, ATK)</option>
                  <option value="Belanja Barang">Belanja Barang (Operasional luar kantor, transport lokal, sewa)</option>
                  <option value="Jasa Profesi">Jasa Profesi / Honor Petugas Sensus/Survei</option>
                  <option value="Perjalanan Dinas">Perjalanan Dinas Biasa / Dalam Kota</option>
                  <option value="Lainnya">Lainnya</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Perihal Permintaan <span className="text-rose-500">*</span>
                </label>
                <textarea
                  rows={3}
                  placeholder="Contoh: Honor Pendataan Ubinan Subround 1 Tahun 2026"
                  value={formData.perihal}
                  onChange={(e) => setFormData({ ...formData, perihal: e.target.value })}
                  className="w-full px-3 py-2 border border-slate-200 rounded-xl text-sm focus:ring-2 focus:ring-indigo-500 focus:outline-hidden"
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
                  className="px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs sm:text-sm font-bold shadow-md transition-all active:scale-95"
                >
                  Simpan Form
                </button>
              </div>

            </form>
          </div>
        </div>
      )}

    </div>
  );
};
