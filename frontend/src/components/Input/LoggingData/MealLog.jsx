// import {
//   HStack,
//   Box,
//   Button,
//   Container,
//   FormControl,
//   FormLabel,
//   Grid,
//   GridItem,
//   Input,
//   VStack,
//   Image,
//   Checkbox,
// } from '@chakra-ui/react';import React from 'react';
// import FormField from '../../SignUp/FormField';
// import { useFormik, Formik, Form } from 'formik';
// import TextField from '@mui/material/TextField';
// import Autocomplete from '@mui/material/Autocomplete';
// import Stack from '@mui/material/Stack';


// import './MealLog.module.css';



// function MealLog() {

//   const formik = useFormik({
//     initialValues: {
//       ingredients: '',
//       mealType: '',
//       quantity: '',
//       unit: '',
//     },
//     onSubmit: (values) => {
//       alert(JSON.stringify(values, null, 2));
//     },

//   });
//   return (
//     <form onSubmit={formik.handleSubmit}>
//       <VStack spacing='6' alignItems='center'>
//         <h1 style={{ fontWeight: 'bold' }}>Meal Logs</h1>
//         <FormField
//           label='Ingredients'
//           type='text'
//           placeholder='Ingredients'
//           onChange={formik.handleChange}
//           values={formik.values.ingredients}
//           name='ingredients'
//         />

//         <FormField
//           label='Meal Type'
//           type='text'
//           placeholder='Meal Type'
//           onChange={formik.handleChange}
//           values={formik.values.mealType}
//           name='mealType'
//         />

//         <FormField
//           label='Quantity'
//           type='text'
//           placeholder='Quantity'
//           onChange={formik.handleChange}
//           values={formik.values.quantity}
//           name='quantity'
//         />

//       <FormField
//           label='Unit'
//           type='text'
//           placeholder='Unit'
//           onChange={formik.handleChange}
//           values={formik.values.unit}
//           name='unit'
//       />
//       <Button colorScheme='teal' type='submit'>
//         ADD
//         </Button>
//       </VStack>
//     </form>

//     /* <div> */

//       /* <div className="min-h-screen flex items-center justify-center">
//             <div class="relative group">
//               <button id="dropdown-button" className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-blue-500">
//                 <span class="mr-2">Open Dropdown</span>
//                 <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 ml-2 -mr-1" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
//                   <path fill-rule="evenodd" d="M6.293 9.293a1 1 0 011.414 0L10 11.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clip-rule="evenodd" />
//                 </svg>
//               </button>
//               <div id="dropdown-menu" className="hidden absolute right-0 mt-2 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 p-1 space-y-1">

//                 <input id="search-input" className="block w-full px-4 py-2 text-gray-800 border rounded-md  border-gray-300 focus:outline-none" type="text" placeholder="Search items" autocomplete="off"></input>

//                 <a href="#" class="block px-4 py-2 text-gray-700 hover:bg-gray-100 active:bg-blue-100 cursor-pointer rounded-md">Uppercase</a>
//                 <a href="#" class="block px-4 py-2 text-gray-700 hover:bg-gray-100 active:bg-blue-100 cursor-pointer rounded-md">Lowercase</a>
//                 <a href="#" class="block px-4 py-2 text-gray-700 hover:bg-gray-100 active:bg-blue-100 cursor-pointer rounded-md">Camel Case</a>
//                 <a href="#" class="block px-4 py-2 text-gray-700 hover:bg-gray-100 active:bg-blue-100 cursor-pointer rounded-md">Kebab Case</a>
//               </div>
//             </div>
//           </div> */

//           /* <div className="p-4">
//           <Autocomplete
//             disablePortal
//             id="combo-box-demo"
//             options={top100Films}
//             sx={{ width: 300 }}
//             getOptionLabel={(option) => option.label}
//             renderInput={(params) => <TextField {...params} label="Movie" />}
//           />
//         </div> */

//     // </div>
//   );
// }

// export default MealLog;


import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';

const MealLog = () => {
  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel variant="standard" htmlFor="uncontrolled-native">
          Age
        </InputLabel>
        <NativeSelect
          defaultValue={30}
          inputProps={{
            name: 'age',
            id: 'uncontrolled-native',
          }}
        >
          <option value={10}>Ten</option>
          <option value={20}>Twenty</option>
          <option value={30}>Thirty</option>
        </NativeSelect>
      </FormControl>
    </Box>
  );
}
export default MealLog;