import Layout from "../../components/Layout";
import Cookies from "js-cookie";
import { useState, useEffect } from "react";
import { getUser } from "../../lib/userApi";
import React from "react";
import { profileEdit } from "../../lib/profileAPI";
import profileLayout from '../../components/profileLayout'

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Toolbar from "@mui/material/Toolbar";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";

const profilePage = (props) => {
  const [user, setUser] = useState();
  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const [phone_number, setPhoneNumber] = useState("");

  useEffect(() => {
    async function loadUserFromCookies() {
      const auth_token = Cookies.get("token");
      if (auth_token) {
        let response = await getUser({ token: auth_token });
        let { email, token } = response;
        setUser(email);
      } else {
        console.log("No token cookie. Please log in.");
      }
    }

    loadUserFromCookies();
  }, []);


  async function profileChanged() {
    const auth_token = Cookies.get("token");
    if (first_name && last_name && phone_number) {
      let result = profileEdit(auth_token, first_name, last_name, phone_number);
    }
  }



  return (
    <>
      <Layout title="Profile">
        <profileLayout user={user}>

        </profileLayout>
      </Layout>
    </>
  );
};

export default profilePage;
