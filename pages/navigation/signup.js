

import Router from 'next/router'
import Layout from "../../components/Layout";

const signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  async function onLoginSubmit(e) {
    e.preventDefault();
    if (email && password) {
      let response = await login({ email: email, password: password });
      let { _id } = response;
      Cookies.set("token", _id, { expires: 60 });
      Router.push("/navigation/profile");
    }
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
          Signup{" "}
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
            Sign Up
          </button>
        </form>
      </div>
    </main>
  </Layout>
</>

  )
}

export default signup