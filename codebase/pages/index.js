import React, { useRef, useState } from "react";
import { Canvas, useFrame, useThree } from "react-three-fiber";
import * as THREE from "three";
import { useRouter } from "next/router";
import { google } from "googleapis";
import Signup from "../components/auth/Signup";

let googleAuth;
export default function Home(props) {
  const router = useRouter();
  return (
    <>
      <div className="h-full">
        <div className="min-h-screen bg-[#121212] flex">
          <div className="flex items-center justify-center overflow-hidden w-full">
            <div className="pb-10 pt-10">
              <div className="relative">
                <h1 className="text-center relative text-white text-[4.5rem] md:text-[9rem] font-deFont font-bold ">
                  mathRanks
                </h1>
                <h1 className="text-center text-white  font-deFont font-semibold text-[1.5rem] md:text-3xl">
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
                  className="bg-white hover:bg-slate-300 text-black font-semibold font-deFont py-[9px] px-5 rounded text-center justify-center mt-7 text-2xl "
                >
                  Dashboard
                </button>
              </div>
              <div className=" sm:h-12"></div>
            </div>
          </div>
        </div>
        <div className="bg-white">
          <h1 className="font-extrabold text-center text-black text-6xl font-deFont p-7 pt-9">
            Trusted and <u>Growing.</u>
          </h1>
          <div className="flex pb-8">
            <div className="w-1/2">
              <h2 className="text-2xl font-bold font-deFont text-black text-center ">
                Page Views
              </h2>
              <h2 className="text-5xl font-extrabold font-deFont text-black text-center">
                {props.pageViews}
              </h2>
            </div>
            <div className="w-1/2">
              <h2 className="text-2xl font-bold font-deFont text-black text-center">
                Users
              </h2>
              <h2 className="text-5xl font-extrabold font-deFont text-black text-center">
                {props.userCount}
              </h2>
            </div>
          </div>
        </div>
        <div className="bg-[#121212] mb-10 pt-10 px-5">
          <div>
            <div className="md:flex ">
              <div className="md:w-1/3 w-full">
                <div className="bg-cardColorDark border-[0.5px] border-borderCardColor m-4 py-5 rounded">
                  <h1 className="text-center font-bold md:text-4xl text-3xl">
                    Frequent.
                  </h1>
                  <p className="text-center font-deFont m-4 md:text-lg text-base font-light">
                    We noticed that many high quality math competitions are only
                    held anually or rather infrequently. We are working to hold
                    around 4-5 high-quality competitions a month to allow
                    flexibility to those interested in sharpening there math
                    skills.
                  </p>
                  <div className="text-center w-full -mt-6">
                    {/* <button
                    onClick={() => router.push("/signup")}
                    className="bg-white hover:bg-slate-300 text-black font-semibold font-deFont py-[9px] px-5 rounded text-center justify-center mt-7 text-xl "
                  >
                    Register
                  </button> */}
                  </div>
                </div>
              </div>
              <div className="md:w-1/3 w-full">
                <div className="bg-cardColorDark border-[0.5px] border-borderCardColor m-3 py-5 rounded">
                  <h1 className="text-center font-bold md:text-4xl text-3xl">
                    Competition.
                  </h1>
                  <p className="text-center  font-deFont m-4 md:text-lg text-base font-light">
                    Seeing your progress is important when developing a skill.
                    We have employed an elo system to allow users to measure
                    their progress over time. Additionally, we publish
                    leaderboards for most competitions when they are finished
                    and graded.
                  </p>{" "}
                  <div className="text-center w-full -mt-6">
                    {/*  <button
                    onClick={() => router.push("/contests")}
                    className="bg-white hover:bg-slate-300 text-black font-semibold font-deFont py-[9px] px-5 rounded text-center justify-center mt-7 text-xl "
                  >
                    Compete
                  </button> */}
                  </div>
                </div>
              </div>
              <div className="md:w-1/3 w-full">
                <div className="bg-cardColorDark border-[0.5px] border-borderCardColor m-4 py-5 rounded">
                  <h1 className="text-center font-bold md:text-4xl text-3xl">
                    Practice.
                  </h1>
                  <p className="text-center  font-deFont m-4 md:text-lg text-base font-light">
                    Couldn&apos;t catch the live contest? That&apos;s totally
                    fine! We archive all live contests and allow users to
                    practice on them long after the contest is over. Answers are
                    graded, but results do not effect elo.
                  </p>{" "}
                  <div className="text-center w-full -mt-6">
                    {/* <button
                    onClick={() => router.push("/contests")}
                    className="bg-white hover:bg-slate-300 text-black font-semibold font-deFont py-[9px] px-5 rounded text-center justify-center mt-7 text-xl "
                  >
                    Practice
                  </button> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
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
  function numFormatter(num) {
    if (num > 999 && num < 1000000) {
      return (num / 1000).toFixed(1) + "K"; // convert to K for number from > 1000 < 1 million
    } else if (num > 1000000) {
      return (num / 1000000).toFixed(1) + "M"; // convert to M for number from > 1 million
    } else if (num < 900) {
      return num; // if value < 1000, nothing to do
    }
  }
  const pV = parseInt(response.data.rows[0][0]);
  const pViews = numFormatter(pV);
  const uC = parseInt(response2.data.rows[0][0]);
  const uCount = numFormatter(uC);
  return {
    props: {
      pageViews: pViews,
      userCount: uCount,
    },
    revalidate: 60,
  };
}
