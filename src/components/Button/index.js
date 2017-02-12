import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import { Link } from 'react-router';
require('./_button.scss');


class Button extends React.Component {

  goToNext() {

    $('html, body').animate({
        scrollTop: $(this.props.target).offset().top
    },'500', 'swing');

  }

  render() {

    let buttonClass = this.props.className ? `icg-btn ${this.props.className}` : 'icg-btn';
    let type = this.props.href ? 'link' : 'button'; // link will use react-router link

    return type === 'button' ? (
      <a className={buttonClass}
        data-aos={this.props.aos.type}
        onClick={this.goToNext.bind(this)}>
        {this.props.children}
      </a>
    ) : (
      <Link className={buttonClass} data-aos={this.props.aos.type} to={this.props.href}>
        {this.props.children}
      </Link>
    );

  }

}

export default Button;
