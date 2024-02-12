import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import { navigation } from './router/navigation';
import { TooltipComponent } from '@syncfusion/ej2-react-popups'
import {FiSettings} from "react-icons/fi"
import Sidebar from './components/Navbar-stuffs/Sidebar';
import SideBarWrapper from './components/Main-Template/SideBarWrapper';
import { useStateContext } from './contexts/ContextProvider';
import NavBar from './components/Navbar-stuffs/Navbar';
// css
import './App.css';
import { useState } from 'react';
function App() {
  const {isSidebarCollapsed, setSidebarCollapsed} = useStateContext();
  const handleIconClick = () => {
    setSidebarCollapsed(!isSidebarCollapsed);
  };
  return (
    // <Router>
    //   <Routes>
    //     {navigation.map((route, index) => {
    //       const { path, component: Component, isPrivate, noLayoutWrap } = route;

    //       const element = Component;
    //       // noLayoutWrap ? (  // cmt tam khi nao co side bar bo vo
    //       //   <Component />
    //       // ) : (
    //       //   <LayoutWrapper>
    //       //     <Component />
    //       //   </LayoutWrapper>
    //       // );

    //       return <Route key={index} path={path} element={element} />;
    //     })}
    //   </Routes>
    // </Router>
    <div>
      <BrowserRouter>
        <div className='flex relative dark:bg-main-dark-bg'>
          <div className='fixed right-4 bottom-4' style={{zIndex:"1000"}}>
            <TooltipComponent>
              <FiSettings size={30} />
            </TooltipComponent>
          </div>

          { // check if sidebar is collapsed or not
            isSidebarCollapsed ? (
              <div className='w-44 '>
                <SideBarWrapper />
              </div>
            ): (
              <div className='w-14 '>
                <SideBarWrapper />
              </div>)
          }

         <div className="  dark:bg-main-bg bg-main-bg min-h-screen w-full flex-2" >
          <div className='fixed md:static bg-main-bg dark:bg-main-dark-bg'>
            <NavBar />
          </div>
          <div>
            <Routes>

            </Routes>
          </div>
         </div>

        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
