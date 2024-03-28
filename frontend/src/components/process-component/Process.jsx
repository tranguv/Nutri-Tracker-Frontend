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
      className={`flex    bg-pink-200  rounded-lg  items-center px-1`}
    >
      <div className=''>
        <IconComponent className='text-gray-600 m-4  text-5xl' />
      </div>
      <div className='w-full rounded-full dark:bg-gray-700'>
        <div className='hidden md:flex pr-2 items-stretch space-x-1 justify-center  '>
          <p className='font-semibold text-xl '>9000</p>
          <p className='text-sm'> /8000 {activity}</p>
        </div>
        <div className='flex justify-center'>
          <p className='text-gray-400 '>{valuePercent}%</p>
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
