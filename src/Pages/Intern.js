import { Container } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { Internship_Extract } from "../components/Feature/Wording";
import "./Intern.css";
import Lidar from "../components/img/Lidar.jpg";
import { Canvas, useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { OrbitControls } from "@react-three/drei";
import Background_image from "../components/img/Sky.jpg";

const WorkSpace = () => {
  const work = useLoader(GLTFLoader, "./workspace/scene.gltf");
  return (
    <>
      <primitive
        object={work.scene}
        scale={1}
        rotation={[0, 0, 0]}
        position={[0, 0, 0]}
      />
    </>
  );
};

const Intern = () => {
  const title = Internship_Extract.title;
  const mapping = Internship_Extract.para.map((paragraph) => (
    <p>{paragraph}</p>
  ));
  const Light = true;
  return (
    <div
      id="Internships"
      style={{
        backgroundImage: `url(${Background_image})`,
        backgroundRepeat: "no-repeat", 
        "background-position": "center",
        "background-size": "cover",
        'background-opacity' : '0.5',
      }}
    >
      <div>
        <Navbar Light={Light} />

        <div className="internship-content">
          <Container>
            <div className="internship-content-js">
              <Canvas camera={{ position: [-20, 5, 0] }}>
                <ambientLight intensity={2} />
                <OrbitControls autoRotate />
                <WorkSpace />
              </Canvas>
            </div> 
          </Container>
 
          <div className="internship-content-header">
            <Container> 
              <h1>My Internships</h1>
            </Container>
          </div>
          <div className="internship-content-body "> 
            <Swiper
              modules={[Navigation, Pagination, Scrollbar, A11y]}
              spaceBetween={50}
              slidesPerView={1}
              navigation
            >
              <SwiperSlide>
                <div className="Swiper-container"> 
                  <h1>1.{title}</h1>
                  <img src={Lidar} alt="Lidar"/>
                  <div className="Swiper-container-content">{mapping} </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <Container>
                  <h1>2.</h1>
                  <h1>Panasonic Internship</h1>
                  <p>Coming Soon...</p>
                </Container>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Intern;
