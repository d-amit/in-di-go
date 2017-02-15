import React from 'react';
import IntroSection from './IntroSection';
import ServiceSection from './ServiceSection';
import MissionSection from './MissionSection';
import AOS from 'aos/dist/aos';
import $ from 'jquery';

class Home extends React.Component {

  constructor(props, context) {
    super(props, context);
    AOS.init({
      duration: 2400,
      easing: 'ease-in-out-back'
    });
  }

  componentWillReceiveProps (){
    AOS.refresh();
  }

  render() {
    return (
      <div className="icg-home content">

        <div className="fullview-container" onScroll={this.handleScroll}>
          <IntroSection id="homeIntro" className="fullview-item" data-aos="fade-up" />
          <ServiceSection id="homeServices" className="fullview-item" data-aos="fade-up" />
          <MissionSection id="homeMission" className="fullview-item" data-aos="fade-up" />
        </div>

      </div>
    );
  }

}

export default Home;
