// Base
import React from 'react';
import ReactDOM from 'react-dom';

// Redux
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import '../css/style.scss';
import AppEntry from './components/AppEntry';
import counterReducer from './store/reducers/counter';
import resultReducer from './store/reducers/result';

const rootReducer = combineReducers({
  counterReducer, resultReducer,
});

/* eslint-disable no-underscore-dangle */
const composedEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
/* eslint-enable */

// state.counterReducer, state.resultReducer
const store = createStore(rootReducer, composedEnhancers(applyMiddleware(thunk)));

const root = document.getElementById('app');

if (root !== null) {
  ReactDOM.render(<Provider store={store}><AppEntry /></Provider>, root);
} else {
  throw new Error('Root wasn\'t found');
}
