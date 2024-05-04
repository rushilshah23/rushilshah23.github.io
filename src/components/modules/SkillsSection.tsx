
'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import { skills } from '@/src/data/skills';



const SkillsSection: React.FC = () => {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);



  const handleClickCategory = (category: string) => {
    setSelectedCategories(prevCategories =>
      prevCategories.includes(category)
        ? prevCategories.filter(cat => cat !== category)
        : [...prevCategories, category]
    );
  };

  const isSelected = (category: string) => selectedCategories.includes(category);

  // Filter skills based on selected categories
  const filteredSkills = selectedCategories.length > 0 ? skills.filter(skill => selectedCategories.includes(skill.category)) : skills;

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      {/* <h2 className="text-2xl font-semibold mb-6">Skills</h2> */}
      <div className="flex flex-wrap gap-4 mb-6">
        <button
          className={`px-4 py-2 rounded-full bg-bgColor4 text-fontColor6 focus:outline-none ${isSelected('') ? 'bg-bgColor8 text-fontColor4' : ''}`}
          onClick={() => setSelectedCategories([])}
        >
          All
        </button>
        <button
          className={`px-4 py-2 rounded-full bg-bgColor4 text-fontColor6 focus:outline-none ${isSelected('Backend Technologies') ? 'bg-bgColor8 text-fontColor4' : ''}`}
          onClick={() => handleClickCategory('Backend Technologies')}
        >
          Backend
        </button>
        <button
          className={`px-4 py-2 rounded-full bg-bgColor4 text-fontColor6 focus:outline-none ${isSelected('Frontend Technologies') ? 'bg-bgColor8 text-fontColor4' : ''}`}
          onClick={() => handleClickCategory('Frontend Technologies')}
        >
          Frontend
        </button>
        <button
          className={`px-4 py-2 rounded-full bg-bgColor4 text-fontColor6 focus:outline-none ${isSelected('Database Technologies') ? 'bg-bgColor8 text-fontColor4' : ''}`}
          onClick={() => handleClickCategory('Database Technologies')}
        >
          Database
        </button>
        <button
          className={`px-4 py-2 rounded-full bg-bgColor4 text-fontColor6 focus:outline-none ${isSelected('DevOps') ? 'bg-bgColor8 text-fontColor4' : ''}`}
          onClick={() => handleClickCategory('DevOps')}
        >
          DevOps
        </button>
        <button
          className={`px-4 py-2 rounded-full bg-bgColor4 text-fontColor6 focus:outline-none ${isSelected('Others') ? 'bg-bgColor8 text-fontColor4' : ''}`}
          onClick={() => handleClickCategory('Others')}
        >
          Others
        </button>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6 lg:grid-cols-6  justify-items-center ">
        {filteredSkills.map((skill, index) => (
          <div key={index} className={` group h-28 w-40 bg-transparent hover:bg-bgColor8  rounded-lg shadow-lg transition-colors duration-300 ${isSelected(skill.category) ? 'bg-fontColor5' : ''} flex flex-col justify-center items-center gap-4 py-20 cursor-pointer`}>
            <Image src={skill.image} alt={skill.name} width={20} height={20} className="w-20 h-20 object-fill " />
            <p className=" text-sm font-semibold text-fontColor1 group-hover:text-fontColor2">{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsSection;
