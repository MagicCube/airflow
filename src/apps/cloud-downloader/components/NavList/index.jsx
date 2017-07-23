import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';

import './index.less';

export default class NavList extends PureComponent {
  static propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
      path: PropTypes.string,
      text: PropTypes.string
    })).isRequired,
    selectedPath: PropTypes.string,
    onSelectionChange: PropTypes.func
  }

  static defaultProps = {
    items: [
      { path: 'downloading', text: '正在下载', icon: 'fa-arrow-circle-down' },
      { path: 'downloaded', text: '已下载', icon: 'fa-check-circle' },
      { path: 'error', text: '下载失败', icon: 'fa-exclamation-circle' }
    ],
    selectedPath: null,
    onSelectionChange: noop
  }

  state = {
    selectedPath: this.props.selectedPath
  }

  handleItemClick = (e) => {
    const path = e.currentTarget.id;
    this.setState({
      selectedPath: path
    }, () => {
      this.props.onSelectionChange({
        path
      });
    });
  }

  render() {
    const { items } = this.props;
    const { selectedPath } = this.state;
    return (
      <nav className="cd-nav-list">
        <h2>我的下载器</h2>
        <ul>
          {
            items.map(item => (
              <li
                key={item.path}
                id={item.path}
                className={item.path === selectedPath ? 'selected' : null}
                onClick={this.handleItemClick}
              >
                <i className={`fa ${item.icon}`} />
                <span>{item.text}</span>
              </li>
            ))
          }
        </ul>
      </nav>
    );
  }
}


function noop() {

}
