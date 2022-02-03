import NavBar from "./NavBar";
import Head from "next/head";
import overall from '../styles/overall.module.css'
import { useState, useEffect } from "react";
import Cookies from 'js-cookie'





//add meta tag to control window scaling
const Layout = ({children}, props) => {

  const [user, setUser] = useState(null);


  useEffect(() => {
    async function loadUserFromCookies() {
      const token = Cookies.get("token");
      if (token) {
        setUser({token: token})
      }
      else {
        console.log("No token cookie. Please log in.")
      }
    }

    loadUserFromCookies();
  }, []);
  

  return (
    <>

        <Head>
          <title> {props.title} </title>
        </Head>

        <main>
            <NavBar user={user}>  </NavBar>
            {children}
        </main>

    </>
  );
};

export default Layout;
