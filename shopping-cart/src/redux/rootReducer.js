import { combineReducers } from "redux";
import productReducer from "./productReducer/productReducer";
import addCartReducer from "./addToCarReducer/addCartReducer";

const rootReducer = combineReducers({
    items:productReducer,
    addCart:addCartReducer
})

export default rootReducer