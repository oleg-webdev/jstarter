import React from 'react';
import ReactDOM from 'react-dom';
import Board from './components/Board';

import '../css/style.scss';

ReactDOM.render(
  <Board knightPosition={[0, 0]} />, document.getElementById('app'),
);
