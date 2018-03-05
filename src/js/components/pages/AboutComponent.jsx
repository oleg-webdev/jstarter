import React, { Component } from 'react';

class AboutComponent extends Component {
  state = {
    searchTerm: 'About...',
  };

  render() {
    return (
      <div>
        <p>{this.state.searchTerm}</p>
        <p>
          Loremsdsdfs
        </p>
      </div>
    );
  }
}

export default AboutComponent;
