export interface Pegawai {
  id: string;
  no: number;
  nama: string;
  nipLama: string;
  nipBaru: string;
  golongan: string;
  pangkat: string;
  jabatan: string;
}

export interface SuratUmum {
  id: string;
  nomorUrut: number | string;
  tanggal: string;
  jenisSurat: 'Internal' | 'Eksternal';
  tujuan: string;
  kodeKlasifikasi: string;
  nomorSurat: string;
  perihal: string;
  ringkasan?: string;
  fileUrl?: string;
  createdAt?: string;
}

export interface SuratTugas {
  id: string;
  nomorUrut: number | string;
  tanggal: string;
  kodeKlasifikasi: string;
  nomorSurat: string;
  petugas: string;
  petugasIds?: string[];
  perihal: string;
  tujuanTugas?: string;
  tanggalMulai?: string;
  tanggalSelesai?: string;
  dasarPenugasan?: string;
  bebanAnggaran?: string;
  status?: 'Aktif' | 'Selesai' | 'Draf';
  createdAt?: string;
}

export interface SKKegiatan {
  id: string;
  nomorUrut: number | string;
  nomorSK: string;
  tanggal: string;
  uraian: string;
  subFungsi: 'UMUM' | 'IPDS' | 'DISTRIBUSI' | 'SOSIAL' | 'PRODUKSI' | 'NERWILIS' | string;
  pdfUrl?: string;
  wordUrl?: string;
  petugasHonor?: string;
  createdAt?: string;
}

export interface BAST {
  id: string;
  nomorUrut: number | string;
  tanggal: string;
  kodeKlasifikasi: string;
  nomorBAST: string;
  perihal: string;
  pihakPertama: string;
  pihakKedua: string;
  nilaiTransaksi?: number;
  keterangan?: string;
  createdAt?: string;
}

export interface FormPermintaan {
  id: string;
  nomorUrut: number | string;
  tanggal: string;
  tipeForm: 'Belanja Bahan' | 'Belanja Barang' | 'Belanja Pegawai' | 'Jasa Profesi' | 'Perjalanan Dinas' | 'Lainnya' | string;
  nomorForm: string;
  perihal: string;
  keterangan?: string;
  pemohon?: string;
  estimasiBiaya?: number;
  status?: 'Diajukan' | 'Disetujui' | 'Diproses' | 'Selesai';
  createdAt?: string;
}

export interface SuratPPK {
  id: string;
  nomorUrut: number | string;
  tanggal: string;
  jenisSurat: 'Eksternal' | 'Internal';
  tujuan: string;
  kodeKlasifikasi: string;
  nomorSurat: string;
  perihal: string;
  kategoriPPK?: 'SPMK' | 'HPS' | 'RAB' | 'Kontrak' | 'Undangan' | 'Lainnya';
  createdAt?: string;
}

export interface SKPItem {
  id: string;
  pegawaiId: string;
  nama: string;
  jabatan: string;
  uploadDriveUrl?: string;
  triwulan1: { hasil: string; perilaku: string; predikat: string; fileUrl?: string };
  triwulan2: { hasil: string; perilaku: string; predikat: string; fileUrl?: string };
  triwulan3: { hasil: string; perilaku: string; predikat: string; fileUrl?: string };
  triwulan4: { hasil: string; perilaku: string; predikat: string; fileUrl?: string };
  tahunan: { hasil: string; perilaku: string; predikat: string; fileUrl?: string };
}

export interface KodeKlasifikasi {
  kode: string;
  kategori: string;
  uraian: string;
  contohPenggunaan?: string;
}

export type ActiveTab = 
  | 'dashboard'
  | 'surat-umum'
  | 'surat-tugas'
  | 'sk-kegiatan'
  | 'bast'
  | 'form-permintaan'
  | 'surat-ppk'
  | 'skp-bulanan'
  | 'pegawai'
  | 'dokumentasi'
  | 'spm-digital';
