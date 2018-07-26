/* eslint-disable import/no-extraneous-dependencies */
// Base
import React from 'react';
import ReactDOM from 'react-dom';

// Redux
import { Provider } from 'react-redux';
import store from './store';
import '../css/style.scss';
import AppEntry from './components/AppEntry';

const root = document.getElementById('app');

if (root !== null) {
  const render = (Component) => {
    ReactDOM.render(
      <Provider store={store}>
        <Component />
      </Provider>,
      root,
    );
  };

  render(AppEntry);
} else {
  throw new Error('Root wasn\'t found');
}
