import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { Navigate, useLocation } from 'react-router-dom';
import Spinner from '../Loading/Spinner';

const ProtectRoute = ({children}) => {
    const [user,loading] = useAuthState(auth);
    
    const location = useLocation();
    if(loading){
        return <Spinner></Spinner>
    }
    if (!user) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }
    return children;
};

export default ProtectRoute;