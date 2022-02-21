//Imports for libaries used or api calls
import Cookies from "js-cookie";
import { getUser } from "../../lib/userApi";
import React from "react";
import { profileEdit } from "../../lib/profileAPI";


//Imports for Parent or Child components
import Layout from "../../components/Layout";
import EditProfile from "../../components/EditProfile";
import UserProfile from "../../components/UserProfile";
import { Router } from "next/router";



/**
* Brief description of the class here

  This class will be an overall parent class for all profile/user information
  relating to gardening, editing profile, and viewing profile (might add other features later)
  States will mostly be stored here as the older React version of storing states (not hooks),
  because of convinience
* @extends React.Component
*/

class profilePage extends React.Component {
  /**
   * Brief description of the function here.
   * @summary Constructor for the profile Page will have each state
   * @param user - user gathered from api call when component is mounted
   * @param first_name - First Name data submitted from child component (EditProfile) in a callback
   * @param last_name - Last Name data submitted from child component (EditProfile) in a callback
   * @param phone_number - Phone Number data submitted from child component (EditProfile) in a callback
   * @param page - sets the current page after a toolbar click, default will be the User Profile page
   */

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

  /** 
* A function that will called on each component mounting. 
* @summary Function will read a current cookie on the browser 
  (cookie stays for 60 min or after browser is closed). The cookie will have an 
  auth token that is an encrypted string that will match with a user in the database.
  Info about that user will be gathered through an api call with that auth token. 
  The state is then set for the user after response for db.
  This user state information will be sent to child components (the UserProfile component)
* @return {State} No returning value but the overall user state is set.
*/
  loadUserFromCookies = async () => {
    const auth_token = Cookies.get("token");
    if (auth_token) {
      let response = await getUser({ token: auth_token });
      if (response){
        let { email, token, FirstName, PhoneNumber, LastName} = response.data;
        this.setState({ user: email, first_name: FirstName, last_name: LastName,
        phone_number: PhoneNumber });
      }
      else {
        console.log("User not found or error. Please retry sign in or signup.")
        Router.push("/navigation/login")
      }
    } else {
      console.log("No token cookie. Please log in.");
    }
  };

  componentDidMount = () => {
    this.loadUserFromCookies();
  };

  /** 
* Brief description of the function here.
* @summary This function will make the api call to update the user document in mongodb. 
  It will first find the current token for the user and then make a call to the profile/editProfile endpoint.
  That call will update the user document with the information.
*/

  profileChanged = async () => {
    const auth_token = Cookies.get("token");
    if (
      this.state.first_name &&
      this.state.last_name &&
      this.state.phone_number
    ) {
      let res = await profileEdit(
        auth_token,
        this.state.first_name,
        this.state.last_name,
        this.state.phone_number
      );

      if (res.status == 200){
        Router.push("navigation/profile")
      }
      else {
        console.log("Something went wrong with profile edit")
      }
    }
  };

  /**
   * Brief description of the function here.
   * @summary Function called when a toolbar button is pressed, will set the state of the page
   * @param {String} text - The text in the button will guide the user to the appropiate page
   */

  buttonPressed = (text) => {
    if (text == "User Profile") {
      this.setState({ page: "User Profile" });
    } 
     else {
      this.setState({ page: "Edit Profile" });
    }
  };

  /** 
* Brief description of the function here.
* @summary The function called after a callback to the child component, 
  the child component will send submitted data and this parent component will set the state of that data
* @param params - All paramaters can be looked at in the state docstring above.
*/
  setParameters = (firstName, lastName, phoneNumber) => {
    this.setState({ first_name: firstName });
    this.setState({ last_name: lastName });
    this.setState({ phone_number: phoneNumber });

    this.profileChanged()
  };

  render() {
    /*
    The following code will check the page state and return a child component that will be placed 
    at the main content of the dashboard
    */
    var checkPage;
    if (this.state.page == "User Profile") {
      checkPage = <UserProfile user={this.state.user}> </UserProfile>;
    } 
    else if (this.state.page == "Edit Profile") {
      checkPage = (
        <EditProfile setParameters={this.setParameters}> </EditProfile>
      );
    }

    return (
      <>
        <Layout title="Profile">
          {/* Dashboard will be an grid div with a toolbar on the left and the main content on the right */}
          <div id="dashboard" className="flex flex-row mt-10">
            <div id="sidebar" className="flex flex-col
             text-white h-screen w-48 ml-16 space-y-4 bg-neutral-900">
              <button className="hover:border hover:text-gray-500 text-white leading-6 mt-20" onClick={(e) => this.buttonPressed(e.target.innerHTML)}>
                User Profile
              </button>

              <button className="hover:border-2 hover:text-gray-500 text-white leading-6" onClick={(e) => this.buttonPressed(e.target.innerHTML)}>
                Edit Profile
              </button>
            </div>

            {/* Main Content of dashboard goes here after checking what page was clicked */}
            <div className="w-9/12" id="main_content">
              {checkPage}
            </div>
          </div>
        </Layout>
      </>
    );
  }
}

export default profilePage;
