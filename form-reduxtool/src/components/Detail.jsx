const Detail = ({ formData }) => {
  return (
    <div>
      {formData.map((item, index) => (
        <div key={index}>
          <div className="d-flex align-items-center">
            <h4>FullName:</h4>
            <span>{item.firstName}</span>
            <span>{item.lastName}</span>
          </div>
          <div className="d-flex align-items-center">
            <h4>Email:</h4>
            <span>{item.email}</span>
          </div>
          <div className="d-flex align-items-center">
            <h4>Subject List</h4>
            <ul>
              {item.subject.first && <li>{item.subject.first}</li>}
              {item.subject.second && <li>{item.subject.second}</li>}
              {item.subject.third && <li>{item.subject.third}</li>}
            </ul>
          </div>
          <div className="d-flex align-items-center">
            <h4>Gender:</h4>
            <span>{item.gender}</span>
          </div>
          <div className="d-flex align-items-center">
            <h4>Message:</h4>
            <span>{item.message}</span>
          </div>
        </div>
      ))}
      {formData.length == 0 && (
        <h4 className="text-center py-5 text-danger">Details Not Found!!</h4>
      )}
    </div>
  );
};
export default Detail;
