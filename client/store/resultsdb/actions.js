import * as types from './types';
// store.getState() * don't overuse it
// import store from '../';

function storeAction(cnt) {
  return {
    type: types.STORE_RESULT,
    payload: cnt,
  };
}

// Async Action
export const onStoreResult = (cnt) => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(storeAction(cnt));
    }, 700);
  };
};

export const onDeleteResult = identifier => ({
  type: types.DELETE_RESULT,
  payload: identifier,
});
