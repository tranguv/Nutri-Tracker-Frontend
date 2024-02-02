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
  
  function SignIn() {
    return (
      <Container maxW="3xl">
        <Grid templateColumns="repeat(5, 1fr)" gap={6} sx={{ fontFamily: 'Arial, sans-serif' }}>
        <GridItem colSpan={1} position="relative" bg="blue.700">
            <Image
              src={planet}
              position="absolute"
              right="-90%"
              bottom="5%"
              transform="translate(-50%, -50%) scale(2)"
            />
          </GridItem>
          <GridItem colSpan={3}>
            <Container maxW="md">
              <Box padding="4" bg="gray.100" maxW="md" borderRadius="lg" sx={{ boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
                <form>
                <VStack spacing="6" alignItems="center">
                  <h1 style={{ fontWeight: 'bold' }}>Sign In</h1>
                  <FormControl id="email">
                    <FormLabel>Email address</FormLabel>
                    <Input type="email" sx={{ borderColor: 'gray.300' }} />
                  </FormControl>
                  <FormControl id="password">
                    <FormLabel>Password</FormLabel>
                    <Input type="password" sx={{ borderColor: 'gray.300' }} />
                  </FormControl>
                  <HStack justify="space-between">
                    <Checkbox defaultChecked>Remember me</Checkbox>
                    <Button variant="text" size="sm">
                      Forgot password?
                    </Button>
                  </HStack>
                  <Button colorScheme="teal" type="submit">
                    Sign In
                  </Button>
                </VStack>
                </form>
              </Box>
            </Container>
          </GridItem>
          
        </Grid>
      </Container>
    );
  }
  
  export default <SignUp></SignUp>;
  