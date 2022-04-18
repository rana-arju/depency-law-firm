import React, { useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
 import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./LoginAndRegister.css";
import { useSignInWithEmailAndPassword, useSendPasswordResetEmail} from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import SocialMediaLogin from './SocialMediaLogin';

const Login = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [sendPasswordResetEmail, sending, resetError] = useSendPasswordResetEmail(auth);
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error
        ] = useSignInWithEmailAndPassword(auth);
    const handleEmailBlur = event => {
        const email = event.target.value;
        setEmail(email);
    }
    const handlePasswordBlur = event => {
        const password = event.target.value;
        setPassword(password);
    }
    let loginError;
    if(error || resetError){
        loginError = <p style={{color: "red"}}>{error?.message} {resetError?.message}</p>
    }
    if (user) {
        navigate(from, {replace: true});
    }
    const handleLoginUser = event => {
        event.preventDefault();
        signInWithEmailAndPassword(email, password);
    }
    const resetPassword = async() => {
       
        if (email) {
        await sendPasswordResetEmail(email);
          toast('Check Your email');
        }else{
            toast("Please Enter Your Email.")
        }
       
    }
    return (
        <Container>
            <div  className='form-box'>
            <h2 className='text-center my-4 title'>Please Login</h2>
             {loginError}
            <Form onSubmit={handleLoginUser}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control onBlur={handleEmailBlur} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Enter email" required />
                <Form.Text className="text-muted">
                We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control onBlur={handlePasswordBlur} type="password" placeholder="Password" required />
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
                <p>Forgot Password? <Button variant='link' onClick={resetPassword}>Please Reset</Button></p>
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

export default Login;