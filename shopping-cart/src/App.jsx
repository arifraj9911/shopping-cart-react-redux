import Header from "./components/Header/Header";
import ProductsItem from "./components/ProductsItem/ProductsItem";
import ProductsSidebar from "./components/ProductsSidebar/ProductsSidebar";

import "./App.css";
import { useState } from "react";
import CartItem from "./components/Cart/CartItem";
import BiilDetails from "./components/Cart/BiilDetails";

import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "./redux/addToCarReducer/actions";

function App() {
  const [toggleCart, setToggleCart] = useState(false);
  
  const addCart = useSelector((state) => state.addCart);
  const dispatch = useDispatch();
  
  const handleToggleCart = () => {
    setToggleCart(true);
  };
  const handleAddToCart = (item)=>{
    dispatch(addToCart(item))
  }
  console.log(addCart.length)
  return (
    <>
    <Header handleToggleCart={handleToggleCart} setToggleCart={setToggleCart}></Header>
      {toggleCart ? (
        <div className="product-container">
          {/* products item */}
          <div className="product-item-div">
            <CartItem></CartItem>
          </div>

          {/* products sidebar */}
          <div className="product-sidebar-div">
            <BiilDetails></BiilDetails>
          </div>
        </div>
      ) : (
        <div className="product-container">
          {/* products item */}
          <div className="product-item-div">
            <ProductsItem handleAddToCart={handleAddToCart}></ProductsItem>
          </div>

          {/* products sidebar */}
          <div className="product-sidebar-div">
            <ProductsSidebar></ProductsSidebar>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
