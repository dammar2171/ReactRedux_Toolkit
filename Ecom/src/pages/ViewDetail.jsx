import { FaLaptop } from "react-icons/fa";
import { ImDisplay } from "react-icons/im";
import { FiCpu } from "react-icons/fi";
import { BsGpuCard } from "react-icons/bs";
import { BiSolidBatteryCharging } from "react-icons/bi";
import { GiWeightScale } from "react-icons/gi";
import BuyController from "../components/BuyController";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const ViewDetail = () => {
  const { id } = useParams();
  const products = useSelector((state) => state.products);

  const product = products.find((item) => String(item.id) === id);

  return (
    <>
      <div className="container pt-3">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link to="/">Home</Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              {product.productName}
            </li>
          </ol>
        </nav>
        <hr />
        <div className="row">
          <div className="col-6">
            <img src={product.productImage} alt="" />
          </div>
          <div className="col-6">
            <h3>{product.productName}</h3>
            <h6>{product.productDescription}</h6>
            <p>{product.detail}</p>
            <h6>NPR: {product.productPrice}</h6>
            <h5 className="fw-bold mt-3">Key Specification</h5>
            <div className="key-specs ">
              <div className="d-flex gap-2 ">
                <FaLaptop className="mt-2" />
                <span>
                  <span>Type</span>
                  <p>{product.type}</p>
                </span>
              </div>
              <div className="d-flex gap-2 ">
                <ImDisplay className="mt-2" />
                <span>
                  <span>Display</span>
                  <p>{product.display}</p>
                </span>
              </div>
              <div className="d-flex gap-2 ">
                <FiCpu className="mt-2" />
                <span>
                  <span>Cpu</span>
                  <p>{product.cpu}</p>
                </span>
              </div>
              <div className="d-flex gap-2 ">
                <BsGpuCard className="mt-2" />
                <span>
                  <span>Gpu</span>
                  <p>{product.gpu}</p>
                </span>
              </div>
              <div className="d-flex gap-2 ">
                <BiSolidBatteryCharging className="mt-2" />
                <span>
                  <span>Battery</span>
                  <p>{product.battery}</p>
                </span>
              </div>
              <div className="d-flex gap-2 ">
                <GiWeightScale className="mt-2" />
                <span>
                  <span>Weight</span>
                  <p>{product.weight}</p>
                </span>
              </div>
            </div>
            <BuyController product={product} />
          </div>
        </div>
      </div>
    </>
  );
};
export default ViewDetail;
