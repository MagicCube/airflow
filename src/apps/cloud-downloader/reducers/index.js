import { handleActions } from 'redux-actions';
import actions from '../actions';

const initialState = {
  tasks: [],
  error: null
};

export default handleActions({
  [actions.loadTasks](state, { error, payload }) {
    if (!error) {
      return {
        ...state,
        tasks: payload,
        error: null
      };
    } else {
      return {
        ...state,
        error: payload
      };
    }
  }
}, initialState);
