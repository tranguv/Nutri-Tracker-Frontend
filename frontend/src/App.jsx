import React from 'react';
// import Navbar from "./components/Navbar-stuffs/Navbar";
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import { navigation } from './router/navigation';
// import SideBarWrapper from './components/Main-Template/SideBarWrapper';
import Badge from "./components/badge/Badge";

function App() {
  return (
    // <Router>
    //   <Routes>
    //     {navigation.map((route, index) => {
    //       const { path, component, isPrivate, noSideBar } = route;

    //       const RouteComponent = () => noSideBar ? (
    //         <>
    //           {component}
    //         </>
    //       ) : (
    //         <SideBarWrapper>{component}</SideBarWrapper>
    //       );

    //       return <Route key={index} path={path} element={<RouteComponent />} />;
    //     })}
    //   </Routes>
    // </Router>
    <div> <Badge/> </div>
  );
}

export default App;
