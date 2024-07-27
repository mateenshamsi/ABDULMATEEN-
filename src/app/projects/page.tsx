'use client'
import ProjectCard from '@/components/shared/ProjectCard'
import React, { useState } from 'react'

function page() {
    const [projects,setProjects] = useState([{ 
      image:"/blogs.png" , 
      title:"Blogs App", 
      description:"Created a blogs app where users can share their blogs and also read about other blogs . I have used AWS S3 for stroring images",
      link:"https://github.com/mateenshamsi/blogs"
    },{
      image:"/thread.jpeg" , 
      title:"Social Media",
      description:"This project is a clone of threads app where user can share posts like and comment on other posts ", 
      link:"https://github.com/mateenshamsi/SocialMedia"
    },{
      image:"/Recipe.jpeg",
      title:"Recipe Share App", 
      description:" Used EJS and Bootstrap for creating a website where users can share their recipes and also  comment on and rate others recipes",
      link:"https://github.com/mateenshamsi/RecipeShareApp"
    }]) 
    
    return (
    <div >
      <h1 className='text-4xl  text-center font-bold'>My Projects</h1>
      <div className="bg-[#0d2438] text-white mt-8">
        <div className="grid grid-cols-3 gap-1 justify-items-center">
      { 
        projects.map(project=>(
            <ProjectCard title={project.title} image={project.image} description={project.description} link={project.link}/>
       ))
      }
    </div>
    </div> 
    </div>
  )
}

export default page
