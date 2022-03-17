import React from "react";
import Layout from "../../components/Layout";
import Cookies from "js-cookie";
import { getUser } from "../../lib/userMiddleware";
import {getGarden, addGarden} from "../../lib/profileMiddleware"
import Table from "../../components/Table/GardenTable"
import AddForm from "../../components/AddForm"


class portfolio extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      addPlant: {
        plant_type: "",
        plant_name: "",
        plant_age: "",
      },
      portfolio : [],
      page: "",
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
        let { token } = response.data;
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
    this.getCurrentGarden();
  };


  //set up api call for garden
  getCurrentGarden = async () => {
    const auth_token = Cookies.get("token");
    const response = await getGarden({token: auth_token})
    if (response){
      let { plants } = response.data
      this.state.portfolio = Object.keys(plants).map((key) => [key, plants[key]]);
      console.log("Garden found")
    }
    else {
      console.log("Garden not found")
    }
  }

  addGardenItem =  (name, type, age) => {
    console.log("Age is:", age)
      //let res = addGarden({token: this.state.token, plant_type: type, plant_name: name, plant_age: age})
  };

  removeGardenItem = () => {
    
  };

  render() {
    return (
      <>
        <Layout>
          <div className="w-screen h-screen flex flex-col bg-mint overflow-auto">

            <div className="w-1/2 m-auto bg-white h-3/4"> 
            <Table data={this.state.portfolio} /> 
            </div>

            <div className="ml-auto mr-auto -mt-5 border p-3 rounded border-black bg-grape text-white"> Delete Selected </div> 

            <div className="m-auto" id="add_form">
              <AddForm addGardenItem={this.addGardenItem}> </AddForm>
             </div>

          </div>
        </Layout>
      </>
    );
  }
}

export default portfolio;
