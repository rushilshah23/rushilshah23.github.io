/**
 * A social profile link rendered as an icon in the footer/contact.
 */
export interface SocialLink {
  /** Accessible label, e.g. 'GitHub'. */
  label: string;
  /** Absolute profile URL. */
  url: string;
  /** Brand icon path under /socials/, e.g. '/socials/github.svg'. */
  icon: string;
}
