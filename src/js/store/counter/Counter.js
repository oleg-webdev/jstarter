// @flow
import { Container } from 'unstated';

type CounterState = {
  count: number
};

export default class extends Container<CounterState> {
  state = {
    count: 0,
  };

  increment() {
    this.setState(prevState => ({
      count: prevState.count + 1,
    }));
  }

  decrement() {
    this.setState(prevState => ({
      count: prevState.count - 1,
    }));
  }
}
