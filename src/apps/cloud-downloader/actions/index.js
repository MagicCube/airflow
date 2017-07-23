import axios from 'axios';

import createActions from '../../../actions/createActions';
import meta from '../meta';

export default createActions(meta.id, {
  async loadTasks(filter = 'downloading') {
    const tasks = (await axios.get('/api/download/task', {
      params: { filter }
    })).data;
    return tasks;
  }
});
