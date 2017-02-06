import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { AppContainer } from 'react-hot-loader'; // AppContainer is a necessary wrapper component for HMR

import 'react-mdl/extra/material.js';
require('react-mdl/extra/material.css');
require('animate.css');

import { App, Home, About, Contact } from './containers';

const render = (Component) => {
  ReactDOM.render(
    <div>
      <Router history={browserHistory}>
        <Route path="/" component={App}>
          <IndexRoute component={Home}/>
          <Route path="about" component={About}/>
          <Route path="contactus" component={Contact}/>
        </Route>
      </Router>
    </div>,
    document.getElementById('root')
  );
};

render(App);

// Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./containers', () => {
    render(App)
  });
}
