import styles from "../styles/navigation.module.scss";
import Link from "next/link";
import { useRouter } from "next/router";
import { Auth } from "@aws-amplify/auth";
import { useUser } from "../context/AuthContext";
import DrawerComponent from "./DrawerComponent";
import { useTheme, useMediaQuery } from "@material-ui/core";

export default function Navbar() {
  const { user } = useUser();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("700"));
  const router = useRouter();
  const redirHome = (e) => {
    e.preventDefault();
    console.log("clicked");
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
              <Link href="/">
                <a>Home</a>
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
            {!user && (
              <ul className={styles.account}>
                <li>
                  <Link href="/login">
                    <a>Login</a>
                  </Link>
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
                  <Link href={"/" + user.username}>
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
