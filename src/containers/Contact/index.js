import React from 'react';
import { Section } from '../../components';
import IntroSection from './IntroSection';
import FormSection from './FormSection';
import AOS from 'aos/dist/aos';

class Contact extends React.Component {

  constructor(props, context) {
    super(props, context);
    AOS.init({
      duration: 1200,
      easing: 'ease-in-out-back'
    });
  }

  componentWillReceiveProps (){
    AOS.refresh();

  }

  componentDidMount() {
    componentHandler.upgradeDom();
  }

  render() {
    return (
      <div className="icg-contact content">

        <div className="fullview-container" onScroll={this.handleScroll}>
          <IntroSection className="fullview-item" data-aos="fade-up" />
          <FormSection id="formSection" className="fullview-item" data-aos="fade-up" />
        </div>

      </div>
    );
  }

}

export default Contact;
