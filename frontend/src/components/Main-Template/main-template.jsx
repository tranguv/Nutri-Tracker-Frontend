// AuthForm.jsx
import React, { useState } from 'react';
import {
  Box,
  Container,
  Grid,
  GridItem,
  Image,
  Button,
} from '@chakra-ui/react';
import planet from './../../assets/planet.png';
import arrow from './../../assets/next.png';

const AuthForm = ({ navbar, children }) => {
  const [toggle, setToggle] = useState(false);

  const handleClick = () => {
    setToggle(!toggle);
  };

  return (
    <Grid templateColumns="repeat(5, 1fr)" sx={{ fontFamily: 'Arial, sans-serif', width: '100%', height: '100vh' }}>
      {toggle && (
        <GridItem colSpan={1} position="relative" bg="blue.700" borderRadius="lg">
          <Image
            src={planet}
            position='absolute'
            right='-90%'
            bottom='-10%'
            transform='translate(-50%, -50%) scale(1.3)'
          />
          {navbar}
        </GridItem>
      )}
      <GridItem colSpan={toggle ? 4 : 5} display="flex" justifyContent="center" alignItems="center">
        <div>
          <Container maxW="100vh" alignItems="center">
            <Box padding="4" bg="" maxW={toggle ? '2xl' : '3xl'} borderRadius="lg" sx={{ boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
              <Button className='raised' onClick={handleClick} mb="4" position="relative" borderRadius="full">
                {toggle ? (
                  <Image src={arrow} position='absolute' transform='rotate(180deg)' fit="cover" />
                ) : (
                  <Image src={arrow} position='absolute' transform='rotate(0deg)' fit="cover" />
                )}
              </Button>

              {children}

            </Box>
          </Container>
        </div>
      </GridItem>
    </Grid>
  );
};

export default AuthForm;
