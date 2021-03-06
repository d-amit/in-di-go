import React from 'react';
import { Section, Button } from '../../components';
import $ from 'jquery';

const goToNext = (target) => {

  if (target) {
    $('html, body').animate({
        scrollTop: $(target).offset().top
    },'500', 'swing');
  }

}

const IntroSection = ({ className }) => {

    let sectionClass = `icg-intro ${className}`;
    let aos = {
      type: 'fade-up',
      duration: 1500
    };

    return (
      <Section className={sectionClass}>
        <h1 className="centered" data-aos="zoom-in">About ICG</h1>
        <div className="intro-container centered">
          <p data-aos="fade-in">Founded in 2015 with the vision of providing innovative, intuitive, and efficient solutions to our clients.</p>
          <p data-aos="fade-in">Indigo Consulting Group goal is to <span style={{'fontStyle': 'italic'}}>enrich lives through positive user experiences</span>​.</p>
          <p data-aos="fade-in">We have successfully delivered full system lifecycle implementations for both small and large projects.</p>
        </div>
        <Button aos={aos} className="centered hvr-sink"
          handleClick={() => { goToNext('#aboutInfo')}} target="#aboutInfo">
          Learn more
        </Button>
      </Section>
    );

}

export default IntroSection;
