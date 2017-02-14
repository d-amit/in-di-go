import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { AppContainer } from 'react-hot-loader'; // AppContainer is a necessary wrapper component for HMR
import { App, Home, About, Contact } from './containers';


require('aos/dist/aos.css');
require('material-design-lite/material.min.css');
require('./main.scss');
require('./favicon.ico');

const render = () => {

  ReactDOM.render(
    (
      <AppContainer>
        <Router onUpdate={() => window.scrollTo(0, 0)} history={browserHistory}>
          <Route path="/" component={App}>
            <IndexRoute component={Home}/>
            <Route path="about" component={About}/>
            <Route path="contactus" component={Contact}/>
          </Route>
        </Router>
      </AppContainer>
    ),
    document.getElementById('root')
  );

};

render();

// Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./', () => {
    render();
  });
}
