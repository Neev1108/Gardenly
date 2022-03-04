//All imports will be for api calls, routing, cookies and state setting
import { useState, useEffect } from "react";
import Router from "next/router";
import Layout from "../../components/Layout";

import { login } from "../../lib/userMiddleware";
import Cookies from "js-cookie";

/**
 * Brief description of the class here
 * Component will be used for login, storing email and password after login info is submitted
 */

const Login = () => {
  //save states for email and password from form
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [alert, setAlert] = useState(false);

  /**
   * Brief description of the function here.
   * @summary Function called when the submit button is pressed. Will gather data from state
   * and make an api call to the login endpoint. The endpoint will interact with the database
   * and insert an entry into the document. A token will be returned relating to that user and a cookie will be set.
   * User will then be rerouted to the profile page
   * @param {Event} e - The event when a button is pressed.
   * @return {Cookie} A cookie is set for the token for 60 min.
   */

  async function onLoginSubmit(e) {
    console.log("Sign in button clicked");
    e.preventDefault();
    if (email && password) {
      let response = await login({ email: email, password: password });
      if (response) {
        setAlert(false);
        let { token } = response.data;
        Cookies.set("token", token, { expires: 60 });
        Router.push("/navigation/profile");
      } else {
        console.log("User not found or error occured. Please retry login.");
        setAlert(true);
        Router.push("/navigation/login");
      }
    }
  }

  /**
   * Brief description of the function here.
   * @summary Reroute to signup if signup button is pressed. Allows user to create an account.
   */

  async function rerouteToSignup() {
    Router.push("/navigation/signup");
  }

  function returnAlertMessage() {
    return (
      <div className="w-8/12 flex bg-white rounded-xl m-auto">
        <span className="text-red-500 font-extrabold justify-center m-auto">
          {" "}
          User not found or error occured. Please retry login.{" "}
        </span>
      </div>
    );
  }

  /*
  Login form or redirect to signup page for render
  */
  return (
    <>
      <Layout title="Login">
        <div
          id="login_content"
          className="flex flex-col w-screen h-screen bg-mint overflow-auto"
        >
          <div className="flex flex-col">
          <div
            className="max-w-xs h-80 justify-center flex flex-col border-solid 
          bg-black rounded px-10 pt-6 pb-8 mt-24 m-auto"
          >
            <h1 className="text-center text-[30px] font-bold text-mint font-serif ">
              {" "}
              Login{" "}
            </h1>

            <form className="" onSubmit={onLoginSubmit}>
              <div className="form-group pt-4">
                <label className="text-mint" htmlFor="email">
                  {" "}
                  Email address
                </label>
                <input
                  value={email}
                  type="email"
                  className="form-control"
                  id="email"
                  aria-describedby="emailHelp"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="form-group pt-4">
                <label className=" text-mint " htmlFor="password">
                  Password
                </label>
                <input
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                  className="form-control"
                  id="password"
                />
              </div>

              <button
                type="submit"
                className="btn btn-primary bg-black text-mint border-2 border-mint p-2 
            rounded font-bold justify-center mt-4 hover:-translate-y-1 hover:scale-105"
              >
                Sign In
              </button>
            </form>
          </div>

          <div className="justify-center p-10 border-white border-solid object-center m-auto">
            <button
              className="bg-black p-2
            rounded font-bold text-mint hover:-translate-y-1 hover:scale-105"
              onClick={rerouteToSignup}
            >
              Do not have an account? Signup!
            </button>
          </div>

          <div>{alert ? returnAlertMessage() : null}</div>
        </div>
        </div>
      </Layout>
    </>
  );
};

export default Login;
