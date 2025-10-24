import { useNavigate } from "react-router-dom";
const Controller = () => {
  const navigate = useNavigate();

  const handleFormClick = () => {
    navigate("/");
  };

  const handleDisplayClick = () => {
    navigate("/details");
  };
  return (
    <div
      className="btn-group d-flex justify-content-center"
      role="group"
      aria-label="Basic example"
    >
      <button type="button" className="btn btn-secondary" onClick={handleFormClick}>
        Form
      </button>
      <button
        type="button"
        className="btn btn-primary"
        onClick={handleDisplayClick}
      >
        Display
      </button>
    </div>
  );
};
export default Controller;
