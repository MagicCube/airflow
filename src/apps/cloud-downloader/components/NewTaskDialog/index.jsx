import { replace } from 'react-router-redux';
import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';

import connect from '../../connect';
import Dialog from '../../../../workspace/components/Dialog';

import './index.less';

@connect()
export default class NewTaskDialog extends PureComponent {
  static propTypes = {
    dispatch: PropTypes.func.isRequired
  }

  constructor(...args) {
    super(...args);
    this.state = {
      uri: '',
      path: '/media/pi/HENRY-2TB/@mv'
    };
  }

  clearUri() {
    this.setState({
      uri: ''
    });
  }

  handleUriChange = (e) => {
    this.setState({
      uri: e.target.value
    });
  }

  handlePathChange = (e) => {
    this.setState({
      path: e.target.value
    });
  }

  handleFormSubmit = (e) => {
    e.preventDefault();
  }

  handleCloseButtonClick = () => {
    this.clearUri();
    this.props.dispatch(replace('../'));
  }

  render() {
    return (
      <Dialog
        title="新建下载任务"
        className="cd-new-task-dialog"
        width={680}
        height={320}
        onCloseButtonClick={this.handleCloseButtonClick}
      >
        <form onSubmit={this.handleFormSubmit}>
          <div className="control-group">
            <label className="control-label" htmlFor="uri">链接地址:</label>
            <div className="controls">
              <input
                type="text"
                id="uri"
                className="input"
                placeholder="HTTP, HTTPS, FTP 或者磁力链接地址"
                value={this.state.uri}
                onChange={this.handleUriChange}
              />
            </div>
          </div>

          <div className="control-group">
            <label className="control-label" htmlFor="path">本地存储路径:</label>
            <div className="controls">
              <input
                type="text"
                id="path"
                className="input"
                placeholder="相对或绝对路径"
                value={this.state.path}
                onChange={this.handlePathChange}
              />
            </div>
          </div>

          <div className="bottom control-buttons">
            <button className="bigger primary button">添加到下载任务队列</button>
          </div>
        </form>
      </Dialog>
    );
  }
}
