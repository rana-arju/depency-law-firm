import React from 'react';
import { Card } from 'react-bootstrap';
import {BsFacebook, BsTwitter, BsLinkedin} from 'react-icons/bs';
import './Team.css';
const Team = ({member}) => {
    const {name, position, img} = member;
    return (
    <div>
        <Card className="team-style">
            <Card.Img variant="top" src={img} className="team-img" />
            <Card.Header className="team-icon"><BsFacebook /><BsTwitter /><BsLinkedin /> </Card.Header>
            <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>
                {position}
            </Card.Text>
            </Card.Body>
            
        </Card>
    
        </div>
        
    );
};

export default Team;