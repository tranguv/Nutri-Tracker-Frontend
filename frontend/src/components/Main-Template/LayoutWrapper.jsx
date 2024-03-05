import React from 'react';
import { Box, SimpleGrid } from '@chakra-ui/react';
import Sidebar from '../Sidebar/Sidebar';
import Navbar from '../Navbar/Navbar';
import { useStateContext } from '../../contexts/ContextProvider';
const LayoutWrapper = ({ children }) => {
  const { isSidebarCollapsed, setSidebarCollapsed } = useStateContext();

  const handleIconClick = () => {
    setSidebarCollapsed(!isSidebarCollapsed);
  };

  const sidebarWidth = isSidebarCollapsed ? '150px' : '50px';

  return (
    <SimpleGrid gap={2} templateColumns={`${sidebarWidth} 1fr`}>
      <Box>
        <Sidebar
          isSidebarCollapsed={isSidebarCollapsed}
          handleIconClick={handleIconClick}
        />
      </Box>
      <Box className='flex flex-col'>
        <Navbar />
        {children}
      </Box>
    </SimpleGrid>
  );
};

export default LayoutWrapper;

// import React from 'react';
// import { Box, Grid } from '@chakra-ui/react'; // Use Grid instead of SimpleGrid for more control
// import Sidebar from '../Sidebar/Sidebar';
// import Navbar from '../Navbar/Navbar';
// import { useStateContext } from '../../contexts/ContextProvider';

// const LayoutWrapper = ({ children }) => {
//   const { isSidebarCollapsed } = useStateContext();

//   const handleIconClick = () => {
//     setSidebarCollapsed(!isSidebarCollapsed);
//   };
//   const sidebarWidth = isSidebarCollapsed ? '80px' : '250px';

//   return (
//     <Grid
//       templateColumns={`${sidebarWidth} 1fr`} // First column fits the sidebar, second takes remaining space
//       gap={2}
//     >
//       <Box>
//         <Sidebar
//           isSidebarCollapsed={isSidebarCollapsed}
//           handleIconClick={handleIconClick}
//         />
//       </Box>
//       <Box>
//         <Navbar />
//         {children}
//       </Box>
//     </Grid>
//   );
// };

// export default LayoutWrapper;
