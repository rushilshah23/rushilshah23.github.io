import { Stat } from '../models';

/**
 * Headline statistics for the home page, styled as market quotes.
 * Every figure traces back to a real, verifiable outcome in the owner's
 * work history — the `ticker` codes are presentation only.
 */
export const STATS: Stat[] = [
  { value: '5+', label: 'Years in production', ticker: 'EXPR', direction: 'up' },
  { value: '₹200Cr', label: 'Loan book supported', ticker: 'AUM', direction: 'up' },
  { value: '1.5K+', label: 'Monthly hours saved', ticker: 'HRS', direction: 'up' },
  { value: '8d → 0', label: 'Quote turnaround', ticker: 'TAT', direction: 'up' },
];
