import { connect } from 'react-redux';
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import { getAppTitleByPath } from '../../../apps';

import './index.less';

@connect(
  state => ({
    location: state.router.location
  })
)
export default class AppBar extends PureComponent {
  static propTypes = {
    location: PropTypes.shape({
      pathname: PropTypes.string
    })
  }

  static defaultProps = {
    location: null
  }

  render() {
    const { location } = this.props;
    let appTitle = null;
    if (location) {
      appTitle = getAppTitleByPath(location.pathname);
      if (appTitle) {
        document.title = `Airflow - ${appTitle}`;
      }
    }
    return (
      <div className="af-workspace-app-bar">
        <h1 className="airflow-title">
          <i className="logo-icon fa fa-bars" />
          <span>Airflow</span>
        </h1>
        <h2 className="app-title">{appTitle}</h2>
      </div>
    );
  }
}
