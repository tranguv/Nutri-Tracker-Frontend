import SignIn from '../components/SignIn/SignIn';
import SignUp from '../components/SignUp/SignUp';
import Dasboard from '../pages/Dashboard';
import AuthForm from '../components/Main-Template/main-template';
import LayoutWrapper from "../components/Main-Template/LayoutWrapper";

import EditSetting from '../components/SettingEdit/setting_edit';
import Settingpg from '../components/Settings/settings';
import ProfilePage from '../components/profilePage/ProfilePage';
import Dashboard from '../pages/Dashboard';

const user = {
  name: "John Doe",
  email: "johndoe@gmail.com",
  date: "9-11-2001",
};

export const navigation = [
  {
    path: "/", // sign up page
    component: <AuthForm children={<SignUp />} />,
    noLayoutWrap: true,
    isPrivate: false,
  },

  {
    path: "/signin", // sign in page
    component: <AuthForm children={<SignIn />} />,
    noLayoutWrap: true,
    isPrivate: false,
  },
  {
    path: "/dashboard", // home page
    component: <Dasboard />,
    noLayoutWrap: false,
    isPrivate: true,
  },
  {
    path: "/settingpage",
    component: <Settingpg />,
    noLayoutWrap: false,
    isPrivate: true,
  },
  {
    path: "/editsettingpage",
    component: <EditSetting />,
    noLayoutWrap: false,
    isPrivate: true,
  },

  {
    path: "/profilePage",
    component: <ProfilePage user={user} />,
    noLayoutWrap: false,
    isPrivate: true,
  },
];
