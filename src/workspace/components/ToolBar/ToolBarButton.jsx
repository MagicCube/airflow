import cn from 'classnames';
import PropTypes from 'prop-types';
import React, { Component } from 'react';

import './ToolBarButton.less';

export default class ToolBarButton extends Component {
  static propTypes = {
    icon: PropTypes.string,
    title: PropTypes.title,
    onClick: PropTypes.func
  }

  static defaultProps = {
    icon: null,
    title: null,
    onClick: noop
  }

  render() {
    const { icon, title, onClick } = this.props;
    return (
      <li className="af-workspace-tool-bar-button" title={title} onClick={onClick}>
        <a><i className={cn('fa', icon)} /></a>
      </li>
    );
  }
}


function noop() {

}
