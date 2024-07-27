import Image from 'next/image'
import React from 'react'
import Link from 'next/link'

interface Props { 
    image: string,  
    title: string, 
    description: string ,
    link:string 
}

function ProjectCard({ image, title, description,link }: Props) {
  return (
   <div className="cursor-pointer shadow-lg rounded-lg overflow-hidden">
       <Link href={link}>
        <div className="relative object-contain p-4">
            <Image
                alt={title}
                src={image}
                height={1000} 
                width={1000}
                
            />
        </div>
        <div className="p-4">
            <h2 className="text-3xl text- font-semibold mb-2 ">{title}</h2>
            <p className="text-white ">{description}</p>
        </div>
      </Link>
    </div>
  )
}

export default ProjectCard
