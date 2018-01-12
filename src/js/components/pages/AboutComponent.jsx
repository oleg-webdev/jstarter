import React, { Component } from 'react';

class AboutComponent extends Component {
  state = {
    searchTerm: 'About...',
  }

  render() {
    return (
      <div>
        <p>{this.state.searchTerm}</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore ratione, nesciunt pariatur at voluptas dolorum molestias ex repellendus voluptatum nulla nobis ipsa velit autem odit commodi nam quia cupiditate expedita.</p>
      </div>
    );
  }
}

export default AboutComponent;
