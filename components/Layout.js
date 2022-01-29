import NavBar from "./NavBar";
import Head from "next/head";
import overall from '../styles/overall.module.css'





//add meta tag to control window scaling
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
