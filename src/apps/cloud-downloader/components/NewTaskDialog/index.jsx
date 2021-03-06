import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';

import Dialog from '../../../../workspace/components/Dialog';

import './index.less';

export default class NewTaskDialog extends PureComponent {
  static propTypes = {
    onSubmit: PropTypes.func,
    onCloseButtonClick: PropTypes.func
  }

  static defaultProps = {
    onSubmit: noop,
    onCloseButtonClick: noop
  }

  constructor(...args) {
    super(...args);
    this.state = {
      uri: '',
      path: '/media/pi/HENRY-2TB/@mv'
    };
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
    this.props.onSubmit({
      uri: this.state.uri,
      path: this.state.path
    });
  }

  render() {
    return (
      <Dialog
        title="新建下载任务"
        className="cd-new-task-dialog"
        width={680}
        height={320}
        onCloseButtonClick={this.props.onCloseButtonClick}
      >
        <form onSubmit={this.handleFormSubmit}>
          <div className="control-group">
            <label className="control-label" htmlFor="uri">链接地址:</label>
            <div className="controls">
              <input
                type="text"
                id="uri"
                className="input"
                autoComplete="off"
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
                autoComplete="on"
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


function noop() {

}
