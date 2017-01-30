import React from 'react';
import { Footer } from 'react-mdl';
import {
  ParallaxContainer, ParallaxGroup, ParallaxLayerBase, ParallaxLayerBack, ParallaxLayerDeep
} from '../../components/Parallax/Parallax';

const Home = () => (
  <ParallaxContainer>

    <ParallaxGroup>
      <ParallaxLayerBase style={{padding: '5em'}}>
        <h1>Welcome</h1>
      </ParallaxLayerBase>

      <ParallaxLayerBack style={{padding: '5em'}}>
        <h2>Blah Blah</h2>
      </ParallaxLayerBack>
    </ParallaxGroup>

    <ParallaxGroup>
      <ParallaxLayerBase style={{padding: '5em'}}>
        <h1>Mission</h1>
      </ParallaxLayerBase>

      <ParallaxLayerBack style={{padding: '5em'}}>
        <h2>Blah Blah</h2>
      </ParallaxLayerBack>
    </ParallaxGroup>

    <ParallaxGroup>
      <ParallaxLayerBase style={{padding: '5em'}}>
        <h1>Services</h1>
      </ParallaxLayerBase>

      <ParallaxLayerBack style={{padding: '5em'}}>
        <h2>Blah Blah</h2>
      </ParallaxLayerBack>
    </ParallaxGroup>

  </ParallaxContainer>
);

export default Home;
