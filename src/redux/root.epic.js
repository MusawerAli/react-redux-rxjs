import {combineEpics} from 'redux-observable';
import {attemptLogin, loginSuccessEpic, logoutAttemptEpic} from '../auth/auth.epics';
import {dashboardLoadStartEpic} from '../dashboard/dashboard.epics';

export const rootEpic = combineEpics(attemptLogin,
    loginSuccessEpic,
    dashboardLoadStartEpic,
    logoutAttemptEpic);
