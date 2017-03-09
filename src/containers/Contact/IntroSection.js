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
    let aos = { type: 'fade-up' };

    return (
      <Section className={sectionClass}>
        <h1 className="centered" data-aos="zoom-down">Contact ICG</h1>
        <h2 className="centered" data-aos="zoom-up">Interested in working together?</h2>

        <Button aos={aos} className="borderless centered hvr-wobble-vertical"
          handleClick={() => { goToNext('#formSection')}} target="#formSection">
          <i className="material-icons">expand_more</i>
        </Button>
      </Section>
    );

}

export default IntroSection;
