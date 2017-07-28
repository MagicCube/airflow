import { routerMiddleware } from 'react-router-redux';
import { applyMiddleware, createStore, compose } from 'redux';
import promiseMiddleware from 'redux-promise';

import history from '../history';
import reducer from './reducer';

const DEV_MODE = process.env.NODE_ENV !== 'production';

export function configStore(initialState) {
  const historyRouterMiddleware = routerMiddleware(history);

  let composeEnhancers = null;
  if (DEV_MODE) {
    composeEnhancers = (typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__)
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      : compose;
  } else {
    composeEnhancers = compose;
  }

  const store = createStore(
    reducer,
    initialState,
    composeEnhancers(
      applyMiddleware(
        historyRouterMiddleware,
        promiseMiddleware
      )
    )
  );

  return store;
}
