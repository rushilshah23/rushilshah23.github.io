import { Experience } from '../models';

/**
 * Professional timeline — real roles with outcome-first proof points,
 * sourced from the resume (source of truth).
 */
export const EXPERIENCE: Experience[] = [
  {
    company: 'Go Digital, Mumbai',
    role: 'Senior Engineer',
    period: 'Apr 2026 — Present',
    current: true,
    summary:
      'Refactoring and hardening production fintech systems — FastAPI backends and an Angular frontend, with Terraform-managed AWS across all environments.',
    highlights: [
      'Refactored a production FastAPI backend to production best practices, cutting technical debt and resolving long-standing issues across the Angular frontend — improving maintainability and shipping velocity.',
      'Managed architecture-level AWS infrastructure with Terraform across production, QA, sandbox and development environments.',
      'Configured API Gateway integrations and unblocked Lambda layer builds for AI model loading in GitHub Actions CI/CD pipelines.',
    ],
    tags: ['Fintech', 'FastAPI', 'Angular', 'Terraform', 'AWS'],
  },
  {
    company: 'Western Capital Advisors (Lending NBFC), Mumbai',
    role: 'Full Stack Developer',
    period: 'Feb 2025 — Apr 2026',
    summary:
      'Led the end-to-end Loan Origination–Loan Management (LOS–LMS) integration for a lending NBFC — automating disbursement, payment processing and reconciliation across FastAPI, Node.js and Angular.',
    highlights: [
      'Integrated LOS and LMS end-to-end, automating customer deduplication, disbursement and payment flows — saving 1,500+ monthly employee-hours and supporting growth to an INR 200 crore loan book.',
      'Designed event-driven payment reconciliation with a Razorpay webhook receiver on AWS Lambda, eliminating manual entry and reconciliation gaps.',
      'Deployed a real-time analytics platform on Apache Superset (Docker Compose, Redis, PostgreSQL, Celery) serving 100+ employees over SSL-secured Nginx.',
      'Automated MongoDB → PostgreSQL ETL into a unified data mart for consistent BI and regulatory reporting.',
      'Conducted 25+ technical interviews and helped build a core engineering team of three, owning the hiring bar for backend engineers.',
    ],
    tags: ['Lending', 'NBFC', 'FastAPI', 'AWS', 'Event-Driven'],
  },
  {
    company: 'Datacurate Technologies, Mumbai',
    role: 'Associate Consultant',
    period: 'Jun 2022 — Feb 2025',
    summary:
      'Shipped quote-to-policy and data systems for two of India\u2019s largest insurers — HDFC ERGO General Insurance and Kotak Life Insurance.',
    highlights: [
      'Designed smart insurance quote-to-policy systems in Flask and Node.js (Express), cutting turnaround from 8 business days to near-instantaneous and unlocking same-session conversions (HDFC ERGO).',
      'Fixed 8 critical security vulnerabilities in production and introduced unit/integration testing, refactoring legacy services along SOLID principles.',
      'Built an OCR-based pipeline that extracts data from competitor policy PDFs — from computer-generated to scanned copies — enabling data-driven premium pricing.',
      'Optimized ETL pipelines for complex data marts (+30% efficiency) and built a parallel-processing wrapper that cut data load times by 50% (Kotak Life).',
    ],
    tags: ['Insurance', 'Flask', 'Node.js', 'OCR', 'ETL'],
  },
  {
    company: 'IAHV / Art of Living, Mumbai',
    role: 'Flutter Developer Intern',
    period: 'Aug 2020 — Mar 2021',
    summary:
      'Led integration and development of a Flutter project-management app for watershed projects across Maharashtra.',
    highlights: [
      'Led a team of 12 building a Flutter + Node.js + Firebase mobile app for hierarchical management of watershed projects.',
      'Delivered a Google-Drive-style document manager and feedback system used by field teams.',
    ],
    tags: ['Flutter', 'Firebase', 'Mobile', 'Sustainability'],
  },
];
