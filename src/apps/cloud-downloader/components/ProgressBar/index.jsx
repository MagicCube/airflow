import cn from 'classnames';
import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';

import './index.less';

export default class ProgressBar extends PureComponent {
  static propTypes = {
    completed: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired
  }

  render() {
    const { completed, total } = this.props;
    const percentage = `${(Math.round((completed / total) * 10000) / 100)}%`;
    return (
      <div className={cn('cd-progress-bar', { completed: (percentage === '100%') })}>
        <div className="block" style={{ width: percentage }} />
        <div className="percentage">{percentage}</div>
      </div>
    );
  }
}
