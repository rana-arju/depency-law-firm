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
                    <p><strong>My Name is Rana Arju.</strong>
                    i'm a student of cox's bazar polytechnic institute in computer department. my goal in 2022 is to become a web developer, for that's why i learned html, css, bootstrap, Javascript, react js and learning more. My final goal is to become a skilled programmer and software engineer. in march 2022, i joined the ICT olympiad as a co-leader of cox's bazar polytechnic  institute.  </p> 
                    <p>i'm very dedicated to my work which is why i do other work including programming for 10 hours every day.</p>
                  
                </div>
                <div className="about-right">
                    <img src={img} alt="" />
                </div>
            </div>
        </Container>
    );
};

export default About;