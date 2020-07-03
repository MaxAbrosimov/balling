import { compose, createStore, applyMiddleware } from 'redux';
import { browserHistory } from 'react-router';
import thunkMiddleware from 'redux-thunk'
import { syncHistoryWithStore } from 'react-router-redux';
import { createLogger } from 'redux-logger';
import rootReducer from './reducers';

//TODO check redux-sage advantages before redux-thunk

const middleware = [
    createLogger(),
    thunkMiddleware
];


const enhancers = compose(
  applyMiddleware(...middleware),
  window.devToolsExtension ? window.devToolsExtension() : f => f
);

/**
* CREATE STORE
*/
const store = createStore(
  rootReducer,
  {},
  enhancers
);

export const history = syncHistoryWithStore(browserHistory, store);

export { store };
