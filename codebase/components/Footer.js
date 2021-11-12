import React from "react";
import moment from "moment";
import Link from "next/link";

import styles from "../styles/Footer.module.scss";
var a = moment().format("M/D/Y, h:mm:ss a");
function Footer() {
  return (
    <section className={styles.footer}>
      <hr className={styles.footerseperator} />
      <section className={styles.footersocialmedia}>
        <Link href="/" target="_blank" rel="noopener noreferrer">
          mathRanks LLC
        </Link>{" "}
        (c) Copyright 2021 - Aedin Yu <br />
        Server Time (last refresh): {a}
        <br />
        <Link href="/" target="_blank" rel="noopener noreferrer">
          Privacy Policy
        </Link>{" "}
        &{" "}
        <Link href="/" target="_blank" rel="noopener noreferrer">
          Terms and Conditions
        </Link>
      </section>
    </section>
  );
}

export default Footer;
