import Link from "next/link";
import Image from "next/image";
import styles from "../styles/NavBar.module.css";
import { useState } from "react";

import useUser from "../lib/useUser";

//The Navbar will hold an ordered horizontal list of tabs
//for the last check (if signed in or not), will do a nextauth.js check
const NavBar = (props) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    async function loadUserFromCookies() {
      const token = Cookies.get("token");
      if (token) {
        console.log("Got a token in the cookies, let's see if it is valid");
        const result = await api.get("api/auth/me");
        if (user) {
          setUser(user);
        }
      }
      else {
        console.log("No token cookie. Please log in.")
      }
    }

    loadUserFromCookies();
  }, []);

  const LoginOrNot = (props) => {
    if (user) {
      return (
        <>
          <li className={styles.eachitem}>
            <Link href="/navigation/home">
              <a
                className={styles.eachLink}
                onClick={async () => {
                  await logout();
                }}
              >
                Logout{" "}
              </a>
            </Link>
          </li>
        </>
      );
    } else if (user == null) {
      return (
        <li className={styles.eachitem}>
          <Link href="/navigation/login">
            <a className={styles.eachLink}> Login/Signup </a>
          </Link>
        </li>
      );
    }
  };

  return (
    <nav className={styles.navbar}>
      <Image
        src="/images/logo.png"
        alt="Gardenly Logo"
        width={100}
        height={100}
      />
      <div className={styles.logo}>
        <span className={styles.logo_text}>Gardenly</span>
      </div>

      <ul className={styles.list}>
        <li className={styles.eachitem}>
          <Link href="/">
            <a className={styles.eachLink}> Home </a>
          </Link>
        </li>

        <li className={styles.eachitem}>
          <Link href="/navigation/explore">
            <a className={styles.eachLink}> Explore </a>
          </Link>
        </li>

        <li className={styles.eachitem}>
          <Link href="/navigation/about">
            <a className={styles.eachLink}> About Us </a>
          </Link>
        </li>

        <LoginOrNot> </LoginOrNot>
      </ul>
    </nav>
  );
};

export default NavBar;
