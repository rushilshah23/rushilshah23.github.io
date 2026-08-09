import { HeroContent } from '../models';
import { SITE } from './site';

/**
 * Hero section content — "signal to production" narrative.
 * The trading metaphor is intentional: the owner ships fintech systems AND
 * builds quant-style trading tooling; both are systems that act on signals.
 */
export const HERO: HeroContent = {
  eyebrow: 'All systems operational · Mumbai, IN',
  headline: 'I ship fintech platforms end-to-end,',
  highlight: 'from signal to production.',
  subhead:
    'Senior fullstack engineer — five years building lending, insurance and SaaS systems that move money. FastAPI and Node.js microservices, event-driven pipelines, Terraform-managed AWS, and the trading tooling in between.',
  primaryCta: { label: 'Start a build', target: '/contact' },
  secondaryCta: { label: 'See the work', target: '/projects' },
  highlights: [
    '5+ years in production',
    'Lending · Insurance · SaaS',
    'FastAPI · AWS · Angular',
  ],
};
