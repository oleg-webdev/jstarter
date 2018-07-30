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

  allowedTypes = ({ type }) => {
    return [
      (<Toggle.On />).type,
      (<Toggle.Off />).type,
      (<Toggle.Button />).type,
    ].includes(type);
  }

  render() {
    return Children.map(
      this.props.children,
      (childElem) => {
        const elemProps = this.allowedTypes(childElem) ? {
          on: this.state.on,
          toggle: this.toggle,
        } : childElem.props;
        return React.cloneElement(childElem, elemProps);
      },
    );
  }
}

export default Toggle;
