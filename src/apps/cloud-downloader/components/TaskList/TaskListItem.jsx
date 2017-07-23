import PropTypes from 'prop-types';
import React, { Component } from 'react';

import { getTaskName, getTotalLength } from '../../utils/task';

export default class TaskListItem extends Component {
  static propTypes = {
    task: PropTypes.shape({
      gid: PropTypes.string,
    }).isRequired
  }

  render() {
    const { task } = this.props;
    console.log(task);
    return (
      <li id={task.gid} className="cd-task-list-item">
        <div className="icon">
          <i className="fa fa-download" />
        </div>
        <div className="info">
          <div className="name">{getTaskName(task)}</div>
          <div className="total-length">{getTotalLength(task)}</div>
        </div>
      </li>
    );
  }
}
