import "./App.css";
import React, { Suspense } from 'react'
import Home from "./Pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Intern from "./Pages/Intern";

function App() {
  return (
    
    <Router>
      <Routes>
        <Route path="/james-yeo" element={<Home />} />
        <Route path="/Internships" element={<Intern />} />
      </Routes> 
    </Router>
  );
}

export default App;
