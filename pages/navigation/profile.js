
import useUser from "../../lib/useUser"
import Layout from '../../components/Layout'

const profilePage = () => {

  const displayInfo = () => {
    if (loading) 
        return <div className="container"> Loading... </div>;
    if (loggedIn && user._id)
      return (
        <div className="container">
          {" "}
          Id: {user._id} <br />
          Email: {user.email} <br />
        </div>
      );

    return <div className="container"> Login to get info </div>;
  }
  
  return (
    <>
    <Layout title="Profile" />
    <div>
      <displayInfo> </displayInfo>
    </div> </>
  )
}

export default profilePage
