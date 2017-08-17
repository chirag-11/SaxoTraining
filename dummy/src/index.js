import React from "react";
import ReactDOM from "react-dom";
import Header from './components/header.js';
import Content from './components/content.js';
import { BrowserRouter as Router } from 'react-router-dom';
import "./style/style.css";
import Footer from './components/footer.js';
import { Provider } from 'react-redux';
import { combineReducers, createStore, applyMiddleware } from "redux";
import { baseReducer } from "./reducers/reducer.js";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./saga/saga.js";

const sagaMiddleware = createSagaMiddleware();
const reducers = combineReducers({
        state: baseReducer
});
const store = createStore(reducers, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);


ReactDOM.render(

        <div id="app">
                <Provider store={store}>
                        <Router>
                                <div>
                                        <Header />
                                        <Content />
                                        <Footer />
                                </div>
                        </Router>
                </Provider>
        </div>


        , document.getElementById('container')
);
