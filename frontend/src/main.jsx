import React from 'react'
import App from './App.jsx'
import { createRoot } from 'react-dom/client'
import { ChakraProvider } from "@chakra-ui/react"
import { registerLicense } from '@syncfusion/ej2-base';
registerLicense('ORg4AjUWIQA/Gnt2UVhiQlJPd11dXmJWd1p/THNYflR1fV9DaUwxOX1dQl9nSXxSd0RnWn9fcXBdRmU=');
import './index.css'
import { ContextProvider } from './contexts/ContextProvider'


createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider>
    <ContextProvider> <App /></ContextProvider>
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root')
)