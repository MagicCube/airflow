import { Provider } from 'react-redux';
import React from 'react';
import { render } from 'react-dom';

import { configStore } from './store';
import Workspace from './workspace';

import './index.html';
import './index.less';

const store = configStore();

render(
  <Provider store={store}>
    <Workspace />
  </Provider>,
  document.getElementById('react-mount-point')
);
