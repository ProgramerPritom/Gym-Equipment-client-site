import React from 'react';
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import auth from '../../../firebase.init';
import {  useNavigate, useLocation } from 'react-router-dom';

const SocialLogin = () => {
    const location = useLocation()
    const navigate = useNavigate()
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [signInWithGithub, user1, loading1, error1] = useSignInWithGithub(auth);

    let from = location.state?.from?.pathname || "/home";

    if (user) {
        navigate(from, { replace: true });
    }
    let errorElement;
    if(error || error1){
        errorElement = <p className='text-danger text-center'>Error : {error1.message || error.message}</p>
    }
    const handleGoogleAuth = () =>{
        signInWithGoogle();
        
        
    }

    const handleGithubAuth = () =>{
        signInWithGithub();
    }

    return (
        <div>
            {errorElement}
            <div className="icon-section mx-auto mt-3">
                    
                        <p onClick={handleGoogleAuth}><FaGoogle></FaGoogle></p>
                        <p onClick={handleGithubAuth}><FaGithub></FaGithub></p>
                        <p><FaFacebookF></FaFacebookF></p>
                        </div>
            
        </div>
    );
};

export default SocialLogin;