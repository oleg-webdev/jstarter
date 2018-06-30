import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import DummyComponent from '../DummyComponent/DummyComponent';

import * as counterActions from '../../store/counter/actions';
import * as resultsdbActions from '../../store/resultsdb/actions';

class Home extends Component {
  static propTypes = {
    counter: PropTypes.number,
    incrementCounter: PropTypes.func,
    decrementCounter: PropTypes.func,
    onStoreResult: PropTypes.func,
    onDeleteResult: PropTypes.func,
    allResults: PropTypes.arrayOf(PropTypes.object),
  }

  static defaultProps = {
    counter: 0,
  }

  state = {
    searchTerm: 'Home...',
  };

  componentDidMount() {
    // console.log(this.state.searchTerm);
    // console.log(this.inputElem);
  }

  onUserSearch = (event) => {
    this.setState({ searchTerm: event.target.value });
  };

  render() {
    const { searchTerm } = this.state;
    const {
      counter,
      allResults, incrementCounter,
      onStoreResult, decrementCounter,
      onDeleteResult,
    } = this.props;
    return (
      <div>
        <h3>Lorem, ipsum dolor...</h3>
        <DummyComponent />
        <input
          type="text"
          value={searchTerm}
          onChange={this.onUserSearch}
          ref={(input) => {
            this.inputElem = input;
          }}
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

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    ...counterActions,
    ...resultsdbActions,
  }, dispatch)
);


export default connect(mapStateToProps, mapDispatchToProps)(Home);
