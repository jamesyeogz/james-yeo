import { Container } from "@chakra-ui/react";
import React from "react";
import { Feature, Feature_static } from "../components/Feature/Feature";
import { Words,Words2,WordsStatic } from "../components/Feature/Wording";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
const About = (props) => {
  const { ref, inView } = useInView({ threshold: 0.2 });
  const smallLine = props.smallLine;
  const textColor = props.textColor;
  return (  
    <motion.div ref={ref}
    initial={false}
    animate={inView ? {opacity: 1, y:0 } : {opacity: 0, y:50 }}  
    transition={{duration: 1.4, ease: [0.6,0.01,0.23,0.96]}} 
    className="section">
      <Container maxW="container.xl">
        <div className="about-content">
          <div className="about-content-1">
            <Container>
              <h1>About Myself</h1>
            </Container>
          </div>
          <div className="about-content-2">
            <Feature
            content={Words}
              title="Schools"
              smallLine={smallLine}
              textColor={textColor}
            />
            <Feature
            content={Words2}
              title="Certificates"
              smallLine={smallLine}
              textColor={textColor}
            />
            <Feature_static
            content={WordsStatic}
              title="Achievments"
              smallLine={smallLine}
              textColor={textColor}
            />
          </div>
        </div>
      </Container>
    </motion.div>
  );
};

export default About;
