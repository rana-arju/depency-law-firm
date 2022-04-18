import React from 'react';
import { Container } from 'react-bootstrap';
import Team from '../Team/Team';
import './Teams.css';

const Teams = () => {
    const members = [
        {id:1, name: "Charlie Solomon", position: "Senior Attorney", img: "https://i.ibb.co/X4mCqrb/team3.jpg"},
        {id:2, name: "Audrey Mackay", position: "Family Lawyer", img: "https://i.ibb.co/1Gxzk7x/team2.jpg"},
        {id:3, name: "Armaan Cullen", position: "Criminal Lawyer", img: "https://i.ibb.co/JnN89kY/team1.jpg"},

    ]
    return (
        <Container>
            <p className='sub-title'><span className='title-color '>QUALIFIED ATTORNEYS</span></p>
            <h2 className='title-team'>Meet Our Experts <span className='title-color'> Attorney  </span></h2>
            <div className="team-grid">
            {
                members.map(member => <Team
                    key = {member.id}
                    member = {member}
                    />)
            }
            </div>
        </Container>
    );
};

export default Teams;