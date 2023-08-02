import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom';

export default function PrivateRoute({isLoggedIn,children}) {
    
 if(isLoggedIn) {
    return children;
 } else{
    return <Navigate to="/login" />
 }
}
