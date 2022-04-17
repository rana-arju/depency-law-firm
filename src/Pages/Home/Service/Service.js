import React from 'react';
import { Button, Card} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import "./Service.css";

const Service = ({service}) => {
    const {name, description, img} = service;
    return (
        <div>
    
        <Card className="card-style">
            <Card.Img variant="top" src={img} className="card-img" />
            <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>
                {description}
            </Card.Text>
            </Card.Body>
            <Card.Footer>
                <LinkContainer to="/checkout">
            <Button variant="primary" size="lg">
                Choose For You
            </Button> 
            </LinkContainer>
         </Card.Footer>
        </Card>
    
        </div>
    );
};

export default Service;