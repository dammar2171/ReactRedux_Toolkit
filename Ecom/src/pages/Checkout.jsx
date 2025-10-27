import CheckoutForm from "../components/CheckoutForm";
import CheckoutDetail from "../components/CheckoutDetail"

const Checkout = () => {
  return (
    <>
      <div className="container-fluid py-5">
        <div className="container">
          <div className="row">
            <div className="col-6">
              <CheckoutDetail/>
            </div>
            <div className="col-6">
              <CheckoutForm />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Checkout;
