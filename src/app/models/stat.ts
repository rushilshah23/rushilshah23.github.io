/** A headline statistic used in the stats band. */
export interface Stat {
  /** Display value, e.g. '6+'. */
  value: string;
  /** Caption under the value. */
  label: string;
  /** Ticker-style code shown above the value, e.g. 'EXPR'. */
  ticker?: string;
  /** Market direction of the metric: up (▲, green) or down (▼, red). */
  direction?: 'up' | 'down';
}
