import { LOGIN_SUCCESS, USER_SYMPTOMS_SAVED } from '../actions';

const currentUser = (state = {}, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return action.user
    case USER_SYMPTOMS_SAVED:
      console.log(action)
      return Object.assign({}, state, { symptoms: action.symptoms });
    default:
      return state
  }
}

export default currentUser;
