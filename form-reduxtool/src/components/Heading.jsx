const Heading = ({ handleDetail, setOpenDetail, openDetail }) => {
  const handleBack = () => {
    setOpenDetail(false);
  };
  return (
    <div className="d-flex align-items-center justify-content-between">
      {openDetail ? (
        <>
          {" "}
          <h1>Detail</h1>
          <button onClick={handleBack} className="btn btn-info w-10">
            Back
          </button>
        </>
      ) : (
        <>
          <h1>Form</h1>
          <button onClick={handleDetail} className="btn btn-info w-10">
            View Detail
          </button>
        </>
      )}
    </div>
  );
};
export default Heading;
