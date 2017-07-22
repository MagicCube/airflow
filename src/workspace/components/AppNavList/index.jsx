import React, { PureComponent } from 'react';

import './index.less';

export default class AppNavList extends PureComponent {
  render() {
    return (
      <nav className="af-workspace-app-nav-list">
        <ul>
          <li title="发现"><i className="fa fa-eye" /></li>
          <li title="媒体库"><i className="fa fa-film" /></li>
          <li title="云下载"><i className="fa fa-cloud-download" /></li>
        </ul>
      </nav>
    );
  }
}
