import { combineReducers } from 'redux';
import currentUser from './user-reducer';
import { commonSymptoms, userSymptoms } from './symptoms-reducer';

const rootReducer = combineReducers({
  currentUser,
  commonSymptoms,
  userSymptoms
});

export default rootReducer;
