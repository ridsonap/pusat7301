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
  "databasePegawai": "https://docs.google.com/spreadsheets/d/1hnGYZh1Ng61W8HYfYg5_DRRyvtSedklDSK2b6GEqUZc/edit?usp=sharing",
  "klasifikasiSubstantif": "https://docs.google.com/spreadsheets/d/1NJ9WpVwN8IkCJEkn6r32a2XWpWnZezZX6sNoN3Dt2R4/edit?gid=2093109047#gid=2093109047",
  "klasifikasiFasilitatif": "https://docs.google.com/spreadsheets/d/1NJ9WpVwN8IkCJEkn6r32a2XWpWnZezZX6sNoN3Dt2R4/edit?gid=1970036418#gid=1970036418",
  "skpDriveUploadSpreadsheet": "https://docs.google.com/spreadsheets/d/1UpoN4TbkFhoU8A3LUrhHrDaexxFbtKLt8AQ1Br1-uWY/edit?gid=279747431#gid=279747431"
};

export const SKP_DRIVE_FOLDER_MAP: Record<string, string> = {
  "Muhammad Ikbal Nur": "https://drive.google.com/drive/folders/1r2rXdZT3uGubMstvxZeRld1rEmOMHg9J?usp=drive_link",
  "Bustan, S.Sos": "https://drive.google.com/drive/folders/1g1vD9sDhEFGBG2Xkx8dW2vCMXYq65yOA?usp=sharing",
  "Muhammad Junaid": "https://drive.google.com/drive/folders/1_ezyN94MTUCfGR0T8o6r6GYzq2Exh57K?usp=sharing",
  "Andi Basri": "https://drive.google.com/drive/folders/1pbg40XhQRFoBjTDhTqUZmk7aQqgMJTxs?usp=sharing",
  "Sri Wahyuni, S.Si": "https://drive.google.com/drive/folders/17Av7pKGCjpr7vEzAsOqTqMOQb2GzRmCO?usp=sharing",
  "Nurlaela, S.Sos": "https://drive.google.com/drive/folders/1QMS-l0bJFUtTcm4My0d0sYwdXbVasuHY?usp=sharing",
  "Zulhan Efendy, S.Sos": "https://drive.google.com/drive/folders/1osy0eF6bXx_YjQ_GgoARFpT1-5cF8kvM?usp=sharing",
  "Nur Asri, A.Md.Kom.": "https://drive.google.com/drive/folders/10RmG-fWta-LMcE5xYrdTl2AAkw0e7C0K?usp=sharing",
  "Fakhri Hafidzul Azhar, S.Tr. Stat.": "https://drive.google.com/drive/folders/1TbpY91nZAQ2kmE4-ZsH0nMSa9He7GCtz?usp=sharing",
  "Konita Iladini, S.Tr. Stat.": "https://drive.google.com/drive/folders/1BXLRPdS5LYs4ZhrJZwW95dMNcM0DBy-8?usp=sharing",
  "Ilham Aminu Rosyid, S.Tr. Stat.": "https://drive.google.com/drive/folders/1wnOprdjmAVxvMcyUF8gw9rrtIW3qfGNB?usp=sharing",
  "Nola Ramasentia, S.Tr. Stat.": "https://drive.google.com/drive/folders/1qI11jULV94rEB4VzAIrfpRVWpsF4m_n0?usp=sharing",
  "Mukhtar, A.Md. Kom.": "https://drive.google.com/drive/folders/1zE-_5VtPfAiespAB4D1jq1gwytftpp-5?usp=sharing",
  "Ahmad Musawwir, A.Md. Kom.": "https://drive.google.com/drive/folders/11StoDjK04vc6xlbeo6BmPAvrE8-UDDtJ?usp=sharing",
  "Indawati Amiruddin, A.Md. Stat.": "https://drive.google.com/drive/folders/1cj25HWM0h9m-OBz5SG2YTfafwZ0MPrMz?usp=sharing",
  "Nurul Izzah Abdullah, A.Md. Stat.": "https://drive.google.com/drive/folders/1Pj63IL6dP7pWejOhNfRGJcs00bsOo5e7?usp=drive_link",
  "Andi Muhammad Rosyidin Hidayat, S.Tr. Stat.": "https://drive.google.com/drive/folders/1s1qw9jJ2BVwU18V5gdleUcc7UFyb_a5x?usp=sharing",
  "Ridson Al Farizal P, S.Tr. Stat.": "https://drive.google.com/drive/folders/1y3ViGtgFaQO08u0JDT-Ad-PfMo6ITe1s?usp=drive_link",
  "Takdir Khauripan, S.Si.": "https://drive.google.com/drive/folders/1dVBr6UxZ8YzR_WhEwmdoNzwPNlI_riZz?usp=sharing",
  "Aronad Brilliantino Evan Maheswara, S.Tr.Stat.": "https://drive.google.com/drive/folders/1_oorLcFtYykmg8aZ0Goq0I37oCeyAOsA?usp=sharing",
  "Nur Amalina Fauzi S.Tr.Stat": "https://drive.google.com/drive/folders/1CuQeJtekEIkWpugqllyFCeTk0KTulC-m?usp=sharing",
  "Apri Wijaya, S.T": "https://drive.google.com/drive/folders/1nPBXvnMsICjADh-hI8Et9U_oCCulLag9?usp=sharing",
  "Arie Purnama, S.IP": "https://drive.google.com/drive/folders/151n7i9vBlsNA3PhLUaVGtW2tjWPiLEIG?usp=sharing",
  "Muh. Aszar Siri": "https://drive.google.com/drive/folders/1pbfQQjP5YUUKO15KEgh9P2k6R_OG-eLy?usp=sharing",
  "Mursalim": "https://drive.google.com/drive/folders/19milt01Tx5CL1brPYy3pdiFDTlu47uUC?usp=sharing"
};

