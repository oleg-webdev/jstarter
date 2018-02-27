import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import classes from '../../css/style.scss'; // All classes
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

const AsyncAbout = asyncComponent(() => import('./pages/AboutComponent'));

class AppEntry extends Component {
  state = {
    headTitle: 'Headtitle',
  };

  render() {
    return (
      <div className="AppEntry-scope">
        <Router>
          <Route
            render={({ location }) => (
              <Fragment>
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

                <Switch location={location}>
                  <Route exact path="/" component={Home} />
                  <Route exact path="/about-us" component={AsyncAbout} />
                  <Route component={notFoundComponent} />
                </Switch>

              </Fragment>
          )}
          />
        </Router>
      </div>
    );
  }
}

export default AppEntry;
