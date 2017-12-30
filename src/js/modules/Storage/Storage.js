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

// import store from './modules/Storage/Storage';

// window.Popper = Popper;

// Subscription
// store.subscribe(() => {
//   console.log(store.getState());
// });

// // Dispatching Action
// store.dispatch({ type: 'INC_COUNTER' });
// store.dispatch({
//   type: 'ADD_COUNTER',
//   payload: store.getState().counter + 10,
// });
