import React, { useState, useEffect } from "react";
import styled from "styled-components";

const SlidesContainer = styled.div`
  display: flex;
  transition: all 0.3s ease;
  overflow: hidden; // Prevents slides from showing up outside the viewport;
  height: 30vh;
  margin-top: 10px;
  @media (max-width: 768px) {
    height: 25vh;
  }
`;

const Slide = styled.div`
  min-width: 100%;
  // height: 500px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  opacity: ${(props) => (props.active ? "1" : "0.5")};

  @media (max-width: 768px) {
    height: 300px;
  }
`;

const BannerText = styled.h1`
  color: white;
  margin-bottom: 10px;
  font-size: 2.2rem;
  text-shadow: 3px 3px 10px rgba(0, 0, 0, 0.7);
  background-color: rgba(0, 0, 0, 0.5);
  padding: 10px 20px;
  border-radius: 8px;

  @media (max-width: 768px) {
    font-size: 1.5rem;
    padding: 8px 16px;
  }
`;

const BannerSubText = styled.h2`
  color: white;
  font-size: 1.5rem;
  text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.7);
  background-color: rgba(0, 0, 0, 0.5);
  padding: 8px 16px;
  border-radius: 8px;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const SlidesWrapper = styled.div`
  display: flex;
  transition: all 0.5s ease;
  width: calc(100% * 3); /* for 3 slides */
`;

const Carousel = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const slides = [
    {
      id: "first",
      imageUrl: "https://source.unsplash.com/random/1600x900?law",
      text: "In Law We Trust",
      subtext: "Empower Yourself. Learn, Discuss, Seek Guidance.",
    },
    {
      id: "second",
      imageUrl: "https://source.unsplash.com/random/1600x900?justice", // Using random endpoint with a topic
      text: "Justice Served with Integrity",
      subtext: "Experience the best legal support.",
    },
    {
      id: "third",
      imageUrl: "https://source.unsplash.com/random/1600x900?rights",
      text: "Your Legal Rights, Our Priority",
      subtext: "Tailored solutions for your unique needs.",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000); // 3 seconds

    return () => clearInterval(interval);
  }, []);

  const computedShift = `-${activeSlide * 100}%`;

  return (
    <SlidesContainer>
      <SlidesWrapper style={{ transform: `translateX(${computedShift})` }}>
        {slides.map((slide, index) => (
          <Slide
            key={slide.id}
            style={{ backgroundImage: `url(${slide.imageUrl})` }}
          >
            <BannerText>{slide.text}</BannerText>
            <BannerSubText>{slide.subtext}</BannerSubText>
          </Slide>
        ))}
      </SlidesWrapper>
    </SlidesContainer>
  );
};

export default Carousel;
