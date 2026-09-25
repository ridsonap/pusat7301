import React, { useState, useMemo } from 'react';
import { 
  Users, 
  Plus, 
  Search, 
  Download, 
  ExternalLink, 
  Trash2, 
  Edit, 
  X, 
  ShieldCheck,
  UserCheck,
  Briefcase
} from 'lucide-react';
import { Pegawai } from '../types';
import { PORTAL_LINKS } from '../data/seedData';
import { exportTableToCSV } from '../utils/storage';

interface DatabasePegawaiViewProps {
  pegawaiList: Pegawai[];
  onAddPegawai: (pegawai: Pegawai) => void;
  onUpdatePegawai: (pegawai: Pegawai) => void;
  onDeletePegawai: (id: string) => void;
}

export const DatabasePegawaiView: React.FC<DatabasePegawaiViewProps> = ({
  pegawaiList,
  onAddPegawai,
  onUpdatePegawai,
  onDeletePegawai
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingPegawai, setEditingPegawai] = useState<Pegawai | null>(null);

  const [formData, setFormData] = useState<Partial<Pegawai>>({
    nama: '',
    nipLama: '',
    nipBaru: '',
    golongan: 'III/a',
    pangkat: 'Penata Muda',
    jabatan: 'Statistisi Ahli Pertama BPS Kabupaten/Kota'
  });

  const handleOpenAdd = () => {
    setEditingPegawai(null);
    setFormData({
      nama: '',
      nipLama: '',
      nipBaru: '',
      golongan: 'III/a',
      pangkat: 'Penata Muda',
      jabatan: 'Statistisi Ahli Pertama BPS Kabupaten/Kota'
    });
    setIsModalOpen(true);
  };

  const handleOpenEdit = (p: Pegawai) => {
    setEditingPegawai(p);
    setFormData({ ...p });
    setIsModalOpen(true);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.nama?.trim()) {
      alert('Nama pegawai wajib diisi.');
      return;
    }

    if (editingPegawai) {
      onUpdatePegawai({
        ...editingPegawai,
        nama: formData.nama.trim(),
        nipLama: formData.nipLama?.trim() || '',
        nipBaru: formData.nipBaru?.trim() || '',
        golongan: formData.golongan || '',
        pangkat: formData.pangkat || '',
        jabatan: formData.jabatan?.trim() || ''
      });
    } else {
      const maxNo = pegawaiList.reduce((max, item) => (item.no > max ? item.no : max), 0);
      const newPegawai: Pegawai = {
        id: `peg-${Date.now()}`,
        no: maxNo + 1,
        nama: formData.nama.trim(),
        nipLama: formData.nipLama?.trim() || '',
        nipBaru: formData.nipBaru?.trim() || '',
        golongan: formData.golongan || '',
        pangkat: formData.pangkat || '',
        jabatan: formData.jabatan?.trim() || ''
      };
      onAddPegawai(newPegawai);
    }
    setIsModalOpen(false);
  };

  const filteredList = useMemo(() => {
    return pegawaiList.filter((item) => {
      return (
        item.nama.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.nipBaru.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.nipLama.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.jabatan.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.pangkat.toLowerCase().includes(searchTerm.toLowerCase())
      );
    });
  }, [pegawaiList, searchTerm]);

  const handleExportCSV = () => {
    const rows = filteredList.map(p => ({
      No: p.no,
      Nama_Lengkap: p.nama,
      NIP_Baru: p.nipBaru,
      NIP_Lama: p.nipLama,
      Golongan: p.golongan,
      Pangkat: p.pangkat,
      Jabatan: p.jabatan
    }));
    exportTableToCSV(`Database_Pegawai_BPS_Selayar_7301_${new Date().toISOString().slice(0, 10)}`, rows);
  };

  return (
    <div className="space-y-6 pb-12">
      
      {/* Header */}
      <div className="bg-white rounded-3xl p-5 sm:p-8 border border-slate-200 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex items-center gap-3.5 sm:gap-4">
          <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-sky-950 p-2.5 sm:p-3 flex items-center justify-center text-sky-400 shrink-0">
            <Users className="w-full h-full stroke-[1.75]" />
          </div>
          <div>
            <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
              <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-sky-800 bg-sky-50 px-2.5 py-0.5 rounded-full border border-sky-200">
                Master Data Kepegawaian
              </span>
              <span className="text-[10px] sm:text-xs font-semibold text-slate-500">BPS Kab. Kepulauan Selayar</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight mt-1">
              Database Pegawai 7301
            </h2>
            <p className="text-xs sm:text-sm text-slate-500">
              Data 26 pegawai resmi BPS Kepulauan Selayar: NIP, pangkat, golongan, dan jabatan dinas.
            </p>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-2 sm:gap-3">
          <a
            href={PORTAL_LINKS.databasePegawai}
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
            onClick={handleOpenAdd}
            className="flex-1 sm:flex-none justify-center px-4 py-2 sm:py-2.5 rounded-xl bg-sky-600 hover:bg-sky-500 text-white text-xs sm:text-sm font-bold flex items-center gap-2 shadow-xs hover:shadow-md transition-all active:scale-95"
          >
            <Plus className="w-4 h-4" />
            <span>Tambah Pegawai</span>
          </button>
        </div>
      </div>

      {/* Search Bar */}
      <div className="bg-white rounded-2xl p-4 border border-slate-200 shadow-xs flex flex-col md:flex-row gap-3 items-center justify-between">
        <div className="relative w-full md:w-96">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          <input
            type="text"
            placeholder="Cari nama pegawai, NIP, pangkat, atau jabatan..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm focus:outline-hidden focus:ring-2 focus:ring-sky-500 transition-all"
          />
        </div>
        <div className="text-xs text-slate-500 font-medium self-end md:self-auto">
          Total Terdata: <strong>{filteredList.length} Pegawai</strong>
        </div>
      </div>

      {/* Mobile Card View (md:hidden) */}
      <div className="md:hidden space-y-3">
        {filteredList.length === 0 ? (
          <div className="bg-white rounded-2xl p-8 text-center text-slate-400 text-xs border border-slate-200">
            Tidak ada pegawai yang cocok dengan kata kunci pencarian.
          </div>
        ) : (
          filteredList.map((p) => (
            <div
              key={p.id}
              className="bg-white rounded-2xl p-4 border border-slate-200 shadow-xs space-y-2.5"
            >
              {/* Card Header */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <span className="w-6 h-6 rounded-full bg-slate-100 text-slate-700 text-[11px] font-mono font-bold flex items-center justify-center">
                    {p.no}
                  </span>
                  {p.golongan && (
                    <span className="inline-block px-2 py-0.5 rounded-full text-[10px] font-bold bg-sky-50 text-sky-800 border border-sky-200">
                      Gol. {p.golongan}
                    </span>
                  )}
                </div>

                {p.pangkat && (
                  <span className="text-[10px] text-slate-500 font-medium">
                    {p.pangkat}
                  </span>
                )}
              </div>

              {/* Card Body */}
              <div>
                <h4 className="font-bold text-slate-900 text-sm leading-snug">
                  {p.nama}
                </h4>

                <div className="mt-2 text-[11px] text-slate-600 bg-slate-50 rounded-xl p-2.5 border border-slate-100 space-y-1">
                  <div>
                    <span className="text-slate-400 font-medium">NIP Baru: </span>
                    <span className="font-mono font-semibold text-slate-800">{p.nipBaru || '-'}</span>
                  </div>
                  {p.nipLama && (
                    <div>
                      <span className="text-slate-400 font-medium">NIP Lama: </span>
                      <span className="font-mono text-slate-600">{p.nipLama}</span>
                    </div>
                  )}
                  <div className="flex items-start gap-1 pt-0.5">
                    <Briefcase className="w-3.5 h-3.5 text-sky-600 shrink-0 mt-0.5" />
                    <span className="font-medium text-slate-700">{p.jabatan}</span>
                  </div>
                </div>
              </div>

              {/* Card Actions */}
              <div className="pt-2 border-t border-slate-100 flex items-center justify-between gap-2">
                <button
                  onClick={() => handleOpenEdit(p)}
                  className="flex-1 py-1.5 bg-sky-50 hover:bg-sky-100 text-sky-800 rounded-xl font-bold text-xs flex items-center justify-center gap-1.5 transition-colors border border-sky-200"
                >
                  <Edit className="w-3.5 h-3.5" />
                  <span>Edit Data</span>
                </button>
                <button
                  onClick={() => {
                    if (confirm(`Yakin ingin menghapus ${p.nama} dari database?`)) {
                      onDeletePegawai(p.id);
                    }
                  }}
                  className="p-2 text-slate-400 hover:text-rose-600 rounded-xl hover:bg-rose-50 border border-slate-100 shrink-0"
                  title="Hapus Pegawai"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Pegawai Table (hidden md:block) */}
      <div className="hidden md:block bg-white rounded-3xl border border-slate-200 shadow-xs overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs sm:text-sm">
            <thead className="bg-slate-50 border-b border-slate-200 text-slate-600 font-bold uppercase tracking-wider text-[11px]">
              <tr>
                <th className="py-3.5 px-4 w-12 text-center">No</th>
                <th className="py-3.5 px-4">Nama Lengkap & Gelar</th>
                <th className="py-3.5 px-4 w-52">NIP Baru (18 Digit)</th>
                <th className="py-3.5 px-4 w-28">NIP Lama</th>
                <th className="py-3.5 px-4 w-24 text-center">Golongan</th>
                <th className="py-3.5 px-4 w-40">Pangkat</th>
                <th className="py-3.5 px-4">Jabatan Kedinasan</th>
                <th className="py-3.5 px-4 w-24 text-center">Aksi</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filteredList.length === 0 ? (
                <tr>
                  <td colSpan={8} className="py-12 text-center text-slate-400">
                    Tidak ada pegawai yang cocok dengan kata kunci pencarian.
                  </td>
                </tr>
              ) : (
                filteredList.map((p) => (
                  <tr key={p.id} className="hover:bg-slate-50/80 transition-colors">
                    <td className="py-3 px-4 font-mono font-bold text-center text-slate-500">
                      {p.no}
                    </td>
                    <td className="py-3 px-4 font-bold text-slate-900">
                      {p.nama}
                    </td>
                    <td className="py-3 px-4 font-mono text-slate-700 text-xs">
                      {p.nipBaru || '-'}
                    </td>
                    <td className="py-3 px-4 font-mono text-slate-500 text-xs">
                      {p.nipLama || '-'}
                    </td>
                    <td className="py-3 px-4 text-center">
                      {p.golongan ? (
                        <span className="inline-block px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-sky-50 text-sky-800 border border-sky-200">
                          {p.golongan}
                        </span>
                      ) : (
                        <span className="text-slate-400">-</span>
                      )}
                    </td>
                    <td className="py-3 px-4 text-slate-700 text-xs">
                      {p.pangkat || '-'}
                    </td>
                    <td className="py-3 px-4 text-slate-800 text-xs font-medium">
                      {p.jabatan}
                    </td>
                    <td className="py-3 px-4 text-center">
                      <div className="flex items-center justify-center gap-1">
                        <button
                          onClick={() => handleOpenEdit(p)}
                          className="text-slate-400 hover:text-sky-600 p-1.5 rounded-lg hover:bg-sky-50 transition-colors"
                          title="Edit Pegawai"
                        >
                          <Edit className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => {
                            if (confirm(`Yakin ingin menghapus ${p.nama} dari database?`)) {
                              onDeletePegawai(p.id);
                            }
                          }}
                          className="text-slate-400 hover:text-rose-600 p-1.5 rounded-lg hover:bg-rose-50 transition-colors"
                          title="Hapus Pegawai"
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
          <span>Menampilkan {filteredList.length} dari {pegawaiList.length} pegawai</span>
          <span className="font-semibold text-slate-700">Satker 7301 Selayar</span>
        </div>
      </div>

      {/* Modal Tambah / Edit Pegawai */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-fadeIn">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-slate-200">
            <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-100">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-sky-50 border border-sky-100 flex items-center justify-center text-sky-600">
                  <UserCheck className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-black text-slate-900">
                    {editingPegawai ? 'Edit Data Pegawai' : 'Tambah Pegawai Baru'}
                  </h3>
                  <p className="text-xs text-slate-500">Database Pegawai BPS Kab. Kepulauan Selayar</p>
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
              
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Nama Lengkap & Gelar <span className="text-rose-500">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Contoh: Ridson Al Farizal P., S.Tr.Stat."
                  value={formData.nama || ''}
                  onChange={(e) => setFormData({ ...formData, nama: e.target.value })}
                  className="w-full px-3 py-2 border border-slate-200 rounded-xl text-sm focus:ring-2 focus:ring-sky-500 focus:outline-hidden"
                  required
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    NIP Baru (18 Digit)
                  </label>
                  <input
                    type="text"
                    placeholder="Contoh: 200110192023101002"
                    value={formData.nipBaru || ''}
                    onChange={(e) => setFormData({ ...formData, nipBaru: e.target.value })}
                    className="w-full px-3 py-2 border border-slate-200 rounded-xl text-xs sm:text-sm font-mono focus:ring-2 focus:ring-sky-500 focus:outline-hidden"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    NIP Lama (9 Digit)
                  </label>
                  <input
                    type="text"
                    placeholder="Contoh: 340062669"
                    value={formData.nipLama || ''}
                    onChange={(e) => setFormData({ ...formData, nipLama: e.target.value })}
                    className="w-full px-3 py-2 border border-slate-200 rounded-xl text-xs sm:text-sm font-mono focus:ring-2 focus:ring-sky-500 focus:outline-hidden"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Golongan
                  </label>
                  <select
                    value={formData.golongan || ''}
                    onChange={(e) => setFormData({ ...formData, golongan: e.target.value })}
                    className="w-full px-3 py-2 border border-slate-200 rounded-xl text-sm focus:ring-2 focus:ring-sky-500 focus:outline-hidden"
                  >
                    <option value="">-</option>
                    <option value="IV/b">IV/b (Pembina Tingkat 1)</option>
                    <option value="IV/a">IV/a (Pembina)</option>
                    <option value="III/d">III/d (Penata Tingkat 1)</option>
                    <option value="III/c">III/c (Penata)</option>
                    <option value="III/b">III/b (Penata Muda Tingkat 1)</option>
                    <option value="III/a">III/a (Penata Muda)</option>
                    <option value="II/d">II/d (Pengatur Tingkat 1)</option>
                    <option value="II/c">II/c (Pengatur)</option>
                    <option value="II/b">II/b (Pengatur Muda Tingkat 1)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Pangkat
                  </label>
                  <input
                    type="text"
                    placeholder="Contoh: Penata Muda"
                    value={formData.pangkat || ''}
                    onChange={(e) => setFormData({ ...formData, pangkat: e.target.value })}
                    className="w-full px-3 py-2 border border-slate-200 rounded-xl text-sm focus:ring-2 focus:ring-sky-500 focus:outline-hidden"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Jabatan Kedinasan <span className="text-rose-500">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Contoh: Statistisi Ahli Pertama BPS Kabupaten/Kota"
                  value={formData.jabatan || ''}
                  onChange={(e) => setFormData({ ...formData, jabatan: e.target.value })}
                  className="w-full px-3 py-2 border border-slate-200 rounded-xl text-sm focus:ring-2 focus:ring-sky-500 focus:outline-hidden"
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
                  className="px-5 py-2.5 rounded-xl bg-sky-600 hover:bg-sky-500 text-white text-xs sm:text-sm font-bold shadow-md transition-all active:scale-95"
                >
                  {editingPegawai ? 'Simpan Perubahan' : 'Tambah Pegawai'}
                </button>
              </div>

            </form>
          </div>
        </div>
      )}

    </div>
  );
};
