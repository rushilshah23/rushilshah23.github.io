import { handleDownloadResume } from '@/src/utils/downloadResume';
import React, { useRef } from 'react';

interface HeroNameProps {}

const HeroName: React.FC<HeroNameProps> = () => {
  const text1Ref = useRef<HTMLSpanElement>(null);
  const text2Ref = useRef<HTMLSpanElement>(null);

  const handleHover = (event: React.MouseEvent<HTMLSpanElement>) => {
    if (text1Ref.current && text2Ref.current) {
      text1Ref.current.textContent = 'Download ';
      text2Ref.current.textContent = 'Resume';
    }
  };

  const handleMouseLeave = (event: React.MouseEvent<HTMLSpanElement>) => {
    if (text1Ref.current && text2Ref.current) {
      text1Ref.current.textContent = 'RUSHIL ';
      text2Ref.current.textContent = 'SHAH';
    }
  };



  return (
    <h1 className="lg:text-6xl font-poppins font-bold text-3xl  md:text-4xl lg:self-start xl:self-center transition-all duration-300 ease-in-out transform hover:scale-105 cursor-pointer">
      <span
        ref={text1Ref}
        className="text-fontColor3"
        onMouseEnter={handleHover}
        onMouseLeave={handleMouseLeave}
        onClick={handleDownloadResume}
      >
        RUSHIL{' '}
      </span>
      <span
        ref={text2Ref}
        className="hover:text-fontColor4"
        onMouseEnter={handleHover}
        onMouseLeave={handleMouseLeave}
        onClick={handleDownloadResume}
      >
        SHAH
      </span>
    </h1>
  );
};

export default HeroName;
