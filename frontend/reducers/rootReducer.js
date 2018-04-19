import { combineReducers } from 'redux';
import SessionReducer from './sessionReducer';

export default combineReducers({
  session: SessionReducer
});
