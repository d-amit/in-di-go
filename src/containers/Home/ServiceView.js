import React from 'react';
import { Grid, Cell, Card, CardText, CardTitle, Icon } from 'react-mdl';

const renderCard = (title, text, props) => (
  <Card shadow={1} className="card-full-width">
      <CardTitle expand style={{alignItems: 'flex-start', color: '#333'}}>
          <h4>{title}</h4>
      </CardTitle>
      <CardText>{text}</CardText>
  </Card>
)

const ServiceView = (props) => (
  <section id={props.id} className="icg-home-services">

    <h1>Services</h1>

    <Grid className="centered" style={{padding: '0 4em'}}>
      <Cell col={3} tablet={6} phone={12}>
        {renderCard('Interface Design and User Experience')}
      </Cell>
      <Cell col={3} tablet={6} phone={12}>
        {renderCard('Software Development')}
      </Cell>
      <Cell col={3} tablet={6} phone={12}>
        {renderCard('Product Development & Strategy')}
      </Cell>
      <Cell col={3} tablet={6} phone={12}>
        {renderCard('Training & Workshops')}
      </Cell>
    </Grid>

    {props.children}
  </section>
)

export default ServiceView;
