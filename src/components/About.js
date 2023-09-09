// About.js
import React from 'react';
import styled from 'styled-components';
import AboutUs from './AboutUs';

const AboutWrapper = styled.div`
  background-color: #fff;
  text-align: center;
`;

const HistorySection = styled.section`
  margin-top: 40px;
`;

const HistoryTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 20px;
`;

const HistoryText = styled.p`
  font-size: 1.2rem;
  max-width: 800px;
  margin: 0 auto;
`;

function About() {
  return (
    <AboutWrapper>
      <AboutUs />
      <HistorySection>
        <HistoryTitle>Our History</HistoryTitle>
        <HistoryText>
          Founded in 1995, our law firm has always been at the forefront of major legal battles
          and has championed the cause of justice for our clients. Our dedication and commitment
          to legal excellence have made us one of the most reputed law firms in the region.
        </HistoryText>
      </HistorySection>
      {/* You can add more sections like Team, Achievements, etc. */}
    </AboutWrapper>
  );
}

export default About;
