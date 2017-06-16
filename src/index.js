import React from 'react';
import ReactDOM from 'react-dom';
import AppContainer from './Container/AppContainer.js';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import app from './Reducers/Reducer.js'
import './index.css';

ReactDOM.render(
    <Provider store={createStore(app)}>
        <AppContainer />
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();
