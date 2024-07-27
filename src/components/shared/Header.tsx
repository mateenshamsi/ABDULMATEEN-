import Link from 'next/link';
import React from 'react';

function Header() {
  return (
    <nav className='flex my-9 justify-between items-center'> 
      <Link href="/"> <h1 className="max-w-7xl hover:cursor-pointer px-4 sm:px-6 lg:px-8 text-3xl text-[#a8a4f4] hover:scale-110 hover:z-20 transition-transform duration-300">AbdulMateen</h1></Link>
      <div className='gap-4 mr-4 flex'>
        <Link className="mr-4 transform transition-transform hover:scale-110 hover:z-20 duration-300" href="/projects">Projects</Link>
        <Link className="mr-4 transform transition-transform hover:scale-110 hover:z-20 duration-300" href="/about">About Me</Link>
        <Link className="mr-4 transform transition-transform hover:scale-110 hover:z-20 duration-300" href="#">Contact Me</Link>
      </div>
    </nav>
  );
}

export default Header;
