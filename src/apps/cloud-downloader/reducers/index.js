import { handleActions } from 'redux-actions';
import actions from '../actions';

const initialState = {
  tasks: []
};

export default handleActions({
  [actions.loadTasks](state, { payload: tasks }) {
    return {
      ...state,
      tasks
    };
  }
}, initialState);
