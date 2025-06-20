/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { use, useState } from 'react'
import AuthContext from './AuthContext'
import { createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
const AuthProvider = ({children}) => {
const [user, setUser] = useState(null);
const [loading, setLoading] = useState(true);

const createUser = (email,password) =>{
  setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password); 
}
const signInUser = (email,password) =>{
  setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
}
useEffect(() =>{ 
const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      console.log('state changed', currentUser);
      setLoading(false);
    
    });
    return () => unsubscribe();
},[])
    const authInfo = {
        user,      
        loading,
        createUser,
        signInUser,

       
    }
  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider