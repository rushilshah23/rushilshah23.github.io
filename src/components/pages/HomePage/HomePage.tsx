// 'use client'
// import React, { useState, useEffect } from 'react';
// import { motion } from 'framer-motion';
// import { useInView } from 'react-intersection-observer';
// import Navbar from '../../modules/Navbar';
// import TypedText from '../../modules/TypedText';
// import FadeInImageFromBottom from '../../modules/FadeImage';
// import HeroName from '../../modules/HeroName';
// import BentoGrid from '../../modules/BentoGrid';
// import SkillsSection from '../../modules/SkillsSection';
// import HeroInfoBox from '../../modules/HeroInfoBox';
// import WorkExperience from '../../modules/WorkExperience';
// import Achievements from '../../modules/Achievements';
// import { milestones } from '@/src/data/experience';
// import { achievements } from '@/src/data/achievements';

// const HomePage = () => {
//   const [scrollPosition, setScrollPosition] = useState(0);
//   const thresholdValue = 0.3;
//   const [heroRef, heroInView] = useInView({ threshold:thresholdValue});
//   const [experienceRef, experienceInView] = useInView({ threshold: thresholdValue-0.2 });
//   const [projectsRef, projectsInView] = useInView({ threshold: thresholdValue-0.1 });
//   const [skillsRef, skillsInView] = useInView({ threshold: thresholdValue });
//   const [publicationsRef, publicationsInView] = useInView({ threshold: thresholdValue });

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrollPosition(window.scrollY);
//     };
//     window.addEventListener('scroll', handleScroll);
//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []);

//   return (
//     <>
//     <div className='z-50 bg-opacity-25 fixed'> 

//       <Navbar />
//     </div>
      // <main>
      //   <motion.section
      //     id='hero'
      //     className="relative lg:flex flex-row container"
      //     initial={{ opacity: 0, y: 0 }}
      //     animate={{ opacity: heroInView ? 1 : 0, y: heroInView ? 0 : 100 }}
      //     transition={{ duration: 0.5 }}
      //     ref={heroRef}
      //   >
      //     <div className='lg:flex-1 flex flex-col   items-center justify-start gap-10 lg:min-w-[60%] lg:mt-4'>
      //       <HeroName />
      //       <div className='text-3xl   text-center self-start min-h-[4.5rem]  xl:self-center'>
      //         <TypedText />
      //       </div>

      //     </div>
      //     <div id="portraitImage" className="lg:flex-1 pt-0 lg:-mt-8 md:container md:justify-center md:items-center md:place-content-center md:flex">
      //       <FadeInImageFromBottom src={'/portrait_2_wbg_edited.png'} alt='Rushil Shah' width={450} height={350} />
      //     </div>
      //     <div className=' ml-10 pl-10 md:m-0 md:p-0 lg:absolute lg:top-[45%] lg:left-[15%]'>
      //       <HeroInfoBox />
      //       </div>
      //   </motion.section>

      //   <motion.section
      //     id="experience"
      //     className='container'
      //     initial={{ opacity: 0, y: 50 }}
      //     animate={{ opacity: experienceInView ? 1 : 0, y: experienceInView ? 0 : 50 }}
      //     transition={{ duration: 0.5 }}
      //     ref={experienceRef}
      //   >
      //     <div className='flex justify-center items-center flex-col w-full'>
      //       <div className='border-b-2 border-fontColor1 opacity-30 w-[90%] my-4 self-center'></div>
      //       <h2 className='text-2xl font-bold text-fontColor1 self-center mb-6'>WORK EXPERIENCE</h2>
      //       <WorkExperience milestones={milestones} />
      //     </div>
      //   </motion.section>

      //   <motion.section
      //     id="projects"
      //     className='container'
      //     initial={{ opacity: 0, y: 50 }}
      //     animate={{ opacity: projectsInView ? 1 : 0, y: projectsInView ? 0 : 50 }}
      //     transition={{ duration: 0.5 }}
      //     ref={projectsRef}
      //   >
      //     <div className='flex justify-center items-center flex-col w-full'>
      //       <div className='border-b-2 border-fontColor1 opacity-30 w-[90%] my-4 self-center'></div>
      //       <h2 className='text-2xl font-bold text-fontColor1 self-center mb-6'>PROJECTS</h2>
      //       <BentoGrid />
      //     </div>
      //   </motion.section>

      //   <motion.section
      //     id="skills"
      //     className='container'
      //     initial={{ opacity: 0, y: 50 }}
      //     animate={{ opacity: skillsInView ? 1 : 0, y: skillsInView ? 0 : 50 }}
      //     transition={{ duration: 0.5 }}
      //     ref={skillsRef}
      //   >
      //     <div className='flex justify-center items-center flex-col w-full'>
      //       <div className='border-b-2 border-fontColor1 opacity-30 w-[90%] my-4 self-center'></div>
      //       <h2 className='text-2xl font-bold text-fontColor1 self-center mb-6'>SKILLS</h2>
      //       <SkillsSection />
      //     </div>
      //   </motion.section>

      //   <motion.section
      //     id="publications"
      //     className='container min-h-[700px]'
      //     initial={{ opacity: 0, y: 50 }}
      //     animate={{ opacity: publicationsInView ? 1 : 0, y: publicationsInView ? 0 : 50 }}
      //     transition={{ duration: 0.5 }}
      //     ref={publicationsRef}
      //   >
      //     <div className='flex justify-center items-center flex-col w-full'>
      //       <div className='border-b-2 border-fontColor1 opacity-30 w-[90%] my-4 self-center'></div>
      //       <h2 className='text-2xl font-bold text-fontColor1 self-center mb-6'>Publications / Achievements</h2>
      //       <Achievements  />
      //     </div>
      //   </motion.section>
      // </main>
