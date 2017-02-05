import React from 'react';
import { Icon } from 'react-mdl';

const IntroView = (props) => (

    <section className="icg-home-intro cell text-centered">

      <h1>Welcome to Indigo Consulting Group</h1>

      <p>Enriching Lives Through Positive User Experiences</p>

      <div className="centered section-bottom">
          <Icon onClick={ props.handleScrollTo }
            style={{ color: '#fff', fontSize: 64, cursor: 'pointer' }}
            name="keyboard_arrow_down" />
      </div>

    </section>

)

export default IntroView;
