const Aria2 = require('aria2');
const config = require('config').get('aria2');
const log = require('../log');

const POLLING_INTERVAL = 3000;
const MAX_COUNT = 99999;

let aria2 = null;
let tasks = [];
let polling = false;

const KEYS = ['bittorrent', 'dir', 'files', 'gid', 'completedLength', 'connections', 'downloadSpeed', 'errorCode', 'errorMessage', 'numSeeders', 'status', 'totalLength'];

function addTask(task) {
  tasks[task.gid] = task;
  tasks.push(task);
  return task;
}

function mergeTasks(latestTasks) {
  const results = [];
  latestTasks.forEach((latestTask) => {
    let task = tasks[latestTask.gid];
    if (!task) {
      task = addTask(latestTask);
    }
    Object.assign(task, latestTask);
    results.push(task);
  });
  return results;
}

async function updateTask(gid) {
  let task = tasks[gid];
  if (!task) {
    task = {
      gid
    };
    addTask(task);
  }

  let latestTask = null;
  try {
    latestTask = await aria2.tellStatus(gid, KEYS);
    Object.assign(task, latestTask);
  } catch (e) {
    log.error(e);
  }
}

async function updateActiveTasks() {
  const activeTasks = await aria2.tellActive(KEYS);
  const results = mergeTasks(activeTasks);
  return results;
}

async function syncTasks() {
  stopPolling();
  const [activeTasks, waitingTasks, stoppedTasks] = await Promise.all([
    aria2.tellActive(KEYS),
    aria2.tellWaiting(0, MAX_COUNT, KEYS),
    aria2.tellStopped(0, MAX_COUNT, KEYS)
  ]);
  if (activeTasks.length || waitingTasks.lenght) {
    startPolling();
  }
  tasks = [];
  activeTasks.forEach(addTask);
  waitingTasks.forEach(addTask);
  stoppedTasks.forEach(addTask);
}

function startPolling() {
  if (!polling) {
    polling = true;
    poll();
  }
}

function stopPolling() {
  polling = false;
}

async function poll() {
  const activeTasks = await updateActiveTasks();
  if (activeTasks.length === 0) {
    stopPolling();
    const waitingTasks = await aria2.tellWaiting(0, MAX_COUNT, KEYS);
    mergeTasks(waitingTasks);
    const stoppedTasks = await aria2.tellStopped(0, MAX_COUNT, KEYS);
    mergeTasks(stoppedTasks);
  } else {
    polling = true;
    setTimeout(poll, POLLING_INTERVAL);
  }
}

function isError(task) {
  return task.errorCode && parseInt(task.errorCode, 0);
}

function isDownloading(task) {
  return !isError(task) && !isDownloaded(task);
}

function isDownloaded(task) {
  if (isError(task)) {
    return false;
  }
  return task.status === 'complete' || task.completedLength === task.totalLength;
}

function handleTaskEvent({ gid }) {
  updateTask(gid);
}

function handleDownloadStart({ gid }) {
  handleTaskEvent({ gid });
  startPolling();
}

function handleBtDownloadComplete({ gid }) {
  handleTaskEvent({ gid });
  aria2.remove(gid);
}

module.exports = {
  getTasks(filter) {
    if (!filter) {
      return tasks;
    } else {
      return tasks.filter((task) => {
        if (filter === 'downloading') {
          return isDownloading(task);
        } else if (filter === 'downloaded') {
          return isDownloaded(task);
        } else if (filter === 'error') {
          return isError(task);
        } else {
          return false;
        }
      });
    }
  },

  async setup() {
    aria2 = new Aria2(config);
    aria2.onDownloadStart = handleDownloadStart;
    aria2.onDownloadStop = handleTaskEvent;
    aria2.onDownloadComplete = handleTaskEvent;
    aria2.onBtDownloadComplete = handleBtDownloadComplete;
    aria2.onDownloadError = handleTaskEvent;
  },

  async start() {
    log.info('Starting download service...');
    log.info(`Connecting to ${config.host}:${config.port}${config.path} ...`);
    await aria2.open();
    const version = await aria2.getVersion();
    log.info('Connected.');
    log.info(`Version of remote Aria2 server: ${version.version}`);
    log.info('Download service is now running.');
    await syncTasks();
  }
};
