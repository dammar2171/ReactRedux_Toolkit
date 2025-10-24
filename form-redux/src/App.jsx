import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Display from "./components/pages/Display.jsx";
import Home from "./components/pages/Home.jsx";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details" element={<Display />} />
      </Routes>
    </Router>
  );
}

export default App;
