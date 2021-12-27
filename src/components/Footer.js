import React from "react";
import background_Home from "./img/Home.jpg";
import background_Case from "./img/Case.jpg";
import background_Intern from "./img/Office.png";
import { Link  } from "react-router-dom"; 
const Footer = () => {
  return (
    <div className="section-half">
      
      <div className="footer">
        <div className="footer-content-row">
          <Link to="/james-yeo">
            <div className="background-image" style={{ backgroundImage: `url(${background_Home})` }}></div>
            <h1>Home</h1>
          </Link>
        </div>
        <div
          className="footer-content-row"
        >
          <Link to="/james-yeo">
          <div className="background-image" style={{ backgroundImage: `url(${background_Case})` }}></div>
          <h1>Case Studies</h1>
          </Link>
         
        </div>
        <div
          className="footer-content-row"
        >
          <Link to="/james-yeo/Internships">
          <div className="background-image" style={{ backgroundImage: `url(${background_Intern})` }}></div>
            <h1>Internships</h1>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
