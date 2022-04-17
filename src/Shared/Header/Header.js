import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import "./Header.css";
// import {LinkContainer} from 'react-router-bootstrap'

import logo from '../../images/logo.png';
import { LinkContainer } from 'react-router-bootstrap';

const Header = () => {
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
                 
                    <LinkContainer to="/login">
                    <Nav.Link><Button variant="success">Login/Register</Button></Nav.Link>
                    </LinkContainer>
                    
                   <LinkContainer to="/login">
                    <Nav.Link><Button variant="success">Sign Out</Button></Nav.Link>
                    </LinkContainer>
              
                </Nav>
            </Navbar.Collapse>
            </Container>
            </Navbar>
        </div>
    );
};

export default Header;