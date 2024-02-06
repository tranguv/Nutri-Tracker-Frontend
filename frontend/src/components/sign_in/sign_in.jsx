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
import planet from './../../assets/planet.png';
import FormField from '../sign_up/FormField';
import { useFormik, Formik, Form } from 'formik';
function SignIn() {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <VStack spacing='6' alignItems='center'>
        <h1 style={{ fontWeight: 'bold' }}>Sign In</h1>
        <FormField
          label='Email'
          type='text'
          placeholder='Email'
          onChange={formik.handleChange}
          values={formik.values.email}
          name='email'
        />
        <FormField
          label='Password'
          type='password'
          placeholder=''
          onChange={formik.handleChange}
          values={formik.values.password}
          name='password'
        />
        <HStack justify='space-between'>
          <Checkbox defaultChecked>Remember me</Checkbox>
          <Button variant='text' size='sm'>
            Forgot password?
          </Button>
        </HStack>
        <Button colorScheme='teal' type='submit'>
          Sign In
        </Button>
      </VStack>
    </form>
  );
}

export default SignIn;
