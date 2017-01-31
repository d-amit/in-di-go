import React from 'react';

import {
  Grid, Cell, Card, CardActions, CardTitle, Icon, Button, FABButton
} from 'react-mdl';

import {
  ParallaxContainer, ParallaxGroup, ParallaxLayerFore, ParallaxLayerBase, ParallaxLayerBack, ParallaxLayerDeep
} from '../../components/Parallax/Parallax';

const Home = () => (
  <ParallaxContainer className="icg-home-container">

    <div className="icg-home-intro">
      <ParallaxGroup>
        <ParallaxLayerFore className="title">
          <h2>Welcome to Indigo Consulting Group</h2>
        </ParallaxLayerFore>

        <ParallaxLayerBase>
          <h3>
            Design
            <div className="spacer"> </div>
            User Experience
            <div className="spacer"> </div>
            Usability
          </h3>
        </ParallaxLayerBase>

        <ParallaxLayerBack>
          <h4>Enriching Lives Through Positive User Experiences</h4>
        </ParallaxLayerBack>
      </ParallaxGroup>

      <FABButton colored ripple>
          <Icon name="add" />
      </FABButton>
    </div>
    <div className="icg-home-mission">
      <ParallaxGroup>
        <ParallaxLayerBase>
          <h2>Mission</h2>
        </ParallaxLayerBase>

        <ParallaxLayerBack>
          <h3>Blah Blah</h3>
        </ParallaxLayerBack>
      </ParallaxGroup>
    </div>

    <div className="icg-home-mission">
      <ParallaxGroup className="icg-home-services">
        <ParallaxLayerBase>
          <h2>Services</h2>
        </ParallaxLayerBase>

        <ParallaxLayerBack>

          <Grid style={{padding: '0 2em'}}>
            <Cell col={4} tablet={12} phone={12}>

              <Card shadow={0} className="card-full-width">
                  <CardTitle expand style={{alignItems: 'flex-start', color: '#333'}}>
                      <h4 style={{marginTop: '0'}}>
                          Featured event:<br />
                          May 24, 2016<br />
                          7-11pm
                      </h4>
                  </CardTitle>
                  <CardActions border style={{borderColor: 'rgba(255, 255, 255, 0.2)', display: 'flex', boxSizing: 'border-box', alignItems: 'center', color: '#333'}}>
                      <Button colored style={{color: '#fff'}}>Add to Calendar</Button>
                      <div className="mdl-layout-spacer"></div>
                      <Icon name="event" />
                  </CardActions>
              </Card>

            </Cell>
            <Cell col={4} tablet={12} phone={12}>

              <Card shadow={0} className="card-full-width">
                  <CardTitle expand style={{alignItems: 'flex-start', color: '#333'}}>
                      <h4 style={{marginTop: '0'}}>
                          Featured event:<br />
                          May 24, 2016<br />
                          7-11pm
                      </h4>
                  </CardTitle>
                  <CardActions border style={{borderColor: 'rgba(255, 255, 255, 0.2)', display: 'flex', boxSizing: 'border-box', alignItems: 'center', color: '#333'}}>
                      <Button colored style={{color: '#fff'}}>Add to Calendar</Button>
                      <div className="mdl-layout-spacer"></div>
                      <Icon name="event" />
                  </CardActions>
              </Card>

            </Cell>
            <Cell col={4} tablet={12} phone={12}>

              <Card shadow={0} className="card-full-width">
                  <CardTitle expand style={{alignItems: 'flex-start', color: '#333'}}>
                      <h4 style={{marginTop: '0'}}>
                          Featured event:<br />
                          May 24, 2016<br />
                          7-11pm
                      </h4>
                  </CardTitle>
                  <CardActions border style={{borderColor: 'rgba(255, 255, 255, 0.2)', display: 'flex', boxSizing: 'border-box', alignItems: 'center', color: '#333'}}>
                      <Button colored style={{color: '#fff'}}>Add to Calendar</Button>
                      <div className="mdl-layout-spacer"></div>
                      <Icon name="event" />
                  </CardActions>
              </Card>

            </Cell>
          </Grid>

        </ParallaxLayerBack>
      </ParallaxGroup>
    </div>

  </ParallaxContainer>
);

export default Home;
