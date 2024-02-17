import SignIn from '../components/SignIn/SignIn';
import SignUp from '../components/SignUp/SignUp';
import Dasboard from '../pages/Dashboard';
import AuthForm from '../components/Main-Template/main-template';
import Settingpg from '../components/Settings/settings';
import LayoutWrapper from '../components/Main-Template/LayoutWrapper';

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
    path: '/test',
    component: <LayoutWrapper />,
    noSideBar: true,
    isPrivate: true,
  }
];
