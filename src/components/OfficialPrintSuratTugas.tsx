import React from 'react';
import { SuratTugas, Pegawai } from '../types';
import { Printer, X } from 'lucide-react';

interface OfficialPrintSuratTugasProps {
  suratTugas: SuratTugas;
  assignedPegawaiList: Pegawai[];
  kepalaBps?: Pegawai;
  onClose: () => void;
}

export const OfficialPrintSuratTugas: React.FC<OfficialPrintSuratTugasProps> = ({
  suratTugas,
  assignedPegawaiList,
  kepalaBps,
  onClose,
}) => {
  const handlePrint = () => {
    window.print();
  };

  const defaultKepala = kepalaBps || {
    nama: 'Muhammad Nur, S.Sos',
    nipBaru: '197501281998031002',
    pangkat: 'Penata Tingkat 1',
    golongan: 'III/d',
    jabatan: 'Kepala BPS Kabupaten Kepulauan Selayar'
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-900/80 backdrop-blur-xs flex flex-col items-center justify-start p-2 sm:p-6 overflow-y-auto">
      
      {/* Top Floating Controls (Hidden on Print) */}
      <div className="no-print w-full max-w-4xl bg-white/95 backdrop-blur-md rounded-2xl p-4 mb-4 flex items-center justify-between shadow-xl border border-slate-200 sticky top-2 z-10">
        <div className="flex items-center gap-2">
          <span className="text-xs font-bold px-2.5 py-1 bg-sky-100 text-sky-800 rounded-md">
            Mode Pratinjau Cetak Resmi (A4)
          </span>
          <span className="text-xs text-slate-500 hidden sm:inline">
            Nomor: <strong>{suratTugas.nomorSurat}</strong>
          </span>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={handlePrint}
            className="px-4 py-2 bg-sky-600 hover:bg-sky-500 text-white rounded-xl text-xs sm:text-sm font-bold flex items-center gap-2 shadow-md active:scale-95 transition-all"
          >
            <Printer className="w-4 h-4" />
            <span>Cetak / Simpan PDF</span>
          </button>
          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-slate-700 rounded-xl hover:bg-slate-100 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Official A4 Document Container */}
      <div className="print-container bg-white w-full max-w-[210mm] min-h-[297mm] p-8 sm:p-14 shadow-2xl rounded-2xl text-black font-serif leading-normal relative">
        
        {/* Kop Surat Resmi BPS */}
        <div className="flex items-center gap-5 pb-3 border-b-2 border-slate-900">
          <div className="w-20 h-16 flex-shrink-0 flex items-center justify-center">
            <img src={`${import.meta.env.BASE_URL}bps-logo.svg`} alt="Logo BPS" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1 text-center font-sans">
            <h2 className="text-lg font-bold uppercase tracking-tight text-slate-900 leading-tight">
              Badan Pusat Statistik
            </h2>
            <h1 className="text-xl font-extrabold uppercase tracking-tight text-slate-900 leading-tight">
              Kabupaten Kepulauan Selayar
            </h1>
            <p className="text-[11px] text-slate-700 mt-1 leading-snug">
              Jl. WR. Supratman No. 20, Benteng, Kepulauan Selayar 92812, Telp: (0414) 21077<br />
              Email: bps7301@bps.go.id | Website: https://selayarkab.bps.go.id
            </p>
          </div>
        </div>
        {/* Thin bottom line of Kop */}
        <div className="border-b border-slate-900 mb-6 mt-0.5"></div>

        {/* Document Title & Number */}
        <div className="text-center mb-8">
          <h3 className="text-base font-bold uppercase tracking-widest underline decoration-2 underline-offset-4">
            SURAT TUGAS
          </h3>
          <p className="text-xs font-mono font-medium mt-1">
            NOMOR : {suratTugas.nomorSurat}
          </p>
        </div>

        {/* Introduction */}
        <div className="text-xs sm:text-sm text-justify mb-5 leading-relaxed">
          <p>
            Kepala Badan Pusat Statistik Kabupaten Kepulauan Selayar dengan ini memberikan tugas kedinasan kepada:
          </p>
        </div>

        {/* Assigned Staff Table */}
        <div className="mb-6 overflow-x-auto">
          <table className="w-full text-xs text-left border-collapse border border-slate-800 font-sans">
            <thead>
              <tr className="bg-slate-100 text-center font-bold">
                <th className="border border-slate-800 p-2 w-10">No</th>
                <th className="border border-slate-800 p-2">Nama Pegawai</th>
                <th className="border border-slate-800 p-2 w-36">NIP</th>
                <th className="border border-slate-800 p-2 w-28">Pangkat / Gol.</th>
                <th className="border border-slate-800 p-2">Jabatan</th>
              </tr>
            </thead>
            <tbody>
              {assignedPegawaiList.length > 0 ? (
                assignedPegawaiList.map((peg, idx) => (
                  <tr key={peg.id || idx}>
                    <td className="border border-slate-800 p-2 text-center font-mono">{idx + 1}</td>
                    <td className="border border-slate-800 p-2 font-semibold">{peg.nama}</td>
                    <td className="border border-slate-800 p-2 font-mono text-center">{peg.nipBaru || peg.nipLama || '-'}</td>
                    <td className="border border-slate-800 p-2 text-center">{peg.pangkat} ({peg.golongan || '-'})</td>
                    <td className="border border-slate-800 p-2">{peg.jabatan}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td className="border border-slate-800 p-2 text-center font-mono">1</td>
                  <td className="border border-slate-800 p-2 font-semibold">{suratTugas.petugas}</td>
                  <td className="border border-slate-800 p-2 text-center">-</td>
                  <td className="border border-slate-800 p-2 text-center">-</td>
                  <td className="border border-slate-800 p-2">Petugas / Tim Pelaksana BPS</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Task Details / Terms */}
        <div className="space-y-3 text-xs sm:text-sm text-justify mb-10 leading-relaxed font-sans">
          <div className="flex items-start gap-4">
            <span className="font-bold w-32 flex-shrink-0">Untuk Melaksanakan</span>
            <span>: {suratTugas.perihal}</span>
          </div>
          {suratTugas.tujuanTugas && (
            <div className="flex items-start gap-4">
              <span className="font-bold w-32 flex-shrink-0">Tujuan Tugas / Lokasi</span>
              <span>: {suratTugas.tujuanTugas}</span>
            </div>
          )}
          <div className="flex items-start gap-4">
            <span className="font-bold w-32 flex-shrink-0">Waktu Penugasan</span>
            <span>: {suratTugas.tanggal} {suratTugas.tanggalSelesai ? `s.d ${suratTugas.tanggalSelesai}` : ''}</span>
          </div>
          <div className="flex items-start gap-4">
            <span className="font-bold w-32 flex-shrink-0">Pembebanan Anggaran</span>
            <span>: DIPA Badan Pusat Statistik Kabupaten Kepulauan Selayar Tahun Anggaran 2026</span>
          </div>
        </div>

        {/* Closing note */}
        <p className="text-xs sm:text-sm text-justify mb-10 leading-relaxed">
          Demikian surat tugas ini dibuat untuk dilaksanakan dengan penuh tanggung jawab dan melaporkan hasilnya setelah selesai melaksanakan tugas.
        </p>

        {/* Signature Box */}
        <div className="flex justify-end pt-4 font-sans">
          <div className="text-center w-72">
            <p className="text-xs">Benteng, {suratTugas.tanggal}</p>
            <p className="text-xs font-bold mt-1">Kepala Badan Pusat Statistik</p>
            <p className="text-xs font-bold">Kabupaten Kepulauan Selayar,</p>
            
            {/* Space for signature */}
            <div className="h-20 flex items-center justify-center">
              <span className="text-[10px] text-slate-300 italic no-print">(Tanda Tangan & Cap Dinas)</span>
            </div>

            <p className="text-xs font-extrabold underline uppercase">
              {defaultKepala.nama}
            </p>
            <p className="text-xs font-mono">
              NIP. {defaultKepala.nipBaru}
            </p>
          </div>
        </div>

      </div>

    </div>
  );
};
