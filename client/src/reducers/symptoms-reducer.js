import { USER_SYMPTOMS_RECEIVED, USER_SYMPTOM_ADDED, UPDATE_SYMPTOM_SUCCESS, USER_SYMPTOMS_FETCHED, SYMPTOM_SEVERITY_CHANGED, SYMPTOM_REMOVED, COMMON_SYMPTOMS_REQUESTED, COMMON_SYMPTOMS_RECEIVED, SYMPTOM_TOGGLED, SYMPTOM_SUCCESSFULLY_DELETED, LOGOUT_SUCCESS } from '../actions';
const INITIAL_STATE = {
  isFetching: false, symptoms: [], toBeRemoved: []
}

export const userSymptoms = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case USER_SYMPTOMS_RECEIVED:
      return Object.assign({}, state, { symptoms: [...action.symptoms] });
    case USER_SYMPTOM_ADDED:
      return Object.assign({}, state, { symptoms: [...state.symptoms, action.symptom] });
    case SYMPTOM_SEVERITY_CHANGED:
      const updatedUserSymptoms = state.symptoms.map(symptom => {
        if (symptom.name === action.symptom.name) {
          symptom.severity = action.symptom.severity;
        }
        return symptom
      });
      return Object.assign({}, state, { symptoms: updatedUserSymptoms });
    case UPDATE_SYMPTOM_SUCCESS:
      return Object.assign({}, state, {
        symptoms:  state.symptoms.map(symptom => {
          if (symptom._id === action.symptom._id) {
            return action.symptom
          }
          return symptom
        })
      });
    case SYMPTOM_REMOVED:
      const toBeRemoved = state.toBeRemoved;
      toBeRemoved.push(action.symptom);
      return Object.assign({}, state, {
        symptoms: state.symptoms.filter(symptom => symptom._id !== action.symptom._id),
        toBeRemoved
      });
    case SYMPTOM_SUCCESSFULLY_DELETED:
      return Object.assign({}, state, { toBeRemoved: state.toBeRemoved.filter(symptom => symptom._id !== action.symptom._id) });
    case LOGOUT_SUCCESS:
      return INITIAL_STATE;
    default:
      return state
  }
}

export const commonSymptoms = (state = { isFetching: false, symptoms: [], selected: [] }, action) => {
  switch (action.type) {
    // case COMMON_SYMPTOMS_FETCHED:
    //   return Object.assign({}, state, { symptoms: action.symptoms })
    case COMMON_SYMPTOMS_RECEIVED:
      return Object.assign({}, state, { isFetching: false, symptoms: action.symptoms })
    case COMMON_SYMPTOMS_REQUESTED:
      return Object.assign({}, state, { isFetching: true })
    case SYMPTOM_TOGGLED:
      if (state.selected.includes(action.symptomName)) {
        return Object.assign({}, state, { selected: state.selected.filter(symptomName => symptomName !== action.symptomName) });
      }
      return Object.assign({}, state, { selected: [...state.selected, action.symptomName] });
    case SYMPTOM_REMOVED:
      return Object.assign({}, state, { selected: state.selected.filter(symptomName => symptomName !== action.symptom.name) });
    case LOGOUT_SUCCESS:
      return { isFetching: false, symptoms: [], selected: [] };
    default:
      return state
  }
}

// export const selectedSymptoms = (state = {}, action) => {
//   switch (action.type) {
//     case SYMPTOM_TOGGLED:
//       if (state.includes(action.symptom)) {
//         return state.filter(symptom => symptom !== action.symptom)
//       }
//       return [...state, action.symptom]
//     case SYMPTOM_REMOVED:
//       state.forEach(symptom => {
//         console.log(symptom)
//       })
//       return state.filter(symptomName => symptomName !== action.symptom.name);
//     default:
//       return state
//   }
// }
