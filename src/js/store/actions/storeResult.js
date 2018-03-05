import * as types from './types';
// store.getState() * don't overuse it
// import store from '../';

// Async Action
export const onStoreResult = (cnt, dispatch) => {
  dispatch({
    type: types.REQUEST_STORE_RESULT,
    payload: cnt,
  });
};

export const onDeleteResult = identifier => ({
  type: types.DELETE_RESULT,
  payload: identifier,
});
