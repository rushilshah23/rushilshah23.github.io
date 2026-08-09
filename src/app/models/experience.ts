/** A single role on the professional timeline. */
export interface Experience {
  /** Employer or client, e.g. 'HDFC ERGO (via Datacurate), Mumbai'. */
  company: string;
  /** Job title. */
  role: string;
  /** Display period, e.g. 'Jun 2023 — Present'. */
  period: string;
  /** True when this is the current role. */
  current?: boolean;
  /** One-sentence context line. */
  summary: string;
  /** Bullet proof points, outcome-first. */
  highlights: string[];
  /** Domain tags, e.g. 'Insurance', 'Data Engineering'. */
  tags: string[];
}
