import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import { getAppTitle } from '../../../apps';

import './index.less';

export default class AppBar extends PureComponent {
  static propTypes = {
    appId: PropTypes.string.isRequired
  }

  render() {
    const { appId } = this.props;
    const appTitle = getAppTitle(appId);
    return (
      <div className="af-workspace-app-bar">
        <h1>
          <i className="logo-icon fa fa-bars" />
          <span className="airflow-title">Airflow</span>
        </h1>
        <h2 className="app-title">{appTitle}</h2>
      </div>
    );
  }
}
