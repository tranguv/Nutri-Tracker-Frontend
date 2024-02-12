import SignIn from '../components/sign_in/sign_in';
import SignUp from '../components/sign_up/sign_up';
import Dasboard from '../pages/Dashboard';
import CheckBar from '../components/CheckBar/CheckBar';
import AuthForm from '../components/Main-Template/main-template';

export const navigation = [
  {
    path: '/', // sign up page
    component: <AuthForm children={<SignUp />} />,
    noSideBar: true,
    isPrivate: false,
  },
  {
    path: '/signin', // sign in page
    component: <AuthForm children={<SignIn />} />,
    noSideBar: true,
    isPrivate: false,
  },
  {
    path: '/dashboard', // home page
    component: <Dasboard />,
    noSideBar: false,
    isPrivate: true,
  },
  {
    path: '/test', // for testing
    component: <CheckBar />,
    noSideBar: true,
    isPrivate: true,
  },
  // {
  //   path: '/log-out', // log out page
  //   component: <LogOut />,
  //   noSideBar: false,
  //   isPrivate: true,
  // }
];
