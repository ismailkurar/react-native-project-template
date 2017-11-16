import { connect } from 'react-redux';
import Loading from './Loading';

function mapStateToProps(state) {
  return { loading: state.loading };
}

export default connect(mapStateToProps)(Loading);
