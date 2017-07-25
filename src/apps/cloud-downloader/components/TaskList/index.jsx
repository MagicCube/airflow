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
    return (
      <div className="cd-task-list">
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
