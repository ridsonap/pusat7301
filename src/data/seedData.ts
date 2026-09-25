import { Pegawai, SuratUmum, SuratTugas, SKKegiatan, BAST, FormPermintaan, SuratPPK, SKPItem, KodeKlasifikasi } from '../types';

export const PORTAL_LINKS = {
  "skKegiatan": "https://docs.google.com/spreadsheets/d/1M-BGHPYvFr3k_vTCzXNg0Oe3HmoYk1eM_R06jZ2uxJo/edit?usp=sharing",
  "suratUmum": "https://docs.google.com/spreadsheets/d/1NJ9WpVwN8IkCJEkn6r32a2XWpWnZezZX6sNoN3Dt2R4/edit?usp=sharing",
  "bast": "https://docs.google.com/spreadsheets/d/12ewV7Mmn6m1LX3i-DIBBAAuGnfB0mZODR9XXw8Yo4lQ/edit?usp=sharing",
  "suratTugas": "https://docs.google.com/spreadsheets/d/13KlQUACPZ3Rz_IQBzJIRQ6WXHTyDIPvh8PgcuoObM7Y/edit?usp=sharing",
  "dokumentasiDrive": "https://drive.google.com/drive/folders/1_NmbD6Cf1OOIuP8Fg_SaoJQFaZYeZUtN?usp=sharing",
  "formPermintaan": "https://docs.google.com/spreadsheets/d/1lsDhOlhQ6bYWbXQ-xOPUscwUanlf0Al0ensP3554kQY/edit?usp=sharing",
  "spmDigitalDrive": "https://drive.google.com/drive/folders/1db6vII1ZNw2eIjkAEraf2DfPtZamngHC",
  "suratPPK": "https://docs.google.com/spreadsheets/d/1_T61kej4WpRUG16sRXGWYg4mfcOg-fcgeQrsgeBWKZI/edit?usp=drive_link",
  "skpBulanan": "https://docs.google.com/spreadsheets/d/1UpoN4TbkFhoU8A3LUrhHrDaexxFbtKLt8AQ1Br1-uWY/edit?usp=drivesdk",
  "databasePegawai": "https://docs.google.com/spreadsheets/d/1hnGYZh1Ng61W8HYfYg5_DRRyvtSedklDSK2b6GEqUZc/edit?usp=sharing"
};

export const KODE_KLASIFIKASI_BPS: KodeKlasifikasi[] = [
  {
    "kode": "PR.100",
    "kategori": "Perencanaan",
    "uraian": "Penyusunan Rencana Kerja dan Anggaran (RKA-K/L)"
  },
  {
    "kode": "PR.710",
    "kategori": "Perencanaan",
    "uraian": "Rapat Koordinasi, Evaluasi, dan Rapat Rutin Bulanan"
  },
  {
    "kode": "VS.100",
    "kategori": "Statistik Sosial",
    "uraian": "Statistik Kesejahteraan Rakyat / Susenas"
  },
  {
    "kode": "VS.110",
    "kategori": "Statistik Sosial",
    "uraian": "Survei Penilaian Tingkat Literasi Keuangan (SNLIK)"
  },
  {
    "kode": "VS.120",
    "kategori": "Statistik Sosial",
    "uraian": "Survei Sosial Ekonomi Nasional (Susenas Modul)"
  },
  {
    "kode": "VS.200",
    "kategori": "Statistik Sosial",
    "uraian": "Statistik Kependudukan & Tenaga Kerja"
  },
  {
    "kode": "VS.210",
    "kategori": "Statistik Sosial",
    "uraian": "Survei Angkatan Kerja Nasional (Sakernas)"
  },
  {
    "kode": "VS.300",
    "kategori": "Statistik Distribusi",
    "uraian": "Statistik Distribusi dan Jasa"
  },
  {
    "kode": "VS.310",
    "kategori": "Statistik Distribusi",
    "uraian": "Survei Harga Konsumen / Pedesaan (SHPB)"
  },
  {
    "kode": "VS.320",
    "kategori": "Statistik Distribusi",
    "uraian": "Statistik Perhotelan & Pariwisata (VHTS)"
  },
  {
    "kode": "VS.330",
    "kategori": "Statistik Distribusi",
    "uraian": "Survei Industri Mikro Kecil (IMK) & SKTNP"
  },
  {
    "kode": "VS.400",
    "kategori": "Statistik Produksi",
    "uraian": "Statistik Pertanian, Tanaman Pangan & Hortikultura"
  },
  {
    "kode": "VS.410",
    "kategori": "Statistik Produksi",
    "uraian": "Survei Ubinan & Kerangka Sampel Area (KSA)"
  },
  {
    "kode": "PL.300",
    "kategori": "Pengadaan & BMN",
    "uraian": "Pengadaan Barang dan Jasa / SPMK / Kontrak / HPS PPK"
  },
  {
    "kode": "PL.530",
    "kategori": "Pengadaan & BMN",
    "uraian": "Pengawasan dan Pengendalian Barang Milik Negara (Wasdal BMN)"
  },
  {
    "kode": "KU.320",
    "kategori": "Keuangan",
    "uraian": "Surat Permintaan Pembayaran / Belanja Bahan & Barang"
  },
  {
    "kode": "KP.100",
    "kategori": "Kepegawaian",
    "uraian": "Formasi, Pengadaan, dan Penempatan Pegawai"
  },
  {
    "kode": "KP.300",
    "kategori": "Kepegawaian",
    "uraian": "Pengembangan Karir, Kenaikan Pangkat, & Tugas Belajar"
  },
  {
    "kode": "OT.100",
    "kategori": "Organisasi",
    "uraian": "Tata Hubungan Kerja dan Standar Operasional Prosedur (SOP)"
  },
  {
    "kode": "HM.100",
    "kategori": "Hubungan Masyarakat",
    "uraian": "Pemberitaan, Publikasi, dan Rilis Berita Resmi Statistik (BRS)"
  }
];

export const INITIAL_PEGAWAI: Pegawai[] = [
  {
    "id": "peg-1",
    "no": 1,
    "nama": "Muhammad Nur, S.Sos",
    "nipLama": "340015595",
    "nipBaru": "197501281998031002",
    "golongan": "III/d",
    "pangkat": "Penata Tingkat 1",
    "jabatan": "Kepala BPS Kabupaten/Kota"
  },
  {
    "id": "peg-2",
    "no": 2,
    "nama": "Takdir Khauripan, S.Si.",
    "nipLama": "340055482",
    "nipBaru": "198704262011011006",
    "golongan": "III/d",
    "pangkat": "Penata Tingkat 1",
    "jabatan": "Kepala Subbagian Umum"
  },
  {
    "id": "peg-3",
    "no": 3,
    "nama": "Sri Wahyuni, S.Si",
    "nipLama": "340051328",
    "nipBaru": "198409292009022004",
    "golongan": "III/d",
    "pangkat": "Penata Tingkat 1",
    "jabatan": "Statistisi Ahli Muda BPS Kabupaten/Kota"
  },
  {
    "id": "peg-4",
    "no": 4,
    "nama": "Muhammad Ikbal Nur",
    "nipLama": "340014269",
    "nipBaru": "196910051994011001",
    "golongan": "III/b",
    "pangkat": "Penata Muda Tingkat 1",
    "jabatan": "Fungsional Umum BPS Kabupaten/Kota"
  },
  {
    "id": "peg-5",
    "no": 5,
    "nama": "Bustan, S.Sos",
    "nipLama": "340016776",
    "nipBaru": "197706012002121005",
    "golongan": "III/b",
    "pangkat": "Penata Muda Tingkat 1",
    "jabatan": "Statistisi Ahli Pertama BPS Kabupaten/Kota"
  },
  {
    "id": "peg-6",
    "no": 6,
    "nama": "Zulhan Efendy, S.Sos",
    "nipLama": "340019537",
    "nipBaru": "198406042007011002",
    "golongan": "III/b",
    "pangkat": "Penata Muda Tingkat 1",
    "jabatan": "Statistisi Ahli Pertama BPS Kabupaten/Kota"
  },
  {
    "id": "peg-7",
    "no": 7,
    "nama": "Nurlaela, S.Sos",
    "nipLama": "340019055",
    "nipBaru": "198201262006042016",
    "golongan": "III/b",
    "pangkat": "Penata Muda Tingkat 1",
    "jabatan": "Statistisi Mahir BPS Kabupaten/Kota"
  },
  {
    "id": "peg-8",
    "no": 8,
    "nama": "Nur Asri, A.Md.Kom.",
    "nipLama": "340055468",
    "nipBaru": "198202282011011014",
    "golongan": "III/b",
    "pangkat": "Penata Muda Tingkat 1",
    "jabatan": "Statistisi Mahir BPS Kabupaten/Kota"
  },
  {
    "id": "peg-9",
    "no": 9,
    "nama": "Konita Iladini, S.Tr.Stat.",
    "nipLama": "340060171",
    "nipBaru": "199806182021042001",
    "golongan": "III/b",
    "pangkat": "Penata Muda Tingkat 1",
    "jabatan": "Statistisi Ahli Pertama BPS Kabupaten/Kota"
  },
  {
    "id": "peg-10",
    "no": 10,
    "nama": "Fakhri Hafidzul Azhar, S.Tr.Stat.",
    "nipLama": "340060088",
    "nipBaru": "199801112021041001",
    "golongan": "III/b",
    "pangkat": "Penata Muda Tingkat 1",
    "jabatan": "Statistisi Ahli Pertama BPS Kabupaten/Kota"
  },
  {
    "id": "peg-11",
    "no": 11,
    "nama": "Muhammad Junaid",
    "nipLama": "340018946",
    "nipBaru": "197206092006041025",
    "golongan": "III/a",
    "pangkat": "Penata Muda",
    "jabatan": "Fungsional Umum BPS Kabupaten/Kota"
  },
  {
    "id": "peg-12",
    "no": 12,
    "nama": "Andi Basri",
    "nipLama": "340053121",
    "nipBaru": "197205072009111001",
    "golongan": "II/d",
    "pangkat": "Pengatur Tingkat 1",
    "jabatan": "Fungsional Umum BPS Kabupaten/Kota"
  },
  {
    "id": "peg-13",
    "no": 13,
    "nama": "Ilham Aminu Rosyid, S.Tr.Stat.",
    "nipLama": "340061825",
    "nipBaru": "200002112023021004",
    "golongan": "III/a",
    "pangkat": "Penata Muda",
    "jabatan": "Statistisi Ahli Pertama BPS Kabupaten/Kota"
  },
  {
    "id": "peg-14",
    "no": 14,
    "nama": "Nola Ramasentia, S.Tr.Stat.",
    "nipLama": "340061969",
    "nipBaru": "199901022023022001",
    "golongan": "III/a",
    "pangkat": "Penata Muda",
    "jabatan": "Statistisi Ahli Pertama BPS Kabupaten/Kota"
  },
  {
    "id": "peg-15",
    "no": 15,
    "nama": "Indawati Amiruddin, A.Md.Stat.",
    "nipLama": "340062164",
    "nipBaru": "200006252023022002",
    "golongan": "II/c",
    "pangkat": "Pengatur",
    "jabatan": "Statistisi Terampil BPS Kabupaten/Kota"
  },
  {
    "id": "peg-16",
    "no": 16,
    "nama": "Nurul Izzah Abdullah, A.Md.Stat.",
    "nipLama": "340062213",
    "nipBaru": "200105302023022003",
    "golongan": "II/c",
    "pangkat": "Pengatur",
    "jabatan": "Statistisi Terampil BPS Kabupaten/Kota"
  },
  {
    "id": "peg-17",
    "no": 17,
    "nama": "Ahmad Musawwir, A.Md.Kom.",
    "nipLama": "340061155",
    "nipBaru": "199108212022031005",
    "golongan": "II/d",
    "pangkat": "Pengatur",
    "jabatan": "Statistisi Terampil / Bendahara Pengeluaran"
  },
  {
    "id": "peg-18",
    "no": 18,
    "nama": "Andi Muhammad Rosyidin Hidayat, S.Tr.Stat.",
    "nipLama": "340062335",
    "nipBaru": "200106152023101004",
    "golongan": "III/a",
    "pangkat": "Penata Muda",
    "jabatan": "Pranata Komputer Ahli Pertama BPS Kabupaten/Kota"
  },
  {
    "id": "peg-19",
    "no": 19,
    "nama": "Ridson Al Farizal P., S.Tr.Stat.",
    "nipLama": "340062669",
    "nipBaru": "200110192023101002",
    "golongan": "III/a",
    "pangkat": "Penata Muda",
    "jabatan": "Statistisi Ahli Pertama BPS Kabupaten/Kota"
  },
  {
    "id": "peg-20",
    "no": 20,
    "nama": "Aronad Brilliantino Evan Maheswara, S.Tr.Stat.",
    "nipLama": "340063050",
    "nipBaru": "200204022024121002",
    "golongan": "III/a",
    "pangkat": "Penata Muda",
    "jabatan": "Statistisi Ahli Pertama BPS Kabupaten/Kota"
  },
  {
    "id": "peg-21",
    "no": 21,
    "nama": "Nur Amalina Fauzi S.Tr.Stat.",
    "nipLama": "340062619",
    "nipBaru": "200106022023102003",
    "golongan": "III/a",
    "pangkat": "Penata Muda",
    "jabatan": "Statistisi Ahli Pertama BPS Kabupaten/Kota"
  },
  {
    "id": "peg-22",
    "no": 22,
    "nama": "Mukhtar, A.Md.Kom.",
    "nipLama": "340062884",
    "nipBaru": "199103282024211002",
    "golongan": "II/c",
    "pangkat": "Pengatur",
    "jabatan": "Pranata Komputer Terampil BPS Kabupaten/Kota"
  },
  {
    "id": "peg-23",
    "no": 23,
    "nama": "Arie Purnama S.IP.",
    "nipLama": "340064247",
    "nipBaru": "199510312025211029",
    "golongan": "Penata Layanan Operasional",
    "pangkat": "",
    "jabatan": ""
  },
  {
    "id": "peg-24",
    "no": 24,
    "nama": "Apri Wijaya S.T.",
    "nipLama": "340064223",
    "nipBaru": "199104012025211050",
    "golongan": "Penata Layanan Operasional",
    "pangkat": "",
    "jabatan": ""
  },
  {
    "id": "peg-25",
    "no": 25,
    "nama": "Muh. Aszar Siri",
    "nipLama": "340065162",
    "nipBaru": "198505132025211058",
    "golongan": "Operator Layanan Operasional",
    "pangkat": "",
    "jabatan": ""
  },
  {
    "id": "peg-26",
    "no": 26,
    "nama": "Mursalim",
    "nipLama": "340065248",
    "nipBaru": "198802272025211049",
    "golongan": "Operator Layanan Operasional",
    "pangkat": "",
    "jabatan": ""
  }
];

