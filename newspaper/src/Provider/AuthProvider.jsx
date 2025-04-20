import React, { createContext } from "react";

export const Authcontext = createContext();

const AuthProvider = ({ children }) => {
  const info = {
    name: "sufian",
  };
  return <Authcontext.Provider value={info}>{children}</Authcontext.Provider>;
};

export default AuthProvider;
