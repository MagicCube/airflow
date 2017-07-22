import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export default class App extends PureComponent {
  static propTypes = {
    name: PropTypes.string.isRequired
  }

  render() {
    const { name } = this.props;
    return (
      <div>
        Hello, 这是{name}
      </div>
    );
  }
}
