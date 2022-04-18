import React from 'react';
import { Button, Container, Form } from 'react-bootstrap';

const Checkout = () => {
    const handleProcess =(event) => {
        event.preventDefault();
    }
    return (
              <Container>
            <div  className='form-box'>

            <h2 className='text-center my-4 title'>Please Filup the process</h2>
            <Form onSubmit={handleProcess}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Your Full Name</Form.Label>
                <Form.Control type="text" placeholder="Enter Full Name" required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Address</Form.Label>
                <Form.Control type="text" placeholder="Address" required />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Shortly Descrip Your Problem</Form.Label>
                <Form.Control  as="textarea" placeholder="Tell Me Your Problem..." rows={5} required />
            </Form.Group>
            <Form.Group className="d-grid gap-2">
            <Button variant="primary" size="lg" type="submit">
                Send Request
            </Button>
            </Form.Group>
            </Form>
            
        </div>
        </Container>
    );
};

export default Checkout;