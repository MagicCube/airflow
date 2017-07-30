import axios from 'axios';

export async function createTask(task) {
  const res = await axios.post('/api/download/task', {
    task
  });
  if (res.status === 200) {
    return res.data;
  } else {
    throw new Error(res.statusText);
  }
}

export async function getTasks(filter = 'downloading') {
  const res = await axios.get('/api/download/task', {
    params: { filter }
  });
  if (res.status === 200) {
    return res.data;
  } else {
    throw new Error(res.statusText);
  }
}
