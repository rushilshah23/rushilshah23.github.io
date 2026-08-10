import { HeroContent } from '../models';
import { SITE } from './site';

/**
 * Hero section content — "signal to production" narrative.
 * The trading metaphor is intentional: the owner ships fintech systems AND
 * builds quant-style trading tooling; both are systems that act on signals.
 */
export const HERO: HeroContent = {
  eyebrow: 'All systems operational · Mumbai, IN',
  headline: 'I ship production systems end-to-end,',
  highlight: 'fintech',
  highlightPhrases: [
    'fintech',
    'insurance',
    'energy',
  ],
  subhead:
    'Senior engineer — five years across lending, insurance, banking and energy: FastAPI and Node.js microservices, event-driven pipelines, Terraform-managed AWS, and GenAI tooling from LangChain workflows to agentic systems.',
  primaryCta: { label: 'Start a build', target: '/contact' },
  secondaryCta: { label: 'See the work', target: '/projects' },
  highlights: [
    '5+ years in production',
    'Lending · Insurance · Banking · Energy',
    'Full-Stack · Platform & DevOps · GenAI',
  ],
};
