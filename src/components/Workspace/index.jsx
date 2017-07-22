import React, { PureComponent } from 'react';

import Header from './Header';
import NavBar from './NavBar';

export default class Workspace extends PureComponent {
  render() {
    return (
      <div className="af-workspace">
        <Header />
        <NavBar />
        <main>
          Main
        </main>
      </div>
    );
  }
}
