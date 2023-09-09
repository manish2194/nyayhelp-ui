// Home.js
import React from 'react';
import Banner from './Banner';
import AboutUs from './AboutUs';
import Service from './Service';
import OurPeople from './OurPeople';

function Home() {
  return (
    <div>
      <Banner />
      <AboutUs />
      <OurPeople />
      {/* <Service /> */}
      
      {/* You can add more components or sections as per your design */}
    </div>
  );
}

export default Home;
