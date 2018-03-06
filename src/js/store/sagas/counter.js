import { delay } from 'redux-saga';
import { put, takeEvery } from 'redux-saga/effects';
import * as actions from '../actions/types';

/* eslint-disable import/prefer-default-export, no-unused-vars */
export function* watchIncrement() {
  yield takeEvery(actions.REQUEST_STORE_RESULT, function* (action) {
    yield delay(2000);

    yield put({
      type: actions.STORE_RESULT,
      payload: action.payload,
    });
  });
}
