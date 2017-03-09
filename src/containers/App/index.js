import React from 'react';
import AOS from 'aos/dist/aos';
require('aos/dist/aos.css');

import { actions } from '../../redux';
import { connect } from 'react-redux';
import { Home, About, Contact } from '../index.js';
import { Header, Footer } from '../../components';

const App = ({ view, onLinkClick }) => {

    let content = (<Home goToView={onLinkClick}/>);
    if (view === 'ABOUT') {
      content = (<About/>);
    }
    else if (view && view === 'CONTACT') {
      content = (<Contact/>);
    }

    return (
      <div className="icg icg-container">
        <Header goToView={onLinkClick}/>
        {content}
        <Footer className="centered"/>
      </div>
    );

}

const mapStateToProps = (state) => {
  return {
    view : state.view
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onLinkClick: (view) => {
      dispatch(actions.getActiveView(view))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
