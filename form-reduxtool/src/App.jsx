import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Container from "./components/Container";
import { useState } from "react";

function App() {
  const [formData, setFormData] = useState([]);
  const [openDetail, setOpenDetail] = useState(false);
  const handleDetail = () => {
    setOpenDetail(true);
  };
  return (
    <>
      <Container
        openDetail={openDetail}
        setOpenDetail={setOpenDetail}
        handleDetail={handleDetail}
        formData={formData}
        setFormData={setFormData}
      />
    </>
  );
}

export default App;
