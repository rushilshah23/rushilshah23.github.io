import { Project } from '../models';

/**
 * Selected projects. Media lives under /public/projects.
 * `featured` controls placement on the home page; `privateRepo` shows a
 * lock badge instead of a code link. Resume-aligned: the top three are the
 * current flagship work; the rest are public GitHub builds.
 */
export const PROJECTS: Project[] = [
  {
    id: 'gstmind',
    title: 'GSTMind — GST Invoice Processing SaaS',
    summary:
      'Full-stack SaaS that automates GST invoice processing, cutting manual accounting work by 90% for SMEs and enterprises. FastAPI microservices, a model-agnostic AI extraction worker on Celery, and a Jenkins CI/CD pipeline shipping Docker images to EC2 behind Nginx.',
    tags: ['FastAPI', 'Celery', 'Microservices', 'AI', 'AWS', 'Jenkins'],
    media: '/projects/gstmind.svg',
    mediaAlt: 'GST invoice processing pipeline diagram',
    projectUrl: 'https://gstmind.qzz.io',
    year: '2025',
    featured: true,
    problem:
      'SMEs and enterprises processed GST invoices manually, so accounts teams spent hours on data entry and reconciliation every month.',
    architecture:
      'FastAPI microservices for invoice ingestion and validation, a model-agnostic AI extraction worker on Celery, and a Jenkins CI/CD pipeline shipping Docker images to EC2 behind Nginx.',
    challenge:
      'Keeping extraction model-agnostic so providers could be swapped without touching the ingestion pipeline, while maintaining a consistent invoice schema across varied layouts.',
    outcome: 'Cut manual accounting work by ~90% for the target SME/enterprise segment.',
  },
  {
    id: 'breakout-scanner',
    title: 'NSE Breakout Scanner & Backtesting Engine',
    summary:
      'Personal trading toolkit: an automated scanner that surfaces NSE breakout signals into structured CSVs, paired with a cost-aware backtesting engine (STT, brokerage, slippage) that validates BTST and swing setups before capital is deployed. An agentic AI layer (Hermes) now runs the research loop — nightly cost-aware walk-forward runs across strategy configurations, archiving every run and promoting the strongest setups into a curated best-of set.',
    tags: ['Python', 'Data Engineering', 'Backtesting', 'Agentic AI', 'Hermes'],
    media: '/projects/scanner_candles.svg',
    mediaAlt: 'Candlestick chart showing rising price action and a breakout signal marker',
    year: '2025',
    featured: true,
    privateRepo: true,
    problem:
      'Trading ideas were validated on gut feel; there was no cost-aware way to test a strategy against historical data before risking capital.',
    architecture:
      'A Python scanner surfacing NSE breakout signals into structured CSVs, plus a backtesting engine that models STT, brokerage and slippage. An agentic AI layer (Hermes) runs nightly cost-aware walk-forward runs across strategy configs, archiving every run and promoting the strongest setups into a curated best-of set.',
    challenge:
      'Making backtests honest: modelling real trading costs and walk-forward splits so a result reflects what capital would actually have earned, not a curve-fit fantasy.',
    outcome:
      'A destroy-test-passed rule set held as the live crown setup (rs60, ₹1L capital), with the research loop running autonomously and cost-aware.',
  },
  {
    id: 'jwt-auth-system',
    title: 'Advanced Authentication Microservice',
    summary:
      'Production-grade FastAPI authentication microservice: email plus social login (Google, GitHub) with JWT access/refresh tokens — deployed on Kubernetes with auto-scaling and a persistent PostgreSQL backing store for high availability under variable load.',
    tags: ['FastAPI', 'Python', 'JWT', 'Kubernetes', 'PostgreSQL'],
    media: '/projects/authentication_system.svg',
    mediaAlt: 'JWT authentication flow diagram',
    codeUrl: 'https://github.com/rushilshah23/Authentication-system',
    year: '2025',
    featured: true,
    problem:
      'Applications needed a single, secure identity layer with social login and token lifecycle management instead of rolling their own auth.',
    architecture:
      'A production-grade FastAPI microservice: email plus social login (Google, GitHub), JWT access/refresh tokens, deployed on Kubernetes with auto-scaling and a persistent PostgreSQL backing store.',
    challenge:
      'Scaling under variable load while keeping refresh-token rotation safe and the backing store highly available during deployments.',
    outcome: 'A reusable auth service with HA posture, ready to drop into other systems.',
  },
  {
    id: 'examinator',
    title: 'Examinator — AI Exam Proctoring Platform',
    summary:
      'End-to-end proctoring platform: supervisors schedule exams and build question papers while an AI engine flags malpractice in real time. Results are mailed to students automatically after each exam.',
    tags: ['React', 'Node.js', 'Firebase', 'TensorFlow', 'Material UI'],
    media: '/projects/examinator.png',
    mediaAlt: 'Examinator exam proctoring dashboard',
    codeUrl: 'https://github.com/rushilshah23/proctor_website',
    year: '2023',
  },
  {
    id: 'tic-tac-toe',
    title: 'Multiplayer Tic Tac Toe — Microservices',
    summary:
      'Real-time multiplayer game built on a microservice architecture: WebSocket game server, JWT authentication service and RabbitMQ messaging, orchestrated in Next.js with robust client-side state management.',
    tags: ['Next.js', 'TypeScript', 'WebSockets', 'RabbitMQ', 'JWT'],
    media: '/projects/tic_tac_toe.svg',
    mediaAlt: 'Multiplayer Tic Tac Toe game board',
    codeUrl: 'https://github.com/rushilshah23/Tic_Tac_Toe_MicroService_Architecture',
    year: '2024',
  },
  {
    id: 'portfolio-angular',
    title: 'This Website — Angular SSR Portfolio',
    summary:
      'The site you are on: an Angular 21 application with full static-site generation (SSG), answer-engine-optimized structured data, and a token-driven design system. Built to score 90+ on Lighthouse.',
    tags: ['Angular', 'TypeScript', 'SSG', 'SCSS', 'AEO'],
    media: '/projects/portfolio.png',
    mediaAlt: 'Portfolio website screenshot',
    year: '2026',
  },
];
