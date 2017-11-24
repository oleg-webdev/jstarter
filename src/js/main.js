import 'jquery';
// import 'bootstrap';
// import Popper from 'popper.js';
import '../css/style.scss';

// window.Popper = Popper;

// import {externalConst} from './modules/externalModule';

const testFunc = () => {
  console.log(this);
};

testFunc();

function SomeFunc() {
  const that = this;
  that.name = 'Alice';

  const innerFunc = function () {
    console.log(that.name);
  };

  innerFunc();
}

SomeFunc();
