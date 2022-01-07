import React, { useState } from "react";
import { IconButton, makeStyles } from "@material-ui/core";
import Link from "next/link";
import MenuIcon from "@material-ui/icons/Menu";
import { useUser } from "../context/AuthContext";
import Signup from "./auth/Signup";
import Login from "./auth/Login";
import Confirm from "./auth/confirmAccount";
import ChangePassword from "./auth/changePassword";
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
    "&:hover": {
      cursor: "pointer",
    },
  },
}));

function DrawerComponent() {
  const [signup, setSignup] = useState(false);
  const [login, setLogin] = useState(false);
  const [confirm, setConfirm] = useState(false);
  const [change, setChange] = useState(false);
  const { user } = useUser();
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const signUserOut = async () => {
    await Auth.signOut();
    router.push(`/`);
  };
  function switchModal() {
    setSignup(!signup);
    setLogin(!login);
  }
  function goToConfirm() {
    setSignup(false);
    setLogin(false);
    setConfirm(true);
  }
  function goToChange() {
    setSignup(false);
    setLogin(false);
    setConfirm(false);
    setChange(true);
  }
  const loginButton = (e) => {
    e.preventDefault();
    setSignup(false);
    setLogin(!login);
  };
  const signupButton = (e) => {
    e.preventDefault();
    setLogin(false);
    setSignup(!signup);
  };
  return (
    <div>
      <div className="z-30 absolute">
        <Signup
          show={signup}
          onClose={() => setSignup(false)}
          onSwitch={switchModal}
          goToConfirm={goToConfirm}
        />
        <Login
          show={login}
          onClose={() => setLogin(false)}
          onSwitch={switchModal}
          goToConfirm={goToConfirm}
          goToChange={goToChange}
        />
        <Confirm
          show={confirm}
          onClose={() => setConfirm(false)}
          onSwitch={switchModal}
        />
        <ChangePassword show={change} onClose={() => setChange(false)} />
      </div>
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
              <a onClick={loginButton} className={classes.account}>
                Login
              </a>
            </li>
            <li>
              <a onClick={signupButton} className={classes.account}>
                Sign Up
              </a>
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
