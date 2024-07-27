'use client'
import React, { useEffect, useState } from 'react';
interface Props{ 
    skill:string , 
    percentage:number 
}
const SkillBar = ({ skill, percentage }:Props) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setProgress(percentage);
    }, 100); // Slight delay to allow component to render before animation starts

    return () => clearTimeout(timer);
  }, [percentage]);

  return (
    <div className="flex items-center mb-4">
      <span className="text-lg font-semibold w-1/4">{skill}</span>
      <div className="relative flex-1 bg-gray-200 rounded-full h-4 ml-4">
        <div
          className="bg-green-500 h-full rounded-full transition-all duration-1000"
          style={{ width: `${progress}%` }}
        >
          <span
            className="absolute inset-0 flex items-center justify-center text-xs font-medium text-white"
            style={{ width: `${progress}%` }}
          >
            {progress}%
          </span>
        </div>
      </div>
    </div>
  );
};

export default SkillBar;
