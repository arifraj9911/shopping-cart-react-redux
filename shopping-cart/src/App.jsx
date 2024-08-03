import Header from "./components/Header/Header";
import ProductsItem from "./components/ProductsItem/ProductsItem";
import ProductsSidebar from "./components/ProductsSidebar/ProductsSidebar";

import "./App.css";
import { useState } from "react";
import CartItem from "./components/Cart/CartItem";
import BiilDetails from "./components/Cart/BiilDetails";
import {Provider} from 'react-redux'
import store from "./redux/store";

function App() {
  const [toggleCart, setToggleCart] = useState(false);
  const handleToggleCart = () => {
    setToggleCart(true);
  };
  return (
    <>
    <Provider store={store}>
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
            <ProductsItem></ProductsItem>
          </div>

          {/* products sidebar */}
          <div className="product-sidebar-div">
            <ProductsSidebar></ProductsSidebar>
          </div>
        </div>
      )}
      </Provider>
    </>
  );
}

export default App;
