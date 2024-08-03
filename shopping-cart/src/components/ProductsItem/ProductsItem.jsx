const ProductsItem = () => {
  return (
    <div className="productContainer" id="lws-productContainer">
      <div className="lws-productCard">
        <img
          className="lws-productImage"
          src="https://i.ibb.co/YW2QxXP/Thailand-1.jpg"
          alt="product"
        />
        <div className="p-4 space-y-2">
          <h4 className="lws-productName">Spring and summershoes</h4>
          <p className="lws-productCategory">Mens shoes</p>
          <div className="flex items-center justify-between pb-2">
            <p className="productPrice">
              BDT <span className="lws-price">400</span>
            </p>
            <p className="productQuantity">
              QTY <span className="lws-quantity">10</span>
            </p>
          </div>
          <button className="lws-btnAddToCart">Add To Cart</button>
        </div>
      </div>

      <div className="lws-productCard">
        <img
          className="lws-productImage"
          src="https://i.ibb.co/JB4v6Ls/bangladesh.jpg"
          alt="product"
        />
        <div className="p-4 space-y-2">
          <h4 className="lws-productName">Women Winter Clothes</h4>
          <p className="lws-productCategory">Tops</p>
          <div className="flex items-center justify-between pb-2">
            <p className="productPrice">
              BDT <span className="lws-price">100</span>
            </p>
            <p className="productQuantity">
              QTY <span className="lws-quantity">30</span>
            </p>
          </div>
          <button className="lws-btnAddToCart">Add To Cart</button>
        </div>
      </div>
    </div>
  );
};

export default ProductsItem;
