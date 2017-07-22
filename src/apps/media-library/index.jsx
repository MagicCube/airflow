import React, { PureComponent } from 'react';

export default class App extends PureComponent {
  render() {
    return (
      <div>
        Hello，这是媒体库
      </div>
    );
  }
}

export const meta = {
  id: 'mediaLibrary',
  title: '媒体库',
  icon: 'fa fa-film'
};
