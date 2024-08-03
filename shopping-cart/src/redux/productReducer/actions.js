import { ADDED } from "./actionTypes"

export const addedItem = (items)=>{
    return {
        type:ADDED,
        payload:items
    }
}

