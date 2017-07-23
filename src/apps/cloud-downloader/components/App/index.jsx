import { bindActionCreators } from 'redux';
import React, { Component } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import actions from '../../actions';
import connect from '../../connect';
import NavList from '../NavList';

import './index.less';

@connect(
  state => ({ ...state }),
  dispatch => ({ actions: bindActionCreators(actions, dispatch) })
)
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