export const getSkpDriveUploadUrl = (nama: string): string => {
  if (SKP_DRIVE_FOLDER_MAP[nama]) return SKP_DRIVE_FOLDER_MAP[nama];
  const clean = nama.toLowerCase().replace(/[^a-z]/g, '');
  for (const [key, url] of Object.entries(SKP_DRIVE_FOLDER_MAP)) {
    const cleanKey = key.toLowerCase().replace(/[^a-z]/g, '');
    if (clean.includes(cleanKey) || cleanKey.includes(clean)) {
      return url;
    }
  }
  return PORTAL_LINKS.skpDriveUploadSpreadsheet;
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
    "pdfUrl": "https://drive.google.com/file/d/1n2Aint_YM7u0arv3i-X7mCTi5nVgbz5_/view?usp=sharing",
    "petugasHonor": "Upload"
  },
  {
    "id": "sk-3",
    "nomorUrut": 3,
    "nomorSK": "003 TAHUN 2026",
    "tanggal": "05 Januari 2026",
    "uraian": "SK Pengelola SAI dan BMN 2026",
    "subFungsi": "UMUM",
    "pdfUrl": "https://drive.google.com/file/d/1Rsrguk49giSx3suGoRwqPs-PqLRXKr8I/view?usp=sharing",
    "wordUrl": "https://docs.google.com/document/d/10mbVBVr7KSkGeFdh8QNCp_wLoP-DUPnX/edit?usp=sharing&ouid=108368367994976358672&rtpof=true&sd=true",
    "petugasHonor": "Upload"
  },
  {
    "id": "sk-4",
    "nomorUrut": 4,
    "nomorSK": "004 TAHUN 2026",
    "tanggal": "05 Januari 2026",
    "uraian": "SK Tim Wasdal BMN 2026",
    "subFungsi": "UMUM",
    "pdfUrl": "https://drive.google.com/file/d/1adghbJ6UgV2JjKNFb6-0EyWIOFV0smpJ/view?usp=sharing",
    "wordUrl": "https://docs.google.com/document/d/1_4MXwNIy1nPpcWi2kqupKplhQ6t5C6UG/edit?usp=sharing&ouid=108368367994976358672&rtpof=true&sd=true",
    "petugasHonor": "Upload"
  },
  {
    "id": "sk-5",
    "nomorUrut": 5,
    "nomorSK": "005 TAHUN 2026",
    "tanggal": "05 Januari 2026",
    "uraian": "SK Transport Tahun 2026",
    "subFungsi": "UMUM",
    "pdfUrl": "https://drive.google.com/file/d/1VpHqajtYQUF5qsFkfYP6FPbOthm0wotj/view?usp=sharing",
    "wordUrl": "https://docs.google.com/document/d/1Huk8BvBzxYC9zbY7lmTv7WeWzvyjQvzK/edit?usp=sharing&ouid=108368367994976358672&rtpof=true&sd=true",
    "petugasHonor": "Upload"
  },
  {
    "id": "sk-6",
    "nomorUrut": 6,
    "nomorSK": "006 TAHUN 2026",
    "tanggal": "05 Januari 2026",
    "uraian": "SK Pendataan SKTNP Barang dan Jasa Tahun 2026",
    "subFungsi": "NERWILIS",
    "pdfUrl": "https://drive.google.com/file/d/1ybULM9NsxbP__acETPmVa65RroEYi2HZ/view?usp=sharing",
    "wordUrl": "https://docs.google.com/document/d/1PU3fpZqQs7a1gs28K-fbw1jEW7HT3lHp/edit?usp=sharing&ouid=108368367994976358672&rtpof=true&sd=true",
    "petugasHonor": "Upload"
  },
  {
    "id": "sk-7",
    "nomorUrut": 7,
    "nomorSK": "007 TAHUN 2026",
    "tanggal": "05 Januari 2026",
    "uraian": "SK  Pendataan Survei Ubinan  2026",
    "subFungsi": "PRODUKSI",
    "pdfUrl": "https://drive.google.com/file/d/1UPD1eHQ4Nynpg5x1lB1_FoF9aqK3Z_ly/view?usp=sharing",
    "wordUrl": "https://docs.google.com/document/d/16PQ5gjs30roU6AVCg3TwJ0ljQ9E5T0zx/edit?usp=sharing&ouid=108368367994976358672&rtpof=true&sd=true",
    "petugasHonor": "Upload"
  },
  {
    "id": "sk-8",
    "nomorUrut": 8,
    "nomorSK": "008 TAHUN 2026",
    "tanggal": "05 Januari 2026",
    "uraian": "SK Tim Pelaksana Survei Pemotongan Ternak 2026",
    "subFungsi": "PRODUKSI",
    "pdfUrl": "https://drive.google.com/file/d/1j-kkLTxUJBoqqMJtfel2kaLw6imOhZxt/view?usp=sharing",
    "wordUrl": "https://docs.google.com/document/d/1TlSvWus1cRVmmjofROVwhLmrBKvRpoc9/edit?usp=sharing&ouid=108368367994976358672&rtpof=true&sd=true",
    "petugasHonor": "Upload"
  },
  {
    "id": "sk-9",
    "nomorUrut": 9,
    "nomorSK": "009 TAHUN 2026",
    "tanggal": "05 Januari 2026",
    "uraian": "SK Tim Pelaksana KSA 2026",
    "subFungsi": "PRODUKSI",
    "pdfUrl": "https://drive.google.com/file/d/1oONV2h0XdZDtr7eAdo7czVUrT1E27rSn/view?usp=sharing",
    "wordUrl": "https://docs.google.com/document/d/1AO-dMGLmSSJ3Ih3SV0IWxhV5J6Fh8cUH/edit?usp=sharing&ouid=108368367994976358672&rtpof=true&sd=true",
    "petugasHonor": "Upload"
  },
  {
    "id": "sk-10",
    "nomorUrut": 10,
    "nomorSK": "010 TAHUN 2026",
    "tanggal": "05 Januari 2026",
    "uraian": "SK Pendataan VIMK Triwulan IV 2025",
    "subFungsi": "PRODUKSI",
    "pdfUrl": "https://drive.google.com/file/d/1fkD5PdSM7QEYdaQIrQ9nr9LwMcf9LXhN/view?usp=sharing",
    "wordUrl": "https://docs.google.com/document/d/1rjgQIy-N-ooMlC0RBBTVhlII9aip9Sg5/edit?usp=sharing&ouid=108368367994976358672&rtpof=true&sd=true",
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
    "wordUrl": "https://docs.google.com/document/d/1K6DzU8q9PuhMORTjzaOPaeZEb8xFs1WM/edit?usp=sharing&ouid=108867984901028014832&rtpof=true&sd=true",
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
    "wordUrl": "https://docs.google.com/document/d/1z2ozJ8m_BZJ_XPsdDIEJTEkMuGSB-XIK/edit?usp=sharing&ouid=108867984901028014832&rtpof=true&sd=true",
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
    "wordUrl": "https://docs.google.com/document/d/11SDzN0NT0NYHL6Jw4bzIWGrRJEtQkrhn/edit?usp=sharing&ouid=108867984901028014832&rtpof=true&sd=true",
    "petugasHonor": "Upload"
  },
  {
    "id": "sk-21",
    "nomorUrut": 21,
    "nomorSK": "021 TAHUN 2026",
    "tanggal": "05 Januari 2026",
    "uraian": "SK Pendataan Survei Perusahaan Kontruksi Tahunan (SKTH)",
    "subFungsi": "PRODUKSI",
    "wordUrl": "https://docs.google.com/document/d/1QKtXAX8ElFmUkeYKwiryE_UhwlSMCmgp/edit?usp=sharing&ouid=108867984901028014832&rtpof=true&sd=true",
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
    "pdfUrl": "https://drive.google.com/file/d/1kb_ICOykL9WxV91t0kh5h7PPgBhCro8c/view?usp=sharing",
    "wordUrl": "https://docs.google.com/document/d/1582w7aAnm-eEajPVxmJ6yZhC5mRCG1IS/edit?usp=sharing&ouid=108368367994976358672&rtpof=true&sd=true",
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
    "pdfUrl": "https://drive.google.com/file/d/1LNDKG5r0bM80ASSLjDd7XbA2wcq-Mtxf/view?usp=sharing",
    "wordUrl": "https://docs.google.com/document/d/1pDkVLxZybComv_uJt7MoxYViIFgI4xnB/edit?usp=sharing&ouid=108368367994976358672&rtpof=true&sd=true",
    "petugasHonor": "Upload"
  },
  {
    "id": "sk-27",
    "nomorUrut": 27,
    "nomorSK": "027 TAHUN 2026",
    "tanggal": "05 Januari 2026",
    "uraian": "SK Pelatihan Susenas Maret dan Seruti Triwulan I 2026",
    "subFungsi": "SOSIAL",
    "pdfUrl": "https://drive.google.com/file/d/1IwqBsD2d-RMh7j7nqMGQmyi73GYuPLop/view?usp=sharing",
    "wordUrl": "https://docs.google.com/document/d/1HE5inCTVvWJEvFl8YoXtsgqDKLWzDzvN/edit?usp=sharing&ouid=108368367994976358672&rtpof=true&sd=true",
    "petugasHonor": "Upload"
  },
  {
    "id": "sk-28",
    "nomorUrut": 28,
    "nomorSK": "028 TAHUN 2026",
    "tanggal": "05 Januari 2026",
    "uraian": "SK Pendataan Susenas Maret dan Seruti Triwulan I 2026",
    "subFungsi": "SOSIAL",
    "pdfUrl": "https://drive.google.com/file/d/1o3TbWsN1jsyjYHi4GSkCpVn_BZqB0gxR/view?usp=sharing",
    "wordUrl": "https://docs.google.com/document/d/1UUnCNF6tp4QHewQFBWAsRWE0LPxN7ojL/edit?usp=sharing&ouid=108368367994976358672&rtpof=true&sd=true",
    "petugasHonor": "Upload"
  },
  {
    "id": "sk-29",
    "nomorUrut": 29,
    "nomorSK": "029 TAHUN 2026",
    "tanggal": "05 Januari 2026",
    "uraian": "SK Transport Daerah Sulit Susenas Maret dan Seruti Triwulan I 2026",
    "subFungsi": "SOSIAL",
    "pdfUrl": "https://drive.google.com/file/d/1D2cvt9NRF7cJgM-iWtXja88T7tWBFh4j/view?usp=sharing",
    "wordUrl": "https://docs.google.com/document/d/1se1XPIU0Oo7J2PviV9vSBNKIejOQnW_l/edit?usp=sharing&ouid=108368367994976358672&rtpof=true&sd=true",
    "petugasHonor": "Upload"
  },
  {
    "id": "sk-30",
    "nomorUrut": 30,
    "nomorSK": "030 TAHUN 2026",
    "tanggal": "05 Januari 2026",
    "uraian": "SK Pengajar Sakernas Februari Tahun 2026",
    "subFungsi": "SOSIAL",
    "pdfUrl": "https://drive.google.com/file/d/1dWGzb6y87SQOwZB8IK4JPhKAyAH_rk8s/view?usp=sharing",
    "wordUrl": "https://docs.google.com/document/d/1foNY3FEdzjLYmO1-cE63k-idoHsNR-_1/edit?usp=sharing&ouid=108368367994976358672&rtpof=true&sd=true",
    "petugasHonor": "Upload"
  },
  {
    "id": "sk-31",
    "nomorUrut": 31,
    "nomorSK": "031 TAHUN 2026",
    "tanggal": "05 Januari 2026",
    "uraian": "SK Pelatihan Sakernas Februari 2026",
    "subFungsi": "SOSIAL",
    "pdfUrl": "https://drive.google.com/file/d/1H6x4h2NRU5MTXHvCeUu-POX_7AyrXE8U/view?usp=sharing",
    "wordUrl": "https://docs.google.com/document/d/1oPQmf9p-Cy4dyDZzCs4M0hQy4KiFAJCS/edit?usp=sharing&ouid=108368367994976358672&rtpof=true&sd=true",
    "petugasHonor": "Upload"
  },
  {
    "id": "sk-32",
    "nomorUrut": 32,
    "nomorSK": "032 TAHUN 2026",
    "tanggal": "05 Januari 2026",
    "uraian": "SK Pendataan Sakernas Februari 2026",
    "subFungsi": "SOSIAL",
    "pdfUrl": "https://drive.google.com/file/d/1nVObYqFqY0LSZ81O47Wpes2eTvCkSfxK/view?usp=sharing",
    "wordUrl": "https://docs.google.com/document/d/1wTksBsB4DOjXDgjnDpMioBagb_1MriRi/edit?usp=sharing&ouid=108368367994976358672&rtpof=true&sd=true",
    "petugasHonor": "Upload"
  },
  {
    "id": "sk-33",
    "nomorUrut": 33,
    "nomorSK": "033 TAHUN 2026",
    "tanggal": "05 Januari 2026",
    "uraian": "SK Transport Daerah Sulit Sakernas Februari 2026",
    "subFungsi": "SOSIAL",
    "pdfUrl": "https://drive.google.com/file/d/1pvwC9z8vxExScASadw7ZqCqyGLpKnYWC/view?usp=sharing",
    "wordUrl": "https://docs.google.com/document/d/1qbDvGwbBvnNmaBEpln0hIuDAwgsSNYXi/edit?usp=sharing&ouid=108368367994976358672&rtpof=true&sd=true",
    "petugasHonor": "Upload"
  },
  {
    "id": "sk-34",
    "nomorUrut": 34,
    "nomorSK": "034 TAHUN 2026",
    "tanggal": "05 Januari 2026",
    "uraian": "SK Pendataan SNLIK 2026",
    "subFungsi": "SOSIAL",
    "petugasHonor": "Upload"
  },
  {
    "id": "sk-35",
    "nomorUrut": 35,
    "nomorSK": "035 TAHUN 2026",
    "tanggal": "05 Januari 2026",
    "uraian": "SK Pendataan Survei Tahunan Perusahaan Penggalian Bahan Industri dan Konstruksi",
    "subFungsi": "PRODUKSI",
    "petugasHonor": "Upload"
  },
  {
    "id": "sk-36",
    "nomorUrut": 36,
    "nomorSK": "036 TAHUN 2026",
    "tanggal": "05 Januari 2026",
    "uraian": "SK Updating Perusahaan Pertambangan dan Energi (UDPE)",
    "subFungsi": "PRODUKSI",
    "wordUrl": "https://docs.google.com/document/d/1xeB-a8jlkzBdGNxvpn3CCz0UjhMArCew/edit?usp=sharing&ouid=108867984901028014832&rtpof=true&sd=true",
    "petugasHonor": "Upload"
  },
  {
    "id": "sk-37",
    "nomorUrut": 37,
    "nomorSK": "037 TAHUN 2026",
    "tanggal": "05 Januari 2026",
    "uraian": "SK Pelatihan KSA dan Ubinan 2026",
    "subFungsi": "PRODUKSI",
    "pdfUrl": "https://drive.google.com/file/d/1RGJFe6Asmg6UUQJrlL2UV1d23V44Ureg/view?usp=sharing",
    "wordUrl": "https://docs.google.com/document/d/1JFZcT2hL8EbkJW9fBmk0VXunVMZqODVg/edit?usp=sharing&ouid=108368367994976358672&rtpof=true&sd=true",
    "petugasHonor": "Upload"
  },
  {
    "id": "sk-38",
    "nomorUrut": 38,
    "nomorSK": "038 TAHUN 2026",
    "tanggal": "05 Januari 2026",
    "uraian": "SK Pengajar Pelatihan KSA dan Ubinan 2026",
    "subFungsi": "PRODUKSI",
    "pdfUrl": "https://drive.google.com/file/d/1K23YdJZ0E04IRRxBBLSLBaTbQ9eynn2F/view?usp=sharing",
    "wordUrl": "https://docs.google.com/document/d/1QjfWh8I6ZMy2dpJ3IYyQdhP3zZulXn8v/edit?usp=sharing&ouid=108368367994976358672&rtpof=true&sd=true",
    "petugasHonor": "Upload"
  },
  {
    "id": "sk-39",
    "nomorUrut": 39,
    "nomorSK": "039 TAHUN 2026",
    "tanggal": "05 Januari 2026",
    "uraian": "SK Petugas Pengumpulan Data Survei Harga Produsen Tahun 2026",
    "subFungsi": "DISTRIBUSI",
    "pdfUrl": "https://drive.google.com/file/d/16RlUvTJvMpCykddZNSnSrk-Nmq7s2s_c/view?usp=sharing",
    "wordUrl": "https://docs.google.com/document/d/1KsEoPiiYg0W93EYdHx6jeI1SPtVTaqm6/edit?usp=sharing&ouid=108368367994976358672&rtpof=true&sd=true",
    "petugasHonor": "Upload"
  },
  {
    "id": "sk-40",
    "nomorUrut": 40,
    "nomorSK": "040 TAHUN 2026",
    "tanggal": "05 Januari 2026",
    "uraian": "SK Petugas Pengumpulan Data Survei Harga Perdagangan Besar Tahun 2026",
    "subFungsi": "DISTRIBUSI",
    "pdfUrl": "https://drive.google.com/file/d/1CQkG-5CgQuUKJJw64zAdo_o7Js26LOqR/view?usp=sharing",
    "wordUrl": "https://docs.google.com/document/d/1_oXSuh4xhfwt5HFvFbfHF7xZq3RxhJWd/edit?usp=sharing&ouid=108368367994976358672&rtpof=true&sd=true",
    "petugasHonor": "Upload"
  },
  {
    "id": "sk-41",
    "nomorUrut": 41,
    "nomorSK": "041 TAHUN 2026",
    "tanggal": "05 Januari 2026",
    "uraian": "SK Tim Pelaksana Identifikasi Komoditas Utama SHP",
    "subFungsi": "DISTRIBUSI",
    "pdfUrl": "https://drive.google.com/file/d/1CAcXsbXt_dT6VRa0qpK5HMvecucUUsfD/view?usp=sharing",
    "wordUrl": "https://docs.google.com/document/d/18_uWuwZnWKl1uav2Lrs22lVZpam4JnG3/edit?usp=sharing&ouid=108368367994976358672&rtpof=true&sd=true",
    "petugasHonor": "Upload"
  },
  {
    "id": "sk-42",
    "nomorUrut": 42,
    "nomorSK": "042 TAHUN 2026",
    "tanggal": "05 Januari 2026",
    "uraian": "SK Petugas Pengumpulan Data Survei Harga Kemahalan Konstruksi 2026",
    "subFungsi": "DISTRIBUSI",
    "pdfUrl": "https://drive.google.com/file/d/14YMj8CtOZ11cGRNaqgLJ4bl-a0rjDB1m/view?usp=sharing",
    "wordUrl": "https://docs.google.com/document/d/1sj19ARCQAxD3TQigIDkjp2xELYboSGkc/edit?usp=sharing&ouid=108368367994976358672&rtpof=true&sd=true",
    "petugasHonor": "Upload"
  },
  {
    "id": "sk-43",
    "nomorUrut": 43,
    "nomorSK": "043 TAHUN 2026",
    "tanggal": "05 Januari 2026",
    "uraian": "SK Petugas Pengumpulan Data Survei VHTS 2026",
    "subFungsi": "DISTRIBUSI",
    "pdfUrl": "https://drive.google.com/file/d/1nyjbpFWfKCt_dIGh6EArcBdArDdO6AnE/view?usp=sharing",
    "wordUrl": "https://docs.google.com/document/d/1n3hvQtiUnGb7lQLe6PUOBXQleezU6iMD/edit?usp=sharing&ouid=108368367994976358672&rtpof=true&sd=true",
    "petugasHonor": "Upload"
  },
  {
    "id": "sk-44",
    "nomorUrut": 44,
    "nomorSK": "044 TAHUN 2026",
    "tanggal": "05 Januari 2026",
    "uraian": "SK Petugas Updating Jasa Pariwisata Tahun 2026",
    "subFungsi": "DISTRIBUSI",
    "pdfUrl": "https://drive.google.com/file/d/1G0ZxlzdGQ0c1YfMbbGdO8Ga7pb3ySpY1/view?usp=sharing",
    "wordUrl": "https://docs.google.com/document/d/1w1S5s0N4wY7mmsQNIRHcp_eguiVTqxmC/edit?usp=sharing&ouid=108368367994976358672&rtpof=true&sd=true",
    "petugasHonor": "Upload"
  },
  {
    "id": "sk-45",
    "nomorUrut": 45,
    "nomorSK": "045 TAHUN 2026",
    "tanggal": "05 Januari 2026",
    "uraian": "SK TIM Pelaksana Sensus Ekonomi 2026",
    "subFungsi": "DISTRIBUSI",
    "pdfUrl": "https://drive.google.com/file/d/1UgB7nCNL6eeI5SmFgd83puvUOrsr9oUR/view?usp=sharing",
    "wordUrl": "https://docs.google.com/document/d/1rbJEMPzZ25xL29zrpY-Z8pfeAnFYmt1C/edit?usp=sharing&ouid=108867984901028014832&rtpof=true&sd=true",
    "petugasHonor": "Upload"
  },
  {
    "id": "sk-46",
    "nomorUrut": 46,
    "nomorSK": "046 TAHUN 2026",
    "tanggal": "05 Januari 2026",
    "uraian": "SK TIM Sekretariat Sensus Ekonomi 2026",
    "subFungsi": "DISTRIBUSI",
    "pdfUrl": "https://drive.google.com/file/d/17gpS-5auUtUOFLJlQenWRlljgTWYyiXk/view?usp=sharing",
    "wordUrl": "https://docs.google.com/document/d/1Z59Z3fwxjwvSfdihnAIp7RYy7p13FJcA/edit?usp=sharing&ouid=108867984901028014832&rtpof=true&sd=true",
    "petugasHonor": "Upload"
  },
  {
    "id": "sk-47",
    "nomorUrut": 47,
    "nomorSK": "047 TAHUN 2026",
    "tanggal": "02 Februari 2026",
    "uraian": "SK Pelatihan VIP Hortikultura 2026",
    "subFungsi": "PRODUKSI",
    "pdfUrl": "https://drive.google.com/file/d/11EuEs_zAEfkxndK_4PEyqMXxEHrknpap/view?usp=sharing",
    "wordUrl": "https://docs.google.com/document/d/1yLUYYY18JixXr7mhYuYSgwuVJ4k4Gg4f/edit?usp=sharing&ouid=108867984901028014832&rtpof=true&sd=true",
    "petugasHonor": "Upload"
  },
  {
    "id": "sk-48",
    "nomorUrut": 48,
    "nomorSK": "048 TAHUN 2026",
    "tanggal": "02 Februari 2026",
    "uraian": "SK Pengajar Pelatihan VIP Hortikultura 2026",
    "subFungsi": "PRODUKSI",
    "pdfUrl": "https://drive.google.com/file/d/1XqkdhUEY6kctBV194ZIqmDFq4Wg-d_-5/view?usp=sharing",
    "wordUrl": "https://docs.google.com/document/d/1uMh51sJ4iKFBKJ9s0o8lPWT6asH0QPIH/edit?usp=sharing&ouid=108867984901028014832&rtpof=true&sd=true",
    "petugasHonor": "Upload"
  },
  {
    "id": "sk-49",
    "nomorUrut": 49,
    "nomorSK": "049 TAHUN 2026",
    "tanggal": "02 Februari 2026",
    "uraian": "SK INNAS Survei Harga Perdagangan  Besar Tahun 2026",
    "subFungsi": "DISTRIBUSI",
    "pdfUrl": "https://drive.google.com/file/d/1s19gEbPu6oWgjRm6ZAFhvD4qe4LPMCpv/view?usp=sharing",
    "wordUrl": "https://docs.google.com/document/d/1w0M554Ox2YQf5NESvV6OWRmrk5d7pmZ6/edit?usp=sharing&ouid=108368367994976358672&rtpof=true&sd=true",
    "petugasHonor": "Upload"
  },
  {
    "id": "sk-50",
    "nomorUrut": 50,
    "nomorSK": "050 TAHUN 2026",
    "tanggal": "02 Februari 2026",
    "uraian": "SK Pelatihan Petugas Survei Harga Perdagangan  Besar Tahun 2026",
    "subFungsi": "DISTRIBUSI",
    "pdfUrl": "https://drive.google.com/file/d/1I6L0miWstVudrJsaL4-iPQkR2_i_CNFV/view?usp=sharing",
    "wordUrl": "https://docs.google.com/document/d/18ZxW6-vg4HEC5-GdRg3rMnjBRSFMEcJv/edit?usp=sharing&ouid=108368367994976358672&rtpof=true&sd=true",
    "petugasHonor": "Upload"
  },
  {
    "id": "sk-51",
    "nomorUrut": 51,
    "nomorSK": "051 TAHUN 2026",
    "tanggal": "02 Februari 2026",
    "uraian": "SK Pelatihan Petugas Komoditas Strategis Perkebunan  2026",
    "subFungsi": "PRODUKSI",
    "pdfUrl": "https://drive.google.com/file/d/1Lmq4dSqCpbb6m99wcSiGeUp2hQraTRSG/view?usp=sharing",
    "wordUrl": "https://docs.google.com/document/d/1yOEqMUtYUF7p-GAswo3jhazQLB5ss7HP/edit?usp=sharing&ouid=108867984901028014832&rtpof=true&sd=true",
    "petugasHonor": "Upload"
  },
  {
    "id": "sk-52",
    "nomorUrut": 52,
    "nomorSK": "052 TAHUN 2026",
    "tanggal": "02 Februari 2026",
    "uraian": "SK Pengajar Komoditas Strategis Perkebunan 2026",
    "subFungsi": "PRODUKSI",
    "pdfUrl": "https://drive.google.com/file/d/15k2q7uRI1X1cDmy_pqbakdmWdrGxpn9j/view?usp=sharing",
    "wordUrl": "https://docs.google.com/document/d/1v-1wRLMW2bhiLNytnllupBRoddo1nSl8/edit?usp=sharing&ouid=108867984901028014832&rtpof=true&sd=true",
    "petugasHonor": "Upload"
  },
  {
    "id": "sk-53",
    "nomorUrut": 53,
    "nomorSK": "053 TAHUN 2026",
    "tanggal": "02 Februari 2026",
    "uraian": "SK Pendataan Survei VIP Hortikultura 2026",
    "subFungsi": "PRODUKSI",
    "pdfUrl": "https://drive.google.com/file/d/1mC8T0fmtVzcMjKRt-SsDpYK9GS_wmB5n/view?usp=sharing",
    "wordUrl": "https://docs.google.com/document/d/1hwOyM8JiEGCRUHuFyrTGpxxEub_RW2Wa/edit?usp=sharing&ouid=108867984901028014832&rtpof=true&sd=true",
    "petugasHonor": "Upload"
  },
  {
    "id": "sk-54",
    "nomorUrut": 54,
    "nomorSK": "054 TAHUN 2026",
    "tanggal": "02 Februari 2026",
    "uraian": "SK Pendataan Komoditas Strategis Perkebunan 2026",
    "subFungsi": "PRODUKSI",
    "pdfUrl": "https://drive.google.com/file/d/1MTFhnponHeubxzcRXnvzMaM8ybC3rYk1/view?usp=sharing",
    "wordUrl": "https://docs.google.com/document/d/121hGU56ZCPCwifrIWeVBRGKjWIPJaPUc/edit?usp=sharing&ouid=108867984901028014832&rtpof=true&sd=true",
    "petugasHonor": "Upload"
  },
  {
    "id": "sk-55",
    "nomorUrut": 55,
    "nomorSK": "055 TAHUN 2026",
    "tanggal": "02 Februari 2026",
    "uraian": "SK Pengolahan Dokumen SUSENAS Maret dan SERUTI TW I 2026",
    "subFungsi": "IPDS",
    "pdfUrl": "https://drive.google.com/file/d/1GYp30Cw0UIUnopojJINoEYhsl2SkdLOo/view?usp=sharing",
    "wordUrl": "https://docs.google.com/document/d/1hQcnPGhr1uxHviNPiDy6wevTcPD6hT93/edit?usp=sharing&ouid=108867984901028014832&rtpof=true&sd=true",
    "petugasHonor": "Upload"
  },
  {
    "id": "sk-56",
    "nomorUrut": 56,
    "nomorSK": "056 TAHUN 2026",
    "tanggal": "02 Februari 2026",
    "uraian": "SK Pengolahan Dokumen Seruti Triwulanan Tahun 2026",
    "subFungsi": "IPDS",
    "petugasHonor": "Upload"
  },
  {
    "id": "sk-57",
    "nomorUrut": 57,
    "nomorSK": "057 TAHUN 2026",
    "tanggal": "02 Maret 2026",
    "uraian": "SK PELATIHAN SKTNP 2026",
    "subFungsi": "NERWILIS",
    "wordUrl": "https://docs.google.com/document/d/19nj0Ced9CpTeD5oqlU8TjyXK5eaIN3a1/edit?usp=sharing&ouid=108867984901028014832&rtpof=true&sd=true",
    "petugasHonor": "Upload"
  },
  {
    "id": "sk-58",
    "nomorUrut": 58,
    "nomorSK": "058 TAHUN 2026",
    "tanggal": "02 Maret 2026",
    "uraian": "SK PELATIHAN SKLNPT 2026",
    "subFungsi": "NERWILIS",
    "wordUrl": "https://docs.google.com/document/d/1f7ttYQVzL2EWTAk4jlGZgUohn1liQibE/edit?usp=sharing&ouid=108867984901028014832&rtpof=true&sd=true",
    "petugasHonor": "Upload"
  },
  {
    "id": "sk-59",
    "nomorUrut": 59,
    "nomorSK": "059 TAHUN 2026",
    "tanggal": "02 Maret 2026",
    "uraian": "SK Pelatihan Petugas Survei Industri, Pertambangan, Energi dan Konstruksi 2026",
    "subFungsi": "PRODUKSI",
    "wordUrl": "https://docs.google.com/document/d/1cKmIp-ZyVzstLoBJOr1P6gjyU_iCNjnL/edit?usp=sharing&ouid=108867984901028014832&rtpof=true&sd=true",
    "petugasHonor": "Upload"
  },
  {
    "id": "sk-60",
    "nomorUrut": 60,
    "nomorSK": "060 TAHUN 2026",
    "tanggal": "02 Maret 2026",
    "uraian": "SK Pengajar Pelatihan Petugas Survei Industri, Pertambangan, Energi dan Konstruksi 2026",
    "subFungsi": "PRODUKSI",
    "wordUrl": "https://docs.google.com/document/d/1gDksvC3of02jldqVizoXW7IH0xuwnUo0/edit?usp=sharing&ouid=108867984901028014832&rtpof=true&sd=true",
    "petugasHonor": "Upload"
  },
  {
    "id": "sk-61",
    "nomorUrut": 61,
    "nomorSK": "061 TAHUN 2026",
    "tanggal": "02 Maret 2026",
    "uraian": "SK Pengajar Pelatihan Petugas SKTNP 2026",
    "subFungsi": "NERWILIS",
    "wordUrl": "https://docs.google.com/document/d/1k-GNy0guHSnI37g4GZmZ2HAkbQG6N4rH/edit?usp=sharing&ouid=108867984901028014832&rtpof=true&sd=true",
    "petugasHonor": "Upload"
  },
  {
    "id": "sk-62",
    "nomorUrut": 62,
    "nomorSK": "062 TAHUN 2026",
    "tanggal": "02 Maret 2026",
    "uraian": "SK Pengajar Pelatihan Petugas SKLNPT 2026",
    "subFungsi": "NERWILIS",
    "wordUrl": "https://docs.google.com/document/d/1VEUlsoqRtvF3inZctXPXp3sLR2P4OYIr/edit?usp=sharing&ouid=108867984901028014832&rtpof=true&sd=true",
    "petugasHonor": "Upload"
  },
  {
    "id": "sk-63",
    "nomorUrut": 63,
    "nomorSK": "063 TAHUN 2026",
    "tanggal": "02 Maret 2026",
    "uraian": "SK Pelatihan Survei Penyedian Makanan Minuman (VREST) 2026",
    "subFungsi": "DISTRIBUSI",
    "pdfUrl": "https://drive.google.com/file/d/19JR9AaxwVrpYjqCKeAEncjnrSPrhnCM8/view?usp=sharing",
    "wordUrl": "https://docs.google.com/document/d/1bXRL8twoYnJnjEKNtoP_8t227k1G8sYw/edit?usp=sharing&ouid=108867984901028014832&rtpof=true&sd=true",
    "petugasHonor": "Upload"
  },
  {
    "id": "sk-64",
    "nomorUrut": 65,
    "nomorSK": "064 TAHUN 2026",
    "tanggal": "02 Maret 2026",
    "uraian": "SK Pengajar Survei Penyediaan Makanan Minuman (VREST) 2026",
    "subFungsi": "DISTRIBUSI",
    "pdfUrl": "https://drive.google.com/file/d/1I2Ti9gwtkbgYStfO2aP_XMN5K2bV_Lej/view?usp=sharing",
    "wordUrl": "https://docs.google.com/document/d/1eS-03rRrXUf0t3ucfePfyLXorPqgz7U9/edit?usp=sharing&ouid=108867984901028014832&rtpof=true&sd=true",
    "petugasHonor": "Upload"
  },
  {
    "id": "sk-65",
    "nomorUrut": 65,
    "nomorSK": "065 TAHUN 2026",
    "tanggal": "02 Maret 2026",
    "uraian": "SK Pendataan Survei Penyediaan Makanan Minuman (VREST)",
    "subFungsi": "DISTRIBUSI",
    "pdfUrl": "https://drive.google.com/file/d/1yCPcrCfjYNTdvjiMrudqG5lSsNBnIYrk/view?usp=sharing",
    "wordUrl": "https://docs.google.com/document/d/1yap4eeTsiGAfo10cqTl5kdA9RqjFquiF/edit?usp=sharing&ouid=108867984901028014832&rtpof=true&sd=true",
    "petugasHonor": "Upload"
  },
  {
    "id": "sk-66",
    "nomorUrut": 66,
    "nomorSK": "066 TAHUN 2026",
    "tanggal": "02 Maret 2026",
    "uraian": "SK Pendataan Statistik Keuangan Pemerintah Desa K3",
    "subFungsi": "DISTRIBUSI",
    "pdfUrl": "https://drive.google.com/file/d/1UVMlkA0UAPwqwohNAHcO6ylh5HOMk6c8/view?usp=sharing",
    "wordUrl": "https://docs.google.com/document/d/1TfqjOcjg6nMeDVek9tecHg0C46V7TBbX/edit?usp=sharing&ouid=108867984901028014832&rtpof=true&sd=true",
    "petugasHonor": "Upload"
  },
  {
    "id": "sk-67",
    "nomorUrut": 67,
    "nomorSK": "067 TAHUN 2026",
    "tanggal": "02 Maret 2026",
    "uraian": "SK Pendataan Survei Statistik Keuangan BUMD",
    "subFungsi": "DISTRIBUSI",
    "pdfUrl": "https://drive.google.com/file/d/17McxJu1INSviNXtAqNhOlj7ePBLKZkWy/view?usp=sharing",
    "wordUrl": "https://docs.google.com/document/d/1GYm9wa7_yeyayuo8xlDEKKT5yI08jLhV/edit?usp=sharing&ouid=108867984901028014832&rtpof=true&sd=true",
    "petugasHonor": "Upload"
  },
  {
    "id": "sk-68",
    "nomorUrut": 68,
    "nomorSK": "068 TAHUN 2026",
    "tanggal": "02 Maret 2026",
    "uraian": "SK Pendataan Survei Lembaga Keuangan Koperasi Simpan Pinjam SLK-KSP",
    "subFungsi": "DISTRIBUSI",
    "pdfUrl": "https://drive.google.com/file/d/1ecVOkhMBSyp-J11CEO5nBbrdz5s29XJ8/view?usp=sharing",
    "wordUrl": "https://docs.google.com/document/d/13EuecfRG_RjN3tWjIZ0vSUpXMoh3x685/edit?usp=sharing&ouid=108867984901028014832&rtpof=true&sd=true",
    "petugasHonor": "Upload"
  },
  {
    "id": "sk-69",
    "nomorUrut": 69,
    "nomorSK": "069 TAHUN 2026",
    "tanggal": "02 Maret 2026",
    "uraian": "SK Pendataan Survei Usaha/Perusahaan Penyedia Akomodasi Tahunan ( VTHL)",
    "subFungsi": "DISTRIBUSI",
    "pdfUrl": "https://drive.google.com/file/d/1amoXoMnig9fMiCtlR7UWwGxvsU-KMzi4/view?usp=sharing",
    "wordUrl": "https://docs.google.com/document/d/1nI4IwBXA_1Tw8ouZhhTrCmT_WA_f6FgU/edit?usp=sharing&ouid=108867984901028014832&rtpof=true&sd=true",
    "petugasHonor": "Upload"
  },
  {
    "id": "sk-70",
    "nomorUrut": 70,
    "nomorSK": "070 TAHUN 2026",
    "tanggal": "02 Maret 2026",
    "uraian": "SK Pendataan Survei Usaha/Perusahaan Daya Tarik Wisata (VDTW)",
    "subFungsi": "DISTRIBUSI",
    "pdfUrl": "https://drive.google.com/file/d/1fFeXBnOrPPMSBWr02kmUaWr-0GAhNXuF/view?usp=sharing",
    "wordUrl": "https://docs.google.com/document/d/1_L9kt7OKtmCuWZjTxEv8fxnQEzRB586e/edit?usp=sharing&ouid=108867984901028014832&rtpof=true&sd=true",
    "petugasHonor": "Upload"
  },
  {
    "id": "sk-71",
    "nomorUrut": 71,
    "nomorSK": "071 TAHUN 2026",
    "tanggal": "02 Maret 2026",
    "uraian": "071 Tahun 2026_SK Pendataan Survei Pola Usaha Non Pertanian (SPUNP)",
    "subFungsi": "DISTRIBUSI",
    "pdfUrl": "https://drive.google.com/file/d/1_Amm6-WnnAOeBNEh8muyvFyVf94lFx0h/view?usp=sharing",
    "wordUrl": "https://docs.google.com/document/d/1EJX2bm1Yi4MGa-0HG55fpHYdfx4aq9BF/edit?usp=sharing&ouid=108867984901028014832&rtpof=true&sd=true",
    "petugasHonor": "Upload"
  },
  {
    "id": "sk-72",
    "nomorUrut": 72,
    "nomorSK": "072 TAHUN 2026",
    "tanggal": "01 April 2026",
    "uraian": "SK Pendataan Survei Khusus Triwulanan Neraca Produksi (SKTNP) 2026",
    "subFungsi": "NERWILIS",
    "wordUrl": "https://docs.google.com/document/d/1k2hw-F-gLHQqh6Wq3wj7CegPA3djNh21/edit?usp=sharing&ouid=108867984901028014832&rtpof=true&sd=true",
    "petugasHonor": "Upload"
  },
  {
    "id": "sk-73",
    "nomorUrut": 73,
    "nomorSK": "073 TAHUN 2026",
    "tanggal": "01 April 2026",
    "uraian": "SK Pendataan Survei Khusus Lembaga Non Profit Triwulanan (SKLNPT) 2026",
    "subFungsi": "NERWILIS",
    "wordUrl": "https://docs.google.com/document/d/1e1lCKO2cHiOLXs8oGpF10KwAp_VL5-kP/edit?usp=sharing&ouid=108867984901028014832&rtpof=true&sd=true",
    "petugasHonor": "Upload"
  },
  {
    "id": "sk-74",
    "nomorUrut": 74,
    "nomorSK": "074 TAHUN 2026",
    "tanggal": "02 April 2026",
    "uraian": "SK Pengajar Pemutakhiran Data Perkembangan Desa 2026 (PODES 2026)",
    "subFungsi": "SOSIAL",
    "wordUrl": "https://docs.google.com/document/d/1CnEDBFgevbOS7THwTSCgmG1pFVqNDHyh/edit?usp=sharing&ouid=108867984901028014832&rtpof=true&sd=true",
    "petugasHonor": "Upload"
  },
  {
    "id": "sk-75",
    "nomorUrut": 75,
    "nomorSK": "075 TAHUN 2026",
    "tanggal": "02 April 2026",
    "uraian": "SK Pelatihan Pemutakhiran Data Perkembangan Desa 2026 (PODES 2026)",
    "subFungsi": "SOSIAL",
    "wordUrl": "https://docs.google.com/document/d/1Y7i0HWIoe0NKj4iINpB-qkVDRhEwVRFC/edit?usp=sharing&ouid=108867984901028014832&rtpof=true&sd=true",
    "petugasHonor": "Upload"
  },
  {
    "id": "sk-76",
    "nomorUrut": 76,
    "nomorSK": "076 TAHUN 2026",
    "tanggal": "02 April 2026",
    "uraian": "SK Pendataan Lapangan Pemutakhiran Data Perkembangan Desa 2026 (PODES 2026)",
    "subFungsi": "SOSIAL",
    "wordUrl": "https://docs.google.com/document/d/16vwrqX03KZvQtzn5VhLpQgxKvudUniZ5/edit?usp=sharing&ouid=108867984901028014832&rtpof=true&sd=true",
    "petugasHonor": "Upload"
  },
  {
    "id": "sk-77",
    "nomorUrut": 77,
    "nomorSK": "077 TAHUN 2026",
    "tanggal": "02 April 2026",
    "uraian": "SK Transport Daerah Sulit Pemutakhiran Data Perkembangan Desa 2026 (PODES 2026)",
    "subFungsi": "SOSIAL",
    "wordUrl": "https://docs.google.com/document/d/1q50zmq5g53_HNH3PdgqYfdI05ExK6XtT/edit?usp=sharing&ouid=108867984901028014832&rtpof=true&sd=true",
    "petugasHonor": "Upload"
  },
  {
    "id": "sk-78",
    "nomorUrut": 78,
    "nomorSK": "078 TAHUN 2026",
    "tanggal": "02 April 2026",
    "uraian": "SK Standar Pelayanan Pelayanan Statistik Terpadu",
    "subFungsi": "IPDS",
    "petugasHonor": "Upload"
  },
  {
    "id": "sk-79",
    "nomorUrut": 79,
    "nomorSK": "079 TAHUN 2026",
    "tanggal": "02 April 2026",
    "uraian": "SK Petugas Penanganan Pengaduan  PST 2026",
    "subFungsi": "IPDS",
    "petugasHonor": "Upload"
  },
  {
    "id": "sk-80",
    "nomorUrut": 80,
    "nomorSK": "080 TAHUN 2026",
    "tanggal": "02 April 2026",
    "uraian": "SK Tim Desa Cinta Statistik 2025",
    "subFungsi": "UMUM",
    "petugasHonor": "Upload"
  },
  {
    "id": "sk-81",
    "nomorUrut": 81,
    "nomorSK": "081 TAHUN 2026",
    "tanggal": "02 April 2026",
    "uraian": "SK Panitia Pelelangan Barang 2026",
    "subFungsi": "UMUM",
    "wordUrl": "https://docs.google.com/document/d/1Sf45luAOehASug2RbgO5B8af-CTODaov/edit?usp=sharing&ouid=108867984901028014832&rtpof=true&sd=true",
    "petugasHonor": "Upload"
  },
  {
    "id": "sk-82",
    "nomorUrut": 82,
    "nomorSK": "082 TAHUN 2026",
    "tanggal": "02 April 2026",
    "uraian": "SK Pejabat Penjual dalam Pelaksanaan Lelang BMN 2025",
    "subFungsi": "UMUM",
    "wordUrl": "https://docs.google.com/document/d/15scQUsJNtu5iwzhzyk1HNEOz2-SHtacz/edit?usp=sharing&ouid=108867984901028014832&rtpof=true&sd=true",
    "petugasHonor": "Upload"
  },
  {
    "id": "sk-83",
    "nomorUrut": 83,
    "nomorSK": "083 TAHUN 2026",
    "tanggal": "02 April 2026",
    "uraian": "SK Panitia Rekrutmen Petugas (Sensus Ekonomi ) SE 2026",
    "subFungsi": "UMUM",
    "wordUrl": "https://docs.google.com/document/d/1mVyqvEqvjVuyS6ZTNX5Hnduof1amtdU_/edit?usp=sharing&ouid=108867984901028014832&rtpof=true&sd=true",
    "petugasHonor": "Upload"
  },
  {
    "id": "sk-84",
    "nomorUrut": 84,
    "nomorSK": "084 TAHUN 2026",
    "tanggal": "02 April 2026",
    "uraian": "SK Pelaksana PST",
    "subFungsi": "IPDS",
    "petugasHonor": "Upload"
  },
  {
    "id": "sk-85",
    "nomorUrut": 85,
    "nomorSK": "085 TAHUN 2026",
    "tanggal": "02 April 2026",
    "uraian": "SK Motto dan Budaya PST",
    "subFungsi": "IPDS",
    "petugasHonor": "Upload"
  },
  {
    "id": "sk-86",
    "nomorUrut": 85.1,
    "nomorSK": "085.1  TAHUN 2026",
    "tanggal": "11 Mei 2026",
    "uraian": "SK Pendataan Sakernas Mei 2026",
    "subFungsi": "SOSIAL",
    "pdfUrl": "https://drive.google.com/file/d/1t2yYiFLB30I3MUUZdxKy_LZiLhUzAZqy/view?usp=sharing",
    "wordUrl": "https://docs.google.com/document/d/1-3aDpYQvI6UkLuO5vzDQ2mEqNH7_yMDr/edit?usp=sharing&ouid=108867984901028014832&rtpof=true&sd=true",
    "petugasHonor": "Upload"
  },
  {
    "id": "sk-87",
    "nomorUrut": 86,
    "nomorSK": "086 TAHUN 2026",
    "tanggal": "11 Mei 2026",
    "uraian": "SK TIM Pelaksana Sensus Ekonomi 2026 (Perubahan)",
    "subFungsi": "DISTRIBUSI",
    "pdfUrl": "https://drive.google.com/file/d/1W58yzyJ9fN9w13vsZ9hw2rsq14GHHjtb/view?usp=sharing",
    "wordUrl": "https://docs.google.com/document/d/19-aEEq77qoy-__2x39xRdpvMNmLMBXi9/edit?usp=sharing&ouid=108867984901028014832&rtpof=true&sd=true",
    "petugasHonor": "Upload"
  },
  {
    "id": "sk-88",
    "nomorUrut": 87,
    "nomorSK": "087 TAHUN 2026",
    "tanggal": "11 Mei 2026",
    "uraian": "SK TIM Sekretariat Sensus Ekonomi 2026 (Perubahan)",
    "subFungsi": "DISTRIBUSI",
    "pdfUrl": "https://drive.google.com/file/d/1PZwcf_OFPocPF-y4EPv32-mFnRZQTFLW/view?usp=sharing",
    "wordUrl": "https://docs.google.com/document/d/18wKijnWER2gcLSoyCUnuwenNVYNEqkRV/edit?usp=sharing&ouid=108867984901028014832&rtpof=true&sd=true",
    "petugasHonor": "Upload"
  },
  {
    "id": "sk-89",
    "nomorUrut": 88,
    "nomorSK": "088 TAHUN 2026",
    "tanggal": "01 Juni 2026",
    "uraian": "SK Pelatihan Petugas SE2026",
    "subFungsi": "DISTRIBUSI",
    "pdfUrl": "https://drive.google.com/file/d/1F-EL-TSTkw8XLuR7LjLpaG5hmmj460FK/view?usp=sharing",
    "wordUrl": "https://docs.google.com/document/d/1Ar53Ze6zzNLEpLBsPw9rnNlLVUI1UT0M/edit?usp=sharing&ouid=108867984901028014832&rtpof=true&sd=true",
    "petugasHonor": "Upload"
  },
  {
    "id": "sk-90",
    "nomorUrut": 89,
    "nomorSK": "089 TAHUN 2026",
    "tanggal": "01 Juni 2026",
    "uraian": "SK Pengajar Pelatihan Petugas SE2026",
    "subFungsi": "DISTRIBUSI",
    "pdfUrl": "https://drive.google.com/file/d/1cbsmq1kx0IVDFVwjurPyLYAWLdym_sAu/view?usp=sharing",
    "wordUrl": "https://docs.google.com/document/d/1aX8xx0hd6mbI4L-JtoRbdNxkuTLCxzMB/edit?usp=sharing&ouid=108867984901028014832&rtpof=true&sd=true",
    "petugasHonor": "Upload"
  },
  {
    "id": "sk-91",
    "nomorUrut": 90,
    "nomorSK": "090 TAHUN 2026",
    "tanggal": "01 Juni 2026",
    "uraian": "SK Transport Daerah Sulit SE2026",
    "subFungsi": "DISTRIBUSI",
    "pdfUrl": "https://drive.google.com/file/d/1e-kG0VypeN2kh1FaA55El-3adpwQqbjE/view?usp=sharing",
    "wordUrl": "https://docs.google.com/document/d/1IE9oTyYSkJoOig-kEDaq4z_vnnbhP-rQ/edit?usp=sharing&ouid=108867984901028014832&rtpof=true&sd=true",
    "petugasHonor": "Upload"
  },
  {
    "id": "sk-92",
    "nomorUrut": 91,
    "nomorSK": "091 TAHUN 2026",
    "tanggal": "01 Juni 2026",
    "uraian": "SK Pendataan Seruti Triwulan II 2026",
    "subFungsi": "SOSIAL",
    "pdfUrl": "https://drive.google.com/file/d/1rJ98PusVEEZEXCrq4gesA4tG8vgXoY5H/view?usp=sharing",
    "wordUrl": "https://docs.google.com/document/d/1MR8RkhpkFBMQEe3MeU8yH4iBYYg8cjz4/edit?usp=sharing&ouid=108867984901028014832&rtpof=true&sd=true",
    "petugasHonor": "Upload"
  },
  {
    "id": "sk-93",
    "nomorUrut": 92,
    "nomorSK": "092 TAHUN  2026",
    "tanggal": "12 Juni 2026",
    "uraian": "SK Petugas SE2026",
    "subFungsi": "DISTRIBUSI",
    "pdfUrl": "https://drive.google.com/file/d/1Be9aWcVtnIJ4Rs-gwDZpDYnqZyWb--cS/view?usp=sharing",
    "wordUrl": "https://docs.google.com/document/d/1DhhvF9-VGA3rHEwk7eW5b8ShqZRK26E5/edit?usp=sharing&ouid=108867984901028014832&rtpof=true&sd=true",
    "petugasHonor": "Upload"
  },
  {
    "id": "sk-94",
    "nomorUrut": 93,
    "nomorSK": "093 TAHUN 2026",
    "tanggal": "15 Juni 2026",
    "uraian": "SK Petugas SE2026 Perubahan Pertama",
    "subFungsi": "DISTRIBUSI",
    "pdfUrl": "https://drive.google.com/file/d/1a9zbiBC8EoYoUYlvF8hw0deZPEUFonAA/view?usp=sharing",
    "wordUrl": "https://docs.google.com/document/d/1JS2NTRFWgE6HDHVlZMCpdulq2Ms56_jK/edit?usp=sharing&ouid=108867984901028014832&rtpof=true&sd=true",
    "petugasHonor": "Upload"
  },
  {
    "id": "sk-95",
    "nomorUrut": 94,
    "nomorSK": "094 TAHUN 2026",
    "tanggal": "01 Juli 2026",
    "uraian": "SK Petugas SE2026 Perubahan Kedua",
    "subFungsi": "DISTRIBUSI",
    "pdfUrl": "https://drive.google.com/file/d/11Q6iHIiw93npocSnt731EslCGRcHqZI9/view?usp=sharing",
    "wordUrl": "https://docs.google.com/document/d/1668dyOwCU6aFzQhbaIZsdwFVKqhRoCAf/edit?usp=sharing&ouid=108867984901028014832&rtpof=true&sd=true",
    "petugasHonor": "Upload"
  },
  {
    "id": "sk-96",
    "nomorUrut": 95,
    "nomorSK": "095 TAHUN 2026",
    "tanggal": "01 Juli 2026",
    "uraian": "SK Petugas SPUNP 2026 Perubahan",
    "subFungsi": "DISTRIBUSI",
    "wordUrl": "https://docs.google.com/document/d/1skxruY5vuYNzIRQNZTT9MGDHFh1Y8XzV/edit?usp=sharing&ouid=108867984901028014832&rtpof=true&sd=true",
    "petugasHonor": "Upload"
  },
  {
    "id": "sk-97",
    "nomorUrut": 96,
    "nomorSK": "096 TAHUN 2026",
    "tanggal": "10 Juli 2026",
    "uraian": "SK Pendataan dan Pemutakhiran Sakernas Agustus 2026",
    "subFungsi": "SOSIAL",
    "wordUrl": "https://docs.google.com/document/d/1miu08BsejdaVGLfEp_lZGk49LPVOr372/edit?usp=sharing&ouid=108867984901028014832&rtpof=true&sd=true",
    "petugasHonor": "Upload"
  },
  {
    "id": "sk-98",
    "nomorUrut": 97,
    "nomorSK": "097 TAHUN 2026",
    "tanggal": "10 Juli 2026",
    "uraian": "SK Pengajar Sakernas Agustus 2026",
    "subFungsi": "SOSIAL",
    "wordUrl": "https://docs.google.com/document/d/1NHY-LirZbAE_c5_OXUAd6lcPmQHCR-BA/edit?usp=sharing&ouid=108867984901028014832&rtpof=true&sd=true",
    "petugasHonor": "Upload"
  },
  {
    "id": "sk-99",
    "nomorUrut": 98,
    "nomorSK": "098 TAHUN 2026",
    "tanggal": "10 Juli 2026",
    "uraian": "SK Petugas Pengumpulan Data Survei Harga Kemahalan Konstruksi 2026",
    "subFungsi": "DISTRIBUSI",
    "wordUrl": "https://docs.google.com/document/d/1M21sOU2fML63uiFYTRGRZ0YiUHV2xuBy/edit?usp=sharing&ouid=108867984901028014832&rtpof=true&sd=truev",
    "petugasHonor": "Upload"
  },
  {
    "id": "sk-100",
    "nomorUrut": 99,
    "nomorSK": "099 TAHUN 2026",
    "tanggal": "10 Juli 2026",
    "uraian": "SK Tim Pelaksana KSA 2026 Perubahan",
    "subFungsi": "PRODUKSI",
    "pdfUrl": "https://drive.google.com/file/d/1Uur0fTr5Fl0KYCQbEJg2i2rhkB0FMFwY/view?usp=sharing",
    "wordUrl": "https://docs.google.com/document/d/1YqU7eJjB-oJ5-0GzJKk_Q3ZAtKdezKGG/edit?usp=sharing&ouid=108867984901028014832&rtpof=true&sd=true",
    "petugasHonor": "Upload"
  },
  {
    "id": "sk-101",
    "nomorUrut": 100,
    "nomorSK": "100 TAHUN 2026",
    "tanggal": "05 Agustus 2026",
    "uraian": "SK Perubahan Pertama Pengelola Keuangan",
    "subFungsi": "UMUM",
    "pdfUrl": "https://drive.google.com/file/d/1r7cPUkNIiNoj-g7FmAOnh0PaY7THI3aF/view?usp=sharing",
    "wordUrl": "https://docs.google.com/document/d/1Ws09bVnBdzAM_p4tIv9XfU9I87rcOrVX/edit?usp=sharing&ouid=108867984901028014832&rtpof=true&sd=true",
    "petugasHonor": "Upload"
  },
  {
    "id": "sk-102",
    "nomorUrut": 101,
    "nomorSK": "101 TAHUN 2026",
    "tanggal": "05 Agustus 2026",
    "uraian": "SK Hukuman Disiplin Pegawai",
    "subFungsi": "UMUM",
    "petugasHonor": "Upload"
  },
  {
    "id": "sk-103",
    "nomorUrut": 102,
    "nomorSK": "102 TAHUN 2026",
    "tanggal": "20 Agustus 2026",
    "uraian": "SK Penetapat IST",
    "subFungsi": "UMUM",
    "pdfUrl": "https://drive.google.com/file/d/164MS33_vRDmbFoVdJegvlxo5KMUWDcAP/view?usp=sharing",
    "wordUrl": "https://docs.google.com/document/d/1GNkFjpU8F3wY7BQilJZLstWJGW3DShK8/edit?usp=sharing&ouid=108867984901028014832&rtpof=true&sd=true",
    "petugasHonor": "Upload"
  },
  {
    "id": "sk-104",
    "nomorUrut": 103,
    "nomorSK": "103 TAHUN 2026",
    "tanggal": "20 Agustus 2026",
    "uraian": "SK Petugas SKNP Tahun 2026",
    "subFungsi": "NERWILIS",
    "wordUrl": "https://docs.google.com/document/d/182mUscJlLwrC3kI40vucXSZULFai1Pc2/edit?usp=sharing&ouid=108867984901028014832&rtpof=true&sd=true",
    "petugasHonor": "Upload"
  },
  {
    "id": "sk-105",
    "nomorUrut": 104,
    "nomorSK": "104 TAHUN 2026",
    "tanggal": "20 Agustus 2026",
    "uraian": "SK Pengajar SKNP Tahun 2026",
    "subFungsi": "NERWILIS",
    "wordUrl": "https://docs.google.com/document/d/1l2cFiFgLczW3H9b4Yk9s0DSX7UaCkvb7/edit?usp=sharing&ouid=108867984901028014832&rtpof=true&sd=true",
    "petugasHonor": "Upload"
  },
  {
    "id": "sk-106",
    "nomorUrut": 105,
    "nomorSK": "105 TAHUN 2026",
    "tanggal": "20 Agustus 2026",
    "uraian": "SK Pendataan SKNP Tahun 2026",
    "subFungsi": "NERWILIS",
    "wordUrl": "https://docs.google.com/document/d/1AZAiGpyCA0aFXmJzMudFnYWvMK9M2Hvc/edit?usp=sharing&ouid=108867984901028014832&rtpof=true&sd=true",
    "petugasHonor": "Upload"
  },
  {
    "id": "sk-107",
    "nomorUrut": 106,
    "nomorSK": "106 TAHUN 2026",
    "tanggal": "20 Agustus 2026",
    "uraian": "SK Pelatihan Petugas SKP Tahun 2026",
    "subFungsi": "PRODUKSI",
    "wordUrl": "https://docs.google.com/document/d/1FWCPMrrltiVq6318sk9YjNw4W3rH1qhA/edit?usp=sharing&ouid=108867984901028014832&rtpof=true&sd=true",
    "petugasHonor": "Upload"
  },
  {
    "id": "sk-108",
    "nomorUrut": 107,
    "nomorSK": "107 TAHUN 2026",
    "tanggal": "20 Agustus 2026",
    "uraian": "SK Pengajar SKP Tahun 2026",
    "subFungsi": "PRODUKSI",
    "wordUrl": "https://docs.google.com/document/d/1M1sPj3DK8hMvC1f6-eurcTdEz74_1Fcj/edit?usp=sharing&ouid=108867984901028014832&rtpof=true&sd=true",
    "petugasHonor": "Upload"
  },
  {
    "id": "sk-109",
    "nomorUrut": 108,
    "nomorSK": "108 TAHUN 2026",
    "tanggal": "20 Agustus 2026",
    "uraian": "SK Petugas SKP Tahun 2026",
    "subFungsi": "PRODUKSI",
    "wordUrl": "https://docs.google.com/document/d/1ccd3MzBzQz0nI8jrQQRWcCNjB54QQh_r/edit?usp=sharing&ouid=108867984901028014832&rtpof=true&sd=true",
    "petugasHonor": "Upload"
  },
  {
    "id": "sk-110",
    "nomorUrut": 109,
    "nomorSK": "109 TAHUN 2026",
    "tanggal": "02 September 2026",
    "uraian": "SK Pelatihan Petugas SKSPPI Tahun 2026",
    "subFungsi": "DISTRIBUSI",
    "wordUrl": "https://docs.google.com/document/d/14YtA-Ti3FY3PRIbNevoAxBd4_Gth8vm2/edit?usp=sharing&ouid=108867984901028014832&rtpof=true&sd=true",
    "petugasHonor": "Upload"
  },
  {
    "id": "sk-111",
    "nomorUrut": 110,
    "nomorSK": "110 TAHUN 2026",
    "tanggal": "02 September 2026",
    "uraian": "SK Pengajar Pelatihan Petugas SKSPPI Tahun 2026",
    "subFungsi": "DISTRIBUSI",
    "wordUrl": "https://docs.google.com/document/d/1u7B4mt5UldPrjrjdpydUBcZnCuOwggMB/edit?usp=sharing&ouid=108867984901028014832&rtpof=true&sd=true",
    "petugasHonor": "Upload"
  },
  {
    "id": "sk-112",
    "nomorUrut": 111,
    "nomorSK": "111 TAHUN 2026",
    "tanggal": "02 September 2026",
    "uraian": "SK Pendataan Petugas SKSPPI Tahun 2026",
    "subFungsi": "DISTRIBUSI",
    "wordUrl": "https://docs.google.com/document/d/1Shr58I4DG_mWO4lCK-3DHIC9waiPJZEH/edit?usp=sharing&ouid=108867984901028014832&rtpof=true&sd=true",
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
