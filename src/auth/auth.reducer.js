import {LOGIN_ATTEMPTED, LOGIN_FAILED, LOGIN_SUCCESSFUL, LOGOUT_ATTEMPTED} from './auth.actions';

const initialState = {
  username: undefined,
  isLoggedIn: false,
  token: undefined
};

export default function (state = initialState, action) {
    switch (action.type) {
        case LOGIN_SUCCESSFUL:
            return {
              ...state,
              isLoggedIn: true,
              token: action.payload.token
            };
        case LOGIN_ATTEMPTED:
            return {
                ...state,
                username: action.payload.username
            };
        case LOGIN_FAILED:
            return {
                ...initialState
            };
        case LOGOUT_ATTEMPTED:
            return {
                ...initialState
            };
        default:
            return state;
    }
}
