import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {Provider} from 'react-redux';
import store, {history} from './redux/store';
import {ConnectedRouter} from 'connected-react-router';
import {Route} from 'react-router-dom';
import Dashboard from './dashboard/dashboard.component';

ReactDOM.render(
    <Provider store={store()}>
        <ConnectedRouter history={history}>
            <>
                <Route exact path="/" component={App} />
                <Route exact path="/dashboard" component={Dashboard}></Route>
            </>
        </ConnectedRouter>
    </Provider>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
