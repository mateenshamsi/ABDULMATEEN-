'use client'
import Link from 'next/link';
import React, { useState } from 'react';
import { HiMenu, HiX } from 'react-icons/hi'; // Import icons for hamburger and close

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className='relative flex  sm:flex-row justify-between items-center my-6 px-4 sm:px-6 lg:px-8'>
      <Link href="/">
        <h1 className="text-2xl sm:text-3xl text-[#a8a4f4] font-bold hover:scale-105 transition-transform duration-300">
          AbdulMateen
        </h1>
      </Link>
      
    
      <button 
        className='sm:hidden p-2 text-[#a8a4f4] hover:text-[#6c63ff] focus:outline-none' 
        onClick={toggleMenu}
      >
        {isMenuOpen ? <HiX size="2rem" /> : <HiMenu size="2rem" />}
      </button>
      
      {/* Menu Links */}
      <div className={`flex-col sm:flex-row sm:flex ${isMenuOpen ? 'flex' : 'hidden'} sm:flex items-center gap-4 mt-4 sm:mt-0 absolute sm:static top-full left-0 w-full sm:w-auto   shadow-md sm:shadow-none`}>
        <Link className="transform transition-transform hover:scale-105 duration-300" href="/projects">
          Projects
        </Link>
        <Link className="transform transition-transform hover:scale-105 duration-300" href="/about">
          About Me
        </Link>
        
      </div>
    </nav>
  );
}

export default Header;

