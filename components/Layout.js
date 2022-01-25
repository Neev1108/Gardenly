import NavBar from "./NavBar";
import Head from "next/head";
import overall from '../styles/overall.module.css'

const Layout = (props) => {
  return (
    <>

        <Head>
          <title> {props.title} </title>
        </Head>

        <body>
            <NavBar> </NavBar>

        </body>

    </>
  );
};

export default Layout;
