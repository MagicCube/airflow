import cn from 'classnames';
import PropTypes from 'prop-types';
import React, { Component } from 'react';

import './index.less';

export default class Dialog extends Component {
  static propTypes = {
    className: PropTypes.string,
    title: PropTypes.string,
    children: React.PropTypes.element,
    width: React.PropTypes.number,
    height: React.PropTypes.number,
    onCloseButtonClick: React.PropTypes.func
  }

  static defaultProps = {
    className: null,
    title: null,
    children: null,
    width: 540,
    height: 600,
    onCloseButtonClick: noop
  }

  handleCloseButtonClick = () => {
    this.props.onCloseButtonClick();
  }

  render() {
    const { className, title, children, width, height } = this.props;
    return (
      <div className="af-workspace-dialog-container">
        <div className={cn('af-workspace-dialog', className)} style={{ width, height }}>
          <header>
            <h3>{title}</h3>
            <a className="close-button" title="关闭" onClick={this.handleCloseButtonClick}><i className="fa fa-times" /></a>
          </header>
          <main>
            {children}
          </main>
        </div>
      </div>
    );
  }
}


function noop() {

}
