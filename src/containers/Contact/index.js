import React from 'react';
import { Page, Section } from '../../components';
import IntroSection from './IntroSection';
import FormSection from './FormSection';
import AOS from 'aos/dist/aos';

const Contact = () => {

    return (
      <Page className="icg-contact content">

        <div className="fullview-container">
          <IntroSection className="fullview-item" data-aos="fade-up" />
          <FormSection id="formSection" className="fullview-item" data-aos="fade-up" />
        </div>

      </Page>
    );

}

export default Contact;
