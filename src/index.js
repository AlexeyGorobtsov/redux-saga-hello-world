import React from 'react';
import {render } from 'react-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from "redux";
import { reducer } from "./redusers";
import { rootSaga } from "./sagas";
import createSagaMiddleware from "redux-saga";




import App from './components/App';
import './styles.css';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);