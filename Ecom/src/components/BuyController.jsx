import { useDispatch, useSelector } from "react-redux";
import {
  incrementValue,
  decrementValue,
  resetValue,
} from "../store/controllerSlice";
import "../css/BuyController.css";
import { addToBag } from "../store/BagSlice";
const BuyController = ({ product }) => {
  const controller = useSelector((state) => state.controller);
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(incrementValue());
  };

  const handleDecrement = () => {
    dispatch(decrementValue());
  };

  const handleAddtoCart = () => {
    dispatch(addToBag({ ...product, quantity: controller.initialValue }));
    dispatch(resetValue());
  };

  return (
    <>
      <div className="container-fluid d-flex pt-4">
        <button className="addBtn" onClick={handleIncrement}>
          +
        </button>
        <span className="quantityArea">{controller.initialValue}</span>
        <button className="subBtn" onClick={handleDecrement}>
          -
        </button>
        <button className="addToCartBtn" onClick={handleAddtoCart}>
          Add to cart
        </button>
      </div>
    </>
  );
};
export default BuyController;
