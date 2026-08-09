import { SiteProfile } from '../models';

/**
 * Site identity — the single source of truth for name, contact, socials and
 * the canonical domain. Update `url` when the production domain is live.
 */
export const SITE: SiteProfile = {
  name: 'Rushil Shah',
  title: 'Senior Fullstack Engineer',
  tagline:
    'I turn business signals into shipped fintech — lending, insurance and SaaS platforms, end-to-end.',
  summary:
    'Senior fullstack engineer with 5 years building production-grade fintech platforms across consumer lending, general insurance and life insurance. I own systems end-to-end: FastAPI and Node.js microservices, event-driven pipelines on Celery and RabbitMQ, and Terraform-managed AWS infrastructure — from loan origination to quote engines to real-time analytics.',
  url: 'https://rushilshah23.github.io',
  email: 'rushilshah88@gmail.com',
  location: 'Mumbai, India · Remote worldwide',
  roles: [
    'Senior Fullstack Engineer',
    'Backend & Microservices',
    'Fintech Platforms',
    'DevOps & Cloud',
  ],
  experience: '5+ years',
  resumeUrl: '/assets/resume.pdf',
  social: {
    github: 'https://github.com/rushilshah23',
    linkedin: 'https://www.linkedin.com/in/rushilshah88',
    x: 'https://x.com/rushilshah88',
    youtube: '',
  },
};
