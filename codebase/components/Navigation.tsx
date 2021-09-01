import styles from "../styles/navigation.module.scss";
import Link from "next/link";
import { useRouter } from "next/router";
export default function Navbar() {
  const router = useRouter();

  const redirHome = (e) => {
    e.preventDefault();
    console.log("clicked");
    router.push("/");
  };

  return (
    //TODO ADD SIGN IN AND SIGN UP CAPABILITIES (RIGHT)
    //TODO ADD LOGO TO RIGHT OF NAVBAR (LEFT)
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
          <Link href="/about">
            <a>About</a>
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
      </ul>
    </div>
  );
}
