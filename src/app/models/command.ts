/** Command group buckets shown as labelled sections in the palette. */
export type CommandGroup = 'navigate' | 'projects' | 'actions';

/**
 * A single runnable entry in the command palette.
 * Commands are UI behavior (they close over services), so they are built in
 * the palette component — content strings still come from `src/app/data`.
 */
export interface PaletteCommand {
  /** Unique slug, e.g. 'nav-about'. */
  readonly id: string;
  /** Group bucket rendered as a section heading. */
  readonly group: CommandGroup;
  /** Short mono chip code, e.g. 'NAV'. */
  readonly ticker: string;
  /** Primary label. */
  readonly label: string;
  /** Right-aligned mono hint ('/', 'PDF', '↗', 'copy'). */
  readonly hint?: string;
  /** Extra search terms beyond the label. */
  readonly keywords?: string;
  /** True when the palette stays open after running (inline feedback). */
  readonly keepOpen?: boolean;
  /** Side effect executed on selection (browser-only by construction). */
  readonly run: () => void;
}
