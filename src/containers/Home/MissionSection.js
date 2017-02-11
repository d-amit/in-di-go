import React from 'react';
import { Section } from '../../components';

class MissionSection extends React.Component {

  render() {
    let sectionClass = `icg-mission ${this.props.className}`;
    return (
      <Section id={this.props.id} className={sectionClass}>
        <h2 className="centered" data-aos="fade-up">Mission</h2>
      </Section>
    );
  }

}

export default MissionSection;
