import 'jquery';
// import 'bootstrap';
// import Popper from 'popper.js';

import '../../src/css/style.scss';
import './modules/Helpers/Utils';

import UiAlert from './modules/Modals/UiAlert';

const mdl = new UiAlert(document.querySelector('.test-handler'));

document.querySelector('.test-launcher').addEventListener('click', () => {
  mdl.init()
    .then((response) => {
      console.log(response);
    }, (error) => {
      console.log(error);
    });
});
