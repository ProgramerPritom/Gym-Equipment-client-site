import React from 'react';
import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";

const SocialLogin = () => {
    return (
        <div>
            <div className="icon-section mx-auto mt-3">
                        <p><FaGoogle></FaGoogle></p>
                        <p><FaGithub></FaGithub></p>
                        <p><FaFacebookF></FaFacebookF></p>
                        </div>
            
        </div>
    );
};

export default SocialLogin;