import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { getAppElement } from '../../../apps';

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
