import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import actions from './actions';
import combinedReducer from './reducers';
import Workspace from './components/Workspace';

export default connect(
  state => ({ ...state.workspace, router: state.router }),
  dispatch => ({ actions: bindActionCreators(actions, dispatch) })
)(Workspace);

export const reducer = combinedReducer;
