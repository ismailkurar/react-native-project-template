import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Login from './Login';

import { login, getMockData } from './LoginActions';

const mapStateToProps = (state) => ({
 isLoggedIn: state.login.isLoggedIn
});

const mapDispatchToProps = (dispatch) => (
  bindActionCreators({
    login
  }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(Login);
