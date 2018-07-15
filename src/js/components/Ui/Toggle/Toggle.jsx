// @flow
import React, { Component, Children } from 'react';

type Props = {
  children: React.ChildrenArray<React.Node> | React.Node,
}

class Toggle extends Component<Props> {
  static On = props => (props.on ? props.children : null);

  static Off = props => (props.on ? null : props.children);

  static Button = props => (
    <button
      onClick={props.toggle}
      type="button"
      style={{ display: 'inline-block' }}
    >
      <pre>{JSON.stringify(props.on, null, 2)}</pre>
    </button>
  );

  state = { on: false }

  toggle = () => {
    this.setState(
      ({ on }) => ({ on: !on }),
      // maybe this.props.someCallback
      () => console.log(this.state.on),
    );
  }

  render() {
    return Children.map(
      this.props.children,
      childElem => React.cloneElement(childElem, {
        on: this.state.on,
        toggle: this.toggle,
      }),
    );
  }
}

export default Toggle;
