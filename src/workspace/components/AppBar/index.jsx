import React from 'react';

import './index.less';

export default function () {
  return (
    <div className="af-workspace-app-bar">
      <div className="logo">
        <h1>
          <i className="logo-icon fa fa-bars" />
          <span className="logo-text">Airflow</span>
        </h1>
      </div>
    </div>
  );
}
