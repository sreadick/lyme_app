import { LOGIN_SUCCESS, USER_SYMPTOM_SAVED, USER_SYMPTOMS_FETCHED, SYMPTOM_SEVERITY_CHANGED, SYMPTOM_DELETED } from '../actions';

const currentUser = (state = {}, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return action.user
    case USER_SYMPTOM_SAVED:
      return Object.assign({}, state, { symptoms: [...state.symptoms, action.symptom] });
    case USER_SYMPTOMS_FETCHED:
      return Object.assign({}, state, { symptoms: action.symptoms});
    case SYMPTOM_SEVERITY_CHANGED:
      const updatedUserSymptoms = state.symptoms.map(symptom => {
        if (symptom.name === action.symptom.name) {
          symptom.severity = action.symptom.severity;
        }
        return symptom
      });
      return Object.assign({}, state, { symptoms: updatedUserSymptoms });
    case SYMPTOM_DELETED:
      if (state.symptoms.length === 1) {
        return Object.assign({}, state, {symptoms: []});
      } else {
        return Object.assign({}, state, {
          symptoms: state.symptoms.filter(symptom => symptom.name !== action.symptom.name)
        });
      }
    default:
      return state
  }
}

export default currentUser;
