import React from 'react';
import { Box, Button, SimpleGrid } from '@chakra-ui/react';
import Sidebar from '../Sidebar/Sidebar';
import Navbar from '../Navbar/Navbar';
import { useStateContext } from '../../contexts/ContextProvider';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import { FiSettings } from 'react-icons/fi';

// const LayoutWrapper = ({ children }) => {
//   const { isSidebarCollapsed, setSidebarCollapsed } = useStateContext();

//   const handleIconClick = () => {
//     setSidebarCollapsed(!isSidebarCollapsed);
//   };

//   // const sidebarWidth = isSidebarCollapsed ? '170px' : '50px';

//   return (
//     <div style={{ display: 'flex' }}>
//       <Sidebar
//         isSidebarCollapsed={isSidebarCollapsed}
//         handleIconClick={handleIconClick}
//       />
//       <div style={{ height: '100vh', width: '100%' }}>
//         <Navbar />
//         <div>{children}</div>
//       </div>
//       <TooltipComponent
//         content='Settings Tooltip'
//         style={{ position: 'fixed', bottom: '20px', right: '20px' }}
//       >
//         <FiSettings size={30} />
//       </TooltipComponent>
//     </div>
//   );
// };

// export default LayoutWrapper;
const LayoutWrapper = ({ children }) => {
  const { isSidebarCollapsed, setSidebarCollapsed } = useStateContext();

  const handleIconClick = () => {
    setSidebarCollapsed(!isSidebarCollapsed);
  };

  const sidebarWidth = isSidebarCollapsed ? '10rem' : '4rem';

  return (
    <div style={{ display: 'flex' }}>
      <Sidebar
        isSidebarCollapsed={isSidebarCollapsed}
        handleIconClick={handleIconClick}
      />
      <div
        style={{
          height: '100vh',
          // width: 'calc(100% - 10rem)',
          width: '100%',
          marginLeft: sidebarWidth,
          // marginRight: 'calc(100% - 2rem)'
          // overflowX: 'hidden',
        }}
      >
        <div>
          <Navbar />
          <div
            style={{
              position: 'relative',
              top: '80px',
              // overflowY: 'scroll',
              // overflowX: 'hidden',
              height: 'calc(100vh - 82px)',
              // width: 'calc(100% - 14rem)',
            }}
          >
            {children}
          </div>
        </div>
      </div>
      <TooltipComponent
        content='Settings Tooltip'
        style={{ position: 'fixed', bottom: '20px', right: '20px' }}
      >
        <FiSettings size={30} />
      </TooltipComponent>
    </div>
  );
};

export default LayoutWrapper;
