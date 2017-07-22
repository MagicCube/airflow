import React from 'react';

import * as discovery from './discovery';
import * as downloader from './downloader';
import * as mediaLibrary from './media-library';

export const apps = [discovery, downloader, mediaLibrary];
apps.forEach((app) => {
  app.id = app.meta.id;
  apps[app.id] = app;
});

export function getApp(id) {
  const app = apps[id];
  if (app) {
    return app;
  } else {
    throw new Error(`Unknown app id '${id}'.`);
  }
}

export function getAppTitle(id) {
  const app = apps[id];
  return app.meta.title;
}

export function getAppMetaList() {
  return apps.map(app => app.meta);
}

export function getAppReducers() {
  return apps.reduce((reducers, app) => {
    if (app.reducer) {
      Object.assign(reducers, {
        [app.id]: app.reducer
      });
    }
    return reducers;
  }, {});
}

export function getAppComponent(id) {
  const app = getApp(id);
  if (app.default) {
    return app.default;
  } else {
    return null;
  }
}

export function getAppElement(id) {
  const app = getApp(id);
  if (!app.element) {
    const Component = getAppComponent(id);
    app.element = <Component />;
  }
  return app.element;
}
