import { HStack, Box, Button, Container, FormControl, FormLabel, Grid, GridItem, Input, VStack, Image, Checkbox } from '@chakra-ui/react'
import planet from './planet.png'
function SignIn() {
    return (
        <Grid templateColumns="repeat(5, 1fr)" gap={6} sx={{ fontFamily: 'Arial, sans-serif' }} >
            <GridItem colSpan={1}>
                <Box bg="#0C0873" height="25rem" sx={{ padding: '1rem' }} display="flex" flexDirection="column" justifyContent="flex-end" >
                    <Image src={planet} padding=" "></Image>
                </Box>
            </GridItem>
            <GridItem colSpan={3}>
                <Container maxW="md">
                    <Box padding="4" bg="gray.100" maxW="md" borderRadius="lg" sx={{ boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
                        <VStack spacing="6" alignItems="center">
                            <h1 style={{ fontWeight: "bold" }}>Sign In</h1>
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
                            <Button colorScheme="teal" type="submit">Sign In</Button>
                        </VStack>
                    </Box>
                </Container>
            </GridItem>
        </Grid>
    )
}

export default SignIn;