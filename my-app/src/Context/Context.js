import React, { createContext, useContext, useState, useEffect } from "react";
import { auth } from "../Firebase/Firebase.utils";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setcurrentUser] = useState(null);

  const googleSignIn = () => {
    const provider = GoogleAuthProvider(auth);
    return signInWithPopup(auth, provider);
  };

  return (
    <AuthContext.Provider value={{ currentUser, googleSignIn }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => {
  return useContext(AuthContext);
};
