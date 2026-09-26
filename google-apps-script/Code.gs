/**
 * ============================================================================
 * GOOGLE APPS SCRIPT - API PUSAT 7301 BPS KABUPATEN KEPULAUAN SELAYAR
 * ============================================================================
 * Skrip ini berfungsi menghubungkan aplikasi web PUSAT 7301 dengan Google Sheets
 * resmi BPS Kabupaten Kepulauan Selayar secara dua arah (Baca & Tulis).
 *
 * FITUR:
 * 1. doGet(): Mengambil data seluruh sheet atau modul tertentu (JSON API)
 * 2. doPost(): Menyimpan penomoran surat baru langsung ke Google Sheet
 * 3. Mendukung CORS & autentikasi Web App
 *
 * CARA DEPLOY:
 * 1. Buka salah satu Google Sheet atau script.google.com
 * 2. Salin seluruh kode ini ke editor Apps Script
 * 3. Klik "Deploy" (Terapkan) > "New deployment" (Penerapan baru)
 * 4. Pilih tipe: "Web app" (Aplikasi Web)
 * 5. Execute as: "Me" (Saya)
 * 6. Who has access: "Anyone" (Siapa saja)
 * 7. Salin URL Web App yang dihasilkan ke aplikasi PUSAT 7301
 * ============================================================================
 */

// DAFTAR ID SPREADSHEET RESMI BPS KABUPATEN KEPULAUAN SELAYAR
var SPREADSHEET_IDS = {
  suratUmum: "1NJ9WpVwN8IkCJEkn6r32a2XWpWnZezZX6sNoN3Dt2R4",
  suratTugas: "13KlQUACPZ3Rz_IQBzJIRQ6WXHTyDIPvh8PgcuoObM7Y",
  skKegiatan: "1M-BGHPYvFr3k_vTCzXNg0Oe3HmoYk1eM_R06jZ2uxJo",
  bast: "12ewV7Mmn6m1LX3i-DIBBAAuGnfB0mZODR9XXw8Yo4lQ",
  formPermintaan: "1lsDhOlhQ6bYWbXQ-xOPUscwUanlf0Al0ensP3554kQY",
  suratPPK: "1_T61kej4WpRUG16sRXGWYg4mfcOg-fcgeQrsgeBWKZI",
  databasePegawai: "1hnGYZh1Ng61W8HYfYg5_DRRyvtSedklDSK2b6GEqUZc"
};

/**
 * Handle HTTP GET Requests
 */
function doGet(e) {
  try {
    var params = e ? e.parameter : {};
    var action = params.action || "getAll";

    // 1. Health check / Ping
    if (action === "ping") {
      return createJsonResponse({
        status: "success",
        message: "Google Apps Script PUSAT 7301 aktif dan terhubung",
        timestamp: new Date().toISOString()
      });
    }

    // 2. Ambil data modul tertentu
    if (action === "get" && params.module) {
      var moduleData = fetchModuleData(params.module);
      return createJsonResponse({
        status: "success",
        module: params.module,
        total: moduleData.length,
        data: moduleData
      });
    }

    // 3. Ambil seluruh data portal (Default)
    var allData = {
      suratUmum: fetchModuleData("suratUmum"),
      suratTugas: fetchModuleData("suratTugas"),
      skKegiatan: fetchModuleData("skKegiatan"),
      bast: fetchModuleData("bast"),
      formPermintaan: fetchModuleData("formPermintaan"),
      suratPPK: fetchModuleData("suratPPK"),
      pegawai: fetchModuleData("databasePegawai")
    };

    return createJsonResponse({
      status: "success",
      timestamp: new Date().toISOString(),
      counts: {
        suratUmum: allData.suratUmum.length,
        suratTugas: allData.suratTugas.length,
        skKegiatan: allData.skKegiatan.length,
        bast: allData.bast.length,
        formPermintaan: allData.formPermintaan.length,
        suratPPK: allData.suratPPK.length,
        pegawai: allData.pegawai.length
      },
      data: allData
    });

  } catch (err) {
    return createJsonResponse({
      status: "error",
      message: err.toString()
    });
  }
}

/**
 * Handle HTTP POST Requests (Insert Surat Baru / Update Data)
 */
