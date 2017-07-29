import React from 'react';
import ReactDOM from 'react-dom';
import AppContainer from './Container/AppContainer.js';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import app from './Reducers/Reducer.js'
import './index.css';

const store = createStore(app, getState());

window.addEventListener('beforeunload', persistState);

function persistState() {
    localStorage.ReduxState = JSON.stringify(store.getState());
}

function getState() {
    if (localStorage.ReduxState)
        return JSON.parse(localStorage.ReduxState);
}

ReactDOM.render(
    <Provider store={store}>
        <AppContainer />
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();
