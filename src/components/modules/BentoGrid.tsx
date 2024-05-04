  'use client'
  import Image from 'next/image';
  import React, { useEffect, useRef, useState } from 'react';
import MyLottieAnimation from './LottieAnimation';
import { Work, works } from '@/src/data/projects';




  // const BentoGrid: React.FC = () => {
  //     return (
  //       <div className="grid grid-cols-1  lg:grid-cols-3 gap-3 max-w-[80vw]">
  //         {works.map((work, index) => (
  //           <div key={index} className="relative group overflow-hidden bg-white rounded-md shadow-md cursor-pointer">
  //             <img src={work.mediaURL} alt={work.project} className="w-full h-64 object-cover transition duration-300 transform group-hover:scale-110" />
  //             <div className="absolute inset-0 flex flex-col justify-center items-center p-4 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition duration-300">
  //               <h2 className="text-white text-lg font-semibold mb-2">{work.project}</h2>
  //               <div className="flex flex-wrap gap-2">
  //                 {work.tags.map((tag, tagIndex) => (
  //                   <div key={tagIndex} className="px-2 py-1 bg-gray-300 rounded-md text-sm text-gray-800">{tag}</div>
  //                 ))}
  //               </div>
  //               <p className="text-white text-sm mt-2 overflow-hidden max-h-20">{work.description.length > 100 ? work.description.substring(0, 100) + '...' : work.description}</p>
  //             </div>
  //           </div>
  //         ))}
  //       </div>
  //     );
  //   };
    
  //   export default BentoGrid;








  const BentoGrid: React.FC = () => {
    const [showModal, setShowModal] = useState(false);
    const [selectedWork, setSelectedWork] = useState<Work | null>(null);
    const modalRef = useRef<HTMLDivElement>(null);
  

    const handleMouseEnter = (work: Work) => {
      if (!showModal) {
        setSelectedWork(work);
        setShowModal(true);
      }
    };
  
    const handleMouseLeave = () => {
      if (showModal) {
        setShowModal(false);
      }
    }

    useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
        if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
          setShowModal(false);
        }
      };
  
      document.addEventListener('mousedown', handleClickOutside);
  
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }, []);

    return (
      <div className="grid grid-cols-1  lg:grid-cols-6  gap-3 max-w-[80vw]">
        {works.map((work, index) => (
          <div
            key={index}
            className={`flex justify-center items-center relative group overflow-hidden bg-transparent rounded-md shadow-md cursor-pointer ${index >= works.length - 2 && works.length%index !== 0 ? 'lg:col-span-3' : 'lg:col-span-2'} '}`}
            onClick={() => handleMouseEnter(work)}
            // onMouse={()=>{handleMouseLeave()}}
            
          >
            <Image
              src={work.mediaURL}
              alt={work.project}
              width={300}
              height={350}
              className=" my-8 w-full max-h-52   object-contain    transition duration-300 transform group-hover:scale-110"
            />
            {/* <MyLottieAnimation
            height={300}
            width={400}
            path={work.mediaURL}
            /> */}
            <div
              className="absolute inset-0 flex flex-col justify-center items-center p-4 bg-bgColor2 bg-opacity-50 opacity-0 group-hover:opacity-100 transition duration-300"
              style={{ backdropFilter: showModal ? 'blur(5px)' : 'none' }}
            >
              <h2 className="text-fontColor1 text-lg font-semibold mb-2">{work.project}</h2>
              <div className="flex flex-wrap gap-2">
                {work.tags.map((tag, tagIndex) => (
                  <div key={tagIndex} className="px-2 py-1 bg-bgColor7 rounded-md text-sm text-fontColor1">
                    {tag}
                  </div>
                ))}
              </div>
              <p className="text-fontColor1 text-sm mt-2 overflow-hidden max-h-20">
                {work.description.length > 100 ? work.description.substring(0, 100) + '...' : work.description}
              </p>
            </div>
          </div>
        ))}
        {showModal && selectedWork && (
          <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50 text-fontColor1"  >
            <div ref={modalRef} className="bg-bgColor2 p-8 rounded-md max-w-xl overflow-auto">
              <h2 className="text-2xl font-semibold mb-4">{selectedWork.project}</h2>
              <div className="flex flex-wrap gap-2">
                {selectedWork.tags.map((tag, tagIndex) => (
                  <div key={tagIndex} className="px-2 py-1 bg-bgColor7 rounded-md text-sm text-fontColor1">
                    {tag}
                  </div>
                ))}
              </div>
              <p className="mt-4">{selectedWork.description}</p>
              {selectedWork.projectURL && <div className="mt-4 ">
                <a href={selectedWork.codeURL} className="text-fontColor6 underline" target="_blank" rel="noopener noreferrer">
                  View Code
                </a>
              </div>}
              <div className="mt-4">
                <a href={selectedWork.codeURL} className="text-blue-500 underline" target="_blank" rel="noopener noreferrer">
                  View Code
                </a>
              </div>
              <button className="absolute top-4 right-4 text-gray-500 hover:text-gray-800" onClick={handleMouseLeave}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>
        )}
      </div>
    );
  };

  export default BentoGrid;
