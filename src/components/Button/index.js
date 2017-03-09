import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
require('./_button.scss');


class Button extends React.Component {

  render() {

    let buttonClass = this.props.className ? `icg-btn ${this.props.className}` : 'icg-btn';

    return (
      <a className={buttonClass}
        data-aos={this.props.aos.type}
        onClick={this.props.handleClick}>
        {this.props.children}
      </a>
    );

  }

}

export default Button;
