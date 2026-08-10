import { SiteProfile } from '../models';

/**
 * Site identity — the single source of truth for name, contact, socials and
 * the canonical domain. Update `url` when the production domain is live.
 */
export const SITE: SiteProfile = {
  name: 'Rushil Shah',
  title: 'Senior Engineer',
  tagline:
    'Senior engineer shipping full-stack platforms, cloud infrastructure and GenAI systems across lending, insurance, banking and energy.',
  summary:
    'Senior engineer with 5 years building production-grade platforms across consumer lending, general insurance, life insurance, fintech SaaS and — today — energy. I own systems end-to-end: FastAPI and Node.js microservices, event-driven pipelines on Celery and RabbitMQ, Terraform-managed AWS infrastructure, and GenAI tooling from LangChain pipelines to agentic workflows — from loan origination to quote engines to AI model deployment.',
  url: 'https://rushilshah23.github.io',
  email: 'rushilshah88@gmail.com',
  location: 'Mumbai, India · Remote worldwide',
  roles: [
    'Senior Engineer',
    'Full-Stack Engineer',
    'Platform & DevOps Engineer',
    'GenAI Engineer',
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
