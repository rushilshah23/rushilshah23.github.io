// import React, { useState, useRef, useEffect } from 'react';
// import { changeTheme } from '@/src/utils/changeTheme';

// interface ThemeDropDownMenuProps {}

// const ThemeDropDownMenu: React.FC<ThemeDropDownMenuProps> = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const dropdownRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     const handleClickOutside = (event: MouseEvent) => {
//       if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
//         setIsOpen(false);
//       }
//     };

//     document.addEventListener('mousedown', handleClickOutside);

//     return () => {
//       document.removeEventListener('mousedown', handleClickOutside);
//     };
//   }, []);

//   const toggleDropdown = () => {
//     setIsOpen(!isOpen);
//   };

//   const handleItemClick = (theme: string) => {
//     console.log(`${theme} theme clicked`);
//     changeTheme(theme); // Apply the selected theme
//     setIsOpen(false); // Close the dropdown after selecting a theme
//   };

//   return (
//     <div className='relative' ref={dropdownRef}>
//       {/* Dropdown Button */}
//       <button
//         onClick={toggleDropdown}
//         className='font-semibold text-gray-300 font-poppins font-opacity-50 text-opacity-80 px-4 py-2 rounded  text-fontColor1'
//       >
//         Select Theme
//       </button>

//       {/* Dropdown Content */}
//       {isOpen && (
//         <div className='absolute z-10 right-0 mt-2 bg-bgColor4 border border-white rounded lg:mr-4'>

//           <a
//             href='#'
//             className='block px-4 py-2 text-fontColor1 hover:bg-bgColor3'
//             onClick={() => handleItemClick('light')}
//           >
//             Light
//           </a>
//           <a
//             href='#'
//             className='block px-4 py-2 text-fontColor1 hover:bg-bgColor3'
//             onClick={() => handleItemClick('dark')}
//           >
//             Dark
//           </a>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ThemeDropDownMenu;


'use client'
import React, { useState, useRef, useEffect } from 'react';
import { changeTheme } from '@/src/utils/changeTheme';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';

interface ThemeDropDownMenuProps {}

const ThemeDropDownMenu: React.FC<ThemeDropDownMenuProps> = () => {
  const [theme, setTheme] = useState("dark")

  useEffect(()=>{
    if (!!document && document.querySelector("html")?.getAttribute("data-theme")){
      setTheme(document.querySelector("html")?.getAttribute("data-theme")!)
    }
  },[])
  

  const [isLight,setIsLight] = useState(theme === "light" ? true : false)
  
  const handleItemClick = () => {
    if(isLight){
      changeTheme("dark"); // Apply the selected theme
      setIsLight(false)
    }else{
      changeTheme("light"); // Apply the selected theme
      setIsLight(true)

    }
    
    // console.log("Theme changed ",isLight)
  };

  return (
    <button className=' transition-all ease-in-out duration-300 min-h-[1.5rem] min-w-[4rem] lg:min-h-4 lg:min-w-16 bg-bgColor3  relative rounded-full flex flex-row  justify-between p-1 px-[5px] cursor-pointer items-center' onClick={handleItemClick}>
      <div className={`absolute  p-2 top-[6%] ${isLight ? 'right-[2px]' : 'left-[2px]'} min-h-[85%] min-w-[50%]  bg-bgColor5 rounded-full`}></div>
      {/* <FontAwesomeIcon className='text-2xl' icon={faSun}/> */}
      <Image src={"/theme/light.svg"} alt='Light theme' width={20} height={20} />
      <FontAwesomeIcon className='text-2xl' icon={faMoon}/>
    </button>
  );
};

export default ThemeDropDownMenu;
