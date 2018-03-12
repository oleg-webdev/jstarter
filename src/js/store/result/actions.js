import * as types from './types';
// store.getState() * don't overuse it
// import store from '../';

// Async Action
export const onStoreResult = result => ({
  type: types.STORE_RESULT_TRIGGER,
  payload: result,
});

export const onDeleteResult = identifier => ({
  type: types.DELETE_RESULT,
  payload: identifier,
});
