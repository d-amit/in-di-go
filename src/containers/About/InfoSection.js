import React from 'react';
import { Section } from '../../components';

class InfoSection extends React.Component {

  render() {
    let sectionClass = `icg-info ${this.props.className}`;
    return (
      <Section className={sectionClass}>
        <h2 className="centered" data-aos="zoom-in">Company info here</h2>
      </Section>
    );
  }

}

export default InfoSection;
