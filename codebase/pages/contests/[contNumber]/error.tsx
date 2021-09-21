import classes from "../../../styles/error.module.scss";
import React from "react";
import Link from "next/link";

function error() {
  return (
    <div className={classes.container}>
      <h3 className={classes.text}>
        There was an error authenticating you for this live contest.
        <ul>
          <li>
            <Link href="/login">You are not logged in.</Link>
          </li>
        </ul>
      </h3>
    </div>
  );
}

export default error;
