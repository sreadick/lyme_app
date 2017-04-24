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

export const USER_SYMPTOM_SAVED = "USER_SYMPTOM_SAVED";
function addUserSymptom(symptom) {
  return {
    type: USER_SYMPTOM_SAVED,
    symptom
  }
}

export const USER_SYMPTOMS_FETCHED = "USER_SYMPTOMS_FETCHED";
function getUserSymptoms(symptoms) {
  return {
    type: USER_SYMPTOMS_FETCHED,
    symptoms
  }
}

export const SYMPTOM_SEVERITY_CHANGED = "SYMPTOM_SEVERITY_CHANGED";
export function updateSymptomSeverity(symptom) {
  return {
    type: SYMPTOM_SEVERITY_CHANGED,
    symptom
  }
}

export const SYMPTOM_TOGGLED = "SYMPTOM_TOGGLED";
export function toggleSymptom(symptom) {
  return {
    type: SYMPTOM_TOGGLED,
    symptom
  }
}

export const SYMPTOM_DELETED = "SYMPTOM_DELETED";
export function deleteSymptom(symptom) {
  return {
    type: SYMPTOM_DELETED,
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
    fetch('/api/CommonSymptoms', {
      method: 'get',
      headers: {
        'Authorization': `bearer ${Auth.getToken()}`
      }
    })
      .then(res => res.json())
      .then(data => dispatch(getCommonSymptoms(data.symptoms)));
    }
}

export function createUserSymptom(symptomName) {
  return dispatch => {
    fetch('/api/UserSymptoms', {
      method: 'post',
      body: JSON.stringify({ symptomName }),
      headers: {
        "Content-Type": "application/json",
        'Authorization': `bearer ${Auth.getToken()}`
      }
    })
      .then(res => res.json())
      .then((data) => {
        console.log("user symptoms saved")
        // dispatch(addUserSymptom(data.userSymptom)
      })
  }
}

export function fetchUserSymptoms() {
  return dispatch => {
    fetch('/api/UserSymptoms', {
      method: 'get',
      headers: {
        "Content-Type": "application/json",
        'Authorization': `bearer ${Auth.getToken()}`
      }
    })
      .then(res => res.json())
      .then((data) => {
        dispatch(getUserSymptoms(data.symptoms))
      })
  }
}
