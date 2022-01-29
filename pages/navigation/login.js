import { useState, useEffect } from "react";
import Router from "next/router";
import Layout from "../../components/Layout";

import { login } from "../../lib/userApi";
import useUser from "../../lib/useUser";
import Cookies from "js-cookie";



const Login = () => {

  //save states for email and password from form
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  

  //when submit form for login
  //result is a response token
  const onLoginSubmit = (e) => {
    e.preventDefault();
    if (email && password) {
      let token = login({ ObjectId });
      Cookies.set('token', token, { expires: 60 })
      Router.push('/navigation/profile')
    }
  };

  return (
    <>
      <Layout title="Login"></Layout>

      <main>

        <div className="container">
          <h1 className="text-center text-5xl font-bold"> Login or SignUp </h1>

          <form onSubmit={onLoginSubmit}>

            <div className="form-group">
              <label htmlFor="email"> Email address</label>
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
              <label htmlFor="password">Password</label>
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                className="form-control"
                id="password"
              />
            </div>

            <button type="submit" className="btn btn-primary">
              Submit
            </button>

          </form>
        </div>
      </main>
    </>
  );
};

export default Login;
