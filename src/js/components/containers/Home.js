// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as counterActions from '@store/counter/actions';
import * as resultsdbActions from '@store/resultsdb/actions';
import DummyComponent from '../DummyComponent/DummyComponent';
import Cr from '../fac/ConditionalRender';
import TestComponent from './TestComponent';

type Props = {
  counter: number,
  incrementCounter: (data: number) => void,
  decrementCounter: (data: number) => void,
  onStoreResult: (counter: number) => void,
  onDeleteResult: (elemId: string) => void,
  allResults: Array<{id: string, value: string}>,
}

type State = {
  searchTerm: string,
  rendCond: boolean,
}

class Home extends Component<Props, State> {
  inputElem = null;

  timeout = null;

  constructor(props) {
    super(props);
    this.inputElem = React.createRef();
  }

  state = {
    searchTerm: 'Home...',
    rendCond: false,
  };

  componentDidMount() {
    this.timeout = setTimeout(() => {
      this.setState({ rendCond: true });
      console.log(this.inputElem);
    }, 3000);
  }

  componentWillUnmount() {
    clearTimeout(this.timeout);
  }

  // SyntheticKeyboardEvent
  onUserSearch = ({ currentTarget }: SyntheticKeyboardEvent<*>) => {
    this.setState({ searchTerm: currentTarget.value });
  };

  render() {
    const { searchTerm, rendCond } = this.state;
    const {
      counter,
      allResults, incrementCounter,
      onStoreResult, decrementCounter,
      onDeleteResult,
    } = this.props;
    return (
      <div>
        <h3>Lorem, ipsum dolor...</h3>
        <TestComponent somedata="thestring" />
        <Cr canIrender={rendCond} showPreloader>
          {() => (
            <div>Shown instead preloader</div>
          )}
        </Cr>
        <DummyComponent />
        <input
          type="text"
          value={searchTerm}
          onChange={this.onUserSearch}
          ref={this.inputElem}
        />

        <button type="button" onClick={() => incrementCounter(1)}>
          Increment
        </button>
        <button type="button" onClick={decrementCounter}>
          Decrement
        </button>
        <p>{searchTerm}</p>
        <p>{counter}</p>
        <button type="button" onClick={() => onStoreResult(counter)}>
          Store Result
        </button>
        <ul>
          {allResults.map(elem => (
            <li key={elem.id} onClick={() => onDeleteResult(elem.id)}>
              {elem.value}
              {' '} - {' '}
              {elem.id}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  // Will be available in container as
  // this.props.counter
  return {
    counter: state.counterReducer.counter,
    allResults: state.resultReducer.allResults,
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => (
  bindActionCreators({
    ...counterActions,
    ...resultsdbActions,
  }, dispatch)
);


export default connect(mapStateToProps, mapDispatchToProps)(Home);
