import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { submitForm } from "../store/FormSlice";

const Form = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleViewDetail = () => {
    navigate("/details");
  };
  const nameElement = useRef();
  const emailElement = useRef();
  const ageElement = useRef();
  const genderElement = useRef();
  const numberElement = useRef();
  const messageElement = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = nameElement.current.value;
    const email = emailElement.current.value;
    const number = numberElement.current.value;
    const gender = genderElement.current.value;
    const message = messageElement.current.value;
    const age = ageElement.current.value;
    const id = Date.now();

    dispatch(submitForm({ id, name, email, number, gender, message, age }));

    nameElement.current.value = "";
    emailElement.current.value = "";
    ageElement.current.value = "";
    genderElement.current.value = "";
    numberElement.current.value = "";
    messageElement.current.value = "";
  };
  return (
    <div className="container mt-5">
      <h3 className="text-center">Registration Form</h3>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            ref={nameElement}
            className="form-control"
            id="name"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            ref={emailElement}
            className="form-control"
            id="email"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="age" className="form-label">
            Age
          </label>
          <input
            type="number"
            ref={ageElement}
            className="form-control"
            id="age"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="gender" className="form-label">
            Gender
          </label>
          <select className="form-select" ref={genderElement} id="gender">
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div className="mb-3">
          <label htmlFor="number" className="form-label">
            Number
          </label>
          <input
            type="number"
            ref={numberElement}
            className="form-control"
            id="number"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="message" className="form-label">
            Message
          </label>
          <textarea
            ref={messageElement}
            className="form-control"
            id="message"
            rows="3"
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary w-100">
          Submit
        </button>
        <button
          type="button"
          onClick={handleViewDetail}
          className="btn btn-secondary w-100 mt-2"
        >
          view Details
        </button>
      </form>
    </div>
  );
};
export default Form;
