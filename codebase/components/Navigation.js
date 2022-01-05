import styles from "../styles/navigation.module.scss";
import Link from "next/link";
import { useRouter } from "next/router";
import { Auth } from "@aws-amplify/auth";
import { useUser } from "../context/AuthContext";
import { useMediaQuery } from "react-responsive";
import DrawerComponent from "./DrawerComponent";
import { useState } from "react";
import Signup from "./auth/Signup";
import Login from "./auth/Login";
import Confirm from "./auth/confirmAccount";
import ChangePassword from "./auth/changePassword";
export default function Navbar() {
  const { user } = useUser();
  const [signup, setSignup] = useState(false);
  const [login, setLogin] = useState(false);
  const [confirm, setConfirm] = useState(false);
  const [change, setChange] = useState(false);
  const isMobile = useMediaQuery({ query: "(max-width: 900px)" });
  const router = useRouter();
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
  const redirHome = (e) => {
    e.preventDefault();
    router.push("/");
  };
  const signUserOut = async () => {
    await Auth.signOut();
    router.push(`/`);
  };
  if (user) {
    let user = Auth.currentAuthenticatedUser();
  }
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
  return (
    <>
      <div className={styles.allDiv}>
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
        {isMobile ? (
          <DrawerComponent />
        ) : (
          <div className={styles.container}>
            <ul className={styles.navbar}>
              <li className={styles.logo}>
                <img
                  src="/mr-logo.svg"
                  className={styles.svgLogo}
                  onClick={redirHome}
                />
              </li>
              <li>
                {" "}
                <Link href="/dashboard">
                  <a>Dashboard</a>
                </Link>
              </li>
              <li>
                {" "}
                <Link href="/contests">
                  <a>Contests</a>
                </Link>
              </li>
              <li>
                {" "}
                <Link href="/ranking">
                  <a>Ranking</a>
                </Link>
              </li>
              <li>
                {" "}
                <Link href="/about">
                  <a>About</a>
                </Link>
              </li>
              {!user && (
                <ul className={styles.account}>
                  <li>
                    <button
                      className="bg-linkColorDark hover:bg-linkColorDarkHover text-black font-bold py-2 px-4 rounded m-0"
                      onClick={loginButton}
                    >
                      Login
                    </button>
                  </li>
                  <li>
                    <a onClick={signupButton}>Sign Up</a>
                  </li>
                </ul>
              )}
              {user && (
                <ul className={styles.account}>
                  <li>
                    <a onClick={signUserOut}>Logout</a>
                  </li>
                  <li>
                    <Link href={"/user/" + user.username}>
                      <a>{user.username}</a>
                    </Link>
                  </li>
                </ul>
              )}
            </ul>
          </div>
        )}
      </div>
    </>
  );
}
