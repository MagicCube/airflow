import React, { PureComponent } from 'react';

import './index.less';

export default class AppBar extends PureComponent {
  render() {
    return (
      <div className="af-workspace-app-bar">
        <h1>
          <i className="logo-icon fa fa-bars" />
          <span className="airflow-title">Airflow</span>
        </h1>
      </div>
    );
  }
}
