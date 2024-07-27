'use client'
import Image from "next/image";

const Pdf = '/pdf.pdf'; // Define the path to your PDF file

export default function Home() {
  return (
    <div className="flex justify-between">
      <div className="w-full md:w-1/3 text-left">
        <p className="text-white font-bold ml-8 mt-[100px] text-3xl">
          Hi I am <span className="text-[#a8a4f4]">AbdulMateen</span>
        </p>
        <p className="ml-8 mt-4 text-3xl font-bold">A Full Stack Developer & DevOps enthusiast</p>
        <button
          className='hover:underline mt-4 ml-4  text-2xl text-[#a8a4f4]
          bg-transparent border border-solid border-[#a8a4f4]
          rounded py-2 px-4 hover:bg-[#a8a4f4]
          hover:text-white'
          onClick={() => window.open(Pdf, '_blank')}
        >
          Download Resume
        </button>
      </div>
      <div>
        <Image alt="developer" width={500} height={500} src="/homeimage.svg" />
      </div>
    </div>
  );
}
