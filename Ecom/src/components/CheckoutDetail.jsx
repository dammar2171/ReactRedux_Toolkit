import { useSelector } from "react-redux";
import "../css/CheckoutDetail.css";
const CheckoutDetail = () => {
  const bag = useSelector((state) => state.bag);
  console.log(bag);

  return (
    <div className="costum-detailContainer">
      <h3 className="text-center">Order Summary</h3>
      {bag.map((item) => (
        <div className="row" key={item.id}>
          <div className="col-6">
            <img src={item.productImage} alt="product" />
          </div>
          <div className="col-6">
            <span>QTY:{item.quantity}</span>
            <span>Price:{item.productPrice}</span>
          </div>
        </div>
      ))}
      <hr />
      <p>
        Total:{" "}
        <span>
          NPR{" "}
          {bag.reduce(
            (total, item) =>
              (total = total + item.quantity * item.productPrice),
            0
          )}
        </span>
      </p>
    </div>
  );
};
export default CheckoutDetail;
