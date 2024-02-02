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
    Checkbox,Select
  } from '@chakra-ui/react';
  
  import './sign_up.css'
  function SignUp() {
    return (
      <Container maxW="3xl" >
        <Grid templateColumns="repeat(5, 1fr)"  sx={{ fontFamily: 'Arial, sans-serif' }}>
        <GridItem colSpan={1} position="relative" bg="blue.700"borderRadius="lg">
            
          </GridItem>
          <GridItem colSpan={4}>
            <Container maxW="100vh">
              <Box padding="4" bg="" maxW="lg" borderRadius="lg" sx={{ boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
                <form>
                    <HStack spacing='20px'>
                        <Box w='400px'>
                            <VStack spacing="4">
                                <FormControl >
                                    <FormLabel>First Name</FormLabel>
                                    <Input type="text" placeholder='Enter First Name'/>
                                </FormControl>
                                <FormControl >
                                    <FormLabel>Last Name</FormLabel>
                                    <Input type="text" placeholder='Enter Last Name'/>
                                </FormControl>
                                <FormControl >
                                    <FormLabel>Email address / User name</FormLabel>
                                    <Input type="email" placeholder='e.g: frisbee@gmail.com'/>
                                </FormControl>
                                <FormControl >
                                    <FormLabel>Email address</FormLabel>
                                    <Input type="text"placeholder='e.g: Qj123!f:f' />
                                </FormControl>
                            </VStack>
                        </Box>
                        <Box>
                        <VStack spacing="4">
                            <FormControl >
                                <FormLabel>Date Of Birth</FormLabel>
                                <Input type="date" />
                            </FormControl>
                            <FormControl >
                                <FormLabel>Weight (kg)</FormLabel>
                                <Input type="number" />
                            </FormControl>
                            <FormControl >
                                <FormLabel>Height (cm)</FormLabel>
                                <Input type="number" />
                            </FormControl>
                            <FormControl >
                                <FormLabel>Gender</FormLabel>
                                <Select placeholder='Select gender' size='md' value=''>
                                    <option value='male'>Male</option>
                                    <option value='female'>Female</option>
                                    <option value='other'>Other</option>
                                </Select>
                            </FormControl>
                        </VStack>
                    </Box>
                    </HStack>
                </form>
              </Box>
            </Container>
          </GridItem>
          
        </Grid>
      </Container>
    );
  }
  
  export default SignUp;
  