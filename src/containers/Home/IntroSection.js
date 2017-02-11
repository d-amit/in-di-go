import React from 'react';
import { Button, Section } from '../../components';

class IntroSection extends React.Component {

  render() {
    let sectionClass = `icg-introduction ${this.props.className}`;
    let aos = { type: 'fade-up' };
    return (
      <Section id={this.props.id} className={sectionClass}>
        <h1 className="centered" data-aos="zoom-in">Welcome to Indigo Consulting Group</h1>
        <h2 className="centered" data-aos="fade-in">Enriching Lives Through Positive User Experiences</h2>
        <Button aos={aos} className="centered hvr-sink" target="#homeServices">
          Learn about what we do
        </Button>
      </Section>
    );
  }

}

export default IntroSection;
