import { ADDED, ADDTOCART } from "./actionTypes"

export const addedItem = (items)=>{
    return {
        type:ADDED,
        payload:items
    }
}

export const addToCart = (itemId)=>{
    return {
        type:ADDTOCART,
        payload:itemId
    }
}