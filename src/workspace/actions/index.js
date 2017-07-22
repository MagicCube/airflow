import createActions from '../../actions/createActions';

export default createActions('workspace', {
  selectApp(id) {
    return id;
  }
});
