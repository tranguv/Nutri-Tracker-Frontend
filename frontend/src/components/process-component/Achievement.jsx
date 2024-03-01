import React from 'react';
import { GiWeightScale } from "react-icons/gi";

const Achievement = ({valuePercent  }) => {
    return (
        <div className='flex bg-blue-300 w-58 h-36 rounded-lg'>
            <div className="w-full rounded-full h-2.5 dark:bg-gray-700">
                <div className='mr-3 ml-2 '>
                    <p className='text-white pt-1 text-lg'>108.0 lbs</p>
                    <p className='text-white text-lg mt-3'>165 cm</p>
                    <button className='hover:drop-shadow-xl bg-gray-300 rounded-lg px-4 mt-6'>Edit</button>
                </div>
                
            </div>
            <div>
                <GiWeightScale className='text-gray-600 m-4 mt-2 text-6xl'/>
                <div className='mt-4 ml-6'>
                    <p className='text-gray-400'>
                        {valuePercent}%
                    </p>
                </div>
                <div className="bg-green-500 h-2.5 rounded-full" style={{width: `${valuePercent}%`}}></div>
            </div>
            
            
        </div>
      )
    };


export default Achievement