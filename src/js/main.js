// Base
import React from 'react';
import ReactDOM from 'react-dom';

// Redux
import { Provider } from 'react-redux';
import store from './store/';
import '../css/style.scss';
import AppEntry from './components/AppEntry';

const root = document.getElementById('app');

if (root !== null) {
  ReactDOM.render(<Provider store={store}><AppEntry /></Provider>, root);
} else {
  throw new Error('Root wasn\'t found');
}
