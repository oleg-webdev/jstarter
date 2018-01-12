import React, { Component } from 'react';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import '../../css/style.scss';
import Aux from './hoc/Aux';
import asyncComponent from './hoc/asyncComponent';

// Pages
import Home from './pages/Home';

const AsyncAbout = asyncComponent(() => {
  return import('./pages/AboutComponent');
});

class AppEntry extends Component {
  state = {
    headTitle: 'Headtitle',
  }

  render() {
    return (
      <div className="AppEntry-scope">
        <BrowserRouter>
          <Aux>
            <h1>{this.state.headTitle}</h1>
            <Link to="/">Home</Link>
            <Link to="/about-us">About</Link>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/about-us" component={AsyncAbout} />
            </Switch>
          </Aux>
        </BrowserRouter>
      </div>
    );
  }
}


export default AppEntry;
