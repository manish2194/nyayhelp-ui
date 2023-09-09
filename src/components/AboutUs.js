import React from 'react';
import styled from 'styled-components';

const AboutWrapper = styled.div`
  padding: 20px 2%;
  background-color: #f6f9fc;
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
  flex-wrap: wrap; // This ensures that the cards wrap onto the next row when they run out of space.
  gap: 20px; // This provides spacing between the cards.
`;

const Card = styled.div`
  flex: 1 1 calc(20% - 20px); // This allows the card to grow and shrink, occupying 25% of the container width minus the gap.
  padding: 30px;
  background: #fff;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
  border-radius: 15px;
  &:hover {
    transform: translateY(-5px);
  }
  @media (max-width: 1200px) {
    flex: 1 1 calc(33.3333% - 20px); // 3 cards in a row
  }
  @media (max-width: 768px) {
    flex: 1 1 calc(50% - 20px); // 2 cards in a row
  }
  @media (max-width: 480px) {
    flex: 1 1 100%; // 1 card in a row
  }
`;

const CardTitle = styled.h3`
  font-size: 1.6rem;
  margin-bottom: 15px;
  color: #2c3e50;
  border-bottom: 2px solid #eee;
  padding-bottom: 15px;
`;

const CardText = styled.p`
  font-size: 1rem;
  color: #7f8c8d;
  text-align: left;
  line-height: 1.5;
`;

function AboutUs() {
  const cards = [
    {
      title: 'Our Work Culture',
      text: 'Our culture is built on trust, collaboration, and a relentless focus on excellence. We encourage innovation, continuous learning, and adaptability to deliver outstanding results for our clients.'
    },
    {
      title: 'Solving Queries',
      text: 'We leverage state-of-the-art technology combined with our vast experience to provide quick, efficient, and effective solutions to our clients’ legal queries and challenges.'
    },
    {
      title: 'Our Progress Journey',
      text: 'Over the years, we’ve scaled new heights, expanding our services across various domains and geographies, always adhering to the highest standards of professionalism and ethics.'
    },
    {
      title: 'Educating Through Our Site',
      text: 'Knowledge is power. Our website serves as a repository of legal knowledge, offering insights, articles, and resources that educate visitors about the latest in legal affairs.'
    }
  ];

  return (
    <AboutWrapper>
      <Heading>About Us</Heading>
      <CardsContainer>
        {cards.map((card, index) => (
          <Card key={index}>
            <CardTitle>{card.title}</CardTitle>
            <CardText>{card.text}</CardText>
          </Card>
        ))}
      </CardsContainer>
    </AboutWrapper>
  );
}

export default AboutUs;
