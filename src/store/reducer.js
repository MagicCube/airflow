import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import { getAppReducers } from '../apps';
import { reducer as workspaceReducer } from '../workspace';

const reducers = getAppReducers();
Object.assign(reducers, {
  workspace: workspaceReducer,
  router: routerReducer
});

export default combineReducers(reducers);
