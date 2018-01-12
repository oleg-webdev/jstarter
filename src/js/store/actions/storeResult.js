import * as types from './types';

// Async Action
export const onStoreResult = (cnt, dispatch) => {
  setTimeout(() => {
    dispatch({
      type: types.STORE_RESULT,
      payload: cnt,
    });
  }, 500);
};

export const onDeleteResult = identifier => ({
  type: types.DELETE_RESULT,
  payload: identifier,
});
