import { compose } from 'redux';

import middlewares from './middlewares';

const DEV_MODE = process.env.NODE_ENV === 'development';

let composeEnhancers = null;
if (DEV_MODE) {
  composeEnhancers = (typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__)
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : compose;
} else {
  composeEnhancers = compose;
}

export default composeEnhancers(
  middlewares
);
