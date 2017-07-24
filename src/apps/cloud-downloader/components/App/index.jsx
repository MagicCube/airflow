import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import Dialog from '../../../../workspace/components/Dialog';
import Fab from '../../../../workspace/components/Fab';
import meta from '../../meta';
import NavList from '../NavList';
import TaskList from '../TaskList';

import './index.less';

export default class App extends Component {
  render() {
    return (
      <div className="cd-app">
        <Fab title="新建下载任务" icon="fa-plus" />
        <aside className="cd-side-bar">
          <NavList />
        </aside>
        <main className="cd-content">
          <Switch>
            <Route exact path={meta.path}>
              <Redirect to={`${meta.path}/downloading`} />
            </Route>
            <Route path={`${meta.path}/:filter`} component={matchParams(TaskList)} />
          </Switch>
        </main>
        <Switch>
          <Route path={`${meta.path}/downloading/new`}>
            <Dialog title="Henry" />
          </Route>
        </Switch>
      </div>
    );
  }
}

function matchParams(WrappedComponent) {
  const Hoc = ({ match }) => {
    const params = match.params;
    return <WrappedComponent {...params} />;
  };
  Hoc.propTypes = {
    match: PropTypes.shape({
      params: PropTypes.shape({})
    })
  };
  return Hoc;
}
