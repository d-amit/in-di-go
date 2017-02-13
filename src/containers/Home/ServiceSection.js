import React from 'react';
import { Card, CardTitle, CardAction, CardSupportText, Section, Button } from '../../components';
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
        <CardSupportText className="text-justified">{text}</CardSupportText>
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

    // TODO: externalize this into another js that can be imported in!
    let cards = [
      {
        title: 'Interface Design',
        text: 'We work to simplify a complex multi-feature solution into intuitive, useful interfaces to different platforms by wireframing, prototyping, and testing with users and clients, allows us to continually refine our designs to meet your needs. ',
        icon: 'border_color'
      }, {
        title: 'User Experience',
        text: 'Through research, experience, and industry expertise, we help you understand your user’s needs, goals, and pain points to define clear opportunities and design goals.',
        icon: 'recent_actors'
      }, {
        title: 'Software Development',
        text: 'We leverage our knowledge the latest methodologies and technologies to work across functional groups and achieve software greatness.',
        icon: 'developer_mode'
      }, {
        title: 'Product Development',
        text: 'We craft user experiences through interaction design, motion and visual storytelling by creating detailed prototypes, wireframes, and more.',
        icon: 'developer_board'
      }, {
        title: 'Product Strategy',
        text: 'We help identify the biggest opportunities for your business with a clear strategy that is customer and market-driven.',
        icon: 'devices_other'
      }, {
        title: 'Training & Workshops',
        text: 'We bring our expertise to our clients, helping them better understand how to best use design and technology within their team.',
        icon: 'group'
      }
    ];

    let defaultCellClasses = 'mdl-cell mdl-cell--stretch mdl-cell--top';
    let cellResponsive = `mdl-cell--stretch mdl-cell--${ratio.desktop}-col mdl-cell--${ratio.tablet}-col-tablet mdl-cell--${ratio.phone}-col-phone`;
    let cellClass = defaultCellClasses + ' ' + cellResponsive;
    let sectionClass = `icg-services ${this.props.className}`;
    let aosButton = { type: 'fade-up' };

    return (
      <Section id={this.props.id} className={sectionClass}>
        <h2 className="centered service-header" data-aos="fade-up">Services</h2>

        <div className="mdl-grid centered">
          {cards.map((card, index) => {
              return <div key={index} className={cellClass}>
                {this.renderCard(card.title, card.text, card.icon, card.duration)}
              </div>;
          })}
        </div>

        <Button aos={aosButton} className="centered hvr-grow" target="#homeMission">
          Learn why we do what we do
        </Button>

      </Section>
    );
  }

}

export default ServiceSection;
