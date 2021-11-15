import React from "react";
import Link from "next/link";

import styles from "../styles/Footer.module.scss";
function Footer() {
  return (
    <section className={styles.footer}>
      <hr className={styles.footerseperator} />
      <section className={styles.footersocialmedia}>
        <Link href="/" target="_blank" rel="noopener noreferrer">
          mathRanks LLC
        </Link>{" "}
        (c) Copyright 2021 - Aedin Yu <br />
        Inquiries:{" "}
        <Link
          href="mailto:admin@mathranks.com"
          rel="noopener noreferrer"
          target="_blank"
        >
          admin@mathranks.com
        </Link>
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