export const INITIAL_SURAT_UMUM: SuratUmum[] = [
  {
    "id": "su-1",
    "nomorUrut": 1,
    "tanggal": "2 Januari 2026",
    "jenisSurat": "Internal",
    "tujuan": "BPS Provinsi",
    "kodeKlasifikasi": "VS.110",
    "nomorSurat": "B-1/7301/VS.110/2026",
    "perihal": "Surat Permohonan Penambahan Petugas SNLIK 2026"
  },
  {
    "id": "su-2",
    "nomorUrut": 2,
    "tanggal": "2 Januari 2026",
    "jenisSurat": "Internal",
    "tujuan": "Pegawai BPS Kab. Kepulauan Selayar",
    "kodeKlasifikasi": "PR.710",
    "nomorSurat": "B-2/7301/PR.710/2026",
    "perihal": "Undangan Rapat Rutin Bulan Januari Tahun 2026"
  },
  {
    "id": "su-3",
    "nomorUrut": 3,
    "tanggal": "2 Januari 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "Undangan Briefing Petugas SHP",
    "kodeKlasifikasi": "VS.220",
    "nomorSurat": "B-3/7301/VS.220/2026",
    "perihal": "Briefing SHP"
  },
  {
    "id": "su-4",
    "nomorUrut": 4,
    "tanggal": "2 Januari 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "Kepala Kantor UPT Pelabuhan Pengumpan Selayar",
    "kodeKlasifikasi": "VS.330",
    "nomorSurat": "B-4/7301/VS.330/2026",
    "perihal": "Permintaan Data Pelabuhan"
  },
  {
    "id": "su-5",
    "nomorUrut": 5,
    "tanggal": "2 Januari 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "Koordinator Satuan Pelayanan Pelabuhan Penyebrangan Pamatata",
    "kodeKlasifikasi": "VS.330",
    "nomorSurat": "B-5/7301/VS.330/2026",
    "perihal": "Permintaan Data Pelabuhan"
  },
  {
    "id": "su-6",
    "nomorUrut": 6,
    "tanggal": "2 Januari 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "Kepala Kantor Pelabuhan Kelas III Selayar",
    "kodeKlasifikasi": "VS.330",
    "nomorSurat": "B-6/7301/VS.330/2026",
    "perihal": "Permintaan Data Pelabuhan"
  },
  {
    "id": "su-7",
    "nomorUrut": 7,
    "tanggal": "5 Januari 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "Kepala Bagian Pengadaan Barang/Jasa BPS",
    "kodeKlasifikasi": "PL.200",
    "nomorSurat": "B-7/7301/PL.200/2026",
    "perihal": "Permintaan Pengaktifan Akun Pejabat Pembuat Komitmen (PPK)/Pejabat Pengadaan (PP) atau Reset Password Akun PPK/PP Atas Nama Andi Muhammad Rosyidin Hidayat"
  },
  {
    "id": "su-8",
    "nomorUrut": 8,
    "tanggal": "5 Januari 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "KPPN Benteng",
    "kodeKlasifikasi": "KU.230",
    "nomorSurat": "B-8/7301/KU.230/2026",
    "perihal": "Pengaktifan Pengguna dan One Time Password (OTP) SAKTI PPK"
  },
  {
    "id": "su-9",
    "nomorUrut": 9,
    "tanggal": "7 Januari 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "DISKOMINFO-SP",
    "kodeKlasifikasi": "KS.000",
    "nomorSurat": "B-9/7301/KS.000/2026",
    "perihal": "Permintaan Data untuk Publikasi Selayar Dalam Angka 2026 dan Penyusunan Pertumbuhan Ekonomi 2025"
  },
  {
    "id": "su-10",
    "nomorUrut": 10,
    "tanggal": "7 Januari 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "PLN",
    "kodeKlasifikasi": "KS.000",
    "nomorSurat": "B-10/7301/KS.000/2026",
    "perihal": "Permintaan Data untuk Publikasi Selayar Dalam Angka 2026 dan Penyusunan Pertumbuhan Ekonomi 2025"
  },
  {
    "id": "su-11",
    "nomorUrut": 11,
    "tanggal": "7 Januari 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "Kemenag Selayar",
    "kodeKlasifikasi": "KS.000",
    "nomorSurat": "B-11/7301/KS.000/2026",
    "perihal": "Permintaan Data untuk Publikasi Selayar Dalam Angka 2026"
  },
  {
    "id": "su-12",
    "nomorUrut": 12,
    "tanggal": "7 Januari 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "PDAM",
    "kodeKlasifikasi": "KS.000",
    "nomorSurat": "B-12/7301/KS.000/2026",
    "perihal": "Permintaan Data untuk Publikasi Selayar Dalam Angka 2026 dan Penyusunan Pertumbuhan Ekonomi 2025"
  },
  {
    "id": "su-13",
    "nomorUrut": 13,
    "tanggal": "7 Januari 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "Kepolisian Resort",
    "kodeKlasifikasi": "KS.000",
    "nomorSurat": "B-13/7301/KS.000/2026",
    "perihal": "Permintaan Data untuk Publikasi Selayar Dalam Angka 2026"
  },
  {
    "id": "su-14",
    "nomorUrut": 14,
    "tanggal": "7 Januari 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "Komando Distrik Militer 1415",
    "kodeKlasifikasi": "KS.000",
    "nomorSurat": "B-14/7301/KS.000/2026",
    "perihal": "Permintaan Data untuk Publikasi Selayar Dalam Angka 2026"
  },
  {
    "id": "su-15",
    "nomorUrut": 15,
    "tanggal": "7 Januari 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "Taman Nasional Takabonerate",
    "kodeKlasifikasi": "KS.000",
    "nomorSurat": "B-15/7301/KS.000/2026",
    "perihal": "Permintaan Data untuk Publikasi Selayar Dalam Angka 2026"
  },
  {
    "id": "su-16",
    "nomorUrut": 16,
    "tanggal": "7 Januari 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "Kantor Pos",
    "kodeKlasifikasi": "KS.000",
    "nomorSurat": "B-16/7301/KS.000/2026",
    "perihal": "Permintaan Data untuk Publikasi Selayar Dalam Angka 2026 dan Penyusunan Pertumbuhan Ekonomi 2025"
  },
  {
    "id": "su-17",
    "nomorUrut": 17,
    "tanggal": "7 Januari 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "Perum Bulog KCP",
    "kodeKlasifikasi": "KS.000",
    "nomorSurat": "B-17/7301/KS.000/2026",
    "perihal": "Permintaan Data untuk Publikasi Selayar Dalam Angka 2026"
  },
  {
    "id": "su-18",
    "nomorUrut": 18,
    "tanggal": "7 Januari 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "Bank Mandiri Cabang",
    "kodeKlasifikasi": "KS.000",
    "nomorSurat": "B-18/7301/KS.000/2026",
    "perihal": "Permintaan Data untuk Publikasi Selayar Dalam Angka 2026"
  },
  {
    "id": "su-19",
    "nomorUrut": 19,
    "tanggal": "7 Januari 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "Rumah Tahanan",
    "kodeKlasifikasi": "KS.000",
    "nomorSurat": "B-19/7301/KS.000/2026",
    "perihal": "Permintaan Data untuk Publikasi Selayar Dalam Angka 2026"
  },
  {
    "id": "su-20",
    "nomorUrut": 20,
    "tanggal": "7 Januari 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "Bandara Aeropala",
    "kodeKlasifikasi": "KS.000",
    "nomorSurat": "B-20/7301/KS.000/2026",
    "perihal": "Permintaan Data untuk Publikasi Selayar Dalam Angka 2026"
  },
  {
    "id": "su-21",
    "nomorUrut": 21,
    "tanggal": "7 Januari 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "BPR Pesisir Tanadoang",
    "kodeKlasifikasi": "KS.000",
    "nomorSurat": "B-21/7301/KS.000/2026",
    "perihal": "Permintaan Data untuk Publikasi Selayar Dalam Angka 2026"
  },
  {
    "id": "su-22",
    "nomorUrut": 22,
    "tanggal": "7 Januari 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "BNI Cabang",
    "kodeKlasifikasi": "KS.000",
    "nomorSurat": "B-22/7301/KS.000/2026",
    "perihal": "Permintaan Data untuk Publikasi Selayar Dalam Angka 2026"
  },
  {
    "id": "su-23",
    "nomorUrut": 23,
    "tanggal": "7 Januari 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "Permohonan Pendataan Pegawai kppn dalam Sensus Ekonomi 2026",
    "kodeKlasifikasi": "KS.000",
    "nomorSurat": "B-23/7301/KS.000/2026",
    "perihal": "Permintaan Data untuk Publikasi Selayar Dalam Angka 2026"
  },
  {
    "id": "su-24",
    "nomorUrut": 24,
    "tanggal": "7 Januari 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "Pengadilan Agama",
    "kodeKlasifikasi": "KS.000",
    "nomorSurat": "B-24/7301/KS.000/2026",
    "perihal": "Permintaan Data untuk Publikasi Selayar Dalam Angka 2026"
  },
  {
    "id": "su-25",
    "nomorUrut": 25,
    "tanggal": "7 Januari 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "Pengadilan Negeri",
    "kodeKlasifikasi": "KS.000",
    "nomorSurat": "B-25/7301/KS.000/2026",
    "perihal": "Permintaan Data untuk Publikasi Selayar Dalam Angka 2026"
  },
  {
    "id": "su-26",
    "nomorUrut": 26,
    "tanggal": "7 Januari 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "BRI Cabang",
    "kodeKlasifikasi": "KS.000",
    "nomorSurat": "B-26/7301/KS.000/2026",
    "perihal": "Permintaan Data untuk Publikasi Selayar Dalam Angka 2026"
  },
  {
    "id": "su-27",
    "nomorUrut": 27,
    "tanggal": "7 Januari 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "Bank Sulselbar Cabang",
    "kodeKlasifikasi": "KS.000",
    "nomorSurat": "B-27/7301/KS.000/2026",
    "perihal": "Permintaan Data untuk Publikasi Selayar Dalam Angka 2026"
  }
];

