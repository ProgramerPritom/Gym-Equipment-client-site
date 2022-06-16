import React from 'react';
import { Button, Form } from 'react-bootstrap';
import './Login.css';
import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";

const Login = () => {
    return (
        <div>
            <div className="login-area">
                <div className="login-text text-center mt-4">
                    <h3>Here Login First</h3>
                </div>
                <div className="login-form border p-2 mx-auto w-50">

                


                <Form>
                    
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                    <div className="form-outline mb-4">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" /></div>
                        
                       
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <div className="form-remember-handle">
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Remember me" />
                    </Form.Group>
                    <p><button id='forgot-btn' className='forgot-btn text-primary btn btn-link'>Forgot Password?</button></p>
                    </div>
                    <Button id='blog-btn' variant="primary" type="submit">
                        Submit
                    </Button>
                    <div className="registerNow text-center">
                        <p>Not a Member? <span className='register-class'>Register here</span></p>
                        <h5>Or Sign Up with: </h5>
                        <div className="icon-section mx-auto mt-3">
                        <p><FaGoogle></FaGoogle></p>
                        <p><FaGithub></FaGithub></p>
                        <p><FaFacebookF></FaFacebookF></p>
                        </div>
                    </div>
                    </Form>
                </div>
            </div>
        </div>
    );
};

export default Login;