import React, { PureComponent } from 'react';

import './index.less';

export default class NavList extends PureComponent {
  state = {}

  render() {
    return (
      <nav className="cd-nav-list">
        <h2>我的下载器</h2>
        <ul>
          <li className="selected">
            <i className="fa fa-arrow-circle-down" />
            <span>正在下载</span>
          </li>
          <li>
            <i className="fa fa-check-circle" />
            <span>已下载</span>
          </li>
          <li>
            <i className="fa fa-exclamation-circle" />
            <span>下载失败</span>
          </li>
        </ul>
      </nav>
    );
  }
}
