import { NavLink } from 'react-router-dom';
import cn from 'classnames';
import PropTypes from 'prop-types';
import React, { Component } from 'react';

import './index.less';

export default class NavList extends Component {
  static propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
      path: PropTypes.string,
      text: PropTypes.string
    })).isRequired
  }

  static defaultProps = {
    items: [
      { path: 'downloading', text: '正在下载', icon: 'fa-arrow-circle-down' },
      { path: 'downloaded', text: '已下载', icon: 'fa-check-circle' },
      { path: 'error', text: '下载失败', icon: 'fa-exclamation-circle' }
    ]
  }

  render() {
    const { items } = this.props;
    return (
      <nav className="cd-nav-list">
        <h2>我的下载器</h2>
        <ul>
          {
            items.map(item => (
              <li
                key={item.path}
                id={item.path}
              >
                <NavLink to={`/cloud-downloader/${item.path}`} activeClassName="selected">
                  <i className={cn('fa', item.icon)} />
                  <span>{item.text}</span>
                </NavLink>
              </li>
            ))
          }
        </ul>
      </nav>
    );
  }
}
