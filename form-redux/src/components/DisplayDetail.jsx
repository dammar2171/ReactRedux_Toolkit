import { useSelector } from "react-redux";

const DisplayDetail = () => {
  const details = useSelector((state) => state.form);

  return (
    <section className="container mt-5">
      {details.length > 0 && (
        <h3 className="text-center mb-4">
          Display all the details of the submitted form data here.
        </h3>
      )}

      {details.length === 0 ? (
        <p className="text-center text-muted">No form data submitted yet.</p>
      ) : (
        details.map((item) => (
          <ul className="list-group mb-4" key={item.id}>
            <li className="list-group-item">Name: {item.name}</li>
            <li className="list-group-item">Email: {item.email}</li>
            <li className="list-group-item">Age: {item.age}</li>
            <li className="list-group-item">Gender: {item.gender}</li>
            <li className="list-group-item">Number: {item.number}</li>
            <li className="list-group-item">Message: {item.message}</li>
          </ul>
        ))
      )}
    </section>
  );
};

export default DisplayDetail;
