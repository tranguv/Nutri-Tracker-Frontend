import React from "react";
import { ReactDOM } from "react";
import App from "./App.jsx";

import { createRoot } from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react"; // Remove duplicate import statement
import { registerLicense } from "@syncfusion/ej2-base";
import "./index.css";
import { ContextProvider } from "./contexts/ContextProvider";
import { ThemeProvider } from "@mui/material/styles";
import { StyledEngineProvider } from "@mui/material/styles";
import theme from "./utils/theme.js";


registerLicense(
  "ORg4AjUWIQA/Gnt2UVhiQlJPd11dXmJWd1p/THNYflR1fV9DaUwxOX1dQl9nSXxSd0RnWn9fcXBdRmU="
);

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme} >
      <StyledEngineProvider injectFirst>
        <ChakraProvider>
          <ContextProvider>
            <App />
          </ContextProvider>
        </ChakraProvider>
      </StyledEngineProvider>
    </ThemeProvider>
  </React.StrictMode >
);
