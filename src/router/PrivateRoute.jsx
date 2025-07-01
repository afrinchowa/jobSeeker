import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom'; // ✅ Add Navigate here
import AuthContext from '../context/AuthContext/AuthContext';

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation(); // ✅ FIX: removed `.reload()`

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (user) {
    return children;
  }

  return <Navigate to="/login" state={{ from: location }} replace />; // ✅ Pass location properly
};

export default PrivateRoute;
