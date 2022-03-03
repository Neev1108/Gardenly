import Router from "next/router";
import Layout from "../../components/Layout";
import { useState } from "react";
import { signup } from "../../lib/userMiddleware";
import Cookies from "js-cookie";

/**
 * Brief description of the class here
 * Signup page will display a form to enter user information to enter into database and then set token.
 */

  function Signup() {
    /*
    Following states are for user entered data and then setting an alert if something is wrong
    */
    const [signup_email, setSignUpEmail] = useState("");
    const [signup_password, setSignUpPassword] = useState("");
    const [reentered_password, setReenter] = useState("");
    const [alert, setAlert] = useState(false);

    /** 
  * Brief description of the function here.
  * @summary Sign up Submit is similar to login but will check if password and renentered password are the same.
    Then it will do an api call to add the user into the database while returning and setting a token. An alert will 
    be given if incorrect (Will work on alert feature later)
  * @param {Event} e - The event when submit selected for form.
  * @return {Cookie} Set cookie for token and reroute to the homepage. 
  */

    async function onSignUpSubmit(e) {
      e.preventDefault();
      console.log("Sign up Button clicked");
      if (signup_email && signup_password) {
        if (signup_password == reentered_password) {
          let response = await signup(signup_email, signup_password);
          let { token } = response.data;
          Cookies.set("token", token, { expires: 60 });
          Router.push("/");
        } else {
          setAlert(true);
        }
      }
    }

    function returnAlertMessage() {}

    /*
      Similar to login form but asks to reneter password and will give alert
    */
    return (
      <>
        <Layout title="Signup">
          <div
            id="signup_content"
            className="flex flex-col w-screen h-screen bg-mint overflow-auto"
          >
            <div
              className=" w-full max-w-xs container justify-center flex flex-col border-solid 
              bg-black rounded px-10 pt-6 pb-8 mt-24 m-auto"
            >
              <h1 className="text-center text-[30px] font-bold text-mint font-serif">
                {" "}
                Sign Up{" "}
              </h1>

              <form className="" onSubmit={onSignUpSubmit}>
                <div className="form-group pt-8">
                  <label className="text-mint" htmlFor="email">
                    {" "}
                    Email address
                  </label>
                  <input
                    value={signup_email}
                    type="email"
                    className="form-control"
                    id="signUpemail"
                    aria-describedby="emailHelp"
                    onChange={(e) => setSignUpEmail(e.target.value)}
                  />
                </div>

                <div className="form-group pt-4">
                  <label className=" text-mint " htmlFor="password">
                    Password
                  </label>
                  <input
                    value={signup_password}
                    onChange={(e) => setSignUpPassword(e.target.value)}
                    type="password"
                    className="form-control"
                    id="signUppassword"
                  />
                </div>

                <div className="form-group pt-4">
                  <label className=" text-mint " htmlFor="password">
                    Renter Password
                  </label>
                  <input
                    value={reentered_password}
                    onChange={(e) => setReenter(e.target.value)}
                    type="password"
                    className="form-control"
                    id="reenter_password"
                  />
                </div>

                <button
                  type="submit"
                  className="btn btn-primary bg-black text-mint border-2 border-mint p-2 
                  rounded font-bold justify-center mt-4 hover:-translate-y-1 hover:scale-105"
                >
                  Sign Up
                </button>
              </form>

              <div>{alert ? returnAlertMessage() : null}</div>
            </div>
          </div>
        </Layout>
      </>
    );
  }

  export default Signup;
