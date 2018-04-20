import { connect } from 'react-redux';
import { signup, login } from '../../actions/sessionActions';
import SessionForm from './sessionForm';

const mapDispatchToProps = dispatch => ({
  signup: user => dispatch(signup(user)),
  login: user => dispatch(login(user))
});

export default connect(null, mapDispatchToProps)(SessionForm);
