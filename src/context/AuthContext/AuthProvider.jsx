import React, { useState } from 'react'
import AuthContext from './AuthContext'

const AuthProvider = ({children}) => {
const [user, setUser] = useState(null);
const [loading, setLoading] = useState(true);

const createUser = (email,password) =>{
    return 
}
    const authInfo = {
        user,
        setUser,
        loading,
        setLoading

       
    }
  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider
