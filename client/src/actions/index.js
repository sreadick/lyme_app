import fetch from 'isomorphic-fetch';
import Auth from '../modules/Auth';

export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
function setCurrentUser(user) {
  return {
    type: LOGIN_SUCCESS,
    user
  }
}

export const COMMON_SYMPTOMS_FETCHED = "COMMON_SYMPTOMS_FETCHED";
function getCommonSymptoms(symptoms) {
  return {
    type: COMMON_SYMPTOMS_FETCHED,
    symptoms
  }
}

export const USER_SYMPTOMS_SAVED = "USER_SYMPTOMS_SAVED";
function assignSymptomsToUser(symptoms) {
  return {
    type: USER_SYMPTOMS_SAVED,
    symptoms
  }
}

export const ADD_USER_SYMPTOMS = "ADD_USER_SYMPTOMS";
export function createUserSymptoms(symptoms) {
  return {
    type: ADD_USER_SYMPTOMS,
    symptoms
  }
}

export const SYMPTOM_SEVERITY_CHANGED = "SYMPTOM_SEVERITY_CHANGED";
export function updateSeverity(symptom) {
  return {
    type: SYMPTOM_SEVERITY_CHANGED,
    symptom
  }
}

export function fetchCurrentUser() {
  return dispatch => {
    fetch(`/api/dashboard`, {
      method: 'get',
      headers: {
        'Content-type': 'application/x-www-form-urlencoded',
        'Authorization': `bearer ${Auth.getToken()}`
      }
    })
      .then(res => res.json())
      .then(data => dispatch(setCurrentUser(data.user)));
  }
}

export function fetchCommonSymptoms() {
  return dispatch => {
    fetch('/api/commonSymptomList', {
      method: 'get',
      headers: {
        'Authorization': `bearer ${Auth.getToken()}`
      }
    })
      .then(res => res.json())
      .then(data => dispatch(getCommonSymptoms(data.symptoms)));
    }
}

export function saveUserSymptoms(symptoms) {
  return dispatch => {
    fetch('/api/userSymptomList', {
      method: 'post',
      body: JSON.stringify({ symptoms }),
      headers: {
        "Content-Type": "application/json",
        'Authorization': `bearer ${Auth.getToken()}`
      }
    })
      .then(res => res.json())
      .then(() => {
        // dispatch(assignSymptomsToUser(data.symptoms))
      })
  }
}
