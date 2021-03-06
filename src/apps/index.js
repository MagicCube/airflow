import * as discovery from './discovery';
import * as cloudDownloader from './cloud-downloader';
import * as mediaLibrary from './media-library';

const apps = [discovery, cloudDownloader, mediaLibrary];
apps.forEach((app) => {
  app.id = app.meta.id;
  app.Component = app.default;
  delete app.default;
  apps[app.id] = app;
});
export default apps;

export function getApp(id) {
  const app = apps[id];
  if (app) {
    return app;
  } else {
    throw new Error(`Unknown app id '${id}'.`);
  }
}

export function getAppByPath(path) {
  const parts = path.split('/');
  if (parts.length >= 2) {
    const app = apps.find(a => a.meta.path === `/${parts[1]}`);
    return app || null;
  }
  return null;
}

export function getAppTitle(id) {
  const app = apps[id];
  return app.meta.title;
}

export function getAppTitleByPath(path) {
  const app = getAppByPath(path);
  if (app) {
    return app.meta.title;
  } else {
    return null;
  }
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
