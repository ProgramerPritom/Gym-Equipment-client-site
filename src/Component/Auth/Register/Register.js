import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../../firebase.init';

const Register = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth,{sendEmailVerification : true});
      const navigate = useNavigate();


    const handleRegisterForm = event => {
        event.preventDefault();

        const userName = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        createUserWithEmailAndPassword(email,password);
        toast("Please Check Your Email and Verify it");
        navigate('/login');
        
    }


    return (
        <div>
            <h2 className='text-center mt-3'>Here Your Registration</h2>
            <div className="form-area">
            <Form onSubmit={handleRegisterForm} className='w-50 mx-auto'>
            <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>Enter Name</Form.Label>
            <Form.Control type="text" name="name" placeholder="Enter Full Name" required/>
            
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" name="email" placeholder="Enter email" required/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" name="password" placeholder="Password" required/>
            </Form.Group>
            
            <Button id='blog-btn'
            variant="primary" 
            type="submit">
                Submit
            </Button>
            <p className='create-register-text text-center'>Already have account? <Link to='/login' className='text-danger'>Login now</Link></p>
        </Form>
        
            </div>
        </div>
    );
};

export default Register;