export const INITIAL_SURAT_TUGAS: SuratTugas[] = [
  {
    "id": "st-1",
    "nomorUrut": 1,
    "tanggal": "2 Januari 2026",
    "kodeKlasifikasi": "VS.210",
    "nomorSurat": "B-1/7301/VS.210/2026",
    "petugas": "Terlampir",
    "perihal": "Pelatihan Inda Sakernas Februari 2026",
    "tujuanTugas": "Kabupaten Kepulauan Selayar"
  },
  {
    "id": "st-2",
    "nomorUrut": 2,
    "tanggal": "2 Januari 2026",
    "kodeKlasifikasi": "VS.330",
    "nomorSurat": "B-2/7301/VS.330/2026",
    "petugas": "Terlampir",
    "perihal": "Pendataan VHTS Bulan Januari 2026",
    "tujuanTugas": "KODE KLASIFIKASI"
  },
  {
    "id": "st-3",
    "nomorUrut": 3,
    "tanggal": "2 Januari 2026",
    "kodeKlasifikasi": "VS.330",
    "nomorSurat": "B-3/7301/VS.330/2026",
    "petugas": "Terlampir",
    "perihal": "Pendataan SHPB",
    "tujuanTugas": "Sesuaikan dengan tujuan kegiatan penugasan"
  },
  {
    "id": "st-4",
    "nomorUrut": 4,
    "tanggal": "2 Januari 2026",
    "kodeKlasifikasi": "VS.330",
    "nomorSurat": "B-4/7301/VS.330/2026",
    "petugas": "Terlampir",
    "perihal": "Pendataan Simoppel Pelabuhan",
    "tujuanTugas": "Kabupaten Kepulauan Selayar"
  },
  {
    "id": "st-5",
    "nomorUrut": 5,
    "tanggal": "2 Januari 2026",
    "kodeKlasifikasi": "VS.330",
    "nomorSurat": "B-5/7301/VS.330/2026",
    "petugas": "Terlampir",
    "perihal": "Pendataan Bandar Udara",
    "tujuanTugas": "HARUS DIISI"
  },
  {
    "id": "st-6",
    "nomorUrut": 6,
    "tanggal": "2 Januari 2026",
    "kodeKlasifikasi": "VS.330",
    "nomorSurat": "B-6/7301/VS.330/2026",
    "petugas": "Terlampir",
    "perihal": "Pendataan Identifikasi Komoditas Utama SHP",
    "tujuanTugas": "Kabupaten Kepulauan Selayar"
  },
  {
    "id": "st-7",
    "nomorUrut": 7,
    "tanggal": "2 Januari 2026",
    "kodeKlasifikasi": "VS.330",
    "nomorSurat": "B-7/7301/VS.330/2026",
    "petugas": "Terlampir",
    "perihal": "Pendataan SHP Januari 2026",
    "tujuanTugas": "Kabupaten Kepulauan Selayar"
  },
  {
    "id": "st-8",
    "nomorUrut": 8,
    "tanggal": "2 Januari 2026",
    "kodeKlasifikasi": "VS.330",
    "nomorSurat": "B-8/7301/VS.330/2026",
    "petugas": "Terlampir",
    "perihal": "Pendataan Ubinan Palawija SR 1 2026",
    "tujuanTugas": "Kabupaten Kepulauan Selayar"
  },
  {
    "id": "st-9",
    "nomorUrut": 9,
    "tanggal": "2 Januari 2026",
    "kodeKlasifikasi": "VS.330",
    "nomorSurat": "B-9/7301/VS.330/2026",
    "petugas": "Terlampir",
    "perihal": "Pendataan IMK Triwulan 4 2025",
    "tujuanTugas": "Kabupaten Kepulauan Selayar"
  },
  {
    "id": "st-10",
    "nomorUrut": 10,
    "tanggal": "2 Januari 2026",
    "kodeKlasifikasi": "VS.330",
    "nomorSurat": "B-10/7301/VS.330/2026",
    "petugas": "Terlampir",
    "perihal": "Pendataan SKTR Triwulan 4 2025",
    "tujuanTugas": "Kabupaten Kepulauan Selayar"
  },
  {
    "id": "st-11",
    "nomorUrut": 11,
    "tanggal": "2 Januari 2026",
    "kodeKlasifikasi": "VS.330",
    "nomorSurat": "B-11/7301/VS.330/2026",
    "petugas": "Terlampir",
    "perihal": "Pendataan KSA Padi Januari 2026",
    "tujuanTugas": "Kabupaten Kepulauan Selayar"
  },
  {
    "id": "st-12",
    "nomorUrut": 12,
    "tanggal": "2 Januari 2026",
    "kodeKlasifikasi": "VS.330",
    "nomorSurat": "B-12/7301/VS.330/2026",
    "petugas": "Terlampir",
    "perihal": "Pendataan KSA Jagung Januari 2026",
    "tujuanTugas": "Kabupaten Kepulauan Selayar"
  },
  {
    "id": "st-13",
    "nomorUrut": 13,
    "tanggal": "2 Januari 2026",
    "kodeKlasifikasi": "VS.330",
    "nomorSurat": "B-13/7301/VS.330/2026",
    "petugas": "Susi Linda",
    "perihal": "Pendataan SKTNP Sektor Jasa  Tahap 1 Tahun 2026",
    "tujuanTugas": "Kabupaten Kepulauan Selayar"
  },
  {
    "id": "st-14",
    "nomorUrut": 14,
    "tanggal": "7 Januari 2026",
    "kodeKlasifikasi": "VS.220",
    "nomorSurat": "B-14/7301/VS.220/2026",
    "petugas": "Terlampir",
    "perihal": "Pelatihan Petugas Susenas Maret dan Seruti Triwulan I Tahun 2026",
    "tujuanTugas": "Kabupaten Kepulauan Selayar"
  },
  {
    "id": "st-15",
    "nomorUrut": 15,
    "tanggal": "7 Januari 2026",
    "kodeKlasifikasi": "VS.220",
    "nomorSurat": "B-15/7301/VS.220/2026",
    "petugas": "Dama Pratama",
    "perihal": "Pengajar Pelatihan Petugas Susenas Maret dan Seruti Triwulan I Tahun 2026",
    "tujuanTugas": "Kabupaten Kepulauan Selayar"
  },
  {
    "id": "st-16",
    "nomorUrut": 16,
    "tanggal": "7 Januari 2026",
    "kodeKlasifikasi": "VS.220",
    "nomorSurat": "B-16/7301/VS.220/2026",
    "petugas": "Terlampir",
    "perihal": "Pelatihan Petugas Sakernas Februari Tahun 2026",
    "tujuanTugas": "Kabupaten Kepulauan Selayar"
  },
  {
    "id": "st-17",
    "nomorUrut": 17,
    "tanggal": "7 Januari 2026",
    "kodeKlasifikasi": "VS.220",
    "nomorSurat": "B-17/7301/VS.220/2026",
    "petugas": "Nurlaela",
    "perihal": "Pengajar Petugas Sakernas Februari Tahun 2026",
    "tujuanTugas": "Kabupaten Kepulauan Selayar"
  },
  {
    "id": "st-18",
    "nomorUrut": 18,
    "tanggal": "7 Januari 2026",
    "kodeKlasifikasi": "VS.220",
    "nomorSurat": "B-18/7301/VS.220/2026",
    "petugas": "Aronad",
    "perihal": "Pengajar Petugas Sakernas Februari Tahun 2026",
    "tujuanTugas": "Kabupaten Kepulauan Selayar"
  },
  {
    "id": "st-19",
    "nomorUrut": 19,
    "tanggal": "14 Januari 2026",
    "kodeKlasifikasi": "VS.330",
    "nomorSurat": "B-19/7301/VS.330/2026",
    "petugas": "Terlampir",
    "perihal": "Pemutakhiran dan Pendataan Susenas Maret Tahun 2026",
    "tujuanTugas": "Kabupaten Kepulauan Selayar"
  },
  {
    "id": "st-20",
    "nomorUrut": 20,
    "tanggal": "14 Januari 2026",
    "kodeKlasifikasi": "VS.330",
    "nomorSurat": "B-20/7301/VS.330/2026",
    "petugas": "Terlampir",
    "perihal": "Pemutakhiran dan Pendataan Sakernas Februari Tahun 2026",
    "tujuanTugas": "Kabupaten Kepulauan Selayar"
  }
];

