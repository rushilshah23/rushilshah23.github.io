/** One of the two conversion tracks routed by the closing CTA band. */
export interface AudienceTrack {
  /** Unique key ('companies' | 'founders'). */
  readonly id: 'companies' | 'founders';
  /** Mono chip label on the order ticket, e.g. 'HIRE'. */
  readonly ticker: string;
  /** Ticket headline. */
  readonly title: string;
  /** Who this track is for. */
  readonly who: string;
  /** Two-to-three proof/benefit lines shown inside the ticket. */
  readonly points: readonly string[];
  /** Primary action. */
  readonly ctaLabel: string;
  /** Internal route for the primary action. */
  readonly ctaTarget: string;
  /** Optional secondary external link label. */
  readonly altLabel?: string;
  /** Optional secondary external URL (mailto counts). */
  readonly altHref?: string;
}
