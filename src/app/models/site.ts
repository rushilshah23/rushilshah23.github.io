/**
 * Site-wide identity and contact information.
 * Centralized so canonical URLs, structured data, and nav all share one source.
 */
export interface SiteProfile {
  name: string;
  title: string;
  tagline: string;
  summary: string;
  /** Canonical URL origin, e.g. https://example.com */
  url: string;
  email: string;
  location: string;
  /** Primary roles shown as professional brand headings. */
  roles: string[];
  /** Years of professional experience as a short label. */
  experience: string;
  resumeUrl: string;
  social: {
    github: string;
    linkedin: string;
    x: string;
    youtube: string;
  };
}
