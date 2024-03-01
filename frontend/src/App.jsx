import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { navigation } from './router/navigation';

import { useStateContext } from './contexts/ContextProvider';

// css
import './App.css';
import React, { useState } from 'react';

import LayoutWrapper from './components/Main-Template/LayoutWrapper';

// const RouteComponent = () => (
//   noSideBar ? (
//     <>{component}</>
//   ) : (
//     <LayoutWrapper>{component}</LayoutWrapper>
//   )
// );

function App() {
  // const { isSidebarCollapsed, setSidebarCollapsed } = useStateContext();
  // const handleIconClick = () => {
  //   setSidebarCollapsed(!isSidebarCollapsed);
  // };
  return (
    <Router>
      <Routes>
        {navigation.map((route, index) => {
          const { path, component: Component, isPrivate, noLayoutWrap } = route;

          const element = noLayoutWrap ? (
            Component
          ) : (
            <LayoutWrapper>{Component}</LayoutWrapper>
          );

          return <Route key={index} path={path} element={element} />;
        })}
      </Routes>
    </Router>
  );
}

export default App;
