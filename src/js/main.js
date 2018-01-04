import 'jquery';
// import 'bootstrap';
// import Popper from 'popper.js';

import '../../src/css/style.scss';
import './modules/Helpers/Utils';

import UiConfirm from './modules/Modals/UiConfirm';

const mdl = new UiConfirm(document.querySelector('.test-handler'));

document.querySelector('.test-launcher').addEventListener('click', () => {
  mdl.init()
    .then((response) => {
      console.log(response);
    }, (error) => {
      console.log(error);
    });
});
