import {ofType} from 'redux-observable';
import {DASHBOARD_LOAD_ATTEMPED, dashboardLoadSuccess} from './dashboard.actions';
import {ignoreElements, switchMap, map} from 'rxjs/operators';
import {from} from 'rxjs';

export const dashboardLoadStartEpic = (action$, state$) => action$.pipe(
    ofType(DASHBOARD_LOAD_ATTEMPED),
    switchMap(action => from(fetch('https://reqres.in/api/users?page=2', {
        method: 'GET',
        mode: 'cors',
        headers: {'Content-Type': 'application/json'}
    }).then(response => {
        if(response.ok) return response.json();
        return ignoreElements();
    }))),
    map(dashboardLoadSuccess)
)
