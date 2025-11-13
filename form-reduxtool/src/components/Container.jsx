import Detail from "./Detail";
import Form from "./Form";
import Heading from "./Heading";

const Container = ({
  handleDetail,
  openDetail,
  setOpenDetail,
  formData,
  setFormData,
}) => {
  return (
    <div className="container-fluid pt-5">
      <div className="container">
        <div className="row">
          <div className="col-2"></div>
          <div className="col-8 shadow-lg costum-container">
            {openDetail ? (
              <>
                <Heading
                  openDetail={openDetail}
                  setOpenDetail={setOpenDetail}
                />
                <hr />
                <Detail formData={formData} />
              </>
            ) : (
              <>
                <Heading
                  openDetail={openDetail}
                  handleDetail={handleDetail}
                  setOpenDetail={setOpenDetail}
                />
                <hr />
                <Form setFormData={setFormData} />
              </>
            )}
          </div>
          <div className="col-2"></div>
        </div>
      </div>
    </div>
  );
};
export default Container;
