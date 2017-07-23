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
    this.props.actions.loadTasks(this.props.filter);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.filter !== this.props.filter) {
      this.props.actions.loadTasks(this.props.filter);
    }
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
