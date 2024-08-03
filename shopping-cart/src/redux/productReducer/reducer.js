import { ADDED } from "./actionTypes";
import { initialState } from "./initialState";

const nextId = (items) => {
  if (items.length > 0) {
    const maxId = items.reduce((maxId, items) => Math.max(items.id, maxId), -1);
    return maxId + 1;
  } else {
    return 1;
  }
};

const reducer = (state = initialState, actions) => {
  switch (actions.type) {
    case ADDED:
      return [
        ...state,
        {
          id: nextId(state),
          productName: actions.payload.productName,
          category: actions.payload.category,
          imageUrl: actions.payload.imageUrl,
          price: actions.payload.price,
          quantity: actions.payload.quantity,
        },
      ];

    default:
      return state;
  }
};

export default reducer;
