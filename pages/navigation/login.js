//All imports will be for api calls, routing, cookies and state setting
import { useState, useEffect } from "react";
import Router from "next/router";
import Layout from "../../components/Layout";

import { login } from "../../lib/userApi";
import Cookies from "js-cookie";

/**
 * Brief description of the class here
 * Component will be used for login, storing email and password after login info is submitted
 */

const Login = () => {
  //save states for email and password from form
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
    e.preventDefault();
    if (email && password) {
      let response = await login({ email: email, password: password });
      let { token } = response;
      Cookies.set("token", token, { expires: 60 });
      Router.push("/navigation/profile");
    }
  }

  /**
   * Brief description of the function here.
   * @summary Reroute to signup if signup button is pressed. Allows user to create an account.
   */

  async function rerouteToSignup() {
    Router.push("/navigation/signup");
  }

  /*
  Login form or redirect to signup page for render
  */
  return (
    <>
      <Layout title="Login">
          <div
            className="max-w-xs justify-center flex flex-col border-solid 
       bg-black rounded px-10 pt-6 pb-8 mt-24 m-auto"
          >
            <h1 className="text-center text-lg font-bold text-white ">
              {" "}
              Login or Signup{" "}
            </h1>

            <form className="" onSubmit={onLoginSubmit}>
              <div className="form-group pt-8">
                <label className="text-white" htmlFor="email">
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

              <div className="form-group">
                <label className=" text-white " htmlFor="password">
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
                className="btn btn-primary text-black bg-white p-2 
            rounded font-bold justify-center mt-4"
              >
                Sign In
              </button>
            </form>
          </div>

          <div className="flex justify-center mt-4 p-10 border-white border-solid">
            <button
              className=" text-white bg-black p-2
            rounded font-bold"
              onClick={rerouteToSignup}
            >
              Do not have an account? Signup!
            </button>
          </div>
      </Layout>
    </>
  );
};

export default Login;
