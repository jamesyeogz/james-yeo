import { Container } from "@chakra-ui/react";
import React, { useEffect } from "react";
import "./Case.css";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import DIP from "../components/img/DIP.png";
import DIP2 from "../components/img/DIP2.png";
import DIP3 from "../components/img/DIP3.png";
import { Case_Studies_Extract } from "../components/Feature/Wording";

const Animation_ = (props) => {
  const { ref, inView } = useInView({ threshold: 0.2 });
  const boxAnimation3 = {
    onscreen: {
      opacity: 1,
      x: 100,
      transition: {
        type: "spring",
        bounce: 0.5,
        duration: 3,
        smooth: true,
      },
      offscreen: {
        opacity: 0,
        x: -200,
        transition: {
          type: "spring",
          duration: 3,
          smooth: true,
        },
      },
    },
  };
  const boxAnimation2 = {
    onscreen: {
      opacity: 1,
      x: -200,
      transition: {
        type: "spring",
        bounce: 0.5,
        duration: 3,
        smooth: true,
      },
      offscreen: {
        opacity: 0,
        x: 500,
        transition: {
          type: "spring",
          duration: 3,
          smooth: true,
        },
      },
    },
  };
  const boxAnimation1 = {
    onscreen: {
      opacity: 1,
      y: -100,
      transition: {
        type: "spring",
        bounce: 0.5,
        duration: 3,
        smooth: true,
      },
      offscreen: {
        opacity: 0,
        y: 500,
        transition: {
          type: "spring",
          duration: 3,
          smooth: true,
        },
      },
    },
  };

  useEffect(() => {
    console.log("use effect hook, inView", inView);
  });
  const contents = props.contents;
  const title = props.title;
  const list_map = contents.map((content) => <li>{content}</li>);
  return (
    <motion.div className="section case-content-animate">
      <div className="case-content-left">
        <Container>
          <h1>{title}</h1>
          <ul>{list_map}</ul>
        </Container>
      </div>
      <motion.div
        className="case-content-right"
        ref={ref}
        initial={false}
        animate={inView ? "onscreen" : "offscreen"}
      >
        <motion.div className="box1" variants={boxAnimation1}>
          <img src={DIP} alt="DIP" />
        </motion.div>
        <motion.div className="box2" variants={boxAnimation2}>
          <img src={DIP2} alt="DIP" />
        </motion.div>
        <motion.div className="box3" variants={boxAnimation3}>
          <img src={DIP3} alt="DIP" />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

const Case = () => {
  const contents = Case_Studies_Extract.content;
  const title = Case_Studies_Extract.title;

  return (
    <div id="Case Studies" className="section-header">
      <Container maxW="container.xl">
        <div className="case-content">
          <div className="case-content-1">
            <Container>
              <h1>Case-studies</h1>
            </Container>
          </div>

          <Animation_ title={title} contents={contents} />
        </div>
      </Container>
    </div>
  );
};

export default Case;
