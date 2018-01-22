import React, { Component } from 'react';
import classes from './dummyComponent.scss';
import girl from '../../../img/monochrome-girl.jpg';

class dummyComponent extends Component {
  state = {
    name: '...',
    out: false,
  };

  render() {
    return (
      <div className={classes.dummyClasses}>
        {this.state.out ? <p className="testing-purposes">{this.state.name}</p> : null}
        <img src={girl} alt="girl-pic" className={classes.girlImg} />
      </div>
    );
  }
}

export default dummyComponent;
