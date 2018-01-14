import * as types from './types';
// store.getState() * don't overuse it
// import store from '../';

// Async Action
export const onStoreResult = (cnt, dispatch) => {
  setTimeout(() => {
    dispatch({
      type: types.STORE_RESULT,
      payload: cnt,
    });
  }, 700);
};

export const onDeleteResult = identifier => ({
  type: types.DELETE_RESULT,
  payload: identifier,
});
