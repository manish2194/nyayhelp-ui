import React from 'react';
import styled from 'styled-components';

const PeopleWrapper = styled.div`
  padding: 20px 2%;
  background-color: #fff;
  text-align: center;
  @media (max-width: 768px) {
    padding: 40px 5%;
  }
`;

const Heading = styled.h2`
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 40px;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 1.5px;
`;

const CardsContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap; 
  gap: 20px; 
`;

const Card = styled.div`
  flex: 1 1 calc(20% - 20px);
  padding: 30px;
  background: #fff;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
  border-radius: 15px;
  &:hover {
    transform: translateY(-5px);
  }
  @media (max-width: 1200px) {
    flex: 1 1 calc(33.3333% - 20px);
  }
  @media (max-width: 768px) {
    flex: 1 1 calc(50% - 20px);
  }
  @media (max-width: 480px) {
    flex: 1 1 100%;
  }
`;

const PersonImage = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  margin-bottom: 15px;
`;

const PersonName = styled.h3`
  font-size: 1.6rem;
  margin-bottom: 10px;
  color: #2c3e50;
`;

const PersonDetails = styled.p`
  font-size: 1rem;
  color: #7f8c8d;
  text-align: left;
  line-height: 1.5;
`;

function OurPeople() {
  const people = [
    {
      name: 'John Doe',
      image: 'https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?w=2000&t=st=1691507236~exp=1691507836~hmac=84e37b85e402a2051d7c564065fd98ea9304063fc8674aa2cef8d15fbed53671', // sample image placeholder
      details: 'Leading attorney with over 20 years of experience.'
    },
    {
      name: 'Jane Smith',
      image: 'https://img.freepik.com/free-photo/portrait-beautiful-young-woman-standing-grey-wall_231208-10760.jpg?w=2000&t=st=1691507312~exp=1691507912~hmac=354fd9d9ed50918bb08e4da17dddec20ffe0798f9e83082fbaceadbada1ca91a',
      details: 'Specializes in corporate law and civil disputes.'
    },
    {
      name: 'Richard Roe',
      image: 'https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?w=2000&t=st=1691507236~exp=1691507836~hmac=84e37b85e402a2051d7c564065fd98ea9304063fc8674aa2cef8d15fbed53671',
      details: 'Well versed with international laws and regulations.'
    },
    {
      name: 'Emily Adams',
      image: 'https://img.freepik.com/free-photo/lady-with-brown-eyes-is-smiling-red-wall_197531-16958.jpg?w=2000&t=st=1691507292~exp=1691507892~hmac=b6912ab1dc7dcbbca37c2c2ba7bc158555489e8c2ffc1a9263230ef7310ef1ad',
      details: 'Top-notch consultant for financial legalities.'
    }
  ];

  return (
    <PeopleWrapper>
      <Heading>Our People</Heading>
      <CardsContainer>
        {people.map((person, index) => (
          <Card key={index}>
            <PersonImage src={person.image} alt={person.name} />
            <PersonName>{person.name}</PersonName>
            <PersonDetails>{person.details}</PersonDetails>
          </Card>
        ))}
      </CardsContainer>
    </PeopleWrapper>
  );
}

export default OurPeople;
