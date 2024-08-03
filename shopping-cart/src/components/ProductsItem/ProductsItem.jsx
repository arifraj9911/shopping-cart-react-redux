import { useSelector } from "react-redux";
// import { addToCart } from "../../redux/addToCarReducer/actions";
// import { addToCart } from "../../redux/productReducer/actions";

// eslint-disable-next-line react/prop-types
const ProductsItem = ({handleAddToCart}) => {
  const items = useSelector((state) => state.items);

  

  console.log(items)

  return (
    <div className="productContainer" id="lws-productContainer">
      {items.length <= 0
        ? "No Products Added"
        : items?.map((item) => (
            <div key={item.id} className="lws-productCard">
              <img
                className="lws-productImage"
                src={item.imageUrl}
                alt="product"
              />
              <div className="p-4 space-y-2">
                <h4 className="lws-productName">{item.productName}</h4>
                <p className="lws-productCategory">{item.category}</p>
                <div className="flex items-center justify-between pb-2">
                  <p className="productPrice">
                    BDT <span className="lws-price">{item.price}</span>
                  </p>
                  <p className="productQuantity">
                    QTY <span className="lws-quantity">{item.quantity}</span>
                  </p>
                </div>
                <button 
                onClick={()=>handleAddToCart(item)} 
                className="lws-btnAddToCart">Add To Cart</button>
              </div>
            </div>
          ))}
    </div>
  );
};

export default ProductsItem;
