export interface Work {
    project: string;
    tags: string[];
    mediaURL: string;
    description: string;
    projectURL?:string;
    codeURL:string;
  }

  export const works: Work[] = [
    {
      project: "Multiplayer Tic Tac Toe",
      tags: ['Node JS', 'TypeScript', 'WebSockets', 'Next JS', 'RabbitMQ', 'JWT'],
      mediaURL: '/projects/tic_tac_toe.svg',
      // mediaURL: 'C:/Users/Rushil Shah/Downloads/Projects/NextJS/portfolio2024/public/projects/tic_tac_toe_lottie.json',

      description: 'Multiplayer Tic Tac Toe game using websockets, authentication, microservice and robust state management in Next JS',
      codeURL:'https://github.com/rushilshah23/Tic_Tac_Toe_MicroService_Architecture'
    },
    {
      project: "Meeting Scheduler",
      tags: ['Node JS', 'TypeScript',],
      mediaURL: '/projects/meeting_scheduler.svg',
      // mediaURL: 'C:/Users/Rushil Shah/Downloads/Projects/NextJS/portfolio2024/public/projects/tic_tac_toe_lottie.json',

      description: 'Backend Node JS project which serves the purpos of scheduling meets in custom slots from custom start and end time with the closest time round off functionality. This project demonstrates the application of Datetime module with MongoDB as the Database.',
      codeURL:'https://github.com/rushilshah23/meet_manager_api'
    },
    {
      project: "Examinator",
      tags: ['Node JS', 'React', 'Material UI', 'Firebase', 'Tensorflow'],
      mediaURL: '/projects/examinator.png',
      description: 'AI based exam proctoring system which is not limited to just detecting various malpractices attempt but scheduling managing the whole examination system. There are Supervisors and Students. Supervisors can schedule an exam, create question paper, view different malpractices and the exam response is sent to the student via the mail service after the examination. Students can join the exam, view history.',
      codeURL:'https://github.com/rushilshah23/proctor_website'
    },
    {
      project: "Personal Portfolio",
      tags: ['Next JS', 'Tailwind CSS', 'Framer Motion'],
      mediaURL: '/projects/portfolio.png',
      description: 'The site that you are presently on! Made using Next JS, Tailwind CSS and Framer Motion',
      codeURL:'https://github.com/rushilshah23/proctor_website'
    },
    {
      project: "Advanced JWT Auth System",
      tags: ['Node JS', 'JWT','TypeScript','RabbitMQ'],
      mediaURL: '/projects/authentication_system.svg',
      description: 'Advance JSON Web Token (JWT) based Authentication sytem. It works based on the access and refresh token model and is configurable which can be usd with any other project as a microservice with Rabbit MQ as message broker',
      codeURL:'https://github.com/rushilshah23/Authentication-system'
    },
   
  ]