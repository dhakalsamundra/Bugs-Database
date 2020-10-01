import { combineReducers } from 'redux';
import logReducer from './log';
import techReducer from './tech';

export default combineReducers({
  log: logReducer,
  tech: techReducer
});
