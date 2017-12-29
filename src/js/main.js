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


// import store from './modules/Storage/Storage';

// window.Popper = Popper;

// Subscription
// store.subscribe(() => {
//   console.log(store.getState());
// });

// // Dispatching Action
// store.dispatch({ type: 'INC_COUNTER' });
// store.dispatch({
//   type: 'ADD_COUNTER',
//   payload: store.getState().counter + 10,
// });
