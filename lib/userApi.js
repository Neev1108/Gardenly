import axios from 'axios'



//login endpoint
//will make an axios post request to login
//the response will return a user token (as an object)
//will do check if the response is null
//then return the token, or return null
//loggedIn check will happen in pages/login
export const login = async ({ email, password }) => {
    try {
      const res = await axios.post(`/api/auth/login`, {
        email,
        password,
      });
      
      if (res.data != null) {
        return res.data
      }
      else {
        return null
      }
      
    } catch (error) {
      console.log(error);
    }
  };
  
  //profile endpoint
  export const getUser = async () => {
    try {
      let res = await axios.get(`/api/auth/me`);
      console.log(res)
      return res.body;
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