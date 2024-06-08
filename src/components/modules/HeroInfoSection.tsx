import Image from 'next/image'
import React from 'react'

interface HeroInfoSectionProps {
  
}

const HeroInfoSection = ({}: HeroInfoSectionProps) => {
  return (
    <>
        <div>
            <h2>Socials</h2>
            <div id="socials" className='flex-2 '>
              <ul className='flex flex-row min-w-52 gap-2 px-4 justify-between items-center'>
                <li><a href="/instagram" target='_blank' rel="noopener noreferrer"><Image src={"/socials/instagram.svg"} alt='Instagram' height={35} width={35} /></a></li>
                <li><a href="/github" target='_blank' rel="noopener noreferrer"><Image src={"/socials/github.svg"} alt='Github' height={35} width={35} /></a></li>
                <li><a href="/x" target='_blank' rel="noopener noreferrer"><Image src={"/socials/twitter.svg"} alt='Twitter' height={35} width={35} /></a></li>
                <li><a href="/x" target='_blank' rel="noopener noreferrer"><Image src={"/socials/facebook.svg"} alt='Facebook' height={35} width={35} /></a></li>
                <li><a href="/email" target='_blank' rel="noopener noreferrer"><Image src={"/socials/email.svg"} alt='Facebook' height={35} width={35} /></a></li>
                
              </ul>
            </div>
            <div></div>
            <button></button>
        </div>
    </>
  )
}

export default HeroInfoSection
