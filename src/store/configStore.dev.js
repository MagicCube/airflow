import promiseMiddleware from 'redux-promise';
import { createStore, applyMiddleware, compose } from 'redux';

import reducer from './reducer';

export default function configStore() {
  const composeEnhancers = (typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__)
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : compose;

  const store = createStore(
    reducer,
    undefined,
    composeEnhancers(
      applyMiddleware(
        promiseMiddleware
      )
    )
  );

  return store;
}
