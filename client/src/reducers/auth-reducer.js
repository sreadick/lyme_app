import { LOGIN_REQUESTED, LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT_REQUEST, LOGOUT_SUCCESS } from '../actions';
const INITIAL_STATE = {
  isFetching: false,
  isAuthenticated: !!localStorage.getItem('token') ? true : false ,
  errors: {}, token: (localStorage.getItem('token') || null),
  creds: null
}

const auth = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case LOGIN_REQUESTED:
      return Object.assign({}, state, {
        isFetching: true,
        creds: action.creds
      });
    case LOGIN_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        errors: {},
        isAuthenticated: true,
        token: action.token
      });
    case LOGIN_FAILURE:
      return Object.assign({}, state, {
        isFetching: false,
        errors: Object.assign({}, { message: action.message })
      });
    case LOGOUT_REQUEST:
      return Object.assign({}, state, {
        isFetching: true
      });
      case LOGOUT_SUCCESS:
        return INITIAL_STATE
    default:
      return state;
  }
}

export default auth;
