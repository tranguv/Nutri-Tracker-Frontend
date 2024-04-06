
import React from 'react';
import App from './App.jsx';
import { createRoot } from 'react-dom/client';
import { ChakraProvider } from "@chakra-ui/react"; // Remove duplicate import statement
import { registerLicense } from '@syncfusion/ej2-base';
import './index.css';
import { ContextProvider } from './contexts/ContextProvider';

registerLicense('Ngo9BigBOggjHTQxAR8/V1NAaF1cXmhKYVRpR2Nbe054flFHal5VVBYiSV9jS3pTdEdqW39acXZRT2RdVg==');

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider>
      <ContextProvider>
        <App />
      </ContextProvider>
    </ChakraProvider>
  </React.StrictMode>
);
