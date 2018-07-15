/* eslint-disable react/destructuring-assignment */
import React from 'react';

function withMethods(Component) {
  class WithMethods extends React.Component {
    state = {
      data: ['1', 2],
    }

    someMethod = () => console.log(this.state.data);

    render() {
      return (
        <Component
          data={this.state.data}
          someMethod={this.someMethod}
          {...this.props}
        />
      );
    }
  }

  const innerName = Component.displayName
    || Component.name
    || 'Component';

  WithMethods.displayName = `WithMethods(${innerName})`;

  return WithMethods;
}

export default withMethods;
