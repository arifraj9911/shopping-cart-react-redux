/* eslint-disable no-case-declarations */
import {
  ADDTOCART,
  DECREASEQUANTITY,
  INCREASEQUANTITY,
  // TOTALPRICE,
} from "./actionTypes";
import { initialState } from "./initialState";

const addCartReducer = (state = initialState, actions) => {
  switch (actions.type) {
    case ADDTOCART:
      const itemExists = state.find((item) => item.id === actions.payload.id);
      if (itemExists) {
        return state;
      }
      return [...state, actions.payload];

    case INCREASEQUANTITY:
      return state.map((item) =>
        item.id === actions.payload.id
          ? {
              ...item,
              quantity: parseInt(item.quantity) + 1,
              totalPrice: (parseInt(item.quantity) + 1) * parseInt(item.price),
            }
          : item
      );
    case DECREASEQUANTITY:
      return state.map((item) =>
        item.id === actions.payload.id
          ? {
              ...item,
              quantity: parseInt(item.quantity) - 1,
              totalPrice: (parseInt(item.quantity) - 1) * parseInt(item.price),
            }
          : item
      );
    // case TOTALPRICE:
    //   return state.map((item) =>
    //     item.id === actions.payload.id
    //       ? { ...item, price: parseInt(item.quantity) * parseInt(item.price) }
    //       : item
    //   );

    default:
      return state;
  }
};

export default addCartReducer;
