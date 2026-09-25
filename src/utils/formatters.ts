export const formatTanggalIndonesia = (dateString?: string): string => {
  if (!dateString) return '-';
  // If already in text format (e.g. "2 Januari 2026"), return as is
  if (/[a-zA-Z]/.test(dateString) && dateString.includes(' ')) {
    return dateString;
  }
  try {
    const d = new Date(dateString);
    if (isNaN(d.getTime())) return dateString;
    return new Intl.DateTimeFormat('id-ID', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    }).format(d);
  } catch {
    return dateString;
  }
};

export const formatRupiah = (val?: number): string => {
  if (val === undefined || val === null) return 'Rp 0';
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    maximumFractionDigits: 0
  }).format(val);
};

export const generateNomorSuratUmum = (nomorUrut: number, kodeKlasifikasi: string, tahun: number = new Date().getFullYear()): string => {
  return `B-${nomorUrut}/7301/${kodeKlasifikasi || 'PR.710'}/${tahun}`;
};

export const generateNomorSuratTugas = (nomorUrut: number, kodeKlasifikasi: string, tahun: number = new Date().getFullYear()): string => {
  return `B-${nomorUrut}/7301/${kodeKlasifikasi || 'VS.330'}/${tahun}`;
};

export const generateNomorSK = (nomorUrut: number, tahun: number = new Date().getFullYear()): string => {
  return `${nomorUrut.toString().padStart(3, '0')} TAHUN ${tahun}`;
};

export const generateNomorBAST = (nomorUrut: number, kodeKlasifikasi: string, tahun: number = new Date().getFullYear()): string => {
  return `${nomorUrut}/7301/${kodeKlasifikasi || 'PL.530'}/${tahun}`;
};

export const generateNomorFormPermintaan = (nomorUrut: number, tahun: number = new Date().getFullYear()): string => {
  return `B-${nomorUrut}/7301/KU.320/${tahun}`;
};

export const generateNomorSuratPPK = (nomorUrut: number, kodeKlasifikasi: string = 'PL.300', tahun: number = new Date().getFullYear()): string => {
  return `B-${nomorUrut}/7301/${kodeKlasifikasi}/${tahun}`;
};
