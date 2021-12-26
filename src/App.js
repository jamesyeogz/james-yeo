import "./App.css";
import Home from "./Pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Intern from "./Pages/Intern";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <Routes>
       
        <Route path="/" element={<Home />} />
        <Route path="/Internships" element={<Intern />} />
      </Routes>
    </Router>
  );
}

export default App;
