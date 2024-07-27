'use client'
import Image from "next/image";

const Pdf = '/pdf.pdf'; // Define the path to your PDF file

export default function Home() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between p-4 md:p-8">
      <div className="w-full md:w-1/2 text-center md:text-left">
        <p className="text-white font-bold mt-4 text-2xl md:text-4xl">
          Hi I am <span className="text-[#a8a4f4]">AbdulMateen</span>
        </p>
        <p className="mt-2 text-xl md:text-2xl font-bold">
          A Full Stack Developer & DevOps enthusiast
        </p>
        <button
          className='mt-4 text-xl md:text-2xl text-[#a8a4f4]
          bg-transparent border border-solid border-[#a8a4f4]
          rounded py-2 px-4 hover:bg-[#a8a4f4]
          hover:text-white'
          onClick={() => window.open(Pdf, '_blank')}
        >
          Download Resume
        </button>
      </div>
      <div className="mt-4 md:mt-0">
        <Image alt="developer" width={400} height={400} src="/homeimage.svg" />
      </div>
    </div>
  );
}
