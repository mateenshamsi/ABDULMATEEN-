import Link from 'next/link'
import React from 'react'
import { FaGithubSquare, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa'
import { SiLeetcode } from 'react-icons/si'

function Footer() {
  return (
    <div className='mt-[200px]  flex flex-col items-center justify-center mb-12'>
        <h1 className='text-2xl text-center'>Connect with me</h1>
        <div className='mt-4 gap-12  flex items-center justify-center'> 
            <Link href="https://www.linkedin.com/in/abdulmateen-shamsi-833116223/"><FaLinkedin size={"3rem"}/></Link>
           <Link href="https://www.instagram.com/matin_shamsii/"> <FaInstagram size={"3rem"}/> </Link>
            <Link href="https://x.com/matin_shamsi"><FaTwitter size={"3rem"}/></Link>
          <Link href="https://leetcode.com/u/Mateenshamsi/">  <SiLeetcode size={"3rem"}/></Link>
          
          <Link href="https://github.com/mateenshamsi">   <FaGithubSquare size={"3rem"}/></Link>
        </div>
        <p className='mb-8'></p>
    </div>
  )
}

export default Footer
 
