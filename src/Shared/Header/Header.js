import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import "./Header.css";
import {signOut } from 'firebase/auth';
import logo from '../../images/logo.png';
import { LinkContainer } from 'react-router-bootstrap';
import auth from '../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';


const Header = () => {
    const [user] = useAuthState(auth);
    const handleSignOut = () => {
        signOut(auth);
    }
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
            <Container>
            <LinkContainer to='/'>
                <Navbar.Brand href="#home"><img className='logo' src={logo} alt="" /></Navbar.Brand>
            </LinkContainer>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                <LinkContainer to="/">
                    <Nav.Link>Home</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/about">
                    <Nav.Link>About</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/blog">
                    <Nav.Link>Blog</Nav.Link>
                </LinkContainer>
                </Nav>
                <Nav>
                 
                { 
                user?.uid ?
                <LinkContainer to="/">
                <Nav.Link><Button variant="success" onClick={handleSignOut}>Sign Out</Button></Nav.Link>
                </LinkContainer>
                :
                  <LinkContainer to="/login">
                <Nav.Link><Button variant="success">Login/Register</Button></Nav.Link>
                </LinkContainer>
                
                }
              
                </Nav>
            </Navbar.Collapse>
            </Container>
            </Navbar>
        </div>
    );
};

export default Header;