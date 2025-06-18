/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import AuthContext from './AuthContext'
import { createUserWithEmailAndPassword } from "firebase/auth";
const AuthProvider = ({children}) => {
const [user, setUser] = useState(null);
const [loading, setLoading] = useState(true);

const createUser = (auth,email,password) =>{
  setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password); 
}
    const authInfo = {
        user,
        setUser,
        loading,
        setLoading,
        createUser

       
    }
  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider