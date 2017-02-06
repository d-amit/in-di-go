import React from 'react';

const IntroView = (props) => (

    <section id={props.id} className="icg-home-intro cell text-centered animated fadein">

      <h1 className="icg-fade-in">Welcome to Indigo Consulting Group</h1>

      <p className="icg-fade-in">Enriching Lives Through Positive User Experiences</p>

      {props.children}
    </section>

)

export default IntroView;
