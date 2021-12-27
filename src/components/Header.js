import { Container } from "@chakra-ui/react";
import React from "react";
import { motion } from "framer-motion";

const Header = (props) => {
  // const Light = props.Light;
  const Line = props.Line;

  return (
    <motion.div 
    initial={{opacity: 0, y:50}} 
    animate={{opacity: 1, y:0}} 
    transition={{duration: 1.4, ease: [0.6,0.01,0.23,0.96]}}
     
    className="section header" id="Home"> 
      <div className="header-top">
        <div className="header-content" >
          <Container>
            <h1>James Yeo</h1>
            <h3>Electrical Engineer | Software Developer</h3>
            <div className={Line} />
          </Container>
 
          <Container> 
            <p> 
              I aspire to be innovating new technologies and explore new realms
              of Software Development. I specialise mostly in Frontend and 
              Backend Development.
            </p>
          </Container>
        </div>
      </div>
    </motion.div>
  );
};

export default Header;
