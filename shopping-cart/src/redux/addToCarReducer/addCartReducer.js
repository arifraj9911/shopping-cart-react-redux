/* eslint-disable no-case-declarations */
import { ADDTOCART } from "./actionTypes";
import { initialState } from "./initialState";

const addCartReducer = (state = initialState, actions) => {
  switch (actions.type) {
    case ADDTOCART:
      const itemExists = state.find((item) => item.id === actions.payload.id);
      if (itemExists) {
        return state;
      }
      return [...state, actions.payload];

    default:
      return state;
  }
};

export default addCartReducer;
