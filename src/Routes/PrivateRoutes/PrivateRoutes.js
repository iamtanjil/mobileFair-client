import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import Spinner from '../../Components/Spinner/Spinner';
import { AuthProvider } from '../../Contexts/AuthContext';

const PrivateRoute = ({children}) => {
    const location = useLocation();
    
    const {user, loading} = useContext(AuthProvider);
    if(loading){
        return <Spinner></Spinner>
    }
    if(user){
        return children;
    }
    return <Navigate to='/login' state={{from: location}} replace></Navigate>
};

export default PrivateRoute;