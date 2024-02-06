import React from 'react';
import { useFormik } from 'formik';
import { HStack, Box, Button, VStack, Select } from '@chakra-ui/react';
import './sign_up.css';
import FormField from './FormField';

const SignUp = () => {
  const formik = useFormik({
    initialValues: { firstname: '', lastname: '', email: '', password: '', dob: '', weight: '', height: '', gender: '' },
    onSubmit: values => alert(JSON.stringify(values, null, 2)),
  });

  const handleChange = formik.handleChange;
  const values = formik.values;

  return (
    <form onSubmit={formik.handleSubmit}>
      <HStack spacing="8" justify="center">
        <Box maxW="70%">
          <VStack spacing="4" align="stretch">
            {['First Name', 'Last Name', 'Email', 'Password'].map((label, index) => (
              <FormField
                key={index}
                label={label}
                type={index === 2 ? 'email' : index === 3 ? 'password' : 'text'}
                placeholder={label}
                onChange={handleChange}
                value={values[label.toLowerCase().replace(' ', '')]}
                name={label.toLowerCase().replace(' ', '')}
              />
            ))}
          </VStack>
        </Box>
        <Box maxW="30%">
          <VStack spacing="3" align="stretch">
            {['Date of Birth', 'Weight', 'Height'].map((label, index) => (
              <FormField
                key={index}
                label={label}
                type={index === 0 ? 'date' : 'number'}
                placeholder={label}
                onChange={handleChange}
                value={values[label.toLowerCase().replace(' ', '')]}
                name={label.toLowerCase().replace(' ', '')}
              />
            ))}
            <Select
              placeholder="Select option"
              value={values.gender}
              name="gender"
              onChange={handleChange}
            >
              {['Option 1', 'Option 2', 'Option 3'].map((option, index) => (
                <option key={index} value={`option${index + 1}`}>{option}</option>
              ))}
            </Select>
          </VStack>
        </Box>
      </HStack>
      <Box margin="30px" display="flex" justifyContent="center" alignItems="center">
        <Button className="raised" type="submit" size="md" style={{ border: 'none', background: 'none', padding: '10px' }}>
          Submit
        </Button>
      </Box>
    </form>
  );
}

export default SignUp;
