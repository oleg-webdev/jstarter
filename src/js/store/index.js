import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootSaga from './rootSaga';
import counterReducer from './counter';
import resultReducer from './result';

const rootReducer = combineReducers({
  counterReducer, resultReducer,
});

/* eslint-disable no-underscore-dangle */
const composedEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];
const store = createStore(
  rootReducer, composedEnhancers(applyMiddleware(...middlewares)),
);
sagaMiddleware.run(rootSaga);
/* eslint-enable */

export default store;
