import React from 'react'
import ReactDOM from 'react-dom'
import App from './App.jsx'
import './index.css'
import { ChakraProvider } from "@chakra-ui/react"
import SignUp from './components/sign_up/sign_up.jsx'
import AuthForm from './components/Main-Template/main-template.jsx'
import SignIn from './components/sign_in/sign_in.jsx'
import Settingpg from './components/Settings/settings.jsx'
ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider>
      <Settingpg></Settingpg>
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root')
)