import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';

import { getAppMetaList } from '../../../apps';

import './index.less';

const apps = getAppMetaList();

export default class AppNavList extends PureComponent {
  static propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string,
      title: PropTypes.string,
      icon: PropTypes.icon
    })),
    selectedId: PropTypes.string,
    onSelectionChange: PropTypes.func
  }

  static defaultProps = {
    items: apps,
    selectedId: null,
    onSelectionChange: noop
  }

  state = {
    selectedId: this.props.selectedId
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.selectedId !== this.state.selectedId) {
      this.setState({
        selectedId: nextProps.selectedId
      });
    }
  }

  handleItemClick = (e) => {
    const id = e.currentTarget.id;
    this.setState({
      selectedId: id
    }, () => {
      this.props.onSelectionChange({
        id
      });
    });
  }

  render() {
    const { items } = this.props;
    const { selectedId } = this.state;
    return (
      <nav className="af-workspace-app-nav-list">
        <ul>
          {
            items.map(item => (
              <li
                key={item.id}
                id={item.id}
                className={selectedId === item.id ? 'selected' : null}
                title={item.title}
                onClick={this.handleItemClick}
              >
                <i className={item.icon} />
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
