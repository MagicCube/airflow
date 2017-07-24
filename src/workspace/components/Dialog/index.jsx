import cn from 'classnames';
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './index.less';

export default class Dialog extends Component {
  static propTypes = {
    className: PropTypes.string,
    title: PropTypes.string,
    children: React.PropTypes.element,
    width: React.PropTypes.number,
    height: React.PropTypes.number
  }

  static defaultProps = {
    className: null,
    title: null,
    children: null,
    width: 540,
    height: 600
  }

  render() {
    const { className, title, children, width, height } = this.props;
    return (
      <div className="af-workspace-dialog-container">
        <div className={cn('af-workspace-dialog', className)} style={{ width, height }}>
          <header>
            <h3>{title}</h3>
          </header>
          <main>
            {children}
          </main>
        </div>
      </div>
    );
  }
}
