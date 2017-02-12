import React from 'react';
import { Section, Button } from '../../components';

class IntroSection extends React.Component {

  render() {
    let sectionClass = `icg-intro ${this.props.className}`;
    let aos = { type: 'fade-up' };
    return (
      <Section className={sectionClass}>
        <h1 className="centered" data-aos="zoom-down">Contact ICG</h1>
        <h2 className="centered" data-aos="zoom-up">Interested in working together?</h2>
        
        <Button aos={aos} className="borderless centered hvr-wobble-vertical" target="#formSection">
          <i className="material-icons">expand_more</i>
        </Button>
      </Section>
    );
  }

}

export default IntroSection;
