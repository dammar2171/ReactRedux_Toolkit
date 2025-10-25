import "../css/BuyController.css";
const BuyController = () => {
  return (
    <>
      <div className="container-fluid d-flex pt-4">
        <button className="addBtn">+</button>
        <span className="quantityArea">0</span>
        <button className="subBtn">-</button>
        <button className="addToCartBtn">Add to cart</button>
      </div>
    </>
  );
};
export default BuyController;
