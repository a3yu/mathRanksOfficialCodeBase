import React from "react";
import Link from "next/link";

import styles from "../styles/Footer.module.scss";
function Footer() {
  return (
    <section className={styles.footer}>
      <hr className={styles.footerseperator} />
      <section className={styles.footersocialmedia}>
        <Link href="/" target="_blank" rel="noopener noreferrer">
          <a className={styles.link}>mathRanks LLC</a>
        </Link>{" "}
        (c) Copyright 2021 - A. Yu <br />
        Inquiries:{" "}
        <Link
          href="mailto:admin@mathranks.com"
          rel="noopener noreferrer"
          target="_blank"
        >
          <a className={styles.link}>admin@mathranks.com</a>
        </Link>
        <br />
        <Link
          href="https://docs.google.com/document/d/1DOol22V4kYUt-l5ovT6Cre44kAM4y2uxp2UsWcYfUpI/edit?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
        >
          <a className={styles.link}>Privacy Policy</a>
        </Link>{" "}
        &{" "}
        <Link
          href="https://docs.google.com/document/d/1DOol22V4kYUt-l5ovT6Cre44kAM4y2uxp2UsWcYfUpI/edit?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
        >
          <a className={styles.link}>Terms and Conditions</a>
        </Link>
      </section>
    </section>
  );
}

export default Footer;
