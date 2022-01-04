import React from "react";
import PropTypes from "prop-types";
import Head from "next/head";
import CssBaseline from "@material-ui/core/CssBaseline";
import Amplify from "aws-amplify";
import awsconfig from "../src/aws-exports";
import AuthContext from "../context/AuthContext";
import { useEffect } from "react";
import "../styles/main.css";
import { transitions, positions, Provider as AlertProvider } from "react-alert";
import { Router, useRouter } from "next/router";
import NProgress from "../nprogress";
import "../nprogress/nprogress.css";
import * as ga from "../lib/ga";
import dynamic from "next/dynamic";
import Footer from "../components/Footer";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "../src/theme";
const Navbar = dynamic(() => import("../components/Navigation"), { ssr: true });
/* const Footer = dynamic(() => import("../components/Footer"), { ssr: true }); */

Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

Amplify.configure({ ...awsconfig, ssr: true, cookieStore: false });
const alertStyle = {
  backgroundColor: "#151515",
  color: "white",
  padding: "10px",
  borderRadius: "3px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  boxShadow: "0px 2px 2px 2px rgba(0, 0, 0, 0.03)",
  fontFamily: "Arial",
  width: "300px",
  boxSizing: "border-box",
};
const buttonStyle = {
  marginLeft: "20px",
  border: "none",
  backgroundColor: "transparent",
  cursor: "pointer",
  color: "#FFFFFF",
};
const AlertTemplate = ({ style, message, close }) => (
  <div style={{ ...alertStyle, ...style }}>
    {message}
    <button onClick={close} style={buttonStyle}>
      x
    </button>
  </div>
);
const options = {
  // you can also just use 'bottom center'
  position: positions.BOTTOM_RIGHT,
  timeout: 5000,
  offset: "30px",
  transition: transitions.SCALE,
};
const MyApp = (props) => {
  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);
  const router = useRouter();
  React.useEffect(() => {
    const handleRouteChange = (url) => {
      ga.pageview(url);
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);
  const { Component, pageProps } = props;
  const noNav = [
    "/login",
    "/signup",
    "/contests/[...contNumber]",
    "/confirm",
    "/changePassword",
  ];
  const { asPath } = router;

  return (
    <React.Fragment>
      <Head>
        <title>mathRanks</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
        <meta
          name="description"
          content="mathRanks. A math competition platform for everyone."
        />
      </Head>
      <AuthContext>
        <AlertProvider template={AlertTemplate} {...options}>
          <Navbar />
          <ThemeProvider theme={theme}>
            {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
            <CssBaseline />
            <Component {...pageProps} />

            {noNav.includes(asPath) ? null : <Footer />}
          </ThemeProvider>
        </AlertProvider>
      </AuthContext>
    </React.Fragment>
  );
};

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};

export default MyApp;
