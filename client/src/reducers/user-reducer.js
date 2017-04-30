import { USER_INFO_REQUESTED, USER_INFO_RECEIVED, USER_INFO_REJECTED, LOGOUT_SUCCESS } from '../actions';
const INITIAL_STATE = {
  currentUser: null,
  isFetching: false
}

const user = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case USER_INFO_REQUESTED:
      return Object.assign({}, state, { isFetching: true} )
    case USER_INFO_RECEIVED:
      return Object.assign({}, state, { isFetching: false, currentUser: action.user } )
    case USER_INFO_REJECTED:
      return Object.assign({}, state, { isFetching: false } )
    case LOGOUT_SUCCESS:
      return INITIAL_STATE;
    default:
      return state
  }
}

export default user;
