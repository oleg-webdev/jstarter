import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import DummyComponent from '../DummyComponent/DummyComponent';

import { incrementCounter, decrementCounter } from '../../store/counter/actions';
import { onStoreResult, onDeleteResult } from '../../store/result/actions';

class Home extends Component {
  state = {
    searchTerm: 'Home...',
  };

  componentDidMount() {
    console.log(this.state.searchTerm);
    console.log(this.inputElem);
  }

  onUserSearch = (event) => {
    this.setState({ searchTerm: event.target.value });
  };

  render() {
    return (
      <div>
        <h3>Lorem, ipsum dolor...</h3>
        <DummyComponent />
        <input
          type="text"
          value={this.state.searchTerm}
          onChange={this.onUserSearch}
          ref={(input) => {
            this.inputElem = input;
          }}
        />
        <button onClick={() => this.props.incrementCounter(1)}>Increment</button>
        <button onClick={this.props.decrementCounter}>Decrement</button>
        <p>{this.state.searchTerm}</p>
        <p>{this.props.counter}</p>
        <button onClick={() => this.props.onStoreResult(this.props.counter)}>Store Result</button>
        <ul>
          {this.props.allResults.map(elem => (
            <li key={elem.id} onClick={() => this.props.onDeleteResult(elem.id)}>
              {elem.value} - {elem.id}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

Home.defaultProps = {
  counter: 0,
};

Home.propTypes = {
  counter: PropTypes.number,
  incrementCounter: PropTypes.func,
  decrementCounter: PropTypes.func,
  onStoreResult: PropTypes.func,
  onDeleteResult: PropTypes.func,
  allResults: PropTypes.arrayOf(PropTypes.object),
};

const mapStateToProps = (state) => {
  // Will be available in container as
  // this.props.counter
  return {
    counter: state.counterReducer.counter,
    allResults: state.resultReducer.allResults,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    incrementCounter: () => dispatch(incrementCounter(1)),
    decrementCounter: () => dispatch(decrementCounter()),
    onStoreResult: result => dispatch(onStoreResult(result)), // Async action
    onDeleteResult: id => dispatch(onDeleteResult(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
