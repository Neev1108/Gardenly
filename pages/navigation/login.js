import { useState, useEffect } from "react";
import Router from "next/router";
import Layout from "../../components/Layout";

import { login } from "../api/userApi";
import useUser from "../../lib/useUser";

import styles from "../../styles/Login.module.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { mutate, loggedIn } = useUser();

  useEffect(() => {
    if (loggedIn) Router.replace("/");
  }, [loggedIn]);

  if (loggedIn) return <> Redirecting.... </>;

  //when submit form for login
  const onLoginSubmit = (e) => {
    e.preventDefault();
    if (email && password) {
      login({ email, password });
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
