import React from 'react';
import { Container} from 'react-bootstrap';
import Service from '../Service/Service';
import './Services.css';
const Services = () => {
    const services = [
        {id:1, img: "https://i.ibb.co/W5ZrSTM/1.png", name: "Family Law", description: "Family law is a legal practice area that focuses on issues involving family relationships such as marriage, adoption, divorce, and child custody, among others."}, 
        {id:2, img: "https://i.ibb.co/5sbyd3Z/2.png", name: "Criminal Law", description: "Criminal law is the body of law that relates to crime. It prescribes conduct perceived as threatening, harmful, or otherwise endangering to the property."}, 
        {id:3, img: "https://i.ibb.co/QbGJR3h/3.png", name: "Business Law", description: "business law, also called commercial law or mercantile law, the body of rules, whether by convention, agreement, or national or international legislation."},
    ];
    return (
        <Container>
            <h2 className='title'>What Service <span className='title-color'> We Provide? </span></h2>
            <div className='services-section'>
                
                {
                    services.map(service => <Service
                        key={service.id}
                        service = {service}
                        />)
                }
           </div>
          
        </Container>
    );
};

export default Services;