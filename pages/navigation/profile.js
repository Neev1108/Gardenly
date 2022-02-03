
import Layout from '../../components/Layout'
import Cookies from "js-cookie";
import { useState, useEffect } from "react";
import { getUser } from "../../lib/userApi";


const profilePage = () => {
  const [user, setUser] = useState(null);
  const [form, showForm] = useState(false)

  useEffect(() => {
    async function loadUserFromCookies() {
      const token = Cookies.get("token");
      if (token) {
        let response = await getUser(token)
        console.log(response)
        const {email} = response
        setUser(email)
      }
      else {
        console.log("No token cookie. Please log in.")
      }
    }

    loadUserFromCookies();
  }, []);

  function editProfile(){
    return (
      <>

      </>
    )
  }
  
  return (
    <>
    <Layout title="Profile" >

    <span> Email: {user} </span>
    <button onClick={() => showForm(true)}> Edit Profile </button>
    {form ? editProfile() : null}
    </Layout>
    </>
  )
}

export default profilePage
