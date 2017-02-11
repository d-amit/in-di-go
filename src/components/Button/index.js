import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
require('./_button.scss');


class Button extends React.Component {

  goToNext() {

    $('html, body').animate({
        scrollTop: $(this.props.target).offset().top
    },'500', 'swing');

  }

  render() {

    let buttonClass = this.props.className ? `icg-btn ${this.props.className}` : 'icg-btn';
    return (
      <a className={buttonClass}
        data-aos={this.props.aos.type}
        onClick={this.goToNext.bind(this)}>
        {this.props.children}
      </a>
    );

  }

}

export default Button;
