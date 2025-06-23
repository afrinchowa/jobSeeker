import React, { useContext } from 'react'
import AuthContext from '../../context/AuthContext/AuthContext'

const SocialLogin = () => {
    const {signInWithGoogle} = useContext(AuthContext)
const handleGoogleSignIn = () => {
  signInWithGoogle()
    .then(result => {
      const user = result.user;
      console.log('Google Sign In successful:', user);
    })
    .catch(error => {
      console.error('Error during Google Sign In:', error.message);
    });
}
  return (
    <div 
    className="flex flex-col items-center justify-center m-4">
           <div className="divider">OR</div>
      <button className="btn btn-outline" onClick={handleGoogleSignIn}>Login with Google</button>

    </div>
  )
}

export default SocialLogin
