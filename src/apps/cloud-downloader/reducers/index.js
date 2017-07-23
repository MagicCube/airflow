import { handleActions } from 'redux-actions';

import actions from '../actions';

const initialState = {
  selectedPath: 'downloading'
};

export default handleActions({
  [actions.selectPath](state, { payload: selectedPath }) {
    return {
      ...state,
      selectedPath
    };
  }
}, initialState);
