import React from 'react';
import { IoFootstepsSharp, IoAlarmOutline } from "react-icons/io5"; // Import other icons as needed
import { FaGlassWater } from "react-icons/fa6";
import { FaBowlRice } from "react-icons/fa6";

const Process = ({ valuePercent, icon }) => {
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

  return (
    <div className='flex bg-blue-300 w-58 h-28 rounded-lg'>
        <div>
            <IconComponent className='text-gray-600 m-4 mt-7 text-6xl'/>
        </div>
        <div className="w-full rounded-full h-2.5 dark:bg-gray-700">
            <div className='flex pr-2'>
                <p className='text-gray-400 pt-1'>9000</p>
                <p className='text-gray-700 text-xl ml-1'> /8000</p>
            </div>
            <div className='mt-12 ml-6'>
                <p className='text-gray-400'>
                    {valuePercent}%
                </p>
            </div>
            <div className="bg-green-500 h-2.5 rounded-full" style={{width: `${valuePercent}%`}}></div>
        </div>
    </div>
  )
};

export default Process;
