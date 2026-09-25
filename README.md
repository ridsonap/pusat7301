# PUSAT 7301 - Portal Umum Satu Pintu
### Badan Pusat Statistik Kabupaten Kepulauan Selayar

Aplikasi Web Resmi Tata Naskah Dinas & Administrasi Perkantoran Terpadu untuk **Badan Pusat Statistik (BPS) Kabupaten Kepulauan Selayar (Kode Satker: 7301)**, dibangun sesuai dengan kebutuhan portal pada [Google Slides PUSAT 7301](https://docs.google.com/presentation/d/e/2PACX-1vTrZikKQb8xJnxBiOpeRj15rm8-GJnkDANvQb7tQfI4lXFnpI6VEe5jP4mAYTXaaS93MgG5t3PYi6zj/pub?start=false&loop=false&delayms=3000&slide=id.g2acf7dfd0a7_0_20).

---

## 🌟 Fitur Utama Aplikasi

### 1. 📋 Beranda Portal PUSAT 7301
* **Tampilan Identik Slide Presentasi**: 3x3 layout kartu layanan dengan desain modern, visual glassmorphism, dan logo resmi BPS.
* **Ringkasan Statistik Real-time**: Jumlah surat keluar, surat tugas, SK, BAST, form permintaan, dan data kepegawaian.
* **Pencarian Global Cepat**: Temukan naskah dinas berdasarkan nomor surat, perihal, atau tujuan dinas.

---

### 2. ✉️ Agenda & Penomoran Surat Umum
* **Format Penomoran BPS**: `B-{nomor}/7301/{kode_klasifikasi}/{tahun}` (contoh: `B-549/7301/PR.710/2026`).
* **Kategori Surat**: Surat Internal dan Surat Eksternal.
* **Dropdown Klasifikasi Arsip BPS**: Dilengkapi deskripsi lengkap (PR.710, VS.110, VS.210, VS.330, PL.300, KU.320, dll.).
* **Aksi Cepat**: 1-klik salin nomor surat, filter klasifikasi, dan ekspor data ke file CSV.
* **Tautan Spreadsheet**: Terhubung langsung ke Google Sheet Surat Umum BPS Selayar.

---

### 3. 📤 Surat Tugas & Generator Cetak Naskah Dinas Resmi
* **Penomoran Otomatis**: Format `B-{nomor}/7301/{kode_klasifikasi}/{tahun}`.
* **Multi-Select Pegawai**: Terintegrasi langsung dengan Database Pegawai 7301 (pilih nama staf/mitra yang ditugaskan).
* **Generator Cetak Resmi A4**:
  * Kop surat resmi BPS Kabupaten Kepulauan Selayar lengkap dengan logo.
  * Tabel nama pegawai pelaksana tugas (Nama, NIP 18-digit, Pangkat/Golongan, Jabatan).
  * Uraian maksud tugas, tanggal penugasan, dan pembebanan anggaran DIPA.
  * Kolom tanda tangan Kepala BPS Kabupaten Kepulauan Selayar (**Muhammad Nur, S.Sos**).
  * Siap cetak langsung ke printer atau disimpan sebagai PDF (Ctrl+P / Command+P).

---

### 4. 📂 SK Kegiatan (Surat Keputusan)
* **Penomoran Standar SK**: `{nomor} TAHUN {tahun}` (contoh: `005 TAHUN 2026`).
* **Sub / Fungsi BPS**: UMUM, IPDS, DISTRIBUSI, SOSIAL, PRODUKSI, NERWILCA.
* **Pengelolaan Honor**: Pencatatan penetapan petugas dan alokasi honor sensus/survei.

---

### 5. 🤝 BAST (Berita Acara Serah Terima)
* **Penomoran Standar BAST**: `{nomor}/7301/{kode_klasifikasi}/{tahun}`.
* **Komparisi Pihak**: Pihak Pertama (Ketua Tim / PPK) dan Pihak Kedua (Mitra Statistik / Rekanan).
* **Format Cetak BAST**: Template dokumen siap tanda tangan kedua belah pihak.

---

### 6. 📝 Form Permintaan (Belanja Bahan, Barang & Honor)
* **Kategori Belanja**:
  * Belanja Bahan (Akun 521211 - ATK habis pakai, konsumsi rapat/pelatihan, spanduk).
  * Belanja Barang (Administrasi luar kantor, transportasi lokal, sewa sarpras).
  * Jasa Profesi / Honor Petugas Sensus.
* **Penomoran Format KU.320**: `B-{nomor}/7301/KU.320/{tahun}`.

---

### 7. 💼 Surat PPK (Pejabat Pembuat Komitmen)
* **Dokumen Pengadaan**: SPMK (Surat Perintah Mulai Kerja), Penetapan HPS & RAB, Perikatan Kontrak Mitra.
* **Penomoran Format PL.300**: `B-{nomor}/7301/PL.300/{tahun}`.

---

### 8. 🎯 SKP Bulanan & Evaluasi Kinerja Pegawai
* **Matriks Kinerja Pegawai**: Evaluasi Triwulan I, II, III, IV, dan Tahunan untuk seluruh pegawai BPS Selayar.
* **Indikator**: Hasil Kerja, Perilaku Kerja (Core Values BerAKHLAK), dan Predikat Kinerja (Sangat Baik, Baik, Butuh Perbaikan, dll.).
* **Dukungan Dokumen**: Pengisian CKP, SAKIP, dan evaluasi Pembangunan Zona Integritas (ZI) WBK/WBBM.

---

### 9. 👥 Database Pegawai 7301
* **Data Lengkap 26 Pegawai BPS Kepulauan Selayar**:
  * No, Nama Lengkap & Gelar.
  * NIP Baru (18 Digit) & NIP Lama (9 Digit).
  * Pangkat & Golongan Ruang (III/d, III/b, III/a, II/d, II/c, dll.).
  * Jabatan Kedinasan.
* **Fitur CRUD**: Tambah pegawai baru, edit kenaikan pangkat/jabatan, pencarian instan, dan ekspor data ke Excel/CSV.

---

### 10. 📷 Dokumentasi & 💳 SPM Digital
* **Galeri Foto Kegiatan**: Dokumentasi pelatihan Sakernas, supervisi Susenas, Wasdal BMN, dan Pembinaan Desa Cantik.
* **Arsip SPM Digital**: Repositori berkas SPM per bulan anggaran.
* **Tautan Langsung**: Terhubung ke Google Drive resmi satker.

---

### 11. ⚡ Generator "Ambil Nomor Surat Instan"
* Tombol cepat di header untuk staf yang membutuhkan nomor surat urut berikutnya dalam hitungan detik.
* 1-klik untuk menyalin format nomor surat ke clipboard.

---

## 💻 Panduan Menjalankan Aplikasi

Aplikasi ini menggunakan **Vite + React + TypeScript + Tailwind CSS**.

### Menjalankan Server Pengembangan:
```bash
npm run dev
```
Buka browser pada: `http://localhost:3000`

### Build untuk Produksi:
```bash
npm run build
```

---

## 🏛️ Profil Satker
* **Satker**: Badan Pusat Statistik Kabupaten Kepulauan Selayar (7301)
* **Provinsi**: Sulawesi Selatan
* **Alamat**: Jl. WR. Supratman No. 20, Benteng, Kabupaten Kepulauan Selayar 92812
* **Website Resmi**: [https://selayarkab.bps.go.id](https://selayarkab.bps.go.id)
