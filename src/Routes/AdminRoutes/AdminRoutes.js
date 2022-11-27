import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import Spinner from '../../Components/Spinner/Spinner';
import { AuthProvider } from '../../Contexts/AuthContext';
import useAdmin from '../../Hooks/UseAdmin/UseAdmin';

const AdminRoutes = ({children}) => {
    const location = useLocation()
    const { user, loading } = useContext(AuthProvider);
    const [isAdmin, isAdminLoading] = useAdmin(user?.email)
    if (loading || isAdminLoading) {
        return <Spinner></Spinner>
    }
    if (user && isAdmin) {
        return children;
    }
    return <Navigate to='/login' state={{ from: location }} replace></Navigate>
};

export default AdminRoutes;