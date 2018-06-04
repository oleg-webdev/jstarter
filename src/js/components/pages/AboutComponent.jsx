import React, { Component } from 'react';

class AboutComponent extends Component {
  static getDerivedStateFromProps(nextProps, prevState) {
    console.log('getDerivedStateFromProps');

    return prevState;
  }

  state = {
    searchTerm: 'About...',
  };

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
