import React from "react";
import Layout from "../../components/Layout";
import Cookies from "js-cookie";
import { getUser } from "../../lib/userMiddleware";

class portfolio extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      addPlant: {
        plant_type: "",
        plant_name: "",
        plant_age: "",
      },
      page: "",
      token: ""
    };
  }

  /** 
* A function that will called on each component mounting. 
* @summary Function will read a current cookie on the browser 
  (cookie stays for 60 min or after browser is closed). The cookie will have an 
  auth token that is an encrypted string that will match with a user in the database.
  Info about that user will be gathered through an api call with that auth token. 
  The state is then set for the user after response for db.
  This user state information will be sent to child components (the UserProfile component)
* @return {State} No returning value but the overall user state is set.
*/
  loadUserFromCookies = async () => {
    const auth_token = Cookies.get("token");
    if (auth_token) {
      let response = await getUser({ token: auth_token });
      if (response) {
        let { email, token, FirstName, PhoneNumber, LastName } = response.data;
        this.state.token = token
      } else {
        console.log("User not found or error. Please retry sign in or signup.");
        Router.push("/navigation/login");
      }
    } else {
      console.log("No token cookie. Please log in.");
    }
  };

  componentDidMount = () => {
    this.loadUserFromCookies();
  };



  //set up api call for garden
  getCurrentGarden = async () => {
    
  }

  addGardenItem =  () => {
      
  };

  removeGardenItem = () => {
    
  };


  addForm = () => {
      return(
        <form>
        <label for="plant_type"> Plant Type:  </label>
        <select id="plant_type" name="plant_type">
          <option value="Fruit">Fruit</option>
          <option value="Vegetable">Vegetable</option>
          <option value="Flower">Flower</option>
          <option value="Tree">Tree</option>
          <option value="Tree">Succulents</option>
        </select>
        </form>
      )
  }

  render() {
    return (
      <>
        <Layout>
          <div className="w-screen h-screen bg-white flex-col">
            <nav className="flex w-8/12 h-[30] m-auto justify-center bg-grape">

              <div
                onClick={this.addGardenItem()}
                className="text-[16px] text-mint border border-black p-3"
              >
                {" "}
                Add Garden Item{" "}
              </div>
              <div
                onClick={this.removeGardenItem()}
                className="text-[16px] text-mint border border-black p-3"
              >
                {" "}
                Remove Garden Item{" "}
              </div>
            </nav>

            <div className="flex justify-center w-8/12 m-auto items-center h-11">
              
            </div>

            <div id="table"></div>
          </div>
        </Layout>
      </>
    );
  }
}

export default portfolio;
