import React, { PureComponent } from 'react';

export default class App extends PureComponent {
  render() {
    return (
      <div>
        Hello, 这是发现
      </div>
    );
  }
}

export const meta = {
  id: 'discovery',
  path: '/discovery',
  title: '发现',
  icon: 'fa fa-eye'
};
