import {
    HStack,
    Box,
    Button,
    Container,
    FormControl,
    FormLabel,
    Grid,
    GridItem,
    Input,
    VStack,
    Image,
    Checkbox,
  } from '@chakra-ui/react';
  import FormField from '../../SignUp/FormField';
  import { useFormik, Formik, Form } from 'formik';
    import MealLog from './MealLog';
    import ExerciseLog from './ExerciseLog';

    import { Input } from "@/components/ui/input"
  import { DropdownMenuTrigger, DropdownMenuItem, DropdownMenuContent, DropdownMenu } from "@/components/ui/dropdown-menu"
  import { Button } from "@/components/ui/button"
  
//   import './InputLog.modules.css';
  function InputLog() {
    
    return (
        // <div className='flex flex-col gap-2 justify-center align-center px-10 h-full' >
        //     <MealLog />
        //     <ExerciseLog />
        // </div>
        
        <div className="flex flex-col items-center space-y-4 py-8">
        <div className="space-y-2 text-center">
          <h1 className="text-3xl font-bold tracking-tight">Input Logging Page</h1>
        </div>
        <div className="w-full max-w-sm space-y-2">
          <div className="flex items-center space-x-2">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Input className="w-[300px]" placeholder="Select an option" type="text" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-[300px]">
                <DropdownMenuItem>Option 1</DropdownMenuItem>
                <DropdownMenuItem>Option 2</DropdownMenuItem>
                <DropdownMenuItem>Option 3</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <Button onClick={undefined}>Submit</Button>
          </div>
        </div>
      </div>
    );
  }
  
  export default InputLog;
  