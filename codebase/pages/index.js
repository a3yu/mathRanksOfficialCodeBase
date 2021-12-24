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
              <h1 className="  text-center relative text-white text-[9rem] font-deFont font-bold z-10">
                mathRanks
              </h1>
              <h1 className="blur-[40px] absolute z-0 justify-center inset-0 text-center text-[9rem] font-deFont font-[600] bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-violet-900">
                mathRanks
              </h1>
              <h1 className="text-center text-white text-3xl font-deFont font-semibold">
                A{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-violet-900">
                  Math Competition Platform
                </span>{" "}
                Made For{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-violet-900">
                  Everyone
                </span>
                .
              </h1>
            </div>
            {/* <div className="text-center mt-5">
              <button className=" bg-linkColorDark hover:bg-linkColorDarkHover text-black font-bold py-2 px-4 border border-[#A9C5EA] rounded">
                Go To Dashboard
              </button>
            </div> */}
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
