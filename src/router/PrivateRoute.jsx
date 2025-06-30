import React, { useContext } from 'react'
import AuthContext from '../context/AuthContext/AuthContext';
import { useLocation } from 'react-router-dom';
const PrivateRoute = ({children}) => {
    const  {user,loading}=useContext(AuthContext);
    const location = useLocation.reload();
    console.log(location)

    if(loading){
        return <div className="flex items-center justify-center h-screen">
            <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-500"></div>
        </div>
    }
    if(user){
        return children;
    }
  return <Navigate to="/login" state={location?.pathname} replace={true} />
}

export default PrivateRoute
