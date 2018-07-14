// @flow
import React, { Component } from 'react';
import { Subscribe } from 'unstated';
// import CounterContainer from '@store/counter/Counter';
import { Counter } from '@store';
// import Cr from '../fac/ConditionalRender';

type Props = {}

type State = {
  searchTerm: string,
  rendCond: boolean,
}

// <Props, State>
class Home extends Component<Props, State> {
  componentDidMount() {
    //
  }

  render() {
    return (
      <Subscribe to={[Counter]}>
        {counter => (
          <div>
            <button type="button" onClick={() => counter.decrement()}>-</button>
            <span>{counter.state.count}</span>
            <button type="button" onClick={() => counter.increment()}>+</button>
          </div>
        )}
      </Subscribe>
    );
  }
}


export default Home;
