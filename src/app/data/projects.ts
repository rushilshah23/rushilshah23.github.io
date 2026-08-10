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
  },
  {
    id: 'breakout-scanner',
    title: 'NSE Breakout Scanner & Backtesting Engine',
    summary:
      'Personal trading toolkit: an automated scanner that surfaces NSE breakout signals into structured CSVs, paired with a cost-aware backtesting engine (STT, brokerage, slippage) that validates BTST and swing setups before capital is deployed.',
    tags: ['Python', 'Data Engineering', 'Backtesting', 'Automation'],
    media: '/projects/scanner_candles.svg',
    mediaAlt: 'Candlestick chart showing rising price action and a breakout signal marker',
    year: '2025',
    featured: true,
    privateRepo: true,
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
  },
  {
    id: 'itgc',
    title: 'ITGC — IT General Controls App',
    summary:
      'Internal application that enforces Information Technology General Controls for audit readiness — mapping controls to systems and evidence, with review and sign-off workflows used in real compliance cycles.',
    tags: ['Full-Stack', 'Controls', 'Compliance', 'Workflow'],
    media: '/projects/itgc.svg',
    mediaAlt: 'ITGC controls dashboard illustration',
    codeUrl: 'https://github.com/rushilshah23/ITGC',
    year: '2026',
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
