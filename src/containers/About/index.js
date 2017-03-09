import React from 'react';
import { Page, Section } from '../../components';
import IntroSection from './IntroSection';
import InfoSection from './InfoSection';
import AOS from 'aos/dist/aos';

const About = (props) => {

    return (
      <Page className="icg-about content">

        <div className="fullview-container">
          <IntroSection className="fullview-item" data-aos="fade-up" />
          <InfoSection className="fullview-item" data-aos="fade-up" />
        </div>

      </Page>
    );

}

export default About;
