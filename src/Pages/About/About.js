import React from 'react';
import { Container } from 'react-bootstrap';
import './About.css';
import img from '../../images/rana arju 2.png';
const About = () => {
    return (
        <Container>
            <h2 className='title'>About me</h2>
            <div className="about-container">
                <div className="about-left">
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates doloremque expedita consequatur officia, eaque dolorem pariatur optio eum incidunt dignissimos.</p>
                </div>
                <div className="about-left">
                    <img src={img} alt="" />
                </div>
            </div>
        </Container>
    );
};

export default About;