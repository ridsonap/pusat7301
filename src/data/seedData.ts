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
    "kode": "VS.330",
    "kategori": "Statistik Distribusi",
    "uraian": "Survei Industri Mikro Kecil (IMK) & SKTNP"
  },
  {
    "kode": "PL.300",
    "kategori": "Pengadaan & BMN",
    "uraian": "Pengadaan Barang dan Jasa / SPMK / Kontrak PPK"
  },
  {
    "kode": "KU.320",
    "kategori": "Keuangan",
    "uraian": "Surat Permintaan Pembayaran / Belanja Bahan & Barang"
  },
  {
    "kode": "SS.330",
    "kategori": "Sensus Ekonomi",
    "uraian": "Statistik Lintas Sektor / SE2026"
  },
  {
    "kode": "VS.340",
    "kategori": "Statistik Distribusi",
    "uraian": "Statistik Perdagangan & Transportasi / Ekspor Impor"
  },
  {
    "kode": "VS.220",
    "kategori": "Statistik Sosial",
    "uraian": "Survei Biaya Hidup (SBH) / Ketenagakerjaan"
  },
  {
    "kode": "KU.350",
    "kategori": "Keuangan",
    "uraian": "Pembayaran Tukin / Gaji Pegawai & Honorer"
  },
  {
    "kode": "KA.750",
    "kategori": "Komunikasi",
    "uraian": "Aliansi Strategis & Kerja Sama Kelembagaan"
  },
  {
    "kode": "SS.360",
    "kategori": "Nerwilis",
    "uraian": "Konsolidasi Neraca Wilayah & Analisis Lintas Sektor"
  },
  {
    "kode": "KS.000",
    "kategori": "Kerja Sama Statistik",
    "uraian": "Permintaan Data Daerah / Selayar Dalam Angka"
  },
  {
    "kode": "KS.200",
    "kategori": "Kerja Sama Statistik",
    "uraian": "Kerja Sama Dinas / Pemkab Kepulauan Selayar"
  },
  {
    "kode": "KU.340",
    "kategori": "Keuangan",
    "uraian": "Perjalanan Dinas & Transport Lokal Petugas"
  },
  {
    "kode": "KU.310",
    "kategori": "Keuangan",
    "uraian": "Pengelolaan Belanja Operasional Perkantoran"
  },
  {
    "kode": "VS.350",
    "kategori": "Statistik Distribusi",
    "uraian": "Statistik Pariwisata, Hotel, & Restoran"
  },
  {
    "kode": "PL.530",
    "kategori": "Pengadaan & BMN",
    "uraian": "Pengawasan dan Pengendalian BMN (Wasdal)"
  },
  {
    "kode": "KU.300",
    "kategori": "Keuangan",
    "uraian": "Administrasi Pelaksanaan Anggaran DIPA"
  },
  {
    "kode": "TS.160",
    "kategori": "Teknologi Informasi",
    "uraian": "Infrastruktur Jaringan & Pengolahan Data"
  },
  {
    "kode": "SS.220",
    "kategori": "Statistik Sensus",
    "uraian": "Pemutakhiran Peta Wilkerstat & Kerangka Spasial"
  },
  {
    "kode": "KU.230",
    "kategori": "Keuangan",
    "uraian": "Pengaktifan Pengguna OTP Sakti & KPPN"
  },
  {
    "kode": "PR.710",
    "kategori": "Perencanaan",
    "uraian": "Rapat Koordinasi, Evaluasi, dan Undangan Rutin"
  },
  {
    "kode": "KP.630.NN",
    "kategori": "Kepegawaian",
    "uraian": "Piagam Penghargaan & Pegawai Terbaik Triwulanan"
  },
  {
    "kode": "VS.110",
    "kategori": "Statistik Sosial",
    "uraian": "Survei Penilaian Tingkat Literasi Keuangan (SNLIK)"
  },
  {
    "kode": "VS.210",
    "kategori": "Statistik Sosial",
    "uraian": "Survei Angkatan Kerja Nasional (Sakernas)"
  },
  {
    "kode": "VS.120",
    "kategori": "Statistik Sosial",
    "uraian": "Survei Sosial Ekonomi Nasional (Susenas)"
  },
  {
    "kode": "VS.410",
    "kategori": "Statistik Produksi",
    "uraian": "Survei Ubinan & Kerangka Sampel Area (KSA)"
  },
  {
    "kode": "HM.340",
    "kategori": "Hubungan Masyarakat",
    "uraian": "Peringatan Hari Statistik Nasional & Family Gathering"
  },
  {
    "kode": "PR.100",
    "kategori": "Perencanaan",
    "uraian": "Penyusunan Rencana Kerja dan Anggaran (RKA-K/L)"
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
    "uraian": "Pemberitaan, Publikasi, dan Rilis BRS"
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
    "id": "su-6.1",
    "nomorUrut": 6.1,
    "tanggal": "2 Januari 2026",
    "jenisSurat": "Internal",
    "tujuan": "BPS Provinsi Sulawesi Selatan",
    "kodeKlasifikasi": "VS.110",
    "nomorSurat": "B-6.1/7301/VS.110/2026",
    "perihal": "Surat Permohonan Penambahan Petugas Sakernas Feb 2026"
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
    "id": "su-8.1",
    "nomorUrut": 8.1,
    "tanggal": "5 Januari 2026",
    "jenisSurat": "Internal",
    "tujuan": "Pegawai BPS Kab. Kepulauan Selayar",
    "kodeKlasifikasi": "KP.630.NN",
    "nomorSurat": "B-8.1/7301/KP.630.NN/2026",
    "perihal": "Sertifikat Pegawai Terbaik Trw. IV 2025"
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
  },
  {
    "id": "su-28",
    "nomorUrut": 28,
    "tanggal": "7 Januari 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "PT Pegadaian",
    "kodeKlasifikasi": "KS.000",
    "nomorSurat": "B-28/7301/KS.000/2026",
    "perihal": "Permintaan Data untuk Publikasi Selayar Dalam Angka 2026 dan Penyusunan Pertumbuhan Ekonomi 2025"
  },
  {
    "id": "su-29",
    "nomorUrut": 29,
    "tanggal": "9 Januari 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "KPPN Benteng",
    "kodeKlasifikasi": "KU.230",
    "nomorSurat": "B-29/7301/KU.230/2026",
    "perihal": "Surat  Dukungan implementasi digitalisasi pembayaran dalam pelaksanaan APBN"
  },
  {
    "id": "su-30",
    "nomorUrut": 30,
    "tanggal": "9 Januari 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "KPPN Benteng",
    "kodeKlasifikasi": "KU.230",
    "nomorSurat": "B-30/7301/KU.230/2026",
    "perihal": "Surat menyelesaikan rekonsiliasi Laporan Keuangan Tahun Anggaran 2025"
  },
  {
    "id": "su-31",
    "nomorUrut": 31,
    "tanggal": "9 Januari 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "KPPN Benteng",
    "kodeKlasifikasi": "KU.230",
    "nomorSurat": "B-31/7301/KU.230/2026",
    "perihal": "Pemberitahuan Tidak Terdapat Penggantian Pejabatan Perbendaharaan Tahun Anggaran 2026"
  },
  {
    "id": "su-32",
    "nomorUrut": 32,
    "tanggal": "9 Januari 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "KPPN Benteng",
    "kodeKlasifikasi": "KU.230",
    "nomorSurat": "B-32/7301/KU.230/2026",
    "perihal": "Permohonan Persetujuan UP Kartu Kredit Pemerintah"
  },
  {
    "id": "su-33",
    "nomorUrut": 33,
    "tanggal": "9 Januari 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "KPPN Benteng",
    "kodeKlasifikasi": "Ku.230",
    "nomorSurat": "B-33/7301/Ku.230/2026",
    "perihal": "SURAT PERNYATAAN UANG PERSEDIAAN"
  },
  {
    "id": "su-34",
    "nomorUrut": 34,
    "tanggal": "9 Januari 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "BPS Provinsi",
    "kodeKlasifikasi": "PL.530",
    "nomorSurat": "B-34/7301/PL.530/2026",
    "perihal": "Surat Pengantar Wasdal BMN Semester II dan Tahunan 2025"
  },
  {
    "id": "su-35",
    "nomorUrut": 35,
    "tanggal": "9 Januari 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "BPS Provinsi",
    "kodeKlasifikasi": "VS.110",
    "nomorSurat": "B-35/7301/VS.110/2026",
    "perihal": "Surat Permohonan Pemerikasaan Jaringan Internet Kantor BPS Kab. Kepulauan Selayar"
  },
  {
    "id": "su-35.1",
    "nomorUrut": 35.1,
    "tanggal": "9 Januari 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "BPS Provinsi",
    "kodeKlasifikasi": "TS.240",
    "nomorSurat": "B-35.1/7301/TS.240/2026",
    "perihal": "BA pemilihan CA 2026"
  },
  {
    "id": "su-36",
    "nomorUrut": 36,
    "tanggal": "12 Januari 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "Petugas Sakernas Februari 2026",
    "kodeKlasifikasi": "VS.220",
    "nomorSurat": "B-36/7301/VS.220/2026",
    "perihal": "Undangan Pelatihan Petugas Sakernas Februari 2026"
  },
  {
    "id": "su-37",
    "nomorUrut": 37,
    "tanggal": "12 Januari 2026",
    "jenisSurat": "Internal",
    "tujuan": "Nola Ramasentia",
    "kodeKlasifikasi": "KP.370",
    "nomorSurat": "B-37/7301/KP.370/2026",
    "perihal": "Pemanggilan pertama penjelasan ketidak hadiran pegawai"
  },
  {
    "id": "su-38",
    "nomorUrut": 38,
    "tanggal": "12 Januari 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "Dinas Pertanian",
    "kodeKlasifikasi": "VS.330",
    "nomorSurat": "B-38/7301/VS.330/2026",
    "perihal": "Permintaan Data RPH Tahun 2026"
  },
  {
    "id": "su-38.1",
    "nomorUrut": 38.1,
    "tanggal": "13 Januari 2026",
    "jenisSurat": "Internal",
    "tujuan": "Seluruh pegawai",
    "kodeKlasifikasi": "PR.220",
    "nomorSurat": "B-38.1/7301/PR.220/2026",
    "perihal": "Penetapan target PK 2026"
  },
  {
    "id": "su-39",
    "nomorUrut": 39,
    "tanggal": "14 Januari 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "DJPB",
    "kodeKlasifikasi": "KP.320",
    "nomorSurat": "B-39/7301/KP.320/2026",
    "perihal": "Usulan Nama Calon Peserta Penilaian Kompetensi PPK dan PPSPM"
  },
  {
    "id": "su-40",
    "nomorUrut": 40,
    "tanggal": "14 Januari 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "PT. Tripper Nature",
    "kodeKlasifikasi": "VS.330",
    "nomorSurat": "B-40/7301/VS.330/2026",
    "perihal": "Permintaan Data IBS Triwulan IV 2025"
  },
  {
    "id": "su-41",
    "nomorUrut": 41,
    "tanggal": "15 Januari 2026",
    "jenisSurat": "Internal",
    "tujuan": "Pelaksana Pelayanan Publik BPS Kabupaten Kepulauan Selayar",
    "kodeKlasifikasi": "OT.100",
    "nomorSurat": "B-41/7301/OT.100/2026",
    "perihal": "Rekomendasi Perbaikan Pelayanan Publik"
  },
  {
    "id": "su-42",
    "nomorUrut": 42,
    "tanggal": "19 Januari 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "Mitra",
    "kodeKlasifikasi": "VS.220",
    "nomorSurat": "B-42/7301/VS.220/2026",
    "perihal": "Pelatihan petugas KSA dan Ubinan 2026"
  },
  {
    "id": "su-43",
    "nomorUrut": 43,
    "tanggal": "19 Januari 2026",
    "jenisSurat": "Internal",
    "tujuan": "BPS Provinsi Sul-Sel",
    "kodeKlasifikasi": "KP.510",
    "nomorSurat": "B-43/7301/KP.510/2026",
    "perihal": "Penundaan Pindah Pegawai Dama"
  },
  {
    "id": "su-44",
    "nomorUrut": 44,
    "tanggal": "19 Januari 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "BRI Cabang",
    "kodeKlasifikasi": "Ku.230",
    "nomorSurat": "B-44/7301/Ku.230/2026",
    "perihal": "Permohonan Pembukaan Blokir"
  },
  {
    "id": "su-45",
    "nomorUrut": 45,
    "tanggal": "21 Januari 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "Dinas PU",
    "kodeKlasifikasi": "VS.330",
    "nomorSurat": "B-45/7301/VS.330/2026",
    "perihal": "Permintaan Data Panjangan Jalan"
  },
  {
    "id": "su-46",
    "nomorUrut": 46,
    "tanggal": "21 Januari 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "Dinas PU",
    "kodeKlasifikasi": "VS.330",
    "nomorSurat": "B-46/7301/VS.330/2026",
    "perihal": "Permintaan Data BoQ"
  },
  {
    "id": "su-47",
    "nomorUrut": 47,
    "tanggal": "21 Januari 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "UPT Kesatuan Pengelolaan Hutan",
    "kodeKlasifikasi": "KS.000",
    "nomorSurat": "B-47/7301/KS.000/2026",
    "perihal": "Permintaan Data untuk Publikasi Selayar Dalam Angka 2026 dan Penyusunan Pertumbuhan Ekonomi 2025"
  },
  {
    "id": "su-48",
    "nomorUrut": 48,
    "tanggal": "21 Januari 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "Direktur PMSS BPS RI",
    "kodeKlasifikasi": "VS.110",
    "nomorSurat": "B-48/7301/VS.110/2026",
    "perihal": "Usulan Penggantian Sampel Blok Sensus IMK Triwulanan 2026"
  },
  {
    "id": "su-48.1",
    "nomorUrut": 48.1,
    "tanggal": "22 Januari 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "Mahsiswa Magang UNHAS 2026",
    "kodeKlasifikasi": "KP.630.NN",
    "nomorSurat": "B-48.1/7301/KP.630.NN/2026",
    "perihal": "Sertifikat Mahasiswa Magang UNHAS 2026 (Ananda Elisa Putri)"
  },
  {
    "id": "su-48.2",
    "nomorUrut": 48.2,
    "tanggal": "22 Januari 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "Mahsiswa Magang UNHAS 2026",
    "kodeKlasifikasi": "KP.630.NN",
    "nomorSurat": "B-48.2/7301/KP.630.NN/2026",
    "perihal": "Sertifikat Mahasiswa Magang UNHAS 2026 (Nur Azizah Elfirah Pasya)"
  },
  {
    "id": "su-48.3",
    "nomorUrut": 48.3,
    "tanggal": "22 Januari 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "Mahsiswa Magang UNHAS 2026",
    "kodeKlasifikasi": "KP.630.NN",
    "nomorSurat": "B-48.3/7301/KP.630.NN/2026",
    "perihal": "Sertifikat Mahasiswa Magang UNHAS 2026 (Andi Febriyanti)"
  },
  {
    "id": "su-49",
    "nomorUrut": 49,
    "tanggal": "23 Januari 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "Kepala BPS Provinsi Sulawesi Selatan",
    "kodeKlasifikasi": "KS.200",
    "nomorSurat": "B-49/7301/KS.200/2026",
    "perihal": "Surat Persetujuan Naskah Siap Rilis Analisis Hasil SKD 2025"
  },
  {
    "id": "su-50",
    "nomorUrut": 50,
    "tanggal": "26 Januari 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "Dinas Penanaman Modal dan PTSP",
    "kodeKlasifikasi": "VS.330",
    "nomorSurat": "B-50/7301/VS.330/2026",
    "perihal": "Permintaan data daftar nama perusahaan konstruksi aktif tahun 2025"
  },
  {
    "id": "su-50.1",
    "nomorUrut": 50.1,
    "tanggal": "26 Januari 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "Bagian Pengadaan Barang Jasa Selayar",
    "kodeKlasifikasi": "VS.330",
    "nomorSurat": "B-50.1/7301/VS.330/2026",
    "perihal": "Permintaan data daftar nama perusahaan konstruksi aktif tahun 2025"
  },
  {
    "id": "su-50.2",
    "nomorUrut": 50.2,
    "tanggal": "26 Januari 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "Dinas PU",
    "kodeKlasifikasi": "VS.330",
    "nomorSurat": "B-50.2/7301/VS.330/2026",
    "perihal": "Permintaan data daftar nama perusahaan konstruksi aktif tahun 2025"
  },
  {
    "id": "su-50.3",
    "nomorUrut": 50.3,
    "tanggal": "26 Januari 2026",
    "jenisSurat": "Internal",
    "tujuan": "Pegawai BPS Kab. Kepulauan Selayar",
    "kodeKlasifikasi": "PR.220",
    "nomorSurat": "B-50.3/7301/PR.220/2026",
    "perihal": "Penetapan Reviu target PK 2026"
  },
  {
    "id": "su-51",
    "nomorUrut": 51,
    "tanggal": "27 Januari 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "Kantor Wilayah DJPb Sulawesi Selatan",
    "kodeKlasifikasi": "PR-440",
    "nomorSurat": "B-51/7301/PR-440/2026",
    "perihal": "Permohonan Usulan Revisi DIPA Mekanisme Pemuktahiran KPA Tahun Anggaran 2026"
  },
  {
    "id": "su-52",
    "nomorUrut": 52,
    "tanggal": "27 Januari 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "PT ALCOM",
    "kodeKlasifikasi": "VS.330",
    "nomorSurat": "B-52/7301/VS.330/2026",
    "perihal": "Permintaan data dukung penghitungan PDRB"
  },
  {
    "id": "su-53",
    "nomorUrut": 53,
    "tanggal": "27 Januari 2026",
    "jenisSurat": "Internal",
    "tujuan": "Pegawai BPS Kab. Kepulauan Selayar",
    "kodeKlasifikasi": "PR.710",
    "nomorSurat": "B-53/7301/PR.710/2026",
    "perihal": "Undangan Rapat Pengisian Manajemen Resiko Tahun 2026"
  },
  {
    "id": "su-54",
    "nomorUrut": 54,
    "tanggal": "29 Januari 2026",
    "jenisSurat": "Internal",
    "tujuan": "Ketua Tim",
    "kodeKlasifikasi": "HM.310",
    "nomorSurat": "B-54/7301/HM.310/2026",
    "perihal": "Undangan rapat koordinasi ketua tim dengan wakil bupati"
  },
  {
    "id": "su-55",
    "nomorUrut": 55,
    "tanggal": "30 Januari 2026",
    "jenisSurat": "Internal",
    "tujuan": "Nola Ramasentia",
    "kodeKlasifikasi": "KP.370",
    "nomorSurat": "R-55/7301/KP.370/2026",
    "perihal": "Pemanggilan pertama penjelasan ketidakhadiran pegawai"
  },
  {
    "id": "su-56",
    "nomorUrut": 56,
    "tanggal": "30 Januari 2026",
    "jenisSurat": "Internal",
    "tujuan": "BPS Selayar",
    "kodeKlasifikasi": "KU.300",
    "nomorSurat": "B-56/7301/KU.300/2026",
    "perihal": "Permintaan Kerja Lembur Validasi Pemuktahiran Susenas Maret dan Seruti Triwulan I Tahun 2026"
  },
  {
    "id": "su-57",
    "nomorUrut": 57,
    "tanggal": "30 Januari 2026",
    "jenisSurat": "Internal",
    "tujuan": "Tim Pengolahan Susenas Maret 2026",
    "kodeKlasifikasi": "KU.300",
    "nomorSurat": "B-57/7301/KU.300/2026",
    "perihal": "SPKL Lembur Validasi Pemuktahiran Susenas Maret dan Seruti Triwulan I Tahun 2026"
  },
  {
    "id": "su-58",
    "nomorUrut": 58,
    "tanggal": "2 Februari 2026",
    "jenisSurat": "Internal",
    "tujuan": "Pegawai BPS Kab. Kepulauan Selayar",
    "kodeKlasifikasi": "KP.330",
    "nomorSurat": "B-58/7301/KP.330/2026",
    "perihal": "Mekanisme Pemerian Reward Kinerja Pegawai 2026"
  },
  {
    "id": "su-58",
    "nomorUrut": 58,
    "tanggal": "2 Februari 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "Kantor Wilayah DJPb Sulawesi Selatan",
    "kodeKlasifikasi": "PR-440",
    "nomorSurat": "B-58/7301/PR-440/2026",
    "perihal": "Permohonan Usulan Revisi Halaman III DIPA Triuwlan I Tahun Anggaran 2026"
  },
  {
    "id": "su-59",
    "nomorUrut": 59,
    "tanggal": "2 Februari 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "Kantor Wilayah DJPb Sulawesi Selatan",
    "kodeKlasifikasi": "PR-440",
    "nomorSurat": "B-59/7301/PR-440/2026",
    "perihal": "SPTJM Revisi Halaman III DIPA Triwulan I Tahun 2026"
  },
  {
    "id": "su-60",
    "nomorUrut": 60,
    "tanggal": "4 Februari 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "BPK",
    "kodeKlasifikasi": "PW.110",
    "nomorSurat": "B-60/7301/PW.110/2026",
    "perihal": "Surat pernyataan kepala permindok"
  },
  {
    "id": "su-61",
    "nomorUrut": 61,
    "tanggal": "4 Februari 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "Kepala Kantor UPT Pelabuhan Pengumpan Selayar",
    "kodeKlasifikasi": "VS.330",
    "nomorSurat": "B-61/7301/VS.330/2026",
    "perihal": "Permintaan Data Pegawai"
  },
  {
    "id": "su-62",
    "nomorUrut": 62,
    "tanggal": "4 Februari 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "Koordinator Satuan Pelayanan Pelabuhan Penyebrangan Pamatata",
    "kodeKlasifikasi": "VS.330",
    "nomorSurat": "B-62/7301/VS.330/2026",
    "perihal": "Permintaan Data Pegawai"
  },
  {
    "id": "su-63",
    "nomorUrut": 63,
    "tanggal": "4 Februari 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "Kepala Kantor Pelabuhan Kelas III Selayar",
    "kodeKlasifikasi": "VS.330",
    "nomorSurat": "B-63/7301/VS.330/2026",
    "perihal": "Permintaan Data Pegawai"
  },
  {
    "id": "su-64",
    "nomorUrut": 64,
    "tanggal": "4 Februari 2026",
    "jenisSurat": "Internal",
    "tujuan": "BPS Provinsi Sulawesi Selatan",
    "kodeKlasifikasi": "VS.320",
    "nomorSurat": "B-64/7301/VS.320/2026",
    "perihal": "Permintaan perbaikan isian pemutakhiran SNLIK"
  },
  {
    "id": "su-65",
    "nomorUrut": 65,
    "tanggal": "5 Februari 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "KPPN Benteng",
    "kodeKlasifikasi": "KP.630",
    "nomorSurat": "B-65/7301/KP.630/2026",
    "perihal": "KGB Mukhtar"
  },
  {
    "id": "su-65.1",
    "nomorUrut": 65.1,
    "tanggal": "5 Februari 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "KPPN Benteng",
    "kodeKlasifikasi": "KP.630",
    "nomorSurat": "B-65.1/7301/KP.630/2026",
    "perihal": "KGB Ahmad Musawwir"
  },
  {
    "id": "su-66",
    "nomorUrut": 66,
    "tanggal": "5 Februari 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "Dinas Pariwisata",
    "kodeKlasifikasi": "VS.330",
    "nomorSurat": "B-66/7301/VS.330/2026",
    "perihal": "Permintaan Data Hotel, Restoran, ODTW"
  },
  {
    "id": "su-67",
    "nomorUrut": 67,
    "tanggal": "5 Februari 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "Dinas Penanaman Modal dan PTSP",
    "kodeKlasifikasi": "VS.330",
    "nomorSurat": "B-67/7301/VS.330/2026",
    "perihal": "Permintaan data daftar nama usaha aktif tahun 2025"
  },
  {
    "id": "su-68",
    "nomorUrut": 68,
    "tanggal": "9 Februari 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "Camat Benteng",
    "kodeKlasifikasi": "TS.160",
    "nomorSurat": "B-68/7301/TS.160/2026",
    "perihal": "Permintan Kelurahan Cinta Statistik 2026"
  },
  {
    "id": "su-69",
    "nomorUrut": 69,
    "tanggal": "9 Februari 2026",
    "jenisSurat": "Internal",
    "tujuan": "Pegawai BPS Kab. Kepulauan Selayar",
    "kodeKlasifikasi": "PR.710",
    "nomorSurat": "B-69/7301/PR.710/2026",
    "perihal": "Undangan Rapat Rutin Bulan Februari Tahun 2026"
  },
  {
    "id": "su-70",
    "nomorUrut": 70,
    "tanggal": "9 Februari 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "Mitra",
    "kodeKlasifikasi": "VS.190",
    "nomorSurat": "B-70/7301/VS.190/2026",
    "perihal": "Undangan Rapat Evaluasi Daerah BPS Kabupaten Kepulauan Selayar"
  },
  {
    "id": "su-71",
    "nomorUrut": 71,
    "tanggal": "10 Februari 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "Surat Pengantar BAST HPJ",
    "kodeKlasifikasi": "PL.530",
    "nomorSurat": "B-71/7301/PL.530/2026",
    "perihal": "BAST HPJ"
  },
  {
    "id": "su-72",
    "nomorUrut": 72,
    "tanggal": "11 Februari 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "BPS Provinsi Sulawesi Selatan",
    "kodeKlasifikasi": "KU.520",
    "nomorSurat": "B-72/7301/KU.520/2026",
    "perihal": "Pengantar LBP TA 2025 Unaudited Satker"
  },
  {
    "id": "su-73",
    "nomorUrut": 73,
    "tanggal": "11 Februari 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "Kepala Dinas Kominfo-SP Kabupaten Kepulauan Selayar",
    "kodeKlasifikasi": "KS.200",
    "nomorSurat": "B-73/7301/KS.200/2026",
    "perihal": "FGD Penyusunan Publikasi Kabupaten Kepulauan Selayar Dalam Angka Tahun 2026 dan Review Standar Pelayanan BPS Kabupaten Kepulauan Selayar"
  },
  {
    "id": "su-73.1",
    "nomorUrut": 73.1,
    "tanggal": "13 Februari 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "BPS Provinsi Sulawesi Selatan",
    "kodeKlasifikasi": "VS.100",
    "nomorSurat": "B-73.1/7301/VS.100/2026",
    "perihal": "Surat Pernyataan NON DISCLOSURE AGREEMENT (NDA)"
  },
  {
    "id": "su-73.2",
    "nomorUrut": 73.2,
    "tanggal": "13 Februari 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "Mitra",
    "kodeKlasifikasi": "VS.220",
    "nomorSurat": "B-73.2/7301/VS.220/2026",
    "perihal": "Undangan Pelatihan Petugas SHPB 2026"
  },
  {
    "id": "su-74",
    "nomorUrut": 74,
    "tanggal": "18 Februari 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "Mitra",
    "kodeKlasifikasi": "VS.220",
    "nomorSurat": "B-74/7301/VS.220/2026",
    "perihal": "Undangan Pelatihan Petugas VIP Horti 2026"
  },
  {
    "id": "su-75",
    "nomorUrut": 75,
    "tanggal": "18 Februari 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "Kepala Pusdiklat Anggaran dan Perbendaharaan",
    "kodeKlasifikasi": "KP.300",
    "nomorSurat": "B-75/7301/KP.300/2026",
    "perihal": "Pembatalan Pendaftaran PPJ PPK Tahun 2026"
  },
  {
    "id": "su-76",
    "nomorUrut": 76,
    "tanggal": "19 Februari 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "KPPN Benteng",
    "kodeKlasifikasi": "KU.520",
    "nomorSurat": "B-76/7301/KU.520/2026",
    "perihal": "Surat Pengantar Laporan Keuangan Unaudited TA 2025"
  },
  {
    "id": "su-77",
    "nomorUrut": 77,
    "tanggal": "19 Februari 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "Mitra",
    "kodeKlasifikasi": "VS.220",
    "nomorSurat": "B-77/7301/VS.220/2026",
    "perihal": "Undangan Pelatihan Petugas Komstrat 2026"
  },
  {
    "id": "su-78",
    "nomorUrut": 78,
    "tanggal": "24 Februari 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "Kepala BPS Provinsi Sulawesi Selatan",
    "kodeKlasifikasi": "KS.200",
    "nomorSurat": "B-78/7301/KS.200/2026",
    "perihal": "Surat Persetujuan Naskah Siap Rilis Kabupaten Kepulauan Selayar Dalam Angka 2026"
  },
  {
    "id": "su-79",
    "nomorUrut": 79,
    "tanggal": "24 Februari 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "Petugas Ground Check PBI Katastropik",
    "kodeKlasifikasi": "VS.220",
    "nomorSurat": "B-79/7301/VS.220/2026",
    "perihal": "Surat Undangan Briefing Petugas Ground Check Penerima Bantuan Iuran (PBI) Katastropik"
  },
  {
    "id": "su-80",
    "nomorUrut": 80,
    "tanggal": "24 Februari 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "Badan Pengelolahan Keuangan dan Pendapatan Daerah (BPKPD)",
    "kodeKlasifikasi": "VS.330",
    "nomorSurat": "B-80/7301/VS.330/2026",
    "perihal": "Permintaan Data terkait skala proyek CV dan PT"
  },
  {
    "id": "su-81",
    "nomorUrut": 81,
    "tanggal": "24 Februari 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "Kepala BPS Provinsi Sulawesi Selatan",
    "kodeKlasifikasi": "PL.500",
    "nomorSurat": "B-81/7301/PL.500/2026",
    "perihal": "Permohonan PSP selain Tanah, Bangunan, dan Kendaraan s.d 100 Juta"
  },
  {
    "id": "su-82",
    "nomorUrut": 82,
    "tanggal": "24 Februari 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "BPS Provinsi Sulawesi Selatan",
    "kodeKlasifikasi": "PL.500",
    "nomorSurat": "B-82/7301/PL.500/2026",
    "perihal": "Surat Keterangan Kebenaran Bukti Perolehan BMN"
  },
  {
    "id": "su-83",
    "nomorUrut": 83,
    "tanggal": "24 Februari 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "BPS Provinsi Sulawesi Selatan",
    "kodeKlasifikasi": "PL.500",
    "nomorSurat": "B-83/7301/PL.500/2026",
    "perihal": "Surat Pernyataan Tanggung Jawab Mutlak (SPTJM) BMN"
  },
  {
    "id": "su-83.1",
    "nomorUrut": 83.1,
    "tanggal": "26 Februari 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "BPS Provinsi Sulawesi Selatan",
    "kodeKlasifikasi": "VS,110",
    "nomorSurat": "B-83.1/7301/VS,110/2026",
    "perihal": "Surat Permohonan Penawaran Kerja Mitra Statistik SNLIK 2026"
  },
  {
    "id": "su-84",
    "nomorUrut": 84,
    "tanggal": "27 Februari 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "BPS Provinsi Sulawesi Selatan",
    "kodeKlasifikasi": "SS.100",
    "nomorSurat": "B-84/7301/SS.100/2026",
    "perihal": "Surat Pernyataan Kebenaran Data SBR"
  },
  {
    "id": "su-85",
    "nomorUrut": 85,
    "tanggal": "27 Februari 2026",
    "jenisSurat": "Internal",
    "tujuan": "Pegawai",
    "kodeKlasifikasi": "KP.370",
    "nomorSurat": "B-85/7301/KP.370/2026",
    "perihal": "Pemanggilan pertama penjelasan ketidak hadiran pegawai"
  },
  {
    "id": "su-86",
    "nomorUrut": 86,
    "tanggal": "27 Februari 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "BPS Kabupaten Kepulauan Selayar",
    "kodeKlasifikasi": "KS.200",
    "nomorSurat": "B-86/7301/KS.200/2026",
    "perihal": "Surat Pernyataan RIlis BRS Pertumbuhan Ekonomi"
  },
  {
    "id": "su-87",
    "nomorUrut": 87,
    "tanggal": "2 Maret 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "PLN",
    "kodeKlasifikasi": "VS.190",
    "nomorSurat": "B-87/7301/VS.190/2026",
    "perihal": "Surat Pemberitahuan Kegiatan Ground Check Data Pelanggan PLN"
  },
  {
    "id": "su-88",
    "nomorUrut": 88,
    "tanggal": "3 Maret 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "KPPN",
    "kodeKlasifikasi": "KU.230",
    "nomorSurat": "B-88/7301/KU.230/2026",
    "perihal": "SKPP an. Dama Ratama"
  },
  {
    "id": "su-89",
    "nomorUrut": 89,
    "tanggal": "3 Maret 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "KPPN",
    "kodeKlasifikasi": "KU.230",
    "nomorSurat": "B-89/7301/KU.230/2026",
    "perihal": "Permintaan Penonaktifan Supplier"
  },
  {
    "id": "su-90",
    "nomorUrut": 90,
    "tanggal": "3 Maret 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "Dinas Pendidikan, Pemuda, dan Olahraga Kabupaten Kepulauan Selayar",
    "kodeKlasifikasi": "KS.200",
    "nomorSurat": "B-90/7301/KS.200/2026",
    "perihal": "Surat Rekomendasi Kegiatan Statistik Pencacahan Lengkap Penanganan Anak Tidak Sekolah (ATS) Kabupaten Kepulauan Selayar"
  },
  {
    "id": "su-91",
    "nomorUrut": 91,
    "tanggal": "3 Maret 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "Dinas Sosial Kabupaten Kepulauan Selayar",
    "kodeKlasifikasi": "KS.200",
    "nomorSurat": "B-91/7301/KS.200/2026",
    "perihal": "Surat Rekomendasi Kegiatan Statistik Survei Kepuasan Masyarakat (SKM) Dinas Sosial Kabupaten Kepulauan Selayar Tahun 2026"
  },
  {
    "id": "su-92",
    "nomorUrut": 92,
    "tanggal": "3 Maret 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "Dinas Kesehatan Kabupaten Kepulauan Selayar",
    "kodeKlasifikasi": "KS.200",
    "nomorSurat": "B-92/7301/KS.200/2026",
    "perihal": "Surat Rekomendasi Kegiatan Statistik Kompilasi Data Stunting Di Kabupaten Kepulauan Selayar Tahun 2026"
  },
  {
    "id": "su-93",
    "nomorUrut": 93,
    "tanggal": "3 Maret 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "Satpol PP Kabupaten Kepulauan Selayar",
    "kodeKlasifikasi": "KS.200",
    "nomorSurat": "B-93/7301/KS.200/2026",
    "perihal": "Surat Rekomendasi Kegiatan Statistik Pendataan Lengkap Ketentraman dan Ketertiban Umum di Kabupaten Kepulauan Selayar"
  },
  {
    "id": "su-94",
    "nomorUrut": 94,
    "tanggal": "3 Maret 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "Dinas Pertanian dan Ketahanan Pangan Kabupaten Kepulauan Selaya",
    "kodeKlasifikasi": "KS.200",
    "nomorSurat": "B-94/7301/KS.200/2026",
    "perihal": "Surat Rekomendasi Kegiatan Statistik Kompromin Luas Panen, produksi dan Produktivitas Tanaman Pertanian"
  },
  {
    "id": "su-95",
    "nomorUrut": 95,
    "tanggal": "3 Maret 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "Dinas Lingkungan Hidup",
    "kodeKlasifikasi": "KS.200",
    "nomorSurat": "B-95/7301/KS.200/2026",
    "perihal": "Surat Rekomendasi Kegiatan Statistik Kompilasi Data Volume Sampah di Kabupaten Kepulauan Selayar"
  },
  {
    "id": "su-96",
    "nomorUrut": 96,
    "tanggal": "3 Maret 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "Dinas Pertanian dan Ketahanan Pangan Kabupaten Kepulauan Selayar",
    "kodeKlasifikasi": "KS.200",
    "nomorSurat": "B-96/7301/KS.200/2026",
    "perihal": "Surat Rekomendasi Kegiatan Statistik Kompilasi Produk Administrasi Laporan Luas Tanaman Padi dan Palawija"
  },
  {
    "id": "su-97",
    "nomorUrut": 97,
    "tanggal": "3 Maret 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "BPS RI",
    "kodeKlasifikasi": "KU.010",
    "nomorSurat": "B-97/7301/KU.010/2026",
    "perihal": "Surat Pernyataan Tanggung Jawab Mutlak (SPTJM) Terkait Anggaran SE2026"
  },
  {
    "id": "su-98",
    "nomorUrut": 98,
    "tanggal": "5 Maret 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "BPJS Kesehatan Kabupaten Kep.Selayar",
    "kodeKlasifikasi": "HM.330",
    "nomorSurat": "B-98/7301/HM.330/2026",
    "perihal": "Balasan Surat Permohonan Sosialiasi Program Jaminan Kesehatan Nasional (JKN)"
  },
  {
    "id": "su-99",
    "nomorUrut": 99,
    "tanggal": "5 Maret 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "Kepala Kantor UPP Kelas III Jampea",
    "kodeKlasifikasi": "VS.330",
    "nomorSurat": "B-99/7301/VS.330/2026",
    "perihal": ""
  },
  {
    "id": "su-100",
    "nomorUrut": 100,
    "tanggal": "5 Maret 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "Kepala Kantor UPBU Kelas III H Aroeppala Selayar",
    "kodeKlasifikasi": "VS.330",
    "nomorSurat": "B-100/7301/VS.330/2026",
    "perihal": ""
  },
  {
    "id": "su-101",
    "nomorUrut": 101,
    "tanggal": "5 Maret 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "Kepala Kantor UPP Kelas III Selayar",
    "kodeKlasifikasi": "VS.330",
    "nomorSurat": "B-101/7301/VS.330/2026",
    "perihal": ""
  },
  {
    "id": "su-102",
    "nomorUrut": 102,
    "tanggal": "5 Maret 2026",
    "jenisSurat": "Internal",
    "tujuan": "Pegawai BPS Kep.Selayar (Nurlaela)",
    "kodeKlasifikasi": "KP.630",
    "nomorSurat": "B-102/7301/KP.630/2026",
    "perihal": "Surat Pernyataan Menduduki Jabatan Fungsional"
  },
  {
    "id": "su-103",
    "nomorUrut": 103,
    "tanggal": "6 Maret 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "MItra",
    "kodeKlasifikasi": "VS.220",
    "nomorSurat": "B-103/7301/VS.220/2026",
    "perihal": "Undangan Pelatihan Petugas Survei IPEK 2026"
  },
  {
    "id": "su-104",
    "nomorUrut": 104,
    "tanggal": "6 Maret 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "SDM BPS Provinsi sulawesi Selatan",
    "kodeKlasifikasi": "KP.320",
    "nomorSurat": "B-104/7301/KP.320/2026",
    "perihal": "Usulan Mengikuti Uji Kompetensi Kenaikan Jenjang Jabatan Fungsional"
  },
  {
    "id": "su-105",
    "nomorUrut": 105,
    "tanggal": "6 Maret 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "SDM BPS Provinsi sulawesi Selatan",
    "kodeKlasifikasi": "PL.530",
    "nomorSurat": "B-105/7301/PL.530/2026",
    "perihal": "Surap Pengantar Ususlan Kenaikan Pangkat"
  },
  {
    "id": "su-106",
    "nomorUrut": 106,
    "tanggal": "6 Maret 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "BPS Provinsi Sulawesi Selatan",
    "kodeKlasifikasi": "DL.200",
    "nomorSurat": "B-106/7301/DL.200/2026",
    "perihal": "Surat Usulan Pergantian Peserta Pelatihan Pembina Descan 2026"
  },
  {
    "id": "su-107",
    "nomorUrut": 107,
    "tanggal": "6 Maret 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "BPS Provinsi Sulawesi Selatan",
    "kodeKlasifikasi": "",
    "nomorSurat": "B-107/7301//2026",
    "perihal": ""
  },
  {
    "id": "su-108",
    "nomorUrut": 108,
    "tanggal": "6 Maret 2026",
    "jenisSurat": "Internal",
    "tujuan": "BPS Provinsi Sulawesi Selatan",
    "kodeKlasifikasi": "KU.320",
    "nomorSurat": "B-108/7301/KU.320/2026",
    "perihal": "Kebutuhan Anggaran Daerah Sulit SE2026"
  },
  {
    "id": "su-108.1",
    "nomorUrut": 108.1,
    "tanggal": "6 Maret 2026",
    "jenisSurat": "Internal",
    "tujuan": "BPS Selayar",
    "kodeKlasifikasi": "KU.300",
    "nomorSurat": "B-108.1/7301/KU.300/2026",
    "perihal": "Permintaan Kerja Lembur Penyelesaian Validasi Susenas Maret dan Seruti Triwulan I 2026"
  },
  {
    "id": "su-108.2",
    "nomorUrut": 108.2,
    "tanggal": "6 Maret 2026",
    "jenisSurat": "Internal",
    "tujuan": "Tim Pengolahan Susenas Maret 2026",
    "kodeKlasifikasi": "KU.300",
    "nomorSurat": "B-108.2/7301/KU.300/2026",
    "perihal": "SPKL Lembur Penyelesaian Validasi Susenas Maret dan Seruti Triwulan I 2026"
  },
  {
    "id": "su-109",
    "nomorUrut": 109,
    "tanggal": "10 Maret 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "Mitra",
    "kodeKlasifikasi": "VS.220",
    "nomorSurat": "B-109/7301/VS.220/2026",
    "perihal": "Undangan Pelatihan Petugas SKTNP Tahun 2026"
  },
  {
    "id": "su-110",
    "nomorUrut": 110,
    "tanggal": "10 Maret 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "Mitra",
    "kodeKlasifikasi": "VS.220",
    "nomorSurat": "B-110/7301/VS.220/2026",
    "perihal": "Undangan Pelatihan Petugas SKLNPT Tahun 2026"
  },
  {
    "id": "su-111",
    "nomorUrut": 111,
    "tanggal": "11 Maret 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "Kepala Kantor UPP Kelas III Jampea",
    "kodeKlasifikasi": "VS.330",
    "nomorSurat": "B-111/7301/VS.330/2026",
    "perihal": "Permintaan data simopel"
  },
  {
    "id": "su-112",
    "nomorUrut": 112,
    "tanggal": "11 Maret 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "Kepala Kantor UPBU Kelas III H Aroeppala Selayar",
    "kodeKlasifikasi": "VS.330",
    "nomorSurat": "B-112/7301/VS.330/2026",
    "perihal": "Permintaan data simopel"
  },
  {
    "id": "su-113",
    "nomorUrut": 113,
    "tanggal": "11 Maret 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "Kepala Kantor UPP Kelas III Selayar",
    "kodeKlasifikasi": "VS.330",
    "nomorSurat": "B-113/7301/VS.330/2026",
    "perihal": "Permintaan data simopel"
  },
  {
    "id": "su-114",
    "nomorUrut": 114,
    "tanggal": "11 Maret 2026",
    "jenisSurat": "Internal",
    "tujuan": "Kepala Kantor BPS Selayar",
    "kodeKlasifikasi": "KU.320",
    "nomorSurat": "B-114/7301/KU.320/2026",
    "perihal": "Surat Pernyataan Permindok"
  },
  {
    "id": "su-115",
    "nomorUrut": 115,
    "tanggal": "11 Maret 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "BPS Provinsi Sulawesi Selatan",
    "kodeKlasifikasi": "PW.110",
    "nomorSurat": "B-115/7301/PW.110/2026",
    "perihal": "Surat Keterangan Tidak Ada Normalisasi BMN Persediaan"
  },
  {
    "id": "su-116",
    "nomorUrut": 116,
    "tanggal": "12 Maret 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "Sekretariat Daerah Kabupaten Kepulauan Selayar",
    "kodeKlasifikasi": "VS.620",
    "nomorSurat": "B-116/7301/VS.620/2026",
    "perihal": "Surat Balasan Permintaan Data Capaian Indikator Makro Tahun 2024 dan 2025"
  },
  {
    "id": "su-117",
    "nomorUrut": 117,
    "tanggal": "12 Maret 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "BAPPERIDA",
    "kodeKlasifikasi": "KS.200",
    "nomorSurat": "B-117/7301/KS.200/2026",
    "perihal": "Surat Rekomendasi Kegiatan Statistik Survei Indeks Kesalehan Sosial"
  },
  {
    "id": "su-118",
    "nomorUrut": 118,
    "tanggal": "12 Maret 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "BPS Provinsi Sulawesi Selatan",
    "kodeKlasifikasi": "VS.025",
    "nomorSurat": "B-118/7301/VS.025/2026",
    "perihal": "Penggantian SLS sampel VREST"
  },
  {
    "id": "su-119",
    "nomorUrut": 119,
    "tanggal": "12 Maret 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "Bupati Kepulauan Selayar",
    "kodeKlasifikasi": "HM.310",
    "nomorSurat": "B-119/7301/HM.310/2026",
    "perihal": "Permohonan Surat Dukungan Pelaksanaan Sensus Ekonomi (SE) 2026"
  },
  {
    "id": "su-120",
    "nomorUrut": 120,
    "tanggal": "13 Maret 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "Petugas VHTS, VDTW, VHTL",
    "kodeKlasifikasi": "VS.220",
    "nomorSurat": "B-120/7301/VS.220/2026",
    "perihal": "Briefing VHTS, VHTL, VDTW"
  },
  {
    "id": "su-121",
    "nomorUrut": 121,
    "tanggal": "16 Maret 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "Petugas Survei Keuangan",
    "kodeKlasifikasi": "VS.220",
    "nomorSurat": "B-121/7301/VS.220/2026",
    "perihal": "Pelatihan Petugas Survei Keungan"
  },
  {
    "id": "su-122",
    "nomorUrut": 122,
    "tanggal": "16 Maret 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "Petugas Survei VREST",
    "kodeKlasifikasi": "VS.220",
    "nomorSurat": "B-122/7301/VS.220/2026",
    "perihal": "Pelatihan Survei VREST"
  },
  {
    "id": "su-123",
    "nomorUrut": 123,
    "tanggal": "17 Maret 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "BPS Provinsi Sulawesi Selatan",
    "kodeKlasifikasi": "KS.200",
    "nomorSurat": "B-123/7301/KS.200/2026",
    "perihal": "Surat Persetujuan Naskah Siap Rilis PDRB Lapus 2021-2025"
  },
  {
    "id": "su-124",
    "nomorUrut": 124,
    "tanggal": "17 Maret 2026",
    "jenisSurat": "Internal",
    "tujuan": "Inspektorat",
    "kodeKlasifikasi": "PW.110",
    "nomorSurat": "B-124/7301/PW.110/2026",
    "perihal": "Surat Pernyataan Permindok"
  },
  {
    "id": "su-125",
    "nomorUrut": 125,
    "tanggal": "27 Maret 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "Koordinator PKH dan Pendamping PKH",
    "kodeKlasifikasi": "VS.190",
    "nomorSurat": "B-125/7301/VS.190/2026",
    "perihal": "Surat Undangan Briefing dan Rapat Persiapan GC PBI Tahap II Tahun 2026"
  },
  {
    "id": "su-126",
    "nomorUrut": 126,
    "tanggal": "1 April 2026",
    "jenisSurat": "Internal",
    "tujuan": "Fakhri Hafidzul Azhar, S.Tr. Stat.",
    "kodeKlasifikasi": "KP.600",
    "nomorSurat": "B-126/7301/KP.600/2026",
    "perihal": "Sertifikat Pegawai Berkinerja Terbalik Tr I 2026"
  },
  {
    "id": "su-127",
    "nomorUrut": 127,
    "tanggal": "1 April 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "Klinik Nahda",
    "kodeKlasifikasi": "VS.330",
    "nomorSurat": "B-127/7301/VS.330/2026",
    "perihal": "Permintaan data"
  },
  {
    "id": "su-128",
    "nomorUrut": 128,
    "tanggal": "1 April 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "Taman Nasioanl Takabonerate",
    "kodeKlasifikasi": "VS.330",
    "nomorSurat": "B-128/7301/VS.330/2026",
    "perihal": "Permintaan data"
  },
  {
    "id": "su-129",
    "nomorUrut": 129,
    "tanggal": "1 April 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "Telkom",
    "kodeKlasifikasi": "VS.330",
    "nomorSurat": "B-129/7301/VS.330/2026",
    "perihal": "Permintaan data"
  },
  {
    "id": "su-130",
    "nomorUrut": 130,
    "tanggal": "2 April 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "Polstat STIS",
    "kodeKlasifikasi": "KP.310",
    "nomorSurat": "B-130/7301/KP.310/2026",
    "perihal": "Surat Permintaan"
  },
  {
    "id": "su-131",
    "nomorUrut": 131,
    "tanggal": "2 April 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "BPS Provinsi Sulawesi Selatan",
    "kodeKlasifikasi": "KP.320",
    "nomorSurat": "B-131/7301/KP.320/2026",
    "perihal": "Surat Usulan Mengikuti Uji Kompetensi Kenaikan Jenjang Jabatan Fungsional dan Perpindahan dari Jabatan Lain"
  },
  {
    "id": "su-132",
    "nomorUrut": 132,
    "tanggal": "2 April 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "BPS Provinsi Sulawesi Selatan",
    "kodeKlasifikasi": "KP.320",
    "nomorSurat": "B-132/7301/KP.320/2026",
    "perihal": "Surat Pernyataan Eselon 3 Nurlaela"
  },
  {
    "id": "su-133",
    "nomorUrut": 133,
    "tanggal": "2 April 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "BPS Provinsi Sulawesi Selatan",
    "kodeKlasifikasi": "KP.320",
    "nomorSurat": "B-133/7301/KP.320/2026",
    "perihal": "Surat Pernyataan Eselon 3 Bustan"
  },
  {
    "id": "su-134",
    "nomorUrut": 134,
    "tanggal": "2 April 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "BPS Provinsi Sulawesi Selatan",
    "kodeKlasifikasi": "KP.320",
    "nomorSurat": "B-134/7301/KP.320/2026",
    "perihal": "Surat Pernyataan Eselon 3 Zulhan"
  },
  {
    "id": "su-134.1",
    "nomorUrut": 134.1,
    "tanggal": "2 April 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "Pegawai BPS Kab. Kepulauan Selayar",
    "kodeKlasifikasi": "HK.310",
    "nomorSurat": "B-134.1/7301/HK.310/2026",
    "perihal": "KODE ETIK  PELAKSANA PELAYANAN STATISTIK TERPADU (PST"
  },
  {
    "id": "su-135",
    "nomorUrut": 135,
    "tanggal": "3 April 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "KPPN Benteng",
    "kodeKlasifikasi": "KP.630",
    "nomorSurat": "B-135/7301/KP.630/2026",
    "perihal": "KGB Nurlaela"
  },
  {
    "id": "su-136",
    "nomorUrut": 136,
    "tanggal": "6 April 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "Petugas Pemutakhiran Data Perkembangan Desa",
    "kodeKlasifikasi": "VS.220",
    "nomorSurat": "B-136/7301/VS.220/2026",
    "perihal": "Undangan Pelatihan Petugas Pemutakhiran Data Perkembangan Desa 2026 (PODES 2026)"
  },
  {
    "id": "su-137",
    "nomorUrut": 137,
    "tanggal": "7 April 2026",
    "jenisSurat": "Internal",
    "tujuan": "Pegawai BPS Kab. Kepulauan Selayar",
    "kodeKlasifikasi": "PR.710",
    "nomorSurat": "B-137/7301/PR.710/2026",
    "perihal": "Undangan Rapat Rutin Bulan April 2026"
  },
  {
    "id": "su-138",
    "nomorUrut": 138,
    "tanggal": "7 April 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "Kepala Kantor UPP Kelas III Jampea",
    "kodeKlasifikasi": "VS.330",
    "nomorSurat": "B-138/7301/VS.330/2026",
    "perihal": "Permintaan data simoppel"
  },
  {
    "id": "su-139",
    "nomorUrut": 139,
    "tanggal": "7 April 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "Kepala Kantor UPP Kelas III Selayar",
    "kodeKlasifikasi": "VS.330",
    "nomorSurat": "B-139/7301/VS.330/2026",
    "perihal": "Permintaan data simoppel"
  },
  {
    "id": "su-140",
    "nomorUrut": 140,
    "tanggal": "7 April 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "Kepala Kantor UPBU Kelas III H Aroeppala Selayar",
    "kodeKlasifikasi": "VS.330",
    "nomorSurat": "B-140/7301/VS.330/2026",
    "perihal": "Permintaan data simoppel"
  },
  {
    "id": "su-141",
    "nomorUrut": 141,
    "tanggal": "7 April 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "Kantor Wilayah DJPb Sulawesi Selatan",
    "kodeKlasifikasi": "PR-440",
    "nomorSurat": "B-141/7301/PR-440/2026",
    "perihal": "Permohonan Usulan Revisi Halaman III DIPA Triuwlan II Tahun Anggaran 2026"
  },
  {
    "id": "su-142",
    "nomorUrut": 142,
    "tanggal": "7 April 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "Kantor Wilayah DJPb Sulawesi Selatan",
    "kodeKlasifikasi": "PR-440",
    "nomorSurat": "B-142/7301/PR-440/2026",
    "perihal": "SPTJM Revisi Halaman III DIPA Triwulan II Tahun 2026"
  },
  {
    "id": "su-143",
    "nomorUrut": 143,
    "tanggal": "8 April 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "Petugas GC PBI Tahap II (Pendamping PKH)",
    "kodeKlasifikasi": "VS.190",
    "nomorSurat": "B-143/7301/VS.190/2026",
    "perihal": "Surat Undangan Rapat Evaluasi GC PBI Tahap II Tahun 2026"
  },
  {
    "id": "su-144",
    "nomorUrut": 144,
    "tanggal": "10 April 2026",
    "jenisSurat": "Internal",
    "tujuan": "Kepala BPS Selayar",
    "kodeKlasifikasi": "KU.300",
    "nomorSurat": "B-144/7301/KU.300/2026",
    "perihal": "Permintaan Kerja Lembur Perbaikan Bukti Dukung Lembar Kerja Evaluasi  (LKE) ZI"
  },
  {
    "id": "su-145",
    "nomorUrut": 145,
    "tanggal": "10 April 2026",
    "jenisSurat": "Internal",
    "tujuan": "Orang2",
    "kodeKlasifikasi": "KU.300",
    "nomorSurat": "B-145/7301/KU.300/2026",
    "perihal": "Surat Perintah Kerja Lembur"
  },
  {
    "id": "su-146",
    "nomorUrut": 146,
    "tanggal": "11 April 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "Seluruh Camat",
    "kodeKlasifikasi": "VS.330",
    "nomorSurat": "B-146/7301/VS.330/2026",
    "perihal": "Surat Pengantar Pre-Pendataan PODES Tahun 2026"
  },
  {
    "id": "su-146.1",
    "nomorUrut": 146.1,
    "tanggal": "11 April 2026",
    "jenisSurat": "Internal",
    "tujuan": "Seluruh pegawai",
    "kodeKlasifikasi": "PR.710",
    "nomorSurat": "B-146.1/7301/PR.710/2026",
    "perihal": "Undangan rapat monitoring capkin q1 2026"
  },
  {
    "id": "su-147",
    "nomorUrut": 147,
    "tanggal": "13 April 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "Lurah se-Kecamatan Benteng",
    "kodeKlasifikasi": "TS.160",
    "nomorSurat": "B-147/7301/TS.160/2026",
    "perihal": "Pencanangan dan Sosialisasi Kelurahan Cinta Statistik Tahun 2026"
  },
  {
    "id": "su-148",
    "nomorUrut": 148,
    "tanggal": "13 April 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "Camat Benteng",
    "kodeKlasifikasi": "TS.160",
    "nomorSurat": "B-148/7301/TS.160/2026",
    "perihal": "Pencanangan dan Sosialisasi Kelurahan Cinta Statistik Tahun 2026"
  },
  {
    "id": "su-149",
    "nomorUrut": 149,
    "tanggal": "13 April 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "Kepala Dinas KOMINFO-SP Kab. Kepulauan Selayar",
    "kodeKlasifikasi": "TS.160",
    "nomorSurat": "B-149/7301/TS.160/2026",
    "perihal": "Pencanangan dan Sosialisasi Kelurahan Cinta Statistik Tahun 2026"
  },
  {
    "id": "su-150",
    "nomorUrut": 150,
    "tanggal": "13 April 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "Kepala BAPPERIDA",
    "kodeKlasifikasi": "TS.160",
    "nomorSurat": "B-150/7301/TS.160/2026",
    "perihal": "Pencanangan dan Sosialisasi Kelurahan Cinta Statistik Tahun 2026"
  },
  {
    "id": "su-151",
    "nomorUrut": 151,
    "tanggal": "13 April 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "Asisten I Bagian Pemerintahan",
    "kodeKlasifikasi": "TS.160",
    "nomorSurat": "B-151/7301/TS.160/2026",
    "perihal": "Pencanangan dan Sosialisasi Kelurahan Cinta Statistik Tahun 2026"
  },
  {
    "id": "su-152",
    "nomorUrut": 152,
    "tanggal": "13 April 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "Bupati Kabupaten Kepulauan Selayar",
    "kodeKlasifikasi": "TS.160",
    "nomorSurat": "B-152/7301/TS.160/2026",
    "perihal": "Pencanangan dan Sosialisasi Kelurahan Cinta Statistik Tahun 2026"
  },
  {
    "id": "su-153",
    "nomorUrut": 153,
    "tanggal": "13 April 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "Wakil Bupati",
    "kodeKlasifikasi": "TS.160",
    "nomorSurat": "B-153/7301/TS.160/2026",
    "perihal": "Pencanangan dan Sosialisasi Kelurahan Cinta Statistik Tahun 2026"
  },
  {
    "id": "su-154",
    "nomorUrut": 154,
    "tanggal": "13 April 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "Kepala Dinas Pertanian",
    "kodeKlasifikasi": "VS.330",
    "nomorSurat": "B-154/7301/VS.330/2026",
    "perihal": "Permintaan Data Pendukung Penghitungan PDRB Triwulanan"
  },
  {
    "id": "su-155",
    "nomorUrut": 155,
    "tanggal": "13 April 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "Kepala Dinas Perikanan",
    "kodeKlasifikasi": "VS.330",
    "nomorSurat": "B-155/7301/VS.330/2026",
    "perihal": "Permintaan Data Pendukung Penghitungan PDRB Triwulanan"
  },
  {
    "id": "su-156",
    "nomorUrut": 156,
    "tanggal": "13 April 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "Kepala DInas Pariwisata",
    "kodeKlasifikasi": "VS.330",
    "nomorSurat": "B-156/7301/VS.330/2026",
    "perihal": "Permintaan Data Pendukung Penghitungan PDRB Triwulanan"
  },
  {
    "id": "su-157",
    "nomorUrut": 157,
    "tanggal": "13 April 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "Kepala Dians Perhubungan",
    "kodeKlasifikasi": "VS.330",
    "nomorSurat": "B-157/7301/VS.330/2026",
    "perihal": "Permintaan Data Pendukung Penghitungan PDRB Triwulanan"
  },
  {
    "id": "su-158",
    "nomorUrut": 158,
    "tanggal": "13 April 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "Kepala BPKAD",
    "kodeKlasifikasi": "VS.330",
    "nomorSurat": "B-158/7301/VS.330/2026",
    "perihal": "Permintaan Data Pendukung Penghitungan PDRB Triwulanan"
  },
  {
    "id": "su-159",
    "nomorUrut": 159,
    "tanggal": "13 April 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "Kepala DInas PMPTSP",
    "kodeKlasifikasi": "VS.330",
    "nomorSurat": "B-159/7301/VS.330/2026",
    "perihal": "Permintaan Data Pendukung Penghitungan PDRB Triwulanan"
  },
  {
    "id": "su-160",
    "nomorUrut": 160,
    "tanggal": "13 April 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "Kepala Dinas UPT KPH",
    "kodeKlasifikasi": "VS.330",
    "nomorSurat": "B-160/7301/VS.330/2026",
    "perihal": "Permintaan Data Pendukung Penghitungan PDRB Triwulanan"
  },
  {
    "id": "su-161",
    "nomorUrut": 161,
    "tanggal": "13 April 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "Manager PLN",
    "kodeKlasifikasi": "VS.330",
    "nomorSurat": "B-161/7301/VS.330/2026",
    "perihal": "Permintaan Data Pendukung Penghitungan PDRB Triwulanan"
  },
  {
    "id": "su-162",
    "nomorUrut": 162,
    "tanggal": "13 April 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "Kepala Dinas PMD",
    "kodeKlasifikasi": "VS.330",
    "nomorSurat": "B-162/7301/VS.330/2026",
    "perihal": "Permintaan Data Pendukung Penghitungan PDRB Triwulanan"
  },
  {
    "id": "su-163",
    "nomorUrut": 163,
    "tanggal": "13 April 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "Daftar Undangan Terlampir",
    "kodeKlasifikasi": "TS.160",
    "nomorSurat": "B-163/7301/TS.160/2026",
    "perihal": "Pencanangan dan Sosialisasi Kelurahan Cinta Statistik Tahun 2026"
  },
  {
    "id": "su-164",
    "nomorUrut": 164,
    "tanggal": "14 April 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "BPJS Kesehatan Kabupaten Kep.Selayar",
    "kodeKlasifikasi": "HM.330",
    "nomorSurat": "B-164/7301/HM.330/2026",
    "perihal": "Permintaan Konfirmasi Eligibilitas Kepesertaan Anggota Keluarga yang Lain PPU pusat"
  },
  {
    "id": "su-165",
    "nomorUrut": 165,
    "tanggal": "20 April 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "BPS Provinsi Sulawesi Selatan",
    "kodeKlasifikasi": "SS.100",
    "nomorSurat": "B-165/7301/SS.100/2026",
    "perihal": "Surat Pernyataan SBR terbaru"
  },
  {
    "id": "su-166",
    "nomorUrut": 166,
    "tanggal": "20 April 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "Ketua Jurusan Statistika FMIPA UNM",
    "kodeKlasifikasi": "HM.340",
    "nomorSurat": "B-166/7301/HM.340/2026",
    "perihal": "Surat Balasan Permohonan Praktik Kerja Lapangan (PKL)"
  },
  {
    "id": "su-167",
    "nomorUrut": 167,
    "tanggal": "20 April 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "PT. Tripper Nature",
    "kodeKlasifikasi": "VS.330",
    "nomorSurat": "B-167/7301/VS.330/2026",
    "perihal": "Surat Permintaan data STPIM dan IBS Triwulanan"
  },
  {
    "id": "su-168",
    "nomorUrut": 168,
    "tanggal": "22 April 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "BPS Provinsi Sulawesi Selatan",
    "kodeKlasifikasi": "SS.100",
    "nomorSurat": "B-168/7301/SS.100/2026",
    "perihal": "Surat Pernyataan Zulhan"
  },
  {
    "id": "su-169",
    "nomorUrut": 169,
    "tanggal": "22 April 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "BPS Provinsi Sulawesi Selatan",
    "kodeKlasifikasi": "SS.100",
    "nomorSurat": "B-169/7301/SS.100/2026",
    "perihal": "Surat Pernyataan Bustan"
  },
  {
    "id": "su-170",
    "nomorUrut": 170,
    "tanggal": "22 April 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "BPS Provinsi Sulawesi Selatan",
    "kodeKlasifikasi": "SS.100",
    "nomorSurat": "B-170/7301/SS.100/2026",
    "perihal": "Surat Pernyataan Nurlaela"
  },
  {
    "id": "su-171",
    "nomorUrut": 171,
    "tanggal": "23 April 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "DPRD, POLRES, Bakesbangpol",
    "kodeKlasifikasi": "VS.330",
    "nomorSurat": "B-171/7301/VS.330/2026",
    "perihal": "Surat Permintaan Data POLKAM 2026"
  },
  {
    "id": "su-172",
    "nomorUrut": 172,
    "tanggal": "27 April 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "BPS Provinsi Sulawesi Selatan",
    "kodeKlasifikasi": "KS.200",
    "nomorSurat": "B-172/7301/KS.200/2026",
    "perihal": "Surat Persetujuan Naskah Siap Rilis PDRB Pengeluaran 2021-2025"
  },
  {
    "id": "su-173",
    "nomorUrut": 173,
    "tanggal": "27 April 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "dinas pu",
    "kodeKlasifikasi": "vs330",
    "nomorSurat": "B-173/7301/vs330/2026",
    "perihal": "surat permintaan boq 2"
  },
  {
    "id": "su-174",
    "nomorUrut": 174,
    "tanggal": "28 April 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "KPKNL Makassar",
    "kodeKlasifikasi": "PL.530",
    "nomorSurat": "B-174/7301/PL.530/2026",
    "perihal": "Surat Permohonan Pelaksanaan Lelang Non-Eksekusi Wajib BMN"
  },
  {
    "id": "su-175",
    "nomorUrut": 175,
    "tanggal": "28 April 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "KPKNL Makassar",
    "kodeKlasifikasi": "PL.530",
    "nomorSurat": "B-175/7301/PL.530/2026",
    "perihal": "Surat Pernyataan Penguasaan"
  },
  {
    "id": "su-176",
    "nomorUrut": 176,
    "tanggal": "28 April 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "KPKNL Makassar",
    "kodeKlasifikasi": "PL.530",
    "nomorSurat": "B-176/7301/PL.530/2026",
    "perihal": "Surat Pernyataan Kepemilikan BMN"
  },
  {
    "id": "su-177",
    "nomorUrut": 177,
    "tanggal": "28 April 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "KPKNL Makassar",
    "kodeKlasifikasi": "PL.530",
    "nomorSurat": "B-177/7301/PL.530/2026",
    "perihal": "Surat Penyetoran Hasil Bersih Lelang"
  },
  {
    "id": "su-178",
    "nomorUrut": 178,
    "tanggal": "28 April 2026",
    "jenisSurat": "Internal",
    "tujuan": "Pegawai BPS Kab. Kepulauan Selayar",
    "kodeKlasifikasi": "PR.710",
    "nomorSurat": "B-178/7301/PR.710/2026",
    "perihal": "Undangan Rapat Rutin Bulan Mei Tahun 2026"
  },
  {
    "id": "su-178.1",
    "nomorUrut": 178.1,
    "tanggal": "4 Mei 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "Petugas Sakernas Mei 2026",
    "kodeKlasifikasi": "VS.220",
    "nomorSurat": "B-178.1/7301/VS.220/2026",
    "perihal": "Surat Undangan Briefing Sakernas Mei 2026"
  },
  {
    "id": "su-179",
    "nomorUrut": 179,
    "tanggal": "4 Mei 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "Kantor BRI",
    "kodeKlasifikasi": "SS.330",
    "nomorSurat": "B-179/7301/SS.330/2026",
    "perihal": "Ngibar"
  },
  {
    "id": "su-180",
    "nomorUrut": 180,
    "tanggal": "4 Mei 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "Bapperida",
    "kodeKlasifikasi": "VS.330",
    "nomorSurat": "B-180/7301/VS.330/2026",
    "perihal": ""
  },
  {
    "id": "su-181",
    "nomorUrut": 181,
    "tanggal": "4 Mei 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "Pegadaian",
    "kodeKlasifikasi": "SS.330",
    "nomorSurat": "B-181/7301/SS.330/2026",
    "perihal": "Ngibar"
  },
  {
    "id": "su-182",
    "nomorUrut": 182,
    "tanggal": "5 Mei 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "BPS Provinsi Sulawesi Selatan",
    "kodeKlasifikasi": "KU.520",
    "nomorSurat": "B-182/7301/KU.520/2026",
    "perihal": "Pengantar LBP TA 2025 Audited Satker BPS Kabupaten Kepulauan Selayar"
  },
  {
    "id": "su-183",
    "nomorUrut": 183,
    "tanggal": "5 Mei 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "Bandara",
    "kodeKlasifikasi": "SS.330",
    "nomorSurat": "B-183/7301/SS.330/2026",
    "perihal": "Ngibar"
  },
  {
    "id": "su-184",
    "nomorUrut": 184,
    "tanggal": "5 Mei 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "Syahbandar",
    "kodeKlasifikasi": "SS.330",
    "nomorSurat": "B-184/7301/SS.330/2026",
    "perihal": "Ngibar"
  },
  {
    "id": "su-185",
    "nomorUrut": 185,
    "tanggal": "5 Mei 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "Kepala Kantor UPP Kelas III Jampea",
    "kodeKlasifikasi": "VS.330",
    "nomorSurat": "B-185/7301/VS.330/2026",
    "perihal": "Simoppel"
  },
  {
    "id": "su-186",
    "nomorUrut": 186,
    "tanggal": "5 Mei 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "Kepala Kantor UPP Kelas III Selayar",
    "kodeKlasifikasi": "VS.330",
    "nomorSurat": "B-186/7301/VS.330/2026",
    "perihal": "Simoppel"
  },
  {
    "id": "su-187",
    "nomorUrut": 187,
    "tanggal": "5 Mei 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "Kepala Kantor UPBU Kelas III H Aroeppala Selayar",
    "kodeKlasifikasi": "VS.330",
    "nomorSurat": "B-187/7301/VS.330/2026",
    "perihal": "Simoppel"
  },
  {
    "id": "su-188",
    "nomorUrut": 188,
    "tanggal": "5 Mei 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "Syahbandar Jampea",
    "kodeKlasifikasi": "SS.330",
    "nomorSurat": "B-188/7301/SS.330/2026",
    "perihal": "Ngibar"
  },
  {
    "id": "su-189",
    "nomorUrut": 189,
    "tanggal": "6 Mei 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "Dinas Kesehatan",
    "kodeKlasifikasi": "SS.330",
    "nomorSurat": "B-189/7301/SS.330/2026",
    "perihal": "Ngibar"
  },
  {
    "id": "su-190",
    "nomorUrut": 190,
    "tanggal": "6 Mei 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "Bank Mandiri",
    "kodeKlasifikasi": "SS.330",
    "nomorSurat": "B-190/7301/SS.330/2026",
    "perihal": "Ngibar"
  },
  {
    "id": "su-191",
    "nomorUrut": 191,
    "tanggal": "6 Mei 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "Bank BNI",
    "kodeKlasifikasi": "SS.330",
    "nomorSurat": "B-191/7301/SS.330/2026",
    "perihal": "Ngibar"
  },
  {
    "id": "su-192",
    "nomorUrut": 192,
    "tanggal": "6 Mei 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "Bank Sulselbar",
    "kodeKlasifikasi": "SS.330",
    "nomorSurat": "B-192/7301/SS.330/2026",
    "perihal": "Ngibar"
  },
  {
    "id": "su-193",
    "nomorUrut": 193,
    "tanggal": "6 Mei 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "BPR",
    "kodeKlasifikasi": "SS.330",
    "nomorSurat": "B-193/7301/SS.330/2026",
    "perihal": "Ngibar"
  },
  {
    "id": "su-194",
    "nomorUrut": 194,
    "tanggal": "7 Mei 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "KPPN Benteng",
    "kodeKlasifikasi": "KU.520",
    "nomorSurat": "B-194/7301/KU.520/2026",
    "perihal": "Surat Pengantar Laporan Keuangan Audited TA 2025"
  },
  {
    "id": "su-195",
    "nomorUrut": 195,
    "tanggal": "8 Mei 2026",
    "jenisSurat": "Internal",
    "tujuan": "BPS Provinsi Sulawesi Selatan",
    "kodeKlasifikasi": "VS.110",
    "nomorSurat": "B-195/7301/VS.110/2026",
    "perihal": "Surat Permohonan Penambahan Petugas Sakernas Mei 2026"
  },
  {
    "id": "su-196",
    "nomorUrut": 196,
    "tanggal": "13 Mei 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "Kepala SMKN 2 Selayar",
    "kodeKlasifikasi": "HM.340",
    "nomorSurat": "B-196/7301/HM.340/2026",
    "perihal": "Balasan Surat Permohonan Tempat Pelaksanaan PSG"
  },
  {
    "id": "su-197",
    "nomorUrut": 197,
    "tanggal": "19 Mei 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "Kepala ULP/UKPBJ Biro Umum BPS RI",
    "kodeKlasifikasi": "SS.220",
    "nomorSurat": "B-197/7301/SS.220/2026",
    "perihal": "Permohonan dan Usulan Pembentukan Tim POKJA Paket Meeting Fullboard Pelatihan Petugas Sensus Ekonomi Kabupaten Kepulauan Selayar"
  },
  {
    "id": "su-198",
    "nomorUrut": 198,
    "tanggal": "19 Mei 2026",
    "jenisSurat": "Internal",
    "tujuan": "Pegawai BPS Kab. Kepulauan Selayar",
    "kodeKlasifikasi": "HM.010",
    "nomorSurat": "B-198/7301/HM.010/2026",
    "perihal": "Undangan Upacara Peringatan ke-118 Hari Kebangkitan Nasional Tahun 2026 di Lingkungan Badan Pusat Statistik"
  },
  {
    "id": "su-199",
    "nomorUrut": 199,
    "tanggal": "20 Mei 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "Kanwil DJPB Makassar",
    "kodeKlasifikasi": "PR.440",
    "nomorSurat": "B-199/7301/PR.440/2026",
    "perihal": "Usulan Revisi DIPA RO Biasa dan Khusus serta Revisi Anggaran RO SP SABA"
  },
  {
    "id": "su-200",
    "nomorUrut": 200,
    "tanggal": "21 Mei 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "Petugas Seruti Triwulan II",
    "kodeKlasifikasi": "VS.220",
    "nomorSurat": "B-200/7301/VS.220/2026",
    "perihal": "Undangan Briefing Petugas Seruti TW II Tahun 2026"
  },
  {
    "id": "su-201",
    "nomorUrut": 201,
    "tanggal": "22 Mei 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "KPKNL Makassar",
    "kodeKlasifikasi": "PL.810",
    "nomorSurat": "B-201/7301/PL.810/2026",
    "perihal": "Surat Pengantar Dokumen Lelang"
  },
  {
    "id": "su-202",
    "nomorUrut": 202,
    "tanggal": "26 Mei 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "",
    "kodeKlasifikasi": "PL.810",
    "nomorSurat": "B-202/7301/PL.810/2026",
    "perihal": "Pengumuman Lelang Barang Milik Negara"
  },
  {
    "id": "su-203",
    "nomorUrut": 203,
    "tanggal": "26 Mei 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "Dinas Perdagangan, Koperasi dan UMKM",
    "kodeKlasifikasi": "SS.330",
    "nomorSurat": "B-203/7301/SS.330/2026",
    "perihal": "Ngibar"
  },
  {
    "id": "su-204",
    "nomorUrut": 204,
    "tanggal": "26 Mei 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "Dinas Pendidikan, Pemuda dan Olahraga",
    "kodeKlasifikasi": "SS.330",
    "nomorSurat": "B-204/7301/SS.330/2026",
    "perihal": "Ngibar"
  },
  {
    "id": "su-205",
    "nomorUrut": 205,
    "tanggal": "26 Mei 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "Kantor Cabang Dinas Pendidikan Wilayah VI Kabupaten Kepulauan Selayar",
    "kodeKlasifikasi": "SS.330",
    "nomorSurat": "B-205/7301/SS.330/2026",
    "perihal": "Ngibar"
  },
  {
    "id": "su-206",
    "nomorUrut": 206,
    "tanggal": "26 Mei 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "Kantor Kementerian Agama Kabupaten Kepulauan Selayar",
    "kodeKlasifikasi": "SS.330",
    "nomorSurat": "B-206/7301/SS.330/2026",
    "perihal": "Ngibar"
  },
  {
    "id": "su-207",
    "nomorUrut": 207,
    "tanggal": "26 Mei 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "Calon Mitra Tambahan BPS Tahun 2026",
    "kodeKlasifikasi": "KP.200",
    "nomorSurat": "B-207/7301/KP.200/2026",
    "perihal": "Pengumuman Hasil Rekrutmen Calon Mitra Tambahan Tahun 2026"
  },
  {
    "id": "su-207.1",
    "nomorUrut": 207.1,
    "tanggal": "28 Mei 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "Petugas SE2026 GEL 1",
    "kodeKlasifikasi": "SS.220",
    "nomorSurat": "B-207.1/7301/SS.220/2026",
    "perihal": "Undangan Pelatihan Petugas SE2026 Gelombang 1"
  },
  {
    "id": "su-207.2",
    "nomorUrut": 207.2,
    "tanggal": "28 Mei 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "Petugas SE2026 GEL 2",
    "kodeKlasifikasi": "SS.220",
    "nomorSurat": "B-207.2/7301/SS.220/2026",
    "perihal": "Undangan Pelatihan Petugas SE2026 Gelombang 2"
  },
  {
    "id": "su-208",
    "nomorUrut": 208,
    "tanggal": "29 Mei 2026",
    "jenisSurat": "Internal",
    "tujuan": "Pegawai BPS Kab. Kepulauan Selayar",
    "kodeKlasifikasi": "HM.010",
    "nomorSurat": "B-208/7301/HM.010/2026",
    "perihal": "Undangan Upacara Peringatan ke-118 Hari Kebangkitan Nasional Tahun 2026 di Lingkungan Badan Pusat Statistik"
  },
  {
    "id": "su-209",
    "nomorUrut": 209,
    "tanggal": "29 Mei 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "Kepala BPS Provinsi Sulawesi Selatan",
    "kodeKlasifikasi": "KS.200",
    "nomorSurat": "B-209/7301/KS.200/2026",
    "perihal": "Surat Persetujuan Naskah Siap Rilis Indeks Pembangunan Manusia Kabupaten Kepulauan Selayar 2025"
  },
  {
    "id": "su-209.1",
    "nomorUrut": 209.1,
    "tanggal": "29 Mei 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "Ketua Jurusan Statistika FMIPA UNM",
    "kodeKlasifikasi": "HM.340",
    "nomorSurat": "B-209.1/7301/HM.340/2026",
    "perihal": "Surat Balasan Permohonan Praktik Kerja Lapangan (PKL)"
  },
  {
    "id": "su-209.2",
    "nomorUrut": 209.2,
    "tanggal": "29 Mei 2026",
    "jenisSurat": "Internal",
    "tujuan": "Pegawai BPS Kab. Kepulauan Selayar",
    "kodeKlasifikasi": "SS.220",
    "nomorSurat": "B-209.2/7301/SS.220/2026",
    "perihal": "Lembur administrasi persiapan pelatihan SE2026"
  },
  {
    "id": "su-209.3",
    "nomorUrut": 209.3,
    "tanggal": "29 Mei 2026",
    "jenisSurat": "Internal",
    "tujuan": "Pegawai BPS Kab. Kepulauan Selayar",
    "kodeKlasifikasi": "SS.220",
    "nomorSurat": "B-209.3/7301/SS.220/2026",
    "perihal": "SPKL administrasi persiapan pelatihan SE2026"
  },
  {
    "id": "su-210",
    "nomorUrut": 210,
    "tanggal": "31 Mei 2026",
    "jenisSurat": "Internal",
    "tujuan": "Pegawai BPS Kab. Kepulauan Selayar",
    "kodeKlasifikasi": "SS.220",
    "nomorSurat": "B-210/7301/SS.220/2026",
    "perihal": "Lembur persiapan administrasi dan pelatihan SE2026"
  },
  {
    "id": "su-211",
    "nomorUrut": 211,
    "tanggal": "31 Mei 2026",
    "jenisSurat": "Internal",
    "tujuan": "Pegawai BPS Kab. Kepulauan Selayar",
    "kodeKlasifikasi": "SS.220",
    "nomorSurat": "B-211/7301/SS.220/2026",
    "perihal": "SPKL persiapan administrasi dan pelatihan SE2026"
  },
  {
    "id": "su-212",
    "nomorUrut": 212,
    "tanggal": "1 Juni 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "Polres Selayar",
    "kodeKlasifikasi": "KA.110",
    "nomorSurat": "B-212/7301/KA.110/2026",
    "perihal": "Permintaan Personil"
  },
  {
    "id": "su-213",
    "nomorUrut": 213,
    "tanggal": "1 Juni 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "Bupati",
    "kodeKlasifikasi": "HM.010",
    "nomorSurat": "B-213/7301/HM.010/2026",
    "perihal": "Permintaan Pembukaan Pelatihan"
  },
  {
    "id": "su-214",
    "nomorUrut": 214,
    "tanggal": "9 Juni 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "Kepala Kantor UPP Kelas III Jampea",
    "kodeKlasifikasi": "VS 330",
    "nomorSurat": "B-214/7301/VS 330/2026",
    "perihal": "Permintaan Data Simoppel"
  },
  {
    "id": "su-215",
    "nomorUrut": 215,
    "tanggal": "9 Juni 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "Kepala Kantor UPP Kelas III Selayar",
    "kodeKlasifikasi": "VS 330",
    "nomorSurat": "B-215/7301/VS 330/2026",
    "perihal": "Permintaan Data Simoppel"
  },
  {
    "id": "su-216",
    "nomorUrut": 216,
    "tanggal": "9 Juni 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "Kepala Kantor UPBU Kelas III H Aroeppala Selayar",
    "kodeKlasifikasi": "VS 330",
    "nomorSurat": "B-216/7301/VS 330/2026",
    "perihal": "Permintaan Data Simoppel"
  },
  {
    "id": "su-217",
    "nomorUrut": 217,
    "tanggal": "11 Juni 2026",
    "jenisSurat": "Internal",
    "tujuan": "Pegawai BPS Kab. Kepulauan Selayar",
    "kodeKlasifikasi": "SS.330",
    "nomorSurat": "B-217/7301/SS.330/2026",
    "perihal": "Rapat Rutin, Persiapan Pencanangan dan/atau Apel Siaga"
  },
  {
    "id": "su-217.1",
    "nomorUrut": 217.1,
    "tanggal": "11 Juni 2026",
    "jenisSurat": "Internal",
    "tujuan": "Pegawai BPS Kab. Kepulauan Selayar",
    "kodeKlasifikasi": "SS.330",
    "nomorSurat": "B-217.1/7301/SS.330/2026",
    "perihal": "Internalisasi dan Monev Pembinaan Statistik Sektoral Semester I Tahun 2026"
  },
  {
    "id": "su-218",
    "nomorUrut": 218,
    "tanggal": "12 Juni 2026",
    "jenisSurat": "Internal",
    "tujuan": "Pegawai BPS Kab. Kepulauan Selayar",
    "kodeKlasifikasi": "PL.714",
    "nomorSurat": "B-218/7301/PL.714/2026",
    "perihal": "Berita Acara Barang Persedian"
  },
  {
    "id": "su-219",
    "nomorUrut": 219,
    "tanggal": "12 Juni 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "BPS Provinsi Sulawesi Selatan",
    "kodeKlasifikasi": "PL.810",
    "nomorSurat": "B-219/7301/PL.810/2026",
    "perihal": "Surat Permohonan Penerbitan SK Penghapusan BMN"
  },
  {
    "id": "su-220",
    "nomorUrut": 220,
    "tanggal": "15 Juni 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "Kepala Bagian Umum dan Protokol Setda",
    "kodeKlasifikasi": "SS.190",
    "nomorSurat": "B-220/7301/SS.190/2026",
    "perihal": "Peminjaman ruang pola"
  },
  {
    "id": "su-221",
    "nomorUrut": 221,
    "tanggal": "17 Juni 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "BPS Provinsi Sulawesi Selatan",
    "kodeKlasifikasi": "KA.110",
    "nomorSurat": "B-221/7301/KA.110/2026",
    "perihal": "Permohonan Ijin Pengadaan Perlengkapan Petugas Daerah 3T di Kabupaten Kepulauan Selayar"
  },
  {
    "id": "su-222",
    "nomorUrut": 222,
    "tanggal": "17 Juni 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "Kepala Bagian Umum dan Protokol Setda",
    "kodeKlasifikasi": "SS.190",
    "nomorSurat": "B-222/7301/SS.190/2026",
    "perihal": "Revisi Permohonan Peminjaman ruang pola"
  },
  {
    "id": "su-223",
    "nomorUrut": 223,
    "tanggal": "17 Juni 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "Bupati",
    "kodeKlasifikasi": "SS.190",
    "nomorSurat": "B-223/7301/SS.190/2026",
    "perihal": "Permohonan Dukungan dan Kehadiran pada Kegiatan Pencanangan SE2026"
  },
  {
    "id": "su-224",
    "nomorUrut": 224,
    "tanggal": "17 Juni 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "OPD",
    "kodeKlasifikasi": "SS.190",
    "nomorSurat": "B-224/7301/SS.190/2026",
    "perihal": "Undangan Pencanagan SE2026"
  },
  {
    "id": "su-225",
    "nomorUrut": 225,
    "tanggal": "17 Juni 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "KSP Berkat",
    "kodeKlasifikasi": "VS.330",
    "nomorSurat": "B-225/7301/VS.330/2026",
    "perihal": ""
  },
  {
    "id": "su-226",
    "nomorUrut": 226,
    "tanggal": "17 Juni 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "",
    "kodeKlasifikasi": "VS.330",
    "nomorSurat": "B-226/7301/VS.330/2026",
    "perihal": ""
  },
  {
    "id": "su-227",
    "nomorUrut": 227,
    "tanggal": "17 Juni 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "BPS Provinsi Sulawesi Selatan",
    "kodeKlasifikasi": "KS.200",
    "nomorSurat": "B-227/7301/KS.200/2026",
    "perihal": "Surat Persetujuan Naskah Siap Rilis Booklet Indikator Makro Sosial Ekonomi Kabupaten Kepulauan Selayar 2025"
  },
  {
    "id": "su-228",
    "nomorUrut": 228,
    "tanggal": "17 Juni 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "Pegawai BPS Kab. Kepulauan Selayar",
    "kodeKlasifikasi": "SS.190",
    "nomorSurat": "B-228/7301/SS.190/2026",
    "perihal": "Undangan Pencanagan SE2026"
  },
  {
    "id": "su-229",
    "nomorUrut": 229,
    "tanggal": "17 Juni 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "Petugas SE2026 Kec. Benteng",
    "kodeKlasifikasi": "SS.190",
    "nomorSurat": "B-229/7301/SS.190/2026",
    "perihal": "Undangan Pencanagan SE2026"
  },
  {
    "id": "su-230",
    "nomorUrut": 230,
    "tanggal": "17 Juni 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "Petugas SE2026 Kec. Benteng",
    "kodeKlasifikasi": "SS.360",
    "nomorSurat": "B-230/7301/SS.360/2026",
    "perihal": "Undangan Rapat Evaluasi Tim Pendataan Lapangan SE2026 Kec Benteng"
  },
  {
    "id": "su-231",
    "nomorUrut": 231,
    "tanggal": "18 Juni 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "Kanwil DJPB Makassar",
    "kodeKlasifikasi": "PR.440",
    "nomorSurat": "B-231/7301/PR.440/2026",
    "perihal": "Usulan Revisi DIPA RO Biasa, Khusus, dan SP SABA"
  },
  {
    "id": "su-232",
    "nomorUrut": 232,
    "tanggal": "18 Juni 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "KPN Kopkar Kementerian Agama",
    "kodeKlasifikasi": "SS.330",
    "nomorSurat": "B-232/7301/SS.330/2026",
    "perihal": "Surat Pengantar Permintaan data SE2026"
  },
  {
    "id": "su-232.1",
    "nomorUrut": 232.1,
    "tanggal": "19 Juni 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "Petugas SE2026 Kab.Kepulauan Selayar",
    "kodeKlasifikasi": "KA.750",
    "nomorSurat": "B-232.1/7301/KA.750/2026",
    "perihal": "Undangan Pertemuan Petugas SE2026 Kec.bontoharu Kab.Kepulauan Selayar"
  },
  {
    "id": "su-233",
    "nomorUrut": 233,
    "tanggal": "21/06/2026",
    "jenisSurat": "Eksternal",
    "tujuan": "BPS Provinsi Sulawesi Selatan",
    "kodeKlasifikasi": "KS.200",
    "nomorSurat": "B-233/7301/KS.200/2026",
    "perihal": "surat tugas pelantikan dan pengambilan sumpah"
  },
  {
    "id": "su-234",
    "nomorUrut": 234,
    "tanggal": "22 Juni 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "KPPN Benteng",
    "kodeKlasifikasi": "KU.300",
    "nomorSurat": "B-234/7301/KU.300/2026",
    "perihal": "SPTJM Pencairan RO Khusus"
  },
  {
    "id": "su-235",
    "nomorUrut": 235,
    "tanggal": "22 Juni 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "BRI",
    "kodeKlasifikasi": "KU.230",
    "nomorSurat": "B-235/7301/KU.230/2026",
    "perihal": "SPR"
  },
  {
    "id": "su-236",
    "nomorUrut": 236,
    "tanggal": "22 Juni 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "Kelurahan se-Kecamatan Benteng",
    "kodeKlasifikasi": "TS.160",
    "nomorSurat": "B-236/7301/TS.160/2026",
    "perihal": "Pembinaan Kelurahan Cinta Statistik Tahun 2026"
  },
  {
    "id": "su-237",
    "nomorUrut": 237,
    "tanggal": "23 Juni 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "dinas pmd",
    "kodeKlasifikasi": "VS.330",
    "nomorSurat": "B-237/7301/VS.330/2026",
    "perihal": "Surat permintaan data k3"
  },
  {
    "id": "su-238",
    "nomorUrut": 238,
    "tanggal": "23 Juni 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "Polstat STIS",
    "kodeKlasifikasi": "KP.310",
    "nomorSurat": "B-238/7301/KP.310/2026",
    "perihal": "Surat Permintaan"
  },
  {
    "id": "su-239",
    "nomorUrut": 239,
    "tanggal": "24 Juni 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "Petugas SE2026 Kab.Kepulauan Selayar",
    "kodeKlasifikasi": "KA.750",
    "nomorSurat": "B-239/7301/KA.750/2026",
    "perihal": "Undangan Pertemuan Petugas SE2026 Kec. Bontomatene Kab.Kepulauan Selayar"
  },
  {
    "id": "su-240",
    "nomorUrut": 240,
    "tanggal": "24 Juni 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "Petugas SE2026 Kab.Kepulauan Selayar",
    "kodeKlasifikasi": "KA.750",
    "nomorSurat": "B-240/7301/KA.750/2026",
    "perihal": "Undangan Pertemuan Petugas SE2026 Kec. Bontoharu Kab.Kepulauan Selayar"
  },
  {
    "id": "su-241",
    "nomorUrut": 241,
    "tanggal": "24 Juni 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "Petugas SE2026 Kab.Kepulauan Selayar",
    "kodeKlasifikasi": "KA.750",
    "nomorSurat": "B-241/7301/KA.750/2026",
    "perihal": "Undangan Pertemuan Petugas SE2026 Kec. Benteng Kab.Kepulauan Selayar"
  },
  {
    "id": "su-242",
    "nomorUrut": 242,
    "tanggal": "24 Juni 2026",
    "jenisSurat": "Internal",
    "tujuan": "Ketua TIM SE2026",
    "kodeKlasifikasi": "PL.714",
    "nomorSurat": "B-242/7301/PL.714/2026",
    "perihal": "Berita Acara Serah Terima ATK SE2026"
  },
  {
    "id": "su-243",
    "nomorUrut": 243,
    "tanggal": "24 Juni 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "BPS Provinsi Sulawesi Selatan",
    "kodeKlasifikasi": "KS.200",
    "nomorSurat": "B-243/7301/KS.200/2026",
    "perihal": "Surat Persetujuan Naskah Siap Rilis Indikator Makro Sosial Ekonomi Kabupaten Kepulauan Selayar 2025"
  },
  {
    "id": "su-244",
    "nomorUrut": 244,
    "tanggal": "25 Juni 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "Petugas SE2026 Kab.Kepulauan Selayar",
    "kodeKlasifikasi": "KA.750",
    "nomorSurat": "B-244/7301/KA.750/2026",
    "perihal": "Undangan Pertemuan Petugas SE2026 Kec. Buki Kab.Kepulauan Selayar"
  },
  {
    "id": "su-245",
    "nomorUrut": 245,
    "tanggal": "25 Juni 2026",
    "jenisSurat": "Internal",
    "tujuan": "Badan Pusat Statistik Selayar",
    "kodeKlasifikasi": "SS.220",
    "nomorSurat": "B-245/7301/SS.220/2026",
    "perihal": "Surat Pernyataan Tidak ada Role Playing"
  },
  {
    "id": "su-246",
    "nomorUrut": 246,
    "tanggal": "26 Juni 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "Petugas SE2026 Kab.Kepulauan Selayar",
    "kodeKlasifikasi": "KA.750",
    "nomorSurat": "B-246/7301/KA.750/2026",
    "perihal": "Undangan Pertemuan Petugas SE2026 Kec. Takabonerate  Kab.Kepulauan Selayar"
  },
  {
    "id": "su-247",
    "nomorUrut": 247,
    "tanggal": "26 Juni 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "Petugas SE2026 Kab.Kepulauan Selayar",
    "kodeKlasifikasi": "KA.750",
    "nomorSurat": "B-247/7301/KA.750/2026",
    "perihal": "Undangan Pertemuan Petugas SE2026 Kec. Pasimasunggu  Kab.Kepulauan Selayar"
  },
  {
    "id": "su-248",
    "nomorUrut": 248,
    "tanggal": "26 Juni 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "Petugas SE2026 Kab.Kepulauan Selayar",
    "kodeKlasifikasi": "KA.750",
    "nomorSurat": "B-248/7301/KA.750/2026",
    "perihal": "Undangan Pertemuan Petugas SE2026 Kec. Pasimasunggu  Timur Kab.Kepulauan Selayar"
  },
  {
    "id": "su-249",
    "nomorUrut": 249,
    "tanggal": "26 Juni 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "Petugas SE2026 Kab.Kepulauan Selayar",
    "kodeKlasifikasi": "KA.750",
    "nomorSurat": "B-249/7301/KA.750/2026",
    "perihal": "Undangan Pertemuan Petugas SE2026 Kec. Pasimarannu Kab.Kepulauan Selayar"
  },
  {
    "id": "su-250",
    "nomorUrut": 250,
    "tanggal": "26 Juni 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "Petugas SE2026 Kab.Kepulauan Selayar",
    "kodeKlasifikasi": "KA.750",
    "nomorSurat": "B-250/7301/KA.750/2026",
    "perihal": "Undangan Pertemuan Petugas SE2026 Kec. Bontomanai Kab.Kepulauan Selayar"
  },
  {
    "id": "su-251",
    "nomorUrut": 251,
    "tanggal": "26 Juni 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "Petugas SE2026 Kab.Kepulauan Selayar",
    "kodeKlasifikasi": "KA.750",
    "nomorSurat": "B-251/7301/KA.750/2026",
    "perihal": "Undangan Pertemuan Petugas SE2026 Kec. Bontosikuyu Kab.Kepulauan Selayar"
  },
  {
    "id": "su-251.1",
    "nomorUrut": 251.1,
    "tanggal": "26 Juni 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "Petugas SE2026 Kab.Kepulauan Selayar",
    "kodeKlasifikasi": "VS.400",
    "nomorSurat": "B-251.1/7301/VS.400/2026",
    "perihal": "Persetujuan Data Pemutakhiran Data Perkembangan Desa 2026 (PODES)"
  },
  {
    "id": "su-251.2",
    "nomorUrut": 251.2,
    "tanggal": "26 Juni 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "Petugas SE2026 Kab.Kepulauan Selayar",
    "kodeKlasifikasi": "KA.750",
    "nomorSurat": "B-251.2/7301/KA.750/2026",
    "perihal": "Undangan Pertemuan Petugas SE2026 Kec. Pasilambena Kab.Kepulauan Selayar"
  },
  {
    "id": "su-252",
    "nomorUrut": 252,
    "tanggal": "29 Juni 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "ULP PLN",
    "kodeKlasifikasi": "SS.330",
    "nomorSurat": "B-252/7301/SS.330/2026",
    "perihal": "Permintaan data SE2026"
  },
  {
    "id": "su-253",
    "nomorUrut": 253,
    "tanggal": "29 Juni 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "Sekretariat UT",
    "kodeKlasifikasi": "SS.330",
    "nomorSurat": "B-253/7301/SS.330/2026",
    "perihal": "Permintaan data SE2026"
  },
  {
    "id": "su-254",
    "nomorUrut": 254,
    "tanggal": "29 Juni 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "PT. Tripper Nature",
    "kodeKlasifikasi": "SS.330",
    "nomorSurat": "B-254/7301/SS.330/2026",
    "perihal": "Permintaan data SE2026"
  },
  {
    "id": "su-255",
    "nomorUrut": 255,
    "tanggal": "29 Juni 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "PT Telkom",
    "kodeKlasifikasi": "SS.330",
    "nomorSurat": "B-255/7301/SS.330/2026",
    "perihal": "Permintaan data SE2026"
  },
  {
    "id": "su-256",
    "nomorUrut": 256,
    "tanggal": "29 Juni 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "Bank Sulselbar",
    "kodeKlasifikasi": "SS.330",
    "nomorSurat": "B-256/7301/SS.330/2026",
    "perihal": "Permintaan data SE2026"
  },
  {
    "id": "su-257",
    "nomorUrut": 257,
    "tanggal": "29 Juni 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "Bank Mandiri",
    "kodeKlasifikasi": "SS.330",
    "nomorSurat": "B-257/7301/SS.330/2026",
    "perihal": "Permintaan data SE2026"
  },
  {
    "id": "su-258",
    "nomorUrut": 258,
    "tanggal": "29 Juni 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "Bank BNI",
    "kodeKlasifikasi": "SS.330",
    "nomorSurat": "B-258/7301/SS.330/2026",
    "perihal": "Permintaan data SE2026"
  },
  {
    "id": "su-259",
    "nomorUrut": 259,
    "tanggal": "29 Juni 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "Kantor Kas BPD",
    "kodeKlasifikasi": "SS.330",
    "nomorSurat": "B-259/7301/SS.330/2026",
    "perihal": "Permintaan data SE2026"
  },
  {
    "id": "su-260",
    "nomorUrut": 260,
    "tanggal": "29 Juni 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "ITSBM",
    "kodeKlasifikasi": "SS.330",
    "nomorSurat": "B-260/7301/SS.330/2026",
    "perihal": "Permintaan data SE2026"
  },
  {
    "id": "su-261",
    "nomorUrut": 261,
    "tanggal": "29 Juni 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "Schultheis Dive Resort",
    "kodeKlasifikasi": "SS.330",
    "nomorSurat": "B-261/7301/SS.330/2026",
    "perihal": "Permintaan data SE2026"
  },
  {
    "id": "su-262",
    "nomorUrut": 262,
    "tanggal": "29 Juni 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "PLTD Tangkala",
    "kodeKlasifikasi": "SS.330",
    "nomorSurat": "B-262/7301/SS.330/2026",
    "perihal": "Permintaan data SE2026"
  },
  {
    "id": "su-263",
    "nomorUrut": 263,
    "tanggal": "30 Juni 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "Direktur PMSS BPS RI",
    "kodeKlasifikasi": "VS.100",
    "nomorSurat": "B-263/7301/VS.100/2026",
    "perihal": "Usulan Penggantian Sampel Blok Sensus IMK Tahunan 2026"
  },
  {
    "id": "su-263.1",
    "nomorUrut": 263.1,
    "tanggal": "30 Juni 2026",
    "jenisSurat": "Internal",
    "tujuan": "PPK",
    "kodeKlasifikasi": "KU.520",
    "nomorSurat": "B-263.1/7301/KU.520/2026",
    "perihal": "SPTJM Belanja Dibayar Di Muka (sewa gudang, canva, zoom, adobe)"
  },
  {
    "id": "su-264",
    "nomorUrut": 264,
    "tanggal": "2 Juli 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "TPI Pemda Kepulauan Selayar",
    "kodeKlasifikasi": "PS.200",
    "nomorSurat": "B-264/7301/PS.200/2026",
    "perihal": "Surat Undangan Interviu TPI Kepulauan Selayar EPSS 2026"
  },
  {
    "id": "su-265",
    "nomorUrut": 265,
    "tanggal": "3 Juli 2026",
    "jenisSurat": "Internal",
    "tujuan": "Pegawai BPS Kab. Kepulauan Selayar",
    "kodeKlasifikasi": "PR.710",
    "nomorSurat": "B-265/7301/PR.710/2026",
    "perihal": "Undangan Rapat Monitoring Capaian Kinerja Triwulan II 2026"
  },
  {
    "id": "su-265",
    "nomorUrut": 265,
    "tanggal": "3 Juli 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "BPS Provinsi Sulawesi Selatan",
    "kodeKlasifikasi": "PL.530",
    "nomorSurat": "B-265/7301/PL.530/2026",
    "perihal": "Surat Pengantar Wasdal BMN Semester II dan Tahunan 2025"
  },
  {
    "id": "su-266",
    "nomorUrut": 266,
    "tanggal": "6 Juli 2026",
    "jenisSurat": "Internal",
    "tujuan": "Ahmad Musawwir",
    "kodeKlasifikasi": "KP.370",
    "nomorSurat": "B-266/7301/KP.370/2026",
    "perihal": "Surat pemanggilan pertama"
  },
  {
    "id": "su-266",
    "nomorUrut": 266,
    "tanggal": "6 Juli 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "Kepala Kantor UPP Kelas III Jampea",
    "kodeKlasifikasi": "VS-330",
    "nomorSurat": "B-266/7301/VS-330/2026",
    "perihal": "Permintaan data SIMOPPEL"
  },
  {
    "id": "su-267",
    "nomorUrut": 267,
    "tanggal": "6 Juli 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "Kepala Kantor UPP Kelas III Selayar",
    "kodeKlasifikasi": "VS-330",
    "nomorSurat": "B-267/7301/VS-330/2026",
    "perihal": "Permintaan data SIMOPPEL"
  },
  {
    "id": "su-268",
    "nomorUrut": 268,
    "tanggal": "6 Juli 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "Kepala Kantor UPBU Kelas III H Aroeppala Selayar",
    "kodeKlasifikasi": "VS-330",
    "nomorSurat": "B-268/7301/VS-330/2026",
    "perihal": "Permintaan data SIMOPPEL"
  },
  {
    "id": "su-269",
    "nomorUrut": 269,
    "tanggal": "6 Juli 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "BPS Provinsi Sulawesi Selatan",
    "kodeKlasifikasi": "PL.530",
    "nomorSurat": "B-269/7301/PL.530/2026",
    "perihal": "Pengantar BAST SNLIK dan Buku Kerja"
  },
  {
    "id": "su-270",
    "nomorUrut": 270,
    "tanggal": "7 Juli 2026",
    "jenisSurat": "Internal",
    "tujuan": "Ahmad Musawwir",
    "kodeKlasifikasi": "KP.370",
    "nomorSurat": "B-270/7301/KP.370/2026",
    "perihal": "Berita Acara Pemeriksaan"
  },
  {
    "id": "su-270",
    "nomorUrut": 270,
    "tanggal": "7 Juli 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "Kantor Wilayah DJPb Sulawesi Selatan",
    "kodeKlasifikasi": "PR-440",
    "nomorSurat": "B-270/7301/PR-440/2026",
    "perihal": "Permohonan Usulan Revisi Halaman III DIPA Triuwlan III Tahun Anggaran 2026"
  },
  {
    "id": "su-271",
    "nomorUrut": 271,
    "tanggal": "7 Juli 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "Kantor Wilayah DJPb Sulawesi Selatan",
    "kodeKlasifikasi": "PR-440",
    "nomorSurat": "B-271/7301/PR-440/2026",
    "perihal": "SPTJM Revisi Halaman III DIPA Triwulan III Tahun 2026"
  },
  {
    "id": "su-272",
    "nomorUrut": 272,
    "tanggal": "7 Juli 2026",
    "jenisSurat": "Internal",
    "tujuan": "BPS Selayar",
    "kodeKlasifikasi": "PL.530",
    "nomorSurat": "B-272/7301/PL.530/2026",
    "perihal": "BAST Kuesione SE"
  },
  {
    "id": "su-273",
    "nomorUrut": 273,
    "tanggal": "8 Juli 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "surat pemanggilan",
    "kodeKlasifikasi": "KP.200",
    "nomorSurat": "B-273/7301/KP.200/2026",
    "perihal": ""
  },
  {
    "id": "su-274",
    "nomorUrut": 274,
    "tanggal": "8 Juli 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "Kepala Diskominfo, Dinas Kesehatan",
    "kodeKlasifikasi": "PS.100",
    "nomorSurat": "B-274/7301/PS.100/2026",
    "perihal": "Surat Undangan Pembinaan Statistik Sektoral 2025 - Identifikasi Kegiatan Statistik"
  },
  {
    "id": "su-275",
    "nomorUrut": 275,
    "tanggal": "8 Juli 2026",
    "jenisSurat": "Internal",
    "tujuan": "Pelaksana Pelayanan Publik BPS Kabupaten Kepulauan Selayar",
    "kodeKlasifikasi": "OT.100",
    "nomorSurat": "B-275/7301/OT.100/2026",
    "perihal": "Rekomendasi Perbaikan Pelayanan Publik Semester 1 Tahun 2026"
  },
  {
    "id": "su-276",
    "nomorUrut": 276,
    "tanggal": "9 Juli 2026",
    "jenisSurat": "Internal",
    "tujuan": "Kepala BPS Kabupaten Kepulauan Selayar",
    "kodeKlasifikasi": "PR.630",
    "nomorSurat": "B-276/7301/PR.630/2026",
    "perihal": "BA AKIP 2026"
  },
  {
    "id": "su-277",
    "nomorUrut": 277,
    "tanggal": "10 Juli 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "Petugas Sakernas Agustus 2026",
    "kodeKlasifikasi": "VS.220",
    "nomorSurat": "B-277/7301/VS.220/2026",
    "perihal": "Undangan Pelatihan Petugas Sakernas Agustus 2026"
  },
  {
    "id": "su-278",
    "nomorUrut": 278,
    "tanggal": "10 Juli 2026",
    "jenisSurat": "Internal",
    "tujuan": "Kepala",
    "kodeKlasifikasi": "KU.250",
    "nomorSurat": "B-278/7301/KU.250/2026",
    "perihal": "Pengembalian penggunaan UP 8.000.000"
  },
  {
    "id": "su-279",
    "nomorUrut": 279,
    "tanggal": "13 Juli 2026",
    "jenisSurat": "Internal",
    "tujuan": "Kepala",
    "kodeKlasifikasi": "KU.250",
    "nomorSurat": "B-279/7301/KU.250/2026",
    "perihal": "Pengembalian 11.000.000"
  },
  {
    "id": "su-280",
    "nomorUrut": 280,
    "tanggal": "15 Juli 2026",
    "jenisSurat": "Internal",
    "tujuan": "BPS Provinsi Sulawesi Selatan",
    "kodeKlasifikasi": "PR.000",
    "nomorSurat": "B-280/7301/PR.000/2026",
    "perihal": "Permintaan Replikasi"
  },
  {
    "id": "su-281",
    "nomorUrut": 281,
    "tanggal": "15 Juli 2026",
    "jenisSurat": "Internal",
    "tujuan": "Kepala",
    "kodeKlasifikasi": "PR.000",
    "nomorSurat": "B-281/7301/PR.000/2026",
    "perihal": "Surat Pernyataan"
  },
  {
    "id": "su-282",
    "nomorUrut": 282,
    "tanggal": "15 Juli 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "BPS Provinsi Sulawesi Selatan",
    "kodeKlasifikasi": "PL.530",
    "nomorSurat": "B-282/7301/PL.530/2026",
    "perihal": "Bahan Opname"
  },
  {
    "id": "su-283",
    "nomorUrut": 283,
    "tanggal": "16 Juli 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "Pondok Pesantren Abduk Qadir Qasim Mare Mare",
    "kodeKlasifikasi": "SS.330",
    "nomorSurat": "B-283/7301/SS.330/2026",
    "perihal": "Pendataan Keluarga Khusus SE2026"
  },
  {
    "id": "su-284",
    "nomorUrut": 284,
    "tanggal": "16 Juli 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "Pondok Pesantren Tahfizhul Qur'an Al-Wahdah (Pondok Putra)",
    "kodeKlasifikasi": "SS.330",
    "nomorSurat": "B-284/7301/SS.330/2026",
    "perihal": "Pendataan Keluarga Khusus SE2026"
  },
  {
    "id": "su-285",
    "nomorUrut": 285,
    "tanggal": "16 Juli 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "Pondok Pesantren As Sunnah Selayar",
    "kodeKlasifikasi": "SS.330",
    "nomorSurat": "B-285/7301/SS.330/2026",
    "perihal": "Pendataan Keluarga Khusus SE2026"
  },
  {
    "id": "su-286",
    "nomorUrut": 286,
    "tanggal": "16 Juli 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "Pondok Pesantren Tahfizhul Qur'an Al-Wahdah (Pondok Putri)",
    "kodeKlasifikasi": "SS.330",
    "nomorSurat": "B-286/7301/SS.330/2026",
    "perihal": "Pendataan Keluarga Khusus SE2026"
  },
  {
    "id": "su-287",
    "nomorUrut": 287,
    "tanggal": "16 Juli 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "Pondok Pesantren Babussalam Selayar",
    "kodeKlasifikasi": "SS.330",
    "nomorSurat": "B-287/7301/SS.330/2026",
    "perihal": "Pendataan Keluarga Khusus SE2026"
  },
  {
    "id": "su-288",
    "nomorUrut": 288,
    "tanggal": "16 Juli 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "Pondok Pesantren Sayyidah Maryam Selayar",
    "kodeKlasifikasi": "SS.330",
    "nomorSurat": "B-288/7301/SS.330/2026",
    "perihal": "Pendataan Keluarga Khusus SE2026"
  },
  {
    "id": "su-289",
    "nomorUrut": 289,
    "tanggal": "16 Juli 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "Pondok Pesantren Darul Ulum Pao Etang",
    "kodeKlasifikasi": "SS.330",
    "nomorSurat": "B-289/7301/SS.330/2026",
    "perihal": "Pendataan Keluarga Khusus SE2026"
  },
  {
    "id": "su-290",
    "nomorUrut": 290,
    "tanggal": "16 Juli 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "Rutan Kelas IIB Selayar",
    "kodeKlasifikasi": "SS.330",
    "nomorSurat": "B-290/7301/SS.330/2026",
    "perihal": "Pendataan Keluarga Khusus SE2026"
  },
  {
    "id": "su-291",
    "nomorUrut": 291,
    "tanggal": "20 Juli 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "Kepala Dinas Pertanian",
    "kodeKlasifikasi": "VS.330",
    "nomorSurat": "B-291/7301/VS.330/2026",
    "perihal": "Permintaan Bukti Dukung PDRB"
  },
  {
    "id": "su-292",
    "nomorUrut": 292,
    "tanggal": "20 Juli 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "Kepala Dinas Perikanan",
    "kodeKlasifikasi": "VS.330",
    "nomorSurat": "B-292/7301/VS.330/2026",
    "perihal": "Permintaan Bukti Dukung PDRB"
  },
  {
    "id": "su-293",
    "nomorUrut": 293,
    "tanggal": "20 Juli 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "Kepala DInas Pariwisata",
    "kodeKlasifikasi": "VS.330",
    "nomorSurat": "B-293/7301/VS.330/2026",
    "perihal": "Permintaan Bukti Dukung PDRB"
  },
  {
    "id": "su-294",
    "nomorUrut": 294,
    "tanggal": "20 Juli 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "Kepala BPKAD",
    "kodeKlasifikasi": "VS.330",
    "nomorSurat": "B-294/7301/VS.330/2026",
    "perihal": "Permintaan Bukti Dukung PDRB"
  },
  {
    "id": "su-295",
    "nomorUrut": 295,
    "tanggal": "20 Juli 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "Kepala DInas PMPTSP",
    "kodeKlasifikasi": "VS.330",
    "nomorSurat": "B-295/7301/VS.330/2026",
    "perihal": "Permintaan Bukti Dukung PDRB"
  },
  {
    "id": "su-296",
    "nomorUrut": 296,
    "tanggal": "20 Juli 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "Kepala Dinas UPT KPH",
    "kodeKlasifikasi": "VS.330",
    "nomorSurat": "B-296/7301/VS.330/2026",
    "perihal": "Permintaan Bukti Dukung PDRB"
  },
  {
    "id": "su-297",
    "nomorUrut": 297,
    "tanggal": "20 Juli 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "Manager PLN",
    "kodeKlasifikasi": "VS.330",
    "nomorSurat": "B-297/7301/VS.330/2026",
    "perihal": "Permintaan Bukti Dukung PDRB"
  },
  {
    "id": "su-298",
    "nomorUrut": 298,
    "tanggal": "20 Juli 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "Kepala Dinas PMD",
    "kodeKlasifikasi": "VS.330",
    "nomorSurat": "B-298/7301/VS.330/2026",
    "perihal": "Permintaan Bukti Dukung PDRB"
  },
  {
    "id": "su-299",
    "nomorUrut": 299,
    "tanggal": "21 Juli 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "Perum Bulog Cabang Bulukumba",
    "kodeKlasifikasi": "VS.330",
    "nomorSurat": "B-299/7301/VS.330/2026",
    "perihal": "Permintaan Bukti Dukung PDRB"
  },
  {
    "id": "su-300",
    "nomorUrut": 300,
    "tanggal": "21 Juli 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "BPS Provinsi Sulawesi Selatan",
    "kodeKlasifikasi": "KU.520",
    "nomorSurat": "B-300/7301/KU.520/2026",
    "perihal": "Surat Pengantar LBMN - Semester I Tahun 2026"
  },
  {
    "id": "su-301",
    "nomorUrut": 301,
    "tanggal": "22 Juli 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "BPS Provinsi Sulawesi Selatan",
    "kodeKlasifikasi": "KS.200",
    "nomorSurat": "B-301/7301/KS.200/2026",
    "perihal": "Surat Persetujuan Naskah Siap Rilis Publikasi Statistik Bongkar Muat Kabupaten Kepulauan Selayar Tahun 2025"
  },
  {
    "id": "su-302",
    "nomorUrut": 302,
    "tanggal": "23 Juli 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "BPS",
    "kodeKlasifikasi": "VS.220",
    "nomorSurat": "B-302/7301/VS.220/2026",
    "perihal": "NDA Fasih-Data SE 2026"
  },
  {
    "id": "su-303",
    "nomorUrut": 303,
    "tanggal": "23 Juli 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "Pemdes",
    "kodeKlasifikasi": "",
    "nomorSurat": "B-303/7301//2026",
    "perihal": ""
  },
  {
    "id": "su-304",
    "nomorUrut": 304,
    "tanggal": "24 Juli 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "Petugas SE2026 Kab.Kepulauan Selayar",
    "kodeKlasifikasi": "KA.750",
    "nomorSurat": "B-304/7301/KA.750/2026",
    "perihal": "Undangan Pertemuan Ke-II Petugas SE2026 Kec. Bontomatene Kab.Kepulauan Selayar"
  },
  {
    "id": "su-305",
    "nomorUrut": 305,
    "tanggal": "24 Juli 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "Petugas SE2026 Kab.Kepulauan Selayar",
    "kodeKlasifikasi": "KA.750",
    "nomorSurat": "B-305/7301/KA.750/2026",
    "perihal": "Undangan Pertemuan Ke-II Petugas SE2026 Kec. Bontomanai Kab.Kepulauan Selayar"
  },
  {
    "id": "su-306",
    "nomorUrut": 306,
    "tanggal": "24 Juli 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "Petugas SE2026 Kab.Kepulauan Selayar",
    "kodeKlasifikasi": "KA.750",
    "nomorSurat": "B-306/7301/KA.750/2026",
    "perihal": "Undangan Pertemuan Ke-II Petugas SE2026 Kec. Bontoharu Kab.Kepulauan Selayar"
  },
  {
    "id": "su-307",
    "nomorUrut": 307,
    "tanggal": "24 Juli 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "Petugas SE2026 Kab.Kepulauan Selayar",
    "kodeKlasifikasi": "KA.750",
    "nomorSurat": "B-307/7301/KA.750/2026",
    "perihal": "Undangan Pertemuan Ke-II Petugas SE2026 Kec. Bontosikuyu Kab.Kepulauan Selayar"
  },
  {
    "id": "su-308",
    "nomorUrut": 308,
    "tanggal": "24 Juli 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "Petugas SE2026 Kab.Kepulauan Selayar",
    "kodeKlasifikasi": "KA.750",
    "nomorSurat": "B-308/7301/KA.750/2026",
    "perihal": "Undangan Pertemuan Ke-II Petugas SE2026 Kec. BUKI Kab.Kepulauan Selayar"
  },
  {
    "id": "su-309",
    "nomorUrut": 309,
    "tanggal": "24 Juli 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "Petugas SE2026 Kab.Kepulauan Selayar",
    "kodeKlasifikasi": "KA.750",
    "nomorSurat": "B-309/7301/KA.750/2026",
    "perihal": "Undangan Pertemuan Ke-II Petugas SE2026 Kec. Benteng Kab.Kepulauan Selayar"
  },
  {
    "id": "su-310",
    "nomorUrut": 310,
    "tanggal": "24 Juli 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "Petugas SE2026 Kab.Kepulauan Selayar",
    "kodeKlasifikasi": "KA.750",
    "nomorSurat": "B-310/7301/KA.750/2026",
    "perihal": "Undangan Pertemuan Ke-II Petugas SE2026 Kec. Takabonerate  Kab.Kepulauan Selayar"
  },
  {
    "id": "su-311",
    "nomorUrut": 311,
    "tanggal": "24 Juli 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "Petugas SE2026 Kab.Kepulauan Selayar",
    "kodeKlasifikasi": "KA.750",
    "nomorSurat": "B-311/7301/KA.750/2026",
    "perihal": "Undangan Pertemuan Ke-II Petugas SE2026 Kec. Pasimasunggu  Kab.Kepulauan Selayar"
  },
  {
    "id": "su-312",
    "nomorUrut": 312,
    "tanggal": "24 Juli 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "Petugas SE2026 Kab.Kepulauan Selayar",
    "kodeKlasifikasi": "KA.750",
    "nomorSurat": "B-312/7301/KA.750/2026",
    "perihal": "Undangan Pertemuan Ke-II Petugas SE2026 Kec. Pasimasunggu Timur  Kab.Kepulauan Selayar"
  },
  {
    "id": "su-313",
    "nomorUrut": 313,
    "tanggal": "24 Juli 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "Petugas SE2026 Kab.Kepulauan Selayar",
    "kodeKlasifikasi": "KA.750",
    "nomorSurat": "B-313/7301/KA.750/2026",
    "perihal": "Undangan Pertemuan Ke-II Petugas SE2026 Kec. Pasimarannu  Kab.Kepulauan Selayar"
  },
  {
    "id": "su-314",
    "nomorUrut": 314,
    "tanggal": "24 Juli 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "Petugas SE2026 Kab.Kepulauan Selayar",
    "kodeKlasifikasi": "KA.750",
    "nomorSurat": "B-314/7301/KA.750/2026",
    "perihal": "Undangan Pertemuan Ke-II Petugas SE2026 Kec. Pasilambena  Kab.Kepulauan Selayar"
  },
  {
    "id": "su-315",
    "nomorUrut": 315,
    "tanggal": "27 Juli 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "KPPN Benteng",
    "kodeKlasifikasi": "KU.520",
    "nomorSurat": "B-315/7301/KU.520/2026",
    "perihal": "Surat Pengantar Laporan Keuangan Semester I Tahun Anggaran 2026"
  },
  {
    "id": "su-315.1`",
    "nomorUrut": "315.1`",
    "tanggal": "28 Juli 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "Mahsiswa PKL UNM 2026 (NURUL HAYYAT)",
    "kodeKlasifikasi": "KP.630.NN",
    "nomorSurat": "B-315.1`/7301/KP.630.NN/2026",
    "perihal": "Sertifikat Peserta/Mahasiswa PKL 2026"
  },
  {
    "id": "su-315.2",
    "nomorUrut": 315.2,
    "tanggal": "28 Juli 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "Mahsiswa PKL UNM 2026 (SRI WULANDARI)",
    "kodeKlasifikasi": "KP.630.NN",
    "nomorSurat": "B-315.2/7301/KP.630.NN/2026",
    "perihal": "Sertifikat Peserta/Mahasiswa PKL 2026"
  },
  {
    "id": "su-316",
    "nomorUrut": 316,
    "tanggal": "30 Juli 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "BPS Provinsi Sulawesi Selatan",
    "kodeKlasifikasi": "VS.320",
    "nomorSurat": "B-316/7301/VS.320/2026",
    "perihal": "Surat Permohonan Penambahan Petugas Survei Kesejahteraan Petani (SKP) 2026"
  },
  {
    "id": "su-317",
    "nomorUrut": 317,
    "tanggal": "30 Juli 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "BPS Provinsi Sulawesi Selatan",
    "kodeKlasifikasi": "SS.330",
    "nomorSurat": "B-317/7301/SS.330/2026",
    "perihal": "Surat Permohonan Penambahan Instrumen Pendataan Lengkap SE2026"
  },
  {
    "id": "su-318",
    "nomorUrut": 318,
    "tanggal": "31 Juli 2026",
    "jenisSurat": "Internal",
    "tujuan": "Ahmad Musawwir",
    "kodeKlasifikasi": "KU.250",
    "nomorSurat": "B-318/7301/KU.250/2026",
    "perihal": "Tanda Terima Pengembalian Uang"
  },
  {
    "id": "su-319",
    "nomorUrut": 319,
    "tanggal": "31 Juli 2026",
    "jenisSurat": "Internal",
    "tujuan": "Ahmad Musawwir",
    "kodeKlasifikasi": "KU.250",
    "nomorSurat": "B-319/7301/KU.250/2026",
    "perihal": "Tanda Terima Pengembalian Uang"
  },
  {
    "id": "su-320",
    "nomorUrut": 320,
    "tanggal": "31 Juli 2026",
    "jenisSurat": "Internal",
    "tujuan": "BPS Selayar",
    "kodeKlasifikasi": "KU.300",
    "nomorSurat": "B-320/7301/KU.300/2026",
    "perihal": "Permintaan Kerja Lembur Perbaikan Anomali SE2026 Tahun 2026"
  },
  {
    "id": "su-321",
    "nomorUrut": 321,
    "tanggal": "31 Juli 2026",
    "jenisSurat": "Internal",
    "tujuan": "Tim Pelaksana Sensus Ekonomi 2026",
    "kodeKlasifikasi": "KU.300",
    "nomorSurat": "B-321/7301/KU.300/2026",
    "perihal": "SPKL Lembur Perbaikan Anomali SE2026 Tahun 2026"
  },
  {
    "id": "su-321.1",
    "nomorUrut": 321.1,
    "tanggal": "31 Juli 2026",
    "jenisSurat": "Internal",
    "tujuan": "BPS Selayar",
    "kodeKlasifikasi": "KU.300",
    "nomorSurat": "B-321.1/7301/KU.300/2026",
    "perihal": "Permintaan Kerja Lembur Seleksi Wawancara Magang Batch 1 BPS Kabupaten Kepulauan Selayar"
  },
  {
    "id": "su-321.2",
    "nomorUrut": 321.2,
    "tanggal": "31 Juli 2026",
    "jenisSurat": "Internal",
    "tujuan": "Tim Seleksi Peserta Magang batch I",
    "kodeKlasifikasi": "KU.300",
    "nomorSurat": "B-321.2/7301/KU.300/2026",
    "perihal": "SPKL Lembur Seleksi Wawancara Magang Batch 1 BPS Kabupaten Kepulauan Selayar"
  },
  {
    "id": "su-322",
    "nomorUrut": 322,
    "tanggal": "31 Juli 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "Perserta Magang batch I",
    "kodeKlasifikasi": "KP.113",
    "nomorSurat": "B-322/7301/KP.113/2026",
    "perihal": "Tes Wawancara Peserta Magang"
  },
  {
    "id": "su-323",
    "nomorUrut": 323,
    "tanggal": "3 Agustu 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "Dinas Kependudukan dan Pencatatan Sipil, Badan Kepegawaian dan Pengembangan Sumber Daya Manusia",
    "kodeKlasifikasi": "KS.200",
    "nomorSurat": "B-323/7301/KS.200/2026",
    "perihal": "Surat pengantar permintaan data untuk publikasi Kecamatan Dalam Angka 2026"
  },
  {
    "id": "su-324",
    "nomorUrut": 324,
    "tanggal": "5 Agustus 2026",
    "jenisSurat": "Internal",
    "tujuan": "KPPN Benteng",
    "kodeKlasifikasi": "KU.230",
    "nomorSurat": "B-324/7301/KU.230/2026",
    "perihal": "Permohonan Pembatalan Validasi LPJ Bendahara Pengeluaran"
  },
  {
    "id": "su-325",
    "nomorUrut": 325,
    "tanggal": "5 Agustus 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "Petugas SE2026 Kab.Kepulauan Selayar",
    "kodeKlasifikasi": "KA.750",
    "nomorSurat": "B-325/7301/KA.750/2026",
    "perihal": "Undangan Pertemuan Ke-III Petugas SE2026 Kec. Bontomanai Kab.Kepulauan Selayar"
  },
  {
    "id": "su-326",
    "nomorUrut": 326,
    "tanggal": "5 Agustus 2026",
    "jenisSurat": "Internal",
    "tujuan": "Inspektorat",
    "kodeKlasifikasi": "KU.200",
    "nomorSurat": "B-326/7301/KU.200/2026",
    "perihal": "Surat pernyataan tidak ada dokumen spider"
  },
  {
    "id": "su-327",
    "nomorUrut": 327,
    "tanggal": "5 Agustus 2026",
    "jenisSurat": "Internal",
    "tujuan": "Pegawai BPS Kab. Kepulauan Selayar",
    "kodeKlasifikasi": "KU.900",
    "nomorSurat": "B-327/7301/KU.900/2026",
    "perihal": "BERITA ACARA SERAH TERIMA KARTU KREDIT PEMERINTAH"
  },
  {
    "id": "su-328",
    "nomorUrut": 328,
    "tanggal": "5 Agustus 2026",
    "jenisSurat": "Internal",
    "tujuan": "Pegawai BPS Kab. Kepulauan Selayar",
    "kodeKlasifikasi": "KU.500",
    "nomorSurat": "B-328/7301/KU.500/2026",
    "perihal": "SURAT PERNYATAAN OPERATOR SPIDER"
  },
  {
    "id": "su-329",
    "nomorUrut": 329,
    "tanggal": "6 Agustus 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "Kepala Kantor UPP Kelas III Jampea",
    "kodeKlasifikasi": "VS.330",
    "nomorSurat": "B-329/7301/VS.330/2026",
    "perihal": "Permintaan data SIMOPPEL"
  },
  {
    "id": "su-330",
    "nomorUrut": 330,
    "tanggal": "6 Agustus 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "Kepala Kantor UPP Kelas III Selayar",
    "kodeKlasifikasi": "VS.330",
    "nomorSurat": "B-330/7301/VS.330/2026",
    "perihal": "Permintaan data SIMOPPEL"
  },
  {
    "id": "su-331",
    "nomorUrut": 331,
    "tanggal": "6 Agustus 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "Kepala Kantor UPBU Kelas III H Aroeppala Selayar",
    "kodeKlasifikasi": "VS.330",
    "nomorSurat": "B-331/7301/VS.330/2026",
    "perihal": "Permintaan data SIMOPPEL"
  },
  {
    "id": "su-332",
    "nomorUrut": 332,
    "tanggal": "6 Agustus 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "BPS Provinsi Sulawesi Selatan",
    "kodeKlasifikasi": "VS.320",
    "nomorSurat": "B-332/7301/VS.320/2026",
    "perihal": "Surat Permohonan PPenggantian Sampel Ubinan SR3 2026"
  },
  {
    "id": "su-333",
    "nomorUrut": 333,
    "tanggal": "7 Agustus 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "Diskominfo, Dinkes, dan DP3AP2KB",
    "kodeKlasifikasi": "PS.100",
    "nomorSurat": "B-333/7301/PS.100/2026",
    "perihal": "Surat Undangan Pembinaan Statistik Sektoral 2025 - Proses Bisnis Statistik"
  },
  {
    "id": "su-334",
    "nomorUrut": 334,
    "tanggal": "7 Agustus 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "Mahsiswa PKL UNM 2026 (RESKI AMALIA)",
    "kodeKlasifikasi": "KP.630.NN",
    "nomorSurat": "B-334/7301/KP.630.NN/2026",
    "perihal": "Sertifikat Peserta/Mahasiswa PKL 2026"
  },
  {
    "id": "su-335",
    "nomorUrut": 335,
    "tanggal": "7 Agustus 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "Mahsiswa PKL UNM 2026 (HAFIDZAH KHAIRUNNISA)",
    "kodeKlasifikasi": "KP.630.NN",
    "nomorSurat": "B-335/7301/KP.630.NN/2026",
    "perihal": "Sertifikat Peserta/Mahasiswa PKL 2026"
  },
  {
    "id": "su-336",
    "nomorUrut": 336,
    "tanggal": "9 Agustus 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "BPS Provinsi Sulawesi Selatan",
    "kodeKlasifikasi": "VS.110",
    "nomorSurat": "B-336/7301/VS.110/2026",
    "perihal": "Surat Permohonon Penambahan Calon Mitra melalui Rekrutmen  Calon Mitra BPS di Aplikasi Sobat"
  },
  {
    "id": "su-337",
    "nomorUrut": 337,
    "tanggal": "9 Agustus 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "Kejaksaan Kepulauan Selayar",
    "kodeKlasifikasi": "SS.330",
    "nomorSurat": "B-337/7301/SS.330/2026",
    "perihal": "Permohonan Pendataan Pegawai Kejaksaan dalam Sensus Ekonomi 2026"
  },
  {
    "id": "su-338",
    "nomorUrut": 338,
    "tanggal": "9 Agustus 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "KPPN Benteng",
    "kodeKlasifikasi": "SS.330",
    "nomorSurat": "B-338/7301/SS.330/2026",
    "perihal": "Permohonan Pendataan Pegawai Kejaksaan dalam Sensus Ekonomi 2026"
  },
  {
    "id": "su-339",
    "nomorUrut": 339,
    "tanggal": "12 Agustus 2026",
    "jenisSurat": "Internal",
    "tujuan": "Pegawai BPS Kab. Kepulauan Selayar",
    "kodeKlasifikasi": "HM.010",
    "nomorSurat": "B-339/7301/HM.010/2026",
    "perihal": "Upacara Peringatan HUT RI Ke-81 Kemerdekaan Republik Indonesia Tahun 2026 di Lingkungan BPS Kep. Selayar"
  },
  {
    "id": "su-340",
    "nomorUrut": 340,
    "tanggal": "13 Agustus 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "Petugas Susenas September dan Seruti Triwulan III Tahun 2026",
    "kodeKlasifikasi": "VS.220",
    "nomorSurat": "B-340/7301/VS.220/2026",
    "perihal": "Surat Undangan Pelatihan Petugas Susenas September dan Seruti Triwulan III Tahun 2026"
  },
  {
    "id": "su-341",
    "nomorUrut": 341,
    "tanggal": "14 Agustus 2026",
    "jenisSurat": "Internal",
    "tujuan": "BPS Selayar",
    "kodeKlasifikasi": "KU.300",
    "nomorSurat": "B-341/7301/KU.300/2026",
    "perihal": "Permintaan Kerja Lembur Task Force SE2026 Tahun 2026"
  },
  {
    "id": "su-342",
    "nomorUrut": 342,
    "tanggal": "14 Agustus 2026",
    "jenisSurat": "Internal",
    "tujuan": "Tim Pelaksana Sensus Ekonomi 2026",
    "kodeKlasifikasi": "KU.300",
    "nomorSurat": "B-342/7301/KU.300/2026",
    "perihal": "SPKL Lembur Task Force SE2026 Tahun 2026"
  },
  {
    "id": "su-343",
    "nomorUrut": 343,
    "tanggal": "18 Agustus 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "Kelurahan se-Kecamatan Benteng",
    "kodeKlasifikasi": "TS.160",
    "nomorSurat": "B-343/7301/TS.160/2026",
    "perihal": "Undangan Penyampaian Hasil Kegiatan Kelurahan Cantik 2026"
  },
  {
    "id": "su-344",
    "nomorUrut": 344,
    "tanggal": "21 Agustus 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "Mitra",
    "kodeKlasifikasi": "VS.220",
    "nomorSurat": "B-344/7301/VS.220/2026",
    "perihal": "Undangan Pelatihan Petugas SKP Tahun 2026"
  },
  {
    "id": "su-344.1",
    "nomorUrut": 344.1,
    "tanggal": "21 Agustus 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "Petugas SE2026 Kab.Kepulauan Selayar",
    "kodeKlasifikasi": "KA.750",
    "nomorSurat": "B-344.1/7301/KA.750/2026",
    "perihal": "Undangan Pertemuan Ke-III Petugas SE2026 Kec. Bontomanai Kab.Kepulauan Selayar"
  },
  {
    "id": "su-345",
    "nomorUrut": 345,
    "tanggal": "24 Agustus 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "Mitra",
    "kodeKlasifikasi": "VS.220",
    "nomorSurat": "B-345/7301/VS.220/2026",
    "perihal": "Undangan Pelatihan Petugas SKNP Tahun 2026"
  },
  {
    "id": "su-346",
    "nomorUrut": 346,
    "tanggal": "2 September 2026",
    "jenisSurat": "Internal",
    "tujuan": "BPS Provinsi Sulawesi Selatan",
    "kodeKlasifikasi": "PL.611",
    "nomorSurat": "B-346/7301/PL.611/2026",
    "perihal": "Surat Pengantar BPKB Mobil Inova DD 1086 J"
  },
  {
    "id": "su-347",
    "nomorUrut": 347,
    "tanggal": "3 September 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "BPS Provinsi Sulawesi Selatan",
    "kodeKlasifikasi": "KP.320",
    "nomorSurat": "B-347/7301/KP.320/2026",
    "perihal": "Surat Usulan Mengikuti Ujian Kompetensi Kenaikan Jenjang Jabatan Fungsional"
  },
  {
    "id": "su-348",
    "nomorUrut": 348,
    "tanggal": "3 September 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "Kepala Kantor UPP Kelas III Jampea",
    "kodeKlasifikasi": "VS.330",
    "nomorSurat": "B-348/7301/VS.330/2026",
    "perihal": "Permintaan data SIMOPPEL"
  },
  {
    "id": "su-349",
    "nomorUrut": 349,
    "tanggal": "3 September 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "Kepala Kantor UPP Kelas III Selayar",
    "kodeKlasifikasi": "VS.330",
    "nomorSurat": "B-349/7301/VS.330/2026",
    "perihal": "Permintaan data SIMOPPEL"
  },
  {
    "id": "su-350",
    "nomorUrut": 350,
    "tanggal": "3 September 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "Kepala Kantor UPBU Kelas III H Aroeppala Selayar",
    "kodeKlasifikasi": "VS.330",
    "nomorSurat": "B-350/7301/VS.330/2026",
    "perihal": "Permintaan data SIMOPPEL"
  },
  {
    "id": "su-351",
    "nomorUrut": 351,
    "tanggal": "4 September 2026",
    "jenisSurat": "Internal",
    "tujuan": "Pegawai BPS Kab. Kepulauan Selayar",
    "kodeKlasifikasi": "PR.710",
    "nomorSurat": "B-351/7301/PR.710/2026",
    "perihal": "Undangan Rapat Bulan September"
  },
  {
    "id": "su-352",
    "nomorUrut": 352,
    "tanggal": "4 September 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "BPS Provinsi Sulawesi Selatan",
    "kodeKlasifikasi": "VS.110",
    "nomorSurat": "B-352/7301/VS.110/2026",
    "perihal": "Surat Penyesuaian Petugas Pengolahan SE2026 Wilkerstat"
  },
  {
    "id": "su-353",
    "nomorUrut": 353,
    "tanggal": "8 September 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "PT Pegadaian Benteng",
    "kodeKlasifikasi": "VS.330",
    "nomorSurat": "B-353/7301/VS.330/2026",
    "perihal": "Permintaan data SKNP"
  },
  {
    "id": "su-354",
    "nomorUrut": 354,
    "tanggal": "8 September 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "PT Pegadaian Bontomatene",
    "kodeKlasifikasi": "VS.330",
    "nomorSurat": "B-354/7301/VS.330/2026",
    "perihal": "Permintaan data SKNP"
  },
  {
    "id": "su-355",
    "nomorUrut": 355,
    "tanggal": "10 September 2026",
    "jenisSurat": "Internal",
    "tujuan": "KPPN Benteng",
    "kodeKlasifikasi": "KU.230",
    "nomorSurat": "B-355/7301/KU.230/2026",
    "perihal": "Permohonan Tambahan Uang Persediaan (TUP) RM"
  },
  {
    "id": "su-356",
    "nomorUrut": 356,
    "tanggal": "10 September 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "BPS Provinsi Sulawesi Selatan",
    "kodeKlasifikasi": "KP.310",
    "nomorSurat": "B-356/7301/KP.310/2026",
    "perihal": "Permohonan Izin Tugas Belajar Luar Negeri an. Fakhri Hafidzul Azhar, S.Tr.Stat"
  },
  {
    "id": "su-357",
    "nomorUrut": 357,
    "tanggal": "11 September 2026",
    "jenisSurat": "Internal",
    "tujuan": "Muhammad Ikbal Nur",
    "kodeKlasifikasi": "KP.370",
    "nomorSurat": "R-357/7301/KP.370/2026",
    "perihal": "Pemanggilan pertama penjelasan ketidakhadiran pegawai"
  },
  {
    "id": "su-358",
    "nomorUrut": 358,
    "tanggal": "14 September 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "Kepala Diskominfo, Dinas Kesehatan, DP32AKB",
    "kodeKlasifikasi": "PS.100",
    "nomorSurat": "B-358/7301/PS.100/2026",
    "perihal": "Surat Undangan Pembinaan Statistik Sektoral 2026 - Sistem Statistik Nasional"
  },
  {
    "id": "su-359",
    "nomorUrut": 359,
    "tanggal": "14 September 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "Mitra",
    "kodeKlasifikasi": "VS.220",
    "nomorSurat": "B-359/7301/VS.220/2026",
    "perihal": "Undangan Pelatihan Petugas SKSPPI Tahun 2026"
  },
  {
    "id": "su-360",
    "nomorUrut": 360,
    "tanggal": "17 September 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "Mitra",
    "kodeKlasifikasi": "HM.330",
    "nomorSurat": "B-360/7301/HM.330/2026",
    "perihal": "Balasan Permintaan Data"
  },
  {
    "id": "su-361",
    "nomorUrut": 361,
    "tanggal": "17 September 2026",
    "jenisSurat": "Internal",
    "tujuan": "Andi Basri",
    "kodeKlasifikasi": "KP.370",
    "nomorSurat": "B-361/7301/KP.370/2026",
    "perihal": "Pemanggilan pertama penjelasan ketidakhadiran pegawai"
  },
  {
    "id": "su-362",
    "nomorUrut": 362,
    "tanggal": "18 September 2026",
    "jenisSurat": "Internal",
    "tujuan": "Petugas Pengolahan Peta Wilkerstat SE2026",
    "kodeKlasifikasi": "VS.220",
    "nomorSurat": "B-362/7301/VS.220/2026",
    "perihal": "Surat Undangan Pelatihan Petugas Pengolahan Peta SE2026 Tahun 2026"
  },
  {
    "id": "su-363",
    "nomorUrut": 363,
    "tanggal": "22 September 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "Kepala BPS Provinsi Sulawesi Selatan",
    "kodeKlasifikasi": "KS.200",
    "nomorSurat": "B-363/7301/KS.200/2026",
    "perihal": "Surat Persetujuan Naskah Siap Rilis Publikasi Kecamatan Dalam Angka Kabupaten Kepulauan Selayar 2026"
  },
  {
    "id": "su-364",
    "nomorUrut": 364,
    "tanggal": "24 September 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "Mitra",
    "kodeKlasifikasi": "VS.220",
    "nomorSurat": "B-364/7301/VS.220/2026",
    "perihal": "Undangan Pelatihan Petugas SPDT NTP 2026"
  },
  {
    "id": "su-365",
    "nomorUrut": 365,
    "tanggal": "25 September 2026",
    "jenisSurat": "Internal",
    "tujuan": "Pegawai dan Pengurus DWP BPS Kab. Kep. Selayar",
    "kodeKlasifikasi": "HM.340",
    "nomorSurat": "B-365/7301/HM.340/2026",
    "perihal": "Undangan Upacara Hari Statistik Nasional Tahun 2026 dan Kegiatan Family Gathering"
  },
  {
    "id": "su-366",
    "nomorUrut": 366,
    "tanggal": "",
    "jenisSurat": "Internal",
    "tujuan": "",
    "kodeKlasifikasi": "",
    "nomorSurat": "B-366/7301//2026",
    "perihal": ""
  },
  {
    "id": "su-367",
    "nomorUrut": 367,
    "tanggal": "",
    "jenisSurat": "Internal",
    "tujuan": "",
    "kodeKlasifikasi": "",
    "nomorSurat": "B-367/7301//2026",
    "perihal": ""
  },
  {
    "id": "su-368",
    "nomorUrut": 368,
    "tanggal": "",
    "jenisSurat": "Internal",
    "tujuan": "",
    "kodeKlasifikasi": "",
    "nomorSurat": "B-368/7301//2026",
    "perihal": ""
  },
  {
    "id": "su-369",
    "nomorUrut": 369,
    "tanggal": "",
    "jenisSurat": "Internal",
    "tujuan": "",
    "kodeKlasifikasi": "",
    "nomorSurat": "B-369/7301//2026",
    "perihal": ""
  },
  {
    "id": "su-370",
    "nomorUrut": 370,
    "tanggal": "",
    "jenisSurat": "Internal",
    "tujuan": "",
    "kodeKlasifikasi": "",
    "nomorSurat": "B-370/7301//2026",
    "perihal": ""
  },
  {
    "id": "su-371",
    "nomorUrut": 371,
    "tanggal": "",
    "jenisSurat": "Internal",
    "tujuan": "",
    "kodeKlasifikasi": "",
    "nomorSurat": "B-371/7301//2026",
    "perihal": ""
  },
  {
    "id": "su-372",
    "nomorUrut": 372,
    "tanggal": "",
    "jenisSurat": "Internal",
    "tujuan": "",
    "kodeKlasifikasi": "",
    "nomorSurat": "B-372/7301//2026",
    "perihal": ""
  },
  {
    "id": "su-373",
    "nomorUrut": 373,
    "tanggal": "",
    "jenisSurat": "Internal",
    "tujuan": "",
    "kodeKlasifikasi": "",
    "nomorSurat": "B-373/7301//2026",
    "perihal": ""
  },
  {
    "id": "su-374",
    "nomorUrut": 374,
    "tanggal": "",
    "jenisSurat": "Internal",
    "tujuan": "",
    "kodeKlasifikasi": "",
    "nomorSurat": "B-374/7301//2026",
    "perihal": ""
  },
  {
    "id": "su-375",
    "nomorUrut": 375,
    "tanggal": "",
    "jenisSurat": "Internal",
    "tujuan": "",
    "kodeKlasifikasi": "",
    "nomorSurat": "B-375/7301//2026",
    "perihal": ""
  },
  {
    "id": "su-376",
    "nomorUrut": 376,
    "tanggal": "",
    "jenisSurat": "Internal",
    "tujuan": "",
    "kodeKlasifikasi": "",
    "nomorSurat": "B-376/7301//2026",
    "perihal": ""
  },
  {
    "id": "su-377",
    "nomorUrut": 377,
    "tanggal": "",
    "jenisSurat": "Internal",
    "tujuan": "",
    "kodeKlasifikasi": "",
    "nomorSurat": "B-377/7301//2026",
    "perihal": ""
  },
  {
    "id": "su-378",
    "nomorUrut": 378,
    "tanggal": "",
    "jenisSurat": "Internal",
    "tujuan": "",
    "kodeKlasifikasi": "",
    "nomorSurat": "B-378/7301//2026",
    "perihal": ""
  },
  {
    "id": "su-379",
    "nomorUrut": 379,
    "tanggal": "",
    "jenisSurat": "Internal",
    "tujuan": "",
    "kodeKlasifikasi": "",
    "nomorSurat": "B-379/7301//2026",
    "perihal": ""
  },
  {
    "id": "su-380",
    "nomorUrut": 380,
    "tanggal": "",
    "jenisSurat": "Internal",
    "tujuan": "",
    "kodeKlasifikasi": "",
    "nomorSurat": "B-380/7301//2026",
    "perihal": ""
  },
  {
    "id": "su-381",
    "nomorUrut": 381,
    "tanggal": "",
    "jenisSurat": "Internal",
    "tujuan": "",
    "kodeKlasifikasi": "",
    "nomorSurat": "B-381/7301//2026",
    "perihal": ""
  },
  {
    "id": "su-382",
    "nomorUrut": 382,
    "tanggal": "",
    "jenisSurat": "Internal",
    "tujuan": "",
    "kodeKlasifikasi": "",
    "nomorSurat": "B-382/7301//2026",
    "perihal": ""
  },
  {
    "id": "su-383",
    "nomorUrut": 383,
    "tanggal": "",
    "jenisSurat": "Internal",
    "tujuan": "",
    "kodeKlasifikasi": "",
    "nomorSurat": "B-383/7301//2026",
    "perihal": ""
  },
  {
    "id": "su-384",
    "nomorUrut": 384,
    "tanggal": "",
    "jenisSurat": "Internal",
    "tujuan": "",
    "kodeKlasifikasi": "",
    "nomorSurat": "B-384/7301//2026",
    "perihal": ""
  },
  {
    "id": "su-385",
    "nomorUrut": 385,
    "tanggal": "",
    "jenisSurat": "Internal",
    "tujuan": "",
    "kodeKlasifikasi": "",
    "nomorSurat": "B-385/7301//2026",
    "perihal": ""
  },
  {
    "id": "su-386",
    "nomorUrut": 386,
    "tanggal": "",
    "jenisSurat": "Internal",
    "tujuan": "",
    "kodeKlasifikasi": "",
    "nomorSurat": "B-386/7301//2026",
    "perihal": ""
  },
  {
    "id": "su-387",
    "nomorUrut": 387,
    "tanggal": "",
    "jenisSurat": "Internal",
    "tujuan": "",
    "kodeKlasifikasi": "",
    "nomorSurat": "B-387/7301//2026",
    "perihal": ""
  },
  {
    "id": "su-388",
    "nomorUrut": 388,
    "tanggal": "",
    "jenisSurat": "Internal",
    "tujuan": "",
    "kodeKlasifikasi": "",
    "nomorSurat": "B-388/7301//2026",
    "perihal": ""
  },
  {
    "id": "su-389",
    "nomorUrut": 389,
    "tanggal": "",
    "jenisSurat": "Internal",
    "tujuan": "",
    "kodeKlasifikasi": "",
    "nomorSurat": "B-389/7301//2026",
    "perihal": ""
  },
  {
    "id": "su-390",
    "nomorUrut": 390,
    "tanggal": "",
    "jenisSurat": "Internal",
    "tujuan": "",
    "kodeKlasifikasi": "",
    "nomorSurat": "B-390/7301//2026",
    "perihal": ""
  },
  {
    "id": "su-391",
    "nomorUrut": 391,
    "tanggal": "",
    "jenisSurat": "Internal",
    "tujuan": "",
    "kodeKlasifikasi": "",
    "nomorSurat": "B-391/7301//2026",
    "perihal": ""
  },
  {
    "id": "su-392",
    "nomorUrut": 392,
    "tanggal": "",
    "jenisSurat": "Internal",
    "tujuan": "",
    "kodeKlasifikasi": "",
    "nomorSurat": "B-392/7301//2026",
    "perihal": ""
  },
  {
    "id": "su-393",
    "nomorUrut": 393,
    "tanggal": "",
    "jenisSurat": "Internal",
    "tujuan": "",
    "kodeKlasifikasi": "",
    "nomorSurat": "B-393/7301//2026",
    "perihal": ""
  },
  {
    "id": "su-394",
    "nomorUrut": 394,
    "tanggal": "",
    "jenisSurat": "Internal",
    "tujuan": "",
    "kodeKlasifikasi": "",
    "nomorSurat": "B-394/7301//2026",
    "perihal": ""
  },
  {
    "id": "su-395",
    "nomorUrut": 395,
    "tanggal": "",
    "jenisSurat": "Internal",
    "tujuan": "",
    "kodeKlasifikasi": "",
    "nomorSurat": "B-395/7301//2026",
    "perihal": ""
  },
  {
    "id": "su-396",
    "nomorUrut": 396,
    "tanggal": "",
    "jenisSurat": "Internal",
    "tujuan": "",
    "kodeKlasifikasi": "",
    "nomorSurat": "B-396/7301//2026",
    "perihal": ""
  },
  {
    "id": "su-397",
    "nomorUrut": 397,
    "tanggal": "",
    "jenisSurat": "Internal",
    "tujuan": "",
    "kodeKlasifikasi": "",
    "nomorSurat": "B-397/7301//2026",
    "perihal": ""
  },
  {
    "id": "su-398",
    "nomorUrut": 398,
    "tanggal": "",
    "jenisSurat": "Internal",
    "tujuan": "",
    "kodeKlasifikasi": "",
    "nomorSurat": "B-398/7301//2026",
    "perihal": ""
  },
  {
    "id": "su-399",
    "nomorUrut": 399,
    "tanggal": "",
    "jenisSurat": "Internal",
    "tujuan": "",
    "kodeKlasifikasi": "",
    "nomorSurat": "B-399/7301//2026",
    "perihal": ""
  },
  {
    "id": "su-400",
    "nomorUrut": 400,
    "tanggal": "",
    "jenisSurat": "Internal",
    "tujuan": "",
    "kodeKlasifikasi": "",
    "nomorSurat": "B-400/7301//2026",
    "perihal": ""
  },
  {
    "id": "su-401",
    "nomorUrut": 401,
    "tanggal": "",
    "jenisSurat": "Internal",
    "tujuan": "",
    "kodeKlasifikasi": "",
    "nomorSurat": "B-401/7301//2026",
    "perihal": ""
  },
  {
    "id": "su-402",
    "nomorUrut": 402,
    "tanggal": "",
    "jenisSurat": "Internal",
    "tujuan": "",
    "kodeKlasifikasi": "",
    "nomorSurat": "B-402/7301//2026",
    "perihal": ""
  },
  {
    "id": "su-403",
    "nomorUrut": 403,
    "tanggal": "",
    "jenisSurat": "Internal",
    "tujuan": "",
    "kodeKlasifikasi": "",
    "nomorSurat": "B-403/7301//2026",
    "perihal": ""
  },
  {
    "id": "su-404",
    "nomorUrut": 404,
    "tanggal": "",
    "jenisSurat": "Internal",
    "tujuan": "",
    "kodeKlasifikasi": "",
    "nomorSurat": "B-404/7301//2026",
    "perihal": ""
  },
  {
    "id": "su-405",
    "nomorUrut": 405,
    "tanggal": "",
    "jenisSurat": "Internal",
    "tujuan": "",
    "kodeKlasifikasi": "",
    "nomorSurat": "B-405/7301//2026",
    "perihal": ""
  },
  {
    "id": "su-406",
    "nomorUrut": 406,
    "tanggal": "",
    "jenisSurat": "Internal",
    "tujuan": "",
    "kodeKlasifikasi": "",
    "nomorSurat": "B-406/7301//2026",
    "perihal": ""
  },
  {
    "id": "su-407",
    "nomorUrut": 407,
    "tanggal": "",
    "jenisSurat": "Internal",
    "tujuan": "",
    "kodeKlasifikasi": "",
    "nomorSurat": "B-407/7301//2026",
    "perihal": ""
  },
  {
    "id": "su-408",
    "nomorUrut": 408,
    "tanggal": "",
    "jenisSurat": "Internal",
    "tujuan": "",
    "kodeKlasifikasi": "",
    "nomorSurat": "B-408/7301//2026",
    "perihal": ""
  },
  {
    "id": "su-409",
    "nomorUrut": 409,
    "tanggal": "",
    "jenisSurat": "Internal",
    "tujuan": "",
    "kodeKlasifikasi": "",
    "nomorSurat": "B-409/7301//2026",
    "perihal": ""
  },
  {
    "id": "su-410",
    "nomorUrut": 410,
    "tanggal": "",
    "jenisSurat": "Internal",
    "tujuan": "",
    "kodeKlasifikasi": "",
    "nomorSurat": "B-410/7301//2026",
    "perihal": ""
  },
  {
    "id": "su-411",
    "nomorUrut": 411,
    "tanggal": "",
    "jenisSurat": "Internal",
    "tujuan": "",
    "kodeKlasifikasi": "",
    "nomorSurat": "B-411/7301//2026",
    "perihal": ""
  },
  {
    "id": "su-412",
    "nomorUrut": 412,
    "tanggal": "",
    "jenisSurat": "Internal",
    "tujuan": "",
    "kodeKlasifikasi": "",
    "nomorSurat": "B-412/7301//2026",
    "perihal": ""
  },
  {
    "id": "su-413",
    "nomorUrut": 413,
    "tanggal": "",
    "jenisSurat": "Internal",
    "tujuan": "",
    "kodeKlasifikasi": "",
    "nomorSurat": "B-413/7301//2026",
    "perihal": ""
  },
  {
    "id": "su-414",
    "nomorUrut": 414,
    "tanggal": "",
    "jenisSurat": "Internal",
    "tujuan": "",
    "kodeKlasifikasi": "",
    "nomorSurat": "B-414/7301//2026",
    "perihal": ""
  },
  {
    "id": "su-415",
    "nomorUrut": 415,
    "tanggal": "",
    "jenisSurat": "Internal",
    "tujuan": "",
    "kodeKlasifikasi": "",
    "nomorSurat": "B-415/7301//2026",
    "perihal": ""
  },
  {
    "id": "su-416",
    "nomorUrut": 416,
    "tanggal": "",
    "jenisSurat": "Internal",
    "tujuan": "",
    "kodeKlasifikasi": "",
    "nomorSurat": "B-416/7301//2026",
    "perihal": ""
  },
  {
    "id": "su-417",
    "nomorUrut": 417,
    "tanggal": "",
    "jenisSurat": "Internal",
    "tujuan": "",
    "kodeKlasifikasi": "",
    "nomorSurat": "B-417/7301//2026",
    "perihal": ""
  },
  {
    "id": "su-418",
    "nomorUrut": 418,
    "tanggal": "",
    "jenisSurat": "Internal",
    "tujuan": "",
    "kodeKlasifikasi": "",
    "nomorSurat": "B-418/7301//2026",
    "perihal": ""
  },
  {
    "id": "su-419",
    "nomorUrut": 419,
    "tanggal": "",
    "jenisSurat": "Internal",
    "tujuan": "",
    "kodeKlasifikasi": "",
    "nomorSurat": "B-419/7301//2026",
    "perihal": ""
  },
  {
    "id": "su-420",
    "nomorUrut": 420,
    "tanggal": "",
    "jenisSurat": "Internal",
    "tujuan": "",
    "kodeKlasifikasi": "",
    "nomorSurat": "B-420/7301//2026",
    "perihal": ""
  },
  {
    "id": "su-421",
    "nomorUrut": 421,
    "tanggal": "",
    "jenisSurat": "Internal",
    "tujuan": "",
    "kodeKlasifikasi": "",
    "nomorSurat": "B-421/7301//2026",
    "perihal": ""
  },
  {
    "id": "su-422",
    "nomorUrut": 422,
    "tanggal": "",
    "jenisSurat": "Internal",
    "tujuan": "",
    "kodeKlasifikasi": "",
    "nomorSurat": "B-422/7301//2026",
    "perihal": ""
  },
  {
    "id": "su-423",
    "nomorUrut": 423,
    "tanggal": "",
    "jenisSurat": "Internal",
    "tujuan": "",
    "kodeKlasifikasi": "",
    "nomorSurat": "B-423/7301//2026",
    "perihal": ""
  },
  {
    "id": "su-424",
    "nomorUrut": 424,
    "tanggal": "",
    "jenisSurat": "Internal",
    "tujuan": "",
    "kodeKlasifikasi": "",
    "nomorSurat": "B-424/7301//2026",
    "perihal": ""
  },
  {
    "id": "su-425",
    "nomorUrut": 425,
    "tanggal": "",
    "jenisSurat": "Internal",
    "tujuan": "",
    "kodeKlasifikasi": "",
    "nomorSurat": "B-425/7301//2026",
    "perihal": ""
  },
  {
    "id": "su-426",
    "nomorUrut": 426,
    "tanggal": "",
    "jenisSurat": "Internal",
    "tujuan": "",
    "kodeKlasifikasi": "",
    "nomorSurat": "B-426/7301//2026",
    "perihal": ""
  },
  {
    "id": "su-427",
    "nomorUrut": 427,
    "tanggal": "",
    "jenisSurat": "Internal",
    "tujuan": "",
    "kodeKlasifikasi": "",
    "nomorSurat": "B-427/7301//2026",
    "perihal": ""
  },
  {
    "id": "su-428",
    "nomorUrut": 428,
    "tanggal": "",
    "jenisSurat": "Internal",
    "tujuan": "",
    "kodeKlasifikasi": "",
    "nomorSurat": "B-428/7301//2026",
    "perihal": ""
  },
  {
    "id": "su-429",
    "nomorUrut": 429,
    "tanggal": "",
    "jenisSurat": "Internal",
    "tujuan": "",
    "kodeKlasifikasi": "",
    "nomorSurat": "B-429/7301//2026",
    "perihal": ""
  },
  {
    "id": "su-430",
    "nomorUrut": 430,
    "tanggal": "",
    "jenisSurat": "Internal",
    "tujuan": "",
    "kodeKlasifikasi": "",
    "nomorSurat": "B-430/7301//2026",
    "perihal": ""
  },
  {
    "id": "su-431",
    "nomorUrut": 431,
    "tanggal": "",
    "jenisSurat": "Internal",
    "tujuan": "",
    "kodeKlasifikasi": "",
    "nomorSurat": "B-431/7301//2026",
    "perihal": ""
  },
  {
    "id": "su-432",
    "nomorUrut": 432,
    "tanggal": "",
    "jenisSurat": "Internal",
    "tujuan": "",
    "kodeKlasifikasi": "",
    "nomorSurat": "B-432/7301//2026",
    "perihal": ""
  },
  {
    "id": "su-433",
    "nomorUrut": 433,
    "tanggal": "",
    "jenisSurat": "Internal",
    "tujuan": "",
    "kodeKlasifikasi": "",
    "nomorSurat": "B-433/7301//2026",
    "perihal": ""
  },
  {
    "id": "su-434",
    "nomorUrut": 434,
    "tanggal": "",
    "jenisSurat": "Internal",
    "tujuan": "",
    "kodeKlasifikasi": "",
    "nomorSurat": "B-434/7301//2026",
    "perihal": ""
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
    "tujuanTugas": ""
  },
  {
    "id": "st-2",
    "nomorUrut": 2,
    "tanggal": "2 Januari 2026",
    "kodeKlasifikasi": "VS.330",
    "nomorSurat": "B-2/7301/VS.330/2026",
    "petugas": "Terlampir",
    "perihal": "Pendataan VHTS Bulan Januari 2026",
    "tujuanTugas": ""
  },
  {
    "id": "st-3",
    "nomorUrut": 3,
    "tanggal": "2 Januari 2026",
    "kodeKlasifikasi": "VS.330",
    "nomorSurat": "B-3/7301/VS.330/2026",
    "petugas": "Terlampir",
    "perihal": "Pendataan SHPB",
    "tujuanTugas": ""
  },
  {
    "id": "st-4",
    "nomorUrut": 4,
    "tanggal": "2 Januari 2026",
    "kodeKlasifikasi": "VS.330",
    "nomorSurat": "B-4/7301/VS.330/2026",
    "petugas": "Terlampir",
    "perihal": "Pendataan Simoppel Pelabuhan",
    "tujuanTugas": ""
  },
  {
    "id": "st-5",
    "nomorUrut": 5,
    "tanggal": "2 Januari 2026",
    "kodeKlasifikasi": "VS.330",
    "nomorSurat": "B-5/7301/VS.330/2026",
    "petugas": "Terlampir",
    "perihal": "Pendataan Bandar Udara",
    "tujuanTugas": ""
  },
  {
    "id": "st-6",
    "nomorUrut": 6,
    "tanggal": "2 Januari 2026",
    "kodeKlasifikasi": "VS.330",
    "nomorSurat": "B-6/7301/VS.330/2026",
    "petugas": "Terlampir",
    "perihal": "Pendataan Identifikasi Komoditas Utama SHP",
    "tujuanTugas": ""
  },
  {
    "id": "st-7",
    "nomorUrut": 7,
    "tanggal": "2 Januari 2026",
    "kodeKlasifikasi": "VS.330",
    "nomorSurat": "B-7/7301/VS.330/2026",
    "petugas": "Terlampir",
    "perihal": "Pendataan SHP Januari 2026",
    "tujuanTugas": ""
  },
  {
    "id": "st-8",
    "nomorUrut": 8,
    "tanggal": "2 Januari 2026",
    "kodeKlasifikasi": "VS.330",
    "nomorSurat": "B-8/7301/VS.330/2026",
    "petugas": "Terlampir",
    "perihal": "Pendataan Ubinan Palawija SR 1 2026",
    "tujuanTugas": ""
  },
  {
    "id": "st-8.1",
    "nomorUrut": 8.1,
    "tanggal": "2 Januari 2026",
    "kodeKlasifikasi": "VS.330",
    "nomorSurat": "B-8.1/7301/VS.330/2026",
    "petugas": "Terlampir",
    "perihal": "Pendataan Ubinan Padi SR 1 2026",
    "tujuanTugas": ""
  },
  {
    "id": "st-9",
    "nomorUrut": 9,
    "tanggal": "2 Januari 2026",
    "kodeKlasifikasi": "VS.330",
    "nomorSurat": "B-9/7301/VS.330/2026",
    "petugas": "Terlampir",
    "perihal": "Pendataan IMK Triwulan 4 2025",
    "tujuanTugas": ""
  },
  {
    "id": "st-10",
    "nomorUrut": 10,
    "tanggal": "2 Januari 2026",
    "kodeKlasifikasi": "VS.330",
    "nomorSurat": "B-10/7301/VS.330/2026",
    "petugas": "Terlampir",
    "perihal": "Pendataan SKTR Triwulan 4 2025",
    "tujuanTugas": ""
  },
  {
    "id": "st-11",
    "nomorUrut": 11,
    "tanggal": "2 Januari 2026",
    "kodeKlasifikasi": "VS.330",
    "nomorSurat": "B-11/7301/VS.330/2026",
    "petugas": "Terlampir",
    "perihal": "Pendataan KSA Padi Januari 2026",
    "tujuanTugas": ""
  },
  {
    "id": "st-12",
    "nomorUrut": 12,
    "tanggal": "2 Januari 2026",
    "kodeKlasifikasi": "VS.330",
    "nomorSurat": "B-12/7301/VS.330/2026",
    "petugas": "Terlampir",
    "perihal": "Pendataan KSA Jagung Januari 2026",
    "tujuanTugas": ""
  },
  {
    "id": "st-13",
    "nomorUrut": 13,
    "tanggal": "2 Januari 2026",
    "kodeKlasifikasi": "VS.330",
    "nomorSurat": "B-13/7301/VS.330/2026",
    "petugas": "Susi Linda",
    "perihal": "Pendataan SKTNP Sektor Jasa  Tahap 1 Tahun 2026",
    "tujuanTugas": ""
  },
  {
    "id": "st-14",
    "nomorUrut": 14,
    "tanggal": "7 Januari 2026",
    "kodeKlasifikasi": "VS.220",
    "nomorSurat": "B-14/7301/VS.220/2026",
    "petugas": "Terlampir",
    "perihal": "Pelatihan Petugas Susenas Maret dan Seruti Triwulan I Tahun 2026",
    "tujuanTugas": ""
  },
  {
    "id": "st-15",
    "nomorUrut": 15,
    "tanggal": "7 Januari 2026",
    "kodeKlasifikasi": "VS.220",
    "nomorSurat": "B-15/7301/VS.220/2026",
    "petugas": "Dama Pratama",
    "perihal": "Pengajar Pelatihan Petugas Susenas Maret dan Seruti Triwulan I Tahun 2026",
    "tujuanTugas": ""
  },
  {
    "id": "st-16",
    "nomorUrut": 16,
    "tanggal": "7 Januari 2026",
    "kodeKlasifikasi": "VS.220",
    "nomorSurat": "B-16/7301/VS.220/2026",
    "petugas": "Terlampir",
    "perihal": "Pelatihan Petugas Sakernas Februari Tahun 2026",
    "tujuanTugas": ""
  },
  {
    "id": "st-17",
    "nomorUrut": 17,
    "tanggal": "7 Januari 2026",
    "kodeKlasifikasi": "VS.220",
    "nomorSurat": "B-17/7301/VS.220/2026",
    "petugas": "Nurlaela",
    "perihal": "Pengajar Petugas Sakernas Februari Tahun 2026",
    "tujuanTugas": ""
  },
  {
    "id": "st-18",
    "nomorUrut": 18,
    "tanggal": "7 Januari 2026",
    "kodeKlasifikasi": "VS.220",
    "nomorSurat": "B-18/7301/VS.220/2026",
    "petugas": "Aronad",
    "perihal": "Pengajar Petugas Sakernas Februari Tahun 2026",
    "tujuanTugas": ""
  },
  {
    "id": "st-19",
    "nomorUrut": 19,
    "tanggal": "14 Januari 2026",
    "kodeKlasifikasi": "VS.330",
    "nomorSurat": "B-19/7301/VS.330/2026",
    "petugas": "Terlampir",
    "perihal": "Pemutakhiran dan Pendataan Susenas Maret Tahun 2026",
    "tujuanTugas": ""
  },
  {
    "id": "st-20",
    "nomorUrut": 20,
    "tanggal": "14 Januari 2026",
    "kodeKlasifikasi": "VS.330",
    "nomorSurat": "B-20/7301/VS.330/2026",
    "petugas": "Terlampir",
    "perihal": "Pemutakhiran dan Pendataan Sakernas Februari Tahun 2026",
    "tujuanTugas": ""
  },
  {
    "id": "st-20.1",
    "nomorUrut": 20.1,
    "tanggal": "16 Januari 2026",
    "kodeKlasifikasi": "VS.340",
    "nomorSurat": "B-20.1/7301/VS.340/2026",
    "petugas": "Ridson",
    "perihal": "Perjalanan Pemeriksaan Lapangan Pemutakhiran dan Pendataan Susenas Maret 2026",
    "tujuanTugas": ""
  },
  {
    "id": "st-20.2",
    "nomorUrut": 20.2,
    "tanggal": "16 Januari 2026",
    "kodeKlasifikasi": "VS.340",
    "nomorSurat": "B-20.2/7301/VS.340/2026",
    "petugas": "Ilham",
    "perihal": "Perjalanan Pemeriksaan Lapangan Pemutakhiran dan Pendataan Susenas Maret 2026",
    "tujuanTugas": ""
  },
  {
    "id": "st-20.3",
    "nomorUrut": 20.3,
    "tanggal": "16 Januari 2026",
    "kodeKlasifikasi": "VS.340",
    "nomorSurat": "B-20.3/7301/VS.340/2026",
    "petugas": "Konita",
    "perihal": "Perjalanan Pemeriksaan Lapangan Pemutakhiran dan Pendataan Susenas Maret 2026",
    "tujuanTugas": ""
  },
  {
    "id": "st-20.4",
    "nomorUrut": 20.4,
    "tanggal": "16 Januari 2026",
    "kodeKlasifikasi": "VS.340",
    "nomorSurat": "B-20.4/7301/VS.340/2026",
    "petugas": "Indawati",
    "perihal": "Perjalanan Pemeriksaan Lapangan Pemutakhiran dan Pendataan Susenas Maret 2026",
    "tujuanTugas": ""
  },
  {
    "id": "st-20.5",
    "nomorUrut": 20.5,
    "tanggal": "16 Januari 2026",
    "kodeKlasifikasi": "VS.340",
    "nomorSurat": "B-20.5/7301/VS.340/2026",
    "petugas": "Junaid",
    "perihal": "Perjalanan Pemeriksaan Lapangan Pemutakhiran dan Pendataan Susenas Maret 2026",
    "tujuanTugas": ""
  },
  {
    "id": "st-20.6",
    "nomorUrut": 20.6,
    "tanggal": "16 Januari 2026",
    "kodeKlasifikasi": "VS.340",
    "nomorSurat": "B-20.6/7301/VS.340/2026",
    "petugas": "Fakhri",
    "perihal": "Perjalanan Pemeriksaan Lapangan Pemutakhiran dan Pendataan Susenas Maret 2026",
    "tujuanTugas": ""
  },
  {
    "id": "st-20.7",
    "nomorUrut": 20.7,
    "tanggal": "16 Januari 2026",
    "kodeKlasifikasi": "VS.340",
    "nomorSurat": "B-20.7/7301/VS.340/2026",
    "petugas": "Aronad",
    "perihal": "Perjalanan Pemeriksaan Lapangan Pemutakhiran dan Pendataan Susenas Maret 2026",
    "tujuanTugas": ""
  },
  {
    "id": "st-20.8",
    "nomorUrut": 20.8,
    "tanggal": "16 Januari 2026",
    "kodeKlasifikasi": "VS.340",
    "nomorSurat": "B-20.8/7301/VS.340/2026",
    "petugas": "Ikbal",
    "perihal": "Perjalanan Pemeriksaan Lapangan Pemutakhiran dan Pendataan Susenas Maret 2026",
    "tujuanTugas": ""
  },
  {
    "id": "st-20.9",
    "nomorUrut": 20.9,
    "tanggal": "16 Januari 2026",
    "kodeKlasifikasi": "VS.340",
    "nomorSurat": "B-20.9/7301/VS.340/2026",
    "petugas": "Bustan",
    "perihal": "Perjalanan Pemeriksaan Lapangan Pemutakhiran dan Pendataan Susenas Maret 2026",
    "tujuanTugas": ""
  },
  {
    "id": "st-20.10",
    "nomorUrut": 20.1,
    "tanggal": "16 Januari 2026",
    "kodeKlasifikasi": "VS.340",
    "nomorSurat": "B-20.10/7301/VS.340/2026",
    "petugas": "Asri",
    "perihal": "Perjalanan Pemeriksaan Lapangan Pemutakhiran dan Pendataan Susenas Maret 2026",
    "tujuanTugas": ""
  },
  {
    "id": "st-20.11",
    "nomorUrut": 20.11,
    "tanggal": "16 Januari 2026",
    "kodeKlasifikasi": "VS.340",
    "nomorSurat": "B-20.11/7301/VS.340/2026",
    "petugas": "Nurlaela",
    "perihal": "Perjalanan Pemeriksaan Lapangan Pemutakhiran dan Pendataan Susenas Maret 2026",
    "tujuanTugas": ""
  },
  {
    "id": "st-20.12",
    "nomorUrut": 20.12,
    "tanggal": "16 Januari 2026",
    "kodeKlasifikasi": "VS.340",
    "nomorSurat": "B-20.12/7301/VS.340/2026",
    "petugas": "Basri",
    "perihal": "Perjalanan Pemeriksaan Lapangan Pemutakhiran dan Pendataan Susenas Maret 2026",
    "tujuanTugas": ""
  },
  {
    "id": "st-20.13",
    "nomorUrut": 20.13,
    "tanggal": "16 Januari 2026",
    "kodeKlasifikasi": "VS.340",
    "nomorSurat": "B-20.13/7301/VS.340/2026",
    "petugas": "Sri Wahyuni",
    "perihal": "Perjalanan Pemeriksaan Lapangan Pemutakhiran dan Pendataan Susenas Maret 2026",
    "tujuanTugas": ""
  },
  {
    "id": "st-20.14",
    "nomorUrut": 20.14,
    "tanggal": "16 Januari 2026",
    "kodeKlasifikasi": "VS.340",
    "nomorSurat": "B-20.14/7301/VS.340/2026",
    "petugas": "Izzah",
    "perihal": "Perjalanan Pemeriksaan Lapangan Pemutakhiran dan Pendataan Susenas Maret 2026",
    "tujuanTugas": ""
  },
  {
    "id": "st-20.15",
    "nomorUrut": 20.15,
    "tanggal": "16 Januari 2026",
    "kodeKlasifikasi": "VS.340",
    "nomorSurat": "B-20.15/7301/VS.340/2026",
    "petugas": "Rosyidin",
    "perihal": "Perjalanan Pemeriksaan Lapangan Pemutakhiran dan Pendataan Susenas Maret 2026",
    "tujuanTugas": ""
  },
  {
    "id": "st-20.16",
    "nomorUrut": 20.16,
    "tanggal": "16 Januari 2026",
    "kodeKlasifikasi": "VS.340",
    "nomorSurat": "B-20.16/7301/VS.340/2026",
    "petugas": "Apri",
    "perihal": "Perjalanan Pemeriksaan Lapangan Pemutakhiran dan Pendataan Susenas Maret 2026",
    "tujuanTugas": ""
  },
  {
    "id": "st-20.17",
    "nomorUrut": 20.17,
    "tanggal": "16 Januari 2026",
    "kodeKlasifikasi": "VS.340",
    "nomorSurat": "B-20.17/7301/VS.340/2026",
    "petugas": "Arie",
    "perihal": "Perjalanan Pemeriksaan Lapangan Pemutakhiran dan Pendataan Susenas Maret 2026",
    "tujuanTugas": ""
  },
  {
    "id": "st-20.18",
    "nomorUrut": 20.18,
    "tanggal": "16 Januari 2026",
    "kodeKlasifikasi": "VS.350",
    "nomorSurat": "B-20.18/7301/VS.350/2026",
    "petugas": "Dama Pratama",
    "perihal": "Perjalanan Pengawasan Lapangan Pemutakhiran dan Pendataan Susenas Maret 2026",
    "tujuanTugas": ""
  },
  {
    "id": "st-20.19",
    "nomorUrut": 20.19,
    "tanggal": "16 Januari 2026",
    "kodeKlasifikasi": "VS.350",
    "nomorSurat": "B-20.19/7301/VS.350/2026",
    "petugas": "Musawwir",
    "perihal": "Perjalanan Pengawasan Lapangan Pemutakhiran dan Pendataan Susenas Maret 2026",
    "tujuanTugas": ""
  },
  {
    "id": "st-20.20",
    "nomorUrut": 20.2,
    "tanggal": "16 Januari 2026",
    "kodeKlasifikasi": "VS.350",
    "nomorSurat": "B-20.20/7301/VS.350/2026",
    "petugas": "Muhammad Nur",
    "perihal": "Perjalanan Pengawasan Lapangan Pemutakhiran dan Pendataan Susenas Maret 2026",
    "tujuanTugas": ""
  },
  {
    "id": "st-20.21",
    "nomorUrut": 20.21,
    "tanggal": "16 Januari 2026",
    "kodeKlasifikasi": "VS.350",
    "nomorSurat": "B-20.21/7301/VS.350/2026",
    "petugas": "Takdir",
    "perihal": "Perjalanan Pengawasan Lapangan Pemutakhiran dan Pendataan Susenas Maret 2026",
    "tujuanTugas": ""
  },
  {
    "id": "st-20.22",
    "nomorUrut": 20.22,
    "tanggal": "16 Januari 2026",
    "kodeKlasifikasi": "VS.340",
    "nomorSurat": "B-20.22/7301/VS.340/2026",
    "petugas": "Dama Pratama",
    "perihal": "Perjalanan Pengawasan Pengumpulan Data Rentang Harga dan Konversi Satuan Komoditas Susenas Maret 2026",
    "tujuanTugas": ""
  },
  {
    "id": "st-20.23",
    "nomorUrut": 20.23,
    "tanggal": "16 Januari 2026",
    "kodeKlasifikasi": "VS.330",
    "nomorSurat": "B-20.23/7301/VS.330/2026",
    "petugas": "Nurlaela",
    "perihal": "Perjalanan Pengumpulan Data Rentang Harga dan Konversi Satuan Komoditas Susenas Maret 2026",
    "tujuanTugas": ""
  },
  {
    "id": "st-20.24",
    "nomorUrut": 20.24,
    "tanggal": "16 Januari 2026",
    "kodeKlasifikasi": "VS.330",
    "nomorSurat": "B-20.24/7301/VS.330/2026",
    "petugas": "Terlampir",
    "perihal": "Pendataan SHKK TW 1 2026",
    "tujuanTugas": ""
  },
  {
    "id": "st-21",
    "nomorUrut": 21,
    "tanggal": "20 Januari 2026",
    "kodeKlasifikasi": "PR.200",
    "nomorSurat": "B-21/7301/PR.200/2026",
    "petugas": "Muhammad Nur, S.Sos",
    "perihal": "Konsultasi Perjanjian Kinerja (PK) Kepala BPS Kabupaten/Kota Tahun 2026",
    "tujuanTugas": ""
  },
  {
    "id": "st-21.1",
    "nomorUrut": 21.1,
    "tanggal": "20 Januari 2026",
    "kodeKlasifikasi": "VS.220",
    "nomorSurat": "B-21.1/7301/VS.220/2026",
    "petugas": "Mitra",
    "perihal": "Pelatihan KSA dan Ubinan Tahun 2026",
    "tujuanTugas": ""
  },
  {
    "id": "st-21.2",
    "nomorUrut": 21.2,
    "tanggal": "20 Januari 2026",
    "kodeKlasifikasi": "VS.220",
    "nomorSurat": "B-21.2/7301/VS.220/2026",
    "petugas": "Ilham",
    "perihal": "Pengjar Pelatihan KSA dan Ubinan Tahun 2026",
    "tujuanTugas": ""
  },
  {
    "id": "st-21.3",
    "nomorUrut": 21.3,
    "tanggal": "22 Januari 2026",
    "kodeKlasifikasi": "VS.430",
    "nomorSurat": "B-21.3/7301/VS.430/2026",
    "petugas": "Terlampir",
    "perihal": "Petugas Pengolahan Dokumen Pemuktahhiran Susenas Maret Tahun 2026",
    "tujuanTugas": ""
  },
  {
    "id": "st-22",
    "nomorUrut": 22,
    "tanggal": "23 Januari 2026",
    "kodeKlasifikasi": "HM.310",
    "nomorSurat": "B-22/7301/HM.310/2026",
    "petugas": "Terlampir",
    "perihal": "Tim Pembina Statistik Sektoral",
    "tujuanTugas": ""
  },
  {
    "id": "st-23",
    "nomorUrut": 23,
    "tanggal": "23 Januari 2026",
    "kodeKlasifikasi": "VS.330",
    "nomorSurat": "B-23/7301/VS.330/2026",
    "petugas": "Terlampir",
    "perihal": "Pemutakhiran dan Pendataan SNLIK Tahun 2026",
    "tujuanTugas": ""
  },
  {
    "id": "st-24",
    "nomorUrut": 24,
    "tanggal": "23 Januari 2026",
    "kodeKlasifikasi": "VS.340",
    "nomorSurat": "B-24/7301/VS.340/2026",
    "petugas": "Dama Pratama",
    "perihal": "Perjalanan Pemeriksaan Lapangan Pemutakhiran dan Pendataan Sakernas Februari 2026",
    "tujuanTugas": ""
  },
  {
    "id": "st-25",
    "nomorUrut": 25,
    "tanggal": "23 Januari 2026",
    "kodeKlasifikasi": "VS.340",
    "nomorSurat": "B-25/7301/VS.340/2026",
    "petugas": "Mukhtar",
    "perihal": "Perjalanan Pemeriksaan Lapangan Pemutakhiran dan Pendataan Sakernas Februari 2026",
    "tujuanTugas": ""
  },
  {
    "id": "st-26",
    "nomorUrut": 26,
    "tanggal": "23 Januari 2026",
    "kodeKlasifikasi": "VS.350",
    "nomorSurat": "B-26/7301/VS.350/2026",
    "petugas": "Muhammad Nur",
    "perihal": "Perjalanan Pengawasan Lapangan Pemutakhiran dan Pendataan Susenas Maret 2026",
    "tujuanTugas": ""
  },
  {
    "id": "st-27",
    "nomorUrut": 27,
    "tanggal": "23 Januari 2026",
    "kodeKlasifikasi": "VS.350",
    "nomorSurat": "B-27/7301/VS.350/2026",
    "petugas": "Nurlaela",
    "perihal": "Perjalanan Pengawasan Lapangan Pemutakhiran dan Pendataan Susenas Maret 2026",
    "tujuanTugas": ""
  },
  {
    "id": "st-28",
    "nomorUrut": 28,
    "tanggal": "23 Januari 2026",
    "kodeKlasifikasi": "VS.350",
    "nomorSurat": "B-28/7301/VS.350/2026",
    "petugas": "Aronad",
    "perihal": "Perjalanan Pengawasan Lapangan Pemutakhiran dan Pendataan Susenas Maret 2026",
    "tujuanTugas": ""
  },
  {
    "id": "st-28.1",
    "nomorUrut": 28.1,
    "tanggal": "26 Januari 2026",
    "kodeKlasifikasi": "VS.330",
    "nomorSurat": "B-28.1/7301/VS.330/2026",
    "petugas": "Agus Ashari",
    "perihal": "Pendataan Panjang Jalan",
    "tujuanTugas": ""
  },
  {
    "id": "st-28.2",
    "nomorUrut": 28.2,
    "tanggal": "27 Januari 2026",
    "kodeKlasifikasi": "VS.330",
    "nomorSurat": "B-28.2/7301/VS.330/2026",
    "petugas": "Agus Ashari",
    "perihal": "Pendataan Panjang Jalan",
    "tujuanTugas": ""
  },
  {
    "id": "st-29",
    "nomorUrut": 29,
    "tanggal": "27 Januari 2026",
    "kodeKlasifikasi": "VS.330",
    "nomorSurat": "B-29/7301/VS.330/2026",
    "petugas": "Terlampir",
    "perihal": "Pendataan RPH Bulan Januari 2026",
    "tujuanTugas": ""
  },
  {
    "id": "st-30",
    "nomorUrut": 30,
    "tanggal": "29 Januari 2026",
    "kodeKlasifikasi": "PR.100",
    "nomorSurat": "B-30/7301/PR.100/2026",
    "petugas": "Muhammad Nur",
    "perihal": "Menghadiri Rapat Koordinasi Nasional (Rakornas) Penyampaian Rencana Kerja BPS bersama Pemerintah Pusat dan Daerah TA 2026",
    "tujuanTugas": ""
  },
  {
    "id": "st-31",
    "nomorUrut": 31,
    "tanggal": "2 Februari 2026",
    "kodeKlasifikasi": "VS.330",
    "nomorSurat": "B-31/7301/VS.330/2026",
    "petugas": "Terlampir",
    "perihal": "Petugas Pendataan SHP Februari 2026",
    "tujuanTugas": ""
  },
  {
    "id": "st-32",
    "nomorUrut": 32,
    "tanggal": "2 Februari 2026",
    "kodeKlasifikasi": "VS.330",
    "nomorSurat": "B-32/7301/VS.330/2026",
    "petugas": "Terlampir",
    "perihal": "Petugas Pendataan SHPB Februari 2026",
    "tujuanTugas": ""
  },
  {
    "id": "st-33",
    "nomorUrut": 33,
    "tanggal": "2 Februari 2026",
    "kodeKlasifikasi": "VS.330",
    "nomorSurat": "B-33/7301/VS.330/2026",
    "petugas": "Terlampir",
    "perihal": "Petugas Pendataan VHTS Februari 2026",
    "tujuanTugas": ""
  },
  {
    "id": "st-34",
    "nomorUrut": 34,
    "tanggal": "2 Februari 2026",
    "kodeKlasifikasi": "VS.330",
    "nomorSurat": "B-34/7301/VS.330/2026",
    "petugas": "Terlampir",
    "perihal": "Pendataan Simoppel Pelabuhan",
    "tujuanTugas": ""
  },
  {
    "id": "st-35",
    "nomorUrut": 35,
    "tanggal": "2 Februari 2026",
    "kodeKlasifikasi": "VS.330",
    "nomorSurat": "B-35/7301/VS.330/2026",
    "petugas": "Terlampir",
    "perihal": "Pendataan Bandar Udara",
    "tujuanTugas": ""
  },
  {
    "id": "st-35.1",
    "nomorUrut": 35.1,
    "tanggal": "5 Februari 2026",
    "kodeKlasifikasi": "VS.430",
    "nomorSurat": "B-35.1/7301/VS.430/2026",
    "petugas": "Terlampir",
    "perihal": "Petugas Pengolahan Dokumen Pendataan Susenas Maret 2026",
    "tujuanTugas": ""
  },
  {
    "id": "st-35.2",
    "nomorUrut": 35.2,
    "tanggal": "5 Februari 2026",
    "kodeKlasifikasi": "VS.430",
    "nomorSurat": "B-35.2/7301/VS.430/2026",
    "petugas": "Terlampir",
    "perihal": "Petugas Pengolahan Dokumen Pendataan Seruti Triwulan I Tahun 2026",
    "tujuanTugas": ""
  },
  {
    "id": "st-36",
    "nomorUrut": 36,
    "tanggal": "11 Februari 2026",
    "kodeKlasifikasi": "VS.190",
    "nomorSurat": "B-36/7301/VS.190/2026",
    "petugas": "Terlampir",
    "perihal": "Rapat Evaluasi Daerah SNLIK Kabupaten/Kota Tahun 2026",
    "tujuanTugas": ""
  },
  {
    "id": "st-37",
    "nomorUrut": 37,
    "tanggal": "13 Februari 2026",
    "kodeKlasifikasi": "VS.210",
    "nomorSurat": "B-37/7301/VS.210/2026",
    "petugas": "Konita Iladini",
    "perihal": "Pelatihan Inda SKTNP",
    "tujuanTugas": ""
  },
  {
    "id": "st-37.1",
    "nomorUrut": 37.1,
    "tanggal": "18 Februari 2026",
    "kodeKlasifikasi": "VS.220",
    "nomorSurat": "B-37.1/7301/VS.220/2026",
    "petugas": "Nur Wahidah",
    "perihal": "Pelatihan SHPB",
    "tujuanTugas": ""
  },
  {
    "id": "st-38",
    "nomorUrut": 38,
    "tanggal": "18 Februari 2026",
    "kodeKlasifikasi": "VS.220",
    "nomorSurat": "B-38/7301/VS.220/2026",
    "petugas": "Terlampir",
    "perihal": "Pelatihan Survei Hortikultura Tahun 2026",
    "tujuanTugas": ""
  },
  {
    "id": "st-38.1",
    "nomorUrut": 38.1,
    "tanggal": "18 Februari 2026",
    "kodeKlasifikasi": "VS.220",
    "nomorSurat": "B-38.1/7301/VS.220/2026",
    "petugas": "Terlampir",
    "perihal": "Pengajar Pelatihan Survei Hortikultura Tahun 2026",
    "tujuanTugas": ""
  },
  {
    "id": "st-39",
    "nomorUrut": 39,
    "tanggal": "18 Februari 2026",
    "kodeKlasifikasi": "VS.220",
    "nomorSurat": "B-39/7301/VS.220/2026",
    "petugas": "Terlampir",
    "perihal": "Pelatihan Survei Komoditas Strategis Perkebunan (Komstrat) Tahun 2026",
    "tujuanTugas": ""
  },
  {
    "id": "st-39.1",
    "nomorUrut": 39.1,
    "tanggal": "18 Februari 2026",
    "kodeKlasifikasi": "VS.220",
    "nomorSurat": "B-39.1/7301/VS.220/2026",
    "petugas": "Terlampir",
    "perihal": "Pengajar Pelatihan Survei Komoditas Strategis Perkebunan (Komstrat) Tahun 2026",
    "tujuanTugas": ""
  },
  {
    "id": "st-40",
    "nomorUrut": 40,
    "tanggal": "18 Februari 2026",
    "kodeKlasifikasi": "KP.300",
    "nomorSurat": "B-40/7301/KP.300/2026",
    "petugas": "Fakhri Hafidzul Azhar",
    "perihal": "Mengikuti Coaching Clinic Pemantauan dan Evaluasi Kinerja Penyelenggaraan Pelayanan Publik (PEKPPP): Aspek 3. Sarana dan Prasarana dan Aspek 4. Sistem Informasi Pelayanan Publik",
    "tujuanTugas": ""
  },
  {
    "id": "st-40.1",
    "nomorUrut": 40.1,
    "tanggal": "18 Februari 2026",
    "kodeKlasifikasi": "VS.330",
    "nomorSurat": "B-40.1/7301/VS.330/2026",
    "petugas": "Terlampir",
    "perihal": "Pendataan KSA Padi feb 2026",
    "tujuanTugas": ""
  },
  {
    "id": "st-40.2",
    "nomorUrut": 40.2,
    "tanggal": "18 Februari 2026",
    "kodeKlasifikasi": "VS.330",
    "nomorSurat": "B-40.2/7301/VS.330/2026",
    "petugas": "Terlampir",
    "perihal": "Pendataan KSA Jagung feb2026",
    "tujuanTugas": ""
  },
  {
    "id": "st-41",
    "nomorUrut": 41,
    "tanggal": "26 Februari 2026",
    "kodeKlasifikasi": "KP.300",
    "nomorSurat": "B-41/7301/KP.300/2026",
    "petugas": "Terlampir",
    "perihal": "Mengikuti Internalisasi Pembinaan Statistik Sektoral Kabupaten/Kota Tahun 2026",
    "tujuanTugas": ""
  },
  {
    "id": "st-42",
    "nomorUrut": 42,
    "tanggal": "27 Februari 2026",
    "kodeKlasifikasi": "PR.530",
    "nomorSurat": "B-42/7301/PR.530/2026",
    "petugas": "Muhammad Nur",
    "perihal": "Menghadiri Pelantikan dan Pengambilan Sumpah Pejabat Administrator, Pejabat Pengawas, dan Pejabat Fungsional di Lingkungan BPS Provinsi Sulawesi Selatan serta Rapat Evaluasi Kinerja Februari 2026 dan Koordinasi Kegiatan Maret Tahun 2026",
    "tujuanTugas": ""
  },
  {
    "id": "st-43",
    "nomorUrut": 43,
    "tanggal": "27 Februari 2026",
    "kodeKlasifikasi": "VS.330",
    "nomorSurat": "B-43/7301/VS.330/2026",
    "petugas": "Terlampir",
    "perihal": "Pemtakhiran Survei Hortikultura 2026",
    "tujuanTugas": ""
  },
  {
    "id": "st-44",
    "nomorUrut": 44,
    "tanggal": "27 Februari 2026",
    "kodeKlasifikasi": "VS.330",
    "nomorSurat": "B-44/7301/VS.330/2026",
    "petugas": "Terlampir",
    "perihal": "Pendataan Survei Hortikultura Tw.1 2026",
    "tujuanTugas": ""
  },
  {
    "id": "st-44.1",
    "nomorUrut": 44.1,
    "tanggal": "27 Februari 2026",
    "kodeKlasifikasi": "VS.340",
    "nomorSurat": "B-44.1/7301/VS.340/2026",
    "petugas": "Nurul Izzah Abdullah",
    "perihal": "Perjalanan Pemeriksaan Lapangan Pendataan Survei Hortikultura Tw.1 2026",
    "tujuanTugas": ""
  },
  {
    "id": "st-44.2",
    "nomorUrut": 44.2,
    "tanggal": "27 Februari 2026",
    "kodeKlasifikasi": "VS.340",
    "nomorSurat": "B-44.2/7301/VS.340/2026",
    "petugas": "Ilham",
    "perihal": "Perjalanan Pemeriksaan Lapangan Pendataan Survei Hortikultura Tw.1 2026",
    "tujuanTugas": ""
  },
  {
    "id": "st-45",
    "nomorUrut": 45,
    "tanggal": "27 Februari 2026",
    "kodeKlasifikasi": "VS.330",
    "nomorSurat": "B-45/7301/VS.330/2026",
    "petugas": "Terlampir",
    "perihal": "Listing Survei Survei Komoditas Strategis Perkebunan (Komstrat) 2026",
    "tujuanTugas": ""
  },
  {
    "id": "st-45.1",
    "nomorUrut": 45.1,
    "tanggal": "27 Februari 2026",
    "kodeKlasifikasi": "DL.230",
    "nomorSurat": "B-45.1/7301/DL.230/2026",
    "petugas": "Terlampir",
    "perihal": "Pelatihan SBJP",
    "tujuanTugas": ""
  },
  {
    "id": "st-46",
    "nomorUrut": 46,
    "tanggal": "27 Februari 2026",
    "kodeKlasifikasi": "VS.330",
    "nomorSurat": "B-46/7301/VS.330/2026",
    "petugas": "Terlampir",
    "perihal": "Pendataan Survei  Survei Komoditas Strategis Perkebunan (Komstrat) Tw. 1 2026",
    "tujuanTugas": ""
  },
  {
    "id": "st-46.1",
    "nomorUrut": 46.1,
    "tanggal": "27 Februari 2026",
    "kodeKlasifikasi": "VS.340",
    "nomorSurat": "B-46.1/7301/VS.340/2026",
    "petugas": "Bustan",
    "perihal": "Perjalanan Pemeriksaan Lapangan Pemutakhiran dan  Pendataan  Survei Komoditas Strategis Perkebunan (Komstrat) Tw. 1 2026",
    "tujuanTugas": ""
  },
  {
    "id": "st-46.2",
    "nomorUrut": 46.2,
    "tanggal": "27 Februari 2026",
    "kodeKlasifikasi": "VS.340",
    "nomorSurat": "B-46.2/7301/VS.340/2026",
    "petugas": "Mukhtar",
    "perihal": "Perjalanan Pemeriksaan Lapangan Pemutakhiran dan  Pendataan  Survei Komoditas Strategis Perkebunan (Komstrat) Tw. 1 2027",
    "tujuanTugas": ""
  },
  {
    "id": "st-46.3",
    "nomorUrut": 46.3,
    "tanggal": "27 Februari 2026",
    "kodeKlasifikasi": "VS.340",
    "nomorSurat": "B-46.3/7301/VS.340/2026",
    "petugas": "Apri Wijaya",
    "perihal": "Perjalanan Pemeriksaan Lapangan Pemutakhiran dan  Pendataan  Survei Komoditas Strategis Perkebunan (Komstrat) Tw. 1 2028",
    "tujuanTugas": ""
  },
  {
    "id": "st-46.4",
    "nomorUrut": 46.4,
    "tanggal": "27 Februari 2026",
    "kodeKlasifikasi": "VS.340",
    "nomorSurat": "B-46.4/7301/VS.340/2026",
    "petugas": "Nurul Izzah Abdullah",
    "perihal": "Perjalanan Pemeriksaan Lapangan Pemutakhiran dan  Pendataan  Survei Komoditas Strategis Perkebunan (Komstrat) Tw. 1 2029",
    "tujuanTugas": ""
  },
  {
    "id": "st-46.5",
    "nomorUrut": 46.5,
    "tanggal": "27 Februari 2026",
    "kodeKlasifikasi": "VS.340",
    "nomorSurat": "B-46.5/7301/VS.340/2026",
    "petugas": "Ilham",
    "perihal": "Perjalanan Pemeriksaan Lapangan Pemutakhiran dan  Pendataan  Survei Komoditas Strategis Perkebunan (Komstrat) Tw. 1 2030",
    "tujuanTugas": ""
  },
  {
    "id": "st-47",
    "nomorUrut": 47,
    "tanggal": "27 Februari 2026",
    "kodeKlasifikasi": "VS.330",
    "nomorSurat": "B-47/7301/VS.330/2026",
    "petugas": "Terlampir",
    "perihal": "Ground Check Kepersertaan JKN PBI Tahun 2026",
    "tujuanTugas": ""
  },
  {
    "id": "st-47.1",
    "nomorUrut": 47.1,
    "tanggal": "27 Februari 2026",
    "kodeKlasifikasi": "VS.330",
    "nomorSurat": "B-47.1/7301/VS.330/2026",
    "petugas": "Terlampir",
    "perihal": "Pendataan RPH Bulan FEBRUARI2026",
    "tujuanTugas": ""
  },
  {
    "id": "st-48",
    "nomorUrut": 48,
    "tanggal": "2 Maret 2026",
    "kodeKlasifikasi": "VS.330",
    "nomorSurat": "B-48/7301/VS.330/2026",
    "petugas": "Terlampir",
    "perihal": "Pendataan VHTS Bulan Maret",
    "tujuanTugas": ""
  },
  {
    "id": "st-49",
    "nomorUrut": 49,
    "tanggal": "2 Maret 2026",
    "kodeKlasifikasi": "VS.330",
    "nomorSurat": "B-49/7301/VS.330/2026",
    "petugas": "Terlampir",
    "perihal": "Pendataan SHPB Bulan Maret",
    "tujuanTugas": ""
  },
  {
    "id": "st-50",
    "nomorUrut": 50,
    "tanggal": "2 Maret 2026",
    "kodeKlasifikasi": "VS.330",
    "nomorSurat": "B-50/7301/VS.330/2026",
    "petugas": "Terlampir",
    "perihal": "Pendataan Simoppel Pelabuhan",
    "tujuanTugas": ""
  },
  {
    "id": "st-51",
    "nomorUrut": 51,
    "tanggal": "2 Maret 2026",
    "kodeKlasifikasi": "VS.330",
    "nomorSurat": "B-51/7301/VS.330/2026",
    "petugas": "Terlampir",
    "perihal": "Pendataan Bandar Udara",
    "tujuanTugas": ""
  },
  {
    "id": "st-52",
    "nomorUrut": 52,
    "tanggal": "2 Maret 2026",
    "kodeKlasifikasi": "VS.330",
    "nomorSurat": "B-52/7301/VS.330/2026",
    "petugas": "Terlampir",
    "perihal": "Pendataan SHP Bulan Maret",
    "tujuanTugas": ""
  },
  {
    "id": "st-53",
    "nomorUrut": 53,
    "tanggal": "5 Maret 2026",
    "kodeKlasifikasi": "DL.230",
    "nomorSurat": "B-53/7301/DL.230/2026",
    "petugas": "Terlampir",
    "perihal": "Pelatihan Pembina Desa Cantik Tahun 2026",
    "tujuanTugas": ""
  },
  {
    "id": "st-54",
    "nomorUrut": 54,
    "tanggal": "6 Maret 2026",
    "kodeKlasifikasi": "VS.220",
    "nomorSurat": "B-54/7301/VS.220/2026",
    "petugas": "Terlampir",
    "perihal": "Pelatihan Survei IPEK 2026",
    "tujuanTugas": ""
  },
  {
    "id": "st-55",
    "nomorUrut": 55,
    "tanggal": "6 Maret 2026",
    "kodeKlasifikasi": "VS.220",
    "nomorSurat": "B-55/7301/VS.220/2026",
    "petugas": "Nurul Izzah Abdullah",
    "perihal": "Pengajar Pelatihan Survei IPEK 2026",
    "tujuanTugas": ""
  },
  {
    "id": "st-56",
    "nomorUrut": 56,
    "tanggal": "9 Maret 2026",
    "kodeKlasifikasi": "VS.360",
    "nomorSurat": "B-56/7301/VS.360/2026",
    "petugas": "Muhammad Nur, S.Sos",
    "perihal": "Konsultasi Evaluasi Pengolahan Susenas Maret dan Seruti Triwulan I Tahun 2026",
    "tujuanTugas": ""
  },
  {
    "id": "st-57",
    "nomorUrut": 57,
    "tanggal": "10 Maret 2026",
    "kodeKlasifikasi": "VS.220",
    "nomorSurat": "B-57/7301/VS.220/2026",
    "petugas": "Terlampir",
    "perihal": "Pelatihan Petugas SKTNP Tahun 2026",
    "tujuanTugas": ""
  },
  {
    "id": "st-57.1",
    "nomorUrut": 57.1,
    "tanggal": "11 Maret 2026",
    "kodeKlasifikasi": "VS.221",
    "nomorSurat": "B-57.1/7301/VS.221/2026",
    "petugas": "Konita Iladini",
    "perihal": "Pengajar SKTNP Tahun 2026",
    "tujuanTugas": ""
  },
  {
    "id": "st-57.2",
    "nomorUrut": 57.2,
    "tanggal": "11 Maret 2026",
    "kodeKlasifikasi": "VS.330",
    "nomorSurat": "B-57.2/7301/VS.330/2026",
    "petugas": "Reski Alfiani",
    "perihal": "Pendataan UDPE Tahun 2026",
    "tujuanTugas": ""
  },
  {
    "id": "st-58",
    "nomorUrut": 58,
    "tanggal": "12 Maret 2026",
    "kodeKlasifikasi": "VS.222",
    "nomorSurat": "B-58/7301/VS.222/2026",
    "petugas": "Terlampir",
    "perihal": "Pelatihan Petugas SKLNPT Tahun 2026",
    "tujuanTugas": ""
  },
  {
    "id": "st-58.1",
    "nomorUrut": 58.1,
    "tanggal": "13 Maret 2026",
    "kodeKlasifikasi": "VS.223",
    "nomorSurat": "B-58.1/7301/VS.223/2026",
    "petugas": "Indawati Amiruddin",
    "perihal": "Pengajar SKLNPT Tahun 2026",
    "tujuanTugas": ""
  },
  {
    "id": "st-59",
    "nomorUrut": 59,
    "tanggal": "10 Maret 2026",
    "kodeKlasifikasi": "VS.310",
    "nomorSurat": "B-59/7301/VS.310/2026",
    "petugas": "Terlampir",
    "perihal": "Listing IMK Triwulanan",
    "tujuanTugas": ""
  },
  {
    "id": "st-60",
    "nomorUrut": 60,
    "tanggal": "10 Maret 2026",
    "kodeKlasifikasi": "VS.330",
    "nomorSurat": "B-60/7301/VS.330/2026",
    "petugas": "Terlampir",
    "perihal": "Pendataan IMK Triwulan 1",
    "tujuanTugas": ""
  },
  {
    "id": "st-61",
    "nomorUrut": 61,
    "tanggal": "17 Maret 2026",
    "kodeKlasifikasi": "VS.330",
    "nomorSurat": "B-61/7301/VS.330/2026",
    "petugas": "Terlampir",
    "perihal": "Pemberitahuan Petugas Verifikasi Lapangan Data Statistik Bidang Kelistrikan (Surat Tugas GC PLN)",
    "tujuanTugas": ""
  },
  {
    "id": "st-61.1",
    "nomorUrut": 61.1,
    "tanggal": "17 Maret 2026",
    "kodeKlasifikasi": "VS.330",
    "nomorSurat": "B-61.1/7301/VS.330/2026",
    "petugas": "Terlampir",
    "perihal": "Pendataan KSA Padi maret 2026",
    "tujuanTugas": ""
  },
  {
    "id": "st-61.2",
    "nomorUrut": 61.2,
    "tanggal": "17 Maret 2026",
    "kodeKlasifikasi": "VS.330",
    "nomorSurat": "B-61.2/7301/VS.330/2026",
    "petugas": "Terlampir",
    "perihal": "Pendataan KSA Jagung maret 2026",
    "tujuanTugas": ""
  },
  {
    "id": "st-62",
    "nomorUrut": 62,
    "tanggal": "25 Maret 2026",
    "kodeKlasifikasi": "VS.210",
    "nomorSurat": "B-62/7301/VS.210/2026",
    "petugas": "Fakhri Hafidzul Azhar",
    "perihal": "Pelatihan Instruktur Daerah Pemutakhiran Data Perkembangan Desa 2026 (PODES 2026)",
    "tujuanTugas": ""
  },
  {
    "id": "st-62.1",
    "nomorUrut": 62.1,
    "tanggal": "25 Maret 2026",
    "kodeKlasifikasi": "KU.500",
    "nomorSurat": "B-62.1/7301/KU.500/2026",
    "petugas": "Fakhri Hafidzul Azhar",
    "perihal": "Konsultasi Administrasi dan Keuangan Kegiatan Susenas Maret dan Seruti Triwulan I Tahun 2026",
    "tujuanTugas": ""
  },
  {
    "id": "st-63",
    "nomorUrut": 63,
    "tanggal": "27 Maret 2026",
    "kodeKlasifikasi": "VS.330",
    "nomorSurat": "B-63/7301/VS.330/2026",
    "petugas": "Terlampir",
    "perihal": "Pelaksanaan Ground Check Kepersertaan JKN PBI Tahap II Tahun 2026",
    "tujuanTugas": ""
  },
  {
    "id": "st-64",
    "nomorUrut": 64,
    "tanggal": "27 Maret 2026",
    "kodeKlasifikasi": "VS.220",
    "nomorSurat": "B-64/7301/VS.220/2026",
    "petugas": "Terlampir",
    "perihal": "Pelatihan Petugas VREST 2026",
    "tujuanTugas": ""
  },
  {
    "id": "st-64.1",
    "nomorUrut": 64.1,
    "tanggal": "27 Maret 2026",
    "kodeKlasifikasi": "VS.330",
    "nomorSurat": "B-64.1/7301/VS.330/2026",
    "petugas": "Terlampir",
    "perihal": "Pendataan RPH Bulan FEBRUARI2026",
    "tujuanTugas": ""
  },
  {
    "id": "st-65",
    "nomorUrut": 65,
    "tanggal": "1 April 2026",
    "kodeKlasifikasi": "VS.330",
    "nomorSurat": "B-65/7301/VS.330/2026",
    "petugas": "Terlampir",
    "perihal": "Pendataan SPUNP TW 1",
    "tujuanTugas": ""
  },
  {
    "id": "st-66",
    "nomorUrut": 66,
    "tanggal": "1 April 2026",
    "kodeKlasifikasi": "VS.330",
    "nomorSurat": "B-66/7301/VS.330/2026",
    "petugas": "Terlampir",
    "perihal": "Pendataan SHPB 2026",
    "tujuanTugas": ""
  },
  {
    "id": "st-67",
    "nomorUrut": 67,
    "tanggal": "1 April 2026",
    "kodeKlasifikasi": "VS.330",
    "nomorSurat": "B-67/7301/VS.330/2026",
    "petugas": "Terlampir",
    "perihal": "Pendataan SHP 2026",
    "tujuanTugas": ""
  },
  {
    "id": "st-68",
    "nomorUrut": 68,
    "tanggal": "1 April 2026",
    "kodeKlasifikasi": "VS.330",
    "nomorSurat": "B-68/7301/VS.330/2026",
    "petugas": "Terlampir",
    "perihal": "Pendataan VHTS Maret 2026",
    "tujuanTugas": ""
  },
  {
    "id": "st-69",
    "nomorUrut": 69,
    "tanggal": "1 April 2026",
    "kodeKlasifikasi": "VS.330",
    "nomorSurat": "B-69/7301/VS.330/2026",
    "petugas": "Terlampir",
    "perihal": "Pendataan K3, SLK KSP, BUMD",
    "tujuanTugas": ""
  },
  {
    "id": "st-70",
    "nomorUrut": 70,
    "tanggal": "1 April 2026",
    "kodeKlasifikasi": "VS.330",
    "nomorSurat": "B-70/7301/VS.330/2026",
    "petugas": "Terlampir",
    "perihal": "Pendataan VHTL",
    "tujuanTugas": ""
  },
  {
    "id": "st-71",
    "nomorUrut": 71,
    "tanggal": "1 April 2026",
    "kodeKlasifikasi": "VS.330",
    "nomorSurat": "B-71/7301/VS.330/2026",
    "petugas": "Terlampir",
    "perihal": "Pendataan VDTW",
    "tujuanTugas": ""
  },
  {
    "id": "st-72",
    "nomorUrut": 72,
    "tanggal": "1 April 2026",
    "kodeKlasifikasi": "VS.330",
    "nomorSurat": "B-72/7301/VS.330/2026",
    "petugas": "Terlampir",
    "perihal": "Pendataan VREST",
    "tujuanTugas": ""
  },
  {
    "id": "st-74",
    "nomorUrut": 74,
    "tanggal": "1 April 2026",
    "kodeKlasifikasi": "VS.330",
    "nomorSurat": "B-74/7301/VS.330/2026",
    "petugas": "Terlampir",
    "perihal": "Pendataan SKTR Tw. 1",
    "tujuanTugas": ""
  },
  {
    "id": "st-75",
    "nomorUrut": 75,
    "tanggal": "1 April 2026",
    "kodeKlasifikasi": "VS.330",
    "nomorSurat": "B-75/7301/VS.330/2026",
    "petugas": "Terlampir",
    "perihal": "Pendataan SKLNPT Triwulan 1",
    "tujuanTugas": ""
  },
  {
    "id": "st-76",
    "nomorUrut": 76,
    "tanggal": "1 April 2026",
    "kodeKlasifikasi": "KP.300",
    "nomorSurat": "B-76/7301/KP.300/2026",
    "petugas": "Terlampir",
    "perihal": "Konsultasi Kenaikan Jenjang Jabatan Fungsional dan Perpindahan Jabatan Lain serta Kepegawaian Lainnya",
    "tujuanTugas": ""
  },
  {
    "id": "st-76.1",
    "nomorUrut": 76.1,
    "tanggal": "2 April 2026",
    "kodeKlasifikasi": "VS.220",
    "nomorSurat": "B-76.1/7301/VS.220/2026",
    "petugas": "Terlampir",
    "perihal": "Pelatihan Petugas Pemutakhiran Data Perkembangan Desa 2026 (PODES 2026)",
    "tujuanTugas": ""
  },
  {
    "id": "st-77",
    "nomorUrut": 77,
    "tanggal": "7 April 2026",
    "kodeKlasifikasi": "VS.330",
    "nomorSurat": "B-77/7301/VS.330/2026",
    "petugas": "Terlampir",
    "perihal": "Pendataan Lapangan Pemutakhiran Data Perkembangan Desa 2026 (PODES 2026)",
    "tujuanTugas": ""
  },
  {
    "id": "st-78",
    "nomorUrut": 78,
    "tanggal": "7 April 2026",
    "kodeKlasifikasi": "VS.340",
    "nomorSurat": "B-78/7301/VS.340/2026",
    "petugas": "Aronad Brilliantino Evan Maheswara",
    "perihal": "Pemeriksaan Lapangan Pemutakhiran Data Perkembangan Desa 2026 (PODES 2026)",
    "tujuanTugas": ""
  },
  {
    "id": "st-79",
    "nomorUrut": 79,
    "tanggal": "7 April 2026",
    "kodeKlasifikasi": "VS.340",
    "nomorSurat": "B-79/7301/VS.340/2026",
    "petugas": "Bustan",
    "perihal": "Pemeriksaan Lapangan Pemutakhiran Data Perkembangan Desa 2026 (PODES 2026)",
    "tujuanTugas": ""
  },
  {
    "id": "st-80",
    "nomorUrut": 80,
    "tanggal": "7 April 2026",
    "kodeKlasifikasi": "VS.340",
    "nomorSurat": "B-80/7301/VS.340/2026",
    "petugas": "Nur Asri",
    "perihal": "Pemeriksaan Lapangan Pemutakhiran Data Perkembangan Desa 2026 (PODES 2026)",
    "tujuanTugas": ""
  },
  {
    "id": "st-81",
    "nomorUrut": 81,
    "tanggal": "7 April 2026",
    "kodeKlasifikasi": "VS.340",
    "nomorSurat": "B-81/7301/VS.340/2026",
    "petugas": "Ilham Aminu Rosyid",
    "perihal": "Pemeriksaan Lapangan Pemutakhiran Data Perkembangan Desa 2026 (PODES 2026)",
    "tujuanTugas": ""
  },
  {
    "id": "st-82",
    "nomorUrut": 82,
    "tanggal": "7 April 2026",
    "kodeKlasifikasi": "VS.350",
    "nomorSurat": "B-82/7301/VS.350/2026",
    "petugas": "Fakhri Hafidzul Azhar",
    "perihal": "Pengawasan Lapangan Pemutakhiran Data Perkembangan Desa 2026 (PODES 2026)",
    "tujuanTugas": ""
  },
  {
    "id": "st-82.1",
    "nomorUrut": 82.1,
    "tanggal": "7 April 2026",
    "kodeKlasifikasi": "VS.350",
    "nomorSurat": "B-82.1/7301/VS.350/2026",
    "petugas": "Nurlaela",
    "perihal": "Pengawasan Lapangan Pemutakhiran Data Perkembangan Desa 2026 (PODES 2026)",
    "tujuanTugas": ""
  },
  {
    "id": "st-82.2",
    "nomorUrut": 82.2,
    "tanggal": "7 April 2026",
    "kodeKlasifikasi": "VS.350",
    "nomorSurat": "B-82.2/7301/VS.350/2026",
    "petugas": "Muhammad Junaid",
    "perihal": "Pengawasan Lapangan Pemutakhiran Data Perkembangan Desa 2026 (PODES 2026)",
    "tujuanTugas": ""
  },
  {
    "id": "st-83",
    "nomorUrut": 83,
    "tanggal": "7 April 2026",
    "kodeKlasifikasi": "VS.350",
    "nomorSurat": "B-83/7301/VS.350/2026",
    "petugas": "Muhammad Nur",
    "perihal": "Pengawasan Lapangan Pemutakhiran Data Perkembangan Desa 2026 (PODES 2026)",
    "tujuanTugas": ""
  },
  {
    "id": "st-84",
    "nomorUrut": 84,
    "tanggal": "7 April 2026",
    "kodeKlasifikasi": "VS.330",
    "nomorSurat": "B-84/7301/VS.330/2026",
    "petugas": "terlampir",
    "perihal": "Pendataan SHKK TW 2 2025",
    "tujuanTugas": ""
  },
  {
    "id": "st-85",
    "nomorUrut": 85,
    "tanggal": "17 April 2026",
    "kodeKlasifikasi": "VS.340",
    "nomorSurat": "B-85/7301/VS.340/2026",
    "petugas": "Ilham",
    "perihal": "Perjalanan Pemeriksaan Lapangan Pendataan  Ubinan SR I 2026",
    "tujuanTugas": ""
  },
  {
    "id": "st-86",
    "nomorUrut": 86,
    "tanggal": "17 April 2026",
    "kodeKlasifikasi": "VS.340",
    "nomorSurat": "B-86/7301/VS.340/2026",
    "petugas": "Bustan",
    "perihal": "Perjalanan Pemeriksaan Lapangan Pendataan  Ubinan SR I 2026",
    "tujuanTugas": ""
  },
  {
    "id": "st-87",
    "nomorUrut": 87,
    "tanggal": "17 April 2026",
    "kodeKlasifikasi": "VS.330",
    "nomorSurat": "B-87/7301/VS.330/2026",
    "petugas": "Terlampir",
    "perihal": "Pendataan KSA Padi april 2026",
    "tujuanTugas": ""
  },
  {
    "id": "st-88",
    "nomorUrut": 88,
    "tanggal": "17 April 2026",
    "kodeKlasifikasi": "VS.330",
    "nomorSurat": "B-88/7301/VS.330/2026",
    "petugas": "Terlampir",
    "perihal": "Pendataan KSA Jagung april  2026",
    "tujuanTugas": ""
  },
  {
    "id": "st-89",
    "nomorUrut": 89,
    "tanggal": "20 April 2026",
    "kodeKlasifikasi": "VS.330",
    "nomorSurat": "B-89/7301/VS.330/2026",
    "petugas": "Terlampir",
    "perihal": "Pendataan Pemutakhiran Ubinan Palawija SR II 2026",
    "tujuanTugas": ""
  },
  {
    "id": "st-90",
    "nomorUrut": 90,
    "tanggal": "20 April 2026",
    "kodeKlasifikasi": "VS.330",
    "nomorSurat": "B-90/7301/VS.330/2026",
    "petugas": "Terlampir",
    "perihal": "RPH April",
    "tujuanTugas": ""
  },
  {
    "id": "st-91",
    "nomorUrut": 91,
    "tanggal": "20 April 2026",
    "kodeKlasifikasi": "VS.330",
    "nomorSurat": "B-91/7301/VS.330/2026",
    "petugas": "Nur Asri",
    "perihal": "Pengumpulan Data Pendukung Penghitungan PDRB Triwulan 1 2026",
    "tujuanTugas": ""
  },
  {
    "id": "st-91.1",
    "nomorUrut": 91.1,
    "tanggal": "8 Mei 2026",
    "kodeKlasifikasi": "VS.330",
    "nomorSurat": "B-91.1/7301/VS.330/2026",
    "petugas": "Terlampir",
    "perihal": "Pengumpulan data VHTS April",
    "tujuanTugas": ""
  },
  {
    "id": "st-91.2",
    "nomorUrut": 91.2,
    "tanggal": "8 Mei 2026",
    "kodeKlasifikasi": "VS.330",
    "nomorSurat": "B-91.2/7301/VS.330/2026",
    "petugas": "Terlampir",
    "perihal": "Pengumpulan Data SHP Mei",
    "tujuanTugas": ""
  },
  {
    "id": "st-91.3",
    "nomorUrut": 91.3,
    "tanggal": "8 Mei 2026",
    "kodeKlasifikasi": "VS.330",
    "nomorSurat": "B-91.3/7301/VS.330/2026",
    "petugas": "Terlampir",
    "perihal": "Pengumpulan Data SHPB Mei",
    "tujuanTugas": ""
  },
  {
    "id": "st-91.4",
    "nomorUrut": 91.4,
    "tanggal": "8 Mei 2026",
    "kodeKlasifikasi": "VS.330",
    "nomorSurat": "B-91.4/7301/VS.330/2026",
    "petugas": "Terlampir",
    "perihal": "Pendataan Ubinan Palawija SR 2 2026",
    "tujuanTugas": ""
  },
  {
    "id": "st-91.5",
    "nomorUrut": 91.5,
    "tanggal": "8 Mei 2026",
    "kodeKlasifikasi": "VS.330",
    "nomorSurat": "B-91.5/7301/VS.330/2026",
    "petugas": "Terlampir",
    "perihal": "Pendataan Ubinan Padi SR 2 2026",
    "tujuanTugas": ""
  },
  {
    "id": "st-92",
    "nomorUrut": 92,
    "tanggal": "8 Mei 2026",
    "kodeKlasifikasi": "VS.330",
    "nomorSurat": "B-92/7301/VS.330/2026",
    "petugas": "Terlampir",
    "perihal": "Pemutakhiran dan Pendataan Sakernas Mei Tahun 2026",
    "tujuanTugas": ""
  },
  {
    "id": "st-93",
    "nomorUrut": 93,
    "tanggal": "8 Mei 2026",
    "kodeKlasifikasi": "PW.100",
    "nomorSurat": "B-93/7301/PW.100/2026",
    "petugas": "Terlampir",
    "perihal": "Operator AKIP 2026",
    "tujuanTugas": ""
  },
  {
    "id": "st-94",
    "nomorUrut": 94,
    "tanggal": "13 Mei 2026",
    "kodeKlasifikasi": "VS.330",
    "nomorSurat": "B-94/7301/VS.330/2026",
    "petugas": "Junaid",
    "perihal": "Pengumpulan Data STATPOLKAM 2026",
    "tujuanTugas": ""
  },
  {
    "id": "st-95",
    "nomorUrut": 95,
    "tanggal": "13 Mei 2026",
    "kodeKlasifikasi": "VS.340",
    "nomorSurat": "B-95/7301/VS.340/2026",
    "petugas": "Mukhtar",
    "perihal": "Perjalanan Pemeriksaan Lapangan Pemutakhiran dan Pendataan Sakernas Mei 2026",
    "tujuanTugas": ""
  },
  {
    "id": "st-96",
    "nomorUrut": 96,
    "tanggal": "13 Mei 2026",
    "kodeKlasifikasi": "VS.340",
    "nomorSurat": "B-96/7301/VS.340/2026",
    "petugas": "Nur Amalina",
    "perihal": "Perjalanan Pemeriksaan Lapangan Pemutakhiran dan Pendataan Sakernas Mei 2026",
    "tujuanTugas": ""
  },
  {
    "id": "st-97",
    "nomorUrut": 97,
    "tanggal": "13 Mei 2026",
    "kodeKlasifikasi": "VS.350",
    "nomorSurat": "B-97/7301/VS.350/2026",
    "petugas": "Aronad brilliantino Evan Maheswara",
    "perihal": "Perjalanan Pengawasan Lapangan Pemutakhiran dan Pendataan Sakernas Mei 2026",
    "tujuanTugas": ""
  },
  {
    "id": "st-98",
    "nomorUrut": 98,
    "tanggal": "13 Mei 2026",
    "kodeKlasifikasi": "VS.350",
    "nomorSurat": "B-98/7301/VS.350/2026",
    "petugas": "Nurlaela",
    "perihal": "Perjalanan Pengawasan Lapangan Pemutakhiran dan Pendataan Sakernas Mei 2026",
    "tujuanTugas": ""
  },
  {
    "id": "st-99",
    "nomorUrut": 99,
    "tanggal": "18 Mei 2026",
    "kodeKlasifikasi": "VS.330",
    "nomorSurat": "B-99/7301/VS.330/2026",
    "petugas": "Terlampir",
    "perihal": "Pendataan KSA Padi mei2026",
    "tujuanTugas": ""
  },
  {
    "id": "st-100",
    "nomorUrut": 100,
    "tanggal": "18 Mei 2026",
    "kodeKlasifikasi": "VS.330",
    "nomorSurat": "B-100/7301/VS.330/2026",
    "petugas": "Terlampir",
    "perihal": "Pendataan KSA Jagung mei 2026",
    "tujuanTugas": ""
  },
  {
    "id": "st-101",
    "nomorUrut": 101,
    "tanggal": "22 Mei 2026",
    "kodeKlasifikasi": "VS.360",
    "nomorSurat": "B-101/7301/VS.360/2026",
    "petugas": "Zulhan Efendy",
    "perihal": "Konsultasi Administrasi dan Pengelolaan Kepegawaian Semester 1 Tahun 2026",
    "tujuanTugas": ""
  },
  {
    "id": "st-102",
    "nomorUrut": 102,
    "tanggal": "22 Mei 2026",
    "kodeKlasifikasi": "VS.360",
    "nomorSurat": "B-102/7301/VS.360/2026",
    "petugas": "Nurlaela",
    "perihal": "Konsultasi Persiapan Survei Ekonomi Sosial Nasional (SUSENAS) Bulan September 2026",
    "tujuanTugas": ""
  },
  {
    "id": "st-103",
    "nomorUrut": 103,
    "tanggal": "22 Mei 2026",
    "kodeKlasifikasi": "VS.360",
    "nomorSurat": "B-103/7301/VS.360/2026",
    "petugas": "Bustan",
    "perihal": "Konsultasi Hasil Survei Komoditas Perkebunan Strategis (Komstrat) Semester 1 Tahun 2026",
    "tujuanTugas": ""
  },
  {
    "id": "st-104",
    "nomorUrut": 104,
    "tanggal": "22 Mei 2026",
    "kodeKlasifikasi": "PL.810",
    "nomorSurat": "B-104/7301/PL.810/2026",
    "petugas": "Aronad brilliantino Evan Maheswara",
    "perihal": "Konsultasi Lelang Barang Milik Negara",
    "tujuanTugas": ""
  },
  {
    "id": "st-104.1",
    "nomorUrut": 104.1,
    "tanggal": "30 Mei 2026",
    "kodeKlasifikasi": "VS.330",
    "nomorSurat": "B-104.1/7301/VS.330/2026",
    "petugas": "Petugas Seruti Tw II",
    "perihal": "Pendataaan Seruti Triwulan II Tahun 2026",
    "tujuanTugas": ""
  },
  {
    "id": "st-105",
    "nomorUrut": 105,
    "tanggal": "1 Juni 2026",
    "kodeKlasifikasi": "SS.220",
    "nomorSurat": "B-105/7301/SS.220/2026",
    "petugas": "Peserta Pelatihan Petugas SE2026",
    "perihal": "Pelatihan Petugas Sensus Ekonomi 2026 (SE2026) Gelombang 1",
    "tujuanTugas": ""
  },
  {
    "id": "st-106",
    "nomorUrut": 106,
    "tanggal": "1 Juni 2026",
    "kodeKlasifikasi": "SS.220",
    "nomorSurat": "B-106/7301/SS.220/2026",
    "petugas": "Peserta Pelatihan Petugas SE2026",
    "perihal": "Pelatihan Petugas Sensus Ekonomi 2026 (SE2026) Gelombang 2",
    "tujuanTugas": ""
  },
  {
    "id": "st-107",
    "nomorUrut": 107,
    "tanggal": "1 Juni 2026",
    "kodeKlasifikasi": "SS.330",
    "nomorSurat": "B-107/7301/SS.330/2026",
    "petugas": "Petugas SE2026 (PCS)",
    "perihal": "Pendataan Sensus Ekonomi 2026",
    "tujuanTugas": ""
  },
  {
    "id": "st-108",
    "nomorUrut": 108,
    "tanggal": "1 Juni 2026",
    "kodeKlasifikasi": "SS.340",
    "nomorSurat": "B-108/7301/SS.340/2026",
    "petugas": "Petugas SE2026 (PMS)",
    "perihal": "Pemeriksaan Sensus Ekonomi 2026",
    "tujuanTugas": ""
  },
  {
    "id": "st-108.1",
    "nomorUrut": 108.1,
    "tanggal": "1 Juni 2026",
    "kodeKlasifikasi": "SS.220",
    "nomorSurat": "B-108.1/7301/SS.220/2026",
    "petugas": "Terlampir",
    "perihal": "Pengajar Sensus Ekonomi 2026",
    "tujuanTugas": ""
  },
  {
    "id": "st-109",
    "nomorUrut": 109,
    "tanggal": "2 Juni 2026",
    "kodeKlasifikasi": "SS.190",
    "nomorSurat": "B-109/7301/SS.190/2026",
    "petugas": "Muhammad Nur, S.Sos",
    "perihal": "Perjalanan ke Makassar dalam Rangka Rapat Koordinasi BPS Kabupaten/Kota Kegiatan Pelaksanaan Sensus Ekonomi 2026 (SE2026) di Jakarta",
    "tujuanTugas": ""
  },
  {
    "id": "st-110",
    "nomorUrut": 110,
    "tanggal": "2 Juni 2026",
    "kodeKlasifikasi": "SS.190",
    "nomorSurat": "B-110/7301/SS.190/2026",
    "petugas": "Muhammad Nur, S.Sos",
    "perihal": "Perjalanan ke Makassar dalam Rangka Rapat Koordinasi BPS Kabupaten/Kota Kegiatan Pelaksanaan Sensus Ekonomi 2026 (SE2026) di Jakarta",
    "tujuanTugas": ""
  },
  {
    "id": "st-110.1",
    "nomorUrut": 110.1,
    "tanggal": "2 Juni 2026",
    "kodeKlasifikasi": "VS.330",
    "nomorSurat": "B-110.1/7301/VS.330/2026",
    "petugas": "Terlampir",
    "perihal": "Petugas VHTS Juni 2026",
    "tujuanTugas": ""
  },
  {
    "id": "st-110.2",
    "nomorUrut": 110.2,
    "tanggal": "2 Juni 2026",
    "kodeKlasifikasi": "VS.330",
    "nomorSurat": "B-110.2/7301/VS.330/2026",
    "petugas": "Terlampir",
    "perihal": "Petugas SHPB Juni 2026",
    "tujuanTugas": ""
  },
  {
    "id": "st-110.3",
    "nomorUrut": 110.3,
    "tanggal": "2 Juni 2026",
    "kodeKlasifikasi": "VS.330",
    "nomorSurat": "B-110.3/7301/VS.330/2026",
    "petugas": "Terlampir",
    "perihal": "Petugas SHP Juni 2026",
    "tujuanTugas": ""
  },
  {
    "id": "st-110.4",
    "nomorUrut": 110.4,
    "tanggal": "2 Juni 2026",
    "kodeKlasifikasi": "SS.190",
    "nomorSurat": "B-110.4/7301/SS.190/2026",
    "petugas": "Muhammad Nur, S.Sos",
    "perihal": "Mengikuti Rapat Koordinasi BPS Kabupaten/ Kota seluruh Indonesia dalam rangka Sensus Ekonomi 2026 di Lingkungan BPS RI pada tanggal 04 s.d 07 Juni 2026; yang diselenggarakan di Hotel Grand Mercure Jakarta Kemayoran, Jakarta Pusat",
    "tujuanTugas": ""
  },
  {
    "id": "st-110.5",
    "nomorUrut": 110.5,
    "tanggal": "2 Juni 2026",
    "kodeKlasifikasi": "VS.330",
    "nomorSurat": "B-110.5/7301/VS.330/2026",
    "petugas": "Terlampir",
    "perihal": "Petugas SKGB PEINGGILINGAN 2026",
    "tujuanTugas": ""
  },
  {
    "id": "st-111",
    "nomorUrut": 111,
    "tanggal": "5 Juni 2026",
    "kodeKlasifikasi": "VS.190",
    "nomorSurat": "B-111/7301/VS.190/2026",
    "petugas": "Terlampir",
    "perihal": "Konsultasi Administrasi Pengolahan Susenas Maret dan Seruti Triwulan I 2026 dan Persiapan Pengolahan Susenas September 2026",
    "tujuanTugas": ""
  },
  {
    "id": "st-112",
    "nomorUrut": 112,
    "tanggal": "5 Juni 2026",
    "kodeKlasifikasi": "VS.190",
    "nomorSurat": "B-112/7301/VS.190/2026",
    "petugas": "Mukhtar, A.Md.Kom",
    "perihal": "Konsultasi Administrasi Kegiatan Sakernas Februari dan Mei Tahun 2026 Serta Persiapan Kegiatan Sakernas Agustus 2026",
    "tujuanTugas": ""
  },
  {
    "id": "st-113",
    "nomorUrut": 113,
    "tanggal": "12 Juni 2026",
    "kodeKlasifikasi": "SS.330",
    "nomorSurat": "B-113/7301/SS.330/2026",
    "petugas": "Bustan",
    "perihal": "Pendataan SE2026 UB",
    "tujuanTugas": ""
  },
  {
    "id": "st-113.1",
    "nomorUrut": 113.1,
    "tanggal": "12 Juni 2026",
    "kodeKlasifikasi": "SS.340",
    "nomorSurat": "B-113.1/7301/SS.340/2026",
    "petugas": "Konita Iladini",
    "perihal": "Pendataan SE2026 UB",
    "tujuanTugas": ""
  },
  {
    "id": "st-113.2",
    "nomorUrut": 113.2,
    "tanggal": "15 Juni 2026",
    "kodeKlasifikasi": "SS.330",
    "nomorSurat": "B-113.2/7301/SS.330/2026",
    "petugas": "PPL SE2026",
    "perihal": "Pendataan Lapangan Sensus Ekonomi 2026",
    "tujuanTugas": ""
  },
  {
    "id": "st-113.3",
    "nomorUrut": 113.3,
    "tanggal": "15 Juni 2026",
    "kodeKlasifikasi": "SS.330",
    "nomorSurat": "B-113.3/7301/SS.330/2026",
    "petugas": "PML SE2026",
    "perihal": "Pemeriksaan Lapangan Sensus Ekonomi 2026",
    "tujuanTugas": ""
  },
  {
    "id": "st-114",
    "nomorUrut": 114,
    "tanggal": "15 Juni 2026",
    "kodeKlasifikasi": "VS.210",
    "nomorSurat": "B-114/7301/VS.210/2026",
    "petugas": "Konita Iladini",
    "perihal": "Pelatihan Inda SKNP 2026",
    "tujuanTugas": ""
  },
  {
    "id": "st-114.1",
    "nomorUrut": 114.1,
    "tanggal": "15 Juni 2026",
    "kodeKlasifikasi": "VS.430",
    "nomorSurat": "B-114.1/7301/VS.430/2026",
    "petugas": "Terlampir",
    "perihal": "Petugas Pengolahan Dokumen Pendataan Seruti Triwulan I Tahun 2026",
    "tujuanTugas": ""
  },
  {
    "id": "st-114.2",
    "nomorUrut": 114.2,
    "tanggal": "15 Juni 2026",
    "kodeKlasifikasi": "SS.360",
    "nomorSurat": "B-114.2/7301/SS.360/2026",
    "petugas": "Ridson Al Farizal P., S.Tr.Stat.",
    "perihal": "Pendampingan Petugas SE2026",
    "tujuanTugas": ""
  },
  {
    "id": "st-114.3",
    "nomorUrut": 114.3,
    "tanggal": "15 Juni 2026",
    "kodeKlasifikasi": "SS.360",
    "nomorSurat": "B-114.3/7301/SS.360/2026",
    "petugas": "Ilham Aminu Rosyid, S.Tr.Stat.",
    "perihal": "Pendampingan Petugas SE2026",
    "tujuanTugas": ""
  },
  {
    "id": "st-114.4",
    "nomorUrut": 114.4,
    "tanggal": "15 Juni 2026",
    "kodeKlasifikasi": "SS.360",
    "nomorSurat": "B-114.4/7301/SS.360/2026",
    "petugas": "Indawati Amiruddin, A.Md.Stat.",
    "perihal": "Pendampingan Petugas SE2026",
    "tujuanTugas": ""
  },
  {
    "id": "st-114.5",
    "nomorUrut": 114.5,
    "tanggal": "15 Juni 2026",
    "kodeKlasifikasi": "SS.360",
    "nomorSurat": "B-114.5/7301/SS.360/2026",
    "petugas": "Nur Amalina Fauzi, S. Tr. Stat",
    "perihal": "Pendampingan Petugas SE2026",
    "tujuanTugas": ""
  },
  {
    "id": "st-114.6",
    "nomorUrut": 114.6,
    "tanggal": "15 Juni 2026",
    "kodeKlasifikasi": "SS.360",
    "nomorSurat": "B-114.6/7301/SS.360/2026",
    "petugas": "Muhammad Junaid",
    "perihal": "Pendampingan Petugas SE2026",
    "tujuanTugas": ""
  },
  {
    "id": "st-114.7",
    "nomorUrut": 114.7,
    "tanggal": "15 Juni 2026",
    "kodeKlasifikasi": "SS.360",
    "nomorSurat": "B-114.7/7301/SS.360/2026",
    "petugas": "Fakhri Hafidzul Azhar, S.Tr.Stat.",
    "perihal": "Pendampingan Petugas SE2026",
    "tujuanTugas": ""
  },
  {
    "id": "st-114.8",
    "nomorUrut": 114.8,
    "tanggal": "15 Juni 2026",
    "kodeKlasifikasi": "SS.360",
    "nomorSurat": "B-114.8/7301/SS.360/2026",
    "petugas": "Aronad Brilliantino Evan Maheswara, S.Tr.Stat.",
    "perihal": "Pendampingan Petugas SE2026",
    "tujuanTugas": ""
  },
  {
    "id": "st-114.9",
    "nomorUrut": 114.9,
    "tanggal": "15 Juni 2026",
    "kodeKlasifikasi": "SS.360",
    "nomorSurat": "B-114.9/7301/SS.360/2026",
    "petugas": "Muhammad Ikbal Nur",
    "perihal": "Pendampingan Petugas SE2026",
    "tujuanTugas": ""
  },
  {
    "id": "st-114.10",
    "nomorUrut": 114.1,
    "tanggal": "15 Juni 2026",
    "kodeKlasifikasi": "SS.360",
    "nomorSurat": "B-114.10/7301/SS.360/2026",
    "petugas": "Nur Asri, A.Md.Kom.",
    "perihal": "Pendampingan Petugas SE2026",
    "tujuanTugas": ""
  },
  {
    "id": "st-114.11",
    "nomorUrut": 114.11,
    "tanggal": "15 Juni 2026",
    "kodeKlasifikasi": "SS.360",
    "nomorSurat": "B-114.11/7301/SS.360/2026",
    "petugas": "Nurlaela",
    "perihal": "Pendampingan Petugas SE2026",
    "tujuanTugas": ""
  },
  {
    "id": "st-114.12",
    "nomorUrut": 114.12,
    "tanggal": "15 Juni 2026",
    "kodeKlasifikasi": "SS.360",
    "nomorSurat": "B-114.12/7301/SS.360/2026",
    "petugas": "Andi Basri",
    "perihal": "Pendampingan Petugas SE2026",
    "tujuanTugas": ""
  },
  {
    "id": "st-114.13",
    "nomorUrut": 114.13,
    "tanggal": "15 Juni 2026",
    "kodeKlasifikasi": "SS.360",
    "nomorSurat": "B-114.13/7301/SS.360/2026",
    "petugas": "Sri Wahyuni",
    "perihal": "Pendampingan Petugas SE2026",
    "tujuanTugas": ""
  },
  {
    "id": "st-114.14",
    "nomorUrut": 114.14,
    "tanggal": "15 Juni 2026",
    "kodeKlasifikasi": "SS.360",
    "nomorSurat": "B-114.14/7301/SS.360/2026",
    "petugas": "Nurul Izzah Abdullah, A.Md.Stat.",
    "perihal": "Pendampingan Petugas SE2026",
    "tujuanTugas": ""
  },
  {
    "id": "st-114.15",
    "nomorUrut": 114.15,
    "tanggal": "15 Juni 2026",
    "kodeKlasifikasi": "SS.360",
    "nomorSurat": "B-114.15/7301/SS.360/2026",
    "petugas": "Andi Muhammad Rosyidin Hidayat, S.Tr.Stat.",
    "perihal": "Pendampingan Petugas SE2026",
    "tujuanTugas": ""
  },
  {
    "id": "st-114.16",
    "nomorUrut": 114.16,
    "tanggal": "15 Juni 2026",
    "kodeKlasifikasi": "SS.360",
    "nomorSurat": "B-114.16/7301/SS.360/2026",
    "petugas": "Muhammad Nur, S.Sos",
    "perihal": "Pendampingan Petugas SE2026",
    "tujuanTugas": ""
  },
  {
    "id": "st-114.17",
    "nomorUrut": 114.17,
    "tanggal": "15 Juni 2026",
    "kodeKlasifikasi": "SS.360",
    "nomorSurat": "B-114.17/7301/SS.360/2026",
    "petugas": "Takdir Khauripan, S.Si.",
    "perihal": "Pendampingan Petugas SE2026",
    "tujuanTugas": ""
  },
  {
    "id": "st-114.18",
    "nomorUrut": 114.18,
    "tanggal": "15 Juni 2026",
    "kodeKlasifikasi": "SS.360",
    "nomorSurat": "B-114.18/7301/SS.360/2026",
    "petugas": "Semua",
    "perihal": "Pendampingan Petugas SE2026",
    "tujuanTugas": ""
  },
  {
    "id": "st-114.19",
    "nomorUrut": 114.19,
    "tanggal": "15 Juni 2026",
    "kodeKlasifikasi": "SS.330",
    "nomorSurat": "B-114.19/7301/SS.330/2026",
    "petugas": "PCL SE2026 V2",
    "perihal": "Pendatan SE2026",
    "tujuanTugas": ""
  },
  {
    "id": "st-115",
    "nomorUrut": 115,
    "tanggal": "23 Juni 2026",
    "kodeKlasifikasi": "VS.330",
    "nomorSurat": "B-115/7301/VS.330/2026",
    "petugas": "Terlampir",
    "perihal": "Pendataan KSA Padi Juni 2026",
    "tujuanTugas": ""
  },
  {
    "id": "st-116",
    "nomorUrut": 116,
    "tanggal": "23 Juni 2026",
    "kodeKlasifikasi": "VS.330",
    "nomorSurat": "B-116/7301/VS.330/2026",
    "petugas": "Terlampir",
    "perihal": "Pendataan KSA Jagung Juni 2026",
    "tujuanTugas": ""
  },
  {
    "id": "st-117",
    "nomorUrut": 117,
    "tanggal": "26 Juni 2026",
    "kodeKlasifikasi": "SS.330",
    "nomorSurat": "B-117/7301/SS.330/2026",
    "petugas": "Petugas SE2026 Bontoharu",
    "perihal": "Rapat Pertemuan Petugas SE2026 Kec. Bontoharu",
    "tujuanTugas": ""
  },
  {
    "id": "st-118",
    "nomorUrut": 118,
    "tanggal": "26 Juni 2026",
    "kodeKlasifikasi": "SS.330",
    "nomorSurat": "B-118/7301/SS.330/2026",
    "petugas": "Petugas SE2026 Pasimassunggu",
    "perihal": "Rapat Pertemuan Petugas SE2026 Kec. Pasimassunggu",
    "tujuanTugas": ""
  },
  {
    "id": "st-119",
    "nomorUrut": 119,
    "tanggal": "26 Juni 2026",
    "kodeKlasifikasi": "SS.330",
    "nomorSurat": "B-119/7301/SS.330/2026",
    "petugas": "Petugas SE2026 Takabonerate",
    "perihal": "Rapat Pertemuan Petugas SE2026 Kec. Takabonerate",
    "tujuanTugas": ""
  },
  {
    "id": "st-120",
    "nomorUrut": 120,
    "tanggal": "26 Juni 2026",
    "kodeKlasifikasi": "SS.330",
    "nomorSurat": "B-120/7301/SS.330/2026",
    "petugas": "Petugas SE2026 Buki",
    "perihal": "Rapat Pertemuan Petugas SE2026 Kec. Buki",
    "tujuanTugas": ""
  },
  {
    "id": "st-121",
    "nomorUrut": 121,
    "tanggal": "26 Juni 2026",
    "kodeKlasifikasi": "SS.330",
    "nomorSurat": "B-121/7301/SS.330/2026",
    "petugas": "Petugas SE2026 Benteng",
    "perihal": "Rapat Pertemuan Petugas SE2026 Kec. Benteng",
    "tujuanTugas": ""
  },
  {
    "id": "st-122",
    "nomorUrut": 122,
    "tanggal": "26 Juni 2026",
    "kodeKlasifikasi": "SS.330",
    "nomorSurat": "B-122/7301/SS.330/2026",
    "petugas": "Petugas SE2026 Pasimarannu",
    "perihal": "Rapat Pertemuan Petugas SE2026 Kec. Pasimarannu",
    "tujuanTugas": ""
  },
  {
    "id": "st-122.1",
    "nomorUrut": 122.1,
    "tanggal": "26 Juni 2026",
    "kodeKlasifikasi": "SS.330",
    "nomorSurat": "B-122.1/7301/SS.330/2026",
    "petugas": "Petugas SE2026 Bontomanai",
    "perihal": "Rapat Pertemuan Petugas SE2026 Kec. Bontomanai",
    "tujuanTugas": ""
  },
  {
    "id": "st-122.2",
    "nomorUrut": 122.2,
    "tanggal": "26 Juni 2026",
    "kodeKlasifikasi": "SS.330",
    "nomorSurat": "B-122.2/7301/SS.330/2026",
    "petugas": "Petugas SE2026 Pasimassunggu Timur",
    "perihal": "Rapat Pertemuan Petugas SE2026 Kec. Pasimassunggu Timur",
    "tujuanTugas": ""
  },
  {
    "id": "st-122.3",
    "nomorUrut": 122.3,
    "tanggal": "26 Juni 2026",
    "kodeKlasifikasi": "SS.330",
    "nomorSurat": "B-122.3/7301/SS.330/2026",
    "petugas": "Petugas SE2026 Bontosikuyu",
    "perihal": "Rapat Pertemuan Petugas SE2026 Kec. Bontosikuyu",
    "tujuanTugas": ""
  },
  {
    "id": "st-122.4",
    "nomorUrut": 122.4,
    "tanggal": "26 Juni 2026",
    "kodeKlasifikasi": "SS.330",
    "nomorSurat": "B-122.4/7301/SS.330/2026",
    "petugas": "Petugas SE2026 Bontomatene",
    "perihal": "Rapat Pertemuan Petugas SE2026 Kec. Bontomatene",
    "tujuanTugas": ""
  },
  {
    "id": "st-123",
    "nomorUrut": 123,
    "tanggal": "30 Juni 2026",
    "kodeKlasifikasi": "VS.210",
    "nomorSurat": "B-123/7301/VS.210/2026",
    "petugas": "Terlampir",
    "perihal": "Pelatihan Inda Sakernas Agustus 2026",
    "tujuanTugas": ""
  },
  {
    "id": "st-123.1",
    "nomorUrut": 123.1,
    "tanggal": "30 Juni 2026",
    "kodeKlasifikasi": "VS.330",
    "nomorSurat": "B-123.1/7301/VS.330/2026",
    "petugas": "Terlampir",
    "perihal": "Pendataan IMK Triwulan II",
    "tujuanTugas": ""
  },
  {
    "id": "st-124",
    "nomorUrut": 124,
    "tanggal": "1 Juli 2026",
    "kodeKlasifikasi": "HM.300",
    "nomorSurat": "B-124/7301/HM.300/2026",
    "petugas": "Muhammad Nur, S.Sos",
    "perihal": "Rapat Koordinasi dalam Rangka Kunjungan Kerja Panitia Kerja RUU Tentang Statistik Komisi X DPR RI",
    "tujuanTugas": ""
  },
  {
    "id": "st-124.1",
    "nomorUrut": 124.1,
    "tanggal": "1 Juli 2026",
    "kodeKlasifikasi": "SS.330",
    "nomorSurat": "B-124.1/7301/SS.330/2026",
    "petugas": "PCL SE2026",
    "perihal": "Pendataan Lapangan SE2026",
    "tujuanTugas": ""
  },
  {
    "id": "st-125",
    "nomorUrut": 125,
    "tanggal": "1 Juli 2026",
    "kodeKlasifikasi": "VS.330",
    "nomorSurat": "B-125/7301/VS.330/2026",
    "petugas": "Terlampir",
    "perihal": "SPUNP TW 2",
    "tujuanTugas": ""
  },
  {
    "id": "st-126",
    "nomorUrut": 126,
    "tanggal": "1 Juli 2026",
    "kodeKlasifikasi": "VS.330",
    "nomorSurat": "B-126/7301/VS.330/2026",
    "petugas": "Terlampir",
    "perihal": "SHP Juli",
    "tujuanTugas": ""
  },
  {
    "id": "st-127",
    "nomorUrut": 127,
    "tanggal": "1 Juli 2026",
    "kodeKlasifikasi": "VS.330",
    "nomorSurat": "B-127/7301/VS.330/2026",
    "petugas": "Terlampir",
    "perihal": "SHPB Juli",
    "tujuanTugas": ""
  },
  {
    "id": "st-128",
    "nomorUrut": 128,
    "tanggal": "1 Juli 2026",
    "kodeKlasifikasi": "VS.330",
    "nomorSurat": "B-128/7301/VS.330/2026",
    "petugas": "Terlampir",
    "perihal": "VHTS Juli",
    "tujuanTugas": ""
  },
  {
    "id": "st-129",
    "nomorUrut": 129,
    "tanggal": "1 Juli 2026",
    "kodeKlasifikasi": "SS.330",
    "nomorSurat": "B-129/7301/SS.330/2026",
    "petugas": "PCL SE2026 V3",
    "perihal": "Perubahan Surat Tugas SE2026",
    "tujuanTugas": ""
  },
  {
    "id": "st-129.1",
    "nomorUrut": 129.1,
    "tanggal": "1 Juli 2026",
    "kodeKlasifikasi": "VS.330",
    "nomorSurat": "B-129.1/7301/VS.330/2026",
    "petugas": "Terlampir",
    "perihal": "Pendataan VKOMSTRAT TW 2 2026",
    "tujuanTugas": ""
  },
  {
    "id": "st-130",
    "nomorUrut": 130,
    "tanggal": "9 Juli 2026",
    "kodeKlasifikasi": "VS.220",
    "nomorSurat": "B-130/7301/VS.220/2026",
    "petugas": "Terlampir",
    "perihal": "Pelatihan Petugas Sakernas Agustus 2026",
    "tujuanTugas": ""
  },
  {
    "id": "st-131",
    "nomorUrut": 131,
    "tanggal": "17 Juli 2026",
    "kodeKlasifikasi": "VS.330",
    "nomorSurat": "B-131/7301/VS.330/2026",
    "petugas": "Terlampir",
    "perihal": "Pemutakhiran dan Pendataan Sakernas Agustus Tahun 2026",
    "tujuanTugas": ""
  },
  {
    "id": "st-131.1",
    "nomorUrut": 131.1,
    "tanggal": "17 Juli 2026",
    "kodeKlasifikasi": "VS.340",
    "nomorSurat": "B-131.1/7301/VS.340/2026",
    "petugas": "Mukhtar, A.Md.Kom.",
    "perihal": "Perjalanan Pemeriksaan Lapangan Pemutakhiran dan Pendataan Sakernas Agustus 2026",
    "tujuanTugas": ""
  },
  {
    "id": "st-131.2",
    "nomorUrut": 131.2,
    "tanggal": "17 Juli 2026",
    "kodeKlasifikasi": "VS.340",
    "nomorSurat": "B-131.2/7301/VS.340/2026",
    "petugas": "Zulhan Efendy",
    "perihal": "Perjalanan Pemeriksaan Lapangan Pemutakhiran dan Pendataan Sakernas Agustus 2026",
    "tujuanTugas": ""
  },
  {
    "id": "st-131.3",
    "nomorUrut": 131.3,
    "tanggal": "17 Juli 2026",
    "kodeKlasifikasi": "VS.340",
    "nomorSurat": "B-131.3/7301/VS.340/2026",
    "petugas": "Muhammad Junaid",
    "perihal": "Perjalanan Pemeriksaan Lapangan Pemutakhiran dan Pendataan Sakernas Agustus 2026",
    "tujuanTugas": ""
  },
  {
    "id": "st-131.4",
    "nomorUrut": 131.4,
    "tanggal": "17 Juli 2026",
    "kodeKlasifikasi": "VS.340",
    "nomorSurat": "B-131.4/7301/VS.340/2026",
    "petugas": "Ridson Al Farizal P., S.Tr.Stat.",
    "perihal": "Perjalanan Pemeriksaan Lapangan Pemutakhiran dan Pendataan Sakernas Agustus 2026",
    "tujuanTugas": ""
  },
  {
    "id": "st-131.5",
    "nomorUrut": 131.5,
    "tanggal": "17 Juli 2026",
    "kodeKlasifikasi": "VS.340",
    "nomorSurat": "B-131.5/7301/VS.340/2026",
    "petugas": "Nurul Izzah Abdullah, A.Md.Stat.",
    "perihal": "Perjalanan Pemeriksaan Lapangan Pemutakhiran dan Pendataan Sakernas Agustus 2026",
    "tujuanTugas": ""
  },
  {
    "id": "st-131.6",
    "nomorUrut": 131.6,
    "tanggal": "17 Juli 2026",
    "kodeKlasifikasi": "VS.340",
    "nomorSurat": "B-131.6/7301/VS.340/2026",
    "petugas": "Ilham Aminu Rosyid, S.Tr.Stat.",
    "perihal": "Perjalanan Pemeriksaan Lapangan Pemutakhiran dan Pendataan Sakernas Agustus 2026",
    "tujuanTugas": ""
  },
  {
    "id": "st-131.7",
    "nomorUrut": 131.7,
    "tanggal": "17 Juli 2026",
    "kodeKlasifikasi": "VS.340",
    "nomorSurat": "B-131.7/7301/VS.340/2026",
    "petugas": "Aronad Brilliantino Evan Maheswara, S.Tr.Stat.",
    "perihal": "Perjalanan Pemeriksaan Lapangan Pemutakhiran dan Pendataan Sakernas Agustus 2026",
    "tujuanTugas": ""
  },
  {
    "id": "st-131.8",
    "nomorUrut": 131.8,
    "tanggal": "17 Juli 2026",
    "kodeKlasifikasi": "VS.340",
    "nomorSurat": "B-131.8/7301/VS.340/2026",
    "petugas": "Nur Amalina Fauzi S.Tr.Stat.",
    "perihal": "Perjalanan Pemeriksaan Lapangan Pemutakhiran dan Pendataan Sakernas Agustus 2026",
    "tujuanTugas": ""
  },
  {
    "id": "st-131.9",
    "nomorUrut": 131.9,
    "tanggal": "17 Juli 2026",
    "kodeKlasifikasi": "VS.340",
    "nomorSurat": "B-131.9/7301/VS.340/2026",
    "petugas": "Arie Purnama S.IP.",
    "perihal": "Perjalanan Pemeriksaan Lapangan Pemutakhiran dan Pendataan Sakernas Agustus 2026",
    "tujuanTugas": ""
  },
  {
    "id": "st-131.10",
    "nomorUrut": 131.1,
    "tanggal": "17 Juli 2026",
    "kodeKlasifikasi": "VS.340",
    "nomorSurat": "B-131.10/7301/VS.340/2026",
    "petugas": "Apri Wijaya S.T.",
    "perihal": "Perjalanan Pemeriksaan Lapangan Pemutakhiran dan Pendataan Sakernas Agustus 2026",
    "tujuanTugas": ""
  },
  {
    "id": "st-131.11",
    "nomorUrut": 131.11,
    "tanggal": "17 Juli 2026",
    "kodeKlasifikasi": "VS.340",
    "nomorSurat": "B-131.11/7301/VS.340/2026",
    "petugas": "Andi Muhammad Rosyidin Hidayat, S.Tr.Stat.",
    "perihal": "Perjalanan Pemeriksaan Lapangan Pemutakhiran dan Pendataan Sakernas Agustus 2026",
    "tujuanTugas": ""
  },
  {
    "id": "st-131.12",
    "nomorUrut": 131.12,
    "tanggal": "17 Juli 2026",
    "kodeKlasifikasi": "VS.340",
    "nomorSurat": "B-131.12/7301/VS.340/2026",
    "petugas": "Nur Asri, A.Md.Kom.",
    "perihal": "Perjalanan Pemeriksaan Lapangan Pemutakhiran dan Pendataan Sakernas Agustus 2026",
    "tujuanTugas": ""
  },
  {
    "id": "st-132",
    "nomorUrut": 132,
    "tanggal": "17 Juli 2026",
    "kodeKlasifikasi": "VS.210",
    "nomorSurat": "B-132/7301/VS.210/2026",
    "petugas": "Aronad Brilliantino Evan Maheswara",
    "perihal": "Pelatihan Inda Susenas September dan SEeruti Tw III Tahun 2026",
    "tujuanTugas": ""
  },
  {
    "id": "st-133",
    "nomorUrut": 133,
    "tanggal": "20 Juli 2026",
    "kodeKlasifikasi": "VS.330",
    "nomorSurat": "B-133/7301/VS.330/2026",
    "petugas": "Terlampir",
    "perihal": "Pendataan KSA Padi Juli 2026",
    "tujuanTugas": ""
  },
  {
    "id": "st-134",
    "nomorUrut": 134,
    "tanggal": "20 Juli 2026",
    "kodeKlasifikasi": "VS.330",
    "nomorSurat": "B-134/7301/VS.330/2026",
    "petugas": "Terlampir",
    "perihal": "Pendataan KSA Jagung Juli 2026",
    "tujuanTugas": ""
  },
  {
    "id": "st-135",
    "nomorUrut": 135,
    "tanggal": "22 Juli 2026",
    "kodeKlasifikasi": "SS.300",
    "nomorSurat": "B-135/7301/SS.300/2026",
    "petugas": "Miuhammad Nur, S.Sos",
    "perihal": "Rapat Koordinasi Pelaksanaan SE2026 dan Kegiatan Lainnya Bersama Wakil Kepala BPS BPS-RI",
    "tujuanTugas": ""
  },
  {
    "id": "st-136",
    "nomorUrut": 136,
    "tanggal": "24 Juli 2026",
    "kodeKlasifikasi": "SS.190",
    "nomorSurat": "B-136/7301/SS.190/2026",
    "petugas": "Miuhammad Nur, S.Sos",
    "perihal": "Rakornas Evaluasi dan Monitoring Pelaksanaan Lapangan SE2026",
    "tujuanTugas": ""
  },
  {
    "id": "st-136.1",
    "nomorUrut": 136.1,
    "tanggal": "27 Juli 2026",
    "kodeKlasifikasi": "SS.330",
    "nomorSurat": "B-136.1/7301/SS.330/2026",
    "petugas": "Petugas SE2026 Bontoharu",
    "perihal": "Rapat Pertemuan Petugas SE2026 Kec. Bontoharu ke - 2",
    "tujuanTugas": ""
  },
  {
    "id": "st-137",
    "nomorUrut": 137,
    "tanggal": "27 Juli 2026",
    "kodeKlasifikasi": "SS.330",
    "nomorSurat": "B-137/7301/SS.330/2026",
    "petugas": "Petugas SE2026 Benteng",
    "perihal": "Rapat Pertemuan Petugas SE2026 Kec. Benteng 2",
    "tujuanTugas": ""
  },
  {
    "id": "st-137.1",
    "nomorUrut": 137.1,
    "tanggal": "27 Juli 2026",
    "kodeKlasifikasi": "SS.330",
    "nomorSurat": "B-137.1/7301/SS.330/2026",
    "petugas": "Petugas SE2026 Bontomatene",
    "perihal": "Rapat Pertemuan Ke-II Petugas SE2026 Kec. Bontomatene",
    "tujuanTugas": ""
  },
  {
    "id": "st-137.2",
    "nomorUrut": 137.2,
    "tanggal": "27 Juli 2026",
    "kodeKlasifikasi": "SS.330",
    "nomorSurat": "B-137.2/7301/SS.330/2026",
    "petugas": "Petugas SE2026 Takabonerate",
    "perihal": "Rapat Pertemuan Ke-II Petugas SE2026 Kec. Takabonerate",
    "tujuanTugas": ""
  },
  {
    "id": "st-137.3",
    "nomorUrut": 137.3,
    "tanggal": "27 Juli 2026",
    "kodeKlasifikasi": "SS.330",
    "nomorSurat": "B-137.3/7301/SS.330/2026",
    "petugas": "Petugas SE2026 Pasimarannu",
    "perihal": "Rapat Pertemuan Ke-II Petugas SE2026 Kec. Pasimarannu",
    "tujuanTugas": ""
  },
  {
    "id": "st-137.4",
    "nomorUrut": 137.4,
    "tanggal": "30 Juli 2026",
    "kodeKlasifikasi": "SS.330",
    "nomorSurat": "B-137.4/7301/SS.330/2026",
    "petugas": "Petugas SE2026 Bontomanai",
    "perihal": "Rapat Pertemuan Ke-II Petugas SE2026 Kec.Bontomanai",
    "tujuanTugas": ""
  },
  {
    "id": "st-137.5",
    "nomorUrut": 137.5,
    "tanggal": "3 Agustus 2026",
    "kodeKlasifikasi": "SS.350",
    "nomorSurat": "B-137.5/7301/SS.350/2026",
    "petugas": "Nurlaela",
    "perihal": "Perjalanan Pendampingan Petugas SE2026 Desa Polassi",
    "tujuanTugas": ""
  },
  {
    "id": "st-139",
    "nomorUrut": 139,
    "tanggal": "3 Agustus 2026",
    "kodeKlasifikasi": "VS.330",
    "nomorSurat": "B-139/7301/VS.330/2026",
    "petugas": "SHP",
    "perihal": "Pendataan SHP Bulan Agustus",
    "tujuanTugas": ""
  },
  {
    "id": "st-140",
    "nomorUrut": 140,
    "tanggal": "3 Agustus 2026",
    "kodeKlasifikasi": "VS.330",
    "nomorSurat": "B-140/7301/VS.330/2026",
    "petugas": "SHPB",
    "perihal": "Pendataan SHPB Bulan Agustus",
    "tujuanTugas": ""
  },
  {
    "id": "st-141",
    "nomorUrut": 141,
    "tanggal": "3 Agustus 2026",
    "kodeKlasifikasi": "VS.330",
    "nomorSurat": "B-141/7301/VS.330/2026",
    "petugas": "VHTS",
    "perihal": "Pendataan VHTS Bulan Agustus",
    "tujuanTugas": ""
  },
  {
    "id": "st-142",
    "nomorUrut": 142,
    "tanggal": "3 Agustus 2026",
    "kodeKlasifikasi": "SS.330",
    "nomorSurat": "B-142/7301/SS.330/2026",
    "petugas": "Sri Wahyuni, S.Si",
    "perihal": "Task Force SE2026",
    "tujuanTugas": ""
  },
  {
    "id": "st-143",
    "nomorUrut": 143,
    "tanggal": "3 Agustus 2026",
    "kodeKlasifikasi": "SS.330",
    "nomorSurat": "B-143/7301/SS.330/2026",
    "petugas": "Ridson Al Farizal P",
    "perihal": "Task Force SE2026",
    "tujuanTugas": ""
  },
  {
    "id": "st-144",
    "nomorUrut": 144,
    "tanggal": "3 Agustus 2026",
    "kodeKlasifikasi": "SS.330",
    "nomorSurat": "B-144/7301/SS.330/2026",
    "petugas": "Andi Muhammad Rosyidin Hidayat, S.Tr.Stat.",
    "perihal": "Task Force SE2026",
    "tujuanTugas": ""
  },
  {
    "id": "st-145",
    "nomorUrut": 145,
    "tanggal": "3 Agustus 2026",
    "kodeKlasifikasi": "SS.330",
    "nomorSurat": "B-145/7301/SS.330/2026",
    "petugas": "Bustan, S.Sos",
    "perihal": "Task Force SE2026",
    "tujuanTugas": ""
  },
  {
    "id": "st-146",
    "nomorUrut": 146,
    "tanggal": "3 Agustus 2026",
    "kodeKlasifikasi": "SS.330",
    "nomorSurat": "B-146/7301/SS.330/2026",
    "petugas": "Zulhan Efendy, S.Sos",
    "perihal": "Task Force SE2026",
    "tujuanTugas": ""
  },
  {
    "id": "st-147",
    "nomorUrut": 147,
    "tanggal": "3 Agustus 2026",
    "kodeKlasifikasi": "SS.330",
    "nomorSurat": "B-147/7301/SS.330/2026",
    "petugas": "Nurlaela, S.Sos",
    "perihal": "Task Force SE2026",
    "tujuanTugas": ""
  },
  {
    "id": "st-148",
    "nomorUrut": 148,
    "tanggal": "3 Agustus 2026",
    "kodeKlasifikasi": "SS.330",
    "nomorSurat": "B-148/7301/SS.330/2026",
    "petugas": "Nur Asri, A.Md.Kom.",
    "perihal": "Task Force SE2026",
    "tujuanTugas": ""
  },
  {
    "id": "st-149",
    "nomorUrut": 149,
    "tanggal": "3 Agustus 2026",
    "kodeKlasifikasi": "SS.330",
    "nomorSurat": "B-149/7301/SS.330/2026",
    "petugas": "Konita Iladini, S.Tr.Stat.",
    "perihal": "Task Force SE2026",
    "tujuanTugas": ""
  },
  {
    "id": "st-150",
    "nomorUrut": 150,
    "tanggal": "3 Agustus 2026",
    "kodeKlasifikasi": "SS.330",
    "nomorSurat": "B-150/7301/SS.330/2026",
    "petugas": "Fakhri Hafidzul Azhar, S.Tr.Stat.",
    "perihal": "Task Force SE2026",
    "tujuanTugas": ""
  },
  {
    "id": "st-151",
    "nomorUrut": 151,
    "tanggal": "3 Agustus 2026",
    "kodeKlasifikasi": "SS.330",
    "nomorSurat": "B-151/7301/SS.330/2026",
    "petugas": "Muhammad Junaid",
    "perihal": "Task Force SE2026",
    "tujuanTugas": ""
  },
  {
    "id": "st-152",
    "nomorUrut": 152,
    "tanggal": "3 Agustus 2026",
    "kodeKlasifikasi": "SS.330",
    "nomorSurat": "B-152/7301/SS.330/2026",
    "petugas": "Andi Basri",
    "perihal": "Task Force SE2026",
    "tujuanTugas": ""
  },
  {
    "id": "st-153",
    "nomorUrut": 153,
    "tanggal": "3 Agustus 2026",
    "kodeKlasifikasi": "SS.330",
    "nomorSurat": "B-153/7301/SS.330/2026",
    "petugas": "Ilham Aminu Rosyid, S.Tr.Stat.",
    "perihal": "Task Force SE2026",
    "tujuanTugas": ""
  },
  {
    "id": "st-154",
    "nomorUrut": 154,
    "tanggal": "3 Agustus 2026",
    "kodeKlasifikasi": "SS.330",
    "nomorSurat": "B-154/7301/SS.330/2026",
    "petugas": "Indawati Amiruddin, A.Md.Stat.",
    "perihal": "Task Force SE2026",
    "tujuanTugas": ""
  },
  {
    "id": "st-155",
    "nomorUrut": 155,
    "tanggal": "3 Agustus 2026",
    "kodeKlasifikasi": "SS.330",
    "nomorSurat": "B-155/7301/SS.330/2026",
    "petugas": "Nurul Izzah Abdullah, A.Md.Stat.",
    "perihal": "Task Force SE2026",
    "tujuanTugas": ""
  },
  {
    "id": "st-156",
    "nomorUrut": 156,
    "tanggal": "3 Agustus 2026",
    "kodeKlasifikasi": "SS.330",
    "nomorSurat": "B-156/7301/SS.330/2026",
    "petugas": "Ahmad Musawwir, A.Md.Kom.",
    "perihal": "Task Force SE2026",
    "tujuanTugas": ""
  },
  {
    "id": "st-157",
    "nomorUrut": 157,
    "tanggal": "3 Agustus 2026",
    "kodeKlasifikasi": "SS.330",
    "nomorSurat": "B-157/7301/SS.330/2026",
    "petugas": "Aronad Brilliantino Evan Maheswara, S.Tr.Stat.",
    "perihal": "Task Force SE2026",
    "tujuanTugas": ""
  },
  {
    "id": "st-158",
    "nomorUrut": 158,
    "tanggal": "3 Agustus 2026",
    "kodeKlasifikasi": "SS.330",
    "nomorSurat": "B-158/7301/SS.330/2026",
    "petugas": "Nur Amalina Fauzi S.Tr.Stat.",
    "perihal": "Task Force SE2026",
    "tujuanTugas": ""
  },
  {
    "id": "st-159",
    "nomorUrut": 159,
    "tanggal": "3 Agustus 2026",
    "kodeKlasifikasi": "SS.330",
    "nomorSurat": "B-159/7301/SS.330/2026",
    "petugas": "Mukhtar, A.Md.Kom.",
    "perihal": "Task Force SE2026",
    "tujuanTugas": ""
  },
  {
    "id": "st-160",
    "nomorUrut": 160,
    "tanggal": "3 Agustus 2026",
    "kodeKlasifikasi": "SS.330",
    "nomorSurat": "B-160/7301/SS.330/2026",
    "petugas": "Arie Purnama S.IP.",
    "perihal": "Task Force SE2026",
    "tujuanTugas": ""
  },
  {
    "id": "st-161",
    "nomorUrut": 161,
    "tanggal": "3 Agustus 2026",
    "kodeKlasifikasi": "SS.330",
    "nomorSurat": "B-161/7301/SS.330/2026",
    "petugas": "Apri Wijaya S.T.",
    "perihal": "Task Force SE2026",
    "tujuanTugas": ""
  },
  {
    "id": "st-162",
    "nomorUrut": 162,
    "tanggal": "3 Agustus 2026",
    "kodeKlasifikasi": "SS.330",
    "nomorSurat": "B-162/7301/SS.330/2026",
    "petugas": "Muh. Aszar Siri",
    "perihal": "Task Force SE2026",
    "tujuanTugas": ""
  },
  {
    "id": "st-163",
    "nomorUrut": 163,
    "tanggal": "3 Agustus 2026",
    "kodeKlasifikasi": "SS.330",
    "nomorSurat": "B-163/7301/SS.330/2026",
    "petugas": "Bau Sulfa",
    "perihal": "Pendataan",
    "tujuanTugas": ""
  },
  {
    "id": "st-164",
    "nomorUrut": 164,
    "tanggal": "3 Agustus 2026",
    "kodeKlasifikasi": "SS.330",
    "nomorSurat": "B-164/7301/SS.330/2026",
    "petugas": "Firman",
    "perihal": "Pendataan",
    "tujuanTugas": ""
  },
  {
    "id": "st-166",
    "nomorUrut": 166,
    "tanggal": "10 Agustus 2026",
    "kodeKlasifikasi": "VS.330",
    "nomorSurat": "B-166/7301/VS.330/2026",
    "petugas": "Terlampir",
    "perihal": "Pendataan KSA Padi agus 2026",
    "tujuanTugas": ""
  },
  {
    "id": "st-167",
    "nomorUrut": 167,
    "tanggal": "10 Agustus 2026",
    "kodeKlasifikasi": "VS.330",
    "nomorSurat": "B-167/7301/VS.330/2026",
    "petugas": "Terlampir",
    "perihal": "Pendataan KSA Jagungagus 2026",
    "tujuanTugas": ""
  },
  {
    "id": "st-168",
    "nomorUrut": 168,
    "tanggal": "10 Agustus 2026",
    "kodeKlasifikasi": "VS.220",
    "nomorSurat": "B-168/7301/VS.220/2026",
    "petugas": "Terlampir",
    "perihal": "Pelatihan Petugas Susenas September dan Seruti Triwulan III Tahun 2026",
    "tujuanTugas": ""
  },
  {
    "id": "st-169",
    "nomorUrut": 169,
    "tanggal": "10 Agustus 2026",
    "kodeKlasifikasi": "VS.220",
    "nomorSurat": "B-169/7301/VS.220/2026",
    "petugas": "Aronad Brilliantino Evan Maheswara",
    "perihal": "Pengajar Pelatihan Petugas Susenas September dan Seruti Triwulan III Tahun 2026",
    "tujuanTugas": ""
  },
  {
    "id": "st-170",
    "nomorUrut": 170,
    "tanggal": "10 Agustus 2026",
    "kodeKlasifikasi": "VS.330",
    "nomorSurat": "B-170/7301/VS.330/2026",
    "petugas": "Terlampir",
    "perihal": "Pemutakhiran dan Pendataan Susenas Septmber dan Seruti Tw III Tahun 2026",
    "tujuanTugas": ""
  },
  {
    "id": "st-170.1",
    "nomorUrut": 170.1,
    "tanggal": "10 Agustus 2026",
    "kodeKlasifikasi": "VS.340",
    "nomorSurat": "B-170.1/7301/VS.340/2026",
    "petugas": "Andi Basri",
    "perihal": "Perjalanan Pemeriksaan Lapangan Pemutakhiran dan Pendataan Susenas September dan Seruti Triwulan III Tahun 2026",
    "tujuanTugas": ""
  },
  {
    "id": "st-170.2",
    "nomorUrut": 170.2,
    "tanggal": "10 Agustus 2026",
    "kodeKlasifikasi": "VS.340",
    "nomorSurat": "B-170.2/7301/VS.340/2026",
    "petugas": "Bustan",
    "perihal": "Perjalanan Pemeriksaan Lapangan Pemutakhiran dan Pendataan Susenas September dan Seruti Triwulan III Tahun 2026",
    "tujuanTugas": ""
  },
  {
    "id": "st-170.3",
    "nomorUrut": 170.3,
    "tanggal": "10 Agustus 2026",
    "kodeKlasifikasi": "VS.340",
    "nomorSurat": "B-170.3/7301/VS.340/2026",
    "petugas": "Indawati Amiruddin, A.Md.Stat.",
    "perihal": "Perjalanan Pemeriksaan Lapangan Pemutakhiran dan Pendataan Susenas September dan Seruti Triwulan III Tahun 2026",
    "tujuanTugas": ""
  },
  {
    "id": "st-170.4",
    "nomorUrut": 170.4,
    "tanggal": "10 Agustus 2026",
    "kodeKlasifikasi": "VS.340",
    "nomorSurat": "B-170.4/7301/VS.340/2026",
    "petugas": "Konita Iladini, S.Tr.Stat.",
    "perihal": "Perjalanan Pemeriksaan Lapangan Pemutakhiran dan Pendataan Susenas September dan Seruti Triwulan III Tahun 2026",
    "tujuanTugas": ""
  },
  {
    "id": "st-170.5",
    "nomorUrut": 170.5,
    "tanggal": "10 Agustus 2026",
    "kodeKlasifikasi": "VS.340",
    "nomorSurat": "B-170.5/7301/VS.340/2026",
    "petugas": "Muhammad Ikbal Nur",
    "perihal": "Perjalanan Pemeriksaan Lapangan Pemutakhiran dan Pendataan Susenas September dan Seruti Triwulan III Tahun 2026",
    "tujuanTugas": ""
  },
  {
    "id": "st-170.6",
    "nomorUrut": 170.6,
    "tanggal": "10 Agustus 2026",
    "kodeKlasifikasi": "VS.340",
    "nomorSurat": "B-170.6/7301/VS.340/2026",
    "petugas": "Sri Wahyuni, S.Si",
    "perihal": "Perjalanan Pemeriksaan Lapangan Pemutakhiran dan Pendataan Susenas September dan Seruti Triwulan III Tahun 2026",
    "tujuanTugas": ""
  },
  {
    "id": "st-170.7",
    "nomorUrut": 170.7,
    "tanggal": "10 Agustus 2026",
    "kodeKlasifikasi": "VS.350",
    "nomorSurat": "B-170.7/7301/VS.350/2026",
    "petugas": "Aronad Brilliantino Evan Maheswara, S.Tr.Stat",
    "perihal": "Perjalanan Pengawasan Lapangan Pemutakhiran dan Pendataan Susenas September dan Seruti Triwulan III Tahun 2026",
    "tujuanTugas": ""
  },
  {
    "id": "st-170.8",
    "nomorUrut": 170.8,
    "tanggal": "10 Agustus 2026",
    "kodeKlasifikasi": "VS.350",
    "nomorSurat": "B-170.8/7301/VS.350/2026",
    "petugas": "Fakhri Hafidzul Azhar, S.Tr.Stat",
    "perihal": "Perjalanan Pengawasan Lapangan Pemutakhiran dan Pendataan Susenas September dan Seruti Triwulan III Tahun 2026",
    "tujuanTugas": ""
  },
  {
    "id": "st-171",
    "nomorUrut": 171,
    "tanggal": "19 Agustus 2026",
    "kodeKlasifikasi": "KU.520",
    "nomorSurat": "B-171/7301/KU.520/2026",
    "petugas": "Terlampir",
    "perihal": "Tim PIPK 2026",
    "tujuanTugas": ""
  },
  {
    "id": "st-172",
    "nomorUrut": 172,
    "tanggal": "20 Agustus 2026",
    "kodeKlasifikasi": "VS.220",
    "nomorSurat": "B-172/7301/VS.220/2026",
    "petugas": "Terlampir",
    "perihal": "Pelaihan Petugas Survei Kesejahteraan Petani (SKP) 2026",
    "tujuanTugas": ""
  },
  {
    "id": "st-173",
    "nomorUrut": 173,
    "tanggal": "20 Agustus 2026",
    "kodeKlasifikasi": "VS.220",
    "nomorSurat": "B-173/7301/VS.220/2026",
    "petugas": "Nurul Izzah Abdullah",
    "perihal": "Pengajar Pelatihan Petugas Survei Kesejahteraan Petani (SKP) 2026",
    "tujuanTugas": ""
  },
  {
    "id": "st-174",
    "nomorUrut": 174,
    "tanggal": "24 Agustus 2026",
    "kodeKlasifikasi": "VS.220",
    "nomorSurat": "B-174/7301/VS.220/2026",
    "petugas": "Terlampir",
    "perihal": "Pelatihan Petugas SKNP Tahun 2026",
    "tujuanTugas": ""
  },
  {
    "id": "st-174.1",
    "nomorUrut": 174.1,
    "tanggal": "24 Agustus 2026",
    "kodeKlasifikasi": "VS.220",
    "nomorSurat": "B-174.1/7301/VS.220/2026",
    "petugas": "Konita",
    "perihal": "Pengajar Pelatihan Petugas SKNP Tahun 2026",
    "tujuanTugas": ""
  },
  {
    "id": "st-175",
    "nomorUrut": 175,
    "tanggal": "28 Agustus 2026",
    "kodeKlasifikasi": "SS.360",
    "nomorSurat": "B-175/7301/SS.360/2026",
    "petugas": "Muhammad Nur",
    "perihal": "Konsultasi Evaluasi Hasil Pendataan Sensus Ekonomi (SE2026) dirangkaikan dengan Harmonisasi EPSS Tahun 2026 di BPS Provinsi Sulawesi Selatan",
    "tujuanTugas": ""
  },
  {
    "id": "st-176",
    "nomorUrut": 176,
    "tanggal": "28 Agustus 2026",
    "kodeKlasifikasi": "SS.360",
    "nomorSurat": "B-176/7301/SS.360/2026",
    "petugas": "Andi Muhammad Rosyidin Hidayat",
    "perihal": "Konsultasi Evaluasi Hasil Pendataan Sensus Ekonomi (SE2026) dirangkaikan dengan Harmonisasi EPSS Tahun 2026 di BPS Provinsi Sulawesi Selatan",
    "tujuanTugas": ""
  },
  {
    "id": "st-177",
    "nomorUrut": 177,
    "tanggal": "28 Agustus 2026",
    "kodeKlasifikasi": "SS.360",
    "nomorSurat": "B-177/7301/SS.360/2026",
    "petugas": "Konita Iladini",
    "perihal": "Konsultasi Evaluasi Hasil Pendataan Sensus Ekonomi (SE2026) dirangkaikan dengan Harmonisasi EPSS Tahun 2026 di BPS Provinsi Sulawesi Selatan",
    "tujuanTugas": ""
  },
  {
    "id": "st-178",
    "nomorUrut": 178,
    "tanggal": "28 Agustus 2026",
    "kodeKlasifikasi": "VS.340",
    "nomorSurat": "B-178/7301/VS.340/2026",
    "petugas": "Aronad Brilliantino Evan Maheswara",
    "perihal": "Perjalanan Pengawasan Pengumpulan Data Rentang Harga dan Konversi Satuan Komoditas Susenas September 2026",
    "tujuanTugas": ""
  },
  {
    "id": "st-179",
    "nomorUrut": 179,
    "tanggal": "28 Agustus 2026",
    "kodeKlasifikasi": "VS.330",
    "nomorSurat": "B-179/7301/VS.330/2026",
    "petugas": "Nurlaela",
    "perihal": "Perjalanan Pengumpulan Data Rentang Harga dan Konversi Satuan Komoditas Susenas September 2026",
    "tujuanTugas": ""
  },
  {
    "id": "st-180",
    "nomorUrut": 180,
    "tanggal": "28 Agustus 2026",
    "kodeKlasifikasi": "VS.330",
    "nomorSurat": "B-180/7301/VS.330/2026",
    "petugas": "Emilia",
    "perihal": "Perjalanan Pengumpulan Data Rentang Harga dan Konversi Satuan Komoditas Susenas September 2026",
    "tujuanTugas": ""
  },
  {
    "id": "st-181",
    "nomorUrut": 181,
    "tanggal": "28 Agustus 2026",
    "kodeKlasifikasi": "VS.330",
    "nomorSurat": "B-181/7301/VS.330/2026",
    "petugas": "Nasria Isya",
    "perihal": "Perjalanan Pengumpulan Data Rentang Harga dan Konversi Satuan Komoditas Susenas September 2026",
    "tujuanTugas": ""
  },
  {
    "id": "st-182",
    "nomorUrut": 182,
    "tanggal": "28 Agustus 2026",
    "kodeKlasifikasi": "SS.360",
    "nomorSurat": "B-182/7301/SS.360/2026",
    "petugas": "Indawati Amiruddin",
    "perihal": "Konsultasi Evaluasi Hasil Pendataan Sensus Ekonomi (SE2026) dirangkaikan dengan Harmonisasi EPSS Tahun 2026 di BPS Provinsi Sulawesi Selatan",
    "tujuanTugas": ""
  },
  {
    "id": "st-183",
    "nomorUrut": 183,
    "tanggal": "31 Agustus 2026",
    "kodeKlasifikasi": "VS.330",
    "nomorSurat": "B-183/7301/VS.330/2026",
    "petugas": "Terlampir",
    "perihal": "Pemutakhiran ubinan subround 3 2026",
    "tujuanTugas": ""
  },
  {
    "id": "st-184",
    "nomorUrut": 184,
    "tanggal": "1 September 2026",
    "kodeKlasifikasi": "VS.330",
    "nomorSurat": "B-184/7301/VS.330/2026",
    "petugas": "Terlampir",
    "perihal": "Pendataan SKP 2026",
    "tujuanTugas": ""
  },
  {
    "id": "st-185",
    "nomorUrut": 185,
    "tanggal": "1 September 2026",
    "kodeKlasifikasi": "VS.340",
    "nomorSurat": "B-185/7301/VS.340/2026",
    "petugas": "Ilham",
    "perihal": "Pemeriksaan SKP 2026",
    "tujuanTugas": ""
  },
  {
    "id": "st-186",
    "nomorUrut": 186,
    "tanggal": "1 September 2026",
    "kodeKlasifikasi": "VS.340",
    "nomorSurat": "B-186/7301/VS.340/2026",
    "petugas": "Rosyid",
    "perihal": "Pemeriksaan SKP 2027",
    "tujuanTugas": ""
  },
  {
    "id": "st-187",
    "nomorUrut": 187,
    "tanggal": "1 September 2026",
    "kodeKlasifikasi": "VS.340",
    "nomorSurat": "B-187/7301/VS.340/2026",
    "petugas": "Zulhan",
    "perihal": "Pemeriksaan SKP 2028",
    "tujuanTugas": ""
  },
  {
    "id": "st-188",
    "nomorUrut": 188,
    "tanggal": "1 September 2026",
    "kodeKlasifikasi": "VS.340",
    "nomorSurat": "B-188/7301/VS.340/2026",
    "petugas": "Lina",
    "perihal": "Pemeriksaan SKP 2029",
    "tujuanTugas": ""
  },
  {
    "id": "st-189",
    "nomorUrut": 189,
    "tanggal": "1 September 2026",
    "kodeKlasifikasi": "VS.330",
    "nomorSurat": "B-189/7301/VS.330/2026",
    "petugas": "Terlampir",
    "perihal": "Pendataan Lapangan SKNP 2026",
    "tujuanTugas": ""
  },
  {
    "id": "st-189.1",
    "nomorUrut": 189.1,
    "tanggal": "1 September 2026",
    "kodeKlasifikasi": "VS.330",
    "nomorSurat": "B-189.1/7301/VS.330/2026",
    "petugas": "Nur Asri",
    "perihal": "Pengawasan Pendataan Lapangan SKNP 2026",
    "tujuanTugas": ""
  },
  {
    "id": "st-189.2",
    "nomorUrut": 189.2,
    "tanggal": "1 September 2026",
    "kodeKlasifikasi": "VS.330",
    "nomorSurat": "B-189.2/7301/VS.330/2026",
    "petugas": "Terlampir",
    "perihal": "Pendataan Penggalian URT",
    "tujuanTugas": ""
  },
  {
    "id": "st-190",
    "nomorUrut": 190,
    "tanggal": "2 September 2026",
    "kodeKlasifikasi": "VS.360",
    "nomorSurat": "B-190/7301/VS.360/2026",
    "petugas": "Nurul Izzah Abdullah",
    "perihal": "Rapat Evaluasi Pembahasan Anomali SKGB 2026",
    "tujuanTugas": ""
  },
  {
    "id": "st-191",
    "nomorUrut": 191,
    "tanggal": "2 September 2026",
    "kodeKlasifikasi": "VS.330",
    "nomorSurat": "B-191/7301/VS.330/2026",
    "petugas": "Terlampir",
    "perihal": "Pendataan Ubinan Palawija SR 3 2026",
    "tujuanTugas": ""
  },
  {
    "id": "st-192",
    "nomorUrut": 192,
    "tanggal": "2 September 2026",
    "kodeKlasifikasi": "VS.330",
    "nomorSurat": "B-192/7301/VS.330/2026",
    "petugas": "Terlampir",
    "perihal": "Pendataan Ubinan Padi SR 3 2026",
    "tujuanTugas": ""
  },
  {
    "id": "st-193",
    "nomorUrut": 193,
    "tanggal": "2 September 2026",
    "kodeKlasifikasi": "VS.330",
    "nomorSurat": "B-193/7301/VS.330/2026",
    "petugas": "Terlampir",
    "perihal": "Pendataan RPH",
    "tujuanTugas": ""
  },
  {
    "id": "st-194",
    "nomorUrut": 194,
    "tanggal": "2 September 2026",
    "kodeKlasifikasi": "VS.330",
    "nomorSurat": "B-194/7301/VS.330/2026",
    "petugas": "Terlampir",
    "perihal": "Petugas SHP",
    "tujuanTugas": ""
  },
  {
    "id": "st-195",
    "nomorUrut": 195,
    "tanggal": "2 September 2026",
    "kodeKlasifikasi": "VS.330",
    "nomorSurat": "B-195/7301/VS.330/2026",
    "petugas": "Terlampir",
    "perihal": "Petugas SHPB",
    "tujuanTugas": ""
  },
  {
    "id": "st-196",
    "nomorUrut": 196,
    "tanggal": "2 September 2026",
    "kodeKlasifikasi": "VS.330",
    "nomorSurat": "B-196/7301/VS.330/2026",
    "petugas": "Terlampir",
    "perihal": "Petugas VHTS",
    "tujuanTugas": ""
  },
  {
    "id": "st-197",
    "nomorUrut": 197,
    "tanggal": "2 September 2026",
    "kodeKlasifikasi": "VS.330",
    "nomorSurat": "B-197/7301/VS.330/2026",
    "petugas": "Terlampir",
    "perihal": "Petugas",
    "tujuanTugas": ""
  },
  {
    "id": "st-197.1",
    "nomorUrut": 197.1,
    "tanggal": "2 September 2026",
    "kodeKlasifikasi": "VS.330",
    "nomorSurat": "B-197.1/7301/VS.330/2026",
    "petugas": "Indawati Amiruddin",
    "perihal": "Pengajar SKSPPI Tahun 2026",
    "tujuanTugas": ""
  },
  {
    "id": "st-198",
    "nomorUrut": 198,
    "tanggal": "2 September 2026",
    "kodeKlasifikasi": "VS.330",
    "nomorSurat": "B-198/7301/VS.330/2026",
    "petugas": "Terlampir",
    "perihal": "Pelatihan Petugas SKSPPI Tahun 2026",
    "tujuanTugas": ""
  },
  {
    "id": "st-199",
    "nomorUrut": 199,
    "tanggal": "2 September 2026",
    "kodeKlasifikasi": "VS.330",
    "nomorSurat": "B-199/7301/VS.330/2026",
    "petugas": "Terlampir",
    "perihal": "Pendataan Lapangan SKSPPI Tahun 2026",
    "tujuanTugas": ""
  },
  {
    "id": "st-200",
    "nomorUrut": 200,
    "tanggal": "21 September 2026",
    "kodeKlasifikasi": "VS.330",
    "nomorSurat": "B-200/7301/VS.330/2026",
    "petugas": "Terlampir",
    "perihal": "Pendataan KSA Padi sept 2026",
    "tujuanTugas": ""
  },
  {
    "id": "st-201",
    "nomorUrut": 201,
    "tanggal": "21 September 2026",
    "kodeKlasifikasi": "VS.330",
    "nomorSurat": "B-201/7301/VS.330/2026",
    "petugas": "Terlampir",
    "perihal": "Pendataan KSA Jagung sept 2026",
    "tujuanTugas": ""
  },
  {
    "id": "st-202",
    "nomorUrut": 202,
    "tanggal": "24 September 2026",
    "kodeKlasifikasi": "VS.330",
    "nomorSurat": "B-202/7301/VS.330/2026",
    "petugas": "Terlampir",
    "perihal": "Permohonan Pergantian Sampel",
    "tujuanTugas": ""
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
    "id": "sk-65",
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
    "id": "sk-85.1",
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
    "id": "sk-86",
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
    "id": "sk-87",
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
    "id": "sk-88",
    "nomorUrut": 88,
    "nomorSK": "088 TAHUN 2026",
    "tanggal": "1 Juni 2026",
    "uraian": "SK Pelatihan Petugas SE2026",
    "subFungsi": "DISTRIBUSI",
    "pdfUrl": "https://drive.google.com/file/d/1F-EL-TSTkw8XLuR7LjLpaG5hmmj460FK/view?usp=sharing",
    "wordUrl": "https://docs.google.com/document/d/1Ar53Ze6zzNLEpLBsPw9rnNlLVUI1UT0M/edit?usp=sharing&ouid=108867984901028014832&rtpof=true&sd=true",
    "petugasHonor": "Upload"
  },
  {
    "id": "sk-89",
    "nomorUrut": 89,
    "nomorSK": "089 TAHUN 2026",
    "tanggal": "1 Juni 2026",
    "uraian": "SK Pengajar Pelatihan Petugas SE2026",
    "subFungsi": "DISTRIBUSI",
    "pdfUrl": "https://drive.google.com/file/d/1cbsmq1kx0IVDFVwjurPyLYAWLdym_sAu/view?usp=sharing",
    "wordUrl": "https://docs.google.com/document/d/1aX8xx0hd6mbI4L-JtoRbdNxkuTLCxzMB/edit?usp=sharing&ouid=108867984901028014832&rtpof=true&sd=true",
    "petugasHonor": "Upload"
  },
  {
    "id": "sk-90",
    "nomorUrut": 90,
    "nomorSK": "090 TAHUN 2026",
    "tanggal": "1 Juni 2026",
    "uraian": "SK Transport Daerah Sulit SE2026",
    "subFungsi": "DISTRIBUSI",
    "pdfUrl": "https://drive.google.com/file/d/1e-kG0VypeN2kh1FaA55El-3adpwQqbjE/view?usp=sharing",
    "wordUrl": "https://docs.google.com/document/d/1IE9oTyYSkJoOig-kEDaq4z_vnnbhP-rQ/edit?usp=sharing&ouid=108867984901028014832&rtpof=true&sd=true",
    "petugasHonor": "Upload"
  },
  {
    "id": "sk-91",
    "nomorUrut": 91,
    "nomorSK": "091 TAHUN 2026",
    "tanggal": "1 Juni 2026",
    "uraian": "SK Pendataan Seruti Triwulan II 2026",
    "subFungsi": "SOSIAL",
    "pdfUrl": "https://drive.google.com/file/d/1rJ98PusVEEZEXCrq4gesA4tG8vgXoY5H/view?usp=sharing",
    "wordUrl": "https://docs.google.com/document/d/1MR8RkhpkFBMQEe3MeU8yH4iBYYg8cjz4/edit?usp=sharing&ouid=108867984901028014832&rtpof=true&sd=true",
    "petugasHonor": "Upload"
  },
  {
    "id": "sk-94",
    "nomorUrut": 0,
    "nomorSK": "091.1 TAHUN 2026",
    "tanggal": "2 Juni 2026",
    "uraian": "SK SKGB 2026",
    "subFungsi": "PRODUKSI",
    "petugasHonor": "Upload"
  },
  {
    "id": "sk-92",
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
    "id": "sk-96",
    "nomorUrut": 0,
    "nomorSK": "092.1 TAHUN 2026",
    "tanggal": "12 Juni 2026",
    "uraian": "SK Petugas SE2026 UB",
    "subFungsi": "DISTRIBUSI",
    "petugasHonor": "Upload"
  },
  {
    "id": "sk-93",
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
    "id": "sk-94",
    "nomorUrut": 94,
    "nomorSK": "094 TAHUN 2026",
    "tanggal": "1 Juli 2026",
    "uraian": "SK Petugas SE2026 Perubahan Kedua",
    "subFungsi": "DISTRIBUSI",
    "pdfUrl": "https://drive.google.com/file/d/11Q6iHIiw93npocSnt731EslCGRcHqZI9/view?usp=sharing",
    "wordUrl": "https://docs.google.com/document/d/1668dyOwCU6aFzQhbaIZsdwFVKqhRoCAf/edit?usp=sharing&ouid=108867984901028014832&rtpof=true&sd=true",
    "petugasHonor": "Upload"
  },
  {
    "id": "sk-95",
    "nomorUrut": 95,
    "nomorSK": "095 TAHUN 2026",
    "tanggal": "1 Juli 2026",
    "uraian": "SK Petugas SPUNP 2026 Perubahan",
    "subFungsi": "DISTRIBUSI",
    "wordUrl": "https://docs.google.com/document/d/1skxruY5vuYNzIRQNZTT9MGDHFh1Y8XzV/edit?usp=sharing&ouid=108867984901028014832&rtpof=true&sd=true",
    "petugasHonor": "Upload"
  },
  {
    "id": "sk-100",
    "nomorUrut": 0,
    "nomorSK": "95.1 TAHUN 2026",
    "tanggal": "10 Juli 2026",
    "uraian": "SK Pelatihan Petugas Sakernas Agustus 2026",
    "subFungsi": "SOSIAL",
    "petugasHonor": "Upload"
  },
  {
    "id": "sk-96",
    "nomorUrut": 96,
    "nomorSK": "096 TAHUN 2026",
    "tanggal": "10 Juli 2026",
    "uraian": "SK Pendataan dan Pemutakhiran Sakernas Agustus 2026",
    "subFungsi": "SOSIAL",
    "wordUrl": "https://docs.google.com/document/d/1miu08BsejdaVGLfEp_lZGk49LPVOr372/edit?usp=sharing&ouid=108867984901028014832&rtpof=true&sd=true",
    "petugasHonor": "Upload"
  },
  {
    "id": "sk-97",
    "nomorUrut": 97,
    "nomorSK": "097 TAHUN 2026",
    "tanggal": "10 Juli 2026",
    "uraian": "SK Pengajar Sakernas Agustus 2026",
    "subFungsi": "SOSIAL",
    "wordUrl": "https://docs.google.com/document/d/1NHY-LirZbAE_c5_OXUAd6lcPmQHCR-BA/edit?usp=sharing&ouid=108867984901028014832&rtpof=true&sd=true",
    "petugasHonor": "Upload"
  },
  {
    "id": "sk-98",
    "nomorUrut": 98,
    "nomorSK": "098 TAHUN 2026",
    "tanggal": "10 Juli 2026",
    "uraian": "SK Petugas Pengumpulan Data Survei Harga Kemahalan Konstruksi 2026",
    "subFungsi": "DISTRIBUSI",
    "wordUrl": "https://docs.google.com/document/d/1M21sOU2fML63uiFYTRGRZ0YiUHV2xuBy/edit?usp=sharing&ouid=108867984901028014832&rtpof=true&sd=truev",
    "petugasHonor": "Upload"
  },
  {
    "id": "sk-99",
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
    "id": "sk-100",
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
    "id": "sk-101",
    "nomorUrut": 101,
    "nomorSK": "101 TAHUN 2026",
    "tanggal": "05 Agustus 2026",
    "uraian": "SK Hukuman Disiplin Pegawai",
    "subFungsi": "UMUM",
    "petugasHonor": "Upload"
  },
  {
    "id": "sk-107",
    "nomorUrut": 0,
    "nomorSK": "101.1 TAHUN 2026",
    "tanggal": "14 Agustus 2026",
    "uraian": "SK Petugas Susenas September dan Seruti Triwulan III Tahun 2026",
    "subFungsi": "SOSIAL",
    "petugasHonor": "Upload"
  },
  {
    "id": "sk-108",
    "nomorUrut": 0,
    "nomorSK": "101.2 TAHUN 2026",
    "tanggal": "14 Agustus 2026",
    "uraian": "SK Pelatihan Petugas Susenas September dan Seruti Triwulan III Tahun 2026",
    "subFungsi": "SOSIAL",
    "petugasHonor": "Upload"
  },
  {
    "id": "sk-109",
    "nomorUrut": 0,
    "nomorSK": "101.3 TAHUN 2026",
    "tanggal": "14 Agustus 2026",
    "uraian": "SK Pengajar Susenas September dan Seruti Triwulan III Tahun 2026",
    "subFungsi": "SOSIAL",
    "petugasHonor": "Upload"
  },
  {
    "id": "sk-110",
    "nomorUrut": 0,
    "nomorSK": "101.4 TAHUN 2026",
    "tanggal": "14 Agustus 2026",
    "uraian": "SK Pemutakhiran dan Pendataan Susenas September dan Seruti Triwulan III Tahun 2026",
    "subFungsi": "SOSIAL",
    "petugasHonor": "Upload"
  },
  {
    "id": "sk-102",
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
    "id": "sk-103",
    "nomorUrut": 103,
    "nomorSK": "103 TAHUN 2026",
    "tanggal": "20 Agustus 2026",
    "uraian": "SK Petugas SKNP Tahun 2026",
    "subFungsi": "NERWILIS",
    "wordUrl": "https://docs.google.com/document/d/182mUscJlLwrC3kI40vucXSZULFai1Pc2/edit?usp=sharing&ouid=108867984901028014832&rtpof=true&sd=true",
    "petugasHonor": "Upload"
  },
  {
    "id": "sk-104",
    "nomorUrut": 104,
    "nomorSK": "104 TAHUN 2026",
    "tanggal": "20 Agustus 2026",
    "uraian": "SK Pengajar SKNP Tahun 2026",
    "subFungsi": "NERWILIS",
    "wordUrl": "https://docs.google.com/document/d/1l2cFiFgLczW3H9b4Yk9s0DSX7UaCkvb7/edit?usp=sharing&ouid=108867984901028014832&rtpof=true&sd=true",
    "petugasHonor": "Upload"
  },
  {
    "id": "sk-105",
    "nomorUrut": 105,
    "nomorSK": "105 TAHUN 2026",
    "tanggal": "20 Agustus 2026",
    "uraian": "SK Pendataan SKNP Tahun 2026",
    "subFungsi": "NERWILIS",
    "wordUrl": "https://docs.google.com/document/d/1AZAiGpyCA0aFXmJzMudFnYWvMK9M2Hvc/edit?usp=sharing&ouid=108867984901028014832&rtpof=true&sd=true",
    "petugasHonor": "Upload"
  },
  {
    "id": "sk-106",
    "nomorUrut": 106,
    "nomorSK": "106 TAHUN 2026",
    "tanggal": "20 Agustus 2026",
    "uraian": "SK Pelatihan Petugas SKP Tahun 2026",
    "subFungsi": "PRODUKSI",
    "wordUrl": "https://docs.google.com/document/d/1FWCPMrrltiVq6318sk9YjNw4W3rH1qhA/edit?usp=sharing&ouid=108867984901028014832&rtpof=true&sd=true",
    "petugasHonor": "Upload"
  },
  {
    "id": "sk-107",
    "nomorUrut": 107,
    "nomorSK": "107 TAHUN 2026",
    "tanggal": "20 Agustus 2026",
    "uraian": "SK Pengajar SKP Tahun 2026",
    "subFungsi": "PRODUKSI",
    "wordUrl": "https://docs.google.com/document/d/1M1sPj3DK8hMvC1f6-eurcTdEz74_1Fcj/edit?usp=sharing&ouid=108867984901028014832&rtpof=true&sd=true",
    "petugasHonor": "Upload"
  },
  {
    "id": "sk-108",
    "nomorUrut": 108,
    "nomorSK": "108 TAHUN 2026",
    "tanggal": "20 Agustus 2026",
    "uraian": "SK Petugas SKP Tahun 2026",
    "subFungsi": "PRODUKSI",
    "wordUrl": "https://docs.google.com/document/d/1ccd3MzBzQz0nI8jrQQRWcCNjB54QQh_r/edit?usp=sharing&ouid=108867984901028014832&rtpof=true&sd=true",
    "petugasHonor": "Upload"
  },
  {
    "id": "sk-109",
    "nomorUrut": 109,
    "nomorSK": "109 TAHUN 2026",
    "tanggal": "2 September 2026",
    "uraian": "SK Pelatihan Petugas SKSPPI Tahun 2026",
    "subFungsi": "DISTRIBUSI",
    "wordUrl": "https://docs.google.com/document/d/14YtA-Ti3FY3PRIbNevoAxBd4_Gth8vm2/edit?usp=sharing&ouid=108867984901028014832&rtpof=true&sd=true",
    "petugasHonor": "Upload"
  },
  {
    "id": "sk-110",
    "nomorUrut": 110,
    "nomorSK": "110 TAHUN 2026",
    "tanggal": "2 September 2026",
    "uraian": "SK Pengajar Pelatihan Petugas SKSPPI Tahun 2026",
    "subFungsi": "DISTRIBUSI",
    "wordUrl": "https://docs.google.com/document/d/1u7B4mt5UldPrjrjdpydUBcZnCuOwggMB/edit?usp=sharing&ouid=108867984901028014832&rtpof=true&sd=true",
    "petugasHonor": "Upload"
  },
  {
    "id": "sk-111",
    "nomorUrut": 111,
    "nomorSK": "111 TAHUN 2026",
    "tanggal": "2 September 2026",
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
    "pihakPertama": "-",
    "pihakKedua": "-"
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
    "id": "bast-3.1",
    "nomorUrut": 3.1,
    "tanggal": "19 Januari 2026",
    "kodeKlasifikasi": "VS.330",
    "nomorBAST": "3.1/7301/VS.330/2026",
    "perihal": "BAST VHTS Januari 2026",
    "pihakPertama": "Ketua Tim",
    "pihakKedua": "Mitra"
  },
  {
    "id": "bast-3.2",
    "nomorUrut": 3.2,
    "tanggal": "19 Januari 2026",
    "kodeKlasifikasi": "VS.330",
    "nomorBAST": "3.2/7301/VS.330/2026",
    "perihal": "BAST SHPB Januari 2026",
    "pihakPertama": "Ketua Tim",
    "pihakKedua": "Mitra"
  },
  {
    "id": "bast-3.3",
    "nomorUrut": 3.3,
    "tanggal": "19 Januari 2026",
    "kodeKlasifikasi": "VS.330",
    "nomorBAST": "3.3/7301/VS.330/2026",
    "perihal": "BAST Identifikasi Komoditas Utama SHP 2026",
    "pihakPertama": "Ketua Tim",
    "pihakKedua": "Mitra"
  },
  {
    "id": "bast-3.4",
    "nomorUrut": 3.4,
    "tanggal": "19 Januari 2026",
    "kodeKlasifikasi": "VS.330",
    "nomorBAST": "3.4/7301/VS.330/2026",
    "perihal": "BAST SHP Januari 2026",
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
    "id": "bast-6.1",
    "nomorUrut": 6.1,
    "tanggal": "2 Februari 2026",
    "kodeKlasifikasi": "VS.430",
    "nomorBAST": "6.1/7301/VS.430/2026",
    "perihal": "BAST Pengolahan Pemuktahiran Susenas Maret 2025",
    "pihakPertama": "Ketua Tim",
    "pihakKedua": "Mitra"
  },
  {
    "id": "bast-6.2",
    "nomorUrut": 6.2,
    "tanggal": "2 Februari 2026",
    "kodeKlasifikasi": "VS.330",
    "nomorBAST": "6.2/7301/VS.330/2026",
    "perihal": "BAST Pemutakhiran Susenas Maret dan Seruti Triwulan I 2026",
    "pihakPertama": "PML",
    "pihakKedua": "Mitra"
  },
  {
    "id": "bast-6.3",
    "nomorUrut": 6.3,
    "tanggal": "2 Februari 2026",
    "kodeKlasifikasi": "VS.340",
    "nomorBAST": "6.3/7301/VS.340/2026",
    "perihal": "BAST Pemutakhiran Susenas Maret dan Seruti Triwulan I 2026",
    "pihakPertama": "Ketua Tim",
    "pihakKedua": "PML"
  },
  {
    "id": "bast-6.4",
    "nomorUrut": 6.4,
    "tanggal": "9 Februari 2026",
    "kodeKlasifikasi": "VS.330",
    "nomorBAST": "6.4/7301/VS.330/2026",
    "perihal": "BAST Pemutakhiran Sakernas Februari Tahun 2026",
    "pihakPertama": "PML",
    "pihakKedua": "Mitra"
  },
  {
    "id": "bast-6.5",
    "nomorUrut": 6.5,
    "tanggal": "9 Februari 2026",
    "kodeKlasifikasi": "VS.340",
    "nomorBAST": "6.5/7301/VS.340/2026",
    "perihal": "BAST Pemutakhiran Sakernas Februari Tahun 2026",
    "pihakPertama": "Ketua Tim",
    "pihakKedua": "PML"
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
    "id": "bast-15.1",
    "nomorUrut": 15.1,
    "tanggal": "20 Februari 2026",
    "kodeKlasifikasi": "VS.330",
    "nomorBAST": "15.1/7301/VS.330/2026",
    "perihal": "BAST RPH januari  2026",
    "pihakPertama": "Ketua Tim",
    "pihakKedua": "Mitra"
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
  },
  {
    "id": "bast-19.1",
    "nomorUrut": 19.1,
    "tanggal": "9 Maret 2026",
    "kodeKlasifikasi": "VS.430",
    "nomorBAST": "19.1/7301/VS.430/2026",
    "perihal": "BAST Pengolahan Pendataan Susenas Maret 2026",
    "pihakPertama": "Ketua Tim",
    "pihakKedua": "Mitra"
  },
  {
    "id": "bast-19.2",
    "nomorUrut": 19.2,
    "tanggal": "9 Maret 2026",
    "kodeKlasifikasi": "VS.430",
    "nomorBAST": "19.2/7301/VS.430/2026",
    "perihal": "BAST Pengolahan Pendataan Seruti Triwulan I Tahun 2026",
    "pihakPertama": "Ketua Tim",
    "pihakKedua": "Mitra"
  },
  {
    "id": "bast-21",
    "nomorUrut": 21,
    "tanggal": "11 Maret 2026",
    "kodeKlasifikasi": "VS.330",
    "nomorBAST": "21/7301/VS.330/2026",
    "perihal": "BAST LISTING VIP HORTI 2026",
    "pihakPertama": "Ketua Tim",
    "pihakKedua": "Mitra"
  },
  {
    "id": "bast-22",
    "nomorUrut": 22,
    "tanggal": "11 Maret 2026",
    "kodeKlasifikasi": "VS.330",
    "nomorBAST": "22/7301/VS.330/2026",
    "perihal": "BAST LISTING VKOMSTRAT 2026",
    "pihakPertama": "Ketua Tim",
    "pihakKedua": "Mitra"
  },
  {
    "id": "bast-23",
    "nomorUrut": 23,
    "tanggal": "11 Maret 2026",
    "kodeKlasifikasi": "VS.330",
    "nomorBAST": "23/7301/VS.330/2026",
    "perihal": "BAST VHTS Februari 2026",
    "pihakPertama": "Ketua Tim",
    "pihakKedua": "Mitra"
  },
  {
    "id": "bast-24",
    "nomorUrut": 24,
    "tanggal": "11 Maret 2026",
    "kodeKlasifikasi": "VS.330",
    "nomorBAST": "24/7301/VS.330/2026",
    "perihal": "BAST SHPB Maret 2026",
    "pihakPertama": "Ketua Tim",
    "pihakKedua": "Mitra"
  },
  {
    "id": "bast-24.1",
    "nomorUrut": 24.1,
    "tanggal": "11 Maret 2026",
    "kodeKlasifikasi": "VS.330",
    "nomorBAST": "24.1/7301/VS.330/2026",
    "perihal": "BAST SHP Maret 2026",
    "pihakPertama": "Ketua Tim",
    "pihakKedua": "Mitra"
  },
  {
    "id": "bast-24,2",
    "nomorUrut": "24,2",
    "tanggal": "20 Maret 2026",
    "kodeKlasifikasi": "VS.330",
    "nomorBAST": "24,2/7301/VS.330/2026",
    "perihal": "BAST RPH februari 2026",
    "pihakPertama": "Ketua Tim",
    "pihakKedua": "Mitra"
  },
  {
    "id": "bast-25",
    "nomorUrut": 25,
    "tanggal": "27 Maret 2026",
    "kodeKlasifikasi": "VS.310",
    "nomorBAST": "25/7301/VS.310/2026",
    "perihal": "BAST Listing IMK Triwulanan",
    "pihakPertama": "Ketua Tim",
    "pihakKedua": "Mitra"
  },
  {
    "id": "bast-26",
    "nomorUrut": 26,
    "tanggal": "1 April 2026",
    "kodeKlasifikasi": "VS.330",
    "nomorBAST": "26/7301/VS.330/2026",
    "perihal": "BAST KSA PADI mARET 2026",
    "pihakPertama": "Ketua Tim",
    "pihakKedua": "Mitra"
  },
  {
    "id": "bast-27",
    "nomorUrut": 27,
    "tanggal": "1 April 2026",
    "kodeKlasifikasi": "VS.330",
    "nomorBAST": "27/7301/VS.330/2026",
    "perihal": "BAST KSA JAGUNG Maret 2026",
    "pihakPertama": "Ketua Tim",
    "pihakKedua": "Mitra"
  },
  {
    "id": "bast-27.1",
    "nomorUrut": 27.1,
    "tanggal": "1 April 2026",
    "kodeKlasifikasi": "VS.330",
    "nomorBAST": "27.1/7301/VS.330/2026",
    "perihal": "BAST UDPE Tahun 2026",
    "pihakPertama": "Ketua Tim",
    "pihakKedua": "Mitra"
  },
  {
    "id": "bast-29",
    "nomorUrut": 29,
    "tanggal": "10 April 2026",
    "kodeKlasifikasi": "VS.330",
    "nomorBAST": "29/7301/VS.330/2026",
    "perihal": "BAST VIP Horti Triwulan I 2026",
    "pihakPertama": "Ketua Tim",
    "pihakKedua": "Mitra"
  },
  {
    "id": "bast-30",
    "nomorUrut": 30,
    "tanggal": "10 April 2026",
    "kodeKlasifikasi": "VS.330",
    "nomorBAST": "30/7301/VS.330/2026",
    "perihal": "BAST VKOMSTRAT Triwulan I 2026",
    "pihakPertama": "Ketua Tim",
    "pihakKedua": "Mitra"
  },
  {
    "id": "bast-31",
    "nomorUrut": 31,
    "tanggal": "15 April 2025",
    "kodeKlasifikasi": "VS.330",
    "nomorBAST": "31/7301/VS.330/2026",
    "perihal": "BAST SKLNP Triwulan 1 Tahun 2026",
    "pihakPertama": "Ketua Tim",
    "pihakKedua": "Mitra"
  },
  {
    "id": "bast-32",
    "nomorUrut": 32,
    "tanggal": "15 April 2025",
    "kodeKlasifikasi": "VS.310",
    "nomorBAST": "32/7301/VS.310/2026",
    "perihal": "BAST VHTS Maret 2026",
    "pihakPertama": "Ketua Tim",
    "pihakKedua": "Mitra"
  },
  {
    "id": "bast-33",
    "nomorUrut": 33,
    "tanggal": "15 April 2025",
    "kodeKlasifikasi": "VS.330",
    "nomorBAST": "33/7301/VS.330/2026",
    "perihal": "BAST Listing VREST Tahun 2026",
    "pihakPertama": "Ketua Tim",
    "pihakKedua": "Mitra"
  },
  {
    "id": "bast-34",
    "nomorUrut": 34,
    "tanggal": "15 April 2025",
    "kodeKlasifikasi": "VS.330",
    "nomorBAST": "34/7301/VS.330/2026",
    "perihal": "BAST SPUNP Triwulan 1 2026",
    "pihakPertama": "Ketua Tim",
    "pihakKedua": "Mitra"
  },
  {
    "id": "bast-35",
    "nomorUrut": 35,
    "tanggal": "20 April 2025",
    "kodeKlasifikasi": "VS.330",
    "nomorBAST": "35/7301/VS.330/2026",
    "perihal": "BAST SKTNP Sektor Jasa Tahap 1 Tahun 2026",
    "pihakPertama": "-",
    "pihakKedua": "-"
  },
  {
    "id": "bast-36",
    "nomorUrut": 36,
    "tanggal": "20 April 2026",
    "kodeKlasifikasi": "VS.330",
    "nomorBAST": "36/7301/VS.330/2026",
    "perihal": "BAST IMK Triwulan I 2026",
    "pihakPertama": "Ketua Tim",
    "pihakKedua": "Mitra"
  },
  {
    "id": "bast-37",
    "nomorUrut": 37,
    "tanggal": "20 April 2026",
    "kodeKlasifikasi": "VS.330",
    "nomorBAST": "37/7301/VS.330/2026",
    "perihal": "BAST SHP April 2026",
    "pihakPertama": "Ketua Tim",
    "pihakKedua": "Mitra"
  },
  {
    "id": "bast-38",
    "nomorUrut": 38,
    "tanggal": "20 April 2026",
    "kodeKlasifikasi": "VS.330",
    "nomorBAST": "38/7301/VS.330/2026",
    "perihal": "BAST SHPB April 2026",
    "pihakPertama": "Ketua Tim",
    "pihakKedua": "Mitra"
  },
  {
    "id": "bast-38.1",
    "nomorUrut": 38.1,
    "tanggal": "20 April 2026",
    "kodeKlasifikasi": "VS.330",
    "nomorBAST": "38.1/7301/VS.330/2026",
    "perihal": "BAST SKTR Triwulan I 2026",
    "pihakPertama": "Ketua Tim",
    "pihakKedua": "Mitra"
  },
  {
    "id": "bast-38.2",
    "nomorUrut": 38.2,
    "tanggal": "20 April 2026",
    "kodeKlasifikasi": "VS.330",
    "nomorBAST": "38.2/7301/VS.330/2026",
    "perihal": "BAST SHKK Triwulan 2",
    "pihakPertama": "-",
    "pihakKedua": "-"
  },
  {
    "id": "bast-38.3",
    "nomorUrut": 38.3,
    "tanggal": "20 April 2026",
    "kodeKlasifikasi": "VS.330",
    "nomorBAST": "38.3/7301/VS.330/2026",
    "perihal": "BAST RPH Maret 2026",
    "pihakPertama": "Ketua Tim",
    "pihakKedua": "Mitra"
  },
  {
    "id": "bast-39",
    "nomorUrut": 39,
    "tanggal": "27 April 2026",
    "kodeKlasifikasi": "VS.330",
    "nomorBAST": "39/7301/VS.330/2026",
    "perihal": "BAST KSA PADI april 2026",
    "pihakPertama": "Ketua Tim",
    "pihakKedua": "Mitra"
  },
  {
    "id": "bast-40",
    "nomorUrut": 40,
    "tanggal": "27 April 2026",
    "kodeKlasifikasi": "VS.330",
    "nomorBAST": "40/7301/VS.330/2026",
    "perihal": "BAST KSA JAGUNG april2026",
    "pihakPertama": "Ketua Tim",
    "pihakKedua": "Mitra"
  },
  {
    "id": "bast-41",
    "nomorUrut": 41,
    "tanggal": "30 April 2026",
    "kodeKlasifikasi": "VS.330",
    "nomorBAST": "41/7301/VS.330/2026",
    "perihal": "BAST UBINAN PADI SR 1 2026",
    "pihakPertama": "Ketua Tim",
    "pihakKedua": "Mitra"
  },
  {
    "id": "bast-42",
    "nomorUrut": 42,
    "tanggal": "30 April 2026",
    "kodeKlasifikasi": "VS.330",
    "nomorBAST": "42/7301/VS.330/2026",
    "perihal": "BAST UBINAN PALAWIJA SR1 2026",
    "pihakPertama": "Ketua Tim",
    "pihakKedua": "Mitra"
  },
  {
    "id": "bast-43",
    "nomorUrut": 43,
    "tanggal": "30 April 2026",
    "kodeKlasifikasi": "VS.330",
    "nomorBAST": "43/7301/VS.330/2026",
    "perihal": "BAST PEMUTAKHIRAN UBINAN PALAWIJA SR2 2026",
    "pihakPertama": "Ketua Tim",
    "pihakKedua": "Mitra"
  },
  {
    "id": "bast-44",
    "nomorUrut": 44,
    "tanggal": "15 Mei 2026",
    "kodeKlasifikasi": "VS.330",
    "nomorBAST": "44/7301/VS.330/2026",
    "perihal": "BAST Pemutakhiran Data Perkembangan Desa 2026",
    "pihakPertama": "PML",
    "pihakKedua": "Mitra"
  },
  {
    "id": "bast-45",
    "nomorUrut": 45,
    "tanggal": "15 Mei 2026",
    "kodeKlasifikasi": "VS.340",
    "nomorBAST": "45/7301/VS.340/2026",
    "perihal": "BAST Pemutakhiran Data Perkembangan Desa 2026",
    "pihakPertama": "Ketua Tim",
    "pihakKedua": "PML"
  },
  {
    "id": "bast-47",
    "nomorUrut": 47,
    "tanggal": "19 Mei 2026",
    "kodeKlasifikasi": "VS.330",
    "nomorBAST": "47/7301/VS.330/2026",
    "perihal": "BAST VHTS April",
    "pihakPertama": "Ketua Tim",
    "pihakKedua": "Mitra"
  },
  {
    "id": "bast-48",
    "nomorUrut": 48,
    "tanggal": "19 Mei 2026",
    "kodeKlasifikasi": "VS.330",
    "nomorBAST": "48/7301/VS.330/2026",
    "perihal": "BAST VHTL",
    "pihakPertama": "Ketua Tim",
    "pihakKedua": "Mitra"
  },
  {
    "id": "bast-49",
    "nomorUrut": 49,
    "tanggal": "19 Mei 2026",
    "kodeKlasifikasi": "VS.330",
    "nomorBAST": "49/7301/VS.330/2026",
    "perihal": "BAST VDTW",
    "pihakPertama": "Ketua Tim",
    "pihakKedua": "Mitra"
  },
  {
    "id": "bast-50",
    "nomorUrut": 50,
    "tanggal": "19 Mei 2026",
    "kodeKlasifikasi": "VS.330",
    "nomorBAST": "50/7301/VS.330/2026",
    "perihal": "BAST SHP Mei",
    "pihakPertama": "Ketua Tim",
    "pihakKedua": "Mitra"
  },
  {
    "id": "bast-51",
    "nomorUrut": 51,
    "tanggal": "19 Mei 2026",
    "kodeKlasifikasi": "VS.330",
    "nomorBAST": "51/7301/VS.330/2026",
    "perihal": "BAST SHPB Mei",
    "pihakPertama": "Ketua Tim",
    "pihakKedua": "Mitra"
  },
  {
    "id": "bast-51.1",
    "nomorUrut": 51.1,
    "tanggal": "19 Mei 2026",
    "kodeKlasifikasi": "VS.330",
    "nomorBAST": "51.1/7301/VS.330/2026",
    "perihal": "BAST rph april",
    "pihakPertama": "Ketua Tim",
    "pihakKedua": "Mitra"
  },
  {
    "id": "bast-52",
    "nomorUrut": 52,
    "tanggal": "19 Mei 2026",
    "kodeKlasifikasi": "VS.330",
    "nomorBAST": "52/7301/VS.330/2026",
    "perihal": "BAST VREST",
    "pihakPertama": "Ketua Tim",
    "pihakKedua": "Mitra"
  },
  {
    "id": "bast-52.1",
    "nomorUrut": 52.1,
    "tanggal": "22 Mei 2026",
    "kodeKlasifikasi": "VS.330",
    "nomorBAST": "52.1/7301/VS.330/2026",
    "perihal": "BAST Pemutakhiran Sakernas Mei Tahun 2026",
    "pihakPertama": "PML",
    "pihakKedua": "Mitra"
  },
  {
    "id": "bast-52.2",
    "nomorUrut": 52.2,
    "tanggal": "22 Mei 2026",
    "kodeKlasifikasi": "VS.340",
    "nomorBAST": "52.2/7301/VS.340/2026",
    "perihal": "BAST Pemutakhiran Sakernas Mei Tahun 2026",
    "pihakPertama": "Ketua Tim",
    "pihakKedua": "PML"
  },
  {
    "id": "bast-53",
    "nomorUrut": 53,
    "tanggal": "29 Mei 2026",
    "kodeKlasifikasi": "VS.330",
    "nomorBAST": "53/7301/VS.330/2026",
    "perihal": "BAST KSA PADI april 2026",
    "pihakPertama": "Ketua Tim",
    "pihakKedua": "Mitra"
  },
  {
    "id": "bast-54",
    "nomorUrut": 54,
    "tanggal": "29 Mei 2026",
    "kodeKlasifikasi": "VS.330",
    "nomorBAST": "54/7301/VS.330/2026",
    "perihal": "BAST KSA JAGUNG april2026",
    "pihakPertama": "Ketua Tim",
    "pihakKedua": "Mitra"
  },
  {
    "id": "bast-55",
    "nomorUrut": 55,
    "tanggal": "2 Juni 2026",
    "kodeKlasifikasi": "VS.330",
    "nomorBAST": "55/7301/VS.330/2026",
    "perihal": "BAST Sakernas Mei 2026",
    "pihakPertama": "PML",
    "pihakKedua": "Mitra"
  },
  {
    "id": "bast-56",
    "nomorUrut": 56,
    "tanggal": "2 Juni 2026",
    "kodeKlasifikasi": "VS.340",
    "nomorBAST": "56/7301/VS.340/2026",
    "perihal": "BAST Sakernas Mei 2026",
    "pihakPertama": "Ketua Tim",
    "pihakKedua": "PML"
  },
  {
    "id": "bast-57",
    "nomorUrut": 57,
    "tanggal": "10 Juni 2025",
    "kodeKlasifikasi": "VS.330",
    "nomorBAST": "57/7301/VS.330/2026",
    "perihal": "BAST VHTS Juni 2026",
    "pihakPertama": "Ketua Tim",
    "pihakKedua": "Mitra"
  },
  {
    "id": "bast-58",
    "nomorUrut": 58,
    "tanggal": "10 Juni 2025",
    "kodeKlasifikasi": "VS.330",
    "nomorBAST": "58/7301/VS.330/2026",
    "perihal": "BAST SHP Juni 2026",
    "pihakPertama": "Ketua Tim",
    "pihakKedua": "Mitra"
  },
  {
    "id": "bast-59",
    "nomorUrut": 59,
    "tanggal": "10 Juni 2025",
    "kodeKlasifikasi": "VS.330",
    "nomorBAST": "59/7301/VS.330/2026",
    "perihal": "BAST SHPB Juni 2025",
    "pihakPertama": "Ketua Tim",
    "pihakKedua": "Mitra"
  },
  {
    "id": "bast-60",
    "nomorUrut": 60,
    "tanggal": "10 Juni 2026",
    "kodeKlasifikasi": "VS.330",
    "nomorBAST": "60/7301/VS.330/2026",
    "perihal": "BAST Seruti Triwulan II 2026",
    "pihakPertama": "PML",
    "pihakKedua": "Mitra"
  },
  {
    "id": "bast-61",
    "nomorUrut": 61,
    "tanggal": "10 Juni 2026",
    "kodeKlasifikasi": "VS.340",
    "nomorBAST": "61/7301/VS.340/2026",
    "perihal": "BAST Seruti Triwulan II 2026",
    "pihakPertama": "Ketua Tim",
    "pihakKedua": "PML"
  },
  {
    "id": "bast-62",
    "nomorUrut": 62,
    "tanggal": "11 Juni 2026",
    "kodeKlasifikasi": "PL.810",
    "nomorBAST": "62/7301/PL.810/2026",
    "perihal": "BAST BMN Kepada Pemenang Lelang",
    "pihakPertama": "KPA",
    "pihakKedua": "Pemenang Lelang"
  },
  {
    "id": "bast-63",
    "nomorUrut": 63,
    "tanggal": "26 Juni 2026",
    "kodeKlasifikasi": "VS.330",
    "nomorBAST": "63/7301/VS.330/2026",
    "perihal": "BAST Pengolahan Pendataan Seruti Triwulan II Tahun 2026",
    "pihakPertama": "Ketua Tim",
    "pihakKedua": "Mitra"
  },
  {
    "id": "bast-64",
    "nomorUrut": 64,
    "tanggal": "30 Juni 2026",
    "kodeKlasifikasi": "VS.330",
    "nomorBAST": "64/7301/VS.330/2026",
    "perihal": "BAST KSA PADI april 2026",
    "pihakPertama": "Ketua Tim",
    "pihakKedua": "Mitra"
  },
  {
    "id": "bast-65",
    "nomorUrut": 65,
    "tanggal": "30 Juni 2026",
    "kodeKlasifikasi": "VS.330",
    "nomorBAST": "65/7301/VS.330/2026",
    "perihal": "BAST KSA JAGUNG april2026",
    "pihakPertama": "Ketua Tim",
    "pihakKedua": "Mitra"
  },
  {
    "id": "bast-66",
    "nomorUrut": 66,
    "tanggal": "3 Juli 2026",
    "kodeKlasifikasi": "PL.530",
    "nomorBAST": "66/7301/PL.530/2026",
    "perihal": "Berita Acara Pemantauan Periodik BMN Semester 1 Tahun 2026",
    "pihakPertama": "-",
    "pihakKedua": "-"
  },
  {
    "id": "bast-67",
    "nomorUrut": 67,
    "tanggal": "15 Juli 2026",
    "kodeKlasifikasi": "VS.330",
    "nomorBAST": "67/7301/VS.330/2026",
    "perihal": "BAST VKOMSTRAT TW II 2026",
    "pihakPertama": "Ketua Tim",
    "pihakKedua": "Mitra"
  },
  {
    "id": "bast-67.1",
    "nomorUrut": 67.1,
    "tanggal": "20 Juli 2026",
    "kodeKlasifikasi": "VS.330",
    "nomorBAST": "67.1/7301/VS.330/2026",
    "perihal": "BAST IMK Triwulan II 2026",
    "pihakPertama": "Ketua Tim",
    "pihakKedua": "Mitra"
  },
  {
    "id": "bast-67.2",
    "nomorUrut": 67.2,
    "tanggal": "20 Juli 2026",
    "kodeKlasifikasi": "VS.330",
    "nomorBAST": "67.2/7301/VS.330/2026",
    "perihal": "BAST VHTS Juli 2026",
    "pihakPertama": "Ketua Tim",
    "pihakKedua": "Mitra"
  },
  {
    "id": "bast-67.3",
    "nomorUrut": 67.3,
    "tanggal": "20 Juli 2026",
    "kodeKlasifikasi": "VS.330",
    "nomorBAST": "67.3/7301/VS.330/2026",
    "perihal": "BAST SHP",
    "pihakPertama": "Ketua Tim",
    "pihakKedua": "Mitra"
  },
  {
    "id": "bast-67.4",
    "nomorUrut": 67.4,
    "tanggal": "20 Juli 2026",
    "kodeKlasifikasi": "VS.330",
    "nomorBAST": "67.4/7301/VS.330/2026",
    "perihal": "BAST SHPB",
    "pihakPertama": "Ketua Tim",
    "pihakKedua": "Mitra"
  },
  {
    "id": "bast-67.5",
    "nomorUrut": 67.5,
    "tanggal": "20 Juli 2026",
    "kodeKlasifikasi": "VS.330",
    "nomorBAST": "67.5/7301/VS.330/2026",
    "perihal": "BAST SPUNP TW 2",
    "pihakPertama": "Ketua Tim",
    "pihakKedua": "Mitra"
  },
  {
    "id": "bast-68",
    "nomorUrut": 68,
    "tanggal": "31 Juli 2026",
    "kodeKlasifikasi": "VS.330",
    "nomorBAST": "68/7301/VS.330/2026",
    "perihal": "BAST KSA PADI JULI 2026",
    "pihakPertama": "Ketua Tim",
    "pihakKedua": "Mitra"
  },
  {
    "id": "bast-69",
    "nomorUrut": 69,
    "tanggal": "31 Juli 2026",
    "kodeKlasifikasi": "VS.330",
    "nomorBAST": "69/7301/VS.330/2026",
    "perihal": "BAST KSA JAGUNG JULI 2026",
    "pihakPertama": "Ketua Tim",
    "pihakKedua": "Mitra"
  },
  {
    "id": "bast-69.1",
    "nomorUrut": 69.1,
    "tanggal": "20 Agustus 2026",
    "kodeKlasifikasi": "VS.330",
    "nomorBAST": "69.1/7301/VS.330/2026",
    "perihal": "BAST VHTS Agustus 2026",
    "pihakPertama": "-",
    "pihakKedua": "-"
  },
  {
    "id": "bast-70",
    "nomorUrut": 70,
    "tanggal": "31 Agustus 2026",
    "kodeKlasifikasi": "VS.330",
    "nomorBAST": "70/7301/VS.330/2026",
    "perihal": "BAST KSA PADI AGUSTUS 2026",
    "pihakPertama": "Ketua Tim",
    "pihakKedua": "Mitra"
  },
  {
    "id": "bast-71",
    "nomorUrut": 71,
    "tanggal": "31 Agustus 2026",
    "kodeKlasifikasi": "VS.330",
    "nomorBAST": "71/7301/VS.330/2026",
    "perihal": "BAST KSA JAGUNG AGUSTUS 2026",
    "pihakPertama": "Ketua Tim",
    "pihakKedua": "Mitra"
  },
  {
    "id": "bast-72",
    "nomorUrut": 72,
    "tanggal": "31 Agustus 2026",
    "kodeKlasifikasi": "VS.330",
    "nomorBAST": "72/7301/VS.330/2026",
    "perihal": "Ubinan Padi Subround 2 2026",
    "pihakPertama": "Ketua Tim",
    "pihakKedua": "Mitra"
  },
  {
    "id": "bast-73",
    "nomorUrut": 73,
    "tanggal": "31 Agustus 2026",
    "kodeKlasifikasi": "VS.330",
    "nomorBAST": "73/7301/VS.330/2026",
    "perihal": "Ubinan PPalawija Subround 2 2026",
    "pihakPertama": "Ketua Tim",
    "pihakKedua": "Mitra"
  },
  {
    "id": "bast-75",
    "nomorUrut": 75,
    "tanggal": "8 September 2026",
    "kodeKlasifikasi": "VS.330",
    "nomorBAST": "75/7301/VS.330/2026",
    "perihal": "BAST Ubinan padi subround 2 2026",
    "pihakPertama": "Ketua Tim",
    "pihakKedua": "Mitra"
  },
  {
    "id": "bast-76",
    "nomorUrut": 76,
    "tanggal": "8 September 2026",
    "kodeKlasifikasi": "VS.330",
    "nomorBAST": "76/7301/VS.330/2026",
    "perihal": "BAST Ubinan palawija subround 2 2026",
    "pihakPertama": "Ketua Tim",
    "pihakKedua": "Mitra"
  },
  {
    "id": "bast-77",
    "nomorUrut": 77,
    "tanggal": "8 September 2026",
    "kodeKlasifikasi": "VS.330",
    "nomorBAST": "77/7301/VS.330/2026",
    "perihal": "BAST pemutakhiran ubinan palawija subround 3",
    "pihakPertama": "Ketua Tim",
    "pihakKedua": "Mitra"
  },
  {
    "id": "bast-78",
    "nomorUrut": 78,
    "tanggal": "8 September 2026",
    "kodeKlasifikasi": "VS.330",
    "nomorBAST": "78/7301/VS.330/2026",
    "perihal": "BAST SKGB 2026 PENGGILINGAN",
    "pihakPertama": "Ketua Tim",
    "pihakKedua": "Mitra"
  },
  {
    "id": "bast-79",
    "nomorUrut": 79,
    "tanggal": "8 September 2026",
    "kodeKlasifikasi": "VS.330",
    "nomorBAST": "79/7301/VS.330/2026",
    "perihal": "BAST SKGB 2026 PENGeringan",
    "pihakPertama": "Ketua Tim",
    "pihakKedua": "Mitra"
  },
  {
    "id": "bast-80",
    "nomorUrut": 80,
    "tanggal": "8 September 2026",
    "kodeKlasifikasi": "VS.330",
    "nomorBAST": "80/7301/VS.330/2026",
    "perihal": "BAST Pemutakhiran Sakernas Agustus Tahun 2026",
    "pihakPertama": "PML",
    "pihakKedua": "Mitra"
  },
  {
    "id": "bast-81",
    "nomorUrut": 81,
    "tanggal": "8 September 2026",
    "kodeKlasifikasi": "VS.340",
    "nomorBAST": "81/7301/VS.340/2026",
    "perihal": "BAST Pemutakhiran Sakernas Agustus Tahun 2026",
    "pihakPertama": "Ketua Tim",
    "pihakKedua": "PML"
  },
  {
    "id": "bast-82",
    "nomorUrut": 82,
    "tanggal": "8 September 2026",
    "kodeKlasifikasi": "VS.330",
    "nomorBAST": "82/7301/VS.330/2026",
    "perihal": "BAST Sakernas Agustus 2026",
    "pihakPertama": "PML",
    "pihakKedua": "Mitra"
  },
  {
    "id": "bast-83",
    "nomorUrut": 83,
    "tanggal": "8 September 2026",
    "kodeKlasifikasi": "VS.340",
    "nomorBAST": "83/7301/VS.340/2026",
    "perihal": "BAST Sakernas Agustus 2026",
    "pihakPertama": "Ketua Tim",
    "pihakKedua": "PML"
  },
  {
    "id": "bast-84",
    "nomorUrut": 84,
    "tanggal": "16 September 2026",
    "kodeKlasifikasi": "VS.330",
    "nomorBAST": "84/7301/VS.330/2026",
    "perihal": "BAST Susenas September dan Seruti Triwulan III Tahun 2026",
    "pihakPertama": "PML",
    "pihakKedua": "Mitra"
  },
  {
    "id": "bast-85",
    "nomorUrut": 85,
    "tanggal": "16 September 2026",
    "kodeKlasifikasi": "VS.340",
    "nomorBAST": "85/7301/VS.340/2026",
    "perihal": "BAST Susenas September dan Seruti Triwulan III Tahun 2026",
    "pihakPertama": "Ketua Tim",
    "pihakKedua": "PML"
  },
  {
    "id": "bast-86",
    "nomorUrut": 86,
    "tanggal": "16 September 2026",
    "kodeKlasifikasi": "VS.330",
    "nomorBAST": "86/7301/VS.330/2026",
    "perihal": "BAST Galian URT Tahun 2026",
    "pihakPertama": "Ketua Tim",
    "pihakKedua": "Mitra"
  },
  {
    "id": "bast-87",
    "nomorUrut": 87,
    "tanggal": "18 September 2026",
    "kodeKlasifikasi": "VS.330",
    "nomorBAST": "87/7301/VS.330/2026",
    "perihal": "BAST K3",
    "pihakPertama": "Ketua Tim",
    "pihakKedua": "Mitra"
  },
  {
    "id": "bast-88",
    "nomorUrut": 88,
    "tanggal": "18 September 2026",
    "kodeKlasifikasi": "VS.330",
    "nomorBAST": "88/7301/VS.330/2026",
    "perihal": "BAST SLK KSP",
    "pihakPertama": "Ketua Tim",
    "pihakKedua": "Mitra"
  },
  {
    "id": "bast-89",
    "nomorUrut": 89,
    "tanggal": "18 September 2026",
    "kodeKlasifikasi": "VS.330",
    "nomorBAST": "89/7301/VS.330/2026",
    "perihal": "BAST BUMD",
    "pihakPertama": "Ketua Tim",
    "pihakKedua": "Mitra"
  },
  {
    "id": "bast-90",
    "nomorUrut": 90,
    "tanggal": "21 September 2026",
    "kodeKlasifikasi": "VS.330",
    "nomorBAST": "90/7301/VS.330/2026",
    "perihal": "BAST RPH Agustus 2026",
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
    "perihal": "Honor Pendataan Ubinan SR 1 2026"
  },
  {
    "id": "fp-2",
    "nomorUrut": 2,
    "tanggal": "2 Januari 2026",
    "tipeForm": "Belanja Barang",
    "nomorForm": "B-2/7301/KU.320/2026",
    "perihal": "Honor Pendataan IMK Triwulan 4 2025"
  },
  {
    "id": "fp-3",
    "nomorUrut": 3,
    "tanggal": "2 Januari 2026",
    "tipeForm": "Belanja Barang",
    "nomorForm": "B-3/7301/KU.320/2026",
    "perihal": "Honor Pendataan SKTR Triwulan 4 2025"
  },
  {
    "id": "fp-4",
    "nomorUrut": 4,
    "tanggal": "2 Januari 2026",
    "tipeForm": "Belanja Barang",
    "nomorForm": "B-4/7301/KU.320/2026",
    "perihal": "Honor Pendataan KSA Padi Januari 2026"
  },
  {
    "id": "fp-5",
    "nomorUrut": 5,
    "tanggal": "2 Januari 2026",
    "tipeForm": "Belanja Barang",
    "nomorForm": "B-5/7301/KU.320/2026",
    "perihal": "Honor Pendataan KSA Jagung Januari 2026"
  },
  {
    "id": "fp-6",
    "nomorUrut": 6,
    "tanggal": "2 Januari 2026",
    "tipeForm": "Belanja Barang",
    "nomorForm": "B-6/7301/KU.320/2026",
    "perihal": "Honor Pendataan SKTNP Sektor Jasa Tahap 1 Tahun 2026"
  },
  {
    "id": "fp-7",
    "nomorUrut": 7,
    "tanggal": "2 Januari 2026",
    "tipeForm": "Belanja Pegawai",
    "nomorForm": "B-7/7301/KU.350/2026",
    "perihal": "Tukin PNS Bulan Desember Tahun 2025"
  },
  {
    "id": "fp-8",
    "nomorUrut": 8,
    "tanggal": "2 Januari 2026",
    "tipeForm": "Belanja Pegawai",
    "nomorForm": "B-8/7301/KU.350/2026",
    "perihal": "Tukin PPPK Bulan Desember Tahun 2025"
  },
  {
    "id": "fp-9",
    "nomorUrut": 9,
    "tanggal": "2 Januari 2026",
    "tipeForm": "Belanja Pegawai",
    "nomorForm": "B-9/7301/KU.350/2026",
    "perihal": "Gaji PNS Bulan Februari Tahun 2026"
  },
  {
    "id": "fp-10",
    "nomorUrut": 10,
    "tanggal": "2 Januari 2026",
    "tipeForm": "Belanja Pegawai",
    "nomorForm": "B-10/7301/KU.350/2026",
    "perihal": "Gaji PPPK Bulan Februari Tahun 2026"
  },
  {
    "id": "fp-10.1",
    "nomorUrut": 10.1,
    "tanggal": "2 Januari 2026",
    "tipeForm": "Belanja Barang",
    "nomorForm": "B-10.1/7301/KU.320/2026",
    "perihal": "Pembayaran belanja barang berupa tagihan listrik bulan Januari 2026 untuk 1 invoice"
  },
  {
    "id": "fp-10.2",
    "nomorUrut": 10.2,
    "tanggal": "2 Januari 2026",
    "tipeForm": "Belanja Barang",
    "nomorForm": "B-10.2/7301/KU.320/2026",
    "perihal": "Pembayaran belanja barang berupa tagihan telepon bulan Januari 2026 untuk 2 invoice"
  },
  {
    "id": "fp-10.3",
    "nomorUrut": 10.3,
    "tanggal": "2 Januari 2026",
    "tipeForm": "Belanja Barang",
    "nomorForm": "B-10.3/7301/KU.320/2026",
    "perihal": "Pembayarana Belanja barang berupa Keperluan sehari-hari perkantoran"
  },
  {
    "id": "fp-10.4",
    "nomorUrut": 10.4,
    "tanggal": "2 Januari 2026",
    "tipeForm": "Belanja Barang",
    "nomorForm": "B-10.4/7301/KU.320/2026",
    "perihal": "Pembayarana Belanja barang berupa iuran air PDAM"
  },
  {
    "id": "fp-10.5",
    "nomorUrut": 10.5,
    "tanggal": "2 Januari 2026",
    "tipeForm": "Belanja Barang",
    "nomorForm": "B-10.5/7301/KU.320/2026",
    "perihal": "Pembayarana Belanja barang berupa Pemeliharan Gedung Kantor / pemeliharaan kendaraan operasional eselong III/pemeliharaan kendaraan roda 2/pemeliharaan Printer"
  },
  {
    "id": "fp-11",
    "nomorUrut": 11,
    "tanggal": "2 Januari 2026",
    "tipeForm": "Belanja Barang",
    "nomorForm": "B-11/7301/KU.320/2026",
    "perihal": "Honor Petugas Identifkasi Komoditas Utama SHP 2026"
  },
  {
    "id": "fp-12",
    "nomorUrut": 12,
    "tanggal": "2 Januari 2026",
    "tipeForm": "Belanja Barang",
    "nomorForm": "B-12/7301/KU.320/2026",
    "perihal": "Honor Petugas SHKK 2026"
  },
  {
    "id": "fp-13",
    "nomorUrut": 13,
    "tanggal": "2 Januari 2026",
    "tipeForm": "Belanja Barang",
    "nomorForm": "B-13/7301/KU.320/2026",
    "perihal": "Honor Petugas SHKK TW 1 2026"
  },
  {
    "id": "fp-14",
    "nomorUrut": 14,
    "tanggal": "2 Januari 2026",
    "tipeForm": "Belanja Barang",
    "nomorForm": "B-14/7301/KU.320/2026",
    "perihal": "Honor Petugas VHTS Januari 2026"
  },
  {
    "id": "fp-15",
    "nomorUrut": 15,
    "tanggal": "2 Januari 2026",
    "tipeForm": "Belanja Barang",
    "nomorForm": "B-15/7301/KU.320/2026",
    "perihal": "Transport Pendataan Panjang Jalan 2026"
  },
  {
    "id": "fp-15.1",
    "nomorUrut": 15.1,
    "tanggal": "7 Januari 2026",
    "tipeForm": "Belanja Barang",
    "nomorForm": "B-15.1/7301/KU.320/2025",
    "perihal": "Transport Lokal Peserta Pelatihan Susenas Maret 2026 Gelombang 1"
  },
  {
    "id": "fp-15.2",
    "nomorUrut": 15.2,
    "tanggal": "7 Januari 2026",
    "tipeForm": "Belanja Barang",
    "nomorForm": "B-15.2/7301/KU.320/2026",
    "perihal": "Transport Lokal Peserta Pelatihan Susenas Maret 2026 Gelombang 2"
  },
  {
    "id": "fp-15.3",
    "nomorUrut": 15.3,
    "tanggal": "7 Januari 2026",
    "tipeForm": "Belanja Barang",
    "nomorForm": "B-15.3/7301/KU.320/2026",
    "perihal": "Transport Lokal Peserta Pelatihan Seruti Triwulan 1 Tahun 2026"
  },
  {
    "id": "fp-15.4",
    "nomorUrut": 15.4,
    "tanggal": "7 Januari 2026",
    "tipeForm": "Belanja Barang",
    "nomorForm": "B-15.4/7301/KU.320/2026",
    "perihal": "Paket Fullday Pelatihan SUSENAS Maret dan Seruti Triwulan 1 Tahun 2026"
  },
  {
    "id": "fp-15.5",
    "nomorUrut": 15.5,
    "tanggal": "7 Januari 2026",
    "tipeForm": "Belanja Barang",
    "nomorForm": "B-15.5/7301/KU.320/2026",
    "perihal": "Penyediaan Uang Persediaan BADAN PUSAT STATISTIK KAB. KEPULAUAN SELAYAR Tahun Anggaran 2026"
  },
  {
    "id": "fp-15.6",
    "nomorUrut": 15.6,
    "tanggal": "7 Januari 2026",
    "tipeForm": "Belanja Perjalanan",
    "nomorForm": "B-15.6/7301/KU.340/2026",
    "perihal": "Perjalanan Pengawasan dan Pemeriksaan Susenas Maret dan Seruti TW I Tahun 2026 Lebih dari 8 Jam"
  },
  {
    "id": "fp-15.7",
    "nomorUrut": 15.7,
    "tanggal": "7 Januari 2026",
    "tipeForm": "Belanja Bahan",
    "nomorForm": "B-15.7/7301/KU.310/2026",
    "perihal": "Spanduk Pelatihan Susenas dan Seruti Tw I"
  },
  {
    "id": "fp-16",
    "nomorUrut": 16,
    "tanggal": "20 Januari 2026",
    "tipeForm": "Belanja Barang",
    "nomorForm": "B-16/7301/KU.320/2026",
    "perihal": "Transport Pelatihan KSA dan Ubinan 2026"
  },
  {
    "id": "fp-17",
    "nomorUrut": 17,
    "tanggal": "20 Januari 2026",
    "tipeForm": "Belanja Barang",
    "nomorForm": "B-17/7301/KU.320/2026",
    "perihal": "Perlengkapan Petugas Pelatihan KSA dan Ubinan 2026"
  },
  {
    "id": "fp-17.1",
    "nomorUrut": 17.1,
    "tanggal": "20 Januari 2026",
    "tipeForm": "Belanja Barang",
    "nomorForm": "B-17.1/7301/KU.320/2026",
    "perihal": "Perlengkapan Petugas Pelatihan KSA dan Ubinan 2026"
  },
  {
    "id": "fp-18",
    "nomorUrut": 18,
    "tanggal": "20 Januari 2026",
    "tipeForm": "Belanja Barang",
    "nomorForm": "B-18/7301/KU.320/2026",
    "perihal": "Pengajar Pelatihan KSA dan Ubinan 2026"
  },
  {
    "id": "fp-19",
    "nomorUrut": 19,
    "tanggal": "26 Januari 2026",
    "tipeForm": "Belanja Barang",
    "nomorForm": "B-19/7301/KU.320/2026",
    "perihal": "Transport Peserta Pelatihan Petugas Sakernas Februari Tahun 2026"
  },
  {
    "id": "fp-20",
    "nomorUrut": 20,
    "tanggal": "26 Januari 2026",
    "tipeForm": "Belanja Barang",
    "nomorForm": "B-20/7301/KU.320/2026",
    "perihal": "Perlengkapan Pelatihan Petugas Sakernas Februari 2026"
  },
  {
    "id": "fp-21",
    "nomorUrut": 21,
    "tanggal": "26 Januari 2026",
    "tipeForm": "Belanja Barang",
    "nomorForm": "B-21/7301/KU.320/2026",
    "perihal": "Spanduk Pelatihan Petugas Sakernas Februari Tahun 2026"
  },
  {
    "id": "fp-22",
    "nomorUrut": 22,
    "tanggal": "26 Januari 2026",
    "tipeForm": "Belanja Barang",
    "nomorForm": "B-22/7301/KU.320/2026",
    "perihal": "Pengganti responden Ubinan SR1 2026"
  },
  {
    "id": "fp-22.1",
    "nomorUrut": 22.1,
    "tanggal": "26 Januari 2026",
    "tipeForm": "Belanja Bahan",
    "nomorForm": "B-22.1/7301/KU.310/2026",
    "perihal": "Konsumsi pelatihan petugas sakernas februari Tahun 2026"
  },
  {
    "id": "fp-23",
    "nomorUrut": 23,
    "tanggal": "27 Januari 2026",
    "tipeForm": "Belanja Barang",
    "nomorForm": "B-23/7301/KU.320/2026",
    "perihal": "Honor Pendataan RPH Januari 2026"
  },
  {
    "id": "fp-24",
    "nomorUrut": 24,
    "tanggal": "27 Januari 2026",
    "tipeForm": "Belanja Barang",
    "nomorForm": "B-24/7301/KU.320/2026",
    "perihal": "Honor Pengajar Sakernas Februari 2026"
  },
  {
    "id": "fp-25",
    "nomorUrut": 25,
    "tanggal": "30 Januari 2026",
    "tipeForm": "Belanja Pegawai",
    "nomorForm": "B-25/7301/KU.350/2026",
    "perihal": "Lembur Validasi Pemuktahiran Susenas Maret dan Seruti Triwulan I Tahun 2026"
  },
  {
    "id": "fp-26",
    "nomorUrut": 26,
    "tanggal": "2 Februari 2026",
    "tipeForm": "Belanja Pegawai",
    "nomorForm": "B-26/7301/KU.350/2026",
    "perihal": "Gaji PNS Bulan Maret Tahun 2026"
  },
  {
    "id": "fp-27",
    "nomorUrut": 27,
    "tanggal": "2 Februari 2026",
    "tipeForm": "Belanja Pegawai",
    "nomorForm": "B-27/7301/KU.350/2026",
    "perihal": "Gaji PPPK Bulan Maret Tahun 2026"
  },
  {
    "id": "fp-28",
    "nomorUrut": 28,
    "tanggal": "2 Februari 2026",
    "tipeForm": "Belanja Pegawai",
    "nomorForm": "B-28/7301/KU.350/2026",
    "perihal": "Tukin PNS Bulan Januari Tahun 2026"
  },
  {
    "id": "fp-29",
    "nomorUrut": 29,
    "tanggal": "2 Februari 2026",
    "tipeForm": "Belanja Pegawai",
    "nomorForm": "B-29/7301/KU.350/2026",
    "perihal": "Tukin PPPK Bulan Januari Tahun 2026"
  },
  {
    "id": "fp-30",
    "nomorUrut": 30,
    "tanggal": "2 Februari 2026",
    "tipeForm": "Belanja Pegawai",
    "nomorForm": "B-30/7301/KU.350/2026",
    "perihal": "Uang Makan PNS Bulan Januari Tahun 2026"
  },
  {
    "id": "fp-31",
    "nomorUrut": 31,
    "tanggal": "2 Februari 2026",
    "tipeForm": "Belanja Pegawai",
    "nomorForm": "B-31/7301/KU.350/2026",
    "perihal": "Uang Makan PPPK Bulan Januari Tahun 2026"
  },
  {
    "id": "fp-32",
    "nomorUrut": 32,
    "tanggal": "2 Februari 2026",
    "tipeForm": "Belanja Barang",
    "nomorForm": "B-32/7301/KU.320/2026",
    "perihal": "Honor Pengelola Kuangan Bulan Januari 2026 untuk 4 Pegawai"
  },
  {
    "id": "fp-32.1",
    "nomorUrut": 32.1,
    "tanggal": "2 Februari 2026",
    "tipeForm": "Belanja Barang",
    "nomorForm": "B-32.1/7301/KU.320/2026",
    "perihal": "Pembayaran Belanja Barang Berupa Honorarium Pejabat Pengadaan Bulan Januari Tahun 2026 Untuk 1 Orang"
  },
  {
    "id": "fp-32.2",
    "nomorUrut": 32.2,
    "tanggal": "2 Februari 2026",
    "tipeForm": "Belanja Barang",
    "nomorForm": "B-32.2/7301/KU.320/2026",
    "perihal": "Pembayaran belanja barang berupa tagihan telepon bulan Februari 2026 untuk 2 invoice"
  },
  {
    "id": "fp-32.3",
    "nomorUrut": 32.3,
    "tanggal": "2 Februari 2026",
    "tipeForm": "Belanja Barang",
    "nomorForm": "B-32.3/7301/KU.320/2026",
    "perihal": "Pembayaran belanja barang berupa tagihan listrik bulan Februari 2026 untuk 1 invoice"
  },
  {
    "id": "fp-32.4",
    "nomorUrut": 32.4,
    "tanggal": "2 Februari 2026",
    "tipeForm": "Belanja Barang",
    "nomorForm": "B-32.4/7301/KU.320/2026",
    "perihal": "Honor Pengolahan Dokumen Pemuktahiran Susenas Maret 2026"
  },
  {
    "id": "fp-32.5",
    "nomorUrut": 32.5,
    "tanggal": "2 Februari 2026",
    "tipeForm": "Belanja Barang",
    "nomorForm": "B-32.5/7301/KU.320/2026",
    "perihal": "Pembayarana Belanja barang berupa Keperluan sehari-hari perkantoran"
  },
  {
    "id": "fp-32.6",
    "nomorUrut": 32.6,
    "tanggal": "2 Februari 2026",
    "tipeForm": "Belanja Barang",
    "nomorForm": "B-32.6/7301/KU.320/2026",
    "perihal": "Pemeliharaan Mobil Dinas Eselon iii"
  },
  {
    "id": "fp-33",
    "nomorUrut": 33,
    "tanggal": "2 Februari 2026",
    "tipeForm": "Belanja Barang",
    "nomorForm": "B-33/7301/KU.320/2026",
    "perihal": "Honor VHTS Bulan Februari 2026"
  },
  {
    "id": "fp-34",
    "nomorUrut": 34,
    "tanggal": "2 Februari 2026",
    "tipeForm": "Belanja Barang",
    "nomorForm": "B-34/7301/KU.320/2026",
    "perihal": "Honor Petugas SHP Februari 2026"
  },
  {
    "id": "fp-35",
    "nomorUrut": 35,
    "tanggal": "2 Februari 2026",
    "tipeForm": "Belanja Barang",
    "nomorForm": "B-35/7301/KU.320/2026",
    "perihal": "Honor Petugas SHPB Februari 2026"
  },
  {
    "id": "fp-35.1",
    "nomorUrut": 35.1,
    "tanggal": "3 Februari 2026",
    "tipeForm": "Belanja Barang",
    "nomorForm": "B-35.1/7301/KU.320/2026",
    "perihal": "Belanja Barang Berupa Honor PengajarPelatihan Petugas Susenas Maret dan Seruti Triwulan ITahun 2026 untuk 1 Orang berdasarkan SK 026 Tahun2026 Tanggal 05 Januari 2026"
  },
  {
    "id": "fp-36",
    "nomorUrut": 36,
    "tanggal": "10 Februari 2026",
    "tipeForm": "Belanja Barang",
    "nomorForm": "B-36/7301/KU.320/2026",
    "perihal": "transport perjalanan pengawasan susenas maret dan seruti triwulan i tahun 2026"
  },
  {
    "id": "fp-37",
    "nomorUrut": 37,
    "tanggal": "10 Februari 2026",
    "tipeForm": "Belanja Barang",
    "nomorForm": "B-37/7301/KU.320/2026",
    "perihal": "transport perjalanan pengumpulan rentang harga (RH) dan konversi komoditas susenas maret tahun 2026"
  },
  {
    "id": "fp-38",
    "nomorUrut": 38,
    "tanggal": "10 Februari 2026",
    "tipeForm": "Belanja Barang",
    "nomorForm": "B-38/7301/KU.320/2026",
    "perihal": "transport perjalanan pemeriksaan sakernas februari tahun 2026"
  },
  {
    "id": "fp-39",
    "nomorUrut": 39,
    "tanggal": "13 Februari 2026",
    "tipeForm": "Belanja Barang",
    "nomorForm": "B-39/7301/KU.320/2026",
    "perihal": "Transport Pelatihan VIP Horti 2026"
  },
  {
    "id": "fp-40",
    "nomorUrut": 40,
    "tanggal": "13 Februari 2026",
    "tipeForm": "Belanja Bahan",
    "nomorForm": "B-40/7301/KU.310/2026",
    "perihal": "Perlengkapan Petugas Pelatihan VIP Horti 2026"
  },
  {
    "id": "fp-41",
    "nomorUrut": 41,
    "tanggal": "13 Februari 2026",
    "tipeForm": "Belanja Bahan",
    "nomorForm": "B-41/7301/KU.310/2026",
    "perihal": "Konsumsi Petugas Pelatihan VIP Horti 2026"
  },
  {
    "id": "fp-42",
    "nomorUrut": 42,
    "tanggal": "13 Februari 2026",
    "tipeForm": "Belanja Barang",
    "nomorForm": "B-42/7301/KU.320/2026",
    "perihal": "Pengajar Pelatihan VIP Horti 2026"
  },
  {
    "id": "fp-42.1",
    "nomorUrut": 42.1,
    "tanggal": "13 Februari 2026",
    "tipeForm": "Belanja Bahan",
    "nomorForm": "B-42.1/7301/KU.310/2026",
    "perihal": "Konsumsi Petugas Pelatihan SHPB 2026"
  },
  {
    "id": "fp-42.2",
    "nomorUrut": 42.2,
    "tanggal": "13 Februari 2026",
    "tipeForm": "Belanja Barang",
    "nomorForm": "B-42.2/7301/KU.320/2026",
    "perihal": "Honor Pengajar Pelatihan SHPB 2026"
  },
  {
    "id": "fp-42.3",
    "nomorUrut": 42.3,
    "tanggal": "13 Februari 2026",
    "tipeForm": "Belanja Barang",
    "nomorForm": "B-42.3/7301/KU.320/2026",
    "perihal": "Translok Pelatihan SHPB 2026"
  },
  {
    "id": "fp-43",
    "nomorUrut": 43,
    "tanggal": "18 Februari 2026",
    "tipeForm": "Belanja Barang",
    "nomorForm": "B-43/7301/KU.320/2026",
    "perihal": "Honor Pendataan KSA Padi Feb 2026"
  },
  {
    "id": "fp-44",
    "nomorUrut": 44,
    "tanggal": "18 Februari 2026",
    "tipeForm": "Belanja Barang",
    "nomorForm": "B-44/7301/KU.320/2026",
    "perihal": "Honor Pendataan KSA Jagung Feb 2026"
  },
  {
    "id": "fp-45",
    "nomorUrut": 45,
    "tanggal": "18 Februari 2026",
    "tipeForm": "Belanja Barang",
    "nomorForm": "B-45/7301/KU.320/2026",
    "perihal": "Transport Pelatihan Komstrat 2026"
  },
  {
    "id": "fp-46",
    "nomorUrut": 46,
    "tanggal": "18 Februari 2026",
    "tipeForm": "Belanja Bahan",
    "nomorForm": "B-46/7301/KU.310/2026",
    "perihal": "Perlengkapan Petugas PelatihanKomnstrai 2026"
  },
  {
    "id": "fp-47",
    "nomorUrut": 47,
    "tanggal": "18 Februari 2026",
    "tipeForm": "Belanja Bahan",
    "nomorForm": "B-47/7301/KU.310/2026",
    "perihal": "Konsumsi Petugas Pelatihan Komstrat 2026"
  },
  {
    "id": "fp-48",
    "nomorUrut": 48,
    "tanggal": "18 Februari 2026",
    "tipeForm": "Belanja Barang",
    "nomorForm": "B-48/7301/KU.320/2026",
    "perihal": "Pengajar Pelatihan Komstrat 2026"
  },
  {
    "id": "fp-49",
    "nomorUrut": 49,
    "tanggal": "18 Februari 2026",
    "tipeForm": "Belanja Barang",
    "nomorForm": "B-49/7301/KU.320/2026",
    "perihal": "Pemutakhiran VIP Horti 2026"
  },
  {
    "id": "fp-50",
    "nomorUrut": 50,
    "tanggal": "18 Februari 2026",
    "tipeForm": "Belanja Barang",
    "nomorForm": "B-50/7301/KU.320/2026",
    "perihal": "Pemutakhiran Komstrat 2026"
  },
  {
    "id": "fp-50.1",
    "nomorUrut": 50.1,
    "tanggal": "18 Februari 2026",
    "tipeForm": "Belanja Barang",
    "nomorForm": "B-50.1/7301/KU.320/2026",
    "perihal": "Perjalanan Pengawasan dan Pemeriksanaan Komstrat kurang dari 8 Jam"
  },
  {
    "id": "fp-51",
    "nomorUrut": 51,
    "tanggal": "27 Februari 2026",
    "tipeForm": "Belanja Perjalanan",
    "nomorForm": "B-51/7301/KU.340/2026",
    "perihal": "Menghadiri Pelantikan dan Pengambilan Sumpah Pejabat Administrator, Pejabat Pengawas, dan Pejabat Fungsional di Lingkungan BPS Provinsi Sulawesi Selatan serta Rapat Evaluasi Kinerja Februari 2026 dan Koordinasi Kegiatan Maret Tahun 2026"
  },
  {
    "id": "fp-52",
    "nomorUrut": 52,
    "tanggal": "27 Februari 2026",
    "tipeForm": "Belanja Barang",
    "nomorForm": "B-52/7301/KU.320/2026",
    "perihal": "Perjalanan Pengawasan dan Pemeriksaan Sakernas Februari Tahun 2026 Lebih dari 8 Jam"
  },
  {
    "id": "fp-52.1",
    "nomorUrut": 52.1,
    "tanggal": "2 Maret 2026",
    "tipeForm": "Belanja Pegawai",
    "nomorForm": "B-52.1/7301/KU.350/2026",
    "perihal": "Gaji PNS Bulan April Tahun 2026"
  },
  {
    "id": "fp-52.2",
    "nomorUrut": 52.2,
    "tanggal": "2 Maret 2026",
    "tipeForm": "Belanja Pegawai",
    "nomorForm": "B-52.2/7301/KU.350/2026",
    "perihal": "Gaji PPPK Bulan April Tahun 2026"
  },
  {
    "id": "fp-52.3",
    "nomorUrut": 52.3,
    "tanggal": "2 Maret 2026",
    "tipeForm": "Belanja Pegawai",
    "nomorForm": "B-52.3/7301/KU.350/2026",
    "perihal": "Tukin PNS Bulan Februari Tahun 2026"
  },
  {
    "id": "fp-52.4",
    "nomorUrut": 52.4,
    "tanggal": "2 Maret 2026",
    "tipeForm": "Belanja Pegawai",
    "nomorForm": "B-52.4/7301/KU.350/2026",
    "perihal": "Tukin PPPK Bulan Februari Tahun 2026"
  },
  {
    "id": "fp-52.5",
    "nomorUrut": 52.5,
    "tanggal": "2 Maret 2026",
    "tipeForm": "Belanja Pegawai",
    "nomorForm": "B-52.5/7301/KU.350/2026",
    "perihal": "Uang Makan PNS Bulan februari Tahun 2026"
  },
  {
    "id": "fp-52.6",
    "nomorUrut": 52.6,
    "tanggal": "2 Maret 2026",
    "tipeForm": "Belanja Pegawai",
    "nomorForm": "B-52.6/7301/KU.350/2026",
    "perihal": "Uang Makan PPPK Bulan Februari Tahun 2026"
  },
  {
    "id": "fp-52.7",
    "nomorUrut": 52.7,
    "tanggal": "2 Maret 2026",
    "tipeForm": "Belanja Barang",
    "nomorForm": "B-52.7/7301/KU.320/2026",
    "perihal": "Honor Pengelola Kuangan Bulan Februari 2026 untuk 4 Pegawai"
  },
  {
    "id": "fp-52.8",
    "nomorUrut": 52.8,
    "tanggal": "3 Maret 2026",
    "tipeForm": "Belanja Pegawai",
    "nomorForm": "B-52.8/7301/KU.350/2026",
    "perihal": "Pembayaran THR Tahun 2026 untuk 20 Pegawai"
  },
  {
    "id": "fp-52.9",
    "nomorUrut": 52.9,
    "tanggal": "3 Maret 2026",
    "tipeForm": "Belanja Pegawai",
    "nomorForm": "B-52.9/7301/KU.350/2026",
    "perihal": "Pembayaran THR PPPK Tahun 2026 untuk 5 Pegawai"
  },
  {
    "id": "fp-52.10",
    "nomorUrut": 52.1,
    "tanggal": "3 Maret 2026",
    "tipeForm": "Belanja Barang",
    "nomorForm": "B-52.10/7301/KU.320/2026",
    "perihal": "Pembayaran belanja barang berupa tagihan telepon bulan Maret 2026 untuk 2 invoice"
  },
  {
    "id": "fp-52.11",
    "nomorUrut": 52.11,
    "tanggal": "3 Maret 2026",
    "tipeForm": "Belanja Barang",
    "nomorForm": "B-52.11/7301/KU.320/2026",
    "perihal": "Pembayaran belanja barang berupa tagihan listrik bulan Maret 2026 untuk 1 invoice"
  },
  {
    "id": "fp-52.12",
    "nomorUrut": 52.12,
    "tanggal": "3 Maret 2026",
    "tipeForm": "Belanja Pegawai",
    "nomorForm": "B-52.12/7301/KU.350/2026",
    "perihal": "Pembayaran THR Tunjangan Kinerja Tahun 2026 untuk 20 Pegawai"
  },
  {
    "id": "fp-52.13",
    "nomorUrut": 52.13,
    "tanggal": "3 Maret 2026",
    "tipeForm": "Belanja Pegawai",
    "nomorForm": "B-52.13/7301/KU.350/2026",
    "perihal": "Pembayaran THR Tunjangan Kinerja PPPK Tahun 2026 untuk 5 Pegawai"
  },
  {
    "id": "fp-52.14",
    "nomorUrut": 52.14,
    "tanggal": "3 Maret 2026",
    "tipeForm": "Belanja Barang",
    "nomorForm": "B-52.14/7301/KU.320/2026",
    "perihal": "Pembayarana Belanja barang berupa Keperluan sehari-hari perkantoran"
  },
  {
    "id": "fp-52.15",
    "nomorUrut": 52.15,
    "tanggal": "3 Maret 2026",
    "tipeForm": "Belanja Barang",
    "nomorForm": "B-52.15/7301/KU.320/2026",
    "perihal": "Pembayarana Belanja barang berupa Iuran air PDAM"
  },
  {
    "id": "fp-52.16",
    "nomorUrut": 52.16,
    "tanggal": "3 Maret 2026",
    "tipeForm": "Belanja Barang",
    "nomorForm": "B-52.16/7301/KU.320/2026",
    "perihal": "Pembayarana Belanja barang berupa Pemeliharan Gedung Kantor / pemeliharaan kendaraan operasional eselon III"
  },
  {
    "id": "fp-53",
    "nomorUrut": 53,
    "tanggal": "5 Maret 2026",
    "tipeForm": "Belanja Barang",
    "nomorForm": "B-53/7301/KU.320/2026",
    "perihal": "Honor Pendataan Sakernas Februari Tahun 2026"
  },
  {
    "id": "fp-53.1",
    "nomorUrut": 53.1,
    "tanggal": "5 Maret 2026",
    "tipeForm": "Belanja Barang",
    "nomorForm": "B-53.1/7301/KU.320/2026",
    "perihal": "Honor Pemutakhiran Sakernas Februari 2026"
  },
  {
    "id": "fp-54",
    "nomorUrut": 54,
    "tanggal": "5 Maret 2026",
    "tipeForm": "Belanja Bahan",
    "nomorForm": "B-54/7301/KU.310/2026",
    "perihal": "Honor Petugas Pengolahan Dokumen Susenas Maret 2026"
  },
  {
    "id": "fp-55",
    "nomorUrut": 55,
    "tanggal": "5 Maret 2026",
    "tipeForm": "Belanja Bahan",
    "nomorForm": "B-55/7301/KU.310/2026",
    "perihal": "Honor Petugas Pengolahan Dokumen Seruti Triwulan I tahun 2026"
  },
  {
    "id": "fp-56",
    "nomorUrut": 56,
    "tanggal": "6 Maret 2026",
    "tipeForm": "Belanja Barang",
    "nomorForm": "B-56/7301/KU.320/2026",
    "perihal": "Transport Pelatihan IPEK 2026"
  },
  {
    "id": "fp-57",
    "nomorUrut": 57,
    "tanggal": "6 Maret 2026",
    "tipeForm": "Belanja Bahan",
    "nomorForm": "B-57/7301/KU.310/2026",
    "perihal": "Perlengkapan Petugas Pelatihan IPEK 2026"
  },
  {
    "id": "fp-58",
    "nomorUrut": 58,
    "tanggal": "6 Maret 2026",
    "tipeForm": "Belanja Bahan",
    "nomorForm": "B-58/7301/KU.310/2026",
    "perihal": "Konsumsi Petugas Pelatihan IPEK 2026"
  },
  {
    "id": "fp-59",
    "nomorUrut": 59,
    "tanggal": "6 Maret 2026",
    "tipeForm": "Belanja Barang",
    "nomorForm": "B-59/7301/KU.320/2026",
    "perihal": "Honor Pengajar Pelatihan IPEK 2026"
  },
  {
    "id": "fp-60",
    "nomorUrut": 60,
    "tanggal": "6 Maret 2026",
    "tipeForm": "Belanja Perjalanan",
    "nomorForm": "B-60/7301/KU.340/2026",
    "perihal": "Konsultasi Evaluasi Pengolahan Susenas Maret dan Seruti Triwulan I Tahun 2026"
  },
  {
    "id": "fp-60.1",
    "nomorUrut": 60.1,
    "tanggal": "6 Maret 2026",
    "tipeForm": "Belanja Pegawai",
    "nomorForm": "B-60.1/7301/KU.350/2026",
    "perihal": "Lembur Penyelesaian Validasi Susenas Maret dan Seruti Triwulan I 2026 - PNS"
  },
  {
    "id": "fp-60.2",
    "nomorUrut": 60.2,
    "tanggal": "6 Maret 2026",
    "tipeForm": "Belanja Pegawai",
    "nomorForm": "B-60.2/7301/KU.350/2026",
    "perihal": "Lembur Penyelesaian Validasi Susenas Maret dan Seruti Triwulan I 2026 - PPPK"
  },
  {
    "id": "fp-61",
    "nomorUrut": 61,
    "tanggal": "9 Maret 2026",
    "tipeForm": "Belanja Barang",
    "nomorForm": "B-61/7301/KU.320/2026",
    "perihal": "Honor Petugas Pendataan Susenas Maret Tahun 2026"
  },
  {
    "id": "fp-62",
    "nomorUrut": 62,
    "tanggal": "9 Maret 2026",
    "tipeForm": "Belanja Barang",
    "nomorForm": "B-62/7301/KU.320/2026",
    "perihal": "Honor Petugas Pendataaan Seruti Tw I Tahun 2026"
  },
  {
    "id": "fp-63",
    "nomorUrut": 63,
    "tanggal": "9 Maret 2026",
    "tipeForm": "Belanja Barang",
    "nomorForm": "B-63/7301/KU.320/2026",
    "perihal": "Honor Petugas VHTS Maret 2026"
  },
  {
    "id": "fp-64",
    "nomorUrut": 64,
    "tanggal": "9 Maret 2026",
    "tipeForm": "Belanja Barang",
    "nomorForm": "B-64/7301/KU.320/2026",
    "perihal": "Honor SHP Maret 2026"
  },
  {
    "id": "fp-66",
    "nomorUrut": 66,
    "tanggal": "10 Maret 2026",
    "tipeForm": "Belanja Bahan",
    "nomorForm": "B-66/7301/KU.310/2026",
    "perihal": "Konsumsi Pelatihan SKTNP Tahun 2026"
  },
  {
    "id": "fp-67",
    "nomorUrut": 67,
    "tanggal": "10 Maret 2026",
    "tipeForm": "Belanja Barang",
    "nomorForm": "B-67/7301/KU.320/2026",
    "perihal": "Translok Petugas Pelatihan SKTNP Tahun 2026"
  },
  {
    "id": "fp-68",
    "nomorUrut": 68,
    "tanggal": "10 Maret 2026",
    "tipeForm": "Belanja Barang",
    "nomorForm": "B-68/7301/KU.320/2026",
    "perihal": "Honor Pengajar Pelatihan SKTNP Tahun 2026"
  },
  {
    "id": "fp-69",
    "nomorUrut": 69,
    "tanggal": "10 Maret 2026",
    "tipeForm": "Belanja Bahan",
    "nomorForm": "B-69/7301/KU.310/2026",
    "perihal": "Konsumsi Pelatihan SKLNPT Tahun 2026"
  },
  {
    "id": "fp-70",
    "nomorUrut": 70,
    "tanggal": "10 Maret 2026",
    "tipeForm": "Belanja Barang",
    "nomorForm": "B-70/7301/KU.320/2026",
    "perihal": "Translok Petugas Pelatihan SKLNPT Tahun 2026"
  },
  {
    "id": "fp-71",
    "nomorUrut": 71,
    "tanggal": "10 Maret 2026",
    "tipeForm": "Belanja Barang",
    "nomorForm": "B-71/7301/KU.320/2026",
    "perihal": "Honor Pengajar Pelatihan SKLNPT Tahun 2026"
  },
  {
    "id": "fp-72",
    "nomorUrut": 72,
    "tanggal": "10 Maret 2026",
    "tipeForm": "Belanja Barang",
    "nomorForm": "B-72/7301/KU.320/2026",
    "perihal": "Perjalanan Pemeriksaan Lapangan Sakernas Februari kurang dari 8 jam"
  },
  {
    "id": "fp-72.1",
    "nomorUrut": 72.1,
    "tanggal": "10 Maret 2026",
    "tipeForm": "Belanja Barang",
    "nomorForm": "B-72.1/7301/KU.320/2026",
    "perihal": "Honor Pendataan KSA Padi Maret 2026"
  },
  {
    "id": "fp-72.2",
    "nomorUrut": 72.2,
    "tanggal": "10 Maret 2026",
    "tipeForm": "Belanja Barang",
    "nomorForm": "B-72.2/7301/KU.320/2026",
    "perihal": "Honor Pendataan KSA Jagung Maret 2026"
  },
  {
    "id": "fp-72.3",
    "nomorUrut": 72.3,
    "tanggal": "10 Maret 2026",
    "tipeForm": "Belanja Barang",
    "nomorForm": "B-72.3/7301/KU.320/2026",
    "perihal": "Honor Pendataan VIP Horti Triwulan I 2026"
  },
  {
    "id": "fp-72.4",
    "nomorUrut": 72.4,
    "tanggal": "10 Maret 2026",
    "tipeForm": "Belanja Barang",
    "nomorForm": "B-72.4/7301/KU.320/2026",
    "perihal": "Honor Pendataan VKOMSTRAT Triwulan I 2026"
  },
  {
    "id": "fp-73",
    "nomorUrut": 73,
    "tanggal": "10 Maret 2026",
    "tipeForm": "Belanja Barang",
    "nomorForm": "B-73/7301/KU.320/2026",
    "perihal": "Perjalanan Pengawasan dan Pemeriksanaan Susenas Lebih dari 8 Jam"
  },
  {
    "id": "fp-74",
    "nomorUrut": 74,
    "tanggal": "10 Maret 2026",
    "tipeForm": "Belanja Barang",
    "nomorForm": "B-74/7301/KU.320/2026",
    "perihal": "Perjalanan Pengawasan dan Pemeriksanaan Susenas Kurang dari 8 Jam"
  },
  {
    "id": "fp-75",
    "nomorUrut": 75,
    "tanggal": "25 Maret 2026",
    "tipeForm": "Belanja Perjalanan",
    "nomorForm": "B-75/7301/KU.340/2026",
    "perihal": "Konsultasi"
  },
  {
    "id": "fp-76",
    "nomorUrut": 76,
    "tanggal": "25 Maret 2026",
    "tipeForm": "Belanja Barang",
    "nomorForm": "B-76/7301/KU.320/2026",
    "perihal": "Honor Pengajar VREST UMK"
  },
  {
    "id": "fp-77",
    "nomorUrut": 77,
    "tanggal": "25 Maret 2026",
    "tipeForm": "Belanja Bahan",
    "nomorForm": "B-77/7301/KU.310/2026",
    "perihal": "Konsumsi Pelatihan VREST UMK"
  },
  {
    "id": "fp-78",
    "nomorUrut": 78,
    "tanggal": "25 Maret 2026",
    "tipeForm": "Belanja Barang",
    "nomorForm": "B-78/7301/KU.320/2026",
    "perihal": "Transok pelatihan petugas VREST UMK"
  },
  {
    "id": "fp-79",
    "nomorUrut": 79,
    "tanggal": "25 Maret 2026",
    "tipeForm": "Belanja Bahan",
    "nomorForm": "B-79/7301/KU.310/2026",
    "perihal": "Perlengkapan pelatihan petugas VREST UMK"
  },
  {
    "id": "fp-80",
    "nomorUrut": 80,
    "tanggal": "1 April 2026",
    "tipeForm": "Belanja Barang",
    "nomorForm": "B-80/7301/KU.320/2026",
    "perihal": "Honor VHTS April 2026"
  },
  {
    "id": "fp-81",
    "nomorUrut": 81,
    "tanggal": "1 April 2026",
    "tipeForm": "Belanja Barang",
    "nomorForm": "B-81/7301/KU.320/2026",
    "perihal": "Honor SHP Jan - April 2026"
  },
  {
    "id": "fp-82",
    "nomorUrut": 82,
    "tanggal": "1 April 2026",
    "tipeForm": "Belanja Barang",
    "nomorForm": "B-82/7301/KU.320/2026",
    "perihal": "Honor SPUNP TW 1"
  },
  {
    "id": "fp-83",
    "nomorUrut": 83,
    "tanggal": "1 April 2026",
    "tipeForm": "Belanja Barang",
    "nomorForm": "B-83/7301/KU.320/2026",
    "perihal": "Honor SHPB Jan - April 2026"
  },
  {
    "id": "fp-85",
    "nomorUrut": 85,
    "tanggal": "1 April 2026",
    "tipeForm": "Belanja Barang",
    "nomorForm": "B-85/7301/KU.320/2026",
    "perihal": "Honor VHTL 2026"
  },
  {
    "id": "fp-86",
    "nomorUrut": 86,
    "tanggal": "1 April 2026",
    "tipeForm": "Belanja Barang",
    "nomorForm": "B-86/7301/KU.320/2026",
    "perihal": "Honor VDTW 2026"
  },
  {
    "id": "fp-87",
    "nomorUrut": 87,
    "tanggal": "1 April 2026",
    "tipeForm": "Belanja Barang",
    "nomorForm": "B-87/7301/KU.320/2026",
    "perihal": "Honor BUMD 2026"
  },
  {
    "id": "fp-88",
    "nomorUrut": 88,
    "tanggal": "1 April 2026",
    "tipeForm": "Belanja Barang",
    "nomorForm": "B-88/7301/KU.320/2026",
    "perihal": "Honor Listing VREST UMK"
  },
  {
    "id": "fp-89",
    "nomorUrut": 89,
    "tanggal": "1 April 2026",
    "tipeForm": "Belanja Barang",
    "nomorForm": "B-89/7301/KU.320/2026",
    "perihal": "Honor Pendataan VREST UMK"
  },
  {
    "id": "fp-90",
    "nomorUrut": 90,
    "tanggal": "1 April 2026",
    "tipeForm": "Belanja Pegawai",
    "nomorForm": "B-90/7301/KU.350/2026",
    "perihal": "Gaji PNS Bulan Mei Tahun 2026"
  },
  {
    "id": "fp-91",
    "nomorUrut": 91,
    "tanggal": "1 April 2026",
    "tipeForm": "Belanja Pegawai",
    "nomorForm": "B-91/7301/KU.350/2026",
    "perihal": "Gaji PPPK Bulan Mei Tahun 2026"
  },
  {
    "id": "fp-92",
    "nomorUrut": 92,
    "tanggal": "1 April 2026",
    "tipeForm": "Belanja Pegawai",
    "nomorForm": "B-92/7301/KU.350/2026",
    "perihal": "Tukin PNS Bulan Maret Tahun 2026"
  },
  {
    "id": "fp-93",
    "nomorUrut": 93,
    "tanggal": "1 April 2026",
    "tipeForm": "Belanja Pegawai",
    "nomorForm": "B-93/7301/KU.350/2026",
    "perihal": "Tukin PPPK Bulan Maret Tahun 2026"
  },
  {
    "id": "fp-94",
    "nomorUrut": 94,
    "tanggal": "1 April 2026",
    "tipeForm": "Belanja Pegawai",
    "nomorForm": "B-94/7301/KU.350/2026",
    "perihal": "Uang Makan PNS Bulan Maret Tahun 2026"
  },
  {
    "id": "fp-95",
    "nomorUrut": 95,
    "tanggal": "1 April 2026",
    "tipeForm": "Belanja Pegawai",
    "nomorForm": "B-95/7301/KU.350/2025",
    "perihal": "Uang Makan PPPK Bulan Maret Tahun 2026"
  },
  {
    "id": "fp-95.1",
    "nomorUrut": 95.1,
    "tanggal": "1 April 2026",
    "tipeForm": "Belanja Barang",
    "nomorForm": "B-95.1/7301/KU.320/2025",
    "perihal": "Belanja Barang Berupa Honor Pengelolo SAI Bulan Janua-Maret untuk 4 orang pegawai tahun 2026"
  },
  {
    "id": "fp-95.2",
    "nomorUrut": 95.2,
    "tanggal": "1 April 2026",
    "tipeForm": "Belanja Jasa",
    "nomorForm": "B-95.2/7301/KU.330/2025",
    "perihal": "Pembayaran Belanja Barang berupa pengadaan Jasa Kebersihan Th 2026 Termin I"
  },
  {
    "id": "fp-95.3",
    "nomorUrut": 95.3,
    "tanggal": "1 April 2026",
    "tipeForm": "Belanja Jasa",
    "nomorForm": "B-95.3/7301/KU.330/2025",
    "perihal": "Pembayaran Belanja Barang berupa pengadaan Jasa Kebersihan Th 2026 Termin II"
  },
  {
    "id": "fp-95.4",
    "nomorUrut": 95.4,
    "tanggal": "1 April 2026",
    "tipeForm": "Belanja Jasa",
    "nomorForm": "B-95.4/7301/KU.330/2025",
    "perihal": "Pembayaran Belanja Barang berupa pengadaan Jasa Kebersihan Th 2026 Termin III"
  },
  {
    "id": "fp-95.5",
    "nomorUrut": 95.5,
    "tanggal": "1 April 2026",
    "tipeForm": "Belanja Barang",
    "nomorForm": "B-95.5/7301/KU.320/2025",
    "perihal": "Pembayarana Belanja barang berupa Keperluan sehari-hari perkantoran / Pembayarana Belanja barang berupa Iuran air PDAM"
  },
  {
    "id": "fp-95.6",
    "nomorUrut": 95.6,
    "tanggal": "1 April 2026",
    "tipeForm": "Belanja Barang",
    "nomorForm": "B-95.6/7301/KU.320/2025",
    "perihal": "Pembayarana Belanja barang berupa Pemeliharan Gedung Kantor / pemeliharaan kendaraan operasional eselon III / Pemeliharaan PC : Ganti Layar Laptop"
  },
  {
    "id": "fp-96",
    "nomorUrut": 96,
    "tanggal": "1 April 2026",
    "tipeForm": "Belanja Barang",
    "nomorForm": "B-96/7301/KU.320/2025",
    "perihal": "Honor Pengelola Kuangan Bulan Meret 2026 untuk 4 Pegawai"
  },
  {
    "id": "fp-97",
    "nomorUrut": 97,
    "tanggal": "1 April 2026",
    "tipeForm": "Belanja Barang",
    "nomorForm": "B-97/7301/KU.320/2025",
    "perihal": "Pembayaran belanja barang berupa tagihan telepon bulan April 2026 untuk 2 invoice"
  },
  {
    "id": "fp-98",
    "nomorUrut": 98,
    "tanggal": "1 April 2026",
    "tipeForm": "Belanja Barang",
    "nomorForm": "B-98/7301/KU.320/2025",
    "perihal": "Pembayaran belanja barang berupa tagihan listrik bulan April 2026 untuk 1 invoice"
  },
  {
    "id": "fp-99",
    "nomorUrut": 99,
    "tanggal": "1 April 2026",
    "tipeForm": "Belanja Barang",
    "nomorForm": "B-99/7301/KU.320/2025",
    "perihal": "Honor Listing IMK Triwulanan 2026"
  },
  {
    "id": "fp-100",
    "nomorUrut": 100,
    "tanggal": "1 April 2026",
    "tipeForm": "Belanja Barang",
    "nomorForm": "B-100/7301/KU.320/2025",
    "perihal": "Honor Pendataan IMK Triwulan I 2026"
  },
  {
    "id": "fp-100.1",
    "nomorUrut": 100.1,
    "tanggal": "1 April 2026",
    "tipeForm": "Belanja Barang",
    "nomorForm": "B-100.1/7301/KU.320/2025",
    "perihal": "Honor Pendataan SKLNP Triwulan 1 Tahun 2026"
  },
  {
    "id": "fp-100.2",
    "nomorUrut": 100.2,
    "tanggal": "1 April 2026",
    "tipeForm": "Belanja Barang",
    "nomorForm": "B-100.2/7301/KU.320/2025",
    "perihal": "Honor Pendataan SKTNP Sektor Jasa Tahap 2 Tahun 2026"
  },
  {
    "id": "fp-100.3",
    "nomorUrut": 100.3,
    "tanggal": "1 April 2026",
    "tipeForm": "Belanja Barang",
    "nomorForm": "B-100.3/7301/KU.320/2026",
    "perihal": "Honor Pendataan UDPE"
  },
  {
    "id": "fp-100.4",
    "nomorUrut": 100.4,
    "tanggal": "1 April 2026",
    "tipeForm": "Belanja Barang",
    "nomorForm": "B-100.4/7301/KU.320/2026",
    "perihal": "Honor Pendataan SKTR Triwulan 1 2026"
  },
  {
    "id": "fp-101",
    "nomorUrut": 101,
    "tanggal": "6 April 2026",
    "tipeForm": "Belanja Barang",
    "nomorForm": "B-101/7301/KU.320/2025",
    "perihal": "Konsultasi Kenaikan Jenjang Jabatan Fungsional dan Perpindahan Jabatan Lain serta Kepegawaian Lainnya"
  },
  {
    "id": "fp-102",
    "nomorUrut": 102,
    "tanggal": "7 April 2026",
    "tipeForm": "Belanja Barang",
    "nomorForm": "B-102/7301/KU.320/2025",
    "perihal": "Honor Pendataan SHKK TW 2"
  },
  {
    "id": "fp-102.1",
    "nomorUrut": 102.1,
    "tanggal": "7 April 2026",
    "tipeForm": "Belanja Barang",
    "nomorForm": "B-102.1/7301/KU.320/2025",
    "perihal": "Honor Pengajar Pemuktahiran Data perkembangan Desa (PODES 2026)"
  },
  {
    "id": "fp-103",
    "nomorUrut": 103,
    "tanggal": "9 April 2026",
    "tipeForm": "Belanja Barang",
    "nomorForm": "B-103/7301/KU.320/2026",
    "perihal": "Honor Pendataan KSA Padi April 2026"
  },
  {
    "id": "fp-104",
    "nomorUrut": 104,
    "tanggal": "9 April 2026",
    "tipeForm": "Belanja Barang",
    "nomorForm": "B-104/7301/KU.320/2026",
    "perihal": "Honor Pendataan KSA Jagung April 2026"
  },
  {
    "id": "fp-105",
    "nomorUrut": 105,
    "tanggal": "10 April 2026",
    "tipeForm": "Belanja Pegawai",
    "nomorForm": "B-105/7301/KU.350/2025",
    "perihal": "Lembur Perbaikan Bukti Dukung ZI"
  },
  {
    "id": "fp-106",
    "nomorUrut": 106,
    "tanggal": "13 April 2026",
    "tipeForm": "Belanja Bahan",
    "nomorForm": "B-106/7301/KU.310/2025",
    "perihal": "Konsumsi Briefing GC PBI Tahap II"
  },
  {
    "id": "fp-107",
    "nomorUrut": 107,
    "tanggal": "14 April 2026",
    "tipeForm": "Belanja Barang",
    "nomorForm": "B-107/7301/KU.320/2025",
    "perihal": "Pengawasan Ubinan Subround 1 2026"
  },
  {
    "id": "fp-108",
    "nomorUrut": 108,
    "tanggal": "20 April 2026",
    "tipeForm": "Belanja Barang",
    "nomorForm": "B-108/7301/KU.320/2026",
    "perihal": "Transport lokal pengumpulan data dukung PDRB"
  },
  {
    "id": "fp-109",
    "nomorUrut": 109,
    "tanggal": "20 April 2026",
    "tipeForm": "Belanja Bahan",
    "nomorForm": "B-109/7301/KU.310/2026",
    "perihal": "Perjalanan Pemeriksaan Lapangan Pemutakhiran Data Perkembangan Desa 2026 (PODES 2026) lebih dari 8 jam - Daerah Sulit"
  },
  {
    "id": "fp-110",
    "nomorUrut": 110,
    "tanggal": "20 April 2026",
    "tipeForm": "Belanja Barang",
    "nomorForm": "B-110/7301/KU.320/2026",
    "perihal": "Honor Pemutakhiran Ubinan Palawija SUBROUND 2 2026"
  },
  {
    "id": "fp-110.1",
    "nomorUrut": 110.1,
    "tanggal": "20 April 2026",
    "tipeForm": "Belanja Barang",
    "nomorForm": "B-110.1/7301/KU.320/2026",
    "perihal": "Pembyaran Belanja Barang Berupa pemeliharaan kendaraan operasional eselon III"
  },
  {
    "id": "fp-110.2",
    "nomorUrut": 110.2,
    "tanggal": "4 Mei 2026",
    "tipeForm": "Belanja Barang",
    "nomorForm": "B-110.2/7301/KU.320/2026",
    "perihal": "Honor pendataan ubinan padi subround 2 2026"
  },
  {
    "id": "fp-110.3",
    "nomorUrut": 110.3,
    "tanggal": "4 Mei 2026",
    "tipeForm": "Belanja Barang",
    "nomorForm": "B-110.3/7301/KU.320/2026",
    "perihal": "Honor pendataan ubinan palawija subround 2 2026"
  },
  {
    "id": "fp-110.4",
    "nomorUrut": 110.4,
    "tanggal": "4 Mei 2026",
    "tipeForm": "Belanja Barang",
    "nomorForm": "B-110.4/7301/KU.320/2026",
    "perihal": "Honor pengganti responden  ubinan padi subround 2 2026"
  },
  {
    "id": "fp-110.5",
    "nomorUrut": 110.5,
    "tanggal": "4 Mei 2026",
    "tipeForm": "Belanja Barang",
    "nomorForm": "B-110.5/7301/KU.320/2026",
    "perihal": "Honor pengganti responden ubinan palawija subround 2 2026"
  },
  {
    "id": "fp-111",
    "nomorUrut": 111,
    "tanggal": "4 Mei 2026",
    "tipeForm": "Belanja Pegawai",
    "nomorForm": "B-111/7301/KU.350/2026",
    "perihal": "Gaji PNS Bulan Juni Tahun 2026"
  },
  {
    "id": "fp-112",
    "nomorUrut": 112,
    "tanggal": "4 Mei 2026",
    "tipeForm": "Belanja Pegawai",
    "nomorForm": "B-112/7301/KU.350/2026",
    "perihal": "Gaji PPPK Bulan Juni Tahun 2026"
  },
  {
    "id": "fp-112.1",
    "nomorUrut": 112.1,
    "tanggal": "4 Mei 2026",
    "tipeForm": "Belanja Pegawai",
    "nomorForm": "B-112.1/7301/KU.350/2026",
    "perihal": "Gaji Ke-13 Tahun 2026 21 Pegawai"
  },
  {
    "id": "fp-112.2",
    "nomorUrut": 112.2,
    "tanggal": "4 Mei 2026",
    "tipeForm": "Belanja Pegawai",
    "nomorForm": "B-112.2/7301/KU.350/2026",
    "perihal": "Gaji Ke-13 Tahun 2026 P3K 5 Pegawai"
  },
  {
    "id": "fp-112.3",
    "nomorUrut": 112.3,
    "tanggal": "4 Mei 2026",
    "tipeForm": "Belanja Pegawai",
    "nomorForm": "B-112.3/7301/KU.350/2026",
    "perihal": "Tunjangan Kinerja Ke-13 Tahun 2026 21 Pegawai"
  },
  {
    "id": "fp-112.4",
    "nomorUrut": 112.4,
    "tanggal": "4 Mei 2026",
    "tipeForm": "Belanja Pegawai",
    "nomorForm": "B-112.4/7301/KU.350/2026",
    "perihal": "Tunjangan Kinerja PPPK Ke-13 Tahun 2026 5 Pegawai"
  },
  {
    "id": "fp-113",
    "nomorUrut": 113,
    "tanggal": "4 Mei 2026",
    "tipeForm": "Belanja Pegawai",
    "nomorForm": "B-113/7301/KU.350/2026",
    "perihal": "Tukin PNS Bulan April Tahun 2026"
  },
  {
    "id": "fp-114",
    "nomorUrut": 114,
    "tanggal": "4 Mei 2026",
    "tipeForm": "Belanja Pegawai",
    "nomorForm": "B-114/7301/KU.350/2026",
    "perihal": "Tukin PPPK Bulan April Tahun 2026"
  },
  {
    "id": "fp-115",
    "nomorUrut": 115,
    "tanggal": "4 Mei 2026",
    "tipeForm": "Belanja Pegawai",
    "nomorForm": "B-115/7301/KU.350/2026",
    "perihal": "Uang Makan PNS Bulan April Tahun 2026"
  },
  {
    "id": "fp-116",
    "nomorUrut": 116,
    "tanggal": "4 Mei 2026",
    "tipeForm": "Belanja Pegawai",
    "nomorForm": "B-116/7301/KU.350/2026",
    "perihal": "Uang Makan PPPK Bulan April Tahun 2026"
  },
  {
    "id": "fp-117",
    "nomorUrut": 117,
    "tanggal": "4 Mei 2026",
    "tipeForm": "Belanja Barang",
    "nomorForm": "B-117/7301/KU.320/2026",
    "perihal": "Honor Pengelola Kuangan Bulan April 2026 untuk 4 Pegawai"
  },
  {
    "id": "fp-118",
    "nomorUrut": 118,
    "tanggal": "4 Mei 2026",
    "tipeForm": "Belanja Barang",
    "nomorForm": "B-118/7301/KU.320/2026",
    "perihal": "Pembayaran Belanja barang berupa Keperluan sehari-hari perkantoran / Pengiriman Dokumen/surat dinas"
  },
  {
    "id": "fp-119",
    "nomorUrut": 119,
    "tanggal": "4 Mei 2026",
    "tipeForm": "Belanja Barang",
    "nomorForm": "B-119/7301/KU.320/2026",
    "perihal": "Pembayarana Belanja barang berupa Pemeliharan Gedung Kantor / pemeliharaan kendaraan operasional eselon III"
  },
  {
    "id": "fp-120",
    "nomorUrut": 120,
    "tanggal": "4 Mei 2026",
    "tipeForm": "Belanja Barang",
    "nomorForm": "B-120/7301/KU.320/2026",
    "perihal": "Honor Pendataan Podes 2026"
  },
  {
    "id": "fp-120.1",
    "nomorUrut": 120.1,
    "tanggal": "4 Mei 2026",
    "tipeForm": "Belanja Barang",
    "nomorForm": "B-120.1/7301/KU.320/2026",
    "perihal": "Pembayaran belanja barang berupa tagihan telepon bulan Februari 2026 untuk 2 invoice"
  },
  {
    "id": "fp-120.2",
    "nomorUrut": 120.2,
    "tanggal": "4 Mei 2026",
    "tipeForm": "Belanja Barang",
    "nomorForm": "B-120.2/7301/KU.320/2026",
    "perihal": "Pembayaran belanja barang berupa tagihan listrik bulan Mei 2026 untuk 1 invoice"
  },
  {
    "id": "fp-120.3",
    "nomorUrut": 120.3,
    "tanggal": "4 Mei 2026",
    "tipeForm": "Belanja Barang",
    "nomorForm": "B-120.3/7301/KU.320/2026",
    "perihal": "Pembayaran Belanja Barang Berupa Pengadaan Pakaian Kerja Pegawai di Lingkungan BPS Kabupaten Kepulauan Selayar Tahun 2026"
  },
  {
    "id": "fp-121",
    "nomorUrut": 121,
    "tanggal": "18 Mei 2026",
    "tipeForm": "Belanja Barang",
    "nomorForm": "B-121/7301/KU.320/2026",
    "perihal": "Honor Pendataan KSA Padi Mei 2026"
  },
  {
    "id": "fp-122",
    "nomorUrut": 122,
    "tanggal": "18 Mei 2026",
    "tipeForm": "Belanja Barang",
    "nomorForm": "B-122/7301/KU.320/2026",
    "perihal": "Honor Pendataan KSA Jagung Mei 2026"
  },
  {
    "id": "fp-123",
    "nomorUrut": 123,
    "tanggal": "18 Mei 2026",
    "tipeForm": "Belanja Barang",
    "nomorForm": "B-123/7301/KU.320/2026",
    "perihal": "Honor Petugas VHTS Mei 2026"
  },
  {
    "id": "fp-123.1",
    "nomorUrut": 123.1,
    "tanggal": "22 Mei 2026",
    "tipeForm": "Belanja Perjalanan",
    "nomorForm": "B-123.1/7301/KU.340/2026",
    "perihal": "Konsultasi Hasil Survei Komoditas Perkebunan Strategis (Komstrat) Semester 1 Tahun 2026"
  },
  {
    "id": "fp-124",
    "nomorUrut": 124,
    "tanggal": "29 Mei 2026",
    "tipeForm": "Belanja Barang",
    "nomorForm": "B-124/7301/KU.320/2026",
    "perihal": "Translok Fullboad Pelatihan Petugas Sensus Ekonomi 2026 Gelombang I"
  },
  {
    "id": "fp-125",
    "nomorUrut": 125,
    "tanggal": "29 Mei 2026",
    "tipeForm": "Belanja Barang",
    "nomorForm": "B-125/7301/KU.320/2026",
    "perihal": "Translok Fullboard Pelatihan Petugas Sensus Ekonomi 2026 Gelombang II"
  },
  {
    "id": "fp-125.1",
    "nomorUrut": 125.1,
    "tanggal": "29 Mei 2026",
    "tipeForm": "Belanja Barang",
    "nomorForm": "B-125.1/7301/KU.320/2026",
    "perihal": "HotelFullboard Pelatihan Petugas Sensus Ekonomi 2026"
  },
  {
    "id": "fp-125.2",
    "nomorUrut": 125.2,
    "tanggal": "29 Mei 2026",
    "tipeForm": "Belanja Pegawai",
    "nomorForm": "B-125.2/7301/KU.350/2026",
    "perihal": "Lembur Administrasi Persiapan Pelatihan Petugas SE2026 BPS Kabupaten Kepulauan Selayar"
  },
  {
    "id": "fp-125.3",
    "nomorUrut": 125.3,
    "tanggal": "29 Mei 2026",
    "tipeForm": "Belanja Pegawai",
    "nomorForm": "B-125.3/7301/KU.350/2026",
    "perihal": "Lembur Administrasi Persiapan Pelatihan Petugas SE2026 BPS Kabupaten Kepulauan Selayar untuk 3 pegawai"
  },
  {
    "id": "fp-125.4",
    "nomorUrut": 125.4,
    "tanggal": "29 Mei 2026",
    "tipeForm": "Belanja Pegawai",
    "nomorForm": "B-125.4/7301/KU.350/2026",
    "perihal": "Lembur Administrasi Persiapan Pelatihan Petugas SE2026 BPS Kabupaten Kepulauan Selayar untuk 1 PPPK"
  },
  {
    "id": "fp-126",
    "nomorUrut": 126,
    "tanggal": "2 Juni 2026",
    "tipeForm": "Belanja Pegawai",
    "nomorForm": "B-126/7301/KU.350/2026",
    "perihal": "Gaji PNS Bulan Juli Tahun 2026"
  },
  {
    "id": "fp-127",
    "nomorUrut": 127,
    "tanggal": "2 Juni 2026",
    "tipeForm": "Belanja Pegawai",
    "nomorForm": "B-127/7301/KU.350/2026",
    "perihal": "Gaji PPPK Bulan Juli Tahun 2026"
  },
  {
    "id": "fp-128",
    "nomorUrut": 128,
    "tanggal": "2 Juni 2026",
    "tipeForm": "Belanja Pegawai",
    "nomorForm": "B-128/7301/KU.350/2026",
    "perihal": "Tukin PNS Bulan Mei Tahun 2026"
  },
  {
    "id": "fp-129",
    "nomorUrut": 129,
    "tanggal": "2 Juni 2026",
    "tipeForm": "Belanja Pegawai",
    "nomorForm": "B-129/7301/KU.350/2026",
    "perihal": "Tukin PPPK Bulan Mei Tahun 2026"
  },
  {
    "id": "fp-130",
    "nomorUrut": 130,
    "tanggal": "2 Juni 2026",
    "tipeForm": "Belanja Pegawai",
    "nomorForm": "B-130/7301/KU.350/2026",
    "perihal": "Uang Makan PNS Bulan Mei Tahun 2026"
  },
  {
    "id": "fp-131",
    "nomorUrut": 131,
    "tanggal": "2 Juni 2026",
    "tipeForm": "Belanja Pegawai",
    "nomorForm": "B-131/7301/KU.350/2026",
    "perihal": "Uang Makan PPPK Bulan Mei Tahun 2026"
  },
  {
    "id": "fp-132",
    "nomorUrut": 132,
    "tanggal": "2 Juni 2026",
    "tipeForm": "Belanja Barang",
    "nomorForm": "B-132/7301/KU.320/2026",
    "perihal": "Honor Pengelola Kuangan Bulan Mei 2026 untuk 4 Pegawai"
  },
  {
    "id": "fp-133",
    "nomorUrut": 133,
    "tanggal": "2 Juni 2026",
    "tipeForm": "Belanja Barang",
    "nomorForm": "B-133/7301/KU.320/2026",
    "perihal": "Pembayaran belanja barang berupa tagihan telepon bulan Juni 2026 untuk 2 invoice"
  },
  {
    "id": "fp-134",
    "nomorUrut": 134,
    "tanggal": "2 Juni 2026",
    "tipeForm": "Belanja Barang",
    "nomorForm": "B-134/7301/KU.320/2026",
    "perihal": "Pembayaran belanja barang berupa tagihan listrik bulan Juni 2026 untuk 1 invoice"
  },
  {
    "id": "fp-134.1",
    "nomorUrut": 134.1,
    "tanggal": "2 Juni 2026",
    "tipeForm": "Belanja Barang",
    "nomorForm": "B- 134.1/7301/KU.320/2026",
    "perihal": "Honor Petugas Pendataan Survei Konversi Gabah ke Beras (SKGB) -  Penggilingan Tahun 2026"
  },
  {
    "id": "fp-134.2",
    "nomorUrut": 134.2,
    "tanggal": "2 Juni 2026",
    "tipeForm": "Belanja Bahan",
    "nomorForm": "B-134.2/7301/KU.310/2026",
    "perihal": "Pengadaan Kuesioner SERUTI inti Triwulan 2 Tahun 2026"
  },
  {
    "id": "fp-134.3",
    "nomorUrut": 134.3,
    "tanggal": "2 Juni 2026",
    "tipeForm": "Belanja Jasa",
    "nomorForm": "B-134.3/7301/KU.330/2026",
    "perihal": "Pembayaran Belanja Barang berupa pengadaan Jasa Kebersihan Th 2026 Termin IV"
  },
  {
    "id": "fp-134.4",
    "nomorUrut": 134.4,
    "tanggal": "2 Juni 2026",
    "tipeForm": "Belanja Barang",
    "nomorForm": "B-134.4/7301/KU.320/2026",
    "perihal": "Pembayaran Belanja Barang Berupa Pengadaan Pakaian Seragam Pegawai BPS Kabupaten Kepulauan Selayar Tahun 2026"
  },
  {
    "id": "fp-134.5",
    "nomorUrut": 134.5,
    "tanggal": "2 Juni 2026",
    "tipeForm": "Belanja Barang",
    "nomorForm": "B-134.5/7301/KU.320/2026",
    "perihal": "Pembayaran Belanja barang berupa Keperluan sehari-hari perkantoran / keperluan dapur dan makan/ kotak P3K dan isinya"
  },
  {
    "id": "fp-134.6",
    "nomorUrut": 134.6,
    "tanggal": "2 Juni 2026",
    "tipeForm": "Belanja Barang",
    "nomorForm": "B-134.6/7301/KU.320/2026",
    "perihal": "Pembayarana Belanja barang berupa pemeliharaan kendaraan operasional eselon III/Pemeliharaan AC"
  },
  {
    "id": "fp-135",
    "nomorUrut": 135,
    "tanggal": "5 Juni 2026",
    "tipeForm": "Belanja Perjalanan",
    "nomorForm": "B-135/7301/KU.340/2026",
    "perihal": "Konsultasi Administrasi Pengolahan Susenas Maret dan Seruti Triwulan I 2026 dan Persiapan Pengolahan Susenas September 2026"
  },
  {
    "id": "fp-136",
    "nomorUrut": 136,
    "tanggal": "5 Juni 2026",
    "tipeForm": "Belanja Perjalanan",
    "nomorForm": "B-136/7301/KU.340/2026",
    "perihal": "Konsultasi Administrasi Kegiatan Sakernas Februari dan Mei Tahun 2026 Serta Persiapan Kegiatan Sakernas Agustus 2026"
  },
  {
    "id": "fp-137",
    "nomorUrut": 137,
    "tanggal": "5 Juni 2026",
    "tipeForm": "Belanja Barang",
    "nomorForm": "B-137/7301/KU.320/2026",
    "perihal": "Honor Petugas VHTS Juni 2026"
  },
  {
    "id": "fp-138",
    "nomorUrut": 138,
    "tanggal": "5 Juni 2026",
    "tipeForm": "Belanja Barang",
    "nomorForm": "B-138/7301/KU.320/2026",
    "perihal": "Honor Petufas SHP Mei Juni 2026"
  },
  {
    "id": "fp-139",
    "nomorUrut": 139,
    "tanggal": "5 Juni 2026",
    "tipeForm": "Belanja Barang",
    "nomorForm": "B-139/7301/KU.320/2026",
    "perihal": "Honor SHPB Mei - Juni 2026"
  },
  {
    "id": "fp-140",
    "nomorUrut": 140,
    "tanggal": "8 Juni 2026",
    "tipeForm": "Belanja Barang",
    "nomorForm": "B-140/7301/KU.320/2026",
    "perihal": "Honor Pemutakhiran Sakernas Mei Tahun 2026"
  },
  {
    "id": "fp-141",
    "nomorUrut": 141,
    "tanggal": "8 Juni 2026",
    "tipeForm": "Belanja Barang",
    "nomorForm": "B-141/7301/KU.320/2026",
    "perihal": "Honor Pendataan Sakernas Mei 2026"
  },
  {
    "id": "fp-142",
    "nomorUrut": 142,
    "tanggal": "12 Juni 2026",
    "tipeForm": "Belanja Barang",
    "nomorForm": "B-142/7301/KU.320/2026",
    "perihal": "Honor Pengajar SE2026"
  },
  {
    "id": "fp-142.1",
    "nomorUrut": 142.1,
    "tanggal": "12 Juni 2026",
    "tipeForm": "Belanja Jasa",
    "nomorForm": "B-142.1/7301/KU.330/2026",
    "perihal": "Pengadaan Asuransi Petugas SE2026"
  },
  {
    "id": "fp-142.2",
    "nomorUrut": 142.2,
    "tanggal": "12 Juni 2026",
    "tipeForm": "Belanja Perjalanan",
    "nomorForm": "B-142.2/7301/KU.340/2026",
    "perihal": "Perjalanan Pendampingan Petugas SE2026 Bulan Juni Lebih dari 8 Jam"
  },
  {
    "id": "fp-142.3",
    "nomorUrut": 142.3,
    "tanggal": "12 Juni 2026",
    "tipeForm": "Belanja Perjalanan",
    "nomorForm": "B-142.3/7301/KU.340/2026",
    "perihal": "Perjalanan Pendampingan Petugas SE2026 Bulan Juni Kurang dari 8 Jam"
  },
  {
    "id": "fp-142.4",
    "nomorUrut": 142.4,
    "tanggal": "12 Juni 2026",
    "tipeForm": "Belanja Perjalanan",
    "nomorForm": "B-142.4/7301/KU.340/2026",
    "perihal": "Translok Petermuan Petugas"
  },
  {
    "id": "fp-142.5",
    "nomorUrut": 142.5,
    "tanggal": "12 Juni 2026",
    "tipeForm": "Belanja Bahan",
    "nomorForm": "B-142.5/7301/KU.310/2026",
    "perihal": "Konsumsi Petermuan Petugas"
  },
  {
    "id": "fp-143",
    "nomorUrut": 143,
    "tanggal": "17 Juni 2026",
    "tipeForm": "Belanja Bahan",
    "nomorForm": "B-143/7301/KU.310/2026",
    "perihal": "Paket data Internet Petugas SE2026 Tahap 1 [Bulan Pertama]"
  },
  {
    "id": "fp-144",
    "nomorUrut": 144,
    "tanggal": "19 Juni 2026",
    "tipeForm": "Belanja Bahan",
    "nomorForm": "B-144/7301/KU.310/2026",
    "perihal": "Konsumi Pencanangan Sensus Ekonomi 2026"
  },
  {
    "id": "fp-145",
    "nomorUrut": 145,
    "tanggal": "19 Juni 2026",
    "tipeForm": "Belanja Bahan",
    "nomorForm": "B-145/7301/KU.310/2026",
    "perihal": "Dummy Kartu BPJS Pencanangan Sensus Ekonomi 2026"
  },
  {
    "id": "fp-146",
    "nomorUrut": 146,
    "tanggal": "19 Juni 2026",
    "tipeForm": "Belanja Bahan",
    "nomorForm": "B-146/7301/KU.310/2026",
    "perihal": "Map Batik Pencanangan Sensus Ekonomi 2026"
  },
  {
    "id": "fp-146.1",
    "nomorUrut": 146.1,
    "tanggal": "19 Juni 2026",
    "tipeForm": "Belanja Barang",
    "nomorForm": "B-146.1/7301/KU.320/2026",
    "perihal": "Honor Pendataan KSA Padi Juni 2026"
  },
  {
    "id": "fp-146.2",
    "nomorUrut": 146.2,
    "tanggal": "19 Juni 2026",
    "tipeForm": "Belanja Barang",
    "nomorForm": "B-146.2/7301/KU.320/2026",
    "perihal": "Honor Pendataan KSA Jagung Juni 2026"
  },
  {
    "id": "fp-146.3",
    "nomorUrut": 146.3,
    "tanggal": "22 Juni 2026",
    "tipeForm": "Belanja Bahan",
    "nomorForm": "B-146.3/7301/KU.310/2026",
    "perihal": "Konsumsi Pembinaan Descan"
  },
  {
    "id": "fp-147",
    "nomorUrut": 147,
    "tanggal": "26 Juni 2026",
    "tipeForm": "Belanja Perjalanan",
    "nomorForm": "B-147/7301/KU.340/2026",
    "perihal": "Transport Lokal Rapat Pertemuan Petugas SE2026 Kecamatan Bontoharu"
  },
  {
    "id": "fp-148",
    "nomorUrut": 148,
    "tanggal": "26 Juni 2026",
    "tipeForm": "Belanja Perjalanan",
    "nomorForm": "B-148/7301/KU.340/2026",
    "perihal": "Transport Lokal Rapat Pertemuan Petugas SE2026 Kecamatan Takabonerate"
  },
  {
    "id": "fp-149",
    "nomorUrut": 149,
    "tanggal": "26 Juni 2026",
    "tipeForm": "Belanja Perjalanan",
    "nomorForm": "B-149/7301/KU.340/2026",
    "perihal": "Transport Lokal Rapat Pertemuan Petugas SE2026 Kecamatan Pasimarannu"
  },
  {
    "id": "fp-150",
    "nomorUrut": 150,
    "tanggal": "26 Juni 2026",
    "tipeForm": "Belanja Perjalanan",
    "nomorForm": "B-150/7301/KU.340/2026",
    "perihal": "Transport Lokal Rapat Pertemuan Petugas SE2026 Kecamatan Pasimasunggu"
  },
  {
    "id": "fp-150.1",
    "nomorUrut": 150.1,
    "tanggal": "26 Juni 2026",
    "tipeForm": "Belanja Perjalanan",
    "nomorForm": "B-150.1/7301/KU.340/2026",
    "perihal": "Transport Lokal Rapat Pertemuan Petugas SE2026 Kecamatan Pasimasunggu Timur"
  },
  {
    "id": "fp-151",
    "nomorUrut": 151,
    "tanggal": "26 Juni 2026",
    "tipeForm": "Belanja Barang",
    "nomorForm": "B-151/7301/KU.320/2026",
    "perihal": "Honor Petugas Pengolahan Seruti Triwulan II 2026"
  },
  {
    "id": "fp-152",
    "nomorUrut": 152,
    "tanggal": "26 Juni 2026",
    "tipeForm": "Belanja Perjalanan",
    "nomorForm": "B-152/7301/KU.340/2026",
    "perihal": "Transport Lokal Rapat Pertemuan Petugas SE2026 Kecamatan Buki"
  },
  {
    "id": "fp-153",
    "nomorUrut": 153,
    "tanggal": "26 Juni 2026",
    "tipeForm": "Belanja Perjalanan",
    "nomorForm": "B-153/7301/KU.340/2026",
    "perihal": "Transport Lokal Rapat Pertemuan Petugas SE2026 Kecamatan Bontomanai"
  },
  {
    "id": "fp-154",
    "nomorUrut": 154,
    "tanggal": "26 Juni 2026",
    "tipeForm": "Belanja Perjalanan",
    "nomorForm": "B-154/7301/KU.340/2026",
    "perihal": "Transport Lokal Rapat Pertemuan Petugas SE2026 Kecamatan Benteng"
  },
  {
    "id": "fp-155",
    "nomorUrut": 155,
    "tanggal": "26 Juni 2026",
    "tipeForm": "Belanja Bahan",
    "nomorForm": "B-155/7301/KU.310/2026",
    "perihal": "Konsumsi Rapat Pertemuan Petugas SE2026 Kecamatan Benteng"
  },
  {
    "id": "fp-156",
    "nomorUrut": 156,
    "tanggal": "1 Juli 2026",
    "tipeForm": "Belanja Perjalanan",
    "nomorForm": "B-156/7301/KU.340/2026",
    "perihal": "Rapat Koordinasi dalam Rangka Kunjungan Kerja Panitia Kerja RUU Tentang Statistik Komisi X DPR RI"
  },
  {
    "id": "fp-159",
    "nomorUrut": 159,
    "tanggal": "1 Juli 2026",
    "tipeForm": "Belanja Pegawai",
    "nomorForm": "B-159/7301/KU.350/2026",
    "perihal": "Gaji PNS Bulan Agustus Tahun 2026"
  },
  {
    "id": "fp-160",
    "nomorUrut": 160,
    "tanggal": "1 Juli 2026",
    "tipeForm": "Belanja Pegawai",
    "nomorForm": "B-160/7301/KU.350/2026",
    "perihal": "Gaji PPPK Bulan Agustus Tahun 2026"
  },
  {
    "id": "fp-161",
    "nomorUrut": 161,
    "tanggal": "1 Juli 2026",
    "tipeForm": "Belanja Pegawai",
    "nomorForm": "B-161/7301/KU.350/2026",
    "perihal": "Tukin PNS Bulan Juni Tahun 2026"
  },
  {
    "id": "fp-162",
    "nomorUrut": 162,
    "tanggal": "1 Juli 2026",
    "tipeForm": "Belanja Pegawai",
    "nomorForm": "B-162/7301/KU.350/2026",
    "perihal": "Tukin PPPK Bulan Juni Tahun 2026"
  },
  {
    "id": "fp-163",
    "nomorUrut": 163,
    "tanggal": "1 Juli 2026",
    "tipeForm": "Belanja Pegawai",
    "nomorForm": "B-163/7301/KU.350/2026",
    "perihal": "Uang Makan PNS Bulan Juni Tahun 2026"
  },
  {
    "id": "fp-164",
    "nomorUrut": 164,
    "tanggal": "1 Juli 2026",
    "tipeForm": "Belanja Pegawai",
    "nomorForm": "B-164/7301/KU.350/2026",
    "perihal": "Uang Makan PPPK Bulan Juni Tahun 2026"
  },
  {
    "id": "fp-165",
    "nomorUrut": 165,
    "tanggal": "1 Juli 2026",
    "tipeForm": "Belanja Barang",
    "nomorForm": "B-165/7301/KU.320/2026",
    "perihal": "Honor Pengelola Kuangan Bulan Juni 2026 untuk 4 Pegawai"
  },
  {
    "id": "fp-166",
    "nomorUrut": 166,
    "tanggal": "1 Juli 2026",
    "tipeForm": "Belanja Barang",
    "nomorForm": "B-166/7301/KU.320/2026",
    "perihal": "Pembayaran belanja barang berupa tagihan telepon bulan Juli 2026 untuk 2 invoice"
  },
  {
    "id": "fp-167",
    "nomorUrut": 167,
    "tanggal": "1 Juli 2026",
    "tipeForm": "Belanja Barang",
    "nomorForm": "B-167/7301/KU.320/2026",
    "perihal": "Pembayaran belanja barang berupa tagihan listrik bulan Juli 2026 untuk 1 invoice"
  },
  {
    "id": "fp-167.1",
    "nomorUrut": 167.1,
    "tanggal": "1 Juli 2026",
    "tipeForm": "Belanja Barang",
    "nomorForm": "B-167.1/7301/KU.320/2026",
    "perihal": "Pembayaran Belanja barang berupa Keperluan sehari-hari perkantoran / keperluan dapur dan makan"
  },
  {
    "id": "fp-167.2",
    "nomorUrut": 167.2,
    "tanggal": "1 Juli 2026",
    "tipeForm": "Belanja Barang",
    "nomorForm": "B-167.2/7301/KU.320/2026",
    "perihal": "Pembayarana Belanja barang berupa pemeliharaan kendaraan operasional eselon III"
  },
  {
    "id": "fp-168",
    "nomorUrut": 168,
    "tanggal": "1 Juli 2026",
    "tipeForm": "Belanja Barang",
    "nomorForm": "B-168/7301/KU.320/2026",
    "perihal": "Honor Petugas Pendataaan Seruti Triwulan II tahun 2026"
  },
  {
    "id": "fp-169",
    "nomorUrut": 169,
    "tanggal": "1 Juli 2026",
    "tipeForm": "Belanja Barang",
    "nomorForm": "B-169/7301/KU.320/2026",
    "perihal": "Honor Petugas VHTS Juli 2026"
  },
  {
    "id": "fp-170",
    "nomorUrut": 170,
    "tanggal": "1 Juli 2026",
    "tipeForm": "Belanja Barang",
    "nomorForm": "B-170/7301/KU.320/2026",
    "perihal": "Honor Petugas SHP Juli"
  },
  {
    "id": "fp-171",
    "nomorUrut": 171,
    "tanggal": "1 Juli 2026",
    "tipeForm": "Belanja Barang",
    "nomorForm": "B-171/7301/KU.320/2026",
    "perihal": "Honor Petugas SHPB"
  },
  {
    "id": "fp-172",
    "nomorUrut": 172,
    "tanggal": "1 Juli 2026",
    "tipeForm": "Belanja Barang",
    "nomorForm": "B-172/7301/KU.320/2026",
    "perihal": "Honor Petugas SPUNP Tw II"
  },
  {
    "id": "fp-173",
    "nomorUrut": 173,
    "tanggal": "1 Juli 2026",
    "tipeForm": "Belanja Bahan",
    "nomorForm": "B-173/7301/KU.310/2026",
    "perihal": "Konsumsi Pertemuan Petugas SE2026 ke 2"
  },
  {
    "id": "fp-174",
    "nomorUrut": 174,
    "tanggal": "1 Juli 2026",
    "tipeForm": "Belanja Barang",
    "nomorForm": "B-174/7301/KU.320/2026",
    "perihal": "honor Pendataan VKOMSTRAT Tw 2 2026"
  },
  {
    "id": "fp-174.1",
    "nomorUrut": 174.1,
    "tanggal": "1 Juli 2026",
    "tipeForm": "Belanja Jasa",
    "nomorForm": "B-174.1/7301/KU.330/2026",
    "perihal": "Pembayaran Belanja Barang berupa pengadaan Jasa Kebersihan Th 2026 Termin V"
  },
  {
    "id": "fp-174.2",
    "nomorUrut": 174.2,
    "tanggal": "1 Juli 2026",
    "tipeForm": "Belanja Jasa",
    "nomorForm": "B-174.2/7301/KU.330/2026",
    "perihal": "Pembayaran Belanja Barang berupa pengadaan Jasa Kebersihan Th 2026 Termin VI"
  },
  {
    "id": "fp-174.1",
    "nomorUrut": 174.1,
    "tanggal": "9 Juli 2026",
    "tipeForm": "Belanja Perjalanan",
    "nomorForm": "B-174.1/7301/KU.340/2026",
    "perihal": "Perjalanan Pelatihan Petugas Sakernas Agustus 2026 Gelombang 1"
  },
  {
    "id": "fp-174.2",
    "nomorUrut": 174.2,
    "tanggal": "9 Juli 2026",
    "tipeForm": "Belanja Perjalanan",
    "nomorForm": "B-174.2/7301/KU.340/2026",
    "perihal": "Perjalanan Pelatihan Petugas Sakernas Agustus 2026 Gelombang 2"
  },
  {
    "id": "fp-174.3",
    "nomorUrut": 174.3,
    "tanggal": "9 Juli 2026",
    "tipeForm": "Belanja Barang",
    "nomorForm": "B-174.3/7301/KU.320/2026",
    "perihal": "Pembayaran Belanja barang berupa Keperluan sehari-hari perkantoran / pengiriman dokumen / Iuran Sampah / Iuran Air PDAM"
  },
  {
    "id": "fp-174.4",
    "nomorUrut": 174.4,
    "tanggal": "9 Juli 2026",
    "tipeForm": "Belanja Barang",
    "nomorForm": "B-174.4/7301/KU.320/2026",
    "perihal": "Pembayaran Belanja barang berupa pemeliharaan kendaraan operasional eselon III /Pemeliharann Gedung Kantor / Pemeliharaan Komputer"
  },
  {
    "id": "fp-174.5",
    "nomorUrut": 174.5,
    "tanggal": "9 Juli 2026",
    "tipeForm": "Belanja Barang",
    "nomorForm": "B-174.5/7301/KU.320/2026",
    "perihal": "Pembayaran Belanja barang berupa pengadaan ATK"
  },
  {
    "id": "fp-175",
    "nomorUrut": 175,
    "tanggal": "15 Juli 2026",
    "tipeForm": "Belanja Barang",
    "nomorForm": "B-175/7301/KU.320/2026",
    "perihal": "Honor Pendataan KSA Padi Juli 2026"
  },
  {
    "id": "fp-175.1",
    "nomorUrut": 175.1,
    "tanggal": "16 Juli 2026",
    "tipeForm": "Belanja Bahan",
    "nomorForm": "B-175.1/7301/KU.310/2026",
    "perihal": "Paket data Internet Petugas SE2026 Tahap 2 [Bulan Kedua]"
  },
  {
    "id": "fp-176",
    "nomorUrut": 176,
    "tanggal": "15 Juli 2026",
    "tipeForm": "Belanja Barang",
    "nomorForm": "B-176/7301/KU.320/2026",
    "perihal": "Honor Pendataan KSA Jagung Juli 2026"
  },
  {
    "id": "fp-177",
    "nomorUrut": 177,
    "tanggal": "20 Juli 2026",
    "tipeForm": "Belanja Barang",
    "nomorForm": "B-177/7301/KU.320/2026",
    "perihal": "Honor Petugas Pencacahan Lapangan (PCL)  SE2026 Termin 1"
  },
  {
    "id": "fp-178",
    "nomorUrut": 178,
    "tanggal": "20 Juli 2026",
    "tipeForm": "Belanja Barang",
    "nomorForm": "B-178/7301/KU.320/2026",
    "perihal": "Honor Petugas Pemeriksa Lapangan (PML) SE2026 Termin 1"
  },
  {
    "id": "fp-179",
    "nomorUrut": 179,
    "tanggal": "20 Juli 2026",
    "tipeForm": "Belanja Barang",
    "nomorForm": "B-179/7301/KU.320/2026",
    "perihal": "Honor Petugas Pencacahan Lapangan (PCL) UB SE2026"
  },
  {
    "id": "fp-180",
    "nomorUrut": 180,
    "tanggal": "20 Juli 2026",
    "tipeForm": "Belanja Barang",
    "nomorForm": "B-180/7301/KU.320/2026",
    "perihal": "Honor Petugas Pemeriksa Lapangan (PML) UB SE2026"
  },
  {
    "id": "fp-181",
    "nomorUrut": 181,
    "tanggal": "22 Juli 2026",
    "tipeForm": "Belanja Barang",
    "nomorForm": "B-181/7301/KU.320/2026",
    "perihal": "Transport Lokal Peserta Pelatihan Sakernas Agustus 2026"
  },
  {
    "id": "fp-182",
    "nomorUrut": 182,
    "tanggal": "27 Juli 2026",
    "tipeForm": "Belanja Perjalanan",
    "nomorForm": "B-182/7301/KU.340/2026",
    "perihal": "Transport Lokal Rapat Pertemuan Petugas SE2026 Kecamatan Benteng 2"
  },
  {
    "id": "fp-183",
    "nomorUrut": 183,
    "tanggal": "27 Juli 2026",
    "tipeForm": "Belanja Perjalanan",
    "nomorForm": "B-183/7301/KU.340/2026",
    "perihal": "Transport Lokal Rapat Pertemuan Ke-II Petugas SE2026 Kecamatan Bontomatene"
  },
  {
    "id": "fp-184",
    "nomorUrut": 184,
    "tanggal": "27 Juli 2026",
    "tipeForm": "Belanja Perjalanan",
    "nomorForm": "B-184/7301/KU.340/2026",
    "perihal": "Transport Lokal Rapat Pertemuan Ke-II Petugas SE2026 Kecamatan Takabonerate"
  },
  {
    "id": "fp-185",
    "nomorUrut": 185,
    "tanggal": "27 Juli 2026",
    "tipeForm": "Belanja Perjalanan",
    "nomorForm": "B-185/7301/KU.340/2026",
    "perihal": "Transport Lokal Rapat Pertemuan Ke-II Petugas SE2026 Kecamatan Pasimarannu"
  },
  {
    "id": "fp-186",
    "nomorUrut": 186,
    "tanggal": "27 Juli 2026",
    "tipeForm": "Belanja Perjalanan",
    "nomorForm": "B-186/7301/KU.340/2026",
    "perihal": "Transport Lokal Rapat Pertemuan Ke-II Petugas SE2026 Kecamatan Pasimasunggu"
  },
  {
    "id": "fp-187",
    "nomorUrut": 187,
    "tanggal": "27 Juli 2026",
    "tipeForm": "Belanja Barang",
    "nomorForm": "B-187/7301/KU.320/2026",
    "perihal": "Honor Pengajar Sakernas Agustus 2026"
  },
  {
    "id": "fp-187.1",
    "nomorUrut": 187.1,
    "tanggal": "27 Juli 2026",
    "tipeForm": "Belanja Barang",
    "nomorForm": "B-187.1/7301/KU.320/2026",
    "perihal": "Transport Lokal Rapat Pertemuan Ke-II Petugas SE2026 Kecamatan Bontoharu"
  },
  {
    "id": "fp-187.2",
    "nomorUrut": 187.2,
    "tanggal": "29 Juli 2026",
    "tipeForm": "Belanja Barang",
    "nomorForm": "B-187.2/7301/KU.320/2026",
    "perihal": "Transport Lokal Rapat Pertemuan Ke-II Petugas SE2026 Kecamatan Bontomanai"
  },
  {
    "id": "fp-188",
    "nomorUrut": 188,
    "tanggal": "31 Juli 2026",
    "tipeForm": "Belanja Pegawai",
    "nomorForm": "B-188/7301/KU.350/2026",
    "perihal": "Lembur Perbaikan Anomali SE2026 Data Bulan Juni-Juli"
  },
  {
    "id": "fp-189",
    "nomorUrut": 189,
    "tanggal": "31 Juli 2026",
    "tipeForm": "Belanja Barang",
    "nomorForm": "B-189/7301/KU.320/2026",
    "perihal": "Honor Petugas Pencacahan Lapangan (PCL) SE2026 Termin 1 Batch 2 (Nur Immawati)"
  },
  {
    "id": "fp-190",
    "nomorUrut": 190,
    "tanggal": "31 Juli 2026",
    "tipeForm": "Belanja Barang",
    "nomorForm": "B-190/7301/KU.320/2026",
    "perihal": "Honor Petugas IMK Triwulan II 2026"
  },
  {
    "id": "fp-191",
    "nomorUrut": 191,
    "tanggal": "31 Juli 2026",
    "tipeForm": "Belanja Pegawai",
    "nomorForm": "B-191/7301/KU.350/2026",
    "perihal": "Lembur Seleksi Wawancara Magang Batch 1 BPS Kabupaten Kepulauan Selayar-PNS"
  },
  {
    "id": "fp-191.1",
    "nomorUrut": 191.1,
    "tanggal": "31 Juli 2026",
    "tipeForm": "Belanja Pegawai",
    "nomorForm": "B-191.1/7301/KU.350/2026",
    "perihal": "Lembur Seleksi Wawancara Magang Batch 1 BPS Kabupaten Kepulauan Selayar-PPPK"
  },
  {
    "id": "fp-192",
    "nomorUrut": 192,
    "tanggal": "3 Agustus 2026",
    "tipeForm": "Belanja Pegawai",
    "nomorForm": "B-192/7301/KU.350/2026",
    "perihal": "Gaji PPPK Bulan September Tahun 2026"
  },
  {
    "id": "fp-193",
    "nomorUrut": 193,
    "tanggal": "3 Agustus 2026",
    "tipeForm": "Belanja Pegawai",
    "nomorForm": "B-193/7301/KU.350/2026",
    "perihal": "Gaji PNS Bulan September Tahun 2026"
  },
  {
    "id": "fp-194",
    "nomorUrut": 194,
    "tanggal": "3 Agustus 2026",
    "tipeForm": "Belanja Pegawai",
    "nomorForm": "B-194/7301/KU.350/2026",
    "perihal": "Tukin PNS Bulan Juli  Tahun 2026"
  },
  {
    "id": "fp-195",
    "nomorUrut": 195,
    "tanggal": "3 Agustus 2026",
    "tipeForm": "Belanja Pegawai",
    "nomorForm": "B-195/7301/KU.350/2026",
    "perihal": "Tukin PPPK Bulan Juli Tahun 2026"
  },
  {
    "id": "fp-196",
    "nomorUrut": 196,
    "tanggal": "3 Agustus 2026",
    "tipeForm": "Belanja Pegawai",
    "nomorForm": "B-196/7301/KU.350/2026",
    "perihal": "Uang Makan PNS Bulan Juli Tahun 2026"
  },
  {
    "id": "fp-197",
    "nomorUrut": 197,
    "tanggal": "3 Agustus 2026",
    "tipeForm": "Belanja Pegawai",
    "nomorForm": "B-197/7301/KU.350/2026",
    "perihal": "Uang Makan PPPK Bulan Juli Tahun 2026"
  },
  {
    "id": "fp-198",
    "nomorUrut": 198,
    "tanggal": "3 Agustus 2026",
    "tipeForm": "Belanja Barang",
    "nomorForm": "B-198/7301/KU.320/2026",
    "perihal": "Honor Pengelola Kuangan Bulan Juli 2026 untuk 4 Pegawai"
  },
  {
    "id": "fp-199",
    "nomorUrut": 199,
    "tanggal": "3 Agustus 2026",
    "tipeForm": "Belanja Barang",
    "nomorForm": "B-199/7301/KU.320/2026",
    "perihal": "Pembayaran belanja barang berupa tagihan telepon bulan Agustus 2026 untuk 2 invoice"
  },
  {
    "id": "fp-200",
    "nomorUrut": 200,
    "tanggal": "3 Agustus 2026",
    "tipeForm": "Belanja Barang",
    "nomorForm": "B-200/7301/KU.320/2026",
    "perihal": "Pembayaran belanja barang berupa tagihan listrik bulan Agustus 2026 untuk 1 invoice"
  },
  {
    "id": "fp-200.1",
    "nomorUrut": 200.1,
    "tanggal": "3 Agustus 2026",
    "tipeForm": "Belanja Barang",
    "nomorForm": "B-200.1/7301/KU.320/2026",
    "perihal": "Pembayaran Belanja barang berupa pemeliharaan kendaraan operasional eselon III"
  },
  {
    "id": "fp-200.2",
    "nomorUrut": 200.2,
    "tanggal": "3 Agustus 2026",
    "tipeForm": "Belanja Barang",
    "nomorForm": "B-200.2/7301/KU.320/2026",
    "perihal": "Pembayaran Belanja barang berupa Keperluan sehari-hari perkantoran"
  },
  {
    "id": "fp-200.3",
    "nomorUrut": 200.3,
    "tanggal": "3 Agustus 2026",
    "tipeForm": "Belanja Bahan",
    "nomorForm": "B-200.3/7301/KU.310/2026",
    "perihal": "Pembayaran Belanja bahan Konsumsi Kegiatan Pembinaan Kelurahan Cinta Statistik Tahun 2026"
  },
  {
    "id": "fp-200.4",
    "nomorUrut": 200.4,
    "tanggal": "3 Agustus 2026",
    "tipeForm": "Belanja Barang",
    "nomorForm": "B-200.4/7301/KU.320/2026",
    "perihal": "Pembayaran Belanja barang berupa Pengadaan ATK untuk persediaan"
  },
  {
    "id": "fp-201",
    "nomorUrut": 201,
    "tanggal": "3 Agustus 2026",
    "tipeForm": "Belanja Barang",
    "nomorForm": "B-201/7301/KU.320/2026",
    "perihal": "Honor Pendataan SKTH 2026"
  },
  {
    "id": "fp-202",
    "nomorUrut": 202,
    "tanggal": "3 Agustus 2026",
    "tipeForm": "Belanja Barang",
    "nomorForm": "B-202/7301/KU.320/2026",
    "perihal": "Honor Pendataan Galian URT 2026"
  },
  {
    "id": "fp-203",
    "nomorUrut": 203,
    "tanggal": "3 Agustus 2026",
    "tipeForm": "Belanja Perjalanan",
    "nomorForm": "B-203/7301/KU.340/2026",
    "perihal": "Transport Pendampingan Petugas SE2026 Desa Polassi"
  },
  {
    "id": "fp-204",
    "nomorUrut": 204,
    "tanggal": "3 Agustus 2026",
    "tipeForm": "Belanja Bahan",
    "nomorForm": "B-204/7301/KU.310/2026",
    "perihal": "Konsumsi Pembinaan Sektoral Seri #2"
  },
  {
    "id": "fp-204.1",
    "nomorUrut": 204.1,
    "tanggal": "3 Agustus 2026",
    "tipeForm": "Belanja Perjalanan",
    "nomorForm": "B-204.1/7301/KU.340/2026",
    "perihal": "Translok Petugas Pendataan SE2026 Dusun Tinabo Desa Rajuni dan Desa Rajuni Timur"
  },
  {
    "id": "fp-204.3",
    "nomorUrut": 204.3,
    "tanggal": "3 Agustus 2026",
    "tipeForm": "Belanja Barang",
    "nomorForm": "B-204.3/7301/KU.320/2026",
    "perihal": "Belanja Barang Berupa Honor Pengelolo SAI Bulan April-Juli untuk 4 orang pegawai tahun 2026"
  },
  {
    "id": "fp-204.4",
    "nomorUrut": 204.4,
    "tanggal": "3 Agustus 2026",
    "tipeForm": "Belanja Barang",
    "nomorForm": "B-204.4/7301/KU.320/2026",
    "perihal": "Pembayaran Belanja Barang Berupa Honorarium Pejabat Pengadaan Bulan MEI Tahun 2026 Untuk 1 Orang"
  },
  {
    "id": "fp-205",
    "nomorUrut": 205,
    "tanggal": "4 Agustus 2026",
    "tipeForm": "Meeting Dalam Kota",
    "nomorForm": "B-205/7301/KU.360/2026",
    "perihal": "Paket Meeting Fullday Pelatihan Petugas Susenas September dan Seruti TW III Tahun 2026"
  },
  {
    "id": "fp-206",
    "nomorUrut": 206,
    "tanggal": "4 Agustus 2026",
    "tipeForm": "Meeting Dalam Kota",
    "nomorForm": "B-206/7301/KU.360/2026",
    "perihal": "Perjalanan Pelatihan Petugas Susenas September dan Seruti TW III Tahun 2026"
  },
  {
    "id": "fp-206.1",
    "nomorUrut": 206.1,
    "tanggal": "4 Agustus 2026",
    "tipeForm": "Belanja Barang",
    "nomorForm": "B-206.1/7301/KU.320/2026",
    "perihal": "Honor Petugas Pendataan VHTS Agustus 2026"
  },
  {
    "id": "fp-206.2",
    "nomorUrut": 206.2,
    "tanggal": "10 Agustus 2026",
    "tipeForm": "Belanja Bahan",
    "nomorForm": "B-206.2/7301/KU.310/2026",
    "perihal": "Konsumsi Pelatihan Petugas SKP"
  },
  {
    "id": "fp-206.3",
    "nomorUrut": 206.3,
    "tanggal": "10 Agustus 2026",
    "tipeForm": "Belanja Bahan",
    "nomorForm": "B-206.3/7301/KU.310/2026",
    "perihal": "Perlengkapan Pelatihan Petugas SKP"
  },
  {
    "id": "fp-206.4",
    "nomorUrut": 206.4,
    "tanggal": "10 Agustus 2026",
    "tipeForm": "Belanja Barang",
    "nomorForm": "B-206.4/7301/KU.320/2026",
    "perihal": "Transport Pelatihan Petugas SKP"
  },
  {
    "id": "fp-207",
    "nomorUrut": 207,
    "tanggal": "24 Agustus 2026",
    "tipeForm": "Belanja Bahan",
    "nomorForm": "B-207/7301/KU.310/2026",
    "perihal": "Perlengkapan Pelatihan SKNP Tahun 2026"
  },
  {
    "id": "fp-208",
    "nomorUrut": 208,
    "tanggal": "24 Agustus 2026",
    "tipeForm": "Belanja Bahan",
    "nomorForm": "B-208/7301/KU.310/2026",
    "perihal": "Konsumsi Pelatihan SKNP Tahun 2026"
  },
  {
    "id": "fp-209",
    "nomorUrut": 209,
    "tanggal": "24 Agustus 2026",
    "tipeForm": "Belanja Perjalanan",
    "nomorForm": "B-209/7301/KU.340/2026",
    "perihal": "Transport Lokal Pelatihan SKNP Tahun 2026"
  },
  {
    "id": "fp-209.1",
    "nomorUrut": 209.1,
    "tanggal": "24 Agustus 2026",
    "tipeForm": "Belanja Barang",
    "nomorForm": "B-209.1/7301/KU.320/2026",
    "perihal": "Honor Pengajar SKNP 2026"
  },
  {
    "id": "fp-210",
    "nomorUrut": 210,
    "tanggal": "26 Agustus 2026",
    "tipeForm": "Belanja Barang",
    "nomorForm": "B-210/7301/KU.320/2026",
    "perihal": "Honor Pengajar Susenas September dan Seruti Triwulan III Tahun 2026"
  },
  {
    "id": "fp-211",
    "nomorUrut": 211,
    "tanggal": "26 Agustus 2026",
    "tipeForm": "Belanja Barang",
    "nomorForm": "B-211/7301/KU.320/2026",
    "perihal": "Honor Pendataan KSA Padi Agustus 2026"
  },
  {
    "id": "fp-212",
    "nomorUrut": 212,
    "tanggal": "26 Agustus 2026",
    "tipeForm": "Belanja Barang",
    "nomorForm": "B-212/7301/KU.320/2026",
    "perihal": "Honor Pendataan KSA Jagung Agsutus 2026"
  },
  {
    "id": "fp-212.1",
    "nomorUrut": 212.1,
    "tanggal": "27 Agustus 2026",
    "tipeForm": "Belanja Perjalanan",
    "nomorForm": "B-212.1/7301/KU.340/2026",
    "perihal": "Konsultasi Evaluasi Hasil Pendataan Sensus Ekonomi (SE2026) dirangkaikan dengan Harmonisasi EPSS Tahun 2026 di BPS Provinsi Sulawesi Selatan"
  },
  {
    "id": "fp-212.2",
    "nomorUrut": 212.2,
    "tanggal": "27 Agustus 2026",
    "tipeForm": "Belanja Pegawai",
    "nomorForm": "B-212.2/7301/KU.350/2026",
    "perihal": "Lembur Task Force Pendataan Sensus Ekonomi 2026"
  },
  {
    "id": "fp-213",
    "nomorUrut": 213,
    "tanggal": "31 Agustus 2026",
    "tipeForm": "Belanja Barang",
    "nomorForm": "B-213/7301/KU.320/2026",
    "perihal": "Honor Petugas Pendataan Lapangan (PCL) Sensus Ekonomi 2026 Termin 2"
  },
  {
    "id": "fp-214",
    "nomorUrut": 214,
    "tanggal": "31 Agustus 2026",
    "tipeForm": "Belanja Barang",
    "nomorForm": "B-214/7301/KU.320/2026",
    "perihal": "Honor Petugas Pendataan Lapangan (PCL) dan  Pemeriksaan Lapangan (PML) Sensus Ekonomi 2026 Termin 2"
  },
  {
    "id": "fp-215",
    "nomorUrut": 215,
    "tanggal": "31 Agustus 2026",
    "tipeForm": "Belanja Barang",
    "nomorForm": "B-215/7301/KU.320/2026",
    "perihal": "Honor Petugas Pemeriksaan Lapangan (PML) Sensus Ekonomi 2026 Termin 2"
  },
  {
    "id": "fp-216",
    "nomorUrut": 216,
    "tanggal": "31 Agustus 2026",
    "tipeForm": "Belanja Barang",
    "nomorForm": "B-216/7301/KU.320/2026",
    "perihal": "Honor Petugas Pemutakhiran Ubinan SR 3 2026"
  },
  {
    "id": "fp-217",
    "nomorUrut": 217,
    "tanggal": "31 Agustus 2026",
    "tipeForm": "Belanja Barang",
    "nomorForm": "B-217/7301/KU.320/2026",
    "perihal": "Transport Lokal Peserta Pelatihan Susenas September 2026"
  },
  {
    "id": "fp-218",
    "nomorUrut": 218,
    "tanggal": "31 Agustus 2026",
    "tipeForm": "Belanja Barang",
    "nomorForm": "B-218/7301/KU.320/2026",
    "perihal": "Honor Petugas Pendataan SKGB Pengeringan Tahun 2026"
  },
  {
    "id": "fp-219",
    "nomorUrut": 219,
    "tanggal": "31 Agustus 2026",
    "tipeForm": "Belanja Barang",
    "nomorForm": "B-219/7301/KU.320/2026",
    "perihal": "Perjalanan Pengawasan dan Pemeriksanaan Susenas Kurang dari 8 Jam"
  },
  {
    "id": "fp-220",
    "nomorUrut": 220,
    "tanggal": "1 September 2026",
    "tipeForm": "Belanja Pegawai",
    "nomorForm": "B-220/7301/KU.350/2026",
    "perihal": "Gaji PNS Bulan Oktober Tahun 2026"
  },
  {
    "id": "fp-221",
    "nomorUrut": 221,
    "tanggal": "1 September 2026",
    "tipeForm": "Belanja Pegawai",
    "nomorForm": "B-221/7301/KU.350/2026",
    "perihal": "Gaji PPPK Bulan Oktober Tahun 2026"
  },
  {
    "id": "fp-222",
    "nomorUrut": 222,
    "tanggal": "1 September 2026",
    "tipeForm": "Belanja Pegawai",
    "nomorForm": "B-222/7301/KU.350/2026",
    "perihal": "Tukin PNS Bulan Agustus  Tahun 2026"
  },
  {
    "id": "fp-223",
    "nomorUrut": 223,
    "tanggal": "1 September 2026",
    "tipeForm": "Belanja Pegawai",
    "nomorForm": "B-223/7301/KU.350/2026",
    "perihal": "Tukin PPPK Bulan Agustus Tahun 2026"
  },
  {
    "id": "fp-224",
    "nomorUrut": 224,
    "tanggal": "1 September 2026",
    "tipeForm": "Belanja Pegawai",
    "nomorForm": "B-224/7301/KU.350/2026",
    "perihal": "Uang Makan PNS Bulan Agustus Tahun 2026"
  },
  {
    "id": "fp-225",
    "nomorUrut": 225,
    "tanggal": "1 September 2026",
    "tipeForm": "Belanja Pegawai",
    "nomorForm": "B-225/7301/KU.350/2026",
    "perihal": "Uang Makan PPPK Bulan Agustus Tahun 2026"
  },
  {
    "id": "fp-226",
    "nomorUrut": 226,
    "tanggal": "1 September 2026",
    "tipeForm": "Belanja Barang",
    "nomorForm": "B-226/7301/KU.320/2026",
    "perihal": "Honor Pengelola Kuangan Bulan Agustus 2026 untuk 4 Pegawai"
  },
  {
    "id": "fp-226.1",
    "nomorUrut": 226.1,
    "tanggal": "1 September 2026",
    "tipeForm": "Belanja Jasa",
    "nomorForm": "B-226.1/7301/KU.330/2026",
    "perihal": "Pembayaran Belanja Barang berupa pengadaan Jasa Kebersihan Th 2026 Termin VII"
  },
  {
    "id": "fp-227",
    "nomorUrut": 227,
    "tanggal": "1 September 2026",
    "tipeForm": "Belanja Barang",
    "nomorForm": "B-227/7301/KU.320/2026",
    "perihal": "Pembayaran belanja barang berupa tagihan telepon bulan September 2026 untuk 2 invoice"
  },
  {
    "id": "fp-228",
    "nomorUrut": 228,
    "tanggal": "1 September 2026",
    "tipeForm": "Belanja Barang",
    "nomorForm": "B-228/7301/KU.320/2026",
    "perihal": "Pembayaran belanja barang berupa tagihan listrik bulan September 2026 untuk 1 invoice"
  },
  {
    "id": "fp-229",
    "nomorUrut": 229,
    "tanggal": "1 September 2026",
    "tipeForm": "Belanja Barang",
    "nomorForm": "B-229/7301/KU.320/2026",
    "perihal": "Honor Petugas Pedataan Lapangan SKNP 2026"
  },
  {
    "id": "fp-229.1",
    "nomorUrut": 229.1,
    "tanggal": "1 September 2026",
    "tipeForm": "Belanja Perjalanan",
    "nomorForm": "B-229.1/7301/KU.340/2026",
    "perihal": "Pengawasan Pendataan Lapangan SKNP 2026"
  },
  {
    "id": "fp-230",
    "nomorUrut": 230,
    "tanggal": "2 September 2026",
    "tipeForm": "Belanja Barang",
    "nomorForm": "B-230/7301/KU.320/2026",
    "perihal": "Honor Pemutakhiran Sakernas Agustus 2026"
  },
  {
    "id": "fp-231",
    "nomorUrut": 231,
    "tanggal": "2 September 2026",
    "tipeForm": "Belanja Barang",
    "nomorForm": "B-231/7301/KU.320/2026",
    "perihal": "Honor Pendataan Sakernas Agustus Tahun 2026"
  },
  {
    "id": "fp-232",
    "nomorUrut": 232,
    "tanggal": "2 September 2026",
    "tipeForm": "Belanja Barang",
    "nomorForm": "B-232/7301/KU.320/2026",
    "perihal": "Honor Pendataan K3"
  },
  {
    "id": "fp-233",
    "nomorUrut": 233,
    "tanggal": "2 September 2026",
    "tipeForm": "Belanja Barang",
    "nomorForm": "B-233/7301/KU.320/2026",
    "perihal": "Honor SLK KSP 2026"
  },
  {
    "id": "fp-234",
    "nomorUrut": 234,
    "tanggal": "2 September 2026",
    "tipeForm": "Belanja Barang",
    "nomorForm": "B-234/7301/KU.320/2026",
    "perihal": "Honor BUMD"
  },
  {
    "id": "fp-235",
    "nomorUrut": 235,
    "tanggal": "2 September 2026",
    "tipeForm": "Belanja Barang",
    "nomorForm": "B-235/7301/KU.320/2026",
    "perihal": "Honor Petugas Pendataan VHTS September"
  },
  {
    "id": "fp-236",
    "nomorUrut": 236,
    "tanggal": "2 September 2026",
    "tipeForm": "Belanja Barang",
    "nomorForm": "B-236/7301/KU.320/2026",
    "perihal": "Honor Petugas SHP September"
  },
  {
    "id": "fp-237",
    "nomorUrut": 237,
    "tanggal": "2 September 2026",
    "tipeForm": "Belanja Barang",
    "nomorForm": "B-237/7301/KU.320/2026",
    "perihal": "Honor Petugas SHPB September"
  },
  {
    "id": "fp-238",
    "nomorUrut": 238,
    "tanggal": "2 September 2026",
    "tipeForm": "Belanja Barang",
    "nomorForm": "B-238/7301/KU.320/2026",
    "perihal": "Perjalanan Pengawasan dan Pemeriksaan Susenas September dan Seruti TW III Tahun 2026 Lebih dari 8 Jam"
  },
  {
    "id": "fp-239",
    "nomorUrut": 239,
    "tanggal": "2 September 2026",
    "tipeForm": "Belanja Perjalanan",
    "nomorForm": "B-239/7301/KU.340/2026",
    "perihal": "Rapat Dinas"
  },
  {
    "id": "fp-240",
    "nomorUrut": 240,
    "tanggal": "2 September 2026",
    "tipeForm": "Belanja Barang",
    "nomorForm": "B-240/7301/KU.320/2026",
    "perihal": "Pendataan SKP 2026"
  },
  {
    "id": "fp-241",
    "nomorUrut": 241,
    "tanggal": "2 September 2026",
    "tipeForm": "Belanja Barang",
    "nomorForm": "B-241/7301/KU.320/2026",
    "perihal": "Pendataan RPH"
  },
  {
    "id": "fp-242",
    "nomorUrut": 242,
    "tanggal": "2 September 2026",
    "tipeForm": "Belanja Barang",
    "nomorForm": "ISI TIPE FP",
    "perihal": "Pendataan UUbinan padi sr 3"
  },
  {
    "id": "fp-243",
    "nomorUrut": 243,
    "tanggal": "2 September 2026",
    "tipeForm": "Belanja Barang",
    "nomorForm": "ISI TIPE FP",
    "perihal": "Pendataan UUbinan palawija sr 3"
  },
  {
    "id": "fp-244",
    "nomorUrut": 244,
    "tanggal": "2 September 2026",
    "tipeForm": "Belanja Bahan",
    "nomorForm": "B-244/7301/KU.310/2026",
    "perihal": "Konsumsi Pelatihan SKSPPI Tahun 2026"
  },
  {
    "id": "fp-245",
    "nomorUrut": 245,
    "tanggal": "2 September 2026",
    "tipeForm": "Belanja Barang",
    "nomorForm": "B-245/7301/KU.320/2026",
    "perihal": "Translok Pelatihan SKSPPI Tahun 2026"
  },
  {
    "id": "fp-246",
    "nomorUrut": 246,
    "tanggal": "2 September 2026",
    "tipeForm": "Belanja Barang",
    "nomorForm": "B-246/7301/KU.320/2026",
    "perihal": "Honor Pengajar Pelatihan SKSPPI Tahun 2026"
  },
  {
    "id": "fp-246.1",
    "nomorUrut": 246.1,
    "tanggal": "14 September 2026",
    "tipeForm": "Belanja Bahan",
    "nomorForm": "B-246.1/7301/KU.310/2026",
    "perihal": "Konsumsi Pembinaan Sektoral Seri #3 Tahun 2026"
  },
  {
    "id": "fp-247",
    "nomorUrut": 247,
    "tanggal": "16 September 2026",
    "tipeForm": "Belanja Barang",
    "nomorForm": "B-247/7301/KU.320/2026",
    "perihal": "transport perjalanan pengumpulan rentang harga (RH) dan konversi komoditas susenas september tahun 2026"
  },
  {
    "id": "fp-248",
    "nomorUrut": 248,
    "tanggal": "21 September 2026",
    "tipeForm": "Belanja Barang",
    "nomorForm": "B-248/7301/KU.320/2026",
    "perihal": "Honor Pendataan KSA Padi Sept 2026"
  },
  {
    "id": "fp-249",
    "nomorUrut": 249,
    "tanggal": "21 September 2026",
    "tipeForm": "Belanja Barang",
    "nomorForm": "B-249/7301/KU.320/2026",
    "perihal": "Honor Pendataan KSA Jagung Sept 2026"
  },
  {
    "id": "fp-250",
    "nomorUrut": 250,
    "tanggal": "21 September 2026",
    "tipeForm": "Belanja Barang",
    "nomorForm": "B-250/7301/KU.320/2026",
    "perihal": "Honor Pendataan VKOMSTRAT Triwulan III 2026"
  },
  {
    "id": "fp-251",
    "nomorUrut": 251,
    "tanggal": "21 September 2026",
    "tipeForm": "Belanja Barang",
    "nomorForm": "B-251/7301/KU.320/2026",
    "perihal": "Honor Pendataan VIP Horti Triwulan III 2026"
  },
  {
    "id": "fp-252",
    "nomorUrut": 252,
    "tanggal": "22 September 2026",
    "tipeForm": "Belanja Barang",
    "nomorForm": "B-252/7301/KU.320/2026",
    "perihal": "Honor petugas pendataan lapangan updating listing (susenas september) Tahun 2026"
  },
  {
    "id": "fp-253",
    "nomorUrut": 253,
    "tanggal": "22 September 2026",
    "tipeForm": "Belanja Barang",
    "nomorForm": "B-253/7301/KU.320/2026",
    "perihal": "Honor petugas pendataan lapangan Survei Sosial Ekonomi Nasional (susenas september) Tahun 2026"
  },
  {
    "id": "fp-254",
    "nomorUrut": 254,
    "tanggal": "22 September 2026",
    "tipeForm": "Belanja Barang",
    "nomorForm": "B-254/7301/KU.320/2026",
    "perihal": "Honor petugas pendataan lapangan Survei Ekonomi Rumah Tangga Triwulanan (Seruti) Triwulan III Tahun 2026"
  },
  {
    "id": "fp-255",
    "nomorUrut": 255,
    "tanggal": "22 September 2026",
    "tipeForm": "Belanja Barang",
    "nomorForm": "B-255/7301/KU.320/2026",
    "perihal": "Translok Perjalanan Pendataan Sakernas Agustus 2026"
  },
  {
    "id": "fp-256",
    "nomorUrut": 256,
    "tanggal": "22 September 2026",
    "tipeForm": "Belanja Perjalanan",
    "nomorForm": "B-256/7301/KU.340/2026",
    "perihal": "Translok Petugas Pendataan SE2026 Menara Indah dan Gusung"
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
  },
  {
    "id": "ppk-31",
    "nomorUrut": 31,
    "tanggal": "8 Januari 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "Petugas Susenas Maret dan Seruti Triwulan I Tahun 2026",
    "kodeKlasifikasi": "PL.300",
    "nomorSurat": "B-31/7301/PL.300/2026",
    "perihal": "Petugas a.n.Nur Lina"
  },
  {
    "id": "ppk-32",
    "nomorUrut": 32,
    "tanggal": "8 Januari 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "Petugas Susenas Maret dan Seruti Triwulan I Tahun 2026",
    "kodeKlasifikasi": "PL.300",
    "nomorSurat": "B-32/7301/PL.300/2026",
    "perihal": "Petugas a.n.Nur Wahidah"
  },
  {
    "id": "ppk-33",
    "nomorUrut": 33,
    "tanggal": "8 Januari 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "Petugas Susenas Maret dan Seruti Triwulan I Tahun 2026",
    "kodeKlasifikasi": "PL.300",
    "nomorSurat": "B-33/7301/PL.300/2026",
    "perihal": "Petugas a.n.Nur Zaman"
  },
  {
    "id": "ppk-34",
    "nomorUrut": 34,
    "tanggal": "8 Januari 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "Petugas Susenas Maret dan Seruti Triwulan I Tahun 2026",
    "kodeKlasifikasi": "PL.300",
    "nomorSurat": "B-34/7301/PL.300/2026",
    "perihal": "Petugas a.n.Rahmawati M. Nur"
  },
  {
    "id": "ppk-35",
    "nomorUrut": 35,
    "tanggal": "8 Januari 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "Petugas Susenas Maret dan Seruti Triwulan I Tahun 2026",
    "kodeKlasifikasi": "PL.300",
    "nomorSurat": "B-35/7301/PL.300/2026",
    "perihal": "Petugas a.n.Rico Aryanto"
  },
  {
    "id": "ppk-36",
    "nomorUrut": 36,
    "tanggal": "8 Januari 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "Petugas Susenas Maret dan Seruti Triwulan I Tahun 2026",
    "kodeKlasifikasi": "PL.300",
    "nomorSurat": "B-36/7301/PL.300/2026",
    "perihal": "Petugas a.n.Risaldi Putra"
  },
  {
    "id": "ppk-37",
    "nomorUrut": 37,
    "tanggal": "8 Januari 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "Petugas Susenas Maret dan Seruti Triwulan I Tahun 2026",
    "kodeKlasifikasi": "PL.300",
    "nomorSurat": "B-37/7301/PL.300/2026",
    "perihal": "Petugas a.n.Rosnawati"
  },
  {
    "id": "ppk-38",
    "nomorUrut": 38,
    "tanggal": "8 Januari 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "Petugas Susenas Maret dan Seruti Triwulan I Tahun 2026",
    "kodeKlasifikasi": "PL.300",
    "nomorSurat": "B-38/7301/PL.300/2026",
    "perihal": "Petugas a.n.Rostini"
  },
  {
    "id": "ppk-39",
    "nomorUrut": 39,
    "tanggal": "8 Januari 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "Petugas Susenas Maret dan Seruti Triwulan I Tahun 2026",
    "kodeKlasifikasi": "PL.300",
    "nomorSurat": "B-39/7301/PL.300/2026",
    "perihal": "Petugas a.n.Sakyatiyuni"
  },
  {
    "id": "ppk-40",
    "nomorUrut": 40,
    "tanggal": "8 Januari 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "Petugas Susenas Maret dan Seruti Triwulan I Tahun 2026",
    "kodeKlasifikasi": "PL.300",
    "nomorSurat": "B-40/7301/PL.300/2026",
    "perihal": "Petugas a.n.Selvi Andriani"
  },
  {
    "id": "ppk-41",
    "nomorUrut": 41,
    "tanggal": "8 Januari 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "Petugas Susenas Maret dan Seruti Triwulan I Tahun 2026",
    "kodeKlasifikasi": "PL.300",
    "nomorSurat": "B-41/7301/PL.300/2026",
    "perihal": "Petugas a.n.Sudirman"
  },
  {
    "id": "ppk-42",
    "nomorUrut": 42,
    "tanggal": "8 Januari 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "Petugas Susenas Maret dan Seruti Triwulan I Tahun 2026",
    "kodeKlasifikasi": "PL.300",
    "nomorSurat": "B-42/7301/PL.300/2026",
    "perihal": "Petugas a.n.Susi Linda"
  },
  {
    "id": "ppk-42.1",
    "nomorUrut": 42.1,
    "tanggal": "12 Januari 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "Petugas Sakernas Februari 2026",
    "kodeKlasifikasi": "PL.300",
    "nomorSurat": "B-42.1/7301/PL.300/2026",
    "perihal": "Petugas a.n Salfiana"
  },
  {
    "id": "ppk-42.2",
    "nomorUrut": 42.2,
    "tanggal": "12 Januari 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "Petugas Sakernas Februari 2026",
    "kodeKlasifikasi": "PL.300",
    "nomorSurat": "B-42.2/7301/PL.300/2026",
    "perihal": "Petugas a.n Iramaya"
  },
  {
    "id": "ppk-42.3",
    "nomorUrut": 42.3,
    "tanggal": "12 Januari 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "Petugas Sakernas Februari 2026",
    "kodeKlasifikasi": "PL.300",
    "nomorSurat": "B-42.3/7301/PL.300/2026",
    "perihal": "Petugas a.n Andi Wirda Ayu Utami"
  },
  {
    "id": "ppk-42.4",
    "nomorUrut": 42.4,
    "tanggal": "12 Januari 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "Petugas Sakernas Februari 2026",
    "kodeKlasifikasi": "PL.300",
    "nomorSurat": "B-42.4/7301/PL.300/2026",
    "perihal": "Petugas a.n Ratu Zahra Pacita"
  },
  {
    "id": "ppk-42.5",
    "nomorUrut": 42.5,
    "tanggal": "12 Januari 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "Petugas Sakernas Februari 2026",
    "kodeKlasifikasi": "PL.300",
    "nomorSurat": "B-42.5/7301/PL.300/2026",
    "perihal": "Petugas a.n Hasmina"
  },
  {
    "id": "ppk-42.6",
    "nomorUrut": 42.6,
    "tanggal": "12 Januari 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "Petugas Sakernas Februari 2026",
    "kodeKlasifikasi": "PL.300",
    "nomorSurat": "B-42.6/7301/PL.300/2026",
    "perihal": "Petugas a.n Rismawita"
  },
  {
    "id": "ppk-42.7",
    "nomorUrut": 42.7,
    "tanggal": "12 Januari 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "Petugas Sakernas Februari 2026",
    "kodeKlasifikasi": "PL.300",
    "nomorSurat": "B-42.7/7301/PL.300/2026",
    "perihal": "Petugas a.n Ahmad Muyassar"
  },
  {
    "id": "ppk-43",
    "nomorUrut": 43,
    "tanggal": "13 Januari 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "BPS Selayar",
    "kodeKlasifikasi": "PL.300",
    "nomorSurat": "B-43/7301/PL.300/2026",
    "perihal": "Berita Acara Evaluasi Penawaran, Klarifikasi dan Negosiasi Teknis dan Harga"
  },
  {
    "id": "ppk-44",
    "nomorUrut": 44,
    "tanggal": "14 Januari 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "BPS Selayar",
    "kodeKlasifikasi": "PL.300",
    "nomorSurat": "B-44/7301/PL.300/2026",
    "perihal": "Berita Acara Hasil Pemilihan Penyedia"
  },
  {
    "id": "ppk-45",
    "nomorUrut": 45,
    "tanggal": "14 Januari 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "CV. RAYHAN SQUARE HOTEL",
    "kodeKlasifikasi": "PL.300",
    "nomorSurat": "B-45/7301/PL.300/2026",
    "perihal": "Surat Perjanjian Hotel Rayhan - Pelatihan Susenas maret 2026"
  },
  {
    "id": "ppk-46",
    "nomorUrut": 46,
    "tanggal": "15 Januari 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "CV. RAYHAN SQUARE HOTEL",
    "kodeKlasifikasi": "PL.300",
    "nomorSurat": "B-46/7301/PL.300/2026",
    "perihal": "Surat Perintah Mulai Kerja (SPMK) Hotel Rayhan - Pelatihan Susenas maret 2025"
  },
  {
    "id": "ppk-47",
    "nomorUrut": 47,
    "tanggal": "21 Januari 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "CV. RAYHAN SQUARE HOTEL",
    "kodeKlasifikasi": "PL.300",
    "nomorSurat": "B-47/7301/PL.300/2026",
    "perihal": "Berita Acara Pemeriksaan Pekerjaan (BAPP) Hotel Rayhan - Pelatihan Susenas Maret 2026"
  },
  {
    "id": "ppk-48",
    "nomorUrut": 48,
    "tanggal": "22 Januari 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "CV. RAYHAN SQUARE HOTEL",
    "kodeKlasifikasi": "PL.300",
    "nomorSurat": "B-48/7301/PL.300/2026",
    "perihal": "Berita Acara Serah Terima (BAST) Hotel Rayhan - Pelatihan Susenas Maret 2026"
  },
  {
    "id": "ppk-49",
    "nomorUrut": 49,
    "tanggal": "23 Januari 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "CV. RAYHAN SQUARE HOTEL",
    "kodeKlasifikasi": "PL.300",
    "nomorSurat": "B-49/7301/PL.300/2026",
    "perihal": "Berita Acara Pembayaran (BAP) Hotel Rayhan - Pelatihan Susenas Maret 2026"
  },
  {
    "id": "ppk-50",
    "nomorUrut": 50,
    "tanggal": "9 Februari 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "PT. Rezky Service System",
    "kodeKlasifikasi": "PL.300",
    "nomorSurat": "B-50/7301/PL.300/2026",
    "perihal": "Berita Acara Pemeriksaan Pekerjaan (BAPP) Jasa Kebersihan Bulan Januari 2026"
  },
  {
    "id": "ppk-51",
    "nomorUrut": 51,
    "tanggal": "10 Februari 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "PT. Rezky Service System",
    "kodeKlasifikasi": "PL.300",
    "nomorSurat": "B-51/7301/PL.300/2026",
    "perihal": "Berita Acara Serah Terima (BAST) Jasa Kebersihan Bulan Januari 2026"
  },
  {
    "id": "ppk-52",
    "nomorUrut": 52,
    "tanggal": "11 Februari 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "PT. Rezky Service System",
    "kodeKlasifikasi": "PL.300",
    "nomorSurat": "B-52/7301/PL.300/2026",
    "perihal": "Berita Acara Pembayaran (BAP) Jasa Kebersihan Bulan Januari 2026"
  },
  {
    "id": "ppk-53",
    "nomorUrut": 53,
    "tanggal": "2 Maret 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "PT. Rezky Service System",
    "kodeKlasifikasi": "PL.300",
    "nomorSurat": "B-53/7301/PL.300/2026",
    "perihal": "Berita Acara Pemeriksaan Pekerjaan (BAPP) Jasa Kebersihan Bulan Februari 2026"
  },
  {
    "id": "ppk-54",
    "nomorUrut": 54,
    "tanggal": "3 Maret 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "PT. Rezky Service System",
    "kodeKlasifikasi": "PL.300",
    "nomorSurat": "B-54/7301/PL.300/2026",
    "perihal": "Berita Acara Serah Terima (BAST) Jasa Kebersihan Bulan Februari 2026"
  },
  {
    "id": "ppk-55",
    "nomorUrut": 55,
    "tanggal": "4 Maret 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "PT. Rezky Service System",
    "kodeKlasifikasi": "PL.300",
    "nomorSurat": "B-55/7301/PL.300/2026",
    "perihal": "Berita Acara Pembayaran (BAP) Jasa Kebersihan Bulan Februari 2026"
  },
  {
    "id": "ppk-56",
    "nomorUrut": 56,
    "tanggal": "6 April 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "PT. Rezky Service System",
    "kodeKlasifikasi": "PL.300",
    "nomorSurat": "B-56/7301/PL.300/2026",
    "perihal": "Berita Acara Pemeriksaan Pekerjaan (BAPP) Jasa Kebersihan Bulan Maret 2026"
  },
  {
    "id": "ppk-57",
    "nomorUrut": 57,
    "tanggal": "7 April 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "PT. Rezky Service System",
    "kodeKlasifikasi": "PL.300",
    "nomorSurat": "B-57/7301/PL.300/2026",
    "perihal": "Berita Acara Serah Terima (BAST) Jasa Kebersihan Bulan Maret 2026"
  },
  {
    "id": "ppk-58",
    "nomorUrut": 58,
    "tanggal": "8 April 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "PT. Rezky Service System",
    "kodeKlasifikasi": "PL.300",
    "nomorSurat": "B-58/7301/PL.300/2026",
    "perihal": "Berita Acara Pembayaran (BAP) Jasa Kebersihan Bulan Maret 2026"
  },
  {
    "id": "ppk-59",
    "nomorUrut": 59,
    "tanggal": "13 April 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "CV PUTRA KREATIF BANDUNG",
    "kodeKlasifikasi": "PL.300",
    "nomorSurat": "B-59/7301/PL.300/2026",
    "perihal": "Rencana Anggaran Belanja (RAB) dan Spesifikasi Teknis Pengadaan Pakaian Kerja (Navy dan Putih)"
  },
  {
    "id": "ppk-60",
    "nomorUrut": 60,
    "tanggal": "14 April 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "CV PUTRA KREATIF BANDUNG",
    "kodeKlasifikasi": "PL.300",
    "nomorSurat": "B-60/7301/PL.300/2026",
    "perihal": "SPK  Pengadaan Pakaian Kerja Pegawai (Navy dan Putih)"
  },
  {
    "id": "ppk-61",
    "nomorUrut": 61,
    "tanggal": "15 April 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "CV PUTRA KREATIF BANDUNG",
    "kodeKlasifikasi": "PL.300",
    "nomorSurat": "B-61/7301/PL.300/2026",
    "perihal": "Surat Perintah Mulai Kerja Pengadaan Pakaian Kerja Pegawai  (Navy dan Putih)"
  },
  {
    "id": "ppk-62",
    "nomorUrut": 62,
    "tanggal": "20 April 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "Palagara Custom",
    "kodeKlasifikasi": "PL.300",
    "nomorSurat": "B-62/7301/PL.300/2026",
    "perihal": "Rencana Anggaran Belanja (RAB) dan Spesifikasi Teknis Pengadaan Kaos Polo SE2026"
  },
  {
    "id": "ppk-63",
    "nomorUrut": 63,
    "tanggal": "21 April 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "Palagara Custom",
    "kodeKlasifikasi": "PL.300",
    "nomorSurat": "B-63/7301/PL.300/2026",
    "perihal": "SPK  Pengadaan Kaos Polo SE2026"
  },
  {
    "id": "ppk-64",
    "nomorUrut": 64,
    "tanggal": "21 April 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "Palagara Custom",
    "kodeKlasifikasi": "PL.300",
    "nomorSurat": "B-64/7301/PL.300/2026",
    "perihal": "Surat Perintah Mulai Kerja  (SPMK) Pengadaan Kaos Polo SE2026"
  },
  {
    "id": "ppk-65",
    "nomorUrut": 65,
    "tanggal": "4 Mei 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "Palagara Custom",
    "kodeKlasifikasi": "PL.300",
    "nomorSurat": "B-65/7301/PL.300/2026",
    "perihal": "Berita Acara Pemeriksaan Pekerjaan (BAPP) Pengadaan Kaos Polo SE2026"
  },
  {
    "id": "ppk-66",
    "nomorUrut": 66,
    "tanggal": "5 Mei 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "Palagara Custom",
    "kodeKlasifikasi": "PL.300",
    "nomorSurat": "B-66/7301/PL.300/2026",
    "perihal": "Berita Acara Serah Terima (BAST) Pengadaan Kaos Polo SE2026"
  },
  {
    "id": "ppk-66.1",
    "nomorUrut": 66.1,
    "tanggal": "5 Mei 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "PT. Rezky Service System",
    "kodeKlasifikasi": "PL.300",
    "nomorSurat": "B-66.1/7301/PL.300/2026",
    "perihal": "Berita Acara Pemeriksaan Pekerjaan (BAPP) Jasa Kebersihan Bulan April 2026"
  },
  {
    "id": "ppk-67",
    "nomorUrut": 67,
    "tanggal": "6 Mei 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "Palagara Custom",
    "kodeKlasifikasi": "PL.300",
    "nomorSurat": "B-67/7301/PL.300/2026",
    "perihal": "Berita Acara Pembayaran (BAP) Pengadaan Kaos Polo SE2026"
  },
  {
    "id": "ppk-68",
    "nomorUrut": 68,
    "tanggal": "6 Mei 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "PT. Rezky Service System",
    "kodeKlasifikasi": "PL.300",
    "nomorSurat": "B-68/7301/PL.300/2026",
    "perihal": "Berita Acara Serah Terima (BAST) Jasa Kebersihan Bulan April 2026"
  },
  {
    "id": "ppk-69",
    "nomorUrut": 69,
    "tanggal": "7 Mei 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "PT. Rezky Service System",
    "kodeKlasifikasi": "PL.300",
    "nomorSurat": "B-69/7301/PL.300/2026",
    "perihal": "Berita Acara Pembayaran (BAP) Jasa Kebersihan Bulan April 2026"
  },
  {
    "id": "ppk-69.1",
    "nomorUrut": 69.1,
    "tanggal": "18 Mei 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "BPS Selayar",
    "kodeKlasifikasi": "PL.300",
    "nomorSurat": "B-69.1/7301/PL.300/2026",
    "perihal": "Berita Acara Penetapan Spesifikasi Teknis dan Rencana Anggaran Biaya (RAB) Fullboard SE 2026"
  },
  {
    "id": "ppk-69.2",
    "nomorUrut": 69.2,
    "tanggal": "18 Mei 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "BPS Selayar",
    "kodeKlasifikasi": "PL.300",
    "nomorSurat": "B-69.2/7301/PL.300/2026",
    "perihal": "Berita Acara Penetapan HPS Fullboard SE 2026"
  },
  {
    "id": "ppk-69.3",
    "nomorUrut": 69.3,
    "tanggal": "18 Mei 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "BPS Provinsi Sulawesi Selatan",
    "kodeKlasifikasi": "PL.300",
    "nomorSurat": "B-69.3/7301/PL.300/2026",
    "perihal": "Surat Pernyataan KPA untuk Fullboard SE 2026"
  },
  {
    "id": "ppk-69.4",
    "nomorUrut": 69.4,
    "tanggal": "19 Mei 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "Pejabat Pengadaan Baranga/Jasa",
    "kodeKlasifikasi": "PL.300",
    "nomorSurat": "B-69.4/7301/PL.300/2026",
    "perihal": "Permohonan Pejabat Pengadaan Fullboard SE 2026"
  },
  {
    "id": "ppk-69.5",
    "nomorUrut": 69.5,
    "tanggal": "20 Mei 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "BPS Selayar",
    "kodeKlasifikasi": "PL.300",
    "nomorSurat": "B-69.5/7301/PL.300/2026",
    "perihal": "Dokumen Pemilihan"
  },
  {
    "id": "ppk-69.6",
    "nomorUrut": 69.6,
    "tanggal": "20 Mei 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "CV. RAYHAN SQUARE HOTEL",
    "kodeKlasifikasi": "PL.300",
    "nomorSurat": "B-69.6/7301/PL.300/2026",
    "perihal": "Surat Penawaran Pekerjaan Rayhan"
  },
  {
    "id": "ppk-70",
    "nomorUrut": 70,
    "tanggal": "25 Mei 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "CV PUTRA KREATIF BANDUNG",
    "kodeKlasifikasi": "PL.300",
    "nomorSurat": "B-70/7301/PL.300/2026",
    "perihal": "Berita Acara Pemeriksaan Pekerjaan (BAPP) Pengadaan Pakaian Kerja Pegawai (Navy dan Putih)"
  },
  {
    "id": "ppk-71",
    "nomorUrut": 71,
    "tanggal": "26 Mei 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "CV PUTRA KREATIF BANDUNG",
    "kodeKlasifikasi": "PL.300",
    "nomorSurat": "B-71/7301/PL.300/2026",
    "perihal": "Berita Acara Serah Terima (BAST) PengadaanPakaian Kerja Pegawai (Navy dan Putih)"
  },
  {
    "id": "ppk-71.1",
    "nomorUrut": 71.1,
    "tanggal": "26 Mei 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "BPS Selayar",
    "kodeKlasifikasi": "PL.300",
    "nomorSurat": "B-71.1/7301/PL.300/2026",
    "perihal": "Berita Acara Evaluasi Penawaran, Klarifikasi dan Negosiasi Teknis dan Harga"
  },
  {
    "id": "ppk-71.2",
    "nomorUrut": 71.2,
    "tanggal": "26 Mei 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "BPS Selayar",
    "kodeKlasifikasi": "PL.300",
    "nomorSurat": "B-71.2/7301/PL.300/2026",
    "perihal": "Berita Acara Hasil Pemilihan Penyedia"
  },
  {
    "id": "ppk-71.3",
    "nomorUrut": 71.3,
    "tanggal": "29 Mei 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "CV. RAYHAN SQUARE HOTEL",
    "kodeKlasifikasi": "PL.300",
    "nomorSurat": "B-71.3/7301/PL.300/2026",
    "perihal": "Surat Perjanjian Hotel Rayhan - Pelatihan Petugas SE Tahun 2026"
  },
  {
    "id": "ppk-71.4",
    "nomorUrut": 71.4,
    "tanggal": "29 Mei 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "Petugas Pendataan Sensus Ekonomi 2026",
    "kodeKlasifikasi": "PL.300",
    "nomorSurat": "B-71.4/7301/PL.300/2026",
    "perihal": "Petugas Pendataan Sensus Ekonomi 2026 Alwi rahman"
  },
  {
    "id": "ppk-71.5",
    "nomorUrut": 71.5,
    "tanggal": "29 Mei 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "Petugas Pendataan Sensus Ekonomi 2026",
    "kodeKlasifikasi": "PL.300",
    "nomorSurat": "B-71.5/7301/PL.300/2026",
    "perihal": "Petugas Pendataan Sensus Ekonomi 2026 Desi Ramdhayani Usra"
  },
  {
    "id": "ppk-71.6",
    "nomorUrut": 71.6,
    "tanggal": "29 Mei 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "Petugas Pendataan Sensus Ekonomi 2026",
    "kodeKlasifikasi": "PL.300",
    "nomorSurat": "B-71.6/7301/PL.300/2026",
    "perihal": "Petugas Pendataan Sensus Ekonomi 2026 Hasrullah"
  },
  {
    "id": "ppk-71.7",
    "nomorUrut": 71.7,
    "tanggal": "29 Mei 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "Petugas Pendataan Sensus Ekonomi 2026",
    "kodeKlasifikasi": "PL.300",
    "nomorSurat": "B-71.7/7301/PL.300/2026",
    "perihal": "Petugas Pendataan Sensus Ekonomi 2026 Kiki Taskia.A"
  },
  {
    "id": "ppk-71.8",
    "nomorUrut": 71.8,
    "tanggal": "29 Mei 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "Petugas Pendataan Sensus Ekonomi 2026",
    "kodeKlasifikasi": "PL.300",
    "nomorSurat": "B-71.8/7301/PL.300/2026",
    "perihal": "Petugas Pendataan Sensus Ekonomi 2026 Miftahul Jannah"
  },
  {
    "id": "ppk-71.9",
    "nomorUrut": 71.9,
    "tanggal": "29 Mei 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "Petugas Pendataan Sensus Ekonomi 2026",
    "kodeKlasifikasi": "PL.300",
    "nomorSurat": "B-71.9/7301/PL.300/2026",
    "perihal": "Petugas Pendataan Sensus Ekonomi 2026 Muhammad Anwar"
  },
  {
    "id": "ppk-71.10",
    "nomorUrut": 71.1,
    "tanggal": "29 Mei 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "Petugas Pendataan Sensus Ekonomi 2026",
    "kodeKlasifikasi": "PL.300",
    "nomorSurat": "B-71.10/7301/PL.300/2026",
    "perihal": "Petugas Pendataan Sensus Ekonomi 2026 Rosida"
  },
  {
    "id": "ppk-71.11",
    "nomorUrut": 71.11,
    "tanggal": "29 Mei 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "Petugas Pendataan Sensus Ekonomi 2026",
    "kodeKlasifikasi": "PL.300",
    "nomorSurat": "B-71.11/7301/PL.300/2026",
    "perihal": "Petugas Pendataan Sensus Ekonomi 2026 Santi"
  },
  {
    "id": "ppk-71.12",
    "nomorUrut": 71.12,
    "tanggal": "29 Mei 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "Petugas Pendataan Sensus Ekonomi 2026",
    "kodeKlasifikasi": "PL.300",
    "nomorSurat": "B-71.12/7301/PL.300/2026",
    "perihal": "Petugas Pendataan Sensus Ekonomi 2026 Sitti Qamariah"
  },
  {
    "id": "ppk-71.13",
    "nomorUrut": 71.13,
    "tanggal": "29 Mei 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "Petugas Pendataan Sensus Ekonomi 2026",
    "kodeKlasifikasi": "PL.300",
    "nomorSurat": "B-71.13/7301/PL.300/2026",
    "perihal": "Petugas Pendataan Sensus Ekonomi 2026 Vina Santika Askari"
  },
  {
    "id": "ppk-71.14",
    "nomorUrut": 71.14,
    "tanggal": "29 Mei 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "Petugas Pendataan Sensus Ekonomi 2026",
    "kodeKlasifikasi": "PL.300",
    "nomorSurat": "B-71.14/7301/PL.300/2026",
    "perihal": "Petugas Pendataan Sensus Ekonomi 2026 Husni"
  },
  {
    "id": "ppk-71.15",
    "nomorUrut": 71.15,
    "tanggal": "29 Mei 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "Petugas Pendataan Sensus Ekonomi 2026",
    "kodeKlasifikasi": "PL.300",
    "nomorSurat": "B-71.15/7301/PL.300/2026",
    "perihal": "Petugas Pendataan Sensus Ekonomi 2026 Jusman"
  },
  {
    "id": "ppk-71.16",
    "nomorUrut": 71.16,
    "tanggal": "29 Mei 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "Petugas Pendataan Sensus Ekonomi 2026",
    "kodeKlasifikasi": "PL.300",
    "nomorSurat": "B-71.16/7301/PL.300/2026",
    "perihal": "Petugas Pendataan Sensus Ekonomi 2026 NUR SAWALIA"
  },
  {
    "id": "ppk-71.17",
    "nomorUrut": 71.17,
    "tanggal": "29 Mei 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "Petugas Pendataan Sensus Ekonomi 2026",
    "kodeKlasifikasi": "PL.300",
    "nomorSurat": "B-71.17/7301/PL.300/2026",
    "perihal": "Petugas Pendataan Sensus Ekonomi 2026 NUR INDAH"
  },
  {
    "id": "ppk-71.18",
    "nomorUrut": 71.18,
    "tanggal": "29 Mei 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "Petugas Pendataan Sensus Ekonomi 2026",
    "kodeKlasifikasi": "PL.300",
    "nomorSurat": "B-71.18/7301/PL.300/2026",
    "perihal": "Petugas Pendataan Sensus Ekonomi 2026 Risti Yanti"
  },
  {
    "id": "ppk-71.19",
    "nomorUrut": 71.19,
    "tanggal": "29 Mei 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "Petugas Pendataan Sensus Ekonomi 2026",
    "kodeKlasifikasi": "PL.300",
    "nomorSurat": "B-71.19/7301/PL.300/2026",
    "perihal": "Petugas Pendataan Sensus Ekonomi 2026 Sabaruddin"
  },
  {
    "id": "ppk-71.20",
    "nomorUrut": 71.2,
    "tanggal": "29 Mei 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "Petugas Pendataan Sensus Ekonomi 2026",
    "kodeKlasifikasi": "PL.300",
    "nomorSurat": "B-71.20/7301/PL.300/2026",
    "perihal": "Petugas Pendataan Sensus Ekonomi 2026 Salfiana"
  },
  {
    "id": "ppk-71.21",
    "nomorUrut": 71.21,
    "tanggal": "29 Mei 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "Petugas Pendataan Sensus Ekonomi 2026",
    "kodeKlasifikasi": "PL.300",
    "nomorSurat": "B-71.21/7301/PL.300/2026",
    "perihal": "Petugas Pendataan Sensus Ekonomi 2026 Sapriadi"
  },
  {
    "id": "ppk-71.22",
    "nomorUrut": 71.22,
    "tanggal": "29 Mei 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "Petugas Pendataan Sensus Ekonomi 2026",
    "kodeKlasifikasi": "PL.300",
    "nomorSurat": "B-71.22/7301/PL.300/2026",
    "perihal": "Petugas Pendataan Sensus Ekonomi 2026 Amita Cahyani"
  },
  {
    "id": "ppk-71.23",
    "nomorUrut": 71.23,
    "tanggal": "29 Mei 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "Petugas Pendataan Sensus Ekonomi 2026",
    "kodeKlasifikasi": "PL.300",
    "nomorSurat": "B-71.23/7301/PL.300/2026",
    "perihal": "Petugas Pendataan Sensus Ekonomi 2026 Andi Nanriani"
  },
  {
    "id": "ppk-71.24",
    "nomorUrut": 71.24,
    "tanggal": "29 Mei 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "Petugas Pendataan Sensus Ekonomi 2026",
    "kodeKlasifikasi": "PL.300",
    "nomorSurat": "B-71.24/7301/PL.300/2026",
    "perihal": "Petugas Pendataan Sensus Ekonomi 2026 Andi Nurul Annisa"
  },
  {
    "id": "ppk-71.25",
    "nomorUrut": 71.25,
    "tanggal": "29 Mei 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "Petugas Pendataan Sensus Ekonomi 2026",
    "kodeKlasifikasi": "PL.300",
    "nomorSurat": "B-71.25/7301/PL.300/2026",
    "perihal": "Petugas Pendataan Sensus Ekonomi 2026 Ariani"
  },
  {
    "id": "ppk-71.26",
    "nomorUrut": 71.26,
    "tanggal": "29 Mei 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "Petugas Pendataan Sensus Ekonomi 2026",
    "kodeKlasifikasi": "PL.300",
    "nomorSurat": "B-71.26/7301/PL.300/2026",
    "perihal": "Petugas Pendataan Sensus Ekonomi 2026 Erma Yunita"
  },
  {
    "id": "ppk-71.27",
    "nomorUrut": 71.27,
    "tanggal": "29 Mei 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "Petugas Pendataan Sensus Ekonomi 2026",
    "kodeKlasifikasi": "PL.300",
    "nomorSurat": "B-71.27/7301/PL.300/2026",
    "perihal": "Petugas Pendataan Sensus Ekonomi 2026 Muhammad Arif Yunus"
  },
  {
    "id": "ppk-71.28",
    "nomorUrut": 71.28,
    "tanggal": "29 Mei 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "Petugas Pendataan Sensus Ekonomi 2026",
    "kodeKlasifikasi": "PL.300",
    "nomorSurat": "B-71.28/7301/PL.300/2026",
    "perihal": "Petugas Pendataan Sensus Ekonomi 2026 Sarina"
  },
  {
    "id": "ppk-71.29",
    "nomorUrut": 71.29,
    "tanggal": "29 Mei 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "Petugas Pendataan Sensus Ekonomi 2026",
    "kodeKlasifikasi": "PL.300",
    "nomorSurat": "B-71.29/7301/PL.300/2026",
    "perihal": "Petugas Pendataan Sensus Ekonomi 2026 Selvi Adriani"
  },
  {
    "id": "ppk-71.30",
    "nomorUrut": 71.3,
    "tanggal": "29 Mei 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "Petugas Pendataan Sensus Ekonomi 2026",
    "kodeKlasifikasi": "PL.300",
    "nomorSurat": "B-71.30/7301/PL.300/2026",
    "perihal": "Petugas Pendataan Sensus Ekonomi 2026 Supardi"
  },
  {
    "id": "ppk-71.31",
    "nomorUrut": 71.31,
    "tanggal": "29 Mei 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "Petugas Pendataan Sensus Ekonomi 2026",
    "kodeKlasifikasi": "PL.300",
    "nomorSurat": "B-71.31/7301/PL.300/2026",
    "perihal": "Petugas Pendataan Sensus Ekonomi 2026 Bau Sulfa"
  },
  {
    "id": "ppk-71.32",
    "nomorUrut": 71.32,
    "tanggal": "29 Mei 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "Petugas Pendataan Sensus Ekonomi 2026",
    "kodeKlasifikasi": "PL.300",
    "nomorSurat": "B-71.32/7301/PL.300/2026",
    "perihal": "Petugas Pendataan Sensus Ekonomi 2026 Firman"
  },
  {
    "id": "ppk-71.33",
    "nomorUrut": 71.33,
    "tanggal": "29 Mei 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "Petugas Pendataan Sensus Ekonomi 2026",
    "kodeKlasifikasi": "PL.300",
    "nomorSurat": "B-71.33/7301/PL.300/2026",
    "perihal": "Petugas Pendataan Sensus Ekonomi 2026 Handika Jihardi"
  },
  {
    "id": "ppk-71.34",
    "nomorUrut": 71.34,
    "tanggal": "29 Mei 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "Petugas Pendataan Sensus Ekonomi 2026",
    "kodeKlasifikasi": "PL.300",
    "nomorSurat": "B-71.34/7301/PL.300/2026",
    "perihal": "Petugas Pendataan Sensus Ekonomi 2026 Hasnah"
  },
  {
    "id": "ppk-71.35",
    "nomorUrut": 71.35,
    "tanggal": "29 Mei 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "Petugas Pendataan Sensus Ekonomi 2026",
    "kodeKlasifikasi": "PL.300",
    "nomorSurat": "B-71.35/7301/PL.300/2026",
    "perihal": "Petugas Pendataan Sensus Ekonomi 2026 Karel"
  },
  {
    "id": "ppk-71.36",
    "nomorUrut": 71.36,
    "tanggal": "29 Mei 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "Petugas Pendataan Sensus Ekonomi 2026",
    "kodeKlasifikasi": "PL.300",
    "nomorSurat": "B-71.36/7301/PL.300/2026",
    "perihal": "Petugas Pendataan Sensus Ekonomi 2026 Muliati"
  },
  {
    "id": "ppk-71.37",
    "nomorUrut": 71.37,
    "tanggal": "29 Mei 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "Petugas Pendataan Sensus Ekonomi 2026",
    "kodeKlasifikasi": "PL.300",
    "nomorSurat": "B-71.37/7301/PL.300/2026",
    "perihal": "Petugas Pendataan Sensus Ekonomi 2026 Nurwah Daniah"
  },
  {
    "id": "ppk-71.38",
    "nomorUrut": 71.38,
    "tanggal": "29 Mei 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "Petugas Pendataan Sensus Ekonomi 2026",
    "kodeKlasifikasi": "PL.300",
    "nomorSurat": "B-71.38/7301/PL.300/2026",
    "perihal": "Petugas Pendataan Sensus Ekonomi 2026 Rismawita"
  },
  {
    "id": "ppk-71.39",
    "nomorUrut": 71.39,
    "tanggal": "29 Mei 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "Petugas Pendataan Sensus Ekonomi 2026",
    "kodeKlasifikasi": "PL.300",
    "nomorSurat": "B-71.39/7301/PL.300/2026",
    "perihal": "Petugas Pendataan Sensus Ekonomi 2026 Abd. Rahman Ilyas"
  },
  {
    "id": "ppk-71.40",
    "nomorUrut": 71.4,
    "tanggal": "29 Mei 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "Petugas Pendataan Sensus Ekonomi 2026",
    "kodeKlasifikasi": "PL.300",
    "nomorSurat": "B-71.40/7301/PL.300/2026",
    "perihal": "Petugas Pendataan Sensus Ekonomi 2026 Utami Rizka"
  },
  {
    "id": "ppk-71.41",
    "nomorUrut": 71.41,
    "tanggal": "29 Mei 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "Petugas Pendataan Sensus Ekonomi 2026",
    "kodeKlasifikasi": "PL.300",
    "nomorSurat": "B-71.41/7301/PL.300/2026",
    "perihal": "Petugas Pendataan Sensus Ekonomi 2026 Amiruddin"
  },
  {
    "id": "ppk-71.42",
    "nomorUrut": 71.42,
    "tanggal": "29 Mei 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "Petugas Pendataan Sensus Ekonomi 2026",
    "kodeKlasifikasi": "PL.300",
    "nomorSurat": "B-71.42/7301/PL.300/2026",
    "perihal": "Petugas Pendataan Sensus Ekonomi 2026 Andi Arifai"
  },
  {
    "id": "ppk-71.43",
    "nomorUrut": 71.43,
    "tanggal": "29 Mei 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "Petugas Pendataan Sensus Ekonomi 2026",
    "kodeKlasifikasi": "PL.300",
    "nomorSurat": "B-71.43/7301/PL.300/2026",
    "perihal": "Petugas Pendataan Sensus Ekonomi 2026 Andi Marta, S.T"
  },
  {
    "id": "ppk-71.44",
    "nomorUrut": 71.44,
    "tanggal": "29 Mei 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "Petugas Pendataan Sensus Ekonomi 2026",
    "kodeKlasifikasi": "PL.300",
    "nomorSurat": "B-71.44/7301/PL.300/2026",
    "perihal": "Petugas Pendataan Sensus Ekonomi 2026 Fani Ramadani"
  },
  {
    "id": "ppk-71.45",
    "nomorUrut": 71.45,
    "tanggal": "29 Mei 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "Petugas Pendataan Sensus Ekonomi 2026",
    "kodeKlasifikasi": "PL.300",
    "nomorSurat": "B-71.45/7301/PL.300/2026",
    "perihal": "Petugas Pendataan Sensus Ekonomi 2026 Harniati"
  },
  {
    "id": "ppk-71.46",
    "nomorUrut": 71.46,
    "tanggal": "29 Mei 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "Petugas Pendataan Sensus Ekonomi 2026",
    "kodeKlasifikasi": "PL.300",
    "nomorSurat": "B-71.46/7301/PL.300/2026",
    "perihal": "Petugas Pendataan Sensus Ekonomi 2026 Muh irfan jaya"
  },
  {
    "id": "ppk-71.47",
    "nomorUrut": 71.47,
    "tanggal": "29 Mei 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "Petugas Pendataan Sensus Ekonomi 2026",
    "kodeKlasifikasi": "PL.300",
    "nomorSurat": "B-71.47/7301/PL.300/2026",
    "perihal": "Petugas Pendataan Sensus Ekonomi 2026 Supiani"
  },
  {
    "id": "ppk-71.48",
    "nomorUrut": 71.48,
    "tanggal": "29 Mei 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "Petugas Pendataan Sensus Ekonomi 2026",
    "kodeKlasifikasi": "PL.300",
    "nomorSurat": "B-71.48/7301/PL.300/2026",
    "perihal": "Petugas Pendataan Sensus Ekonomi 2026 Syamsuddin"
  },
  {
    "id": "ppk-71.49",
    "nomorUrut": 71.49,
    "tanggal": "29 Mei 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "Petugas Pendataan Sensus Ekonomi 2026",
    "kodeKlasifikasi": "PL.300",
    "nomorSurat": "B-71.49/7301/PL.300/2026",
    "perihal": "Petugas Pendataan Sensus Ekonomi 2026 A. NUR SUSANTI"
  },
  {
    "id": "ppk-71.50",
    "nomorUrut": 71.5,
    "tanggal": "29 Mei 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "Petugas Pendataan Sensus Ekonomi 2026",
    "kodeKlasifikasi": "PL.300",
    "nomorSurat": "B-71.50/7301/PL.300/2026",
    "perihal": "Petugas Pendataan Sensus Ekonomi 2026 Achmad Fadli S"
  },
  {
    "id": "ppk-71.51",
    "nomorUrut": 71.51,
    "tanggal": "29 Mei 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "Petugas Pendataan Sensus Ekonomi 2026",
    "kodeKlasifikasi": "PL.300",
    "nomorSurat": "B-71.51/7301/PL.300/2026",
    "perihal": "Petugas Pendataan Sensus Ekonomi 2026 Ahriani"
  },
  {
    "id": "ppk-71.52",
    "nomorUrut": 71.52,
    "tanggal": "29 Mei 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "Petugas Pendataan Sensus Ekonomi 2026",
    "kodeKlasifikasi": "PL.300",
    "nomorSurat": "B-71.52/7301/PL.300/2026",
    "perihal": "Petugas Pendataan Sensus Ekonomi 2026 Aryanto Amran"
  },
  {
    "id": "ppk-71.53",
    "nomorUrut": 71.53,
    "tanggal": "29 Mei 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "Petugas Pendataan Sensus Ekonomi 2026",
    "kodeKlasifikasi": "PL.300",
    "nomorSurat": "B-71.53/7301/PL.300/2026",
    "perihal": "Petugas Pendataan Sensus Ekonomi 2026 Muhammad Akbar"
  },
  {
    "id": "ppk-71.54",
    "nomorUrut": 71.54,
    "tanggal": "29 Mei 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "Petugas Pendataan Sensus Ekonomi 2026",
    "kodeKlasifikasi": "PL.300",
    "nomorSurat": "B-71.54/7301/PL.300/2026",
    "perihal": "Petugas Pendataan Sensus Ekonomi 2026 Mukammila"
  },
  {
    "id": "ppk-71.55",
    "nomorUrut": 71.55,
    "tanggal": "29 Mei 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "Petugas Pendataan Sensus Ekonomi 2026",
    "kodeKlasifikasi": "PL.300",
    "nomorSurat": "B-71.55/7301/PL.300/2026",
    "perihal": "Petugas Pendataan Sensus Ekonomi 2026 Murtini"
  },
  {
    "id": "ppk-71.56",
    "nomorUrut": 71.56,
    "tanggal": "29 Mei 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "Petugas Pendataan Sensus Ekonomi 2026",
    "kodeKlasifikasi": "PL.300",
    "nomorSurat": "B-71.56/7301/PL.300/2026",
    "perihal": "Petugas Pendataan Sensus Ekonomi 2026 Nur Hidayah"
  },
  {
    "id": "ppk-71.57",
    "nomorUrut": 71.57,
    "tanggal": "29 Mei 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "Petugas Pendataan Sensus Ekonomi 2026",
    "kodeKlasifikasi": "PL.300",
    "nomorSurat": "B-71.57/7301/PL.300/2026",
    "perihal": "Petugas Pendataan Sensus Ekonomi 2026 Nur Indriani"
  },
  {
    "id": "ppk-71.58",
    "nomorUrut": 71.58,
    "tanggal": "29 Mei 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "Petugas Pendataan Sensus Ekonomi 2026",
    "kodeKlasifikasi": "PL.300",
    "nomorSurat": "B-71.58/7301/PL.300/2026",
    "perihal": "Petugas Pendataan Sensus Ekonomi 2026 Raniati"
  },
  {
    "id": "ppk-71.59",
    "nomorUrut": 71.59,
    "tanggal": "29 Mei 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "Petugas Pendataan Sensus Ekonomi 2026",
    "kodeKlasifikasi": "PL.300",
    "nomorSurat": "B-71.59/7301/PL.300/2026",
    "perihal": "Petugas Pendataan Sensus Ekonomi 2026 Rofiah Ijas Taufik"
  },
  {
    "id": "ppk-71.60",
    "nomorUrut": 71.6,
    "tanggal": "29 Mei 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "Petugas Pendataan Sensus Ekonomi 2026",
    "kodeKlasifikasi": "PL.300",
    "nomorSurat": "B-71.60/7301/PL.300/2026",
    "perihal": "Petugas Pendataan Sensus Ekonomi 2026 Adwiah Novia Nur"
  },
  {
    "id": "ppk-71.61",
    "nomorUrut": 71.61,
    "tanggal": "29 Mei 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "Petugas Pendataan Sensus Ekonomi 2026",
    "kodeKlasifikasi": "PL.300",
    "nomorSurat": "B-71.61/7301/PL.300/2026",
    "perihal": "Petugas Pendataan Sensus Ekonomi 2026 Rostini"
  },
  {
    "id": "ppk-71.62",
    "nomorUrut": 71.62,
    "tanggal": "29 Mei 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "Petugas Pendataan Sensus Ekonomi 2026",
    "kodeKlasifikasi": "PL.300",
    "nomorSurat": "B-71.62/7301/PL.300/2026",
    "perihal": "Petugas Pendataan Sensus Ekonomi 2026 SELFINA SARI"
  },
  {
    "id": "ppk-71.63",
    "nomorUrut": 71.63,
    "tanggal": "29 Mei 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "Petugas Pendataan Sensus Ekonomi 2026",
    "kodeKlasifikasi": "PL.300",
    "nomorSurat": "B-71.63/7301/PL.300/2026",
    "perihal": "Petugas Pendataan Sensus Ekonomi 2026 Nur Anjelina"
  },
  {
    "id": "ppk-71.64",
    "nomorUrut": 71.64,
    "tanggal": "29 Mei 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "Petugas Pendataan Sensus Ekonomi 2026",
    "kodeKlasifikasi": "PL.300",
    "nomorSurat": "B-71.64/7301/PL.300/2026",
    "perihal": "Petugas Pendataan Sensus Ekonomi 2026 Affifah Adzra Aulia"
  },
  {
    "id": "ppk-71.65",
    "nomorUrut": 71.65,
    "tanggal": "29 Mei 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "Petugas Pendataan Sensus Ekonomi 2026",
    "kodeKlasifikasi": "PL.300",
    "nomorSurat": "B-71.65/7301/PL.300/2026",
    "perihal": "Petugas Pendataan Sensus Ekonomi 2026 Ahry Ramadhani"
  },
  {
    "id": "ppk-71.66",
    "nomorUrut": 71.66,
    "tanggal": "29 Mei 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "Petugas Pendataan Sensus Ekonomi 2026",
    "kodeKlasifikasi": "PL.300",
    "nomorSurat": "B-71.66/7301/PL.300/2026",
    "perihal": "Petugas Pendataan Sensus Ekonomi 2026 Andi Risnayati Ahmadani"
  },
  {
    "id": "ppk-71.67",
    "nomorUrut": 71.67,
    "tanggal": "29 Mei 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "Petugas Pendataan Sensus Ekonomi 2026",
    "kodeKlasifikasi": "PL.300",
    "nomorSurat": "B-71.67/7301/PL.300/2026",
    "perihal": "Petugas Pendataan Sensus Ekonomi 2026 Arinda Sarlani"
  },
  {
    "id": "ppk-71.68",
    "nomorUrut": 71.68,
    "tanggal": "29 Mei 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "Petugas Pendataan Sensus Ekonomi 2026",
    "kodeKlasifikasi": "PL.300",
    "nomorSurat": "B-71.68/7301/PL.300/2026",
    "perihal": "Petugas Pendataan Sensus Ekonomi 2026 Aulia Agustina"
  },
  {
    "id": "ppk-71.69",
    "nomorUrut": 71.69,
    "tanggal": "29 Mei 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "Petugas Pendataan Sensus Ekonomi 2026",
    "kodeKlasifikasi": "PL.300",
    "nomorSurat": "B-71.69/7301/PL.300/2026",
    "perihal": "Petugas Pendataan Sensus Ekonomi 2026 Ika Lestari"
  },
  {
    "id": "ppk-71.70",
    "nomorUrut": 71.7,
    "tanggal": "29 Mei 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "Petugas Pendataan Sensus Ekonomi 2026",
    "kodeKlasifikasi": "PL.300",
    "nomorSurat": "B-71.70/7301/PL.300/2026",
    "perihal": "Petugas Pendataan Sensus Ekonomi 2026 May Tita Kirania"
  },
  {
    "id": "ppk-71.71",
    "nomorUrut": 71.71,
    "tanggal": "29 Mei 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "Petugas Pendataan Sensus Ekonomi 2026",
    "kodeKlasifikasi": "PL.300",
    "nomorSurat": "B-71.71/7301/PL.300/2026",
    "perihal": "Petugas Pendataan Sensus Ekonomi 2026 Nur Hikmah, S.Pd"
  },
  {
    "id": "ppk-71.72",
    "nomorUrut": 71.72,
    "tanggal": "29 Mei 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "Petugas Pendataan Sensus Ekonomi 2026",
    "kodeKlasifikasi": "PL.300",
    "nomorSurat": "B-71.72/7301/PL.300/2026",
    "perihal": "Petugas Pendataan Sensus Ekonomi 2026 Nur Wahidah"
  },
  {
    "id": "ppk-71.73",
    "nomorUrut": 71.73,
    "tanggal": "29 Mei 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "Petugas Pendataan Sensus Ekonomi 2026",
    "kodeKlasifikasi": "PL.300",
    "nomorSurat": "B-71.73/7301/PL.300/2026",
    "perihal": "Petugas Pendataan Sensus Ekonomi 2026 Nurul Magefirah"
  },
  {
    "id": "ppk-71.74",
    "nomorUrut": 71.74,
    "tanggal": "29 Mei 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "Petugas Pendataan Sensus Ekonomi 2026",
    "kodeKlasifikasi": "PL.300",
    "nomorSurat": "B-71.74/7301/PL.300/2026",
    "perihal": "Petugas Pendataan Sensus Ekonomi 2026 Rahamuddin"
  },
  {
    "id": "ppk-71.75",
    "nomorUrut": 71.75,
    "tanggal": "29 Mei 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "Petugas Pendataan Sensus Ekonomi 2026",
    "kodeKlasifikasi": "PL.300",
    "nomorSurat": "B-71.75/7301/PL.300/2026",
    "perihal": "Petugas Pendataan Sensus Ekonomi 2026 Widyanti Lia Lestari"
  },
  {
    "id": "ppk-71.76",
    "nomorUrut": 71.76,
    "tanggal": "29 Mei 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "Petugas Pendataan Sensus Ekonomi 2026",
    "kodeKlasifikasi": "PL.300",
    "nomorSurat": "B-71.76/7301/PL.300/2026",
    "perihal": "Petugas Pendataan Sensus Ekonomi 2026 Agus Ashari"
  },
  {
    "id": "ppk-71.77",
    "nomorUrut": 71.77,
    "tanggal": "29 Mei 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "Petugas Pendataan Sensus Ekonomi 2026",
    "kodeKlasifikasi": "PL.300",
    "nomorSurat": "B-71.77/7301/PL.300/2026",
    "perihal": "Petugas Pendataan Sensus Ekonomi 2026 Armita"
  },
  {
    "id": "ppk-71.78",
    "nomorUrut": 71.78,
    "tanggal": "29 Mei 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "Petugas Pendataan Sensus Ekonomi 2026",
    "kodeKlasifikasi": "PL.300",
    "nomorSurat": "B-71.78/7301/PL.300/2026",
    "perihal": "Petugas Pendataan Sensus Ekonomi 2026 Ika Pertiwi"
  },
  {
    "id": "ppk-71.79",
    "nomorUrut": 71.79,
    "tanggal": "29 Mei 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "Petugas Pendataan Sensus Ekonomi 2026",
    "kodeKlasifikasi": "PL.300",
    "nomorSurat": "B-71.79/7301/PL.300/2026",
    "perihal": "Petugas Pendataan Sensus Ekonomi 2026 Indah Puspitasari"
  },
  {
    "id": "ppk-71.80",
    "nomorUrut": 71.8,
    "tanggal": "29 Mei 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "Petugas Pendataan Sensus Ekonomi 2026",
    "kodeKlasifikasi": "PL.300",
    "nomorSurat": "B-71.80/7301/PL.300/2026",
    "perihal": "Petugas Pendataan Sensus Ekonomi 2026 Irnawati"
  },
  {
    "id": "ppk-71.81",
    "nomorUrut": 71.81,
    "tanggal": "29 Mei 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "Petugas Pendataan Sensus Ekonomi 2026",
    "kodeKlasifikasi": "PL.300",
    "nomorSurat": "B-71.81/7301/PL.300/2026",
    "perihal": "Petugas Pendataan Sensus Ekonomi 2026 Muhammad Fadlan"
  },
  {
    "id": "ppk-71.82",
    "nomorUrut": 71.82,
    "tanggal": "29 Mei 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "Petugas Pendataan Sensus Ekonomi 2026",
    "kodeKlasifikasi": "PL.300",
    "nomorSurat": "B-71.82/7301/PL.300/2026",
    "perihal": "Petugas Pendataan Sensus Ekonomi 2026 Muhammad Harsal Nur"
  },
  {
    "id": "ppk-71.83",
    "nomorUrut": 71.83,
    "tanggal": "29 Mei 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "Petugas Pendataan Sensus Ekonomi 2026",
    "kodeKlasifikasi": "PL.300",
    "nomorSurat": "B-71.83/7301/PL.300/2026",
    "perihal": "Petugas Pendataan Sensus Ekonomi 2026 Mutmainah"
  },
  {
    "id": "ppk-71.84",
    "nomorUrut": 71.84,
    "tanggal": "29 Mei 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "Petugas Pendataan Sensus Ekonomi 2026",
    "kodeKlasifikasi": "PL.300",
    "nomorSurat": "B-71.84/7301/PL.300/2026",
    "perihal": "Petugas Pendataan Sensus Ekonomi 2026 Nisba"
  },
  {
    "id": "ppk-71.85",
    "nomorUrut": 71.85,
    "tanggal": "29 Mei 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "Petugas Pendataan Sensus Ekonomi 2026",
    "kodeKlasifikasi": "PL.300",
    "nomorSurat": "B-71.85/7301/PL.300/2026",
    "perihal": "Petugas Pendataan Sensus Ekonomi 2026 Nurul Hidayatil Azizah"
  },
  {
    "id": "ppk-71.86",
    "nomorUrut": 71.86,
    "tanggal": "29 Mei 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "Petugas Pendataan Sensus Ekonomi 2026",
    "kodeKlasifikasi": "PL.300",
    "nomorSurat": "B-71.86/7301/PL.300/2026",
    "perihal": "Petugas Pendataan Sensus Ekonomi 2026 Radinal Akhsan"
  },
  {
    "id": "ppk-71.87",
    "nomorUrut": 71.87,
    "tanggal": "29 Mei 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "Petugas Pendataan Sensus Ekonomi 2026",
    "kodeKlasifikasi": "PL.300",
    "nomorSurat": "B-71.87/7301/PL.300/2026",
    "perihal": "Petugas Pendataan Sensus Ekonomi 2026 Rezeki Awalia Nur"
  },
  {
    "id": "ppk-71.88",
    "nomorUrut": 71.88,
    "tanggal": "29 Mei 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "Petugas Pendataan Sensus Ekonomi 2026",
    "kodeKlasifikasi": "PL.300",
    "nomorSurat": "B-71.88/7301/PL.300/2026",
    "perihal": "Petugas Pendataan Sensus Ekonomi 2026 Riska Alfiana"
  },
  {
    "id": "ppk-71.89",
    "nomorUrut": 71.89,
    "tanggal": "29 Mei 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "Petugas Pendataan Sensus Ekonomi 2026",
    "kodeKlasifikasi": "PL.300",
    "nomorSurat": "B-71.89/7301/PL.300/2026",
    "perihal": "Petugas Pendataan Sensus Ekonomi 2026 Sudirman"
  },
  {
    "id": "ppk-71.90",
    "nomorUrut": 71.9,
    "tanggal": "29 Mei 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "Petugas Pendataan Sensus Ekonomi 2026",
    "kodeKlasifikasi": "PL.300",
    "nomorSurat": "B-71.90/7301/PL.300/2026",
    "perihal": "Petugas Pendataan Sensus Ekonomi 2026 Syamsiah"
  },
  {
    "id": "ppk-71.91",
    "nomorUrut": 71.91,
    "tanggal": "29 Mei 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "Petugas Pendataan Sensus Ekonomi 2026",
    "kodeKlasifikasi": "PL.300",
    "nomorSurat": "B-71.91/7301/PL.300/2026",
    "perihal": "Petugas Pendataan Sensus Ekonomi 2026 muh irsyam bachri"
  },
  {
    "id": "ppk-71.92",
    "nomorUrut": 71.92,
    "tanggal": "29 Mei 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "Petugas Pendataan Sensus Ekonomi 2026",
    "kodeKlasifikasi": "PL.300",
    "nomorSurat": "B-71.92/7301/PL.300/2026",
    "perihal": "Petugas Pendataan Sensus Ekonomi 2026 Abdul Kadir"
  },
  {
    "id": "ppk-71.93",
    "nomorUrut": 71.93,
    "tanggal": "29 Mei 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "Petugas Pendataan Sensus Ekonomi 2026",
    "kodeKlasifikasi": "PL.300",
    "nomorSurat": "B-71.93/7301/PL.300/2026",
    "perihal": "Petugas Pendataan Sensus Ekonomi 2026 Andi Fainal M"
  },
  {
    "id": "ppk-71.94",
    "nomorUrut": 71.94,
    "tanggal": "29 Mei 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "Petugas Pendataan Sensus Ekonomi 2026",
    "kodeKlasifikasi": "PL.300",
    "nomorSurat": "B-71.94/7301/PL.300/2026",
    "perihal": "Petugas Pendataan Sensus Ekonomi 2026 Andini Putri Ginasi"
  },
  {
    "id": "ppk-71.95",
    "nomorUrut": 71.95,
    "tanggal": "29 Mei 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "Petugas Pendataan Sensus Ekonomi 2026",
    "kodeKlasifikasi": "PL.300",
    "nomorSurat": "B-71.95/7301/PL.300/2026",
    "perihal": "Petugas Pendataan Sensus Ekonomi 2026 Ayu Hartina"
  },
  {
    "id": "ppk-71.96",
    "nomorUrut": 71.96,
    "tanggal": "29 Mei 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "Petugas Pendataan Sensus Ekonomi 2026",
    "kodeKlasifikasi": "PL.300",
    "nomorSurat": "B-71.96/7301/PL.300/2026",
    "perihal": "Petugas Pendataan Sensus Ekonomi 2026 Fadia Naura Agustin"
  },
  {
    "id": "ppk-71.97",
    "nomorUrut": 71.97,
    "tanggal": "29 Mei 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "Petugas Pendataan Sensus Ekonomi 2026",
    "kodeKlasifikasi": "PL.300",
    "nomorSurat": "B-71.97/7301/PL.300/2026",
    "perihal": "Petugas Pendataan Sensus Ekonomi 2026 RESKI AMALIYA, SP"
  },
  {
    "id": "ppk-71.98",
    "nomorUrut": 71.98,
    "tanggal": "29 Mei 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "Petugas Pendataan Sensus Ekonomi 2026",
    "kodeKlasifikasi": "PL.300",
    "nomorSurat": "B-71.98/7301/PL.300/2026",
    "perihal": "Petugas Pendataan Sensus Ekonomi 2026 Ratu Adelia Putri"
  },
  {
    "id": "ppk-71.99",
    "nomorUrut": 71.99,
    "tanggal": "29 Mei 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "Petugas Pendataan Sensus Ekonomi 2026",
    "kodeKlasifikasi": "PL.300",
    "nomorSurat": "B-71.99/7301/PL.300/2026",
    "perihal": "Petugas Pendataan Sensus Ekonomi 2026 Rico Aryanto"
  },
  {
    "id": "ppk-71.100",
    "nomorUrut": 71.1,
    "tanggal": "29 Mei 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "Petugas Pendataan Sensus Ekonomi 2026",
    "kodeKlasifikasi": "PL.300",
    "nomorSurat": "B-71.100/7301/PL.300/2026",
    "perihal": "Petugas Pendataan Sensus Ekonomi 2026 Rika Yosita"
  },
  {
    "id": "ppk-71.101",
    "nomorUrut": 71.101,
    "tanggal": "29 Mei 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "Petugas Pendataan Sensus Ekonomi 2026",
    "kodeKlasifikasi": "PL.300",
    "nomorSurat": "B-71.101/7301/PL.300/2026",
    "perihal": "Petugas Pendataan Sensus Ekonomi 2026 Rini Febriani"
  },
  {
    "id": "ppk-71.102",
    "nomorUrut": 71.102,
    "tanggal": "29 Mei 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "Petugas Pendataan Sensus Ekonomi 2026",
    "kodeKlasifikasi": "PL.300",
    "nomorSurat": "B-71.102/7301/PL.300/2026",
    "perihal": "Petugas Pendataan Sensus Ekonomi 2026 Samsam"
  },
  {
    "id": "ppk-71.103",
    "nomorUrut": 71.103,
    "tanggal": "29 Mei 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "Petugas Pendataan Sensus Ekonomi 2026",
    "kodeKlasifikasi": "PL.300",
    "nomorSurat": "B-71.103/7301/PL.300/2026",
    "perihal": "Petugas Pendataan Sensus Ekonomi 2026 Satriyana Rahmah"
  },
  {
    "id": "ppk-71.104",
    "nomorUrut": 71.104,
    "tanggal": "29 Mei 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "Petugas Pendataan Sensus Ekonomi 2026",
    "kodeKlasifikasi": "PL.300",
    "nomorSurat": "B-71.104/7301/PL.300/2026",
    "perihal": "Petugas Pendataan Sensus Ekonomi 2026 A Nadia Puspitasari"
  },
  {
    "id": "ppk-71.105",
    "nomorUrut": 71.105,
    "tanggal": "29 Mei 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "Petugas Pendataan Sensus Ekonomi 2026",
    "kodeKlasifikasi": "PL.300",
    "nomorSurat": "B-71.105/7301/PL.300/2026",
    "perihal": "Petugas Pendataan Sensus Ekonomi 2026 Annisa Shalshabila Putri Agam"
  },
  {
    "id": "ppk-71.106",
    "nomorUrut": 71.106,
    "tanggal": "29 Mei 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "Petugas Pendataan Sensus Ekonomi 2026",
    "kodeKlasifikasi": "PL.300",
    "nomorSurat": "B-71.106/7301/PL.300/2026",
    "perihal": "Petugas Pendataan Sensus Ekonomi 2026 Asmiati"
  },
  {
    "id": "ppk-71.107",
    "nomorUrut": 71.107,
    "tanggal": "29 Mei 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "Petugas Pendataan Sensus Ekonomi 2026",
    "kodeKlasifikasi": "PL.300",
    "nomorSurat": "B-71.107/7301/PL.300/2026",
    "perihal": "Petugas Pendataan Sensus Ekonomi 2026 Hamrayani"
  },
  {
    "id": "ppk-71.108",
    "nomorUrut": 71.108,
    "tanggal": "29 Mei 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "Petugas Pendataan Sensus Ekonomi 2026",
    "kodeKlasifikasi": "PL.300",
    "nomorSurat": "B-71.108/7301/PL.300/2026",
    "perihal": "Petugas Pendataan Sensus Ekonomi 2026 Hasbiah"
  },
  {
    "id": "ppk-71.109",
    "nomorUrut": 71.109,
    "tanggal": "29 Mei 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "Petugas Pendataan Sensus Ekonomi 2026",
    "kodeKlasifikasi": "PL.300",
    "nomorSurat": "B-71.109/7301/PL.300/2026",
    "perihal": "Petugas Pendataan Sensus Ekonomi 2026 Indi Nur Ridwan"
  },
  {
    "id": "ppk-71.110",
    "nomorUrut": 71.11,
    "tanggal": "29 Mei 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "Petugas Pendataan Sensus Ekonomi 2026",
    "kodeKlasifikasi": "PL.300",
    "nomorSurat": "B-71.110/7301/PL.300/2026",
    "perihal": "Petugas Pendataan Sensus Ekonomi 2026 Nur Jannah"
  },
  {
    "id": "ppk-71.111",
    "nomorUrut": 71.111,
    "tanggal": "29 Mei 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "Petugas Pendataan Sensus Ekonomi 2026",
    "kodeKlasifikasi": "PL.300",
    "nomorSurat": "B-71.111/7301/PL.300/2026",
    "perihal": "Petugas Pendataan Sensus Ekonomi 2026 Nurbaya"
  },
  {
    "id": "ppk-71.112",
    "nomorUrut": 71.112,
    "tanggal": "29 Mei 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "Petugas Pendataan Sensus Ekonomi 2026",
    "kodeKlasifikasi": "PL.300",
    "nomorSurat": "B-71.112/7301/PL.300/2026",
    "perihal": "Petugas Pendataan Sensus Ekonomi 2026 Nurul Azisah"
  },
  {
    "id": "ppk-71.113",
    "nomorUrut": 71.113,
    "tanggal": "29 Mei 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "Petugas Pendataan Sensus Ekonomi 2026",
    "kodeKlasifikasi": "PL.300",
    "nomorSurat": "B-71.113/7301/PL.300/2026",
    "perihal": "Petugas Pendataan Sensus Ekonomi 2026 Nurul Wathania"
  },
  {
    "id": "ppk-71.114",
    "nomorUrut": 71.114,
    "tanggal": "29 Mei 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "Petugas Pendataan Sensus Ekonomi 2026",
    "kodeKlasifikasi": "PL.300",
    "nomorSurat": "B-71.114/7301/PL.300/2026",
    "perihal": "Petugas Pendataan Sensus Ekonomi 2026 Rika Mustika"
  },
  {
    "id": "ppk-71.115",
    "nomorUrut": 71.115,
    "tanggal": "29 Mei 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "Petugas Pendataan Sensus Ekonomi 2026",
    "kodeKlasifikasi": "PL.300",
    "nomorSurat": "B-71.115/7301/PL.300/2026",
    "perihal": "Petugas Pendataan Sensus Ekonomi 2026 Riska"
  },
  {
    "id": "ppk-71.116",
    "nomorUrut": 71.116,
    "tanggal": "29 Mei 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "Petugas Pendataan Sensus Ekonomi 2026",
    "kodeKlasifikasi": "PL.300",
    "nomorSurat": "B-71.116/7301/PL.300/2026",
    "perihal": "Petugas Pendataan Sensus Ekonomi 2026 Sri Rezkyani Marzuki"
  },
  {
    "id": "ppk-71.117",
    "nomorUrut": 71.117,
    "tanggal": "29 Mei 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "Petugas Pendataan Sensus Ekonomi 2026",
    "kodeKlasifikasi": "PL.300",
    "nomorSurat": "B-71.117/7301/PL.300/2026",
    "perihal": "Petugas Pendataan Sensus Ekonomi 2026 Andi Wirda Ayu Utami"
  },
  {
    "id": "ppk-71.118",
    "nomorUrut": 71.118,
    "tanggal": "29 Mei 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "Petugas Pendataan Sensus Ekonomi 2026",
    "kodeKlasifikasi": "PL.300",
    "nomorSurat": "B-71.118/7301/PL.300/2026",
    "perihal": "Petugas Pendataan Sensus Ekonomi 2026 Annisa Dwi Zahra"
  },
  {
    "id": "ppk-71.119",
    "nomorUrut": 71.119,
    "tanggal": "29 Mei 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "Petugas Pendataan Sensus Ekonomi 2026",
    "kodeKlasifikasi": "PL.300",
    "nomorSurat": "B-71.119/7301/PL.300/2026",
    "perihal": "Petugas Pendataan Sensus Ekonomi 2026 Aprianti"
  },
  {
    "id": "ppk-71.120",
    "nomorUrut": 71.12,
    "tanggal": "29 Mei 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "Petugas Pendataan Sensus Ekonomi 2026",
    "kodeKlasifikasi": "PL.300",
    "nomorSurat": "B-71.120/7301/PL.300/2026",
    "perihal": "Petugas Pendataan Sensus Ekonomi 2026 Indah Permatasari"
  },
  {
    "id": "ppk-71.121",
    "nomorUrut": 71.121,
    "tanggal": "29 Mei 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "Petugas Pendataan Sensus Ekonomi 2026",
    "kodeKlasifikasi": "PL.300",
    "nomorSurat": "B-71.121/7301/PL.300/2026",
    "perihal": "Petugas Pendataan Sensus Ekonomi 2026 Misbawani"
  },
  {
    "id": "ppk-71.122",
    "nomorUrut": 71.122,
    "tanggal": "29 Mei 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "Petugas Pendataan Sensus Ekonomi 2026",
    "kodeKlasifikasi": "PL.300",
    "nomorSurat": "B-71.122/7301/PL.300/2026",
    "perihal": "Petugas Pendataan Sensus Ekonomi 2026 Risaldi Putra"
  },
  {
    "id": "ppk-71.123",
    "nomorUrut": 71.123,
    "tanggal": "29 Mei 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "Petugas Pemeriksaan Sensus Ekonomi 2026",
    "kodeKlasifikasi": "PL.300",
    "nomorSurat": "B-71.123/7301/PL.300/2026",
    "perihal": "Petugas Pemeriksaan Sensus Ekonomi 2026 Jihan Widiastra Sahik"
  },
  {
    "id": "ppk-71.124",
    "nomorUrut": 71.124,
    "tanggal": "29 Mei 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "Petugas Pemeriksaan Sensus Ekonomi 2026",
    "kodeKlasifikasi": "PL.300",
    "nomorSurat": "B-71.124/7301/PL.300/2026",
    "perihal": "Petugas Pemeriksaan Sensus Ekonomi 2026 Rahmawati M Nur"
  },
  {
    "id": "ppk-71.125",
    "nomorUrut": 71.125,
    "tanggal": "29 Mei 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "Petugas Pemeriksaan Sensus Ekonomi 2026",
    "kodeKlasifikasi": "PL.300",
    "nomorSurat": "B-71.125/7301/PL.300/2026",
    "perihal": "Petugas Pemeriksaan Sensus Ekonomi 2026 Virgo Karseka"
  },
  {
    "id": "ppk-71.126",
    "nomorUrut": 71.126,
    "tanggal": "29 Mei 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "Petugas Pemeriksaan Sensus Ekonomi 2026",
    "kodeKlasifikasi": "PL.300",
    "nomorSurat": "B-71.126/7301/PL.300/2026",
    "perihal": "Petugas Pemeriksaan Sensus Ekonomi 2026 Yulias"
  },
  {
    "id": "ppk-71.127",
    "nomorUrut": 71.127,
    "tanggal": "29 Mei 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "Petugas Pemeriksaan Sensus Ekonomi 2026",
    "kodeKlasifikasi": "PL.300",
    "nomorSurat": "B-71.127/7301/PL.300/2026",
    "perihal": "Petugas Pemeriksaan Sensus Ekonomi 2026 Jirana Patta Putri"
  },
  {
    "id": "ppk-71.128",
    "nomorUrut": 71.128,
    "tanggal": "29 Mei 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "Petugas Pemeriksaan Sensus Ekonomi 2026",
    "kodeKlasifikasi": "PL.300",
    "nomorSurat": "B-71.128/7301/PL.300/2026",
    "perihal": "Petugas Pemeriksaan Sensus Ekonomi 2026 Nurul Mutmainna"
  },
  {
    "id": "ppk-71.129",
    "nomorUrut": 71.129,
    "tanggal": "29 Mei 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "Petugas Pemeriksaan Sensus Ekonomi 2026",
    "kodeKlasifikasi": "PL.300",
    "nomorSurat": "B-71.129/7301/PL.300/2026",
    "perihal": "Petugas Pemeriksaan Sensus Ekonomi 2026 Reski Alfiani"
  },
  {
    "id": "ppk-71.130",
    "nomorUrut": 71.13,
    "tanggal": "29 Mei 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "Petugas Pemeriksaan Sensus Ekonomi 2026",
    "kodeKlasifikasi": "PL.300",
    "nomorSurat": "B-71.130/7301/PL.300/2026",
    "perihal": "Petugas Pemeriksaan Sensus Ekonomi 2026 Ahmad Rais"
  },
  {
    "id": "ppk-71.131",
    "nomorUrut": 71.131,
    "tanggal": "29 Mei 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "Petugas Pemeriksaan Sensus Ekonomi 2026",
    "kodeKlasifikasi": "PL.300",
    "nomorSurat": "B-71.131/7301/PL.300/2026",
    "perihal": "Petugas Pemeriksaan Sensus Ekonomi 2026 Andy Noer Fadhila ayanie"
  },
  {
    "id": "ppk-71.132",
    "nomorUrut": 71.132,
    "tanggal": "29 Mei 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "Petugas Pemeriksaan Sensus Ekonomi 2026",
    "kodeKlasifikasi": "PL.300",
    "nomorSurat": "B-71.132/7301/PL.300/2026",
    "perihal": "Petugas Pemeriksaan Sensus Ekonomi 2026 Dwi Astuti Hardianti"
  },
  {
    "id": "ppk-71.133",
    "nomorUrut": 71.133,
    "tanggal": "29 Mei 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "Petugas Pemeriksaan Sensus Ekonomi 2026",
    "kodeKlasifikasi": "PL.300",
    "nomorSurat": "B-71.133/7301/PL.300/2026",
    "perihal": "Petugas Pemeriksaan Sensus Ekonomi 2026 Muhammad Nur Fadli"
  },
  {
    "id": "ppk-71.134",
    "nomorUrut": 71.134,
    "tanggal": "29 Mei 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "Petugas Pemeriksaan Sensus Ekonomi 2026",
    "kodeKlasifikasi": "PL.300",
    "nomorSurat": "B-71.134/7301/PL.300/2026",
    "perihal": "Petugas Pemeriksaan Sensus Ekonomi 2026 Andi Marlina Opu"
  },
  {
    "id": "ppk-71.135",
    "nomorUrut": 71.135,
    "tanggal": "29 Mei 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "Petugas Pemeriksaan Sensus Ekonomi 2026",
    "kodeKlasifikasi": "PL.300",
    "nomorSurat": "B-71.135/7301/PL.300/2026",
    "perihal": "Petugas Pemeriksaan Sensus Ekonomi 2026 Dewi Mardiani"
  },
  {
    "id": "ppk-71.136",
    "nomorUrut": 71.136,
    "tanggal": "29 Mei 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "Petugas Pemeriksaan Sensus Ekonomi 2026",
    "kodeKlasifikasi": "PL.300",
    "nomorSurat": "B-71.136/7301/PL.300/2026",
    "perihal": "Petugas Pemeriksaan Sensus Ekonomi 2026 Nurul ilma islamiyati"
  },
  {
    "id": "ppk-71.137",
    "nomorUrut": 71.137,
    "tanggal": "29 Mei 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "Petugas Pemeriksaan Sensus Ekonomi 2026",
    "kodeKlasifikasi": "PL.300",
    "nomorSurat": "B-71.137/7301/PL.300/2026",
    "perihal": "Petugas Pemeriksaan Sensus Ekonomi 2026 Muh Nasrul"
  },
  {
    "id": "ppk-71.138",
    "nomorUrut": 71.138,
    "tanggal": "29 Mei 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "Petugas Pemeriksaan Sensus Ekonomi 2026",
    "kodeKlasifikasi": "PL.300",
    "nomorSurat": "B-71.138/7301/PL.300/2026",
    "perihal": "Petugas Pemeriksaan Sensus Ekonomi 2026 Susi Linda"
  },
  {
    "id": "ppk-71.139",
    "nomorUrut": 71.139,
    "tanggal": "29 Mei 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "Petugas Pemeriksaan Sensus Ekonomi 2026",
    "kodeKlasifikasi": "PL.300",
    "nomorSurat": "B-71.139/7301/PL.300/2026",
    "perihal": "Petugas Pemeriksaan Sensus Ekonomi 2026 Andi Ismainna"
  },
  {
    "id": "ppk-71.140",
    "nomorUrut": 71.14,
    "tanggal": "29 Mei 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "Petugas Pemeriksaan Sensus Ekonomi 2026",
    "kodeKlasifikasi": "PL.300",
    "nomorSurat": "B-71.140/7301/PL.300/2026",
    "perihal": "Petugas Pemeriksaan Sensus Ekonomi 2026 Andi azka azizah"
  },
  {
    "id": "ppk-71.141",
    "nomorUrut": 71.141,
    "tanggal": "29 Mei 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "Petugas Pemeriksaan Sensus Ekonomi 2026",
    "kodeKlasifikasi": "PL.300",
    "nomorSurat": "B-71.141/7301/PL.300/2026",
    "perihal": "Petugas Pemeriksaan Sensus Ekonomi 2026 Nur zaman"
  },
  {
    "id": "ppk-71.142",
    "nomorUrut": 71.142,
    "tanggal": "29 Mei 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "Petugas Pendataan Sensus Ekonomi 2026 - UB",
    "kodeKlasifikasi": "PL.300",
    "nomorSurat": "B-71.142/7301/PL.300/2026",
    "perihal": "Petugas Pendataan Sensus Ekonomi 2026 - UB Bustan"
  },
  {
    "id": "ppk-71.143",
    "nomorUrut": 71.143,
    "tanggal": "29 Mei 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "Petugas Pemeriksaan Sensus Ekonomi 2026 - UB",
    "kodeKlasifikasi": "PL.300",
    "nomorSurat": "B-71.143/7301/PL.300/2026",
    "perihal": "Petugas Pemeriksaan Sensus Ekonomi 2026 - UB Konita Iladini"
  },
  {
    "id": "ppk-71.144",
    "nomorUrut": 71.144,
    "tanggal": "29 Mei 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "BPJS Ketenagakerjaan",
    "kodeKlasifikasi": "PL.300",
    "nomorSurat": "B-71.144/7301/PL.300/2025",
    "perihal": "SPK Kepesertaan Program Jaminan Kecelakaan Kerja dan Jaminan Kematian Bagi Petugas Sensus Ekonomi 2026"
  },
  {
    "id": "ppk-72",
    "nomorUrut": 72,
    "tanggal": "2 Juni 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "CV. RAYHAN SQUARE HOTEL",
    "kodeKlasifikasi": "PL.300",
    "nomorSurat": "B-72/7301/PL.300/2026",
    "perihal": "Berita Acara Pembayaran (BAP) Pengadaan Pakaian Kerja Pegawai (Navy dan Putih)"
  },
  {
    "id": "ppk-72.1",
    "nomorUrut": 72.1,
    "tanggal": "2 Juni 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "CV. RAYHAN SQUARE HOTEL",
    "kodeKlasifikasi": "PL.300",
    "nomorSurat": "B-72.1/7301/PL.300/2026",
    "perihal": "Surat Perintah Mulai Kerja (SPMK) Hotel Rayhan - Pelatihan Petugas SE Tahun 2026"
  },
  {
    "id": "ppk-73",
    "nomorUrut": 73,
    "tanggal": "11 Juni 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "CV. RAYHAN SQUARE HOTEL",
    "kodeKlasifikasi": "PL.300",
    "nomorSurat": "B-73/7301/PL.300/2026",
    "perihal": "Berita Acara Pemeriksaan Pekerjaan (BAPP) Hotel Rayhan - Pelatihan Petugas SE Tahun 2026"
  },
  {
    "id": "ppk-74",
    "nomorUrut": 74,
    "tanggal": "12 Juni 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "CV. RAYHAN SQUARE HOTEL",
    "kodeKlasifikasi": "PL.300",
    "nomorSurat": "B-74/7301/PL.300/2026",
    "perihal": "Berita Acara Serah Terima (BAST) Hotel Rayhan -  Pelatihan Petugas SE Tahun 2026"
  },
  {
    "id": "ppk-74.1",
    "nomorUrut": 74.1,
    "tanggal": "14 Juni 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "Petugas Pendataan Sensus Ekonomi 2026",
    "kodeKlasifikasi": "PL.200",
    "nomorSurat": "B-74.1/7301/PL.200/2026",
    "perihal": "Surat Pemutusan Perjanjian Kerja Petugas Pendataan Sensus Ekonomi 2026 A. Nadia Puspitasari"
  },
  {
    "id": "ppk-74.2",
    "nomorUrut": 74.2,
    "tanggal": "14 Juni 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "Petugas Pendataan Sensus Ekonomi 2026",
    "kodeKlasifikasi": "PL.200",
    "nomorSurat": "B-74.2/7301/PL.200/2026",
    "perihal": "Petugas Pendataan Sensus Ekonomi 2026 Sri Wirdayanti"
  },
  {
    "id": "ppk-75",
    "nomorUrut": 75,
    "tanggal": "15 Juni 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "CV. RAYHAN SQUARE HOTEL",
    "kodeKlasifikasi": "PL.300",
    "nomorSurat": "B-75/7301/PL.300/2026",
    "perihal": "Berita Acara Pembayaran (BAP) Hotel Rayhan -  Pelatihan Petugas SE Tahun 2026"
  },
  {
    "id": "ppk-76",
    "nomorUrut": 76,
    "tanggal": "20 Juni 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "CV Zandev",
    "kodeKlasifikasi": "PL.300",
    "nomorSurat": "B-76/7301/PL.300/2026",
    "perihal": "BAST Paket Data Petugas SE2026 - Tahap 1"
  },
  {
    "id": "ppk-76.1",
    "nomorUrut": 76.1,
    "tanggal": "30 Juni 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "Petugas Pendataan Sensus Ekonomi 2026",
    "kodeKlasifikasi": "PL.200",
    "nomorSurat": "B-76.1/7301/PL.200/2026",
    "perihal": "Surat Pemutusan Perjanjian Kerja Petugas Pendataan Sensus Ekonomi 2026 Indah Puspita Sari"
  },
  {
    "id": "ppk-76.2",
    "nomorUrut": 76.2,
    "tanggal": "1 Juli 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "Petugas Pendataan Sensus Ekonomi 2026",
    "kodeKlasifikasi": "PL.200",
    "nomorSurat": "B-76.2/7301/PL.200/2026",
    "perihal": "Petugas Pendataan Sensus Ekonomi 2026 Nur Immawati Amaliyah"
  },
  {
    "id": "ppk-77",
    "nomorUrut": 77,
    "tanggal": "6 Juli 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "PT. Rezky Service System",
    "kodeKlasifikasi": "PL.300",
    "nomorSurat": "B-77/7301/PL.300/2026",
    "perihal": "Berita Acara Pemeriksaan Pekerjaan (BAPP) Jasa Kebersihan Bulan Mei 2026"
  },
  {
    "id": "ppk-78",
    "nomorUrut": 78,
    "tanggal": "6 Juli 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "PT. Rezky Service System",
    "kodeKlasifikasi": "PL.300",
    "nomorSurat": "B-78/7301/PL.300/2026",
    "perihal": "Berita Acara Pemeriksaan Pekerjaan (BAPP) Jasa Kebersihan Bulan Juni 2026"
  },
  {
    "id": "ppk-79",
    "nomorUrut": 79,
    "tanggal": "7 Juli 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "PT. Rezky Service System",
    "kodeKlasifikasi": "PL.300",
    "nomorSurat": "B-79/7301/PL.300/2026",
    "perihal": "Berita Acara Serah Terima (BAST) Jasa Kebersihan Bulan Mei 2026"
  },
  {
    "id": "ppk-80",
    "nomorUrut": 80,
    "tanggal": "7 Juli 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "PT. Rezky Service System",
    "kodeKlasifikasi": "PL.300",
    "nomorSurat": "B-80/7301/PL.300/2026",
    "perihal": "Berita Acara Serah Terima (BAST) Jasa Kebersihan Bulan Juni 2026"
  },
  {
    "id": "ppk-81",
    "nomorUrut": 81,
    "tanggal": "8 Juli 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "PT. Rezky Service System",
    "kodeKlasifikasi": "PL.300",
    "nomorSurat": "B-81/7301/PL.300/2026",
    "perihal": "Berita Acara Pembayaran (BAP) Jasa Kebersihan Bulan Mei 2026"
  },
  {
    "id": "ppk-82",
    "nomorUrut": 82,
    "tanggal": "8 Juli 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "PT. Rezky Service System",
    "kodeKlasifikasi": "PL.300",
    "nomorSurat": "B-82/7301/PL.300/2026",
    "perihal": "Berita Acara Pembayaran (BAP) Jasa Kebersihan Bulan Juni 2026"
  },
  {
    "id": "ppk-83",
    "nomorUrut": 83,
    "tanggal": "20 Juli 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "CV Zandev",
    "kodeKlasifikasi": "PL.300",
    "nomorSurat": "B-83/7301/PL.300/2026",
    "perihal": "BAST Paket Data Petugas SE2026 - Tahap 2"
  },
  {
    "id": "ppk-83.1",
    "nomorUrut": 83.1,
    "tanggal": "24 Juli 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "UD Areso",
    "kodeKlasifikasi": "PL.210",
    "nomorSurat": "B-83.1/7301/PL.210/2026",
    "perihal": "Berita Acara Penetapan Harga Perkiraan Sendiri (HPS) Pengadaan Kuesioner dan Buku Pedoman SUSENAS September dan SERUTI Triwulan III Tahun 2026"
  },
  {
    "id": "ppk-83.2",
    "nomorUrut": 83.2,
    "tanggal": "24 Juli 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "UD Areso",
    "kodeKlasifikasi": "PL.210",
    "nomorSurat": "B-83.2/7301/PL.210/2026",
    "perihal": "Permohonan Pejabat Pengadaan untuk  Pengadaan Kuesioner dan Buku Pedoman SUSENAS September dan SERUTI Triwulan III Tahun 2026"
  },
  {
    "id": "ppk-83.3",
    "nomorUrut": 83.3,
    "tanggal": "27 Juli 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "UD Areso",
    "kodeKlasifikasi": "PL.210",
    "nomorSurat": "B-83.3/7301/PL.210/2026",
    "perihal": "Surat Pesanan Pengadaan Kuesioner dan Buku Pedoman SUSENAS September dan SERUTI Triwulan III Tahun 2026"
  },
  {
    "id": "ppk-84",
    "nomorUrut": 84,
    "tanggal": "10 Agustus 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "PT. Rezky Service System",
    "kodeKlasifikasi": "PL.300",
    "nomorSurat": "B-84/7301/PL.300/2026",
    "perihal": "Berita Acara Pemeriksaan Pekerjaan (BAPP) Jasa Kebersihan Bulan Juli 2026"
  },
  {
    "id": "ppk-85",
    "nomorUrut": 85,
    "tanggal": "11 Agustus 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "PT. Rezky Service System",
    "kodeKlasifikasi": "PL.300",
    "nomorSurat": "B-85/7301/PL.300/2026",
    "perihal": "Berita Acara Serah Terima (BAST) Jasa Kebersihan Bulan Juli 2026"
  },
  {
    "id": "ppk-86",
    "nomorUrut": 86,
    "tanggal": "12 Agustus 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "PT. Rezky Service System",
    "kodeKlasifikasi": "PL.300",
    "nomorSurat": "B-86/7301/PL.300/2026",
    "perihal": "Berita Acara Pembayaran (BAP) Jasa Kebersihan Bulan Juli 2026"
  },
  {
    "id": "ppk-87",
    "nomorUrut": 87,
    "tanggal": "12 Agustus 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "BPS Selayar",
    "kodeKlasifikasi": "PL.300",
    "nomorSurat": "B-87/7301/PL.300/2026",
    "perihal": "Berita Acara Penetapan Spesifikasi Teknis dan Rencana Anggaran Biaya (RAB) Fullday SUSENAS September dan Seruti Triwullan 3 Tahun 2026"
  },
  {
    "id": "ppk-88",
    "nomorUrut": 88,
    "tanggal": "12 Agustus 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "BPS Selayar",
    "kodeKlasifikasi": "PL.300",
    "nomorSurat": "B-88/7301/PL.300/2026",
    "perihal": "Berita Acara Penetapan HPS Fullday SUSENAS September dan Seruti Triwullan 3 Tahun 2026"
  },
  {
    "id": "ppk-89",
    "nomorUrut": 89,
    "tanggal": "12 Agustus 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "BPS Provinsi Sulawesi Selatan",
    "kodeKlasifikasi": "PL.300",
    "nomorSurat": "B-89/7301/PL.300/2026",
    "perihal": "Surat Pernyataan KPA untuk Fullday SUSENAS September dan Seruti Triwullan 3 Tahun 2026"
  },
  {
    "id": "ppk-90",
    "nomorUrut": 90,
    "tanggal": "12 Agustus 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "Pejabat Pengadaan Baranga/Jasa",
    "kodeKlasifikasi": "PL.300",
    "nomorSurat": "B-90/7301/PL.300/2026",
    "perihal": "Permohonan Pejabat Pengadaan Fullday SUSENAS September dan Seruti Triwullan 3 Tahun 2026"
  },
  {
    "id": "ppk-91",
    "nomorUrut": 91,
    "tanggal": "13 Agustus 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "BPS Selayar",
    "kodeKlasifikasi": "PL.300",
    "nomorSurat": "B-91/7301/PL.300/2026",
    "perihal": "Dokumen Pemilihan"
  },
  {
    "id": "ppk-92",
    "nomorUrut": 92,
    "tanggal": "13 Agustus 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "CV. RAYHAN SQUARE HOTEL",
    "kodeKlasifikasi": "PL.300",
    "nomorSurat": "B-92/7301/PL.300/2026",
    "perihal": "Surat Penawaran Pekerjaan Rayhan"
  },
  {
    "id": "ppk-93",
    "nomorUrut": 93,
    "tanggal": "14 Agustus 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "BPS Selayar",
    "kodeKlasifikasi": "PL.300",
    "nomorSurat": "B-93/7301/PL.300/2026",
    "perihal": "Berita Acara Evaluasi Penawaran, Klarifikasi dan Negosiasi Teknis dan Harga"
  },
  {
    "id": "ppk-94",
    "nomorUrut": 94,
    "tanggal": "14 Agustus 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "BPS Selayar",
    "kodeKlasifikasi": "PL.300",
    "nomorSurat": "B-94/7301/PL.300/2026",
    "perihal": "Berita Acara Hasil Pemilihan Penyedia"
  },
  {
    "id": "ppk-94.1",
    "nomorUrut": 94.1,
    "tanggal": "17 Agustus 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "UD Areso",
    "kodeKlasifikasi": "PL.210",
    "nomorSurat": "B-94.1/7301/PL.210/2026",
    "perihal": "Berita Acara Pemeriksaan Pekerjaan (BAPP)  Pengadaan Kuesioner dan Buku Pedoman SUSENAS September dan SERUTI Triwulan III Tahun 2026"
  },
  {
    "id": "ppk-94.2",
    "nomorUrut": 94.2,
    "tanggal": "18 Agustus 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "UD Areso",
    "kodeKlasifikasi": "PL.210",
    "nomorSurat": "B-94.2/7301/PL.210/2026",
    "perihal": "Berita Acara Serah Terima (BAST) Pengadaan Kuesioner dan Buku Pedoman SUSENAS September dan SERUTI Triwulan III Tahun 2026"
  },
  {
    "id": "ppk-95",
    "nomorUrut": 95,
    "tanggal": "18 Agustus 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "CV. RAYHAN SQUARE HOTEL",
    "kodeKlasifikasi": "PL.300",
    "nomorSurat": "B-95/7301/PL.300/2026",
    "perihal": "Surat Perjanjian Hotel Rayhan - Pelatihan Fullday SUSENAS September dan Seruti Triwullan 3 Tahun 2026"
  },
  {
    "id": "ppk-96",
    "nomorUrut": 96,
    "tanggal": "19 Agustus 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "CV. RAYHAN SQUARE HOTEL",
    "kodeKlasifikasi": "PL.300",
    "nomorSurat": "B-96/7301/PL.300/2026",
    "perihal": "Surat Perintah Mulai Kerja (SPMK) Hotel Rayhan - Pelatihan Fullday SUSENAS September dan Seruti Triwullan 3 Tahun 2026"
  },
  {
    "id": "ppk-97",
    "nomorUrut": 97,
    "tanggal": "24 Agustus 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "CV. RAYHAN SQUARE HOTEL",
    "kodeKlasifikasi": "PL.300",
    "nomorSurat": "B-97/7301/PL.300/2026",
    "perihal": "Berita Acara Pemeriksaan Pekerjaan (BAPP) Hotel Rayhan - Pelatihan Fullday SUSENAS September dan Seruti Triwullan 3 Tahun 2026"
  },
  {
    "id": "ppk-98",
    "nomorUrut": 98,
    "tanggal": "24 Agustus 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "CV. RAYHAN SQUARE HOTEL",
    "kodeKlasifikasi": "PL.300",
    "nomorSurat": "B-98/7301/PL.300/2026",
    "perihal": "Berita Acara Serah Terima (BAST) Hotel Rayhan - Pelatihan Fullday SUSENAS September dan Seruti Triwullan 3 Tahun 2026"
  },
  {
    "id": "ppk-99",
    "nomorUrut": 99,
    "tanggal": "27 Agustus 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "CV. RAYHAN SQUARE HOTEL",
    "kodeKlasifikasi": "PL.300",
    "nomorSurat": "B-99/7301/PL.300/2026",
    "perihal": "Berita Acara Pembayaran (BAP) Hotel Rayhan - Pelatihan Fullday SUSENAS September dan Seruti Triwullan 3 Tahun 2026"
  },
  {
    "id": "ppk-100",
    "nomorUrut": 100,
    "tanggal": "27 Agustus 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "UD Areso",
    "kodeKlasifikasi": "PL.210",
    "nomorSurat": "B-100/7301/PL.210/2026",
    "perihal": "Berita Acara Pembayaran (BAP)  Pengadaan Kuesioner dan Buku Pedoman SUSENAS September dan SERUTI Triwulan III Tahun 2026"
  },
  {
    "id": "ppk-101",
    "nomorUrut": 101,
    "tanggal": "7 September 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "PT. Rezky Service System",
    "kodeKlasifikasi": "PL.300",
    "nomorSurat": "B-101/7301/PL.300/2026",
    "perihal": "Berita Acara Serah Terima (BAST) Jasa Kebersihan Bulan Agustus 2026"
  },
  {
    "id": "ppk-102",
    "nomorUrut": 102,
    "tanggal": "8 September 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "PT. Rezky Service System",
    "kodeKlasifikasi": "PL.300",
    "nomorSurat": "B-102/7301/PL.300/2026",
    "perihal": "Berita Acara Pembayaran (BAP) Jasa Kebersihan Bulan Agustus 2026"
  },
  {
    "id": "ppk-103",
    "nomorUrut": 103,
    "tanggal": "9 September 2026",
    "jenisSurat": "Eksternal",
    "tujuan": "PT. Rezky Service System",
    "kodeKlasifikasi": "PL.300",
    "nomorSurat": "B-103/7301/PL.300/2026",
    "perihal": "Berita Acara Pembayaran (BAP) Jasa Kebersihan Bulan Agustus 2026"
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
