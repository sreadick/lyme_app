import { ADD_USER_SYMPTOMS, SYMPTOM_SEVERITY_CHANGED, COMMON_SYMPTOMS_FETCHED } from '../actions';

export const userSymptoms = (state = [], action) => {
  switch (action.type) {
    case ADD_USER_SYMPTOMS:
      return action.symptoms
    case SYMPTOM_SEVERITY_CHANGED:
      return state.map(item => {
        if (item.name === action.symptom.name) {
          return {
            name: item.name,
            severity: action.symptom.severity,
            id: item.id
          }
        }
        return item
      })
    default:
      return state
  }
}

export const commonSymptoms = (state = [], action) => {
  switch (action.type) {
    case COMMON_SYMPTOMS_FETCHED:
      return action.symptoms
    default:
      return state
  }
}
