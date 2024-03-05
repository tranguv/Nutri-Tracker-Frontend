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
  function MealLog() {
    const formik = useFormik({
      initialValues: {
        ingredients: '',
        mealType: '',
        quantity: '',
        unit: '',
      },
      onSubmit: (values) => {
        alert(JSON.stringify(values, null, 2));
      },
    });
    return (
      <form onSubmit={formik.handleSubmit}>
        <VStack spacing='6' alignItems='center'>
          <h1 style={{ fontWeight: 'bold' }}>Meal Logs</h1>
          <FormField
            label='Ingredients'
            type='text'
            placeholder='Ingredients'
            onChange={formik.handleChange}
            values={formik.values.ingredients}
            name='ingredients'
          />

          <FormField
            label='Meal Type'
            type='text'
            placeholder='Meal Type'
            onChange={formik.handleChange}
            values={formik.values.mealType}
            name='mealType'
          />

          <FormField
            label='Quantity'
            type='text'
            placeholder='Quantity'
            onChange={formik.handleChange}
            values={formik.values.quantity}
            name='quantity'
          />

        <FormField
            label='Unit'
            type='text'
            placeholder='Unit'
            onChange={formik.handleChange}
            values={formik.values.unit}
            name='unit'
        />
        <Button colorScheme='teal' type='submit'>
          ADD
          </Button>
        </VStack>
      </form>
    );
  }
  
  export default MealLog;
  