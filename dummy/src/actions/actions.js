import * as types from "../constants/actionTypes.js";

export function GetData()
{
    return {
        type:types.GET_DATA
    };
} 

export function StoreData()
{
    return  {
            type:types.STORE_DATA
    };
}
export function SaveData(curr)
{
    return {
        type:types.SAVE_DATA,
        current:curr
    }
}
