import classes from "../../../styles/error.module.scss";
import React from "react";
import Link from "next/link";
import { GetServerSideProps } from "next";

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
export const getServerSideProps: GetServerSideProps = async ({
  query,
  req,
  res,
}) => {
  console.log(req.headers);
  return {
    props: {},
  };
};

export default error;
