import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { navigation } from './router/navigation';

// css
import './App.css';
import SignIn from './components/sign_in/sign_in';
import AuthForm from './components/Main-Template/main-template';
import ResetPW from './components/Reset_PW/reset_pw';

function App() {
  return (
    // <ResetPW/>
    <AuthForm children={<ResetPW/>}/>
    
    // <div><h1 className='text-3xl text-blue-500 underline'>Hello</h1></div>
    
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
  );
}

export default App;
