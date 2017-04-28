import { USER_INFO_REQUESTED, USER_INFO_RECEIVED, USER_INFO_REJECTED } from '../actions';

const user = (state = {
  currentUser: null,
  isFetching: false
}, action) => {
  switch (action.type) {
    case USER_INFO_REQUESTED:
      return Object.assign({}, state, { isFetching: true} )
    case USER_INFO_RECEIVED:
    return Object.assign({}, state, { isFetching: false, currentUser: action.user } )
    case USER_INFO_REJECTED:
      return Object.assign({}, state, { isFetching: false } )
    // case USER_SYMPTOM_SAVED:
    //   return Object.assign({}, state, { symptoms: [...state.symptoms, action.symptom] });
    // case USER_SYMPTOMS_FETCHED:
    //   return Object.assign({}, state, { symptoms: action.symptoms});
    // case SYMPTOM_SEVERITY_CHANGED:
    //   const updatedUserSymptoms = state.symptoms.map(symptom => {
    //     if (symptom.name === action.symptom.name) {
    //       symptom.severity = action.symptom.severity;
    //     }
    //     return symptom
    //   });
    //   return Object.assign({}, state, { currentUser.symptoms: updatedUserSymptoms });
    // case SYMPTOM_DELETED:
    //   if (state.symptoms.length === 1) {
    //     return Object.assign({}, state, { currentUser.symptoms: []});
    //   } else {
    //     return Object.assign({}, state, {
    //       currentUser.symptoms: state.currentUser.symptoms.filter(symptom => symptom.name !== action.symptom.name)
    //     });
    //   }
    default:
      return state
  }
}

export default user;
