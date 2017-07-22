import { Provider } from 'react-redux';
import React from 'react';
import { render } from 'react-dom';

import Workspace from './components/Workspace';

import './index.html';
import './index.less';

render(
  <Provider>
    <Workspace />
  </Provider>,
  document.getElementById('react-mount-point')
);
