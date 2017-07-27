import filesize from 'filesize';
import moment from 'moment';

moment.locale('zh_CN');

export function isError(task) {
  return task.errorCode && parseInt(task.errorCode, 0);
}

export function isDownloaded(task) {
  if (isError(task)) {
    return false;
  }
  return task.status === 'complete' || task.completedLength === task.totalLength;
}

export function isDownloading(task) {
  return !isError(task) && !isDownloaded(task);
}

export function getName(task) {
  if (task.bittorrent && task.bittorrent.info && task.bittorrent.info.name) {
    return task.bittorrent.info.name;
  } else if (task.files.length) {
    const parts = task.files[0].path.split('/');
    return parts[parts.length - 1];
  }
  return 'N/A';
}

export function getStatus(task) {
  if (isError(task)) {
    return 'error';
  } else if (isDownloaded(task)) {
    return 'downloaded';
  } else if (task.status === 'active') {
    return 'downloading';
  }
  return task.status;
}

export function getIcon(task) {
  switch (getStatus(task)) {
    case 'downloading':
      return 'fa-arrow-circle-o-down';
    case 'downloaded':
      return 'fa-check-circle-o';
    case 'error':
      return 'fa-exclamation-triangle';
    case 'paused':
      return 'fa-pause-circle-o';
    case 'waiting':
      return 'fa-clock-o';
    case 'removed':
      return 'fa-trash';
    default:
      return 'fa-question-circle-o';
  }
}

export function getCompletedLength(task) {
  return filesize(task.completedLength);
}

export function getTotalLength(task) {
  return filesize(task.totalLength);
}

export function getDownloadSpeed(task) {
  return `${filesize(task.downloadSpeed)}/s`;
}

export function getRemainingTime(task) {
  if (!isDownloading(task)) {
    return null;
  } else if (task.downloadSpeed === '0') {
    return '等待中';
  }
  return `剩余 ${moment.duration(((task.totalLength - task.completedLength) / task.downloadSpeed) * 1000).humanize()}`;
}
