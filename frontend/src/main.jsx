import React from 'react'
import App from './App.jsx'
import { createRoot } from 'react-dom/client'
import { ChakraProvider } from "@chakra-ui/react"
import './index.css'
import Settingpg from './components/Settings/settings.jsx'

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Settingpg></Settingpg>
  </React.StrictMode>,
  document.getElementById('root')
)