import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';
import { createStore, combineReducers } from 'redux';
import { AppContainer } from 'react-hot-loader'; // AppContainer is a necessary wrapper component for HMR

import 'react-mdl/extra/material.js';
require('react-mdl/extra/material.css');
require('animate.css');

import DevTools from './assets/tools';
import * as reducers from './redux/reducers';

import { App, Home, About, Contact } from './containers';

const reducer = combineReducers({
  ...reducers,
  routing: routerReducer
})

const store = createStore(
  reducer,
  DevTools.instrument()
);
const history = syncHistoryWithStore(browserHistory, store);

const render = (Component) => {
  ReactDOM.render(
    <Provider store={store}>
    <div>
      <Router history={history}>
        <Route path="/" component={App}>
          <IndexRoute component={Home}/>
          <Route path="about" component={About}/>
          <Route path="contactus" component={Contact}/>
        </Route>
      </Router>
      <DevTools />
    </div>
  </Provider>,
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
