import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import SocialLogin from '../Social/SocialLogin';
import './Login.css';
import { Link, useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { toast } from 'react-toastify';

const Login = () => {
    const emailRef = useRef('');

    const location = useLocation()

    const [
        signInWithEmailAndPassword,
        user,
        loading1,
        error1,
      ] = useSignInWithEmailAndPassword(auth);
      const navigate = useNavigate();
      const [sendPasswordResetEmail,sending] = useSendPasswordResetEmail(
        auth
      );

      let from = location.state?.from?.pathname || "/";


      let errorElement;
        if (user) {
            navigate(from, { replace: true });
        }
        
    
      if (error1) {
        errorElement = <p className='text-danger text-center'>Error: {error1.message}</p>
    }
       

        const handleLoginForm = event => {
            event.preventDefault();

            const email = event.target.email.value;
            const password = event.target.password.value;
            
            signInWithEmailAndPassword(email, password);
            
        }

        const getPassword = (event) => {
            const email = emailRef.current.value;
            
            if (email) {
                sendPasswordResetEmail(email);
                toast ('Send In SMS on Your Gmail')
            }
            else{
                toast('First Give your Email');
            }
        }

        const handleGoRegister = () =>{
            navigate('/registration');
        }



    return (
        <div>
            <div className="login-area">
                <div className="login-text text-center mt-4">
                    <h3>Here Login First</h3>
                </div>
                <div className="login-form border p-2 mx-auto w-50">

                


                <Form onSubmit={handleLoginForm}>
                    
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                    <div className="form-outline mb-4">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control ref={emailRef} type="email" name="email" placeholder="Enter email" /></div>
                        
                       
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" name="password" />
                    </Form.Group>
                    {errorElement}

                    <div className="form-remember-handle">
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Remember me" />
                    </Form.Group>
                    <button id='forgot-btn' className='forgot-btn text-primary btn btn-link' onClick={getPassword}>Forgot Password?</button>
                    </div>
                    
                    <Button id='blog-btn' variant="primary" type="submit">
                        Submit
                    </Button>
                    <div className="registerNow text-center">
                        <p>Not a Member? <span className='register-class' onClick={handleGoRegister}>Register here</span></p>
                        <h5>Or Sign Up with: </h5>
                        <SocialLogin></SocialLogin>
                    </div>
                    </Form>
                </div>
            </div>
        </div>
    );
};

export default Login;