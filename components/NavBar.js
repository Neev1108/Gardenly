import Link from "next/link";
import Image from "next/image";
import styles from "../styles/NavBar.module.css";
import Cookies from "js-cookie";

import { Router } from "next/router";

//The Navbar will hold an ordered horizontal list of tabs
//for the last check (if signed in or not), will do a nextauth.js check
const NavBar = (props) => {
  let user = props.user

  function logout(){
    Cookies.remove("token")
    user = null
  }

  const LoginOrNot = (props) => {
    if (props.user) {
      return (
        <>
        <li className={styles.eachitem}>
          <Link href="/navigation/profile">
            <a className={styles.eachLink}> User Dashboard </a>
          </Link>
        </li>


        <li className={styles.eachitem}>
          <Link href="/profile/portfolio">
            <a className={styles.eachLink}> Your Garden </a>
          </Link>
        </li>

          <li className={styles.eachitem}>
          <Link href="/">
              <a
                className={styles.eachLink}
                onClick={logout}
              >
                Logout{" "}
              </a>
            </Link>
          </li>
        </>
      );
    } else if (props.user == null) {
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

        <LoginOrNot user={user}> </LoginOrNot>
      </ul>
    </nav>
  );
};

export default NavBar;

