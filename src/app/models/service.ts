/**
 * A service offering — the business-facing value a client can engage.
 * Deliberately problem/solution oriented (not technology-listing).
 */
export interface Service {
  /** Unique route-friendly key, e.g. 'fullstack-development'. */
  id: string;
  /** Human readable service name. */
  title: string;
  /** One-sentence value proposition. */
  summary: string;
  /** Concrete outcomes/deliverables the client receives. */
  deliverables: string[];
  /** Relative route or external URL for the call to action. */
  ctaTarget: string;
  /** Short CTA label, e.g. 'Discuss a project'. */
  ctaLabel: string;
}
