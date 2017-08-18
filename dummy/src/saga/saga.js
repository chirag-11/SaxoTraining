import React from "react";
import { delay } from "redux-saga";
import { call, put, takeEvery, all } from "redux-saga/effects";
import * as actionTypes from "../constants/actionTypes.js";

const getdata = () => {
    return fetch('http://localhost:3000/bvc', {
        method: 'get'
    }).then((response) => {
        return response.json();
    }).then((data) => {
        return data;
    }).catch(function (err) {
        console.log("nothing" + err);
    });
};

const postData = (current) => {
    return fetch('http://localhost:3000/Post', {
        method: 'post',
        body: JSON.stringify(current),
        headers: new Headers({
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        })
    }).then((response) => {
        return response.json()
    }).then((data) => {
        return data
    }).catch(function (err) {
        console.log("nothing" + err)
    })
}
export function* getsaga() {
    let country = yield call(getdata);
    yield put({
        type: actionTypes.STORE_DATA,
        country: country
    });
}
export function* watchSaga() {
    yield takeEvery(actionTypes.GET_DATA, getsaga);
}

export function* saveSaga(action) {
    try {
        let country = yield call(postData, action.current)
        yield put({
            type: actionTypes.STORE_DATA,
            country: country
        })
    }
    catch (err) {
        console.log(err)
    }

}
export function* watchPostSaga() {
    yield takeEvery(actionTypes.SAVE_DATA, saveSaga);
}
export default function* rootSaga() {
    yield all([watchSaga(), watchPostSaga()]);
}

