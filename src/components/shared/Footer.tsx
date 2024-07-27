import Link from 'next/link';
import React from 'react';
import { FaGithubSquare, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';

function Footer() {
  return (
    <div className='mt-16 flex flex-col items-center justify-center mb-12'>
      <h1 className='text-2xl text-center'>Connect with me</h1>
      <div className='mt-4 flex items-center justify-center space-x-2 md:gap-12 sm:ga gap-2'>
        <Link href="https://www.linkedin.com/in/abdulmateen-shamsi-833116223/">
          <FaLinkedin size="4rem" className="sm:text-2xl" />
        </Link>
        <Link href="https://www.instagram.com/matin_shamsii/">
          <FaInstagram size="4rem" />
        </Link>
        <Link href="https://x.com/matin_shamsi">
          <FaTwitter size="4rem" />
        </Link>
        <Link href="https://leetcode.com/u/Mateenshamsi/">
          <SiLeetcode size="4rem" />
        </Link>
        <Link href="https://github.com/mateenshamsi">
          <FaGithubSquare size="4rem" />
        </Link>
      </div>
    </div>
  );
}

export default Footer;
