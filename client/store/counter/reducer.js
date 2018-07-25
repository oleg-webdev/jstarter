import * as types from './types';

const initialState = {
  counter: 10,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.INCREMENT:
      return {
        ...state,
        counter: state.counter + action.payload,
      };
    case types.DECREMENT:
      return {
        ...state,
        counter: state.counter - action.payload,
      };
    default: return state;
  }
};
