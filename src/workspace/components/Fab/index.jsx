import cn from 'classnames';
import PropTypes from 'prop-types';
import React, { Component } from 'react';

import './index.less';

export default class Fab extends Component {
  static propTypes = {
    icon: PropTypes.string,
    onClick: PropTypes.func
  }

  static defaultProps = {
    icon: null,
    onClick: noop
  }

  render() {
    const { icon, onClick } = this.props;
    return (
      <a role="presentation" className="af-workspace-fab" onClick={onClick}>
        <i className={cn('fa', icon)} />
      </a>
    );
  }
}


function noop() {

}
