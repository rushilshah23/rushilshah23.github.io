import React from 'react'
import HeroInfoSection from './HeroInfoSection'
import Image from 'next/image'
import { socials } from '@/src/data/socials'
import { handleDownloadResume } from '@/src/utils/downloadResume'

interface HeroInfoBoxProps {
  
}

const HeroInfoBox = ({}: HeroInfoBoxProps) => {
  return (
    <>
        <div className='lg:h-52 w-[100%]  flex flex-col items-center justify-center lg:gap-8 gap-4'>
            <h2 className=' lg:block  lg:text-xl font-semibold m-2 p-2 text-center'>Tech for your Business ? Connect with me - </h2>
            <div id="socials" className=' lg:block flex-2 '>
              <ul className='flex flex-row  px-4 justify-center gap-4 items-center '>
                {socials.map((item,index)=>(

                    <li  key={index}><a href={item.link} target='_blank' rel='noopener noreferrer'><Image src={item.iconURL} alt={item.title} height={35} width={35} /></a></li>
                ))}
       
              </ul>
            </div>
            <button className='p-3 m-3 bg-bgColor3 rounded-lg' onClick={handleDownloadResume}>Download Resume</button>
        </div>
    </>
  )
}

export default HeroInfoBox
