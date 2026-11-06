export const isValidHttpUrl = (value?: string): boolean => {
  if (!value) return false;
  const v = value.trim();
  if (!/^https?:\/\//i.test(v)) return false;
  try {
    const u = new URL(v);
    return u.protocol === 'http:' || u.protocol === 'https:';
  } catch {
    return false;
  }
};

export const isValidDateString = (value?: string): boolean => {
  if (!value) return false;
  const d = new Date(value);
  return !isNaN(d.getTime());
};

export const normalizeKode = (kode: string): string =>
  kode.trim().toUpperCase().replace('-', '.').replace(',', '.');

export const isDuplicateNomor = (
  list: { id: string; nomorSurat?: string; nomorSK?: string; nomorBAST?: string; nomorForm?: string; isKosong?: boolean; perihal?: string; uraian?: string }[],
  candidate: string,
  excludeId?: string
): boolean => {
  const c = candidate.trim().toLowerCase();
  return list.some((item) => {
    if (excludeId && item.id === excludeId) return false;
    // Slot kosong dibolehkan untuk diisi kembali
    if (item.isKosong === true) return false;
    const p = (item.perihal || item.uraian || '').trim();
    if (p === '' || p === '-' || p === '(Dibatalkan)' || p === '(Kosong)') return false;
    const vals = [item.nomorSurat, item.nomorSK, item.nomorBAST, item.nomorForm].filter(Boolean) as string[];
    return vals.some((v) => v.trim().toLowerCase() === c);
  });
};

export const isDuplicateNomorUrut = (
  list: { id: string; nomorUrut: number | string }[],
  nomorUrut: string,
  excludeId?: string
): boolean =>
  list.some((item) => String(item.nomorUrut).trim() === nomorUrut.trim() && item.id !== excludeId);
