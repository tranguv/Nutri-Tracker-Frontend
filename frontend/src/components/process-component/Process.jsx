import React from 'react';
import { IoFootstepsSharp, IoAlarmOutline } from 'react-icons/io5';
import { FaGlassWater } from 'react-icons/fa6';
import { FaBowlRice } from 'react-icons/fa6';

const Process = ({ valuePercent, icon, activity, height }) => {
  let IconComponent;

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
      IconComponent = IoFootstepsSharp;
  }

  return (
    <div
      className={`flex 2xl:flex-row md:flex-col sm:flex-col bg-blue-200 md:w-3/4 lg:w-2/3 rounded-lg mx-auto sm:items-center md:items-center 2xl:gap-3 h-30 p-2`}
    >
      <div className='md:w-1/4 '>
        <IconComponent className='text-gray-600 m-4 mt-7 md:mt-0  text-6xl' />
      </div>
      <div className='w-full md:w-3/4 rounded-full dark:bg-gray-700'>
        <div className='flex pr-2 items-stretch'>
          <p className='text-white text-xl '>9000</p>
          <p className='text-gray-300  ml-1 '> /8000 {activity}</p>
        </div>
        <div className=''>
          <p className='text-gray-400'>{valuePercent}%</p>
        </div>
        <div
          className='bg-green-500 h-2.5 rounded-full relative'
          style={{ width: `${valuePercent}%` }}
        ></div>
      </div>
    </div>
  );
};

export default Process;
