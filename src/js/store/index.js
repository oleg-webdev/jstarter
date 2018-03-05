import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootSaga from './sagas';
import counterReducer from './reducers/counter';
import resultReducer from './reducers/result';
// import crashReporter from './middlewares/logger';

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
