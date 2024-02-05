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
    Select, Image,useBreakpointValue
  } from '@chakra-ui/react';
  import { useFormik, Form, Field, Formik } from 'formik';
  import './sign_up.css';
  import planet from './../../assets/planet.png';
  import arrow from './../../assets/next.png';
 

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
    const [toggle, setToggle] = useState(false);
    const handleClick = () => {
        setToggle(!toggle);
    }
    
    return (
      
        <Grid templateColumns="repeat(5, 1fr)" sx={{ fontFamily: 'Arial, sans-serif', width: '100%', height: '100vh'}}>
          {toggle && 
          <GridItem colSpan={1} position="relative" bg="blue.700" borderRadius="lg">
          <Image
          src={planet}
          position='absolute'
          right='-90%'
          bottom='5%'
          transform='translate(-50%, -50%) scale(2)'
        />
        </GridItem>}
          <GridItem colSpan={toggle? 4: 5}  display="flex" justifyContent="center" alignItems="center">
            <Container maxW="100vh">
              <Box padding="4" bg="" maxW={toggle ? '2xl' : 'full'} borderRadius="lg" sx={{ boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
              <Button className='raised' onClick={handleClick} mb="4" position="relative" borderRadius="full">
                {toggle ? (
                  <Image src={arrow} position='absolute' transform='rotate(0deg)' fit="cover" />
                ) : (
                  <Image src={arrow} position='absolute' transform='rotate(180deg)' fit="cover" />
                )}
              </Button>
              
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
                        <Box margin="30px" display="flex" justifyContent="center" alignItems="center">
                          <Button className="raised"type="submit" size='md' style={{ border: 'none', background: 'none', padding: '10px' }}>
                              Submit

                          </Button>
                        </Box>
                        
                    </Form>
                </Formik>
                
              </Box>
            </Container>
          </GridItem>
        </Grid>
      
    );
  }
  
  export default SignUp;
  