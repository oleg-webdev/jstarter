import React, { Component } from 'react';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import classes from '../../css/style.scss'; // All classes
import Aux from './hoc/Aux';
import asyncComponent from './hoc/asyncComponent';

// Pages
import Home from './pages/Home';

// Class mapping
const { 'text-center': tc } = classes;

const notFoundComponent = () => {
  return (
    <div className={tc}>
      <p>Center aligned text on all viewport sizes.</p>
    </div>
  );
};

const AsyncAbout = asyncComponent(() => {
  return import('./pages/AboutComponent');
});

class AppEntry extends Component {
  state = {
    headTitle: 'Headtitle',
  };

  render() {
    return (
      <div className="AppEntry-scope">
        <BrowserRouter>
          <Aux>
            <h1>{this.state.headTitle}</h1>
            <ul className="nav">
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/about-us" className="nav-link">
                  About
                </Link>
              </li>
            </ul>

            {/* key only for HMR */}
            <Switch key={Math.random()}>
              <Route exact path="/" component={Home} />
              <Route exact path="/about-us" component={AsyncAbout} />
              <Route component={notFoundComponent} />
            </Switch>
          </Aux>
        </BrowserRouter>
      </div>
    );
  }
}

export default AppEntry;
