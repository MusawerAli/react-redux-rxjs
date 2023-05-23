import {DASHBOARD_LOAD_ATTEMPED, DASHBOARD_LOAD_SUCCESSFUL} from './dashboard.actions';
import {LOGOUT_ATTEMPTED} from '../auth/auth.actions';

const initialState = {
    dashboardData: undefined
};

export default function(state=initialState, action) {
    switch(action.type) {
        case DASHBOARD_LOAD_SUCCESSFUL:
            return {
                ...state,
                dashboardData: action.payload.data
            };
        case DASHBOARD_LOAD_ATTEMPED:
            return {
              ...state
            };
        case LOGOUT_ATTEMPTED:
            return {
                ...initialState
            };
        default:
            return {
                ...state
            };
    }
}
