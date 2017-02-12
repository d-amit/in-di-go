import React from 'react';
import { Section, Button } from '../../components';
import { Link } from 'react-router';

class MissionSection extends React.Component {

  render() {
    let sectionClass = `icg-mission ${this.props.className}`;
    let aosButton = { type: 'fade-up' };
    return (
      <Section id={this.props.id} className={sectionClass}>
        <h2 className="centered" data-aos="fade-down">Let's Talk About Your Project</h2>
        <Button aos={aosButton} href="/contactus" className="centered hvr-grow">Start a Conversation</Button>
      </Section>
    );
  }

}

export default MissionSection;
