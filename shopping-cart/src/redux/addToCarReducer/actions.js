// import { ADDTOCART } from "../productReducer/actionTypes"

import { ADDTOCART } from "./actionTypes"

export const addToCart = (item)=>{
    return {
        type:ADDTOCART,
        payload:item
    }
}