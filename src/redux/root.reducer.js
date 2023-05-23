import { combineReducers } from "redux";
import authReducer from '../auth/auth.reducer';
import {connectRouter} from 'connected-react-router';
import dashboard from '../dashboard/dashboard.reducer';

export default history => combineReducers({
    router: connectRouter(history),
    authReducer,
    dashboard
});
