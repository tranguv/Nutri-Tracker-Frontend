
import React from 'react';
import App from './App.jsx';
import { createRoot } from 'react-dom/client';
import { ChakraProvider } from "@chakra-ui/react"; // Remove duplicate import statement
import './index.css';
import { ContextProvider } from './contexts/ContextProvider';


createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider>
      <ContextProvider>
        <App />
      </ContextProvider>
    </ChakraProvider>
  </React.StrictMode>
);
