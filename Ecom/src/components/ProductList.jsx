import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToBag, deleteFromBag } from "../store/BagSlice";

function ProductList() {
  const navigate = useNavigate();
  const products = useSelector((state) => state.products);
  const dispatch = useDispatch();

  const handleView = (id) => {
    navigate(`/detail/${id}`);
  };

  const handleBuyNow = (item) => {
    dispatch(addToBag({ ...item, quantity: 1 }));
  };
  return (
    <div className="album py-5 bg-body-tertiary">
      <div className="container">
        <h4>Our Products</h4>
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
          {" "}
          {Array.isArray(products) &&
            products.map((item) => (
              <div className="col" key={item.id}>
                <div className="card shadow-sm">
                  <img
                    aria-label="Placeholder: Thumbnail"
                    className="bd-placeholder-img card-img-top"
                    height={225}
                    preserveAspectRatio="xMidYMid slice"
                    role="img"
                    width="100%"
                    src={item.productImage}
                  />
                  <div className="card-body">
                    <h5>{item.productName}</h5>
                    <p className="card-text">{item.productDescription}</p>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="btn-group">
                        <button
                          onClick={() => {
                            handleView(item.id);
                          }}
                          type="button"
                          className="btn btn-sm btn-outline-secondary"
                        >
                          View
                        </button>
                        <button
                          onClick={() => handleBuyNow(item)}
                          type="button"
                          className="btn btn-sm btn-outline-secondary"
                        >
                          Buy Now
                        </button>
                      </div>
                      <small className="text-body-secondary">
                        NPR {item.productPrice}
                      </small>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default ProductList;
