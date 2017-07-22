import { createStore, applyMiddleware } from 'redux';
import promiseMiddleware from 'redux-promise';

import reducer from './reducer';

export default function configStore() {
  return createStore(
    reducer,
    undefined,
    applyMiddleware(promiseMiddleware)
  );
}
