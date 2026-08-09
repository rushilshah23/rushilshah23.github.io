import { SocialLink } from '../models';
import { SITE } from './site';

/**
 * Social profiles rendered in the header/footer/contact using icons from
 * /public/socials. Only entries with a non-empty URL are rendered.
 */
export const SOCIAL_LINKS: SocialLink[] = [
  { label: 'GitHub', url: SITE.social.github, icon: '/socials/github.svg' },
  { label: 'LinkedIn', url: SITE.social.linkedin, icon: '/socials/linkedin.svg' },
  { label: 'X', url: SITE.social.x, icon: '/socials/x.svg' },
  { label: 'Email', url: `mailto:${SITE.email}`, icon: '/socials/email.svg' },
];
