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
      duration: 1200,
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
          <IntroSection className="fullview-item" data-aos="fade-up" />
          <ServiceSection className="fullview-item" data-aos="fade-up" />
          <MissionSection className="fullview-item" data-aos="fade-up" />
        </div>

      </div>
    );
  }

}

export default Home;
