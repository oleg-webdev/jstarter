import 'jquery';
// import 'bootstrap';
// import Popper from 'popper.js';

import '../../src/css/style.scss';
import './modules/Helpers/Utils';

import home from '../routes/home.html';
import about from '../routes/about.html';


const links = {
  // for 2nd approach
  // '/': 'src/routes/home.html',
  // '/about': 'src/routes/about.html',
  '/': home,
  '/about': about,
};

function updateState(state) {
  const thePage = !('page' in state) ? window.location.pathname : state.page;
  document.querySelector('.container').innerHTML = links[thePage];
  // 2nd approach
  // $('.container').load(links[thePage]);
  console.log(thePage);
}

window.addEventListener('popstate', (event) => {
  updateState(event.state);
});

window.addEventListener('load', updateState);

function doNav(state) {
  const loc = window.location.pathname;
  if (loc !== state.page) {
    history.replaceState(state, '', state.page);
    updateState(state);
  }
}

// Navigation
// @TODO: optimize
const navEl = document.querySelector('.nav-element');
navEl.addEventListener('click', (event) => {
  if (event.target.tagName !== 'A') return;

  event.preventDefault();
  const state = {
    page: event.target.getAttribute('href'),
  };
  doNav(state);
});

