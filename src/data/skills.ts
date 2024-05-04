export interface Skill {
    name: string;
    image: string;
    category: string;
  }

export const skills: Skill[] = [
    { name: 'Node JS', image: '/skills/node.svg', category: 'Backend Technologies' },
    { name: 'Python', image: '/skills/python.svg', category: 'Backend Technologies' },
    { name: 'Flask', image: '/skills/flask.svg', category: 'Backend Technologies' },
    { name: 'Express JS', image: '/skills/express.svg', category: 'Backend Technologies' },
    { name: 'Next JS', image: '/skills/nextjs.svg', category: 'Frontend Technologies' },
    { name: 'Tailwind CSS', image: '/skills/tailwind.svg', category: 'Frontend Technologies' },
    { name: 'TypeScript', image: '/skills/typescript.svg', category: 'Frontend Technologies' },
    { name: 'SQL', image: '/skills/sql.svg', category: 'Database Technologies' },
    { name: 'MongoDB', image: '/skills/mongodb.svg', category: 'Database Technologies' },
    { name: 'Firebase', image: '/skills/firebase.svg', category: 'Database Technologies' },
    { name: 'Docker', image: '/skills/docker.svg', category: 'DevOps' },
    { name: 'Linux', image: '/skills/linux.svg', category: 'DevOps' },
    { name: 'Microsoft Azure', image: '/skills/Microsoft_Azure.svg', category: 'DevOps' },
    { name: 'WebSockets', image: '/skills/websocket.svg', category: 'Others' },
    { name: 'Git', image: '/skills/github.svg', category: 'Others' },
    { name: 'Rabbit MQ', image: '/skills/rabbitmq.svg', category: 'Others' },

  ];