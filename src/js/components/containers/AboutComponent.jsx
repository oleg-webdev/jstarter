import React, { Component } from 'react';

class AboutComponent extends Component {
  state = {
    searchTerm: 'About...',
  };

  componentDidMount() {
    console.log('did mount');
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    console.log('getDerivedStateFromProps');

    return prevState;
  }

  render() {
    const { searchTerm } = this.state;
    return (
      <div>
        <p>{searchTerm}</p>
        <p>
          Loremsdsdfs
        </p>
      </div>
    );
  }
}

export default AboutComponent;
