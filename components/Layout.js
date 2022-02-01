import NavBar from "./NavBar";
import Head from "next/head";
import overall from '../styles/overall.module.css'
import { useState, useEffect } from "react";
import Cookies from 'js-cookie'
import axios from 'axios'





//add meta tag to control window scaling
const Layout = ({children}, props) => {

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    async function loadUserFromCookies() {
      const token = Cookies.get("token");
      if (token) {
        const {email, password} = token
        setUser({email: email, password: password})
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

        <body>
            <NavBar user={user}>  </NavBar>
            {children}
        </body>

    </>
  );
};

export default Layout;
