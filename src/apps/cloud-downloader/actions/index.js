import axios from 'axios';

import createActions from '../../../actions/createActions';
import meta from '../meta';

export default createActions(meta.id, {
  async loadTasks() {
    const tasks = (await axios.get('/api/download/task')).data;
    return tasks;
  }
});
