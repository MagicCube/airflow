import React, { PureComponent } from 'react';

import AppBar from '../AppBar';
import SideBar from '../SideBar';

import './index.less';

export default class Workspace extends PureComponent {
  render() {
    return (
      <div className="af-workspace">
        <AppBar />
        <div className="af-workspace-body">
          <SideBar />
          <div className="af-workspace-content">
            Content
          </div>
        </div>
      </div>
    );
  }
}
