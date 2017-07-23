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
      <li id={task.gid} className={`cd-task-list-item ${taskUtil.getStatus(task)}`}>
        <div className="icon">
          <i className={`fa ${taskUtil.getIcon(task)}`} />
        </div>
        <div className="info">
          <div className="name">{taskUtil.getName(task)}</div>
          <div className="total-length">{taskUtil.getTotalLength(task)}</div>
        </div>
        <ProgressBar completed={task.completedLength} total={task.totalLength} />
      </li>
    );
  }
}
