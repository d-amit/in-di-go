import React from 'react';
import { Section } from '../../components';

class IntroSection extends React.Component {

  render() {
    let sectionClass = `icg-intro ${this.props.className}`;
    return (
      <Section className={sectionClass}>
        <h1 className="centered" data-aos="zoom-in">About ICG</h1>
        <h2 className="centered" data-aos="fade-in">Something catchy here!</h2>
      </Section>
    );
  }

}

export default IntroSection;
