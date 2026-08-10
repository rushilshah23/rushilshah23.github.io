import { SectionsIndex } from '../models';
import { SITE } from './site';

/**
 * Registry of top-level sections: navigation order + per-page SEO metadata.
 * Each entry powers the header nav and the route's title/description,
 * keeping navigation and SEO in one editable source.
 */
export const SECTIONS: SectionsIndex = {
  home: {
    nav: { path: '/', label: 'Home' },
    meta: {
      title: `${SITE.name} — ${SITE.title}`,
      description: SITE.tagline,
      path: '/',
    },
  },
  services: {
    nav: { path: '/services', label: 'Services' },
    meta: {
      title: `Services — ${SITE.name}`,
      description:
        'Freelance services: full-stack development, AI & GenAI automation, microservices & API design, cloud & DevOps, and fractional engineering leadership.',
      path: '/services',
    },
  },
  expertise: {
    nav: { path: '/expertise', label: 'Expertise' },
    meta: {
      title: `Expertise — ${SITE.name}`,
      description:
        'Production stack across frontend, backend, data & messaging, cloud & DevOps, and AI & GenAI: Angular, Next.js, Python, FastAPI, Golang, AWS, Terraform, Kubernetes, Celery, LangChain and more.',
      path: '/expertise',
    },
  },
  projects: {
    nav: { path: '/projects', label: 'Projects' },
    meta: {
      title: `Projects — ${SITE.name}`,
      description:
        'Selected work: a GST-invoice processing SaaS, an authentication microservice, an NSE breakout scanner, an ITGC compliance app, and more.',
      path: '/projects',
    },
  },
  about: {
    nav: { path: '/about', label: 'About' },
    meta: {
      title: `About — ${SITE.name}`,
      description: `5+ years shipping production software across consumer lending, insurance, fintech SaaS and energy. Learn about ${SITE.name}, a ${SITE.title} based in Mumbai, India.`,
      path: '/about',
    },
  },
  contact: {
    nav: { path: '/contact', label: 'Contact' },
    meta: {
      title: `Contact — ${SITE.name}`,
      description:
        'Get in touch for freelance, consulting and fractional engineering. Free discovery call, written scope, fixed quote.',
      path: '/contact',
    },
  },
};

/** Ordered navigation links for header/mobile menus. */
export const NAV_LINKS = Object.values(SECTIONS).map((s) => s.nav);
