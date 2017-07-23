import { ConnectedRouter } from 'react-router-redux';
import { Provider } from 'react-redux';
import React from 'react';
import { render } from 'react-dom';

import history from './history';
import { configStore } from './store';
import Workspace from './workspace';

import './index.less';

const store = configStore();

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Workspace />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('react-mount-point')
);
