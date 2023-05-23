import {applyMiddleware, createStore} from "redux";
import createRootReducer from "./root.reducer";
import {createEpicMiddleware} from 'redux-observable';
import {createBrowserHistory} from 'history';
import {composeWithDevTools} from 'redux-devtools-extension';
import {routerMiddleware} from 'connected-react-router';
import {rootEpic} from './root.epic';

const epicMiddleware = createEpicMiddleware();
export const history = createBrowserHistory();

export default function configureStore() {
    const store = createStore(
        createRootReducer(history),
        composeWithDevTools(
            applyMiddleware(
                routerMiddleware(history),
                epicMiddleware
            )
        )
    );

    epicMiddleware.run(rootEpic);
    return store;
};
