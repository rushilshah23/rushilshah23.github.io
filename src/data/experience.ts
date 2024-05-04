export interface Milestone {
    company: string;
    position: string;
    startDate: string;
    endDate: string;
    description: string;
  }

export const milestones:Milestone[] = [
    {
        company:"HDFC Ergo (Datacurate's Client), Mumbai",
        position:"Software Developer",
        startDate:"June 2023",
        endDate:"Present",
        description:'• Developed and tested backend API overseeing intelligent auto-correct functionalities, intricate quote calculations and quote extractor from diverse competitors computer-generated PDF to scanned copy of a policy.\n • Developed complex quick and full quote generation for different products which eliminated the manual 8-days long process to instantaneous with real time updates.\n• Proposed and developed migration of legacy HTML, CSS, JavaScript code to Next JS for the quote generation site frontend which made the web app more readable and maintainable.\n'
    },
    {
        company:"Kotak Life Insurance (Datacurate's Client), Mumbai",
        position:"Software Developer",
        startDate:"June 2022",
        endDate:"June 2023",
        description:'• Developed ETL pipeline in SAS for complex Data Marts used in analytical dashboards and modified the existing codebase which improved the efficiency by 30%.\n• Developed automated wrapper module responsible for the complete regular data loading with parallel processing which further reduced the data loading time by 50%.\n • Debugged the whole legacy DDS and fixed critical infrastructure bugs.'
    },
    {
        company:"IAHV (Art of Living), Mumbai",
        position:"App Developer",
        startDate:"March 2020",
        endDate:"March 2021",
        description:'• Leaded the team and responsible for integrating, debugging the mobile app which served to be project management system for Watershed Management app developed using Flutter and Firebase. Modules Undertaken were: - Google Drive like Document Manager, Feedback System.'
    },
]

