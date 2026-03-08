import React from 'react';
import Stats from './Stats';
import Education from './Education';
import Pricing from './Pricing';
import Awards from './Awards';
import Hero from './Hero';
import OpenAccount from '../OpenAccount';
function HomePage() {
  return (
    <>
      <Hero />
      <Awards />
      <Stats />
      <Pricing />
      <Education />
      <OpenAccount />
    </>
  );
}

export default HomePage;