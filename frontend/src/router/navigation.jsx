import SignIn from '../components/sign_in/sign_in';
import SignUp from '../components/sign_up/sign_up';
import AuthForm from '../components/Main-Template/main-template';

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
];
