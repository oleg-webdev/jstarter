import React, { Component } from 'react';

class AboutComponent extends Component {
  state = {
    searchTerm: 'About...',
  };

  static getDerivedStateFromProps(nextProps, prevState) {
    console.log('getDerivedStateFromProps');

    return prevState;
  }

  componentDidMount() {
    console.log('did mount');
  }

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
