import React from 'react';
import { Section } from '../../components';

class IntroSection extends React.Component {

  render() {
    let sectionClass = `icg-introduction ${this.props.className}`;
    return (
      <Section className={sectionClass}>
        <h1 className="centered" data-aos="zoom-in">Welcome to Indigo Consulting Group</h1>
        <h2 className="centered" data-aos="fade-up">Enriching Lives Through Positive User Experiences</h2>
      </Section>
    );
  }

}

export default IntroSection;