export const INITIAL_SK_KEGIATAN: SKKegiatan[] = [
  {
    "id": "sk-1",
    "nomorUrut": 1,
    "nomorSK": "001 TAHUN 2026",
    "tanggal": "05 Januari 2026",
    "uraian": "SK Perubahan Penetapan User Sakti 2026",
    "subFungsi": "UMUM",
    "petugasHonor": "Upload"
  },
  {
    "id": "sk-2",
    "nomorUrut": 2,
    "nomorSK": "002 TAHUN 2026",
    "tanggal": "05 Januari 2026",
    "uraian": "SK Perubahan User SIMAN BMN 2026",
    "subFungsi": "UMUM",
    "petugasHonor": "Upload"
  },
  {
    "id": "sk-3",
    "nomorUrut": 3,
    "nomorSK": "003 TAHUN 2026",
    "tanggal": "05 Januari 2026",
    "uraian": "SK Pengelola SAI dan BMN 2026",
    "subFungsi": "UMUM",
    "petugasHonor": "Upload"
  },
  {
    "id": "sk-4",
    "nomorUrut": 4,
    "nomorSK": "004 TAHUN 2026",
    "tanggal": "05 Januari 2026",
    "uraian": "SK Tim Wasdal BMN 2026",
    "subFungsi": "UMUM",
    "petugasHonor": "Upload"
  },
  {
    "id": "sk-5",
    "nomorUrut": 5,
    "nomorSK": "005 TAHUN 2026",
    "tanggal": "05 Januari 2026",
    "uraian": "SK Transport Tahun 2026",
    "subFungsi": "UMUM",
    "petugasHonor": "Upload"
  },
  {
    "id": "sk-6",
    "nomorUrut": 6,
    "nomorSK": "006 TAHUN 2026",
    "tanggal": "05 Januari 2026",
    "uraian": "SK Pendataan SKTNP Barang dan Jasa Tahun 2026",
    "subFungsi": "NERWILIS",
    "petugasHonor": "Upload"
  },
  {
    "id": "sk-7",
    "nomorUrut": 7,
    "nomorSK": "007 TAHUN 2026",
    "tanggal": "05 Januari 2026",
    "uraian": "SK  Pendataan Survei Ubinan  2026",
    "subFungsi": "PRODUKSI",
    "petugasHonor": "Upload"
  },
  {
    "id": "sk-8",
    "nomorUrut": 8,
    "nomorSK": "008 TAHUN 2026",
    "tanggal": "05 Januari 2026",
    "uraian": "SK Tim Pelaksana Survei Pemotongan Ternak 2026",
    "subFungsi": "PRODUKSI",
    "petugasHonor": "Upload"
  },
  {
    "id": "sk-9",
    "nomorUrut": 9,
    "nomorSK": "009 TAHUN 2026",
    "tanggal": "05 Januari 2026",
    "uraian": "SK Tim Pelaksana KSA 2026",
    "subFungsi": "PRODUKSI",
    "petugasHonor": "Upload"
  },
  {
    "id": "sk-10",
    "nomorUrut": 10,
    "nomorSK": "010 TAHUN 2026",
    "tanggal": "05 Januari 2026",
    "uraian": "SK Pendataan VIMK Triwulan IV 2025",
    "subFungsi": "PRODUKSI",
    "petugasHonor": "Upload"
  },
  {
    "id": "sk-11",
    "nomorUrut": 11,
    "nomorSK": "011 TAHUN 2026",
    "tanggal": "05 Januari 2026",
    "uraian": "SK  Pendataan Survei TPI PPI Triwulanan 2026",
    "subFungsi": "PRODUKSI",
    "petugasHonor": "Upload"
  },
  {
    "id": "sk-12",
    "nomorUrut": 12,
    "nomorSK": "012 TAHUN 2026",
    "tanggal": "05 Januari 2026",
    "uraian": "SK Pendataan Survei Air Bersih Triwulanan  2026",
    "subFungsi": "PRODUKSI",
    "petugasHonor": "Upload"
  },
  {
    "id": "sk-13",
    "nomorUrut": 13,
    "nomorSK": "013 TAHUN 2026",
    "tanggal": "05 Januari 2026",
    "uraian": "SK Pendataan SKTR Triwulanan 2026",
    "subFungsi": "PRODUKSI",
    "petugasHonor": "Upload"
  },
  {
    "id": "sk-14",
    "nomorUrut": 14,
    "nomorSK": "014 TAHUN 2026",
    "tanggal": "05 Januari 2026",
    "uraian": "SK Pendataan Survei Penggalian URT 2026",
    "subFungsi": "PRODUKSI",
    "petugasHonor": "Upload"
  },
  {
    "id": "sk-15",
    "nomorUrut": 15,
    "nomorSK": "015 TAHUN 2026",
    "tanggal": "05 Januari 2026",
    "uraian": "SK Pendataan Survei Updating Direktori Perusahaan 2026",
    "subFungsi": "PRODUKSI",
    "petugasHonor": "Upload"
  },
  {
    "id": "sk-16",
    "nomorUrut": 16,
    "nomorSK": "016 TAHUN 2026",
    "tanggal": "05 Januari 2026",
    "uraian": "SK Survei IMK Triwulanan Tahun 2026",
    "subFungsi": "PRODUKSI",
    "petugasHonor": "Upload"
  },
  {
    "id": "sk-17",
    "nomorUrut": 17,
    "nomorSK": "017 TAHUN 2026",
    "tanggal": "05 Januari 2026",
    "uraian": "SK Pelaksanaan Survei Usaha Penggalian",
    "subFungsi": "PRODUKSI",
    "petugasHonor": "Upload"
  },
  {
    "id": "sk-18",
    "nomorUrut": 18,
    "nomorSK": "018 TAHUN 2026",
    "tanggal": "05 Januari 2026",
    "uraian": "SK Pendataan Survei Tahunan Perusahaan Industri Manufaktur (STPIM)",
    "subFungsi": "PRODUKSI",
    "petugasHonor": "Upload"
  },
  {
    "id": "sk-19",
    "nomorUrut": 19,
    "nomorSK": "019 TAHUN 2026",
    "tanggal": "05 Januari 2026",
    "uraian": "SK Pelaksanaan Captive Power",
    "subFungsi": "PRODUKSI",
    "petugasHonor": "Upload"
  },
  {
    "id": "sk-20",
    "nomorUrut": 20,
    "nomorSK": "020 TAHUN 2026",
    "tanggal": "05 Januari 2026",
    "uraian": "SK Pendataan Survei Perusahaan Kontruksi Triwulanan (SKTR)",
    "subFungsi": "PRODUKSI",
    "petugasHonor": "Upload"
  },
  {
    "id": "sk-21",
    "nomorUrut": 21,
    "nomorSK": "021 TAHUN 2026",
    "tanggal": "05 Januari 2026",
    "uraian": "SK Pendataan Survei Perusahaan Kontruksi Tahunan (SKTH)",
    "subFungsi": "PRODUKSI",
    "petugasHonor": "Upload"
  },
  {
    "id": "sk-22",
    "nomorUrut": 22,
    "nomorSK": "022 TAHUN 2026",
    "tanggal": "05 Januari 2026",
    "uraian": "SK Pendataan Survei Tahunan Air Bersih",
    "subFungsi": "PRODUKSI",
    "petugasHonor": "Upload"
  },
  {
    "id": "sk-23",
    "nomorUrut": 23,
    "nomorSK": "023 TAHUN 2026",
    "tanggal": "05 Januari 2026",
    "uraian": "SK TIM ZI 2026",
    "subFungsi": "ZI",
    "petugasHonor": "Upload"
  },
  {
    "id": "sk-24",
    "nomorUrut": 24,
    "nomorSK": "024 TAHUN 2026",
    "tanggal": "05 Januari 2026",
    "uraian": "SK Tim SAKIP 2026",
    "subFungsi": "UMUM",
    "petugasHonor": "Upload"
  },
  {
    "id": "sk-25",
    "nomorUrut": 25,
    "nomorSK": "025 TAHUN 2026",
    "tanggal": "05 Januari 2026",
    "uraian": "SK Tim SPIP 2025",
    "subFungsi": "UMUM",
    "petugasHonor": "Upload"
  },
  {
    "id": "sk-26",
    "nomorUrut": 26,
    "nomorSK": "026 TAHUN 2026",
    "tanggal": "05 Januari 2026",
    "uraian": "SK INNAS Susenas Maret dan Seruti Triwulan I Tahun 2026",
    "subFungsi": "SOSIAL",
    "petugasHonor": "Upload"
  },
  {
    "id": "sk-27",
    "nomorUrut": 27,
    "nomorSK": "027 TAHUN 2026",
    "tanggal": "05 Januari 2026",
    "uraian": "SK Pelatihan Susenas Maret dan Seruti Triwulan I 2026",
    "subFungsi": "SOSIAL",
    "petugasHonor": "Upload"
  },
  {
    "id": "sk-28",
    "nomorUrut": 28,
    "nomorSK": "028 TAHUN 2026",
    "tanggal": "05 Januari 2026",
    "uraian": "SK Pendataan Susenas Maret dan Seruti Triwulan I 2026",
    "subFungsi": "SOSIAL",
    "petugasHonor": "Upload"
  },
  {
    "id": "sk-29",
    "nomorUrut": 29,
    "nomorSK": "029 TAHUN 2026",
    "tanggal": "05 Januari 2026",
    "uraian": "SK Transport Daerah Sulit Susenas Maret dan Seruti Triwulan I 2026",
    "subFungsi": "SOSIAL",
    "petugasHonor": "Upload"
  },
  {
    "id": "sk-30",
    "nomorUrut": 30,
    "nomorSK": "030 TAHUN 2026",
    "tanggal": "05 Januari 2026",
    "uraian": "SK Pengajar Sakernas Februari Tahun 2026",
    "subFungsi": "SOSIAL",
    "petugasHonor": "Upload"
  }
];

export const INITIAL_BAST: BAST[] = [
  {
    "id": "bast-1",
    "nomorUrut": 1,
    "tanggal": "9 Januari 2026",
    "kodeKlasifikasi": "PL.530",
    "nomorBAST": "1/7301/PL.530/2026",
    "perihal": "Berita Acara Pengawasan dan Pengendalian BMN Semester II  dan Tahunan 2025",
    "pihakPertama": "Ketua Tim BPS",
    "pihakKedua": "Mitra Statistik"
  },
  {
    "id": "bast-2",
    "nomorUrut": 2,
    "tanggal": "12 Januari 2026",
    "kodeKlasifikasi": "VS.330",
    "nomorBAST": "2/7301/VS.330/2026",
    "perihal": "BAST IMK Triwulan IV 2025",
    "pihakPertama": "Ketua Tim",
    "pihakKedua": "Mitra"
  },
  {
    "id": "bast-3",
    "nomorUrut": 3,
    "tanggal": "15 Januari 2026",
    "kodeKlasifikasi": "VS.330",
    "nomorBAST": "3/7301/VS.330/2026",
    "perihal": "BAST SKTNP Sektor Jasa Tahap 1 Tahun 2026",
    "pihakPertama": "Ketua Tim",
    "pihakKedua": "Mitra"
  },
  {
    "id": "bast-4",
    "nomorUrut": 4,
    "tanggal": "30 Januari 2026",
    "kodeKlasifikasi": "VS.330",
    "nomorBAST": "4/7301/VS.330/2026",
    "perihal": "BAST KSA Padi Januarei 2026",
    "pihakPertama": "Ketua Tim",
    "pihakKedua": "Mitra"
  },
  {
    "id": "bast-5",
    "nomorUrut": 5,
    "tanggal": "30 Januari 2026",
    "kodeKlasifikasi": "VS.330",
    "nomorBAST": "5/7301/VS.330/2026",
    "perihal": "BAST KSA Jagung Januiari 2026",
    "pihakPertama": "Ketua Tim",
    "pihakKedua": "Mitra"
  },
  {
    "id": "bast-6",
    "nomorUrut": 6,
    "tanggal": "30 Januari 2026",
    "kodeKlasifikasi": "VS.330",
    "nomorBAST": "6/7301/VS.330/2026",
    "perihal": "BAST SHKK Triwulan 1 Tahun 2026",
    "pihakPertama": "Ketua Tim",
    "pihakKedua": "Mitra"
  },
  {
    "id": "bast-7",
    "nomorUrut": 7,
    "tanggal": "10 Februari 2026",
    "kodeKlasifikasi": "PL.714",
    "nomorBAST": "7/7301/PL.714/2026",
    "perihal": "BAST Laptop Dama Pratama",
    "pihakPertama": "Dama Pratama",
    "pihakKedua": "KPA"
  },
  {
    "id": "bast-8",
    "nomorUrut": 8,
    "tanggal": "11 Februari 2026",
    "kodeKlasifikasi": "PL.714",
    "nomorBAST": "8/7301/PL.714/2026",
    "perihal": "BAST Laptop Aronad Brilliantino Evan Maheswara",
    "pihakPertama": "KPA",
    "pihakKedua": "Aronad Brilliantino Evan Maheswara"
  },
  {
    "id": "bast-9",
    "nomorUrut": 9,
    "tanggal": "20 Februari 2026",
    "kodeKlasifikasi": "VS.330",
    "nomorBAST": "9/7301/VS.330/2026",
    "perihal": "BAST SHP Februari 2026",
    "pihakPertama": "Ketua Tim",
    "pihakKedua": "Mitra"
  },
  {
    "id": "bast-10",
    "nomorUrut": 10,
    "tanggal": "20 Februari 2026",
    "kodeKlasifikasi": "VS.330",
    "nomorBAST": "10/7301/VS.330/2026",
    "perihal": "BAST SHPB Februari 2026",
    "pihakPertama": "Ketua Tim",
    "pihakKedua": "Mitra"
  },
  {
    "id": "bast-11",
    "nomorUrut": 11,
    "tanggal": "20 Februari 2026",
    "kodeKlasifikasi": "VS.330",
    "nomorBAST": "11/7301/VS.330/2026",
    "perihal": "BAST VHTS Januari 2026",
    "pihakPertama": "Ketua Tim",
    "pihakKedua": "Mitra"
  },
  {
    "id": "bast-12",
    "nomorUrut": 12,
    "tanggal": "20 Februari 2026",
    "kodeKlasifikasi": "VS.330",
    "nomorBAST": "12/7301/VS.330/2026",
    "perihal": "BAST Susenas Maret dan Seruti Triwulan I 2026",
    "pihakPertama": "PML",
    "pihakKedua": "Mitra"
  },
  {
    "id": "bast-13",
    "nomorUrut": 13,
    "tanggal": "20 Februari 2026",
    "kodeKlasifikasi": "VS.340",
    "nomorBAST": "13/7301/VS.340/2026",
    "perihal": "BAST Susenas Maret dan Seruti Triwulan I 2026",
    "pihakPertama": "Ketua Tim",
    "pihakKedua": "PML"
  },
  {
    "id": "bast-14",
    "nomorUrut": 14,
    "tanggal": "20 Februari 2026",
    "kodeKlasifikasi": "VS.330",
    "nomorBAST": "14/7301/VS.330/2026",
    "perihal": "BAST Seruti Triwulan I 2026",
    "pihakPertama": "PML",
    "pihakKedua": "Mitra"
  },
  {
    "id": "bast-15",
    "nomorUrut": 15,
    "tanggal": "20 Februari 2026",
    "kodeKlasifikasi": "VS.340",
    "nomorBAST": "15/7301/VS.340/2026",
    "perihal": "BAST Seruti Triwulan I 2026",
    "pihakPertama": "Ketua Tim",
    "pihakKedua": "PML"
  },
  {
    "id": "bast-16",
    "nomorUrut": 16,
    "tanggal": "27 Februari 2026",
    "kodeKlasifikasi": "VS.330",
    "nomorBAST": "16/7301/VS.330/2026",
    "perihal": "BAST Sakernas Februari 2026",
    "pihakPertama": "PML",
    "pihakKedua": "Mitra"
  },
  {
    "id": "bast-17",
    "nomorUrut": 17,
    "tanggal": "27 Februari 2026",
    "kodeKlasifikasi": "VS.340",
    "nomorBAST": "17/7301/VS.340/2026",
    "perihal": "BAST Sakernas Februari 2026",
    "pihakPertama": "Ketua Tim",
    "pihakKedua": "PML"
  },
  {
    "id": "bast-18",
    "nomorUrut": 18,
    "tanggal": "27 Februari 2026",
    "kodeKlasifikasi": "VS.330",
    "nomorBAST": "18/7301/VS.330/2026",
    "perihal": "BAST KSA PADI FEBRUARI 2026",
    "pihakPertama": "Ketua Tim",
    "pihakKedua": "Mitra"
  },
  {
    "id": "bast-19",
    "nomorUrut": 19,
    "tanggal": "27 Februari 2026",
    "kodeKlasifikasi": "VS.330",
    "nomorBAST": "19/7301/VS.330/2026",
    "perihal": "BAST KSA JAGUNG FEBRUARI 2026",
    "pihakPertama": "Ketua Tim",
    "pihakKedua": "Mitra"
  }
];

