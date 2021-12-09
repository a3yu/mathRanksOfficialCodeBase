import React, { useState } from "react";
import { IconButton, makeStyles } from "@material-ui/core";
import Link from "next/link";
import MenuIcon from "@material-ui/icons/Menu";
import { useUser } from "../context/AuthContext";

const useStyles = makeStyles(() => ({
  link: {
    textDecoration: "none",
    fontSize: "16px",
    fontWeight: 450,
    color: "#FFFFFF",
  },
  icon: {
    color: "white",
    marginBottom: -15,
  },
  show: {
    marginBottom: -5,
  },
  list: {
    textAlign: "center",
    marginTop: -5,
    listStyle: "none",
    padding: 0,
  },
  hidden: {
    display: "none",
  },
  account: {
    fontWeight: 600,
    color: "#a9c5ea",
    textDecoration: "none",
  },
}));

function DrawerComponent() {
  const { user } = useUser();
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const signUserOut = async () => {
    await Auth.signOut();
    router.push(`/`);
  };
  return (
    <div>
      <IconButton onClick={() => setOpen(!open)}>
        <MenuIcon className={classes.icon} />
      </IconButton>
      <div className={open ? classes.show : classes.hidden}>
        <ul className={classes.list}>
          <li>
            <Link href="/">
              <a className={classes.link}>Home</a>
            </Link>
          </li>
          <li>
            {" "}
            <Link href="/about">
              <a className={classes.link}>About</a>
            </Link>
          </li>
          <li>
            {" "}
            <Link href="/contests">
              <a className={classes.link}>Contests</a>
            </Link>
          </li>
          <li>
            {" "}
            <Link href="/ranking">
              <a className={classes.link}>Ranking</a>
            </Link>
          </li>
          <li>
            {" "}
            <Link href="/sponsors">
              <a className={classes.link}>Sponsors</a>
            </Link>
          </li>
        </ul>
        {!user && (
          <ul className={classes.list}>
            <li>
              <Link href="/login">
                <a className={classes.account}>Login</a>
              </Link>
            </li>
            <li>
              <Link href="/signup">
                <a className={classes.account}>Sign Up</a>
              </Link>
            </li>
          </ul>
        )}
        {user && (
          <ul className={classes.list}>
            <li>
              <a onClick={signUserOut} className={classes.account}>
                Logout
              </a>
            </li>
            <li>
              <Link href="/signup">
                <a className={classes.account}>{user.username}</a>
              </Link>
            </li>
          </ul>
        )}
      </div>
    </div>
  );
}
export default DrawerComponent;
