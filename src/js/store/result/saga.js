import { delay } from 'redux-saga';
import { put, takeEvery } from 'redux-saga/effects';
import * as actions from './types';

/* eslint-disable import/prefer-default-export, no-unused-vars */
export function* watchResult() {
  yield takeEvery(actions.STORE_RESULT_TRIGGER, function* (action) {
    yield delay(2000);

    yield put({
      type: actions.STORE_RESULT_RESPONSE,
      payload: action.payload,
    });
  });
}
