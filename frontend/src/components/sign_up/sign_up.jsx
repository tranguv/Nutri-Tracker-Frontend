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
    Select
  } from '@chakra-ui/react';
  import { useFormik, Form, Field, Formik } from 'formik';
  import './sign_up.module.css';
import { useState } from 'react';
  
  const FormField = ({ label, type, placeholder, onChange, value, name }) => (
    <FormControl>
      <FormLabel>{label}</FormLabel>
      <Input type={type} placeholder={placeholder} onChange={onChange} value={value} name={name} />
    </FormControl>
  );
  
  
  function SignUp() {
    const formik = useFormik({
        initialValues: {
        firstname: '',
        lastname: '',
        email: '',
        password: '',
        dob: '',
        weight: '',
        height: '',
        gender: ''
      },
      onSubmit: values => {
        alert(JSON.stringify(values, null, 2));
      },
    });
    const [toggle, setToggle] = useState("False");
    const handleClick = () => {
        setToggle(!toggle);
    }
    return (
      <Container maxW="3xl">
        <Grid templateColumns="repeat(5, 1fr)" sx={{ fontFamily: 'Arial, sans-serif' }}>
          <GridItem colSpan={toggle? 0: 0} position="relative" bg="blue.700" borderRadius="lg"></GridItem>
          <GridItem colSpan={toggle? 5 : 4}>
            <Container maxW="100vh">
              <Box padding="4" bg="" maxW="lg" borderRadius="lg" sx={{ boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
              <button onClick={handleClick}>Toggle</button>
                <Formik>
                
                    <Form onSubmit={formik.handleSubmit}>
                       
                        <HStack spacing="8" justify="center">
                            <Box maxW="70%">
                                <VStack spacing="4"  align="stretch">
                                    <FormField label="First Name" type="text" placeholder="First Name" onChange={formik.handleChange} value={formik.values.firstname} name="firstname" />
                                    <FormField label="Last Name" type="text" placeholder="Last Name" onChange={formik.handleChange} value={formik.values.lastname} name="lastname" />
                                    <FormField label="Email" type="email" placeholder="Email" onChange={formik.handleChange} value={formik.values.email} name="email" />
                                    <FormField label="Password" type="password" placeholder="Password" onChange={formik.handleChange} value={formik.values.password} name="password" />
                                </VStack>
                            </Box>
                            <Box maxW="30%">
                                <VStack spacing="3"  align="stretch">
                                    <FormField label="Date of Birth" type="date" placeholder="Date of Birth" onChange={formik.handleChange} value={formik.values.dob} name="dob" />
                                    <FormField label="Weight" type="number" placeholder="Weight" onChange={formik.handleChange} value={formik.values.weight} name="weight" />
                                    <FormField label="Height" type="number" placeholder="Height" onChange={formik.handleChange} value={formik.values.height} name="height" />
                                    <FormLabel>Gender</FormLabel>
                                    <Select placeholder='Select option' value={formik.values.gender} name='gender' onChange={formik.handleChange}>
                                        <option value='option1'>Option 1</option>
                                        <option value='option2'>Option 2</option>
                                        <option value='option3'>Option 3</option>
                                    </Select>
                                </VStack>
                            </Box>
                            
                        </HStack>
                        <Box margin="30px">
                            <button type="submit"><Box padding="4" bg="" maxW="lg" borderRadius="lg" sx={{ boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
                            
                            Submit</Box></button>
                        
                        </Box>
                        
                    </Form>
                </Formik>
                
              </Box>
            </Container>
          </GridItem>
        </Grid>
      </Container>
    );
  }
  
  export default SignUp;
  