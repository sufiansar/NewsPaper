import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import React, { createContext, useEffect, useState } from "react";
import auth from "../../firebase.init";

export const Authcontext = createContext();

const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const logout = () => {
    setLoading(true);
    return signOut(auth);
  };
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const logIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubcribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => {
      unsubcribe();
    };
  }, []);

  const profileUpdate = (updateData) => {
    return updateProfile(auth.currentUser, updateData);
  };
  const info = {
    user,
    setUser,
    createUser,
    logout,
    logIn,
    setLoading,
    loading,
    profileUpdate,
  };
  return <Authcontext.Provider value={info}>{children}</Authcontext.Provider>;
};

export default AuthProvider;
