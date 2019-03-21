import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import "@babel/polyfill";
import { AppContainer } from 'react-hot-loader'; // AppContainer is a necessary wrapper component for HMR

import { App } from './containers';
import { reducers } from './redux/reducers';

require('aos/dist/aos.css');
require('material-design-lite/material.min.css');
require('./main.scss');

let store = createStore(reducers);

const render = () => {

  ReactDOM.render(
    (
        <Provider store={store}>
          <App/>
        </Provider>
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
