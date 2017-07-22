import { combineReducers } from 'redux';

import { getAppReducers } from '../apps';
import { reducer as workspaceReducer } from '../workspace';

const reducers = getAppReducers();
Object.assign(reducers, {
  workspace: workspaceReducer
});

export default combineReducers(reducers);
