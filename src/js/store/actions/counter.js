import * as types from './types';

export const incrementCounter = numb => ({
  type: types.INCREMENT,
  payload: numb,
});

export const decrementCounter = () => ({
  type: types.DECREMENT,
  payload: 3,
});
