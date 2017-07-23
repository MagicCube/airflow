import React, { Component } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import NavList from '../NavList';

import './index.less';

export default class App extends Component {
  render() {
    return (
      <div className="cd-app">
        <aside className="cd-side-bar">
          <NavList />
        </aside>
        <main className="cd-content">
          <Switch>
            <Route exact path="/cloud-downloader">
              <Redirect to="/cloud-downloader/downloading" />
            </Route>
          </Switch>
        </main>
      </div>
    );
  }
}