function doPost(e) {
  try {
    var body = {};
    if (e && e.postData && e.postData.contents) {
      body = JSON.parse(e.postData.contents);
    }

    var action = body.action || "addSurat";
    var moduleName = body.module;
    var rowData = body.data;

    if (!moduleName || !rowData) {
      throw new Error("Parameter module dan data wajib diisi");
    }

    var ssId = SPREADSHEET_IDS[moduleName];
    if (!ssId) {
      throw new Error("Modul tidak dikenali: " + moduleName);
    }

    var ss = SpreadsheetApp.openById(ssId);
    var sheet = ss.getSheets()[0];

    if (action === "addSurat") {
      var rowArray = formatDataToSheetRow(moduleName, rowData);
      sheet.appendRow(rowArray);

      return createJsonResponse({
        status: "success",
        message: "Data berhasil ditambahkan ke spreadsheet " + moduleName,
        data: rowData
      });
    }

    return createJsonResponse({
      status: "error",
      message: "Action tidak didukung: " + action
    });

  } catch (err) {
    return createJsonResponse({
      status: "error",
      message: err.toString()
    });
  }
}

/**
 * Format payload JSON ke baris array sesuai susunan kolom Google Sheet
 */
function formatDataToSheetRow(moduleName, data) {
  switch (moduleName) {
    case "suratUmum":
      // Col: [Empty, No, Tanggal, Jenis Surat, Tujuan, Kode Klasifikasi, Nomor Surat, Perihal]
      return [
        "",
        data.nomorUrut,
        data.tanggal,
        data.jenisSurat || "Internal",
        data.tujuan || "",
        data.kodeKlasifikasi || "",
        data.nomorSurat || "",
        data.perihal || ""
      ];

    case "suratTugas":
      // Col: [No, Tanggal, Kode Klasifikasi, Nomor Surat, Petugas, Perihal, Tujuan]
      return [
        data.nomorUrut,
        data.tanggal,
        data.kodeKlasifikasi || "",
        data.nomorSurat || "",
        data.petugas || "Terlampir",
        data.perihal || "",
        data.tujuanTugas || ""
      ];

    case "skKegiatan":
      // Col: [No, Nomor SK, Tanggal, Uraian, Sub/Fungsi, PDF, WORD, Petugas/Honor]
      return [
        data.nomorUrut,
        data.nomorSK || "",
        data.tanggal || "",
        data.uraian || "",
        data.subFungsi || "UMUM",
        data.pdfUrl || "",
        data.wordUrl || "",
        data.petugasHonor || "Upload"
      ];

    case "bast":
      // Col: [No, Tanggal, Kode Klasifikasi, Nomor BAST, Perihal, Pihak Pertama, Pihak Kedua]
      return [
        data.nomorUrut,
        data.tanggal,
        data.kodeKlasifikasi || "",
        data.nomorBAST || "",
        data.perihal || "",
        data.pihakPertama || "Ketua Tim",
        data.pihakKedua || "Mitra"
      ];

    case "formPermintaan":
      // Col: [Empty, No, Tanggal, Tipe Form, Nomor Form, Perihal]
      return [
        "",
        data.nomorUrut,
        data.tanggal,
        data.tipeForm || "Belanja Barang",
        data.nomorForm || "",
        data.perihal || ""
      ];

    case "suratPPK":
      // Col: [Empty, No, Tanggal, Jenis Surat, Tujuan, Kode Klasifikasi, Nomor Surat, Perihal]
      return [
        "",
        data.nomorUrut,
        data.tanggal,
        data.jenisSurat || "Eksternal",
        data.tujuan || "",
        data.kodeKlasifikasi || "PL.300",
        data.nomorSurat || "",
        data.perihal || ""
      ];

    default:
      return Object.values(data);
  }
}

/**
 * Ekstraksi baris spreadsheet menjadi array of objects JSON
 */
