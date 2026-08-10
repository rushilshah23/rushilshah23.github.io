import { Service } from '../models';

/**
 * Service offerings, written outcome-first for a freelance/consulting
 * audience: what the client gets, not just the tech.
 */
export const SERVICES: Service[] = [
  {
    id: 'generative-ai',
    title: 'AI Agents & Document Intelligence',
    summary:
      'GenAI that does real work: LangChain pipelines, RAG over your documents, and agentic workflows that automate invoicing, parsing and back-office processes — model-agnostic and production-ready.',
    deliverables: [
      'AI agents & agentic workflow automation',
      'LangChain pipelines & RAG systems',
      'Invoice & document processing with LLMs',
      'AI integration on AWS (Lambda layers)',
    ],
    ctaTarget: '/contact',
    ctaLabel: 'Explore AI opportunities',
  },
  {
    id: 'fullstack-development',
    title: 'Full-Stack Application Development',
    summary:
      'Custom SaaS platforms, internal tools and production APIs designed to scale with your business — from first commit to deployed product.',
    deliverables: [
      'SaaS platforms & web applications',
      'Internal tools and dashboards',
      'REST & event-driven APIs',
      'Authentication, payments & integrations',
    ],
    ctaTarget: '/contact',
    ctaLabel: 'Discuss a project',
  },
  {
    id: 'cloud-devops',
    title: 'Cloud & DevOps',
    summary:
      'Resilient cloud architecture and automation that cut cost, remove manual work and raise availability — with Infrastructure as Code from day one.',
    deliverables: [
      'AWS architecture design',
      'Infrastructure as Code (Terraform)',
      'CI/CD pipelines & automation',
      'Docker, Kubernetes & observability',
    ],
    ctaTarget: '/contact',
    ctaLabel: 'Modernize my infrastructure',
  },
  {
    id: 'technical-consulting',
    title: 'Technical Consulting',
    summary:
      'Architecture reviews, performance tuning and cloud modernization guided by 5+ years shipping in regulated industries.',
    deliverables: [
      'Architecture & code reviews',
      'Performance optimization',
      'Cloud cost reduction',
      'Scalability & security audits',
    ],
    ctaTarget: '/contact',
    ctaLabel: 'Book a consultation',
  },
  {
    id: 'fractional-engineering',
    title: 'Fractional Engineering Support',
    summary:
      'Ongoing senior engineering for startups that need leadership and delivery muscle without full-time headcount.',
    deliverables: [
      'Technical leadership & mentorship',
      'System design & roadmap',
      'Engineering process setup',
      'Hiring & team guidance',
    ],
    ctaTarget: '/contact',
    ctaLabel: 'Get leadership support',
  },
];
