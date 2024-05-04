'use client'
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faClose } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';
import ThemeDropDownMenu from './ThemeDropDownMenu';
import { socials } from '@/src/data/socials';
import { navItems } from '@/src/data/navItems';

interface NavbarProps { }




const Navbar: React.FC<NavbarProps> = () => {
  const [sidebar, setSidebar] = useState(false);

  const toggleSidebar = () => {
    setSidebar((curr) => !curr);
  };

  return (
    <>
      <nav>
        <div className="hidden lg:flex w-full p-4 bg-bgColor1">
          <div className="hidden lg:flex w-full items-center justify-between">
            <ul className="flex flex-row gap-10 items-center flex-3 lg:ml-32">
              {navItems.map((item, index) => (
                <li key={index} className=" flex hover:border-b-2 transition-all ease-out duration-300">
                  <a  className="text-lg font-semibold font-poppins transition-colors duration-300 hover:text-fontColor3" href={item.link}>
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
  
            {/* <div id="socials" className="flex-2">
              <ul className="flex flex-row min-w-52 gap-2 px-4 justify-between items-center">
                {socials.map((item, index) => (

                  <li key={index}><a target='_blank' href={item.link}><Image src={item.iconURL} alt={item.title} height={30} width={30} /></a></li>
                ))}


              </ul>
            </div> */}
            <div className="flex-2">
              <ThemeDropDownMenu />
            </div>
          </div>
        </div>
      </nav>
      <nav>
        <div className="lg:hidden w-full h-20 bg-bgColor1 px-4 py-2 flex justify-between items-center transition-all ease-in-out duration-300">
          <FontAwesomeIcon className="h-6 w-6 mx-0 px-0 text-2xl text-fontColor1 font-bold cursor-pointer" icon={faBars} onClick={toggleSidebar} />
          {/* <div id="socials">
            <ul className="flex flex-row min-w-52 gap-2 justify-end items-center">
              {socials.map((item, index) => (

                <li key={index}><a target='_blank' href={item.link}><Image src={item.iconURL} alt={item.title} height={20} width={20} /></a></li>
              ))}
    
            </ul>
          </div> */}
          {sidebar && (
            <div className="lg:hidden fixed z-30 inset-0 h-[100vh] w-full  bg-bgColor1 p-4 flex-row gap-16">
              <div className="flex flex-col items-end mb-2 py-4">
                <FontAwesomeIcon className="h-6 w-6 text-2xl text-fontColor1 font-bold cursor-pointer" icon={faClose} onClick={toggleSidebar} />
              </div>
              <div className="flex justify-center">
                <div className="h-1 w-[90%] bg-fontColor1 self-center bg-opacity-25"></div>
              </div>
              <ul className="px-4 py-8 flex gap-10 flex-col items-center">
                {navItems.map((item, index) => (
                  <li key={index} className="flex font-semibold hover:border-b-2 transition-all ease-out duration-300">
                    <a className="text-lg font-semibold font-poppins transition-colors duration-300 hover:text-fontColor3" href={item.link} onClick={() => setSidebar(false)}>
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
              <div className="flex justify-center">
                <div className="h-1 w-[90%] bg-fontColor1 self-center bg-opacity-10"></div>
              </div>
              <div className="flex justify-center align-middle mt-5 pt-5">
                <ThemeDropDownMenu />
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;

