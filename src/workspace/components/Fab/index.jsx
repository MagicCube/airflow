import cn from 'classnames';
import PropTypes from 'prop-types';
import React, { Component } from 'react';

import './index.less';

export default class Fab extends Component {
  static propTypes = {
    icon: PropTypes.string,
    title: PropTypes.string,
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
      <a role="presentation" className="af-workspace-fab" title={title} onClick={onClick}>
        <i className={cn('fa', icon)} />
      </a>
    );
  }
}


function noop() {

}
