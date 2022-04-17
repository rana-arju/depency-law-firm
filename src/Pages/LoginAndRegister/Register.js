import React from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import { BsGithub } from 'react-icons/bs';
import "./LoginAndRegister.css";

const Register = () => {
    return (
          <Container>
            <div  className='form-box'>
            <h2 className='text-center my-4 title'>Please Register</h2>
            <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Your Full Name</Form.Label>
                <Form.Control type="text" placeholder="Enter Full Name" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter Email" />
                <Form.Text className="text-muted">
                We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
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
              <div className="social-media">
                <Button variant="primary" size="lg" ><span className='icon'><FcGoogle /></span>Github</Button>
                <Button variant="primary" size="lg" ><span className='icon'><BsGithub /></span>Github</Button>
            </div>
        </div>
        </Container>
    );
};

export default Register;