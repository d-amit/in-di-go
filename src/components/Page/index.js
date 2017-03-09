import React from 'react';
import { Section } from '../Section/';
import AOS from 'aos/dist/aos';

class Page extends React.Component {

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
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div id={this.props.id} className={this.props.className}>
        {this.props.children}
      </div>
    );
  }

}

export default Page;
