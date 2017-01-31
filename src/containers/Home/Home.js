import React from 'react';
import { Footer } from 'react-mdl';
import Image from '../../components/Image/Image';
import {
  ParallaxContainer, ParallaxGroup, ParallaxLayerFore, ParallaxLayerBase, ParallaxLayerBack, ParallaxLayerDeep
} from '../../components/Parallax/Parallax';

const Home = () => (
  <ParallaxContainer className="icg-home-container">

    <ParallaxGroup className="icg-home-intro">
      <ParallaxLayerFore className="title">
        <h2>Welcome to Indigo Consulting Group</h2>
      </ParallaxLayerFore>

      <ParallaxLayerBase>
        <h3>
          Design
          <span className="spacer"></span>
          User Experience
          <span className="spacer"></span>
          Usability
        </h3>
      </ParallaxLayerBase>

      <ParallaxLayerBack>
        <h4>Enriching Lives Through Positive User Experiences</h4>
      </ParallaxLayerBack>
    </ParallaxGroup>

    <ParallaxGroup className="icg-home-mission">
      <ParallaxLayerBase>
        <h2>Mission</h2>
      </ParallaxLayerBase>

      <ParallaxLayerBack>
        <h3>Blah Blah</h3>
      </ParallaxLayerBack>
    </ParallaxGroup>

    <ParallaxGroup className="icg-home-services">
      <ParallaxLayerBase>
        <h2>Services</h2>
      </ParallaxLayerBase>

      <ParallaxLayerBack>
        <h3>Blah Blah</h3>
      </ParallaxLayerBack>
    </ParallaxGroup>

  </ParallaxContainer>
);

export default Home;
