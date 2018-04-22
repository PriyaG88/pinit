import { connect } from 'react-redux';
import { signup } from '../../actions/sessionActions';
import SessionForm from './sessionForm';

const mapDispatchToProps = dispatch => ({
  signup: user => dispatch(signup(user))
});

export default connect(null, mapDispatchToProps)(SessionForm);
