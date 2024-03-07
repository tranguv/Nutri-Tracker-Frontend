// SideBarWrapper.js
import React, { useState } from 'react';
import { Grid, GridItem } from '@chakra-ui/react';
import Sidebar from '../Navbar-stuffs/Sidebar'; // Ensure the path is correct
import { useStateContext } from '../../contexts/ContextProvider'; // Ensure the path is correct

const SideBarWrapper = ({ children }) => {
  const {isSidebarCollapsed, setSidebarCollapsed} = useStateContext();
  const handleIconClick = () => {
    setSidebarCollapsed(!isSidebarCollapsed);
  };
  


  return (
    <div className=' '>
      {/* <Grid templateColumns='repeat(14, 1fr)'>
      <GridItem colSpan={sideBarSpan}>
        
      </GridItem>
      <GridItem colSpan={contentSpan}>
        {children}
      </GridItem>
    </Grid> */}
    <Sidebar isSidebarCollapsed={isSidebarCollapsed} handleIconClick={handleIconClick} />
    </div>
  );
};

export default SideBarWrapper;
