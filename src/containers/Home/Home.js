import React from 'react';
import { Icon } from 'react-mdl';
import IntroView from './IntroView';
import MissionView from './MissionView';
import ServiceView from './ServiceView';

const getScrollToIcon = (targetId, containerClass = '') => {
  let scrollIntoView = (targetId) => {
    let el = document.getElementById(targetId);
    el.scrollIntoView(); // use native scroll
  };

  return (
    <div className={`centered icg-fade-in ${containerClass}`}>
        <Icon className="icg-bounce" onClick={() => scrollIntoView(targetId)} to={targetId} name="keyboard_arrow_down"
          style={{ color: '#fff', fontSize: 64, cursor: 'pointer' }} />
    </div>
  );
};

const Home = () => {

  return (
    <div className="icg-home-container">

      <IntroView id="homeIntro" >
        {getScrollToIcon('homeServices', 'section-bottom')}
      </IntroView>

      <ServiceView id="homeServices" >
        {getScrollToIcon('homeMission')}
      </ServiceView>

      <MissionView id="homeMission"/>
    </div>
  )

};

export default Home;
