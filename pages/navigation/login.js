import { useState, useEffect } from "react";
import Router from "next/router";
import Layout from "../../components/Layout";

import { login } from "../../lib/userApi";
import Cookies from "js-cookie";

const Login = () => {
  //save states for email and password from form
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //when submit form for login
  //result is a response token
  async function onLoginSubmit(e) {
    e.preventDefault();
    if (email && password) {
      let response = await login({ email: email, password: password });
      let { token } = response;
      Cookies.set("token", token, { expires: 60 });
      Router.push("/navigation/profile");
    }
  }

  async function rerouteToSignup(){
    Router.push("/navigation/signup")
  }


  return (
    <>
      <Layout title="Login">
        <main>
          <div
            className=" w-full max-w-xs container justify-center flex flex-col border-solid 
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
                className="btn btn-primary text-black bg-white mt-8 p-2 
            rounded font-bold"
              >
                Sign In
              </button>
            </form>
          </div>

          <div className="justify-center mt-2 m-auto flex">
            <button className="btn btn-primary text-white bg-black mt-8 p-2 
            rounded font-bold" onClick={rerouteToSignup}> 
            Do not have an account? Signup!
            </button>
          </div>
        </main>
      </Layout>
    </>
  );
};

export default Login;
