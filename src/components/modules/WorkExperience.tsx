// components/WorkExperience.tsx
import { Milestone } from '@/src/data/experience';
import React from 'react';



interface WorkExperienceProps {
  milestones: Milestone[];
}

const WorkExperience: React.FC<WorkExperienceProps> = ({ milestones }) => {
  return (
    <div className="max-w-4xl mx-auto py-8">
      <div className="grid gap-8">
        {milestones.map((milestone, index) => (
          <div key={index} className="relative border-l-4 border-bgColor5 pl-4 py-8 flex flex-col gap-4">
            <div className='rounded-full bg-fontColor1 absolute h-4 w-4 -left-[0.6rem] top-0'></div>

            <h3 className="text-xl font-semibold  ">{milestone.company}</h3>
            <p className="text-fontColor1 font-medium">{milestone.position}</p>
            <p className="text-fontColor4 font-medium">{`${milestone.startDate} - ${milestone.endDate}`}</p>
            {/* <p className="mt-2">{milestone.description}</p> */}
            <p className="mt-2 font-light text-fontColor8" dangerouslySetInnerHTML={{ __html: milestone.description.replace(/\n/g, '<br>') }}></p>
            <div className='rounded-full bg-fontColor1 absolute h-4 w-4 -left-[0.6rem] bottom-0'></div>

          </div>

        ))}
      </div>
    </div>
  );
};

export default WorkExperience;




