import React, { useState } from 'react';
import { Receipt, ExternalLink, Folder, FileText, Download, Search, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { PORTAL_LINKS } from '../data/seedData';

export const SPMDigitalView: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const spmFolders = [
    { bulan: 'Januari 2026', totalDokumen: 24, status: 'Lengkap', jenis: 'Gaji, Tukin, Ubinan, IMK Triwulan IV' },
    { bulan: 'Februari 2026', totalDokumen: 28, status: 'Lengkap', jenis: 'Honor Pelatihan Sakernas, Operasional Kantor' },
    { bulan: 'Maret 2026', totalDokumen: 19, status: 'Berjalan', jenis: 'Persiapan Susenas Maret 2026, Fullboard' },
    { bulan: 'April 2026', totalDokumen: 0, status: 'Draf', jenis: 'Jadwal Pengajuan Triwulan II' },
  ];

  return (
    <div className="space-y-6 pb-12">
      
      {/* Header */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 rounded-2xl bg-cyan-50 border border-cyan-100 p-3 flex items-center justify-center text-cyan-600">
            <Receipt className="w-full h-full stroke-[1.75]" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold uppercase tracking-wider text-cyan-800 bg-cyan-50 px-2.5 py-0.5 rounded-full border border-cyan-200">
                Arsip Keuangan
              </span>
              <span className="text-xs font-semibold text-slate-500">BPS Kab. Kepulauan Selayar</span>
            </div>
            <h2 className="text-2xl font-black text-slate-900 tracking-tight mt-1">
              SPM Digital (Surat Perintah Membayar)
            </h2>
            <p className="text-xs sm:text-sm text-slate-500">
              Repositori digital arsip berkas SPM, SP2D, bukti dukung kuitansi, dan pertanggungjawaban keuangan DIPA 7301.
            </p>
          </div>
        </div>

        <a
          href={PORTAL_LINKS.spmDigitalDrive}
          target="_blank"
          rel="noopener noreferrer"
          className="px-5 py-3 rounded-2xl bg-cyan-600 hover:bg-cyan-500 text-white font-bold text-xs sm:text-sm flex items-center gap-2 shadow-md hover:shadow-lg transition-all active:scale-95 self-start md:self-auto"
        >
          <ExternalLink className="w-4 h-4" />
          <span>Buka Google Drive SPM Digital</span>
        </a>
      </div>

      {/* Overview Card */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-xs">
          <span className="text-xs font-semibold text-slate-500">Akun Belanja Pegawai (51)</span>
          <div className="text-2xl font-black text-slate-900 mt-1">100% Digital</div>
          <p className="text-xs text-slate-500 mt-2">Gaji induk, kekurangan gaji, dan uang makan ASN</p>
        </div>

        <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-xs">
          <span className="text-xs font-semibold text-slate-500">Akun Belanja Barang (52)</span>
          <div className="text-2xl font-black text-cyan-600 mt-1">SAKTI & SP2D</div>
          <p className="text-xs text-slate-500 mt-2">Honor mitra, perjalanan dinas, ATK operasional</p>
        </div>

        <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-xs">
          <span className="text-xs font-semibold text-slate-500">Status Keamanan Arsip</span>
          <div className="text-2xl font-black text-emerald-600 mt-1 flex items-center gap-2">
            <ShieldCheck className="w-7 h-7" /> Terverifikasi
          </div>
          <p className="text-xs text-slate-500 mt-2">Tersinkronisasi dengan Google Drive Resmi Satker</p>
        </div>
      </div>

      {/* Monthly Archive Folders */}
      <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-xs">
        <h3 className="text-base font-bold text-slate-900 mb-4">
          Direktori Berkas SPM Digital Tahun 2026
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {spmFolders.map((folder, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl border border-slate-200 bg-slate-50/50 hover:bg-cyan-50/40 hover:border-cyan-300 transition-all group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="w-10 h-10 rounded-xl bg-cyan-100/70 text-cyan-700 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Folder className="w-5 h-5 fill-cyan-700" />
                  </div>
                  <span
                    className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                      folder.status === 'Lengkap'
                        ? 'bg-emerald-100 text-emerald-800'
                        : folder.status === 'Berjalan'
                        ? 'bg-amber-100 text-amber-800'
                        : 'bg-slate-200 text-slate-600'
                    }`}
                  >
                    {folder.status}
                  </span>
                </div>

                <h4 className="font-bold text-sm text-slate-900 group-hover:text-cyan-800">
                  {folder.bulan}
                </h4>
                <p className="text-xs text-slate-500 mt-1">
                  {folder.totalDokumen} Dokumen SPM
                </p>
                <p className="text-[11px] text-slate-600 mt-2 line-clamp-2">
                  {folder.jenis}
                </p>
              </div>

              <a
                href={PORTAL_LINKS.spmDigitalDrive}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 pt-3 border-t border-slate-200 flex items-center justify-between text-xs font-semibold text-cyan-700 group-hover:text-cyan-800"
              >
                <span>Buka Berkas</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};
