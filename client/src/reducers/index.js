import { combineReducers } from 'redux';
import currentUser from './user-reducer';
import { commonSymptoms, userSymptoms, selectedSymptoms } from './symptoms-reducer';

const rootReducer = combineReducers({
  currentUser,
  commonSymptoms,
  userSymptoms,
  selectedSymptoms
});

export default rootReducer;
