import React from 'react';
import "./Footer.css";
const Footer = () => {
    const day = new Date().getDate();
    const month = new Date().getMonth()+1;
    const year = new Date().getFullYear();
    return (
        <div className='footer-section'>
            <p>All Right Reserved &copy; Rana Arju ❤ </p>
            <p>Today: <small>{day}/{month}/{year}</small></p>
        </div>
    );
};

export default Footer;