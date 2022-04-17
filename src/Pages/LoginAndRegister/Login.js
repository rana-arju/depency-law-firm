import React, { useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

import "./LoginAndRegister.css";
import { useSignInWithEmailAndPassword, useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import SocialMediaLogin from './SocialMediaLogin';

const Login = () => {
    const navigate = useNavigate();
    const [signInWithGoogle, googleUser, googleError] = useSignInWithGoogle(auth);
    const [signInWithGithub, githubUser, githubError] = useSignInWithGithub(auth);
    const handleGoogleLogin = () => {
        signInWithGoogle();
    }
    const handleGithubLogin = () => {
        signInWithGithub();
    }
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [
        signInWithEmailAndPassword,
        user,
        error,
        ] = useSignInWithEmailAndPassword(auth);
    const handleEmailBlur = event => {
        const email = event.target.value;
        setEmail(email);
    }
    const handlePasswordBlur = event => {
        const password = event.target.value;
        setPassword(password);
    }
    if (user || googleUser || githubUser) {
        navigate("/checkout");
    }
    let loginError;
    if(error || googleError || githubError){
        loginError = <p>{error} {googleError} {githubError}</p>
    }
    const handleLoginUser = event => {
        event.preventDefault();
        signInWithEmailAndPassword(email, password);
    }
    return (
        <Container>
            <div  className='form-box'>
                {loginError }
            <h2 className='text-center my-4 title'>Please Login</h2>
            <Form onSubmit={handleLoginUser}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control onBlur={handleEmailBlur} type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control onBlur={handlePasswordBlur} type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <p>New of Defency? <Link to="/register">Please Register</Link></p>
            </Form.Group>
            <Form.Group className="d-grid gap-2 mb-3">
            <Button variant="primary" size="lg" type="submit">
                Login
            </Button>
            </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <p>Forgot Password? <a href="/">Please Reset</a></p>
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

export default Login;