// // const services = [
// //   { imageUrl: 'https://via.placeholder.com/150', title: 'Corporate Law' },
// //   { imageUrl: 'https://via.placeholder.com/150', title: 'Criminal Defense' },
// //   { imageUrl: 'https://via.placeholder.com/150', title: 'Property Law' },
// //   { imageUrl: 'https://via.placeholder.com/150', title: 'Environmental Law' },
// //   { imageUrl: 'https://via.placeholder.com/150', title: 'Family Law' },
// //   { imageUrl: 'https://via.placeholder.com/150', title: 'Civil Rights Law' },
// //   { imageUrl: 'https://via.placeholder.com/150', title: 'Digital Law' },
// //   { imageUrl: 'https://via.placeholder.com/150', title: 'International Law' }
// // ];


import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const ServicesContainer = styled.div`
  width: 100%;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ServiceSlide = styled.div`
  display: flex;
  transition: all 0.3s ease;
  transform: translateX(-${props => props.activeSlide * 100}%);
`;

const ServiceCard = styled.div`
  min-width: 200px; /* adjust based on your preference */
  margin: 0 15px; 
  background: white;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); 
  border-radius: 8px;
  overflow: hidden;
  text-align: center;
`;

const ServiceImage = styled.img`
  width: 100%;
  height: auto;
`;

const ServiceText = styled.h3`
  margin: 15px 0;
  color: #333;
  font-size: 1rem;
`;

const ConsultButton = styled.button`
  margin: 10px 0 20px;
  padding: 10px 15px;
  background-color: #007BFF;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #0056b3;
  }
`;

const ServiceCarousel = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const services = [
    { imageUrl: 'https://via.placeholder.com/150', title: 'Corporate Law' },
    { imageUrl: 'https://via.placeholder.com/150', title: 'Criminal Defense' },
    { imageUrl: 'https://via.placeholder.com/150', title: 'Property Law' },
    { imageUrl: 'https://via.placeholder.com/150', title: 'Environmental Law' },
    { imageUrl: 'https://via.placeholder.com/150', title: 'Family Law' },
    { imageUrl: 'https://via.placeholder.com/150', title: 'Civil Rights Law' },
    { imageUrl: 'https://via.placeholder.com/150', title: 'Digital Law' },
    { imageUrl: 'https://via.placeholder.com/150', title: 'International Law' }
  ];
  

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setActiveSlide((prevSlide) => (prevSlide + 1) % services.length);
  //   }, 3000);

  //   return () => clearInterval(interval);
  // }, [services]);

  return (
    <ServicesContainer>
      <ServiceSlide activeSlide={activeSlide}>
        {services.map((service, index) => (
          <ServiceCard key={index}>
            <ServiceImage src={service.imageUrl} alt={service.text} />
            <ServiceText>{service.text}</ServiceText>
            <ConsultButton>Consult Now</ConsultButton>
          </ServiceCard>
        ))}
      </ServiceSlide>
    </ServicesContainer>
  );
};

export default ServiceCarousel;

