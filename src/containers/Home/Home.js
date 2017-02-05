import React from 'react';
import IntroView from './IntroView';
import ServiceView from './ServiceView';
import MissionView from './MissionView.js';

const Home = () => (
  <div className="icg-home-container">
    <IntroView />
    <ServiceView />
    <MissionView />
  </div>
);

export default Home;
