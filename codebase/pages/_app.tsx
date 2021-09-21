import React, { useEffect } from "react";
import PropTypes from "prop-types";
import Head from "next/head";
import { ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import theme from "../src/theme";
import Navbar from "../components/Navigation";
import Amplify, { Auth } from "aws-amplify";
import awsconfig from "../src/aws-exports";
import AuthContext from "../context/AuthContext";
import Footer from "../components/Footer";
import "../styles/globals.scss";
import { transitions, positions, Provider as AlertProvider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";
import { useRouter } from "next/router";

Amplify.configure({ ...awsconfig, ssr: true });
const options = {
  // you can also just use 'bottom center'
  position: positions.BOTTOM_CENTER,
  timeout: 5000,
  offset: "30px",
  // you can also just use 'scale'
  transition: transitions.SCALE,
};
export default function MyApp(props) {
  const { Component, pageProps } = props;
  const noNav = ["/login", "/signup"];
  const router = useRouter();
  const { asPath } = router;

  React.useEffect(() => {
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <React.Fragment>
      <Head>
        <title>MathRanks</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <AuthContext>
        <AlertProvider template={AlertTemplate} {...options}>
          <ThemeProvider theme={theme}>
            {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
            <CssBaseline />
            <Navbar />
            <Component {...pageProps} />
            {noNav.includes(asPath) ? null : <Footer />}
          </ThemeProvider>
        </AlertProvider>
      </AuthContext>
    </React.Fragment>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};
