import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import React, { Component } from 'react';

import actions from '../../actions';
import connect from '../../connect';

import TaskListItem from './TaskListItem';

import './index.less';

@connect(
  state => ({ tasks: state.tasks }),
  dispatch => ({ actions: bindActionCreators(actions, dispatch) })
)
export default class TaskList extends Component {
  static propTypes = {
    filter: PropTypes.string,
    tasks: PropTypes.arrayOf(PropTypes.shape({
      gid: PropTypes.string,
    })).isRequired,

    actions: PropTypes.shape({
      loadTasks: PropTypes.func
    }).isRequired
  }

  static defaultProps = {
    filter: null,
    tasks: []
  }

  componentDidMount() {
    this.poll();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.filter !== this.props.filter) {
      this.props.actions.loadTasks(this.props.filter);
    }
  }

  componentWillUnmount() {
    this.clearTimer();
  }

  getFilterName() {
    switch (this.props.filter) {
      case 'downloading':
        return '正在下载';
      case 'downloaded':
        return '已下载';
      case 'error':
        return '下载失败';
      default:
        return '';
    }
  }

  clearTimer() {
    if (this.timer) {
      clearTimeout(this.timer);
      this.timer = null;
    }
  }

  poll() {
    this.clearTimer();
    const { filter } = this.props;
    this.props.actions.loadTasks(filter);
    this.timer = setTimeout(this.poll.bind(this), (filter === 'downloading' ? 3 : 10) * 1000);
  }

  render() {
    const { tasks } = this.props;
    let hint = null;
    if (tasks.length === 0) {
      hint = <div className="hint">没有{this.getFilterName()}的任务</div>;
    }
    return (
      <div className="cd-task-list">
        {hint}
        <ul>
          {
            tasks.map(task => (
              <TaskListItem key={task.gid} task={task} />
            ))
          }
        </ul>
      </div>
    );
  }
}
