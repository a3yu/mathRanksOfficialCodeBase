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
  },
  show: {
    paddingBottom: 0.5,
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
}));

function DrawerComponent() {
  const { user } = useUser();
  const classes = useStyles();
  const [open, setOpen] = useState(false);
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
        </ul>
        {!user && (
          <ul className={classes.list}>
            <li>
              <Link href="/login">
                <a className={classes.link}>Login</a>
              </Link>
            </li>
            <li>
              <Link href="/signup">
                <a className={classes.link}>Sign Up</a>
              </Link>
            </li>
          </ul>
        )}
        {user && (
          <ul className={classes.list}>
            <li>
              <a onClick={signUserOut}>Logout</a>
            </li>
            <li>
              <Link href="/signup">
                <a className={classes.link}>{user.username}</a>
              </Link>
            </li>
          </ul>
        )}
      </div>
    </div>
  );
}
export default DrawerComponent;
