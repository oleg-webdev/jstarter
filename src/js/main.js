import 'jquery';
// import 'bootstrap';
// import Popper from 'popper.js';
import React from 'react';
import ReactDOM from 'react-dom';
import '../css/style.scss';
import ExternalModule from './modules/ExternalModule.jsx';

// window.Popper = Popper;

// import {externalConst} from './modules/externalModule';

const testFunc = () => {
  console.log(this);
};

testFunc();

function SomeFunc() {
  const that = this;
  that.name = 'Alice';

  function innerFunc() {
    console.log(that.name);
  }

  innerFunc();
}

new SomeFunc();

const root = document.getElementById('app');

if (root !== null) {
  ReactDOM.render(<ExternalModule />, document.getElementById('app'));
}
