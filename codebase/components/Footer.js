import { style } from "@material-ui/system";
import React from "react";
import moment from "moment";

import styles from "../styles/Footer.module.scss";
var a = moment().format("M/D/Y, h:mm:ss a");
function Footer() {
  return (
    <section className={styles.footer}>
      <hr className={styles.footerseperator} />
      <section className={styles.footersocialmedia}>
        <a href="/" target="_blank" rel="noopener noreferrer">
          MathRanks LLC
        </a>{" "}
        (c) Copyright 2021 - Aedin Yu <br />
        Server Time (last refresh): {a}
        <br />
        <a href="/" target="_blank" rel="noopener noreferrer">
          Privacy Policy
        </a>{" "}
        &{" "}
        <a href="/" target="_blank" rel="noopener noreferrer">
          Terms and Conditions
        </a>
      </section>
    </section>
  );
}

export default Footer;
