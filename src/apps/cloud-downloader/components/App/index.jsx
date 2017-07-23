import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import connect from '../../connect';

import './index.less';

@connect(
  state => ({ ...state })
)
export default class App extends PureComponent {
  static propTypes = {
    name: PropTypes.string.isRequired
  }

  render() {
    const { name } = this.props;
    return (
      <div className="cd-app">
        <aside className="cd-side-bar">
          SideBar
        </aside>
        <main className="cd-content">
          {name}
        </main>
      </div>
    );
  }
}
