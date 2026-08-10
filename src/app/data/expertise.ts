import { SkillDomain } from '../models';

/**
 * Technical expertise grouped by engineering domain (no star ratings).
 * Icons live in /public/skills (devicon + simple-icons sources).
 * Aligned with the resume's skill list.
 */
export const EXPERTISE: SkillDomain[] = [
  {
    title: 'Frontend',
    skills: [
      { name: 'Angular', icon: '/skills/angular.svg' },
      { name: 'Next.js', icon: '/skills/nextjs.svg' },
      { name: 'TypeScript', icon: '/skills/typescript.svg' },
      { name: 'Tailwind', icon: '/skills/tailwind.svg' },
      { name: 'JavaScript', icon: '/skills/js.svg' },
      { name: 'HTML', icon: '/skills/html.svg' },
    ],
  },
  {
    title: 'Backend & Microservices',
    skills: [
      { name: 'Python', icon: '/skills/python.svg' },
      { name: 'FastAPI', icon: '/skills/fastapi.svg' },
      { name: 'Flask', icon: '/skills/flask.svg' },
      { name: 'Express', icon: '/skills/express.svg' },
      { name: 'Node.js', icon: '/skills/node.svg' },
      { name: 'Golang', icon: '/skills/go.svg' },
      { name: 'WebSocket', icon: '/skills/websocket.svg' },
    ],
  },
  {
    title: 'Data & Messaging',
    skills: [
      { name: 'PostgreSQL', icon: '/skills/postgresql.svg' },
      { name: 'MongoDB', icon: '/skills/mongodb.svg' },
      { name: 'Redis', icon: '/skills/redis.svg' },
      { name: 'Celery', icon: '/skills/celery.svg' },
      { name: 'RabbitMQ', icon: '/skills/rabbitmq.svg' },
      { name: 'SQL', icon: '/skills/sql.svg' },
    ],
  },
  {
    title: 'Cloud & DevOps',
    skills: [
      { name: 'AWS', icon: '/skills/aws.svg' },
      { name: 'Terraform', icon: '/skills/terraform.svg' },
      { name: 'Docker', icon: '/skills/docker.svg' },
      { name: 'Kubernetes', icon: '/skills/kubernetes.svg' },
      { name: 'GitHub Actions', icon: '/skills/githubactions.svg' },
      { name: 'Jenkins', icon: '/skills/jenkins.svg' },
      { name: 'Nginx', icon: '/skills/nginx.svg' },
      { name: 'Linux', icon: '/skills/linux.svg' },
      { name: 'GitHub', icon: '/skills/github.svg' },
    ],
  },
  {
    title: 'AI & GenAI',
    skills: [
      { name: 'LangChain', icon: '/skills/langchain.svg' },
      { name: 'OpenAI', icon: '/skills/openai.svg' },
      { name: 'RAG Pipelines', icon: '/skills/rag.svg' },
      { name: 'Prompt Engineering', icon: '/skills/prompt.svg' },
      { name: 'Agentic AI (Hermes)', icon: '/skills/hermes.svg' },
      { name: 'LLM Applications', icon: '/skills/openai.svg' },
    ],
  },
];
