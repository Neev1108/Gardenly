import Link from "next/link";
import Image from "next/image";
import styles from "../styles/NavBar.module.css";

import useUser from "../lib/useUser"
import {logout} from "../pages/api/userApi"

const NavBar = (props) => {


  //loading is true when there is no data or no error
  //loggedIn is true when there is data with no error
  //mutate is used for revalidation

  //const { loading, loggedIn, user, mutate } = useUser();


  //temporary
  let loading = false
  let loggedIn = false


  const LoginOrNot = (props) => {

    //if still loading, return null
    if (loading) return null

    //if loggedIn is true (meaning there is data with no error)
    if (loggedIn == true) {
      return (
        <>
        <li className={styles.eachitem}>
            <Link href="/navigation/home">
              <a className={styles.eachLink} 
              onClick={async () => {
                await logout()
                mutate()
              }}> 
              Logout </a>
            </Link>
          </li>
        
        </>
      )
    }
    else if (loggedIn == false) {
      return (
        <li className={styles.eachitem}>
            <Link href="/navigation/login">
              <a className={styles.eachLink}> Login/Signup </a>
            </Link>
          </li>
      )
    }
  }

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
