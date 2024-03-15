import SignIn from '../components/SignIn/SignIn';
import SignUp from '../components/SignUp/SignUp';
import Dasboard from '../pages/Dashboard';
import AuthForm from '../components/Main-Template/main-template';
import LayoutWrapper from '../components/Main-Template/LayoutWrapper';

import InputLog from '../components/Input/LoggingData/InputLog';
import MealLog from '../components/Input/LoggingData/MealLog';
import ExerciseLog from '../components/Input/LoggingData/ExerciseLog';

import EditSetting from '../components/SettingEdit/setting_edit';



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
    path: '/input',
    component: <LayoutWrapper children={<InputLog/>} />,
    noLayoutWrap: true,
    isPrivate: true,
  },
  {
    path: '/meallog',
    component: <LayoutWrapper children={<MealLog/>} />,
    noLayoutWrap: true,
    isPrivate: true,
  },
  {
    path: '/exerciselog',
    component: <LayoutWrapper children={<ExerciseLog/>} />,
    noLayoutWrap: true,
    isPrivate: true,
  },
  {
    path: '/test',
    component: <MealLog />,
    noLayoutWrap: false,
    isPrivate: true,
  },
];
