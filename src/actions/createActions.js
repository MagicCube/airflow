import { createAction } from 'redux-actions';

export default function createActions(path, actionCreators) {
  const actionNames = Object.keys(actionCreators);
  return actionNames.reduce((actions, actionName) => {
    actions[actionName] = createAction(`path/${actionName}`, actionCreators[actionName]);
    return actions;
  }, {});
}
