# Panduan Integrasi Google Apps Script - PUSAT 7301

Skrip di `google-apps-script/Code.gs` menghubungkan aplikasi web **PUSAT 7301 BPS Kabupaten Kepulauan Selayar** langsung dengan 7 Google Sheets resmi untuk membaca (*fetch*) dan menulis (*insert*) data surat secara real-time.

---

## Langkah Penerapan (Deployment)

### 1. Buka Google Apps Script
- Anda dapat membuka [script.google.com](https://script.google.com) lalu klik **+ Project Baru**, ATAU
- Buka salah satu Google Sheet resmi PUSAT 7301, klik menu **Extensions (Ekstensi) > Apps Script**.

### 2. Salin Kode
- Hapus isi editor bawaan, lalu salin dan tempel seluruh isi file [`Code.gs`](file:///Volumes/work/_Projects/PUSAT7301/google-apps-script/Code.gs).
- Beri nama proyek, misalnya: **`API-PUSAT-7301`**.

### 3. Simpan & Terapkan (Deploy as Web App)
1. Klik tombol **Deploy (Terapkan)** di pojok kanan atas > pilih **New deployment (Penerapan baru)**.
2. Klik ikon gerigi (Select type) > pilih **Web app (Aplikasi Web)**.
3. Konfigurasikan:
   - **Description**: `API Portal PUSAT 7301`
   - **Execute as (Jalankan sebagai)**: `Me (Email Anda)`
   - **Who has access (Siapa yang memiliki akses)**: `Anyone (Siapa saja)`
4. Klik **Deploy**.
5. Google akan meminta otorisasi izin akses (*Authorize access*). Pilih akun Google Anda > klik *Advanced (Lanjutan)* > klik *Go to API-PUSAT-7301 (unsafe)* > klik *Allow*.
6. Salin **Web app URL** yang dihasilkan (contoh: `https://script.google.com/macros/s/AKfycbx.../exec`).

### 4. Hubungkan ke Aplikasi PUSAT 7301
1. Buka aplikasi PUSAT 7301 di peramban.
2. Klik tombol **Sinkronisasi Google Sheet** di Header (ikon awan/sync).
3. Tempelkan Web app URL yang sudah disalin tadi.
4. Klik **Uji Koneksi** lalu klik **Tarik Data Terbaru** atau **Simpan Konfigurasi**.

---

## Endpoint API yang Didukung

- **GET `?action=ping`**: Memeriksa koneksi status skrip.
- **GET `?action=getAll`**: Mengambil seluruh data dari 7 spreadsheet sekaligus dalam format JSON terstruktur.
- **GET `?action=get&module=suratUmum`**: Mengambil data satu modul tertentu (`suratUmum`, `suratTugas`, `skKegiatan`, `bast`, `formPermintaan`, `suratPPK`, `databasePegawai`).
- **POST `{ action: "addSurat", module: "suratUmum", data: { ... } }`**: Menambahkan baris penomoran surat baru langsung ke Google Sheet yang sesuai.
