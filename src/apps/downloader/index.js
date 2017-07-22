import { connect } from 'react-redux';
import App from './components/App';
import combinedReducer from './reducers';

export const meta = {
  id: 'downloader',
  title: '云下载',
  icon: 'fa fa-cloud-download'
};

export default connect(
  state => ({ ...state.downloader })
)(App);

export const reducer = combinedReducer;
