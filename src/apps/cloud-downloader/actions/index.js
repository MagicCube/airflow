import createActions from '../../../actions/createActions';

import meta from '../meta';

export default createActions(meta.id, {
  selectPath(path) {
    return path;
  }
});
