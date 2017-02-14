import React from 'react';
import { Section } from '../../components';
import IntroSection from './IntroSection';
import InfoSection from './InfoSection';
import AOS from 'aos/dist/aos';

class About extends React.Component {

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
      <div className="icg-about content">

        <div className="fullview-container" onScroll={this.handleScroll}>
          <IntroSection className="fullview-item" data-aos="fade-up" />
          <InfoSection className="fullview-item" data-aos="fade-up" />
        </div>

      </div>
    );
  }

}

export default About;
