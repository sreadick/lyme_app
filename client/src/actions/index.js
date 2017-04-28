import fetch from 'isomorphic-fetch';
import Auth from '../modules/Auth';

export const USER_INFO_REQUESTED = "USER_INFO_REQUESTED";
export const USER_INFO_RECEIVED = "USER_INFO_RECEIVED";
export const USER_INFO_REJECTED = "USER_INFO_REJECTED";

function requestUserInfo() {
  return {
    type: USER_INFO_REQUESTED
  }
}

function receiveUserInfo(user) {
  return {
    type: USER_INFO_RECEIVED,
    user
  }
}

function rejectUserInfo(errorMessage) {
  return {
    type: USER_INFO_REJECTED,
    errorMessage
  }
}


export const LOGIN_REQUESTED = "LOGIN_REQUESTED";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";

function requestLogin(creds) {
  return {
    type: LOGIN_REQUESTED,
    creds
  }
}

function receiveLogin(token) {
  return {
    type: LOGIN_SUCCESS,
    token
  }
}

function rejectLogin(message) {
  return {
    type: LOGIN_FAILURE,
    message
  }
}

export const LOGOUT_REQUEST = "LOGOUT_REQUEST";
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';

function requestLogout() {
  return {
    type: LOGOUT_REQUEST
  }
}

function receiveLogout() {
  return {
    type: LOGOUT_SUCCESS
  }
}




export const USER_SYMPTOMS_RECEIVED = "USER_SYMPTOMS_RECEIVED";
function receiveUserSymptoms(symptoms) {
  return {
    type: USER_SYMPTOMS_RECEIVED,
    symptoms
  }
}

export const COMMON_SYMPTOMS_FETCHED = "COMMON_SYMPTOMS_FETCHED";
function getCommonSymptoms(symptoms) {
  return {
    type: COMMON_SYMPTOMS_FETCHED,
    symptoms
  }
}

export const USER_SYMPTOM_ADDED = "USER_SYMPTOM_ADDED";
function addUserSymptom(symptom) {
  return {
    type: USER_SYMPTOM_ADDED,
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
export function modifySymptomSeverity(symptom) {
  return {
    type: SYMPTOM_SEVERITY_CHANGED,
    symptom
  }
}

export const SYMPTOM_TOGGLED = "SYMPTOM_TOGGLED";
export function toggleSymptom(symptomName) {
  return {
    type: SYMPTOM_TOGGLED,
    symptomName
  }
}

export const SYMPTOM_REMOVED = "SYMPTOM_REMOVED";
export function removeSymptom(symptom) {
  return {
    type: SYMPTOM_REMOVED,
    symptom
  }
}

export const UPDATE_SYMPTOM_SUCCESS = "UPDATE_SYMPTOM_SUCCESS";
function updateUserSymptom(symptom) {
  return {
    type: UPDATE_SYMPTOM_SUCCESS,
    symptom
  }
}

export const SYMPTOM_SUCCESSFULLY_DELETED = "SYMPTOM_SUCCESSFULLY_DELETED";
export function removeFromToBeRemoved(symptom) {
  return {
    type: SYMPTOM_SUCCESSFULLY_DELETED,
    symptom
  }
}

export function fetchUserInfo() {
  return dispatch => {
    fetch(`/api/dashboard`, {
      method: 'get',
      headers: {
        'Content-type': 'application/x-www-form-urlencoded',
        'Authorization': `bearer ${Auth.getToken()}`
      }
    })
    .then(res =>
      res.json().then(data => ({data, res}))
        ).then(({data, res}) => {
      if (!res.ok) {
        // const errors = data.errors ? data.errors : {};
        // errors.summary = xhr.response.message;
        dispatch(rejectUserInfo(data.errors))
      } else {
        if (data.user.symptoms.length > 0) {
          dispatch(receiveUserSymptoms(data.user.symptoms));
        } else {
          console.log(data.user)
        }
        dispatch(receiveUserInfo(data.user));
      }
    })
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
        console.log("user symptom created: " + data.userSymptom)
        dispatch(addUserSymptom(data.userSymptom))
      })
  }
}

export function saveUserSymptom(symptom) {
  console.log(symptom)
  return dispatch => {
    fetch('/api/UserSymptoms', {
      method: 'put',
      body: JSON.stringify({ symptom }),
      headers: {
        "Content-Type": "application/json",
        'Authorization': `bearer ${Auth.getToken()}`
      }
    })
      .then(res => res.json())
      .then((data) => {
        // console.log("user symptom updated: " + data.userSymptom)
        console.log("user symptom updated: " + data.userSymptom)
        dispatch(updateUserSymptom(data.userSymptom))
      })
  }
}

// export function fetchUserSymptoms() {
//   return dispatch => {
//     fetch('/api/UserSymptoms', {
//       method: 'get',
//       headers: {
//         "Content-Type": "application/json",
//         'Authorization': `bearer ${Auth.getToken()}`
//       }
//     })
//       .then(res => res.json())
//       .then((data) => {
//         dispatch(getUserSymptoms(data.symptoms))
//       })
//   }
// }

export function loginUser(credentials) {
  return dispatch => {
    dispatch(requestLogin(credentials));

    fetch(`/auth/login`, {
      method: 'post',
      body: credentials,
      headers: {
        'Content-type': 'application/x-www-form-urlencoded'
      }
    })
      .then(res =>
        res.json().then(data => ({data, res}))
          ).then(({data, res}) => {
        if (!res.ok) {
          dispatch(rejectLogin(data.message))
        } else {
          Auth.authenticateUser(data.token);
          dispatch(receiveLogin(data.token));
        }
      })
  }
}

export function deleteSymptom(symptom) {
  return dispatch => {
    fetch('/api/UserSymptoms', {
      method: 'delete',
      body: JSON.stringify({ symptom }),
      headers: {
        "Content-Type": "application/json",
        'Authorization': `bearer ${Auth.getToken()}`
      }
    })
      .then(res => res.json())
      .then(() => {
        dispatch(removeFromToBeRemoved(symptom))
      })
  }
}

export function logoutUser() {
  return dispatch => {
    dispatch(requestLogout())
    Auth.deauthenticateUser();
    dispatch(receiveLogout())
  }
}
