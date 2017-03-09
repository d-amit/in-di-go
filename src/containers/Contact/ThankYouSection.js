import React from 'react';
import { Section } from '../../components';

const ThankYouSection = ({ id, className }) => {

    let sectionClass = `thankyou ${className}`;
    let aos = {
      type : "fade-up",
      duration: 1500
    };

    return (
      <Section id={id} aos={aos} className={sectionClass}>
        <h2 className="centered" data-aos="zoom-in">Thank You!</h2>
        <p className="centered" data-aos="fade-in">
          Your message has been sent and ICG will get back to you as soon as possible.
        </p>
      </Section>
    );

}

export default ThankYouSection;
