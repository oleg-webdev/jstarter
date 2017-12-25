const Redux = require('redux');

const { createStore } = Redux;

const initialState = {
  counter: 0,
};

// Reducer
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INC_COUNTER':
      return {
        ...state,
        counter: state.counter + 1,
      };
    case 'ADD_COUNTER':
      return {
        ...state,
        counter: state.counter + action.payload,
      };
    default:
      return state;
  }
};

// Store
export default createStore(rootReducer);
