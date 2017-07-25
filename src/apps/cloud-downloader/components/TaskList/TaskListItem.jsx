import cn from 'classnames';
import PropTypes from 'prop-types';
import React, { Component } from 'react';

import * as taskUtil from '../../utils/task';
import ProgressBar from '../ProgressBar';

export default class TaskListItem extends Component {
  static propTypes = {
    task: PropTypes.shape({
      gid: PropTypes.string,
    }).isRequired
  }

  render() {
    const { task } = this.props;
    return (
      <li id={task.gid} className={cn('cd-task-list-item', taskUtil.getStatus(task))}>
        <div className="icon">
          <i className={cn('fa', taskUtil.getIcon(task))} />
        </div>
        <div className="info">
          <div className="name">{taskUtil.getName(task)}</div>
          <div className="total-length">{`${taskUtil.isDownloading(task) ? `${taskUtil.getCompletedLength(task)} / ` : ''}`}{taskUtil.getTotalLength(task)}</div>
        </div>
        <div className="progress">
          <ProgressBar completed={parseInt(task.completedLength, 0)} total={parseInt(task.totalLength, 0)} />
          <div className="remaining-time">{taskUtil.getRemainingTime(task)}</div>
        </div>
        <div className="download-speed">{taskUtil.getDownloadSpeed(task)}</div>
      </li>
    );
  }
}
