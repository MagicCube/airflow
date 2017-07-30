import { createStore } from 'redux';

import reducer from './reducer';
import enhancer from './enhancer';

export function configStore(initialState) {
  const store = createStore(
    reducer,
    initialState,
    enhancer
  );
  return store;
}
