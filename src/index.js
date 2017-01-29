import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router'
import { AppContainer } from 'react-hot-loader';
// AppContainer is a necessary wrapper component for HMR

import 'react-mdl/extra/material.js';
require('react-mdl/extra/material.css');

import App from './containers/App';
import Home from '../src/containers/Home/Home';
import About from '../src/containers/About/About';
import Contact from '../src/containers/Contact/Contact';

const render = (Component) => {
  ReactDOM.render(
    <AppContainer>
      <Router history={hashHistory}>
        <Route path="/" component={App}>
          <IndexRoute component={Home}/>
          <Route path="about" component={About}/>
          <Route path="contactus" component={Contact}/>
        </Route>
      </Router>
    </AppContainer>,
    document.getElementById('root')
  );
};

render(App);

// Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./containers/App', () => {
    render(App)
  });
}
