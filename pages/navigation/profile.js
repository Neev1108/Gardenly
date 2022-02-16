import Layout from "../../components/Layout";
import Cookies from "js-cookie";
import { getUser } from "../../lib/userApi";
import React from "react";
import { profileEdit } from "../../lib/profileAPI";

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Toolbar from "@mui/material/Toolbar";
import Divider from "@mui/material/Divider";



import EditProfile from "../../components/EditProfile";
import UserProfile from "../../components/UserProfile"



class profilePage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      user: "",
      first_name: "",
      last_name: "",
      phone_number: "",
      page: "User Profile",
    };
  }

  componentDidMount = () => {
    async function loadUserFromCookies() {
      const auth_token = Cookies.get("token");
      if (auth_token) {
        let response = await getUser({ token: auth_token });
        let { email, token } = response;
        this.setState({user: email});
      } else {
        console.log("No token cookie. Please log in.");
      }
    }

    loadUserFromCookies();
  }


  profileChanged = () => {
    const auth_token = Cookies.get("token");
    if (first_name && last_name && phone_number) {
      let result = profileEdit(auth_token, first_name, last_name, phone_number);
    }
  }

    buttonPressed = (text) => {
      if (text == "User Profile"){
          this.setState({page: "User Profile"})
      }
      else if (text == "Your Garden"){
          this.setState({page: "Your Garden"})
      }
      else {
          this.setState({page: "Edit Profile"})
      }

  }

  setParameters = (firstName, lastName, phoneNumber) => {
    this.setState({first_name: firstName})
    this.setState({last_name: lastName})
    this.setState({phone_number: phoneNumber})
  }
  



  render() {
    var checkPage;

    if (this.state.page == "User Profile"){
      checkPage = <UserProfile> </UserProfile>
    }
    else if (this.state.page == "Your Garden"){

    }
    else if (this.state.page == "Edit Profile"){
      checkPage = <EditProfile setParameters = {this.setParameters}> </EditProfile>
    }



    return (
    <>
      <Layout title="Profile">
        <div className="grid grid-cols-2 gap-4 p-4">
          <Toolbar className="w-64">
            <Divider>
              <List>
                {["User Profile", "Edit Profile", "Your Garden"].map(
                  (text) => (
                    <ListItem
                      className="bg-black"
                      button
                      key={text}
                      onClick={() => this.buttonPressed(text)}
                    >
                      <ListItemText
                        className="text-green-800 text-xl"
                        primary={text}
                      />
                    </ListItem>
                  )
                )}
              </List>
            </Divider>
          </Toolbar>

          <div id="main_content" className="w-48 justify-center">
            {checkPage}
          </div>
        </div>
      </Layout>
    </>
  );
};
}

export default profilePage;
