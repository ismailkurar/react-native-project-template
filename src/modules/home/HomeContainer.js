import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Home from './Home';

import { login, getMockData } from './HomeActions';

const mapStateToProps = (state) => ({
 dummyData: state.home.dummyData
});

const mapDispatchToProps = (dispatch) => (
  bindActionCreators({
    getMockData
  }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(Home);
