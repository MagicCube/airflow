import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import React, { Component } from 'react';

import { getAppMetaList } from '../../../apps';

import './index.less';

const apps = getAppMetaList();

export default class AppNavList extends Component {
  static propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string,
      title: PropTypes.string,
      icon: PropTypes.icon
    })),
  }

  static defaultProps = {
    items: apps
  }

  render() {
    const { items } = this.props;
    return (
      <nav className="af-workspace-app-nav-list">
        <ul>
          {
            items.map(item => (
              <li
                key={item.id}
                id={item.id}
                title={item.title}
              >
                <NavLink to={`${item.path}/`} activeClassName="selected">
                  <i className={item.icon} />
                </NavLink>
              </li>
            ))
          }
        </ul>
      </nav>
    );
  }
}