//     </>
//   );
// };

// export default HomePage;



'use client'
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Navbar from '../../modules/Navbar';
import TypedText from '../../modules/TypedText';
import FadeInImageFromBottom from '../../modules/FadeImage';
import HeroName from '../../modules/HeroName';
import BentoGrid from '../../modules/BentoGrid';
import SkillsSection from '../../modules/SkillsSection';
import HeroInfoBox from '../../modules/HeroInfoBox';
import WorkExperience from '../../modules/WorkExperience';
import Achievements from '../../modules/Achievements';
import { milestones } from '@/src/data/experience';
import { achievements } from '@/src/data/achievements';

const HomePage = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const [navbarVisible, setNavbarVisible] = useState(true);
  const thresholdValue = 0.3;
  const [heroRef, heroInView] = useInView({ threshold: thresholdValue });
  const [experienceRef, experienceInView] = useInView({ threshold: thresholdValue - 0.2 });
  const [projectsRef, projectsInView] = useInView({ threshold: thresholdValue - 0.1 });
  const [skillsRef, skillsInView] = useInView({ threshold: thresholdValue });
  const [publicationsRef, publicationsInView] = useInView({ threshold: thresholdValue });

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
      const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;
      if (currentScrollTop > lastScrollTop) {
        // scrolling down
        setNavbarVisible(false);
      } else {
        // scrolling up
        setNavbarVisible(true);
      }
      setLastScrollTop(currentScrollTop <= 0 ? 0 : currentScrollTop); // For Mobile or negative scrolling
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollTop]);

  return (
    <>
      <div className={`z-50 bg-opacity-25 fixed w-full transition-all duration-300 ${navbarVisible ? 'top-0' : '-top-16'}`}>
        <Navbar />
      </div>
      <main className='pt-14'>
        <motion.section
          id='hero'
          className="relative lg:flex flex-row container lg:mt-10"
          initial={{ opacity: 0, y: 0 }}
          animate={{ opacity: heroInView ? 1 : 0, y: heroInView ? 0 : 100 }}
          transition={{ duration: 0.5 }}
          ref={heroRef}
        >
          <div className='lg:flex-1 flex flex-col   items-center justify-start gap-10 lg:min-w-[60%] lg:mt-4'>
            <HeroName />
            <div className=' text-3xl   text-center self-start min-h-[8rem]  xl:self-center'>
              <TypedText />
            </div>

          </div>
          <div id="portraitImage" className="lg:flex-1 pt-0 lg:-mt-8 md:container md:justify-center md:items-center md:place-content-center md:flex">
            <FadeInImageFromBottom src={'/portrait_jun2024.jpeg'} alt='Rushil Shah' width={450} height={350} />
            {/* <FadeInImageFromBottom src={'/portrait_2_wbg_edited.png'} alt='Rushil Shah' width={450} height={350} /> */}

            {/* <FadeInImageFromBottom src={'/portrait_animated.jpeg'} alt='Rushil Shah' width={450} height={350} /> */}

          </div>
          <div className='mt-16  md:m-0 md:p-0 lg:absolute lg:top-[45%] lg:left-[15%]'>
            <HeroInfoBox />
            </div>
        </motion.section>

        <motion.section
          id="experience"
          className='container'
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: experienceInView ? 1 : 0, y: experienceInView ? 0 : 50 }}
          transition={{ duration: 0.5 }}
          ref={experienceRef}
        >
          <div className='flex justify-center items-center flex-col w-full'>
            <div className='border-b-2 border-fontColor1 opacity-30 w-[90%] my-4 self-center'></div>
            <h2 className='text-2xl font-bold text-fontColor1 self-center mb-6'>WORK EXPERIENCE</h2>
            <WorkExperience milestones={milestones} />
          </div>
        </motion.section>

        <motion.section
          id="projects"
          className='container'
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: projectsInView ? 1 : 0, y: projectsInView ? 0 : 50 }}
          transition={{ duration: 0.5 }}
          ref={projectsRef}
        >
          <div className='flex justify-center items-center flex-col w-full'>
            <div className='border-b-2 border-fontColor1 opacity-30 w-[90%] my-4 self-center'></div>
            <h2 className='text-2xl font-bold text-fontColor1 self-center mb-6'>PROJECTS</h2>
            <BentoGrid />
          </div>
        </motion.section>

        <motion.section
          id="skills"
          className='container'
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: skillsInView ? 1 : 0, y: skillsInView ? 0 : 50 }}
          transition={{ duration: 0.5 }}
          ref={skillsRef}
        >
          <div className='flex justify-center items-center flex-col w-full'>
            <div className='border-b-2 border-fontColor1 opacity-30 w-[90%] my-4 self-center'></div>
            <h2 className='text-2xl font-bold text-fontColor1 self-center mb-6'>SKILLS</h2>
            <SkillsSection />
          </div>
        </motion.section>

        <motion.section
          id="publications"
          className='container min-h-[700px]'
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: publicationsInView ? 1 : 0, y: publicationsInView ? 0 : 50 }}
          transition={{ duration: 0.5 }}
          ref={publicationsRef}
        >
          <div className='flex justify-center items-center flex-col w-full'>
            <div className='border-b-2 border-fontColor1 opacity-30 w-[90%] my-4 self-center'></div>
            <h2 className='text-2xl font-bold text-fontColor1 self-center mb-6'>Publications / Achievements</h2>
            <Achievements  />
          </div>
        </motion.section>
      </main>
    </>
  );
};

export default HomePage;
