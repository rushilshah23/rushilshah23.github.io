import { AudienceTrack } from '../models';
import { SITE } from './site';

/**
 * The two conversion tracks routed by the closing CTA band ("Signal
 * Dispatch"). Companies/recruiters get the credibility path; founders get
 * the 0→1 / fractional-CTO path. Copy is outcome-first and honest.
 */
export const AUDIENCE_TRACKS: AudienceTrack[] = [
  {
    id: 'companies',
    ticker: 'HIRE',
    title: 'Hiring for your team?',
    who: 'For HR teams & engineering leaders at product companies.',
    points: [
      '5+ years shipping in regulated industries — lending, insurance, energy',
      '₹200Cr loan book supported · 1.5K+ hours/mo saved · 8d → 0 quote TAT',
      'Full-stack + platform/DevOps + GenAI — one engineer, three disciplines',
      'Resume, references and code on request — everything on this site traces to real work',
    ],
    ctaLabel: 'View experience & resume',
    ctaTarget: '/about',
    altLabel: 'Download resume (PDF)',
    altHref: SITE.resumeUrl,
  },
  {
    id: 'founders',
    ticker: 'BUILD',
    title: 'Have a business idea?',
    who: 'For founders who need a technical partner, not a vendor.',
    points: [
      '0→1 MVPs shipped in 4–8 weeks — fixed scope, working software every 1–2 weeks',
      'Fractional CTO: architecture, roadmap, hiring bar and delivery muscle without full-time headcount',
      'AI-native from day one — LangChain pipelines, RAG and agentic automation where they actually pay off',
      'Cloud cost-aware infra on AWS/Terraform — built to scale after the demo, not just for it',
    ],
    ctaLabel: "Let's talk about your idea",
    ctaTarget: '/contact',
    altLabel: 'Email directly',
    altHref: `mailto:${SITE.email}?subject=${encodeURIComponent('Business idea — let\u2019s connect')}`,
  },
];
