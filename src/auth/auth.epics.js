import {LOGIN_ATTEMPTED, LOGIN_SUCCESSFUL, loginFailure, loginSuccess, LOGOUT_ATTEMPTED} from './auth.actions';
import {ofType} from 'redux-observable';
import {catchError, ignoreElements, switchMap, map} from 'rxjs/operators';
import {from} from 'rxjs';
import {push} from 'connected-react-router';

export const attemptLogin = (action$, state$) => action$.pipe(
    ofType(LOGIN_ATTEMPTED),
    switchMap(action => from(
        fetch('https://reqres.in/api/login', {
            method: 'POST',
            mode: 'cors',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({"email": action.payload.username,
            "password": action.payload.password})
        }).then(response => {
            if(response.ok) return response.json();
            return ignoreElements();
        })
    )),
    map(loginSuccess),
    catchError(loginFailure)
);

export const loginSuccessEpic = (action$, state$) => action$.pipe(
    ofType(LOGIN_SUCCESSFUL),
    map(() => push('/dashboard'))
);

export const logoutAttemptEpic = (action$, state$) => action$.pipe(
    ofType(LOGOUT_ATTEMPTED),
    map(() => push('/'))
)
