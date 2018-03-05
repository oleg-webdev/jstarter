import { all } from 'redux-saga/effects';
import { watchIncrement } from './counter';

export default function* rootSaga() {
  yield all([
    watchIncrement(),
  ]);
}
