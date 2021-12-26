import React , {useState}from "react";
import Footer from "../components/Footer"; 
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import About from "./About"; 
import Background from "./Background";

import Case from "./Case";
import Intern from "./Intern";

const Home = () => {
  const [Light, setLight] = useState(true);
  const [smallLine, setSmallLine] = useState("border-line-small");
  const [Line, setLine] = useState("border-line");
  const [textColor, setTextColour] = useState('#000')
  const handleLight = () => {
    setLight(!Light);
    setTextColour(Light ? '#fff' : '#000')
    setLine(Light ?   "border-line-white" : "border-line" );
    setSmallLine(Light ? "border-line-small-white" : 'border-line-small')
  };
  
    
  return (
    <div style={{ color: textColor}}>
      <Background Light={Light}/>
      <Navbar Light={Light} handleLight={handleLight}/>
        <Header Light={Light} Line={Line}/>
        <About Light={Light} smallLine={smallLine} textColor={textColor}/>
        <Case />
      <Footer />
    </div>
  );
};

export default Home;
