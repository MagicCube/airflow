import React, { PureComponent } from 'react';
import { Redirect, Route, Switch, withRouter } from 'react-router-dom';

import apps from '../../../apps';
import AppBar from '../AppBar';
import AppNavList from '../AppNavList';

import './index.less';

@withRouter
export default class Workspace extends PureComponent {
  render() {
    return (
      <div className="af-workspace">
        <AppBar />
        <div className="af-workspace-body">
          <aside className="af-workspace-side-bar">
            <AppNavList />
          </aside>
          <div className="af-workspace-content">
            <Switch>
              <Route exact path="/">
                <Redirect to="/cloud-downloader" />
              </Route>
              {
                apps.map(app => (
                  <Route key={app.id} path={`${app.meta.path}`} component={app.Component} />
                ))
              }
            </Switch>
          </div>
        </div>
      </div>
    );
  }
}
