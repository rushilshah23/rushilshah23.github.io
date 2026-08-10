import { Industry } from '../models';

/**
 * Industries where the owner delivers impact. Copy is capability-led and
 * honest: proof points reference shipped work, not invented metrics.
 * Aligned with the resume (source of truth).
 */
export const INDUSTRIES: Industry[] = [
  {
    name: 'Banking & Lending',
    description:
      'Consumer lending platforms — loan origination, management and reconciliation for an Indian lending NBFC.',
    points: [
      'End-to-end LOS–LMS integration supporting an INR 200 crore loan book',
      'Event-driven payment reconciliation via Razorpay webhooks on AWS Lambda',
      'Real-time portfolio analytics serving 100+ employees',
    ],
  },
  {
    name: 'Insurance',
    description:
      'General and life insurance systems for two of India\u2019s largest insurers — quote-to-policy and data marts.',
    points: [
      '8-business-day quote turnaround cut to near-instantaneous',
      'OCR pipelines parsing competitor policy PDFs for data-driven pricing',
      'ETL data marts with 30–50% efficiency gains',
    ],
  },
  {
    name: 'Fintech SaaS',
    description:
      'Product work that ships: a GST-invoice processing platform automating 90% of manual accounting.',
    points: [
      'FastAPI microservices with Celery-powered AI workers',
      'Jenkins CI/CD shipping Docker images to EC2 behind Nginx',
      'Model-agnostic data extraction — API-based or self-hosted models',
    ],
  },
  {
    name: 'Energy & Renewables',
    description:
      'Platform and GenAI infrastructure for the energy sector — hardened backends, Terraform-managed AWS and AI model deployment in CI/CD.',
    points: [
      'Production FastAPI + Angular hardening for an energy company',
      'Terraform-managed AWS across production, QA, sandbox and development',
      'API Gateway + Lambda layers for AI model loading in GitHub Actions',
    ],
  },
  {
    name: 'Sustainability & Field Ops',
    description:
      'Field-facing software for sustainability programs, built for non-technical users on the ground.',
    points: [
      'Watershed-management platform for Art of Living (IAHV)',
      'Flutter + Firebase mobile app with document management',
      'Feedback and reporting loops for remote field teams',
    ],
  },
];
