// import { ADDTOCART } from "../productReducer/actionTypes"

import { ADDTOCART, DECREASEQUANTITY, INCREASEQUANTITY } from "./actionTypes"

export const addToCart = (item)=>{
    return {
        type:ADDTOCART,
        payload:item
    }
}
export const increaseQuantity = (items)=>{
    return {
        type:INCREASEQUANTITY,
        payload:items
    }
}
export const decreaseQuantity = (item)=>{
    return {
        type:DECREASEQUANTITY,
        payload:item
    }
}