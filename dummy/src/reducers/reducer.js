import * as actionTypes from "../constants/actionTypes.js";
const initialState = {
    country: []
}


export const baseReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.STORE_DATA:
            return Object.assign({}, ...state, { country: action.country });
        default:
            return state;

    }
};

