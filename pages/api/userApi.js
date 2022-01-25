import axios from 'axios'
import router from "next/router"

//login endpoint
export const login = async ({ email, password }) => {
    try {
      const res = await axios.post(`/api/auth/login`, {
        email,
        password,
      });
      
      if (res == false){
        window.alert("Sign In Failed. Please check email or password")
      }
      else {
        content = res.body
        router.push({pathname: 'navigation/profile', data: {"email": content.email, "password": content.password}})
      }

    } catch (error) {
      console.log(error);
    }
  };
  
  //profile endpoint
  export const getUser = async () => {
    try {
      let res = await axios.get(`/api/auth/me`);
  
      return res.data.user;
    } catch (error) {
      console.log(error);
      throw error;
    }
  };
  

  //logout endpoint
  export const logout = async () => {
    try {
      await axios.get(`/api/auth/logout`);
    } catch (error) {
      console.log(error);
    }
  };