import React, { Component } from 'react';

class ExternalModule extends Component {
  state = { showText: true };

  render() {
    return (
      <div>
        <h3>Hi, I'm external {this.state.showText}</h3>
      </div>
    );
  }
}

export default ExternalModule;
