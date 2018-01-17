import React, { Component } from 'react';
import classes from './dummyComponent.scss';
import girl from '../../../img/monochrome-girl.jpg';

class dummyComponent extends Component {
  state = {
    name: '...',
  }

  render() {
    return (
      <div className={classes.dummyClasses}>
        <hr />
        <p className="testing-purposes">{this.state.name}</p>
        <img src={girl} alt="girl-pic" className={classes.girlImg} />
        <hr />
      </div>
    );
  }
}

export default dummyComponent;
