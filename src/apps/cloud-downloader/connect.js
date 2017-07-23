import { connect } from 'react-redux';

import meta from './meta';

export default function (mapStateToProps, mapDispatchToProps) {
  return connect(
    state => mapStateToProps({ ...state[meta.id], router: state.router }, state),
    mapDispatchToProps
  );
}
