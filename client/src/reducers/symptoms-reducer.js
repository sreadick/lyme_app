import { COMMON_SYMPTOMS_FETCHED, SYMPTOM_TOGGLED } from '../actions';

export const userSymptoms = (state = [], action) => {
  switch (action.type) {
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

export const selectedSymptoms = (state = [], action) => {
  switch (action.type) {
    case SYMPTOM_TOGGLED:
      if (state.includes(action.symptom)) {
        return state.filter(symptom => symptom !== action.symptom)
      }
      return [...state, action.symptom]
    default:
      return state
  }
}