export const INITIAL_FORM_PERMINTAAN: FormPermintaan[] = [
  {
    "id": "fp-1",
    "nomorUrut": 1,
    "tanggal": "2 Januari 2026",
    "tipeForm": "Belanja Barang",
    "nomorForm": "B-1/7301/KU.320/2026",
    "perihal": "Honor Pendataan Ubinan SR 1 2026",
    "keterangan": "KODE KLASIFIKASI"
  },
  {
    "id": "fp-2",
    "nomorUrut": 2,
    "tanggal": "2 Januari 2026",
    "tipeForm": "Belanja Barang",
    "nomorForm": "B-2/7301/KU.320/2026",
    "perihal": "Honor Pendataan IMK Triwulan 4 2025",
    "keterangan": "Belanja Bahan : Belanja barang habis pakai, akun 521211, konsumsi rapat,konsumsi pelatihan, perlengkapan pelatiahn, banner/spanduk"
  },
  {
    "id": "fp-3",
    "nomorUrut": 3,
    "tanggal": "2 Januari 2026",
    "tipeForm": "Belanja Barang",
    "nomorForm": "B-3/7301/KU.320/2026",
    "perihal": "Honor Pendataan SKTR Triwulan 4 2025",
    "keterangan": "Belanja Barang : berkaitan dengan penyelenggaraan administrasi kegiatan di luar kantor, antara lain biaya paket rapat/pertemuan, ATK, uang saku, uang transportasi lokal, biaya sewa peralatan"
  },
  {
    "id": "fp-4",
    "nomorUrut": 4,
    "tanggal": "2 Januari 2026",
    "tipeForm": "Belanja Barang",
    "nomorForm": "B-4/7301/KU.320/2026",
    "perihal": "Honor Pendataan KSA Padi Januari 2026",
    "keterangan": "Belanja pegawai : berkaitan dengan anggaran untuk pegawai (gaji, tk, dll)"
  },
  {
    "id": "fp-5",
    "nomorUrut": 5,
    "tanggal": "2 Januari 2026",
    "tipeForm": "Belanja Barang",
    "nomorForm": "B-5/7301/KU.320/2026",
    "perihal": "Honor Pendataan KSA Jagung Januari 2026",
    "keterangan": ""
  },
  {
    "id": "fp-6",
    "nomorUrut": 6,
    "tanggal": "2 Januari 2026",
    "tipeForm": "Belanja Barang",
    "nomorForm": "B-6/7301/KU.320/2026",
    "perihal": "Honor Pendataan SKTNP Sektor Jasa Tahap 1 Tahun 2026",
    "keterangan": "HONOR MITRA MASUK BELANJA BARANG"
  },
  {
    "id": "fp-7",
    "nomorUrut": 7,
    "tanggal": "2 Januari 2026",
    "tipeForm": "Belanja Pegawai",
    "nomorForm": "B-7/7301/KU.350/2026",
    "perihal": "Tukin PNS Bulan Desember Tahun 2025",
    "keterangan": ""
  },
  {
    "id": "fp-8",
    "nomorUrut": 8,
    "tanggal": "2 Januari 2026",
    "tipeForm": "Belanja Pegawai",
    "nomorForm": "B-8/7301/KU.350/2026",
    "perihal": "Tukin PPPK Bulan Desember Tahun 2025",
    "keterangan": ""
  },
  {
    "id": "fp-9",
    "nomorUrut": 9,
    "tanggal": "2 Januari 2026",
    "tipeForm": "Belanja Pegawai",
    "nomorForm": "B-9/7301/KU.350/2026",
    "perihal": "Gaji PNS Bulan Februari Tahun 2026",
    "keterangan": ""
  },
  {
    "id": "fp-10",
    "nomorUrut": 10,
    "tanggal": "2 Januari 2026",
    "tipeForm": "Belanja Pegawai",
    "nomorForm": "B-10/7301/KU.350/2026",
    "perihal": "Gaji PPPK Bulan Februari Tahun 2026",
    "keterangan": ""
  },
  {
    "id": "fp-11",
    "nomorUrut": 11,
    "tanggal": "2 Januari 2026",
    "tipeForm": "Belanja Barang",
    "nomorForm": "B-11/7301/KU.320/2026",
    "perihal": "Honor Petugas Identifkasi Komoditas Utama SHP 2026",
    "keterangan": ""
  },
  {
    "id": "fp-12",
    "nomorUrut": 12,
    "tanggal": "2 Januari 2026",
    "tipeForm": "Belanja Barang",
    "nomorForm": "B-12/7301/KU.320/2026",
    "perihal": "Honor Petugas SHKK 2026",
    "keterangan": ""
  },
  {
    "id": "fp-13",
    "nomorUrut": 13,
    "tanggal": "2 Januari 2026",
    "tipeForm": "Belanja Barang",
    "nomorForm": "B-13/7301/KU.320/2026",
    "perihal": "Honor Petugas SHKK TW 1 2026",
    "keterangan": ""
  },
  {
    "id": "fp-14",
    "nomorUrut": 14,
    "tanggal": "2 Januari 2026",
    "tipeForm": "Belanja Barang",
    "nomorForm": "B-14/7301/KU.320/2026",
    "perihal": "Honor Petugas VHTS Januari 2026",
    "keterangan": ""
  },
  {
    "id": "fp-15",
    "nomorUrut": 15,
    "tanggal": "2 Januari 2026",
    "tipeForm": "Belanja Barang",
    "nomorForm": "B-15/7301/KU.320/2026",
    "perihal": "Transport Pendataan Panjang Jalan 2026",
    "keterangan": ""
  },
  {
    "id": "fp-16",
    "nomorUrut": 16,
    "tanggal": "20 Januari 2026",
    "tipeForm": "Belanja Barang",
    "nomorForm": "B-16/7301/KU.320/2026",
    "perihal": "Transport Pelatihan KSA dan Ubinan 2026",
    "keterangan": ""
  },
  {
    "id": "fp-17",
    "nomorUrut": 17,
    "tanggal": "20 Januari 2026",
    "tipeForm": "Belanja Barang",
    "nomorForm": "B-17/7301/KU.320/2026",
    "perihal": "Perlengkapan Petugas Pelatihan KSA dan Ubinan 2026",
    "keterangan": ""
  }
];

