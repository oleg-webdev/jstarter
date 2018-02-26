import React, { Component } from 'react';
import classes from './dummyComponent.scss';
import { monochromeGirl } from '../../../img';

class dummyComponent extends Component {
  state = {
    name: '...',
    out: false,
  };

  componentDidMount() {
    // console.log(girl);
  }


  render() {
    return (
      <div className={classes.dummyClasses}>
        {this.state.out ? <p className="testing-purposes">{this.state.name}</p> : null}
        <img src={monochromeGirl} alt="girl-pic" className={classes.girlImg} />
      </div>
    );
  }
}

export default dummyComponent;
