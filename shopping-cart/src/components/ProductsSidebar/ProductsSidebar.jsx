import { useSelector,useDispatch } from "react-redux";
import { addedItem } from "../../redux/productReducer/actions";

const ProductsSidebar = () => {
  const items = useSelector((state)=>state);
  const dispatch = useDispatch();

  const handleAdded = (e)=>{

    e.preventDefault()

    const form = e.target;
    const productName = form.productName.value;
    const category = form.category.value;
    const imageUrl = form.imageUrl.value;
    const price = form.price.value;
    const quantity = form.quantity.value;

    const items = {productName,category,imageUrl,price,quantity};

    dispatch(addedItem(items))

  }

  console.log(items)
  return (
    <div className="formContainer">
      <h4 className="formTitle">Add New Product</h4>
      <form onSubmit={handleAdded} className="space-y-4 text-[#534F4F]" id="lws-addProductForm">
        <div className="space-y-2">
          <label>Product Name</label>
          <input
            className="addProductInput"
            id="lws-inputName"
            type="text"
            name="productName"
            required
          />
        </div>

        <div className="space-y-2">
          <label>Category</label>
          <input
            className="addProductInput"
            id="lws-inputCategory"
            type="text"
            name="category"
            required
          />
        </div>

        <div className="space-y-2">
          <label>Image Url</label>
          <input
            className="addProductInput"
            id="lws-inputImage"
            type="text"
            name="imageUrl"
            required
          />
        </div>
        <div className="grid grid-cols-2 gap-8 pb-4">
          <div className="space-y-2">
            <label>Price</label>
            <input
              className="addProductInput"
              type="number"
              id="lws-inputPrice"
              name="price"
              required
            />
          </div>
          <div className="space-y-2">
            <label>Quantity</label>
            <input
              className="addProductInput"
              type="number"
              id="lws-inputQuantity"
              name="quantity"
              required
            />
          </div>
        </div>
        <button type="submit" id="lws-inputSubmit" className="submit">
          Add Product
        </button>
      </form>
    </div>
  );
};

export default ProductsSidebar;
