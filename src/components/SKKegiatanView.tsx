import React, { useState, useMemo } from 'react';
import { 
  FolderClosed, 
  Plus, 
  Search, 
  Download, 
  ExternalLink, 
  Trash2, 
  X, 
  FileText,
  Copy,
  Check,
  Tag
} from 'lucide-react';
import { SKKegiatan } from '../types';
import { PORTAL_LINKS } from '../data/seedData';
import { generateNomorSK, formatTanggalIndonesia } from '../utils/formatters';
import { exportTableToCSV } from '../utils/storage';

interface SKKegiatanViewProps {
  skList: SKKegiatan[];
  onAddSK: (sk: SKKegiatan) => void;
  onDeleteSK: (id: string) => void;
}

export const SKKegiatanView: React.FC<SKKegiatanViewProps> = ({
  skList,
  onAddSK,
  onDeleteSK
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterSubFungsi, setFilterSubFungsi] = useState<string>('Semua');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const nextNomorUrut = useMemo(() => {
    const maxNo = skList.reduce((max, item) => (item.nomorUrut > max ? item.nomorUrut : max), 0);
    return maxNo + 1;
  }, [skList]);

  const [formData, setFormData] = useState({
    nomorUrut: nextNomorUrut,
    tanggal: new Date().toISOString().slice(0, 10),
    uraian: '',
    subFungsi: 'UMUM' as SKKegiatan['subFungsi'],
    petugasHonor: 'Ada / Upload'
  });

  const handleOpenModal = () => {
    setFormData({
      nomorUrut: nextNomorUrut,
      tanggal: new Date().toISOString().slice(0, 10),
      uraian: '',
      subFungsi: 'UMUM',
      petugasHonor: 'Ada / Upload'
    });
    setIsModalOpen(true);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.uraian.trim()) {
      alert('Harap isi uraian SK Kegiatan.');
      return;
    }

    const tahun = new Date(formData.tanggal).getFullYear() || 2026;
    const nomorSK = generateNomorSK(formData.nomorUrut, tahun);

    const newSK: SKKegiatan = {
      id: `sk-${Date.now()}`,
      nomorUrut: formData.nomorUrut,
      nomorSK: nomorSK,
      tanggal: formatTanggalIndonesia(formData.tanggal),
      uraian: formData.uraian.trim(),
      subFungsi: formData.subFungsi,
      petugasHonor: formData.petugasHonor,
      createdAt: new Date().toISOString()
    };

    onAddSK(newSK);
    setIsModalOpen(false);
  };

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const filteredList = useMemo(() => {
    return skList.filter((item) => {
      const matchSearch =
        item.nomorSK.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.uraian.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.subFungsi.toLowerCase().includes(searchTerm.toLowerCase());

      const matchFungsi = filterSubFungsi === 'Semua' || item.subFungsi === filterSubFungsi;

      return matchSearch && matchFungsi;
    });
  }, [skList, searchTerm, filterSubFungsi]);

  const handleExportCSV = () => {
    const rows = filteredList.map(s => ({
      No: s.nomorUrut,
      Nomor_SK: s.nomorSK,
      Tanggal: s.tanggal,
      Uraian: s.uraian,
      Sub_Fungsi: s.subFungsi,
      Petugas_Honor: s.petugasHonor || ''
    }));
    exportTableToCSV(`SK_Kegiatan_BPS_Selayar_${new Date().toISOString().slice(0, 10)}`, rows);
  };

  return (
    <div className="space-y-6 pb-12">
      
      {/* Header Card */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 rounded-2xl bg-amber-50 border border-amber-100 p-3 flex items-center justify-center text-amber-600">
            <FolderClosed className="w-full h-full stroke-[1.75]" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-700 bg-amber-50 px-2.5 py-0.5 rounded-full border border-amber-200">
                Surat Keputusan
              </span>
              <span className="text-xs font-semibold text-slate-500">BPS Kab. Kepulauan Selayar</span>
            </div>
            <h2 className="text-2xl font-black text-slate-900 tracking-tight mt-1">
              Daftar SK Kegiatan Kantor
            </h2>
            <p className="text-xs sm:text-sm text-slate-500">
              Registrasi dan penomoran Surat Keputusan (SK) Kepala BPS, tim kerja, dan penetapan honor kegiatan.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <a
            href={PORTAL_LINKS.skKegiatan}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2.5 rounded-xl border border-slate-200 hover:bg-slate-50 text-slate-700 text-xs sm:text-sm font-semibold flex items-center gap-2 transition-colors"
          >
            <ExternalLink className="w-4 h-4 text-slate-400" />
            <span className="hidden sm:inline">Google Sheet</span>
          </a>

          <button
            onClick={handleExportCSV}
            className="px-4 py-2.5 rounded-xl border border-slate-200 hover:bg-slate-50 text-slate-700 text-xs sm:text-sm font-semibold flex items-center gap-2 transition-colors"
          >
            <Download className="w-4 h-4 text-slate-400" />
            <span className="hidden sm:inline">Ekspor CSV</span>
          </button>

          <button
            onClick={handleOpenModal}
            className="px-4 py-2.5 rounded-xl bg-amber-600 hover:bg-amber-500 text-white text-xs sm:text-sm font-bold flex items-center gap-2 shadow-xs hover:shadow-md transition-all active:scale-95"
          >
            <Plus className="w-4 h-4" />
            <span>Buat SK Baru</span>
          </button>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="bg-white rounded-2xl p-4 border border-slate-200 shadow-xs flex flex-col md:flex-row gap-3 items-center justify-between">
        <div className="relative w-full md:w-80">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          <input
            type="text"
            placeholder="Cari nomor SK atau uraian..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm focus:outline-hidden focus:ring-2 focus:ring-amber-500 transition-all"
          />
        </div>

        {/* Sub/Fungsi filter */}
        <div className="flex flex-wrap items-center gap-1 bg-slate-100 p-1 rounded-xl text-xs font-semibold">
          {['Semua', 'UMUM', 'IPDS', 'DISTRIBUSI', 'SOSIAL', 'PRODUKSI', 'NERWILCA'].map((f) => (
            <button
              key={f}
              onClick={() => setFilterSubFungsi(f)}
              className={`px-3 py-1.5 rounded-lg transition-all ${
                filterSubFungsi === f ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      {/* Table of SK Kegiatan */}
      <div className="bg-white rounded-3xl border border-slate-200 shadow-xs overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs sm:text-sm">
            <thead className="bg-slate-50 border-b border-slate-200 text-slate-600 font-bold uppercase tracking-wider text-[11px]">
              <tr>
                <th className="py-3.5 px-4 w-14 text-center">No</th>
                <th className="py-3.5 px-4 w-44">Nomor SK</th>
                <th className="py-3.5 px-4 w-32">Tanggal</th>
                <th className="py-3.5 px-4">Uraian SK Kegiatan</th>
                <th className="py-3.5 px-4 w-32">Sub / Fungsi</th>
                <th className="py-3.5 px-4 w-36">Petugas / Honor</th>
                <th className="py-3.5 px-4 w-20 text-center">Aksi</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filteredList.length === 0 ? (
                <tr>
                  <td colSpan={7} className="py-12 text-center text-slate-400">
                    Tidak ada SK Kegiatan yang sesuai kriteria.
                  </td>
                </tr>
              ) : (
                filteredList.map((item) => (
                  <tr key={item.id} className="hover:bg-slate-50/80 transition-colors">
                    <td className="py-3 px-4 font-mono font-bold text-center text-slate-500">
                      {item.nomorUrut}
                    </td>
                    <td className="py-3 px-4 font-mono font-bold text-amber-900 whitespace-nowrap">
                      <div className="flex items-center gap-1.5">
                        <span>{item.nomorSK}</span>
                        <button
                          onClick={() => copyToClipboard(item.nomorSK, item.id)}
                          className="text-slate-400 hover:text-amber-600 p-1 rounded-md transition-colors"
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
                    <td className="py-3 px-4 text-slate-600 whitespace-nowrap">
                      {item.tanggal}
                    </td>
                    <td className="py-3 px-4 text-slate-800 font-medium">
                      {item.uraian}
                    </td>
                    <td className="py-3 px-4">
                      <span className="inline-block px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-amber-50 text-amber-800 border border-amber-200">
                        {item.subFungsi}
                      </span>
                    </td>
                    <td className="py-3 px-4 text-slate-600 text-xs">
                      {item.petugasHonor || '-'}
                    </td>
                    <td className="py-3 px-4 text-center">
                      <button
                        onClick={() => {
                          if (confirm(`Yakin ingin menghapus SK ${item.nomorSK}?`)) {
                            onDeleteSK(item.id);
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
          <span>Menampilkan {filteredList.length} dari {skList.length} total SK Kegiatan</span>
          <span className="font-semibold text-slate-700">Satker 7301</span>
        </div>
      </div>

      {/* Modal Buat SK Baru */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-fadeIn">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-slate-200">
            <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-100">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-amber-50 border border-amber-100 flex items-center justify-center text-amber-600">
                  <FolderClosed className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-black text-slate-900">Buat SK Kegiatan Baru</h3>
                  <p className="text-xs text-slate-500">Penetapan Surat Keputusan BPS Kabupaten Kepulauan Selayar</p>
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
              
              <div className="bg-amber-50/80 border border-amber-200 p-4 rounded-2xl">
                <span className="text-[11px] font-bold uppercase tracking-wider text-amber-800">
                  Nomor SK Yang Diterbitkan
                </span>
                <div className="text-base sm:text-lg font-mono font-black text-amber-950 mt-0.5">
                  {generateNomorSK(formData.nomorUrut, new Date(formData.tanggal).getFullYear() || 2026)}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Nomor Urut</label>
                  <input
                    type="number"
                    min={1}
                    value={formData.nomorUrut}
                    onChange={(e) => setFormData({ ...formData, nomorUrut: parseInt(e.target.value) || 1 })}
                    className="w-full px-3 py-2 border border-slate-200 rounded-xl text-sm font-mono focus:ring-2 focus:ring-amber-500 focus:outline-hidden"
                    required
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Tanggal SK</label>
                  <input
                    type="date"
                    value={formData.tanggal}
                    onChange={(e) => setFormData({ ...formData, tanggal: e.target.value })}
                    className="w-full px-3 py-2 border border-slate-200 rounded-xl text-sm focus:ring-2 focus:ring-amber-500 focus:outline-hidden"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Sub / Fungsi</label>
                <select
                  value={formData.subFungsi}
                  onChange={(e) => setFormData({ ...formData, subFungsi: e.target.value as SKKegiatan['subFungsi'] })}
                  className="w-full px-3 py-2 border border-slate-200 rounded-xl text-sm font-medium focus:ring-2 focus:ring-amber-500 focus:outline-hidden"
                >
                  <option value="UMUM">UMUM (Tata Usaha, Kepegawaian, BMN, Keuangan)</option>
                  <option value="IPDS">IPDS (Integrasi Pengolahan & Diseminasi Statistik)</option>
                  <option value="DISTRIBUSI">DISTRIBUSI (Harga, Pariwisata, Transportasi)</option>
                  <option value="SOSIAL">SOSIAL (Kependudukan, Susenas, Sakernas)</option>
                  <option value="PRODUKSI">PRODUKSI (Pertanian, Industri, Konstruksi)</option>
                  <option value="NERWILCA">NERWILCA (Neraca Wilayah & Analisis Statistik)</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Uraian / Judul SK Kegiatan <span className="text-rose-500">*</span>
                </label>
                <textarea
                  rows={3}
                  placeholder="Contoh: SK Penetapan Petugas Lapangan Survei Industri Mikro dan Kecil (IMK) Triwulan I Tahun 2026"
                  value={formData.uraian}
                  onChange={(e) => setFormData({ ...formData, uraian: e.target.value })}
                  className="w-full px-3 py-2 border border-slate-200 rounded-xl text-sm focus:ring-2 focus:ring-amber-500 focus:outline-hidden"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Petugas / Honor</label>
                <input
                  type="text"
                  placeholder="Contoh: Terlampir / Ada Honor"
                  value={formData.petugasHonor}
                  onChange={(e) => setFormData({ ...formData, petugasHonor: e.target.value })}
                  className="w-full px-3 py-2 border border-slate-200 rounded-xl text-sm focus:ring-2 focus:ring-amber-500 focus:outline-hidden"
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
                  className="px-5 py-2.5 rounded-xl bg-amber-600 hover:bg-amber-500 text-white text-xs sm:text-sm font-bold shadow-md transition-all active:scale-95"
                >
                  Simpan SK
                </button>
              </div>

            </form>
          </div>
        </div>
      )}

    </div>
  );
};
