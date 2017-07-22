import React, { Component } from 'react';
import PropTypes from 'prop-types';

import AppBar from '../AppBar';
import AppContainer from '../AppContainer';
import AppNavList from '../AppNavList';

import './index.less';

export default class Workspace extends Component {
  static propTypes = {
    selectedAppId: PropTypes.string,
    actions: PropTypes.shape({
      selectApp: PropTypes.func
    }).isRequired
  }

  static defaultProps = {
    selectedAppId: null
  }

  handleAppNavListSelectionChange = ({ id }) => {
    this.props.actions.selectApp(id);
  }

  render() {
    const { selectedAppId } = this.props;
    return (
      <div className="af-workspace">
        <AppBar />
        <div className="af-workspace-body">
          <aside className="af-workspace-side-bar">
            <AppNavList selectedId={selectedAppId} onSelectionChange={this.handleAppNavListSelectionChange} />
          </aside>
          <div className="af-workspace-content">
            <AppContainer appId={selectedAppId} />
          </div>
        </div>
      </div>
    );
  }
}
