import React, { useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import "./LoginAndRegister.css";
import SocialMediaLogin from './SocialMediaLogin';
import { ToastContainer, toast } from 'react-toastify';

const Register = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [displayName, setDisplayName] = useState('');
    const [
    createUserWithEmailAndPassword,
    user,
    loading,
    error
    ] = useCreateUserWithEmailAndPassword(auth,{sendEmailVerification: true});
    const [updateProfile] = useUpdateProfile(auth);
    let regError;
    if(error){
        regError = error.message
    }
    if (user) {
        navigate(from, {replace: true});
    }
    const handleEmail = (event) => {
        const email = event.target.value;
        setEmail(email);
    }
    const handlePassword = (event) => {
        const password = event.target.value;
        setPassword(password);
    }
    const handleName = (event) => {
        const displayName = event.target.value;
        setDisplayName(displayName);
    }
    const handleCreateUser = async(event) => {
        event.preventDefault();
        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName});
        toast('Updated profile');
    }
    return (
          <Container>
            <div  className='form-box'>
               <p style={{color: "red"}}>{regError}</p>
            <h2 className='text-center my-4 title'>Please Register</h2>
            <Form onSubmit={handleCreateUser}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Your Full Name</Form.Label>
                <Form.Control onBlur={handleName} type="text" placeholder="Enter Full Name" required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control onBlur={handleEmail} type="email" placeholder="Enter Email" required />
                <Form.Text className="text-muted">
                We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control onBlur={handlePassword} type="password" placeholder="Password" required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <p>Already have an Account? <Link to="/login">Please Login</Link></p>
            </Form.Group>
            <Form.Group className="d-grid gap-2">
            <Button variant="primary" size="lg" type="submit">
                Register
            </Button>
            </Form.Group>
            </Form>
                <div className="v-line">
                <div></div>
                <p>or</p>
                <div></div>
                </div>
                {<SocialMediaLogin />}
        </div>
        <ToastContainer />
        </Container>
    );
};

export default Register;