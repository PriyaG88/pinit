import * as SessionAPIUtil from '../util/sessionAPIUtil';
export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';

export const signup = user => dispatch => (
  SessionAPIUtil.signup(user).then(user => dispatch(receiveCurrentUser(user)))
);

export const login = user => dispatch => (
  SessionAPIUtil.login(user).then(user => dispatch(receiveCurrentUser(user)))
);

export const logout = () => dispatch => (
  SessionAPIUtil.logout().then(() => dispatch(receiveCurrentUser(null)))
);

const receiveCurrentUser = user => ({
  type: RECEIVE_CURRENT_USER,
  user
});
