import React, { useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import "./LoginAndRegister.css";
import SocialMediaLogin from './SocialMediaLogin';

const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const [
    createUserWithEmailAndPassword,
    user,
    error
    ] = useCreateUserWithEmailAndPassword(auth);
    if (user) {
        navigate("/checkout");
    }
    let regError;
    if(error){
        regError = <p>{error}</p>
    }
    const handleEmail = (event) => {
        const email = event.target.value;
        setEmail(email);
    }
    const handlePassword = (event) => {
        const password = event.target.value;
        setPassword(password);
    }
    const handleCreateUser = event => {
        event.preventDefault();
        createUserWithEmailAndPassword(email, password);
    }
    return (
          <Container>
            <div  className='form-box'>
               { regError}
            <h2 className='text-center my-4 title'>Please Register</h2>
            <Form onSubmit={handleCreateUser}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Your Full Name</Form.Label>
                <Form.Control type="text" placeholder="Enter Full Name" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control onBlur={handleEmail} type="email" placeholder="Enter Email" />
                <Form.Text className="text-muted">
                We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control onBlur={handlePassword} type="password" placeholder="Password" />
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
        </Container>
    );
};

export default Register;