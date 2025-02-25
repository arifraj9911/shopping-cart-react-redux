import { useSelector, useDispatch } from "react-redux";
import {
  decreaseQuantity,
  deleteItem,
  increaseQuantity,
  // totalPrice,
} from "../../redux/addToCarReducer/actions";

const CartItem = () => {
  const addCart = useSelector((state) => state.addCart);
  const dispatch = useDispatch();

  const handleIncreaseQuantity = (items) => {
    dispatch(increaseQuantity(items));
  };
  const handleDecreaseQuantity = (items) => {
    dispatch(decreaseQuantity(items));
  };
  const handleDelete = (itemId) => {
    dispatch(deleteItem(itemId));
  };
  // const handleTotalPrice = (items) => {
  //   dispatch(totalPrice(items));
  // };

  // console.log(addCart)

  return (
    <div className="space-y-6">
      <h2 className="mb-8 text-xl font-bold">Shopping Cart</h2>
      {addCart.length <= 0
        ? "No Cart Added"
        : addCart?.map((item) => (
            <div key={item.id} className="cartCard">
              <div className="flex items-center col-span-6 space-x-6">
                <img
                  className="lws-cartImage"
                  src={item.imageUrl}
                  alt="product"
                />
                <div className="space-y-2">
                  <h4 className="lws-cartName">{item.productName}</h4>
                  <p className="lws-cartCategory">{item.category}</p>
                  <p>
                    BDT <span className="lws-cartPrice">{item.price}</span>
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-center col-span-4 mt-4 space-x-8 md:mt-0">
                <div className="flex items-center space-x-4">
                  <button
                    onClick={() => handleIncreaseQuantity(item)}
                    className="lws-incrementQuantity"
                  >
                    <i className="text-lg fa-solid fa-plus">+</i>
                  </button>
                  <span className="lws-cartQuantity">{item.quantity}</span>
                  <button
                    onClick={() => handleDecreaseQuantity(item)}
                    className="lws-decrementQuantity"
                  >
                    <i className="text-lg fa-solid fa-minus">-</i>
                  </button>
                </div>
                <p className="text-lg font-bold">
                  BDT{" "}
                  <span className="lws-calculatedPrice">{item.totalPrice}</span>
                </p>
              </div>
              <div className="flex items-center justify-center col-span-2 mt-4 md:justify-end md:mt-0">
                <button
                  onClick={() => handleDelete(item.id)}
                  className="lws-removeFromCart"
                >
                  <i className="text-lg text-red-400 fa-solid fa-trash">X</i>
                </button>
              </div>
            </div>
          ))}
    </div>
  );
};

export default CartItem;
