import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { navigation } from './router/navigation';

// css
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        {navigation.map((route, index) => {
          const { path, component: Component, isPrivate, noLayoutWrap } = route;

          const element = Component;
          // noLayoutWrap ? (  // cmt tam khi nao co side bar bo vo
          //   <Component />
          // ) : (
          //   <LayoutWrapper>
          //     <Component />
          //   </LayoutWrapper>
          // );

          return <Route key={index} path={path} element={element} />;
        })}
      </Routes>
    </Router>
  );
}

export default App;
