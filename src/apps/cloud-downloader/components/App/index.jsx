import { replace } from 'react-router-redux';
import { Redirect, Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import React, { Component } from 'react';

import connect from '../../connect';
import NewTaskDialog from '../../components/NewTaskDialog';
import Fab from '../../../../workspace/components/Fab';
import meta from '../../meta';
import NavList from '../NavList';
import TaskList from '../TaskList';

import './index.less';

function matchParams(WrappedComponent) {
  const Hoc = ({ match }) => {
    const params = match.params;
    return <WrappedComponent {...params} />;
  };
  Hoc.propTypes = {
    match: PropTypes.shape({
      params: PropTypes.shape({})
    }).isRequired
  };
  return Hoc;
}

class App extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired
  }

  handleFabClick = () => {
    this.props.dispatch(replace(`${meta.path}/downloading/new`));
  }

  handleNewTaskDialogSubmit = ({ uri, path }) => {
    console.log(uri, path);
  }

  render() {
    return (
      <div className="cd-app">
        <Fab title="新建下载任务" icon="fa-plus" onClick={this.handleFabClick} />
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
            <NewTaskDialog onSubmit={this.handleNewTaskDialogSubmit} />
          </Route>
        </Switch>
      </div>
    );
  }
}

export default connect(state => ({ router: state.router }))(App);
