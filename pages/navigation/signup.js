

import Router from 'next/router'
import Layout from "../../components/Layout";
import { useState} from "react";
import { signup } from '../../lib/userApi'
import Cookies from "js-cookie";

function Signup() {
    const [signup_email, setSignUpEmail] = useState("")
    const [signup_password, setSignUpPassword] = useState("")
    const [reentered_password, setReenter] = useState("")
    const [alert, setAlert] = useState(false)


  async function onSignUpSubmit(e) {
    e.preventDefault();
    console.log("Sign up Button clicked")
    if (signup_email && signup_password) {
        if (signup_password == reentered_password){
            let response = await signup(signup_email, signup_password);
            let { token } = response;
            Cookies.set("token", token, { expires: 60 });
            Router.push("/");
        }
        else {
            setAlert(true)
        }
    }
  }

  function returnAlertMessage(){

  }

  return (
      <>
    <Layout title="Signup">
    <main>
      <div
        className=" w-full max-w-xs container justify-center flex flex-col border-solid 
   bg-black rounded px-10 pt-6 pb-8 mt-24 m-auto"
      >
        <h1 className="text-center text-lg font-bold text-white ">
          {" "}
          Sign Up{" "}
        </h1>

        <form className="" onSubmit={onSignUpSubmit}>
          <div className="form-group pt-8">
            <label className="text-white" htmlFor="email">
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

          <div className="form-group">
            <label className=" text-white " htmlFor="password">
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

          <div className="form-group">
            <label className=" text-white " htmlFor="password">
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
            className="btn btn-primary text-black bg-white mt-8 p-2 
        rounded font-bold"
          >
            Sign Up
          </button>
        </form>

        <div>
            {alert ? returnAlertMessage(): null}
        </div>
      </div>
    </main>
  </Layout>
</>
  )

}

export default Signup