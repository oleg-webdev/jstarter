/* eslint-disable import/no-extraneous-dependencies */
// Base
import React from 'react';
import ReactDOM from 'react-dom';

// hmr
import { AppContainer } from 'react-hot-loader';

// Redux
import { Provider } from 'react-redux';
import store from './store/';
import '../css/style.scss';
import AppEntry from './components/AppEntry';

const root = document.getElementById('app');

if (root !== null) {
  const render = (Component) => {
    ReactDOM.render(
      <AppContainer>
        <Provider store={store}>

          <Component />

        </Provider>
      </AppContainer>,
      root,
    );
  };

  render(AppEntry);

  // Webpack Hot Module Replacement API
  if (module.hot) {
    // const NextApp = require('./components/AppEntry').default;
    // module.hot.accept('./components/AppEntry', () => { render(NextApp); });
    module.hot.accept(() => {
      render(AppEntry);
    });
  }
} else {
  throw new Error('Root wasn\'t found');
}