export const INITIAL_SURAT_PPK: SuratPPK[] = [
  {
    "id": "ppk-1",
    "nomorUrut": 1,
    "tanggal": "1 Januari 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "PT. Rezky Service System",
    "kodeKlasifikasi": "PL.300",
    "nomorSurat": "B-1/7301/PL.300/2026",
    "perihal": "Surat Perintah Mulai Kerja (SPMK) Tenaga Outsourcing Cleaning Service - 2026"
  },
  {
    "id": "ppk-2",
    "nomorUrut": 2,
    "tanggal": "2 Januari 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "BPS Selayar",
    "kodeKlasifikasi": "PL.300",
    "nomorSurat": "B-2/7301/PL.300/2026",
    "perihal": "Berita Acara Penetapan Spesifikasi Teknis dan Rencana Anggaran Biaya (RAB) Fullboard SUSENAS MARET 2026"
  },
  {
    "id": "ppk-3",
    "nomorUrut": 3,
    "tanggal": "2 Januari 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "BPS Selayar",
    "kodeKlasifikasi": "PL.300",
    "nomorSurat": "B-3/7301/PL.300/2026",
    "perihal": "Berita Acara Penetapan HPS Fullboard SUSENAS MARET 2026"
  },
  {
    "id": "ppk-4",
    "nomorUrut": 4,
    "tanggal": "2 Januari 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "BPS Provinsi Sulawesi Selatan",
    "kodeKlasifikasi": "PL.300",
    "nomorSurat": "B-4/7301/PL.300/2026",
    "perihal": "Surat Pernyataan KPA untuk Fullboard Susenas Maret 2026"
  },
  {
    "id": "ppk-5",
    "nomorUrut": 5,
    "tanggal": "5 Januari 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "Pejabat Pengadaan Baranga/Jasa",
    "kodeKlasifikasi": "PL.300",
    "nomorSurat": "B-5/7301/PL.300/2026",
    "perihal": "Permohonan Pejabat Pengadaan Susenas Maret 2026"
  },
  {
    "id": "ppk-6",
    "nomorUrut": 6,
    "tanggal": "6 Januari 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "BPS Selayar",
    "kodeKlasifikasi": "PL.300",
    "nomorSurat": "B-6/7301/PL.300/2026",
    "perihal": "Dokumen Pemilihan"
  },
  {
    "id": "ppk-7",
    "nomorUrut": 7,
    "tanggal": "6 Januari 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "CV. RAYHAN SQUARE HOTEL",
    "kodeKlasifikasi": "PL.300",
    "nomorSurat": "B-7/7301/PL.300/2026",
    "perihal": "Surat Penawaran Pekerjaan Rayhan"
  },
  {
    "id": "ppk-8",
    "nomorUrut": 8,
    "tanggal": "8 Januari 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "Petugas Susenas Maret dan Seruti Triwulan I Tahun 2026",
    "kodeKlasifikasi": "PL.300",
    "nomorSurat": "B-8/7301/PL.300/2026",
    "perihal": "Petugas a.n.Abdul Kadir"
  },
  {
    "id": "ppk-9",
    "nomorUrut": 9,
    "tanggal": "8 Januari 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "Petugas Susenas Maret dan Seruti Triwulan I Tahun 2026",
    "kodeKlasifikasi": "PL.300",
    "nomorSurat": "B-9/7301/PL.300/2026",
    "perihal": "Petugas a.n.Ahmad Rais"
  },
  {
    "id": "ppk-10",
    "nomorUrut": 10,
    "tanggal": "8 Januari 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "Petugas Susenas Maret dan Seruti Triwulan I Tahun 2026",
    "kodeKlasifikasi": "PL.300",
    "nomorSurat": "B-10/7301/PL.300/2026",
    "perihal": "Petugas a.n.Anisa Dwi Zahra"
  },
  {
    "id": "ppk-11",
    "nomorUrut": 11,
    "tanggal": "8 Januari 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "Petugas Susenas Maret dan Seruti Triwulan I Tahun 2026",
    "kodeKlasifikasi": "PL.300",
    "nomorSurat": "B-11/7301/PL.300/2026",
    "perihal": "Petugas a.n.Aulia Agustina"
  },
  {
    "id": "ppk-12",
    "nomorUrut": 12,
    "tanggal": "8 Januari 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "Petugas Susenas Maret dan Seruti Triwulan I Tahun 2026",
    "kodeKlasifikasi": "PL.300",
    "nomorSurat": "B-12/7301/PL.300/2026",
    "perihal": "Petugas a.n.Ayu Hartina"
  },
  {
    "id": "ppk-13",
    "nomorUrut": 13,
    "tanggal": "8 Januari 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "Petugas Susenas Maret dan Seruti Triwulan I Tahun 2026",
    "kodeKlasifikasi": "PL.300",
    "nomorSurat": "B-13/7301/PL.300/2026",
    "perihal": "Petugas a.n.Dewi Mardiani"
  },
  {
    "id": "ppk-14",
    "nomorUrut": 14,
    "tanggal": "8 Januari 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "Petugas Susenas Maret dan Seruti Triwulan I Tahun 2026",
    "kodeKlasifikasi": "PL.300",
    "nomorSurat": "B-14/7301/PL.300/2026",
    "perihal": "Petugas a.n.Elen Virgitha Utami"
  },
  {
    "id": "ppk-15",
    "nomorUrut": 15,
    "tanggal": "8 Januari 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "Petugas Susenas Maret dan Seruti Triwulan I Tahun 2026",
    "kodeKlasifikasi": "PL.300",
    "nomorSurat": "B-15/7301/PL.300/2026",
    "perihal": "Petugas a.n.Hamrayani"
  },
  {
    "id": "ppk-16",
    "nomorUrut": 16,
    "tanggal": "8 Januari 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "Petugas Susenas Maret dan Seruti Triwulan I Tahun 2026",
    "kodeKlasifikasi": "PL.300",
    "nomorSurat": "B-16/7301/PL.300/2026",
    "perihal": "Petugas a.n.Hasbiah"
  },
  {
    "id": "ppk-17",
    "nomorUrut": 17,
    "tanggal": "8 Januari 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "Petugas Susenas Maret dan Seruti Triwulan I Tahun 2026",
    "kodeKlasifikasi": "PL.300",
    "nomorSurat": "B-17/7301/PL.300/2026",
    "perihal": "Petugas a.n.Hasnah"
  },
  {
    "id": "ppk-18",
    "nomorUrut": 18,
    "tanggal": "8 Januari 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "Petugas Susenas Maret dan Seruti Triwulan I Tahun 2026",
    "kodeKlasifikasi": "PL.300",
    "nomorSurat": "B-18/7301/PL.300/2026",
    "perihal": "Petugas a.n.Hasrullah"
  },
  {
    "id": "ppk-19",
    "nomorUrut": 19,
    "tanggal": "8 Januari 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "Petugas Susenas Maret dan Seruti Triwulan I Tahun 2026",
    "kodeKlasifikasi": "PL.300",
    "nomorSurat": "B-19/7301/PL.300/2026",
    "perihal": "Petugas a.n.Husni"
  },
  {
    "id": "ppk-20",
    "nomorUrut": 20,
    "tanggal": "8 Januari 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "Petugas Susenas Maret dan Seruti Triwulan I Tahun 2026",
    "kodeKlasifikasi": "PL.300",
    "nomorSurat": "B-20/7301/PL.300/2026",
    "perihal": "Petugas a.n.Irnawati"
  },
  {
    "id": "ppk-21",
    "nomorUrut": 21,
    "tanggal": "8 Januari 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "Petugas Susenas Maret dan Seruti Triwulan I Tahun 2026",
    "kodeKlasifikasi": "PL.300",
    "nomorSurat": "B-21/7301/PL.300/2026",
    "perihal": "Petugas a.n.Irsyad Fajar Ahsan"
  },
  {
    "id": "ppk-22",
    "nomorUrut": 22,
    "tanggal": "8 Januari 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "Petugas Susenas Maret dan Seruti Triwulan I Tahun 2026",
    "kodeKlasifikasi": "PL.300",
    "nomorSurat": "B-22/7301/PL.300/2026",
    "perihal": "Petugas a.n.Jiranna Pata Putri"
  },
  {
    "id": "ppk-23",
    "nomorUrut": 23,
    "tanggal": "8 Januari 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "Petugas Susenas Maret dan Seruti Triwulan I Tahun 2026",
    "kodeKlasifikasi": "PL.300",
    "nomorSurat": "B-23/7301/PL.300/2026",
    "perihal": "Petugas a.n.Jusman"
  },
  {
    "id": "ppk-24",
    "nomorUrut": 24,
    "tanggal": "8 Januari 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "Petugas Susenas Maret dan Seruti Triwulan I Tahun 2026",
    "kodeKlasifikasi": "PL.300",
    "nomorSurat": "B-24/7301/PL.300/2026",
    "perihal": "Petugas a.n.Miftahul Jannah"
  },
  {
    "id": "ppk-25",
    "nomorUrut": 25,
    "tanggal": "8 Januari 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "Petugas Susenas Maret dan Seruti Triwulan I Tahun 2026",
    "kodeKlasifikasi": "PL.300",
    "nomorSurat": "B-25/7301/PL.300/2026",
    "perihal": "Petugas a.n.Muhammad Akbar"
  },
  {
    "id": "ppk-26",
    "nomorUrut": 26,
    "tanggal": "8 Januari 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "Petugas Susenas Maret dan Seruti Triwulan I Tahun 2026",
    "kodeKlasifikasi": "PL.300",
    "nomorSurat": "B-26/7301/PL.300/2026",
    "perihal": "Petugas a.n.Murtini"
  },
  {
    "id": "ppk-27",
    "nomorUrut": 27,
    "tanggal": "8 Januari 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "Petugas Susenas Maret dan Seruti Triwulan I Tahun 2026",
    "kodeKlasifikasi": "PL.300",
    "nomorSurat": "B-27/7301/PL.300/2026",
    "perihal": "Petugas a.n.Nisba"
  },
  {
    "id": "ppk-28",
    "nomorUrut": 28,
    "tanggal": "8 Januari 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "Petugas Susenas Maret dan Seruti Triwulan I Tahun 2026",
    "kodeKlasifikasi": "PL.300",
    "nomorSurat": "B-28/7301/PL.300/2026",
    "perihal": "Petugas a.n.Nur Asnita"
  },
  {
    "id": "ppk-29",
    "nomorUrut": 29,
    "tanggal": "8 Januari 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "Petugas Susenas Maret dan Seruti Triwulan I Tahun 2026",
    "kodeKlasifikasi": "PL.300",
    "nomorSurat": "B-29/7301/PL.300/2026",
    "perihal": "Petugas a.n.Nur Hikmah"
  },
  {
    "id": "ppk-30",
    "nomorUrut": 30,
    "tanggal": "8 Januari 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "Petugas Susenas Maret dan Seruti Triwulan I Tahun 2026",
    "kodeKlasifikasi": "PL.300",
    "nomorSurat": "B-30/7301/PL.300/2026",
    "perihal": "Petugas a.n.Nur Jannah"
  }
];

