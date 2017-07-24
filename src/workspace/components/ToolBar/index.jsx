import cn from 'classnames';
import PropTypes from 'prop-types';
import React, { Component } from 'react';

import ToolBarButton from './ToolBarButton';

import './index.less';

export default class ToolBar extends Component {
  static propTypes = {
    children: PropTypes.any
  }

  static defaultProps = {
    children: null
  }

  render() {
    const { children } = this.props;
    return (
      <nav className={cn('af-workspace-tool-bar')}>
        <ul>
          {children}
        </ul>
      </nav>
    );
  }
}

export const Button = ToolBarButton;
