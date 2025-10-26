import logo from "../assets/logo.jpg";
import "../css/Header.css";
import { FiShoppingBag } from "react-icons/fi";
import user from "../assets/user.png";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deleteFromBag } from "../store/BagSlice";

const Header = () => {
  const bag = useSelector((state) => state.bag);
  const dispatch = useDispatch();

  return (
    <>
      <header className="p-3 border-bottom shadow">
        <div className="container">
          <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
            <Link
              to="/"
              className="d-flex align-items-center mb-2 mb-lg-0 link-body-emphasis text-decoration-none"
            >
              <img src={logo} width={50} height={40} className="rounded" />
            </Link>

            <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0 ms-5">
              <li>
                <Link
                  to="/"
                  className="nav-link px-2 link-body-emphasis costum-link-header"
                >
                  Home
                </Link>
              </li>
              <li>
                <a
                  href="#"
                  className="nav-link px-2 link-body-emphasis costum-link-header"
                >
                  Shop
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="nav-link px-2 link-body-emphasis costum-link-header"
                >
                  Favorite
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="nav-link px-2 link-body-emphasis costum-link-header"
                >
                  Products
                </a>
              </li>
            </ul>

            <form
              className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3"
              role="search"
            >
              <input
                type="search"
                className="form-control"
                placeholder="Search..."
                aria-label="Search"
              />
            </form>

            {/* Bag Button with Offcanvas Trigger */}
            <button
              className="bagBtn me-3"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasRight"
              aria-controls="offcanvasRight"
            >
              <FiShoppingBag className="bag" />
              {bag.length > 0 && (
                <span className="badge text-bg-danger">{bag.length}</span>
              )}
            </button>

            <div className="dropdown text-end">
              <a
                href="#"
                className="d-block link-body-emphasis text-decoration-none dropdown-toggle"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <img
                  src={user}
                  alt="user"
                  width={32}
                  height={32}
                  className="rounded-circle"
                />
              </a>
              <ul className="dropdown-menu text-small">
                <li>
                  <a className="dropdown-item" href="#">
                    New project...
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Settings
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Profile
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Sign out
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>

      {/* Offcanvas Component */}
      <div
        className="offcanvas offcanvas-end"
        tabIndex="-1"
        id="offcanvasRight"
        aria-labelledby="offcanvasRightLabel"
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasRightLabel">
            Your Bag
          </h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body">
          {bag.length === 0 ? (
            <p className="text-center mt-5">Your bag is empty.</p>
          ) : (
            <>
              <div className="bag-header">
                <h6>Name</h6>

                <span>
                  <span style={{ marginRight: "1rem" }}>Price </span>Delete
                </span>
              </div>

              {bag.map((item, index) => (
                <div className="bag-item" key={index}>
                  <img src={item.productImage} alt={item.productName} />
                  <div className="bag-item-details">
                    <h6>{item.productName}</h6>
                    <p>Qty: {item.quantity}</p>
                  </div>
                  <span>NPR {item.productPrice}</span>
                  <button onClick={() => dispatch(deleteFromBag(item.id))}>
                    ×
                  </button>
                </div>
              ))}
              <div className="bag-total">
                <span>Total:</span>
                <span>
                  NPR{" "}
                  {bag.reduce(
                    (total, item) => total + item.productPrice * item.quantity,
                    0
                  )}
                </span>
              </div>
              <button className="checkout-btn">Proceed to Checkout</button>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Header;
