import filesize from 'filesize';

function isError(task) {
  return task.errorCode && parseInt(task.errorCode, 0);
}

function isDownloaded(task) {
  if (isError(task)) {
    return false;
  }
  return task.status === 'complete' || task.completedLength === task.totalLength;
}

export function getTaskName(task) {
  if (task.bittorrent && task.bittorrent.info && task.bittorrent.info.name) {
    return task.bittorrent.info.name;
  } else if (task.files.length) {
    return task.files[0].path;
  } else {
    return 'N/A';
  }
}

export function getTaskStatus(task) {
  if (isError(task)) {
    return 'error';
  } else if (isDownloaded(task)) {
    return 'downloaded';
  } else {
    return task.status;
  }
}

export function getTotalLength(task) {
  return filesize(task.totalLength);
}
