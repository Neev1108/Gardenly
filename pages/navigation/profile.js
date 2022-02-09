import Layout from "../../components/Layout";
import Cookies from "js-cookie";
import { useState, useEffect } from "react";
import { getUser } from "../../lib/userApi";
import React from 'react'

const profilePage = (props) => {
  const [email, setEmail] = useState("");
  const [form, showForm] = useState(false);
  const [first_name, setFirstName] = useState("")
  const [last_name, setLastName] = useState("")
  const [phone_number, setPhoneNumber] = useState("")

  useEffect(() => {
    async function loadUserFromCookies() {
      const auth_token = Cookies.get("token");
      if (auth_token) {
        let response = await getUser({ token: auth_token });
        let { email, token } = response;
        setEmail(email);
      } else {
        console.log("No token cookie. Please log in.");
      }
    }

    loadUserFromCookies();
  }, []);

  function buttonPressed(){
    showForm(true)
    var edit_profile_button = document.getElementById('edit_profile')
    edit_profile_button.remove()
  }

  function profileChanged(){
    console.log("Hello")
  }

  function editProfile() {
    return (
      <>
        <form>
          <div className="grid xl:grid-cols-2 xl:gap-6">
            <div className="relative z-0 mb-6 w-full group">
              <input
                type="text"
                name="floating_first_name"
                id="floating_first_name"
                className="block py-2.5 px-0 w-full text-sm 
                text-black bg-transparent border-0 border-b-2 
                border-gray-300 appearance-none peer"
                placeholder=" "
                required
                onChange={(e) => setFirstName(e.target.value)}
              />
              <label
                htmlFor="floating_first_name"
              >
                First name
              </label>
            </div>
            <div className="relative z-0 mb-6 w-full group">
              <input
                type="text"
                name="floating_last_name"
                id="floating_last_name"
                className="block py-2.5 px-0 w-full text-sm 
                text-black bg-transparent border-0 border-b-2 
                border-gray-300 appearance-none peer"
                placeholder=" "
                required
                onChange={(e) => setLastName(e.target.value)}
              />
              <label
                htmlFor="floating_last_name"
              >
                Last name
              </label>
            </div>
          </div>
          <div className="grid xl:grid-cols-2 xl:gap-6">
            <div className="relative z-0 mb-6 w-full group">
              <input
                type="tel"
                pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                name="floating_phone"
                id="floating_phone"
                className="block py-2.5 px-0 w-full text-sm text-black 
                bg-transparent border-0 border-b-2 border-gray-300 appearance-none 
                dark:border-gray-600 peer"
                placeholder=" "
                required
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
              <label
                htmlFor="floating_phone"
              >
                Phone number
              </label>
            </div>
          </div>
          <button
            type="submit"
            className="text-white bg-black font-medium rounded-lg 
            text-sm w-full sm:w-auto px-5 py-2.5 text-center"
            onClick = {profileChanged}
          >
            Submit
          </button>
        </form>
      </>
    );
  }

  return (
    <>
      <Layout title="Profile">
        <div className="justify-center m-auto mt-8 flex">
          <button id="edit_profile"
            className=" text-white text-3xl font-bold justify-center bg-black
          border-black border-solid rounded p-4 flex"
            onClick={buttonPressed}
          >
            {" "}
            Edit Profile{" "}
          </button>
          {form ? editProfile() : null}
        </div>
      </Layout>

    </>


  );
};

export default profilePage;
