import styles from "../styles/navigation.module.scss";
import Link from "next/link";
import { useRouter } from "next/router";
import { Auth } from "@aws-amplify/auth";
import { useUser } from "../context/AuthContext";
import { useMediaQuery } from "react-responsive";
import DrawerComponent from "./DrawerComponent";
export default function Navbar() {
  const { user } = useUser();
  const isMobile = useMediaQuery({ query: "(max-width: 900px)" });
  const router = useRouter();
  const loginButton = (e) => {
    e.preventDefault();
    router.push("/login");
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
  return (
    <div className={styles.allDiv}>
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
                  <Link href="/signup">
                    <a>Sign Up</a>
                  </Link>
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
  );
}
