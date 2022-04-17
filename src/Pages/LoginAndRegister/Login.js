import React from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import { BsGithub } from 'react-icons/bs';
import "./LoginAndRegister.css";
const Login = () => {
    return (
        <Container>
            <div  className='form-box'>
            <h2 className='text-center my-4 title'>Please Login</h2>
            <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
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
              <div className="social-media">
                <Button variant="primary" size="lg" ><span className='icon'><FcGoogle /></span>Github</Button>
                <Button variant="primary" size="lg" ><span className='icon'><BsGithub /></span>Github</Button>
            </div>
        </div>
        </Container>
    );
};

export default Login;