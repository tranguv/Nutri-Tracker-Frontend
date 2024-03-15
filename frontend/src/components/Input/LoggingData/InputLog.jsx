import FormField from '../../SignUp/FormField';
import { useFormik, Formik, Form } from 'formik';
import MealLog from './MealLog';
import ExerciseLog from './ExerciseLog';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import './InputLog.module.css';
function InputLog() {
  const adder = [
    {
      path: '/meallog',
      name: 'MealLog',
      // icon: <FaHome />,
    },
    {
      path: '/exerciselog',
      name: 'ExerciseLog',
      // icon: <FaHome />,
    },
  ]
  return (
    // <div className='flex flex-col gap-2 justify-center align-center px-10 h-full' >
        /* <MealLog />
        <ExerciseLog /> */

        <div className="flex flex-col justify-center items-center h-full">
          <div className="flex justify-center w-3/4 h-2/4">
            <div className="w-5/12 bg-blue-200 p-4 mr-8 flex flex-col justify-center items-center rounded-xl">
              <div>
                <h2 className="text-xl font-bold font-sans md:font-serif">MEALS</h2>
              </div>
              <div className="mt-4">
                <NavLink to="/meallog"  activeClassName="active">
                  <button className="bg-blue-500 text-white px-4 py-2 rounded-md">+ ADD</button>
                </NavLink>
              </div>
            </div>
            <div className="w-5/12 bg-blue-200 p-4 ml-8 flex flex-col justify-center items-center rounded-xl">
              <div>
                <h2 className="text-xl font-bold font-sans md:font-serif">EXERCISES</h2>
              </div>
              <div className="mt-4">
              <NavLink to="/exerciselog" activeClassName="active">
            <button className="bg-blue-500 text-white px-4 py-2 rounded-md">+ ADD</button>
          </NavLink>
              </div>
            </div> 
          </div>
        </div>

    // </div>

        


      
    //   <Menu>
    //   <MenuButton as={Button} >
    //     Actions
    //   </MenuButton>
    //   <MenuList>
    //     <MenuItem>Download</MenuItem>
    //     <MenuItem>Create a Copy</MenuItem>
    //     <MenuItem>Mark as Draft</MenuItem>
    //     <MenuItem>Delete</MenuItem>
    //     <MenuItem>Attend a Workshop</MenuItem>
    //   </MenuList>
    // </Menu>

    
  );

}

export default InputLog;


