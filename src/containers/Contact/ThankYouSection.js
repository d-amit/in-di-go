import React from 'react';
import { Section } from '../../components';

class ThankYouSection extends React.Component {

  render() {
    let sectionClass = `thankyou ${this.props.className}`;
    let aos = {
      type : "fade-up",
      duration: 1500
    };

    return (
      <Section id={this.props.id} aos={aos} className={sectionClass}>
        <h2 className="centered" data-aos="zoom-in">Thank You!</h2>
        <p className="centered" data-aos="fade-in">
          Your message has been sent and ICG will get back to you as soon as possible.
        </p>
      </Section>
    );
  }

}

export default ThankYouSection;
