/** A certification, award or publication shown in About. */
export interface Achievement {
  title: string;
  /** Issuer, e.g. 'Microsoft' or 'HBRP Publications'. */
  issuer: string;
  /** Display year. */
  year: string;
  /** Optional external proof URL. */
  url?: string;
  kind: 'certification' | 'award' | 'publication';
}
