import React, { createContext, useContext, useState } from "react";

const StateContext = createContext();


export const ContextProvider = ({ children }) => {
  const [isSidebarCollapsed, setSidebarCollapsed] = useState(false);
  
  return (
    <StateContext.Provider
      value={{
        isSidebarCollapsed,
        setSidebarCollapsed,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
