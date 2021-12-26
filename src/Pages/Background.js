import React from 'react'
import { Canvas, useLoader, useFrame } from "@react-three/fiber";
import { Html, OrbitControls, Sky, Stars } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Suspense, useEffect, useRef, useState } from "react";
import { AnimationMixer } from "three";
import './Background.css'
const Birds = (props) => {
  const x_position= props.x_start
  const y_position = props.y_start
  const Model_Bird = useLoader(GLTFLoader, "./birds/scene.gltf");
  const mesh = useRef();
  const [start] = useState(() => Math.random() * 5000);
  const initial = {
    x: x_position,
    y: y_position,
  }; 
  const [mixer] = useState(() => new AnimationMixer());
  useEffect(
    () => void mixer.clipAction(Model_Bird.animations[0], mesh.current).play(),
    []
  );
  useFrame((state, delta) => { 
    if (mesh.current.position.z <= -100) {
      mesh.current.position.z = 60;
    } else {
      mesh.current.position.z -= 0.1;
    }
    mesh.current.position.x =
      initial.x + Math.sin(start + state.clock.elapsedTime) * 3;
    mesh.current.position.y =
      initial.y + Math.sin(start + state.clock.elapsedTime) * 3;
    mixer.update(delta * 1);
  });
  return (
    <>
      {/* position={[-50,20,-30]}   */}
      <primitive
        ref={mesh}
        object={Model_Bird.scene}
        scale={2}
        rotation={[0, 0, 0]}
       
      />
    </>
  );
};
const Background = (props, {children}) => {
  const Light = props.Light
    return (
        < div className='background-threejs' >
                <Canvas shadowMap camera={{ position: [-30, -40 , 10], fov:90 } }>
        <Html fullscreen>{children}</Html>
        { 
          Light ? <Sky sunPosition={[1, 0, 0]} rayleigh={3} /> :  <Stars />
        }
       
        
        <directionalLight intensity={3} />
        <Birds x_start={-10} y_start={0}/>
        
      </Canvas >
        </div>
    

    )
}

export default Background
