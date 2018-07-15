import React, { Component } from 'react';

const asyncComponent = (importComponent) => {
  class AsyncComponent extends Component {
    state = {
      component: null,
    }

    componentDidMount() {
      importComponent()
        .then((cmp) => {
          this.setState({ component: cmp.default });
        });
    }

    render() {
      const { component } = this.state;
      const C = component;
      return C ? <C {...this.props} /> : null;
    }
  }

  const innerName = importComponent.displayName
    || importComponent.name
    || 'importComponent';

  AsyncComponent.displayName = `AsyncComponent(${innerName})`;

  return AsyncComponent;
};

export default asyncComponent;
