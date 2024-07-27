import SkillBar from '@/components/shared/SkillBar';
import Image from 'next/image'
import React from 'react'
import { IoLogoReact } from "react-icons/io5";
function page() {
  return (
    <div className=''>
      <div  className='flex items-center space-x-8 p-8'>
        <Image 
          alt="my"  
          className="rounded-full mt-8 object-cover" 
          width={300} 
          height={300} 
          src="/my.jpg" 
        />    
             <p className='text-xl font-semibold mt-8'>
          Hello! I'm AbdulMateen Shamsi, a passionate <span className='text-[#a8a4f4]'> Full Stack Developer </span> and <span className='text-[#a8a4f4]'>Devops </span> enthusiast with a knack for creating innovative and user-friendly digital experiences. With a background in Artificial Intelligence & Data Science , I specialize in building dynamic web applications using modern technologies.
        </p>
      </div>
      <div>
      <h3 className='text-center text-4xl'>My Skills</h3>
      <div className="ml-4 mt-8 ">
     
      <SkillBar skill="Javascript" percentage={90}/>
      <SkillBar skill="React" percentage={75}/>
      <SkillBar skill="Node Js" percentage={75}/>
      <SkillBar skill="Mongo DB" percentage={75}/>
      <SkillBar skill="Next Js" percentage={75}/>
      
      </div>
      </div>
    </div>

  )
}

export default page;
