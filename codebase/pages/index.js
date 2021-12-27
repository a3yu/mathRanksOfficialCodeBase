import React, { useRef } from "react";
import { Canvas, useFrame, useThree } from "react-three-fiber";
import * as THREE from "three";
import { useRouter } from "next/router";
import { google } from "googleapis";
let googleAuth;
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
export default function Home(props) {
  console.log(props.pageViews);
  console.log(props.userCount);
  const router = useRouter();
  return (
    <div className="h-full ">
      <div className="min-h-fit h-screen bg-black flex ">
        <div className="absolute w-full h-full">
          <Canvas>
            <Box />
          </Canvas>
        </div>
        <div className=" flex items-center justify-center w-full">
          <div className="pb-10 z-10">
            <div className="relative">
              <h1 className="  text-center relative text-white text-[9rem] font-deFont font-bold z-10">
                mathRanks
              </h1>
              <h1 className="blur-[40px] absolute z-0 justify-center inset-0 text-center text-[9rem] font-deFont font-[600] bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-violet-900">
                mathRanks
              </h1>
              <h1 className="text-center text-white text-3xl font-deFont font-semibold">
                A{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600">
                  Math Competition Platform
                </span>{" "}
                Made For{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600">
                  Everyone
                </span>
                .
              </h1>{" "}
            </div>
            <div className="text-center w-full">
              <button
                onClick={() => router.push("/dashboard")}
                className="bg-white hover:bg-slate-300 text-black font-semibold font-deFont py-3 px-5 rounded text-center justify-center mt-7 text-2xl "
              >
                Dashboard
              </button>
            </div>

            {/* <div className="text-center mt-5">
              <button className=" bg-linkColorDark hover:bg-linkColorDarkHover text-black font-bold py-2 px-4 border border-[#A9C5EA] rounded">
                Go To Dashboard
              </button>
            </div> */}
          </div>
        </div>
      </div>
      <div className="bg-white">
        <h1 className="font-extrabold text-black text-[55px] font-deFont p-7">
          Trusted and <u>Growing.</u>
        </h1>
        <p></p>
      </div>
    </div>
  );
}

export async function getStaticProps() {
  googleAuth = new google.auth.GoogleAuth({
    credentials: {
      client_email: process.env.GOOGLE_CLIENT_EMAIL,
      private_key: process.env.GOOGLE_PRIVATE_KEY,
    },
    scopes: ["https://www.googleapis.com/auth/analytics.readonly"],
  });
  console.log(googleAuth);
  const analytics = google.analytics({
    auth: googleAuth,
    version: "v3",
  });
  const response = await analytics.data.ga.get({
    "end-date": "today",
    ids: "ga:257594201",
    metrics: "ga:pageviews",
    "start-date": "2021-01-01",
  });
  const response2 = await analytics.data.ga.get({
    "end-date": "today",
    ids: "ga:257594201",
    metrics: "ga:users",
    "start-date": "2021-01-01",
  });
  console.log(response.data.rows[0][0] + 4940);
  function numFormatter(num) {
    if (num > 999 && num < 1000000) {
      return (num / 1000).toFixed(1) + "K"; // convert to K for number from > 1000 < 1 million
    } else if (num > 1000000) {
      return (num / 1000000).toFixed(1) + "M"; // convert to M for number from > 1 million
    } else if (num < 900) {
      return num; // if value < 1000, nothing to do
    }
  }
  const pViews = numFormatter(response.data.rows[0][0] + 4940);
  const uCount = numFormatter(response2.data.rows[0][0] + 340);
  return {
    props: {
      pageViews: pViews,
      userCount: uCount,
    },
    revalidate: 60,
  };
}
