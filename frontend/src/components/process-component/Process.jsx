import React from 'react';
import { IoFootstepsSharp, IoAlarmOutline } from "react-icons/io5"; // Import other icons as needed
import { FaGlassWater } from "react-icons/fa6";
import { FaBowlRice } from "react-icons/fa6";

const Process = ({ valuePercent, icon, activity, height }) => {
  // Define a variable to hold the appropriate icon component based on the 'icon' prop
  let IconComponent;
  
  // Determine which icon component to use based on the 'icon' prop value
  switch (icon) {
    case 'footsteps':
      IconComponent = IoFootstepsSharp;
      break;
    case 'rice':
      IconComponent = FaBowlRice;
      break;
    case 'water':
        IconComponent = FaGlassWater;
        break;
    default:
      // Default to IoFootstepsSharp if 'icon' prop is not recognized
      IconComponent = IoFootstepsSharp;
  }
  
  // Set default height if not provided
  if (height === null || height === undefined) {
    height = "28"; // Default height
  }

  return (
    <div className={`flex bg-blue-300 w-58 h-${height} rounded-lg `}>
        <div>
            <IconComponent className='text-gray-600 m-4 mt-7 text-6xl'/>
        </div>
        <div className="w-full rounded-full h-2.5 dark:bg-gray-700">
            <div className='flex pr-2 items-stretch'>
                <p className='text-white text-xl '>9000</p>
                <p className='text-gray-300  ml-1 mt-1'> /8000 {activity}</p>
            </div>
            <div className=''>
                <p className='text-gray-400'>
                    {valuePercent}%
                </p>
            </div>
            <div className="bg-green-500 h-2.5 rounded-full relative" style={{width: `${valuePercent}%`}}></div>
        </div>
    </div>
  );
};

export default Process;
