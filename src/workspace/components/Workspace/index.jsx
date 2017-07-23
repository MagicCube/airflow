import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import { Route, Switch } from 'react-router-dom';

import apps from '../../../apps';
import AppBar from '../AppBar';
import AppNavList from '../AppNavList';

import './index.less';

export default class Workspace extends PureComponent {
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
        <AppBar appId={selectedAppId} />
        <div className="af-workspace-body">
          <aside className="af-workspace-side-bar">
            <AppNavList />
          </aside>
          <div className="af-workspace-content">
            <Switch>
              {
                apps.map(app => (
                  <Route key={app.id} path={`/${app.meta.path}`} component={app.Component} />
                ))
              }
            </Switch>
          </div>
        </div>
      </div>
    );
  }
}
