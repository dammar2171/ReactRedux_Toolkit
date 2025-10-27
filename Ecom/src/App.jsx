import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ViewDetail from "./pages/ViewDetail";
import Checkout from "./pages/Checkout";
import WhatsAppButton from "./components/WhatsAppButton";
function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/detail/:id" element={<ViewDetail />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
        <WhatsAppButton />
        <Footer />
      </Router>
    </>
  );
}

export default App;
