import React, { useState } from 'react';
import { Camera, ExternalLink, Image, FolderPlus, Search, Calendar, MapPin, Sparkles } from 'lucide-react';
import { PORTAL_LINKS } from '../data/seedData';

interface ActivityDoc {
  id: string;
  judul: string;
  kategori: string;
  tanggal: string;
  lokasi: string;
  deskripsi: string;
  fotoUrl: string;
}

export const DokumentasiView: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedKategori, setSelectedKategori] = useState('Semua');

  const sampleDocs: ActivityDoc[] = [
    {
      id: 'doc-1',
      judul: 'Pelatihan Petugas Survei Angkatan Kerja Nasional (Sakernas)',
      kategori: 'Pelatihan',
      tanggal: '02 Februari 2026',
      lokasi: 'Aula BPS Kabupaten Kepulauan Selayar',
      deskripsi: 'Pembekalan metodologi dan konsep definisi ketenagakerjaan bagi petugas pendataan lapangan Sakernas Februari 2026.',
      fotoUrl: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&auto=format&fit=crop&q=80'
    },
    {
      id: 'doc-2',
      judul: 'Supervisi Lapangan Pendataan Susenas Modul',
      kategori: 'Supervisi Lapangan',
      tanggal: '15 Januari 2026',
      lokasi: 'Kecamatan Benteng, Kepulauan Selayar',
      deskripsi: 'Pendampingan langsung pencacahan rumah tangga sampel untuk menjamin kualitas data sosial ekonomi keluarga.',
      fotoUrl: 'https://images.unsplash.com/photo-1577495508048-b635879837f1?w=800&auto=format&fit=crop&q=80'
    },
    {
      id: 'doc-3',
      judul: 'Rapat Koordinasi Evaluasi SAKIP & Pembangunan ZI',
      kategori: 'Rapat & Evaluasi',
      tanggal: '05 Januari 2026',
      lokasi: 'Ruang Rapat Utama BPS Selayar',
      deskripsi: 'Penguatan akuntabilitas kinerja instansi pemerintah dan roadmap Zona Integritas menuju WBK/WBBM.',
      fotoUrl: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=800&auto=format&fit=crop&q=80'
    },
    {
      id: 'doc-4',
      judul: 'Pengawasan dan Pengendalian BMN (Wasdal BMN)',
      kategori: 'BMN & Perlengkapan',
      tanggal: '09 Januari 2026',
      lokasi: 'Gudang & Sarpras BPS Selayar',
      deskripsi: 'Inventarisasi fisik Barang Milik Negara dan penatausahaan aset kendaraan dinas serta perlengkapan kantor.',
      fotoUrl: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&auto=format&fit=crop&q=80'
    },
    {
      id: 'doc-5',
      judul: 'Pendataan Survei Industri Mikro dan Kecil (IMK)',
      kategori: 'Survei Lapangan',
      tanggal: '12 Januari 2026',
      lokasi: 'Kecamatan Bontoharu, Selayar',
      deskripsi: 'Wawancara dengan pelaku usaha pengolahan makanan khas dan kerajinan lokal kepulauan.',
      fotoUrl: 'https://images.unsplash.com/photo-1556740758-90de374c12ad?w=800&auto=format&fit=crop&q=80'
    },
    {
      id: 'doc-6',
      judul: 'Pembinaan Desa Cantik (Cinta Statistik)',
      kategori: 'Diseminasi',
      tanggal: '18 Januari 2026',
      lokasi: 'Desa Bontomanai, Kepulauan Selayar',
      deskripsi: 'Program peningkatan literasi statistik bagi aparatur desa demi perencanaan pembangunan desa berbasis data valid.',
      fotoUrl: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&auto=format&fit=crop&q=80'
    }
  ];

  const filtered = sampleDocs.filter(d => {
    const matchSearch = d.judul.toLowerCase().includes(searchTerm.toLowerCase()) ||
                        d.deskripsi.toLowerCase().includes(searchTerm.toLowerCase()) ||
                        d.lokasi.toLowerCase().includes(searchTerm.toLowerCase());
    const matchKat = selectedKategori === 'Semua' || d.kategori === selectedKategori;
    return matchSearch && matchKat;
  });

  return (
    <div className="space-y-6 pb-12">
      
      {/* Header Card */}
      <div className="bg-white rounded-3xl p-5 sm:p-8 border border-slate-200 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex items-center gap-3.5 sm:gap-4">
          <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-purple-50 border border-purple-100 p-2.5 sm:p-3 flex items-center justify-center text-purple-600 shrink-0">
            <Camera className="w-full h-full stroke-[1.75]" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-purple-700 bg-purple-50 px-2.5 py-0.5 rounded-full border border-purple-200">
                Dokumentasi & Arsip Media
              </span>
              <span className="text-[10px] sm:text-xs font-semibold text-slate-500">BPS Kab. Kepulauan Selayar</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight mt-1">
              Galeri Dokumentasi Kegiatan
            </h2>
            <p className="text-xs sm:text-sm text-slate-500">
              Koleksi foto dan video kegiatan survei, pelatihan, supervisi lapangan, dan rapat kantor.
            </p>
          </div>
        </div>

        <a
          href={PORTAL_LINKS.dokumentasiDrive}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full md:w-auto justify-center px-5 py-2.5 sm:py-3 rounded-2xl bg-purple-600 hover:bg-purple-500 text-white font-bold text-xs sm:text-sm flex items-center gap-2 shadow-md hover:shadow-lg transition-all active:scale-95"
        >
          <ExternalLink className="w-4 h-4" />
          <span>Buka Google Drive</span>
        </a>
      </div>

      {/* Filter and Search */}
      <div className="bg-white rounded-2xl p-4 border border-slate-200 shadow-xs flex flex-col md:flex-row gap-3 items-center justify-between">
        <div className="relative w-full md:w-80">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          <input
            type="text"
            placeholder="Cari dokumentasi kegiatan..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm focus:outline-hidden focus:ring-2 focus:ring-purple-500 transition-all"
          />
        </div>

        <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-xl text-[11px] sm:text-xs font-semibold overflow-x-auto w-full md:w-auto max-w-full">
          {['Semua', 'Pelatihan', 'Supervisi Lapangan', 'Rapat & Evaluasi', 'Survei Lapangan', 'BMN & Perlengkapan', 'Diseminasi'].map(k => (
            <button
              key={k}
              onClick={() => setSelectedKategori(k)}
              className={`px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-lg transition-all shrink-0 whitespace-nowrap ${
                selectedKategori === k ? 'bg-white text-slate-900 shadow-xs font-bold' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {k}
            </button>
          ))}
        </div>
      </div>

      {/* Gallery Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map(doc => (
          <div
            key={doc.id}
            className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
          >
            <div>
              <div className="relative h-48 w-full overflow-hidden bg-slate-100">
                <img
                  src={doc.fotoUrl}
                  alt={doc.judul}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 bg-slate-900/75 backdrop-blur-xs text-white text-[11px] font-bold px-2.5 py-1 rounded-full border border-white/20">
                  {doc.kategori}
                </div>
              </div>

              <div className="p-5">
                <div className="flex items-center gap-3 text-slate-400 text-xs mb-2">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-purple-500" />
                    {doc.tanggal}
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-rose-500" />
                    {doc.lokasi}
                  </span>
                </div>
                <h4 className="text-base font-bold text-slate-900 group-hover:text-purple-600 transition-colors leading-snug mb-2">
                  {doc.judul}
                </h4>
                <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed">
                  {doc.deskripsi}
                </p>
              </div>
            </div>

            <div className="p-5 pt-0">
              <a
                href={PORTAL_LINKS.dokumentasiDrive}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2 bg-slate-50 hover:bg-purple-50 text-slate-700 hover:text-purple-700 rounded-xl text-xs font-bold border border-slate-200 flex items-center justify-center gap-1.5 transition-colors"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                <span>Lihat Berkas di Google Drive</span>
              </a>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};
