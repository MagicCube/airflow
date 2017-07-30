import createActions from '../../../actions/createActions';
import * as api from '../api';
import meta from '../meta';

export default createActions(meta.id, {
  createTask: api.createTask,
  loadTasks: api.getTasks
});