export const INITIAL_SKP: SKPItem[] = [
  {
    "id": "skp-1",
    "pegawaiId": "peg-1",
    "nama": "Muhammad Nur, S.Sos",
    "jabatan": "Kepala BPS Kabupaten/Kota",
    "triwulan1": {
      "hasil": "Sesuai Ekspektasi",
      "perilaku": "Sesuai Ekspektasi",
      "predikat": "Baik"
    },
    "triwulan2": {
      "hasil": "Sesuai Ekspektasi",
      "perilaku": "Sesuai Ekspektasi",
      "predikat": "Baik"
    },
    "triwulan3": {
      "hasil": "Diatas Ekspektasi",
      "perilaku": "Sesuai Ekspektasi",
      "predikat": "Sangat Baik"
    },
    "triwulan4": {
      "hasil": "Sesuai Ekspektasi",
      "perilaku": "Sesuai Ekspektasi",
      "predikat": "Baik"
    },
    "tahunan": {
      "hasil": "Sesuai Ekspektasi",
      "perilaku": "Sesuai Ekspektasi",
      "predikat": "Baik"
    }
  },
  {
    "id": "skp-2",
    "pegawaiId": "peg-2",
    "nama": "Takdir Khauripan, S.Si.",
    "jabatan": "Kepala Subbagian Umum",
    "triwulan1": {
      "hasil": "Sesuai Ekspektasi",
      "perilaku": "Sesuai Ekspektasi",
      "predikat": "Baik"
    },
    "triwulan2": {
      "hasil": "Sesuai Ekspektasi",
      "perilaku": "Sesuai Ekspektasi",
      "predikat": "Baik"
    },
    "triwulan3": {
      "hasil": "Diatas Ekspektasi",
      "perilaku": "Sesuai Ekspektasi",
      "predikat": "Sangat Baik"
    },
    "triwulan4": {
      "hasil": "Sesuai Ekspektasi",
      "perilaku": "Sesuai Ekspektasi",
      "predikat": "Baik"
    },
    "tahunan": {
      "hasil": "Sesuai Ekspektasi",
      "perilaku": "Sesuai Ekspektasi",
      "predikat": "Baik"
    }
  },
  {
    "id": "skp-3",
    "pegawaiId": "peg-3",
    "nama": "Sri Wahyuni, S.Si",
    "jabatan": "Statistisi Ahli Muda BPS Kabupaten/Kota",
    "triwulan1": {
      "hasil": "Sesuai Ekspektasi",
      "perilaku": "Sesuai Ekspektasi",
      "predikat": "Baik"
    },
    "triwulan2": {
      "hasil": "Sesuai Ekspektasi",
      "perilaku": "Sesuai Ekspektasi",
      "predikat": "Baik"
    },
    "triwulan3": {
      "hasil": "Diatas Ekspektasi",
      "perilaku": "Sesuai Ekspektasi",
      "predikat": "Sangat Baik"
    },
    "triwulan4": {
      "hasil": "Sesuai Ekspektasi",
      "perilaku": "Sesuai Ekspektasi",
      "predikat": "Baik"
    },
    "tahunan": {
      "hasil": "Sesuai Ekspektasi",
      "perilaku": "Sesuai Ekspektasi",
      "predikat": "Baik"
    }
  },
  {
    "id": "skp-4",
    "pegawaiId": "peg-4",
    "nama": "Muhammad Ikbal Nur",
    "jabatan": "Fungsional Umum BPS Kabupaten/Kota",
    "triwulan1": {
      "hasil": "Sesuai Ekspektasi",
      "perilaku": "Sesuai Ekspektasi",
      "predikat": "Baik"
    },
    "triwulan2": {
      "hasil": "Sesuai Ekspektasi",
      "perilaku": "Sesuai Ekspektasi",
      "predikat": "Baik"
    },
    "triwulan3": {
      "hasil": "Diatas Ekspektasi",
      "perilaku": "Sesuai Ekspektasi",
      "predikat": "Sangat Baik"
    },
    "triwulan4": {
      "hasil": "Sesuai Ekspektasi",
      "perilaku": "Sesuai Ekspektasi",
      "predikat": "Baik"
    },
    "tahunan": {
      "hasil": "Sesuai Ekspektasi",
      "perilaku": "Sesuai Ekspektasi",
      "predikat": "Baik"
    }
  },
  {
    "id": "skp-5",
    "pegawaiId": "peg-5",
    "nama": "Bustan, S.Sos",
    "jabatan": "Statistisi Ahli Pertama BPS Kabupaten/Kota",
    "triwulan1": {
      "hasil": "Sesuai Ekspektasi",
      "perilaku": "Sesuai Ekspektasi",
      "predikat": "Baik"
    },
    "triwulan2": {
      "hasil": "Sesuai Ekspektasi",
      "perilaku": "Sesuai Ekspektasi",
      "predikat": "Baik"
    },
    "triwulan3": {
      "hasil": "Diatas Ekspektasi",
      "perilaku": "Sesuai Ekspektasi",
      "predikat": "Sangat Baik"
    },
    "triwulan4": {
      "hasil": "Sesuai Ekspektasi",
      "perilaku": "Sesuai Ekspektasi",
      "predikat": "Baik"
    },
    "tahunan": {
      "hasil": "Sesuai Ekspektasi",
      "perilaku": "Sesuai Ekspektasi",
      "predikat": "Baik"
    }
  },
  {
    "id": "skp-6",
    "pegawaiId": "peg-6",
    "nama": "Zulhan Efendy, S.Sos",
    "jabatan": "Statistisi Ahli Pertama BPS Kabupaten/Kota",
    "triwulan1": {
      "hasil": "Sesuai Ekspektasi",
      "perilaku": "Sesuai Ekspektasi",
      "predikat": "Baik"
    },
    "triwulan2": {
      "hasil": "Sesuai Ekspektasi",
      "perilaku": "Sesuai Ekspektasi",
      "predikat": "Baik"
    },
    "triwulan3": {
      "hasil": "Diatas Ekspektasi",
      "perilaku": "Sesuai Ekspektasi",
      "predikat": "Sangat Baik"
    },
    "triwulan4": {
      "hasil": "Sesuai Ekspektasi",
      "perilaku": "Sesuai Ekspektasi",
      "predikat": "Baik"
    },
    "tahunan": {
      "hasil": "Sesuai Ekspektasi",
      "perilaku": "Sesuai Ekspektasi",
      "predikat": "Baik"
    }
  },
  {
    "id": "skp-7",
    "pegawaiId": "peg-7",
    "nama": "Nurlaela, S.Sos",
    "jabatan": "Statistisi Mahir BPS Kabupaten/Kota",
    "triwulan1": {
      "hasil": "Sesuai Ekspektasi",
      "perilaku": "Sesuai Ekspektasi",
      "predikat": "Baik"
    },
    "triwulan2": {
      "hasil": "Sesuai Ekspektasi",
      "perilaku": "Sesuai Ekspektasi",
      "predikat": "Baik"
    },
    "triwulan3": {
      "hasil": "Diatas Ekspektasi",
      "perilaku": "Sesuai Ekspektasi",
      "predikat": "Sangat Baik"
    },
    "triwulan4": {
      "hasil": "Sesuai Ekspektasi",
      "perilaku": "Sesuai Ekspektasi",
      "predikat": "Baik"
    },
    "tahunan": {
      "hasil": "Sesuai Ekspektasi",
      "perilaku": "Sesuai Ekspektasi",
      "predikat": "Baik"
    }
  },
  {
    "id": "skp-8",
    "pegawaiId": "peg-8",
    "nama": "Nur Asri, A.Md.Kom.",
    "jabatan": "Statistisi Mahir BPS Kabupaten/Kota",
    "triwulan1": {
      "hasil": "Sesuai Ekspektasi",
      "perilaku": "Sesuai Ekspektasi",
      "predikat": "Baik"
    },
    "triwulan2": {
      "hasil": "Sesuai Ekspektasi",
      "perilaku": "Sesuai Ekspektasi",
      "predikat": "Baik"
    },
    "triwulan3": {
      "hasil": "Diatas Ekspektasi",
      "perilaku": "Sesuai Ekspektasi",
      "predikat": "Sangat Baik"
    },
    "triwulan4": {
      "hasil": "Sesuai Ekspektasi",
      "perilaku": "Sesuai Ekspektasi",
      "predikat": "Baik"
    },
    "tahunan": {
      "hasil": "Sesuai Ekspektasi",
      "perilaku": "Sesuai Ekspektasi",
      "predikat": "Baik"
    }
  },
  {
    "id": "skp-9",
    "pegawaiId": "peg-9",
    "nama": "Konita Iladini, S.Tr.Stat.",
    "jabatan": "Statistisi Ahli Pertama BPS Kabupaten/Kota",
    "triwulan1": {
      "hasil": "Sesuai Ekspektasi",
      "perilaku": "Sesuai Ekspektasi",
      "predikat": "Baik"
    },
    "triwulan2": {
      "hasil": "Sesuai Ekspektasi",
      "perilaku": "Sesuai Ekspektasi",
      "predikat": "Baik"
    },
    "triwulan3": {
      "hasil": "Diatas Ekspektasi",
      "perilaku": "Sesuai Ekspektasi",
      "predikat": "Sangat Baik"
    },
    "triwulan4": {
      "hasil": "Sesuai Ekspektasi",
      "perilaku": "Sesuai Ekspektasi",
      "predikat": "Baik"
    },
    "tahunan": {
      "hasil": "Sesuai Ekspektasi",
      "perilaku": "Sesuai Ekspektasi",
      "predikat": "Baik"
    }
  },
  {
    "id": "skp-10",
    "pegawaiId": "peg-10",
    "nama": "Fakhri Hafidzul Azhar, S.Tr.Stat.",
    "jabatan": "Statistisi Ahli Pertama BPS Kabupaten/Kota",
    "triwulan1": {
      "hasil": "Sesuai Ekspektasi",
      "perilaku": "Sesuai Ekspektasi",
      "predikat": "Baik"
    },
    "triwulan2": {
      "hasil": "Sesuai Ekspektasi",
      "perilaku": "Sesuai Ekspektasi",
      "predikat": "Baik"
    },
    "triwulan3": {
      "hasil": "Diatas Ekspektasi",
      "perilaku": "Sesuai Ekspektasi",
      "predikat": "Sangat Baik"
    },
    "triwulan4": {
      "hasil": "Sesuai Ekspektasi",
      "perilaku": "Sesuai Ekspektasi",
      "predikat": "Baik"
    },
    "tahunan": {
      "hasil": "Sesuai Ekspektasi",
      "perilaku": "Sesuai Ekspektasi",
      "predikat": "Baik"
    }
  },
  {
    "id": "skp-11",
    "pegawaiId": "peg-11",
    "nama": "Muhammad Junaid",
    "jabatan": "Fungsional Umum BPS Kabupaten/Kota",
    "triwulan1": {
      "hasil": "Sesuai Ekspektasi",
      "perilaku": "Sesuai Ekspektasi",
      "predikat": "Baik"
    },
    "triwulan2": {
      "hasil": "Sesuai Ekspektasi",
      "perilaku": "Sesuai Ekspektasi",
      "predikat": "Baik"
    },
    "triwulan3": {
      "hasil": "Diatas Ekspektasi",
      "perilaku": "Sesuai Ekspektasi",
      "predikat": "Sangat Baik"
    },
    "triwulan4": {
      "hasil": "Sesuai Ekspektasi",
      "perilaku": "Sesuai Ekspektasi",
      "predikat": "Baik"
    },
    "tahunan": {
      "hasil": "Sesuai Ekspektasi",
      "perilaku": "Sesuai Ekspektasi",
      "predikat": "Baik"
    }
  },
  {
    "id": "skp-12",
    "pegawaiId": "peg-12",
    "nama": "Andi Basri",
    "jabatan": "Fungsional Umum BPS Kabupaten/Kota",
    "triwulan1": {
      "hasil": "Sesuai Ekspektasi",
      "perilaku": "Sesuai Ekspektasi",
      "predikat": "Baik"
    },
    "triwulan2": {
      "hasil": "Sesuai Ekspektasi",
      "perilaku": "Sesuai Ekspektasi",
      "predikat": "Baik"
    },
    "triwulan3": {
      "hasil": "Diatas Ekspektasi",
      "perilaku": "Sesuai Ekspektasi",
      "predikat": "Sangat Baik"
    },
    "triwulan4": {
      "hasil": "Sesuai Ekspektasi",
      "perilaku": "Sesuai Ekspektasi",
      "predikat": "Baik"
    },
    "tahunan": {
      "hasil": "Sesuai Ekspektasi",
      "perilaku": "Sesuai Ekspektasi",
      "predikat": "Baik"
    }
  },
  {
    "id": "skp-13",
    "pegawaiId": "peg-13",
    "nama": "Ilham Aminu Rosyid, S.Tr.Stat.",
    "jabatan": "Statistisi Ahli Pertama BPS Kabupaten/Kota",
    "triwulan1": {
      "hasil": "Sesuai Ekspektasi",
      "perilaku": "Sesuai Ekspektasi",
      "predikat": "Baik"
    },
    "triwulan2": {
      "hasil": "Sesuai Ekspektasi",
      "perilaku": "Sesuai Ekspektasi",
      "predikat": "Baik"
    },
    "triwulan3": {
      "hasil": "Diatas Ekspektasi",
      "perilaku": "Sesuai Ekspektasi",
      "predikat": "Sangat Baik"
    },
    "triwulan4": {
      "hasil": "Sesuai Ekspektasi",
      "perilaku": "Sesuai Ekspektasi",
      "predikat": "Baik"
    },
    "tahunan": {
      "hasil": "Sesuai Ekspektasi",
      "perilaku": "Sesuai Ekspektasi",
      "predikat": "Baik"
    }
  },
  {
    "id": "skp-14",
    "pegawaiId": "peg-14",
    "nama": "Nola Ramasentia, S.Tr.Stat.",
    "jabatan": "Statistisi Ahli Pertama BPS Kabupaten/Kota",
    "triwulan1": {
      "hasil": "Sesuai Ekspektasi",
      "perilaku": "Sesuai Ekspektasi",
      "predikat": "Baik"
    },
    "triwulan2": {
      "hasil": "Sesuai Ekspektasi",
      "perilaku": "Sesuai Ekspektasi",
      "predikat": "Baik"
    },
    "triwulan3": {
      "hasil": "Diatas Ekspektasi",
      "perilaku": "Sesuai Ekspektasi",
      "predikat": "Sangat Baik"
    },
    "triwulan4": {
      "hasil": "Sesuai Ekspektasi",
      "perilaku": "Sesuai Ekspektasi",
      "predikat": "Baik"
    },
    "tahunan": {
      "hasil": "Sesuai Ekspektasi",
      "perilaku": "Sesuai Ekspektasi",
      "predikat": "Baik"
    }
  },
  {
    "id": "skp-15",
    "pegawaiId": "peg-15",
    "nama": "Indawati Amiruddin, A.Md.Stat.",
    "jabatan": "Statistisi Terampil BPS Kabupaten/Kota",
    "triwulan1": {
      "hasil": "Sesuai Ekspektasi",
      "perilaku": "Sesuai Ekspektasi",
      "predikat": "Baik"
    },
    "triwulan2": {
      "hasil": "Sesuai Ekspektasi",
      "perilaku": "Sesuai Ekspektasi",
      "predikat": "Baik"
    },
    "triwulan3": {
      "hasil": "Diatas Ekspektasi",
      "perilaku": "Sesuai Ekspektasi",
      "predikat": "Sangat Baik"
    },
    "triwulan4": {
      "hasil": "Sesuai Ekspektasi",
      "perilaku": "Sesuai Ekspektasi",
      "predikat": "Baik"
    },
    "tahunan": {
      "hasil": "Sesuai Ekspektasi",
      "perilaku": "Sesuai Ekspektasi",
      "predikat": "Baik"
    }
  },
  {
    "id": "skp-16",
    "pegawaiId": "peg-16",
    "nama": "Nurul Izzah Abdullah, A.Md.Stat.",
    "jabatan": "Statistisi Terampil BPS Kabupaten/Kota",
    "triwulan1": {
      "hasil": "Sesuai Ekspektasi",
      "perilaku": "Sesuai Ekspektasi",
      "predikat": "Baik"
    },
    "triwulan2": {
      "hasil": "Sesuai Ekspektasi",
      "perilaku": "Sesuai Ekspektasi",
      "predikat": "Baik"
    },
    "triwulan3": {
      "hasil": "Diatas Ekspektasi",
      "perilaku": "Sesuai Ekspektasi",
      "predikat": "Sangat Baik"
    },
    "triwulan4": {
      "hasil": "Sesuai Ekspektasi",
      "perilaku": "Sesuai Ekspektasi",
      "predikat": "Baik"
    },
    "tahunan": {
      "hasil": "Sesuai Ekspektasi",
      "perilaku": "Sesuai Ekspektasi",
      "predikat": "Baik"
    }
  },
  {
    "id": "skp-17",
    "pegawaiId": "peg-17",
    "nama": "Ahmad Musawwir, A.Md.Kom.",
    "jabatan": "Statistisi Terampil / Bendahara Pengeluaran",
    "triwulan1": {
      "hasil": "Sesuai Ekspektasi",
      "perilaku": "Sesuai Ekspektasi",
      "predikat": "Baik"
    },
    "triwulan2": {
      "hasil": "Sesuai Ekspektasi",
      "perilaku": "Sesuai Ekspektasi",
      "predikat": "Baik"
    },
    "triwulan3": {
      "hasil": "Diatas Ekspektasi",
      "perilaku": "Sesuai Ekspektasi",
      "predikat": "Sangat Baik"
    },
    "triwulan4": {
      "hasil": "Sesuai Ekspektasi",
      "perilaku": "Sesuai Ekspektasi",
      "predikat": "Baik"
    },
    "tahunan": {
      "hasil": "Sesuai Ekspektasi",
      "perilaku": "Sesuai Ekspektasi",
      "predikat": "Baik"
    }
  },
  {
    "id": "skp-18",
    "pegawaiId": "peg-18",
    "nama": "Andi Muhammad Rosyidin Hidayat, S.Tr.Stat.",
    "jabatan": "Pranata Komputer Ahli Pertama BPS Kabupaten/Kota",
    "triwulan1": {
      "hasil": "Sesuai Ekspektasi",
      "perilaku": "Sesuai Ekspektasi",
      "predikat": "Baik"
    },
    "triwulan2": {
      "hasil": "Sesuai Ekspektasi",
      "perilaku": "Sesuai Ekspektasi",
      "predikat": "Baik"
    },
    "triwulan3": {
      "hasil": "Diatas Ekspektasi",
      "perilaku": "Sesuai Ekspektasi",
      "predikat": "Sangat Baik"
    },
    "triwulan4": {
      "hasil": "Sesuai Ekspektasi",
      "perilaku": "Sesuai Ekspektasi",
      "predikat": "Baik"
    },
    "tahunan": {
      "hasil": "Sesuai Ekspektasi",
      "perilaku": "Sesuai Ekspektasi",
      "predikat": "Baik"
    }
  },
  {
    "id": "skp-19",
    "pegawaiId": "peg-19",
    "nama": "Ridson Al Farizal P., S.Tr.Stat.",
    "jabatan": "Statistisi Ahli Pertama BPS Kabupaten/Kota",
    "triwulan1": {
      "hasil": "Sesuai Ekspektasi",
      "perilaku": "Sesuai Ekspektasi",
      "predikat": "Baik"
    },
    "triwulan2": {
      "hasil": "Sesuai Ekspektasi",
      "perilaku": "Sesuai Ekspektasi",
      "predikat": "Baik"
    },
    "triwulan3": {
      "hasil": "Diatas Ekspektasi",
      "perilaku": "Sesuai Ekspektasi",
      "predikat": "Sangat Baik"
    },
    "triwulan4": {
      "hasil": "Sesuai Ekspektasi",
      "perilaku": "Sesuai Ekspektasi",
      "predikat": "Baik"
    },
    "tahunan": {
      "hasil": "Sesuai Ekspektasi",
      "perilaku": "Sesuai Ekspektasi",
      "predikat": "Baik"
    }
  },
  {
    "id": "skp-20",
    "pegawaiId": "peg-20",
    "nama": "Aronad Brilliantino Evan Maheswara, S.Tr.Stat.",
    "jabatan": "Statistisi Ahli Pertama BPS Kabupaten/Kota",
    "triwulan1": {
      "hasil": "Sesuai Ekspektasi",
      "perilaku": "Sesuai Ekspektasi",
      "predikat": "Baik"
    },
    "triwulan2": {
      "hasil": "Sesuai Ekspektasi",
      "perilaku": "Sesuai Ekspektasi",
      "predikat": "Baik"
    },
    "triwulan3": {
      "hasil": "Diatas Ekspektasi",
      "perilaku": "Sesuai Ekspektasi",
      "predikat": "Sangat Baik"
    },
    "triwulan4": {
      "hasil": "Sesuai Ekspektasi",
      "perilaku": "Sesuai Ekspektasi",
      "predikat": "Baik"
    },
    "tahunan": {
      "hasil": "Sesuai Ekspektasi",
      "perilaku": "Sesuai Ekspektasi",
      "predikat": "Baik"
    }
  },
  {
    "id": "skp-21",
    "pegawaiId": "peg-21",
    "nama": "Nur Amalina Fauzi S.Tr.Stat.",
    "jabatan": "Statistisi Ahli Pertama BPS Kabupaten/Kota",
    "triwulan1": {
      "hasil": "Sesuai Ekspektasi",
      "perilaku": "Sesuai Ekspektasi",
      "predikat": "Baik"
    },
    "triwulan2": {
      "hasil": "Sesuai Ekspektasi",
      "perilaku": "Sesuai Ekspektasi",
      "predikat": "Baik"
    },
    "triwulan3": {
      "hasil": "Diatas Ekspektasi",
      "perilaku": "Sesuai Ekspektasi",
      "predikat": "Sangat Baik"
    },
    "triwulan4": {
      "hasil": "Sesuai Ekspektasi",
      "perilaku": "Sesuai Ekspektasi",
      "predikat": "Baik"
    },
    "tahunan": {
      "hasil": "Sesuai Ekspektasi",
      "perilaku": "Sesuai Ekspektasi",
      "predikat": "Baik"
    }
  },
  {
    "id": "skp-22",
    "pegawaiId": "peg-22",
    "nama": "Mukhtar, A.Md.Kom.",
    "jabatan": "Pranata Komputer Terampil BPS Kabupaten/Kota",
    "triwulan1": {
      "hasil": "Sesuai Ekspektasi",
      "perilaku": "Sesuai Ekspektasi",
      "predikat": "Baik"
    },
    "triwulan2": {
      "hasil": "Sesuai Ekspektasi",
      "perilaku": "Sesuai Ekspektasi",
      "predikat": "Baik"
    },
    "triwulan3": {
      "hasil": "Diatas Ekspektasi",
      "perilaku": "Sesuai Ekspektasi",
      "predikat": "Sangat Baik"
    },
    "triwulan4": {
      "hasil": "Sesuai Ekspektasi",
      "perilaku": "Sesuai Ekspektasi",
      "predikat": "Baik"
    },
    "tahunan": {
      "hasil": "Sesuai Ekspektasi",
      "perilaku": "Sesuai Ekspektasi",
      "predikat": "Baik"
    }
  },
  {
    "id": "skp-23",
    "pegawaiId": "peg-23",
    "nama": "Arie Purnama S.IP.",
    "jabatan": "",
    "triwulan1": {
      "hasil": "Sesuai Ekspektasi",
      "perilaku": "Sesuai Ekspektasi",
      "predikat": "Baik"
    },
    "triwulan2": {
      "hasil": "Sesuai Ekspektasi",
      "perilaku": "Sesuai Ekspektasi",
      "predikat": "Baik"
    },
    "triwulan3": {
      "hasil": "Diatas Ekspektasi",
      "perilaku": "Sesuai Ekspektasi",
      "predikat": "Sangat Baik"
    },
    "triwulan4": {
      "hasil": "Sesuai Ekspektasi",
      "perilaku": "Sesuai Ekspektasi",
      "predikat": "Baik"
    },
    "tahunan": {
      "hasil": "Sesuai Ekspektasi",
      "perilaku": "Sesuai Ekspektasi",
      "predikat": "Baik"
    }
  },
  {
    "id": "skp-24",
    "pegawaiId": "peg-24",
    "nama": "Apri Wijaya S.T.",
    "jabatan": "",
    "triwulan1": {
      "hasil": "Sesuai Ekspektasi",
      "perilaku": "Sesuai Ekspektasi",
      "predikat": "Baik"
    },
    "triwulan2": {
      "hasil": "Sesuai Ekspektasi",
      "perilaku": "Sesuai Ekspektasi",
      "predikat": "Baik"
    },
    "triwulan3": {
      "hasil": "Diatas Ekspektasi",
      "perilaku": "Sesuai Ekspektasi",
      "predikat": "Sangat Baik"
    },
    "triwulan4": {
      "hasil": "Sesuai Ekspektasi",
      "perilaku": "Sesuai Ekspektasi",
      "predikat": "Baik"
    },
    "tahunan": {
      "hasil": "Sesuai Ekspektasi",
      "perilaku": "Sesuai Ekspektasi",
      "predikat": "Baik"
    }
  },
  {
    "id": "skp-25",
    "pegawaiId": "peg-25",
    "nama": "Muh. Aszar Siri",
    "jabatan": "",
    "triwulan1": {
      "hasil": "Sesuai Ekspektasi",
      "perilaku": "Sesuai Ekspektasi",
      "predikat": "Baik"
    },
    "triwulan2": {
      "hasil": "Sesuai Ekspektasi",
      "perilaku": "Sesuai Ekspektasi",
      "predikat": "Baik"
    },
    "triwulan3": {
      "hasil": "Diatas Ekspektasi",
      "perilaku": "Sesuai Ekspektasi",
      "predikat": "Sangat Baik"
    },
    "triwulan4": {
      "hasil": "Sesuai Ekspektasi",
      "perilaku": "Sesuai Ekspektasi",
      "predikat": "Baik"
    },
    "tahunan": {
      "hasil": "Sesuai Ekspektasi",
      "perilaku": "Sesuai Ekspektasi",
      "predikat": "Baik"
    }
  },
  {
    "id": "skp-26",
    "pegawaiId": "peg-26",
    "nama": "Mursalim",
    "jabatan": "",
    "triwulan1": {
      "hasil": "Sesuai Ekspektasi",
      "perilaku": "Sesuai Ekspektasi",
      "predikat": "Baik"
    },
    "triwulan2": {
      "hasil": "Sesuai Ekspektasi",
      "perilaku": "Sesuai Ekspektasi",
      "predikat": "Baik"
    },
    "triwulan3": {
      "hasil": "Diatas Ekspektasi",
      "perilaku": "Sesuai Ekspektasi",
      "predikat": "Sangat Baik"
    },
    "triwulan4": {
      "hasil": "Sesuai Ekspektasi",
      "perilaku": "Sesuai Ekspektasi",
      "predikat": "Baik"
    },
    "tahunan": {
      "hasil": "Sesuai Ekspektasi",
      "perilaku": "Sesuai Ekspektasi",
      "predikat": "Baik"
    }
  }
];
