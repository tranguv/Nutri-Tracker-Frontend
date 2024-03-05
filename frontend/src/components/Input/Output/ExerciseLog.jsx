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
//   import './InputLog.modules.css';
  function ExerciseLog() {
    const formik = useFormik({
      initialValues: {
        exercise: '',
        duration: '',
        intensity: '',
      },
      onSubmit: (values) => {
        alert(JSON.stringify(values, null, 2));
      },
    });

    return (
      <form onSubmit={formik.handleSubmit}>
        <VStack spacing='6' alignItems='center'>
        <h1 style={{ fontWeight: 'bold' }}>Exercise Logs</h1>
          <FormField
            label='Exercise'
            type='text'
            placeholder='Exercise'
            onChange={formik.handleChange}
            values={formik.values.exercise}
            name='exercise'
          />

          <FormField
            label='Duration'
            type='text'
            placeholder='Duration'
            onChange={formik.handleChange}
            values={formik.values.duration}
            name='duration'
          />

          <FormField
            label='Intensity'
            type='text'
            placeholder='Intensity'
            onChange={formik.handleChange}
            values={formik.values.intensity}
            name='intensity'
          />

        <Button colorScheme='teal' type='submit'>
          ADD
          </Button>
        </VStack>
      </form>


      
    );
  }
  
  export default ExerciseLog;
  