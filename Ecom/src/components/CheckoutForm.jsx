import "../css/CheckoutForm.css";
const CheckoutForm = () => {
  return (
    <form className="costum-checkoutForm">
      <div className="mb-3">
        <label htmlFor="usernameControlInput1" className="form-label">
          Username
        </label>
        <input
          type="email"
          className="form-control"
          id="usernameControlInput1"
          placeholder="username"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="numberControlInput1" className="form-label">
          Phone Number
        </label>
        <input
          type="text"
          className="form-control"
          id="phoneControlInput1"
          placeholder="phone number"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">
          Email Address
        </label>
        <input
          type="email"
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="name@example.com"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="shippingaddressControlInput1" className="form-label">
          Shipping Address
        </label>
        <input
          type="text"
          className="form-control"
          id="shippingaddressControlInput1"
          placeholder="Shipping Address"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleFormControlTextarea1" className="form-label">
          Message
        </label>
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows={3}
          defaultValue={""}
        />
      </div>
      <button className="checkoutBtn">Checkout</button>
    </form>
  );
};
export default CheckoutForm;
