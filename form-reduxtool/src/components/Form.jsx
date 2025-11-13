import { useRef, useState } from "react";

const Form = ({ setFormData }) => {
  const firstNameElement = useRef();
  const lastNameElement = useRef();
  const emailElement = useRef();
  const messageElement = useRef();
  const firstsubjectElement = useRef();
  const secondsubjectElement = useRef();
  const thirdsubjectElement = useRef();
  const genderElement = useRef();

  const [openSucessMessage, setOpenSucessMessage] = useState(false);

  const handleForm = (e) => {
    e.preventDefault();

    const firstName = firstNameElement.current.value;
    const lastName = lastNameElement.current.value;
    const email = emailElement.current.value;
    const mathSubject = firstsubjectElement.current.checked;
    const scienceSubject = secondsubjectElement.current.checked;
    const computerSubject = thirdsubjectElement.current.checked;
    const subject = {};
    if (mathSubject) {
      subject.first = "math";
    }
    if (scienceSubject) {
      subject.second = "science";
    }
    if (computerSubject) {
      subject.third = "computer";
    }

    const genderValue = genderElement.current.value;
    let gender = "not selected";
    if (genderValue === "1") gender = "Male";
    else if (genderValue === "2") gender = "Female";
    else if (genderValue === "3") gender = "Other";
    const message = messageElement.current.value;

    const data = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      subject: subject,
      gender: gender,
      message: message,
    };

    setFormData((previousData) => [...previousData, data]);
    firstNameElement.current.value = " ";
    lastNameElement.current.value = " ";
    emailElement.current.value = " ";
    firstsubjectElement.current.checked = false;
    secondsubjectElement.current.checked = false;
    thirdsubjectElement.current.checked = false;
    genderElement.current.value = " ";
    messageElement.current.value = " ";

    setOpenSucessMessage(true);
  };

  return (
    <>
      {openSucessMessage && (
        <div className="alert alert-success" role="alert">
          Data saved sucessfully!
        </div>
      )}
      <form onSubmit={handleForm}>
        <div className="input-group">
          <span className="input-group-text">First and last name</span>
          <input
            ref={firstNameElement}
            type="text"
            aria-label="First name"
            className="form-control"
            required
          />
          <input
            ref={lastNameElement}
            type="text"
            aria-label="Last name"
            className="form-control"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            ref={emailElement}
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            required
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="d-flex align-items-center">
          <p>Select subject you have studies?</p>
          <div className="form-check ms-3">
            <input
              ref={firstsubjectElement}
              className="form-check-input"
              type="checkbox"
              id="defaultCheck1"
            />
            <label className="form-check-label" htmlFor="defaultCheck1">
              Math
            </label>
          </div>
          <div className="form-check ms-2">
            <input
              ref={secondsubjectElement}
              className="form-check-input"
              type="checkbox"
              id="defaultCheck1"
            />
            <label className="form-check-label" htmlFor="defaultCheck1">
              Science
            </label>
          </div>
          <div className="form-check ms-2">
            <input
              ref={thirdsubjectElement}
              className="form-check-input"
              type="checkbox"
              id="defaultCheck1"
            />
            <label className="form-check-label" htmlFor="defaultCheck1">
              Computer
            </label>
          </div>
        </div>
        <select className="form-select mt-3" ref={genderElement}>
          <option value="">Select Gender</option>
          <option value="1">Male</option>
          <option value="2">Female</option>
          <option value="3">Other</option>
        </select>

        <div className="mb-3">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">
            Message
          </label>
          <textarea
            ref={messageElement}
            className="form-control"
            id="exampleFormControlTextarea1"
            rows={3}
            defaultValue={""}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary w-100">
          Submit
        </button>
      </form>
    </>
  );
};
export default Form;
