import React from "react";
import {delay} from "redux-saga";
import {call,put,takeEvery,all} from "redux-saga/effects";
import * as actionTypes from "../constants/actionTypes.js";

const getdata = () => {
       return fetch('http://localhost:3000/bvc',{
            method:'get'
        }).then((response) => {
            return response.json();
        }).then((data) => {
            return data;
        }).catch(function (err) {
            console.log("nothing" + err);
        });
    };
   export function* getsaga(){
    let country = yield call(getdata);
    yield put({
        type: actionTypes.STORE_DATA,
        country: country
    });
}
    


export function* watchSaga(){
    yield takeEvery(actionTypes.GET_DATA,getsaga);
}

export default function* rootSaga(){
    yield all([watchSaga()]);
}