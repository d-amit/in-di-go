import React from 'react';
import { Section } from '../../components';

class FormSection extends React.Component {

  render() {
    let sectionClass = `icg-form ${this.props.className}`;
    return (
      <Section className={sectionClass}>
        <h2 className="centered" data-aos="zoom-in">Contact form here</h2>
      </Section>
    );
  }

}

export default FormSection;
