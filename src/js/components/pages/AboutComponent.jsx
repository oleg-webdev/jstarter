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
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto laborum esse maxime
          est, explicabo dolor.
        </p>
      </div>
    );
  }
}

export default AboutComponent;
