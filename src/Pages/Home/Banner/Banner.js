import React from 'react';
import { Button, Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import banner from '../../../images/banner.png';
import "./Banner.css";
const Banner = () => {
    return (
        <div className='banner-section'>
                <div className="banner-left">
                    <h1>We Are Here To Fight Against Any Violence with Experience</h1>
                    <LinkContainer to="/about">
                    <Nav.Link><Button variant="primary" size="lg" className='banner-btn'>Know About Me</Button></Nav.Link>
                    </LinkContainer>
                </div>
                <div className="banner-right">
                    <img src={banner} alt="" />
                </div>
        </div>
    );
};

export default Banner;