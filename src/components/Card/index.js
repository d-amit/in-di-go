import React from 'react';
import MDL from 'material-design-lite/material.min.js';

class Card extends React.Component {

  render() {
    let cardClass = this.props.className ? `mdl-card ${this.props.className}` : 'mdl-card';
    return (
      <div className={cardClass}
        data-aos={this.props.aos.type}
        data-aos-duration={this.props.aos.duration}>
        {this.props.children}
      </div>
    );
  }

}

class CardTitle extends React.Component {

  render() {
    let titleClass = `mdl-card__title ${this.props.className}`;
    return (
      <div className={titleClass}> {this.props.children} </div>
    );
  }

}

class CardAction extends React.Component {

  render() {
    let actionClass = `mdl-card__actions ${this.props.className}`;
    return (
      <div className={actionClass}> {this.props.children} </div>
    );
  }

}

class CardSupportText extends React.Component {

  render() {
    let textClass = `mdl-card__supporting-text ${this.props.className}`;
    return (
      <div className={textClass}> {this.props.children} </div>
    );
  }

}

export { Card, CardTitle, CardAction, CardSupportText };
