import React from "react";
import "./Feature.css";
import { motion } from "framer-motion";


const Feature2 = () => {
  return (
    <div>
      <p>Hello This works</p>
    </div>
  );
};
export const Feature = (props) => {
  const smallLine = props.smallLine
  const content = props.content
  // const content={ 
  //   Before_1: "Hello World",
  //   After_1: "Byebye World",
  //   Before_2: "Hello World 1",
  //   After_2: "Byebye World 2",
  //   Before_3: " Hello World 1",
  //   After_3: " Byebye World 3",


  // }
  // const content = props.content;
  const title = props.title;
  const textColor = props.textColor
  return (
    <div className="feature-content">
      <div className="feature-content-header ">
        <h4>{title}</h4>
        <div className={smallLine} />
      </div>
      <div className="feature-content-points"   >
        <div
          className="feature-content-animation wrap"
        
          before-words={content.Before_1}
          after-words={content.After_1}
        />
        <div
          className="feature-content-animation wrap padding-1"
          before-words={content.Before_2}
          after-words={content.After_2}
        />
        <div
          className="feature-content-animation wrap padding-2"
          before-words={content.Before_3}
          after-words={content.After_3}
        />
      </div>
    </div>
  );
};

export const Feature_static = (props) => {
  const textColor = props.textColor
  const smallLine = props.smallLine
  const content = props.content
  // const content =[
  //   "Testing Before Static 1",
  //   "Testing Before Static 2",
  //   "Testing Before Static 3"
  // ]
  const mapping = content.map((content) => <p>{content}</p>)
  // const content = props.content;
  const title = props.title;
  return (
    <div className="feature-content">
      <div className="feature-content-header" >
        <h4>{title}</h4>
        <div className={smallLine} />
      </div>
      <div className="feature-content-points static">
        {mapping}
      </div>
    </div>
  );
};
