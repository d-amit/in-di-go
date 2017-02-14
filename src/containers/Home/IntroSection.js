import React from 'react';
import { Button, Section } from '../../components';

class IntroSection extends React.Component {

  render() {
    let sectionClass = `icg-introduction ${this.props.className}`;
    let welcomeText = (window.innerWidth <= 800 && window.innerHeight <= 700) ?
      'Indigo Consulting Group' : 'Welcome to Indigo Consulting Group';
    let aos = (window.innerWidth <= 800 && window.innerHeight <= 700) ? { type: '' } : { type: 'fade-up' };

    return (
      <Section id={this.props.id} className={sectionClass}>
        <h1 className="centered" data-aos="zoom-in">{welcomeText}</h1>
        <h2 className="centered" data-aos="fade-in">Enriching Lives Through Positive User Experiences</h2>
        <Button aos={aos} className="centered hvr-sink" target="#homeServices">
          Learn about what we do
        </Button>
      </Section>
    );
  }

}

export default IntroSection;
