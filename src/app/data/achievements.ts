import { Achievement } from '../models';

/**
 * Certifications and awards — each with proof links where they exist
 * publicly. Sourced from the resume (source of truth).
 */
export const ACHIEVEMENTS: Achievement[] = [
  {
    title: 'Microsoft Certified: Azure Fundamentals AZ-900',
    issuer: 'Microsoft',
    year: '2022',
    url: 'https://www.credly.com/badges/b7503a95-340f-4f29-aa54-8507a9dc2893/public_url',
    kind: 'certification',
  },
  {
    title: 'Winner — Mumbai Hackathon',
    issuer: 'Zerodha / Frappe',
    year: '2022',
    url: 'https://drive.google.com/file/d/1wYjYekEjt5pbo1rk1Y31IgoRiJemduhL/view',
    kind: 'award',
  },
];
