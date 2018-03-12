import { all } from 'redux-saga/effects';
import { watchResult } from './result/saga';

export default function* rootSaga() {
  yield all([
    watchResult(),
  ]);
}