function fetchModuleData(moduleName) {
  var ssId = SPREADSHEET_IDS[moduleName];
  if (!ssId) return [];

  var ss = SpreadsheetApp.openById(ssId);
  var sheet = ss.getSheets()[0];
  var values = sheet.getDataRange().getValues();
  if (!values || values.length <= 2) return [];

  var result = [];

  switch (moduleName) {
    case "suratUmum":
      // Header biasanya di baris ke-4 (index 3)
      for (var i = 4; i < values.length; i++) {
        var r = values[i];
        var no = String(r[1] || "").trim();
        var tgl = String(r[2] || "").trim();
        var perihal = String(r[7] || "").trim();
        var noSurat = String(r[6] || "").trim();
        if (!perihal && !noSurat) continue;

        result.push({
          id: "su-" + (no || i),
          nomorUrut: isNaN(Number(no)) ? no : Number(no),
          tanggal: tgl,
          jenisSurat: String(r[3] || "").toLowerCase().indexOf("eksternal") !== -1 ? "Eksternal" : "Internal",
          tujuan: String(r[4] || "").trim(),
          kodeKlasifikasi: String(r[5] || "").trim(),
          nomorSurat: noSurat,
          perihal: perihal
        });
      }
      break;

    case "suratTugas":
      for (var i = 3; i < values.length; i++) {
        var r = values[i];
        var no = String(r[0] || "").trim();
        var tgl = String(r[1] || "").trim();
        var perihal = String(r[5] || "").trim();
        var noSurat = String(r[3] || "").trim();
        if (!perihal && !noSurat) continue;

        result.push({
          id: "st-" + (no || i),
          nomorUrut: isNaN(Number(no)) ? no : Number(no),
          tanggal: tgl,
          kodeKlasifikasi: String(r[2] || "").trim(),
          nomorSurat: noSurat,
          petugas: String(r[4] || "").trim() || "Terlampir",
          perihal: perihal,
          tujuanTugas: String(r[6] || "").trim()
        });
      }
      break;

    case "skKegiatan":
      for (var i = 2; i < values.length; i++) {
        var r = values[i];
        var no = String(r[0] || "").trim();
        var noSK = String(r[1] || "").trim();
        var uraian = String(r[3] || "").trim();
        if (!uraian && !noSK) continue;

        result.push({
          id: "sk-" + (no || i),
          nomorUrut: isNaN(Number(no)) ? no : Number(no),
          nomorSK: noSK,
          tanggal: String(r[2] || "").trim(),
          uraian: uraian,
          subFungsi: String(r[4] || "UMUM").trim(),
          pdfUrl: String(r[5] || "").indexOf("http") === 0 ? String(r[5]).trim() : undefined,
          wordUrl: String(r[6] || "").indexOf("http") === 0 ? String(r[6]).trim() : undefined,
          petugasHonor: String(r[7] || "").trim()
        });
      }
      break;

    case "bast":
      for (var i = 3; i < values.length; i++) {
        var r = values[i];
        var no = String(r[0] || "").trim();
        var perihal = String(r[4] || "").trim();
        var noBast = String(r[3] || "").trim();
        if (!perihal && !noBast) continue;

        result.push({
          id: "bast-" + (no || i),
          nomorUrut: isNaN(Number(no)) ? no : Number(no),
          tanggal: String(r[1] || "").trim(),
          kodeKlasifikasi: String(r[2] || "").trim(),
          nomorBAST: noBast,
          perihal: perihal,
          pihakPertama: String(r[5] || "").trim() || "-",
          pihakKedua: String(r[6] || "").trim() || "-"
        });
      }
      break;

    case "formPermintaan":
      for (var i = 3; i < values.length; i++) {
        var r = values[i];
        var no = String(r[1] || "").trim();
        var perihal = String(r[5] || "").trim();
        var noForm = String(r[4] || "").trim();
        if (!perihal && !noForm) continue;

        result.push({
          id: "fp-" + (no || i),
          nomorUrut: isNaN(Number(no)) ? no : Number(no),
          tanggal: String(r[2] || "").trim(),
          tipeForm: String(r[3] || "Belanja Barang").trim(),
          nomorForm: noForm,
          perihal: perihal
        });
      }
      break;

    case "suratPPK":
      for (var i = 3; i < values.length; i++) {
        var r = values[i];
        var no = String(r[1] || "").trim();
        var perihal = String(r[7] || "").trim();
        var noSurat = String(r[6] || "").trim();
        if (!perihal && !noSurat) continue;

        result.push({
          id: "ppk-" + (no || i),
          nomorUrut: isNaN(Number(no)) ? no : Number(no),
          tanggal: String(r[2] || "").trim(),
          jenisSurat: String(r[3] || "").toLowerCase().indexOf("internal") !== -1 ? "Internal" : "Eksternal",
          tujuan: String(r[4] || "").trim(),
          kodeKlasifikasi: String(r[5] || "").trim() || "PL.300",
          nomorSurat: noSurat,
          perihal: perihal
        });
      }
      break;

    case "databasePegawai":
      for (var i = 2; i < values.length; i++) {
        var r = values[i];
        var nama = String(r[2] || "").trim();
        if (!nama) continue;
        result.push({
          id: "peg-" + i,
          no: i - 1,
          nama: nama,
          nipLama: String(r[3] || "").trim(),
          nipBaru: String(r[4] || "").trim(),
          golongan: String(r[5] || "").trim(),
          pangkat: String(r[6] || "").trim(),
          jabatan: String(r[7] || "").trim()
        });
      }
      break;
  }

  return result;
}

/**
 * Helper untuk response JSON dengan header yang tepat
 */
function createJsonResponse(data) {
  var output = ContentService.createTextOutput(JSON.stringify(data));
  output.setMimeType(ContentService.MimeType.JSON);
  return output;
}
