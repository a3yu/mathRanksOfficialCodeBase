import styles from "../styles/navigation.module.scss";
import Link from "next/link";
import { useRouter } from "next/router";
import { Auth } from "@aws-amplify/auth";
import { useUser } from "../context/AuthContext";
import DrawerComponent from "./DrawerComponent";
import { useTheme, useMediaQuery, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
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
  account: {
    background: "#38bdf8",
    background: "-webkit-linear-gradient(to right, #38bdf8 0%, #c286ff 80%)",
    background: "-moz-linear-gradient(to right, #38bdf8 0%, #c286ff 80%)",
    background: "linear-gradient(to right, #38bdf8 0%, #c286ff 80%)",
    "-webkit-background-clip": "text",
    "-webkit-text-fill-color": "transparent",
  },
}));
export default function Navbar() {
  const { user } = useUser();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("700"));
  const router = useRouter();
  const classes = useStyles();
  const loginButton = (e) => {
    e.preventDefault();
    router.push("/login");
  };
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
            <li>
              {" "}
              <Link href="/about">
                <a>About</a>
              </Link>
            </li>
            {!user && (
              <ul className={styles.account}>
                <li>
                  <Button
                    variant="contained"
                    onClick={loginButton}
                    className={styles.accountLogin}
                    style={{
                      backgroundColor: "#a9c5ea",
                    }}
                  >
                    Login
                  </Button>
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
