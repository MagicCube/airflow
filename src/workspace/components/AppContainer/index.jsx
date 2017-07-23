import PropTypes from 'prop-types';
import React, { Component } from 'react';

import { getAppElement } from '../../../apps';

import './index.less';

export default class AppContainer extends Component {
  static propTypes = {
    appId: PropTypes.string,
  }

  static defaultProps = {
    appId: null
  }

  render() {
    const { appId } = this.props;
    const app = getAppElement(appId);
    return (
      <div className="af-workspace-app-container">
        { app }
      </div>
    );
  }
}
