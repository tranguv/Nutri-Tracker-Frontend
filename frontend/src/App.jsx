import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { navigation } from './router/navigation';
import LayoutWrapper from './components/Main-Template/LayoutWrapper';

function App() {
  return (
    <Router>
      <Routes>
        {navigation.map((route, index) => {
          const { path, component, isPrivate, noSideBar } = route;

          const RouteComponent = () =>
            noSideBar ? (
              <>{component}</>
            ) : (
              <LayoutWrapper>{component}</LayoutWrapper>
            );

          return <Route key={index} path={path} element={<RouteComponent />} />;
        })}
      </Routes>
    </Router>
  );
}

export default App;
