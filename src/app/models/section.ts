import { NavLink } from './nav-link';

/**
 * Content for the hero (top) section of a page.
 * Business-value-first messaging; technology supports the story, not the reverse.
 */
export interface HeroContent {
  /** Pre-heading eyebrow/label, e.g. "Fullstack Engineer". */
  eyebrow: string;
  /** Primary H1 headline. */
  headline: string;
  /** Optional portion of the headline rendered in brand accent. */
  highlight: string;
  /** Typewriter phrases cycling through the headline accent (backspace + retype). */
  highlightPhrases: string[];
  /** Supporting value proposition paragraph (AEO-relevant). */
  subhead: string;
  /** Primary call-to-action. */
  primaryCta: { label: string; target: string };
  /** Secondary call-to-action. */
  secondaryCta: { label: string; target: string };
  /** Quick highlights shown beneath the copy. */
  highlights: string[];
}

/**
 * Page-level metadata used for SEO/AEO (title, description, canonical).
 */
export interface PageMeta {
  title: string;
  description: string;
  /** Route path used to build the canonical URL, e.g. '/' or '/services'. */
  path: string;
}

/**
 * A section of a route: couples navigation label to its SEO metadata.
 * This keeps nav and per-section SEO from drifting apart.
 */
export interface PageSection {
  nav: NavLink;
  meta: PageMeta;
}

/** Keyed registry of all top-level sections' SEO/nav data. */
export interface SectionsIndex {
  [key: string]: PageSection;
}
