import { handleActions } from 'redux-actions';

import actions from '../actions';

const initialState = {
  selectedAppId: 'cloudDownloader'
};

export default handleActions({
  [actions.selectApp](state, { payload: appId }) {
    return {
      ...state,
      selectedAppId: appId
    };
  }
}, initialState);
