import React, { useRef } from "react";
import { Canvas, useFrame, useThree } from "react-three-fiber";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";
function Box() {
  const base = new THREE.DodecahedronGeometry(100);
  const boxRef = useRef();
  useFrame(() => {
    boxRef.current.rotation.y += 0.0007;
    boxRef.current.rotation.x += 0.0007;
  });
  useThree(({ camera }) => {
    camera.position.z = 1.75;
  });
  return (
    <mesh ref={boxRef}>
      <hemisphereLight args={[0x00ff4d, 0xfe4466, 2]} />
      <directionalLight args={[0xffffff, 1]} />
      <icosahedronBufferGeometry attach="geometry" />
      <meshStandardMaterial wireframe color={0x31529f} />
    </mesh>
  );
}
export default function threetest() {
  return (
    <div className="h-full ">
      <div className="min-h-fit h-screen bg-black flex ">
        <div className=" flex items-center justify-center w-full">
          <div className="pb-10 z-10 w-1/2">
            <div className="relative">
              <h1 className="text-center relative text-white text-[4rem] font-deFont font-bold z-10">
                mathRanks
              </h1>
              <h1 className=" blur-[15px] absolute z-0 justify-center inset-0 text-center text-[4rem] font-deFont font-[600] bg-clip-text text-transparent bg-gradient-to-r from-blue-200 to-violet-500">
                mathRanks
              </h1>
              <h1 className="text-center  text-white text-2xl font-deFont font-normal">
                A Math Competition Platform Made For Everyone.
              </h1>
            </div>
          </div>
          <div className="w-1/2 h-full  top-0 z-0">
            <Canvas>
              <Box />
            </Canvas>
          </div>
        </div>
      </div>
    </div>
  );
}
