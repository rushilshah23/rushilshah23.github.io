/** An industry/domain where the owner delivers impact. */
export interface Industry {
  /** Display name, e.g. 'Insurance'. */
  name: string;
  /** One-sentence positioning for that industry. */
  description: string;
  /** Concrete capability proof points. */
  points: string[];
}
