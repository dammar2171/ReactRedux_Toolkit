import { useLocation } from "react-router-dom";
import DisplayDetail from "./DisplayDetail.jsx";
import Form from "./Form.jsx";
const Container = () => {
  const location = useLocation();
  return (
    <div className="container-fluid">
      <div className="container">
        <div className="row">
          <div className="col-2"></div>
          <div className="col-8">
            <div className="card mt-5 p-4 shadow">
              {location.pathname === "/" ? <Form /> : <DisplayDetail />}
            </div>
          </div>
          <div className="col-2"></div>
        </div>
      </div>
    </div>
  );
};

export default Container;
