import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';

import actions from '../../actions';
import connect from '../../connect';
import NavList from '../NavList';

import './index.less';

@connect(
  state => ({ ...state }),
  dispatch => ({ actions: bindActionCreators(actions, dispatch) })
)
export default class App extends PureComponent {
  static propTypes = {
    selectedPath: PropTypes.string.isRequired,
    actions: PropTypes.shape({
      selectPath: PropTypes.func
    }).isRequired
  }

  handleNavListSelectionChange = ({ path }) => {
    this.props.actions.selectPath(path);
  }

  render() {
    const { selectedPath } = this.props;
    return (
      <div className="cd-app">
        <aside className="cd-side-bar">
          <NavList selectedPath={selectedPath} onSelectionChange={this.handleNavListSelectionChange} />
        </aside>
        <main className="cd-content">
          {name}
        </main>
      </div>
    );
  }
}
