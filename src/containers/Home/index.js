import React from 'react';
import { Page } from '../../components';
import IntroSection from './IntroSection';
import ServiceSection from './ServiceSection';
import MissionSection from './MissionSection';

const Home = (props) => {

    return (
      <Page className="icg-home content">

        <div className="fullview-container">
          <IntroSection id="homeIntro" className="fullview-item" data-aos="fade-up" />
          <ServiceSection id="homeServices" className="fullview-item" data-aos="fade-up" />
          <MissionSection id="homeMission" className="fullview-item" data-aos="fade-up" goToView={props.goToView}/>
        </div>

      </Page>
    );

}

export default Home;
