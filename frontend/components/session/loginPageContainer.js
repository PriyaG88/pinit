import { connect } from 'react-redux';
import { login } from '../../actions/sessionActions';
import LoginPage from './loginPage';

const mapDispatchToProps = dispatch => ({
  login: user => dispatch(login(user))
});

export default connect(null, mapDispatchToProps)(LoginPage);
