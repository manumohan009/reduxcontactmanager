import { combineReducers } from 'redux';
import contactReducer from './contactReducer';

// Company Setup (group of deparments)
export default combineReducers({
  contact: contactReducer
});
