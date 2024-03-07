import SignIn from '../components/SignIn/SignIn';
import SignUp from '../components/SignUp/SignUp';
import Dasboard from '../pages/Dashboard';
import AuthForm from '../components/Main-Template/main-template';
import LayoutWrapper from '../components/Main-Template/LayoutWrapper';
import EditSetting from '../components/SettingEdit/setting_edit';
import CheckBar from '../components/CheckBar/CheckBar';
import TaskName from '../components/TaskName/TaskName';

export const navigation = [
  {
    path: '/', // sign up page
    component: <AuthForm children={<SignUp />} />,
    noLayoutWrap: true,
    isPrivate: false,
  },
  {
    path: '/signin', // sign in page
    component: <AuthForm children={<SignIn />} />,
    noLayoutWrap: true,
    isPrivate: false,
  },
  {
    path: '/dashboard', // home page
    component: <Dasboard />,
    noLayoutWrap: false,
    isPrivate: true,
  },
  {
    path: '/test',
    component: <TaskName />,
    noLayoutWrap: false,
    isPrivate: true,
  },
];
