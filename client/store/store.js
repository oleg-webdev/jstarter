import {
  createStore, combineReducers, applyMiddleware,
} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import counterReducer from './counter/reducer';
import resultReducer from './resultsdb/reducer';
// import crashReporter from './middleware/crashReporter';

const rootReducer = combineReducers({
  counterReducer, resultReducer,
});

export default function initializeStore() {
  return createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk)),
  );
}
