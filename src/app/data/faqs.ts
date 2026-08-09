import { Faq } from '../models';
import { SITE } from './site';

/**
 * Frequently asked questions — rendered on the contact page and injected as
 * FAQPage structured data for answer-engine optimization (AEO).
 */
export const FAQS: Faq[] = [
  {
    question: 'What services do you offer for businesses?',
    answer:
      'Full-stack application development, cloud & DevOps automation, AI-powered document processing (invoices, PDFs, scanned records), and technical consulting — including fractional engineering support for startups that need senior leadership without full-time headcount.',
  },
  {
    question: 'Which industries have you worked in?',
    answer:
      'I have shipped production software in consumer lending, insurance and fintech SaaS — including an end-to-end loan origination and management integration for a lending NBFC (INR 200 crore loan book), quote engines and data pipelines for two of India’s largest insurers, and a GST-invoice processing platform.',
  },
  {
    question: 'How much does a custom web application cost?',
    answer:
      'It depends on scope. A focused MVP typically starts in the low-to-mid five figures (USD) with a fixed quote after a free discovery call. Ongoing fractional engagements are billed monthly. I always scope in writing before any work begins.',
  },
  {
    question: 'How long does a typical project take?',
    answer:
      'A well-scoped MVP is usually shipped in 4–8 weeks. Larger platforms, AI integrations or cloud migrations are broken into milestones, so you see working software every 1–2 weeks.',
  },
  {
    question: 'Do you work with international clients?',
    answer:
      `Yes. I am based in Mumbai and work remotely with clients worldwide, overlapping with US, UK, EU and APAC time zones for calls and async delivery.`,
  },
  {
    question: 'How do we get started?',
    answer:
      `Email me at ${SITE.email} or reach out on LinkedIn. You get a free discovery call, a written scope and a fixed quote — no obligation, no pressure.`,
  },
];
