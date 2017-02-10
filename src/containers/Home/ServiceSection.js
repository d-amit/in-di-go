import React from 'react';
import { Card, CardTitle, CardAction, CardSupportText, Section } from '../../components';
import MDL from 'material-design-lite/material.min.js';

class ServiceSection extends React.Component {

  renderCard(title='', text='', icon, duration=1500) {
    let aos = {
      type : "fade-up",
      duration: duration
    };

    return (
      <Card aos={aos} className="hvr-bob mdl-shadow--3dp full-width">
        <CardTitle className="mdl-card--border">
          {icon && <i className="card-icon material-icons">{icon}</i> }
          <span className="card-title">{title}</span>
        </CardTitle>
        <CardSupportText>{text}</CardSupportText>
      </Card>
    );
  }

  render() {
    // max ->  12 >> 8 >> 4
    let ratio = {
      desktop: 4,
      tablet: 4,
      phone: 4
    };

    let defaultCellClasses = 'mdl-cell mdl-cell--stretch mdl-cell--top';
    let cellResponsive = `mdl-cell--stretch mdl-cell--${ratio.desktop}-col mdl-cell--${ratio.tablet}-col-tablet mdl-cell--${ratio.phone}-col-phone`;
    let cellClass = defaultCellClasses + ' ' + cellResponsive;
    let sectionClass = `icg-services ${this.props.className}`;

    return (
      <Section className={sectionClass}>
        <h2 className="centered" data-aos="fade-up">Services</h2>
        <div className="mdl-grid centered">

          <div className={cellClass}>
            {this.renderCard(
              'Interface Design',
              'blah blah blah blah blah blah blah blah',
              'border_color'
            )}
          </div>
          <div className={cellClass}>
            {this.renderCard(
              'User Experience',
              'blah blah blah blah blah blah blah blah',
              'recent_actors'
            )}
          </div>
          <div className={cellClass}>
            {this.renderCard(
              'Software Development',
              'blah blah blah blah blah blah blah blah',
              'developer_mode'
            )}
          </div>
          <div className={cellClass}>
            {this.renderCard(
              'Product Development',
              'blah blah blah blah blah blah blah blah',
              'developer_board'
            )}
          </div>
          <div className={cellClass}>
            {this.renderCard(
              'Product Strategy',
              'blah blah blah blah blah blah blah blah',
              'devices_other'
            )}
          </div>
          <div className={cellClass}>
            {this.renderCard(
              'Training & Workshops',
              'blah blah blah blah blah blah blah blah',
              'group'
            )}
          </div>

        </div>
      </Section>
    );
  }

}

export default ServiceSection;
