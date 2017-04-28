import { combineReducers } from 'redux';
import user from './user-reducer';
import { commonSymptoms, userSymptoms } from './symptoms-reducer';
import auth from './auth-reducer';

const rootReducer = combineReducers({
  user,
  commonSymptoms,
  userSymptoms,
  auth
});

export default rootReducer;
