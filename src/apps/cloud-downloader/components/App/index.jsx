import { bindActionCreators } from 'redux';
import React, { PureComponent } from 'react';
import { Redirect, Route } from 'react-router-dom';

import actions from '../../actions';
import connect from '../../connect';
import NavList from '../NavList';

import './index.less';

@connect(
  state => ({ ...state }),
  dispatch => ({ actions: bindActionCreators(actions, dispatch) })
)
export default class App extends PureComponent {
  render() {
    return (
      <div className="cd-app">
        <aside className="cd-side-bar">
          <NavList />
        </aside>
        <main className="cd-content">
          <Route exact path="/cloud-downloader">
            <Redirect to="/cloud-downloader/downloading" />
          </Route>
        </main>
      </div>
    );
  }
}
