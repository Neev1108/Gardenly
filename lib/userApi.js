import axios from 'axios'
import CryptoJS from 'crypto-js';

export const signup = async (email, password) => {
  try {
    console.log("Signup endpoint reached")
    var token = CryptoJS.AES.encrypt(email, "123").toString()
    const res = await axios.post(`/api/auth/signup`, {
      "email": email,
      "password": password, 
      "token": token
    });
    return res.data
  } catch (error) {
    console.log(error);
  }
};

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
        password
      });

      return res
    } catch (error) {
      console.log(error);
    }
  };
  
  //profile endpoint
  export const getUser = async (token) => {
    try {
      let res = await axios.post(`/api/auth/me`, token);
      return res;
    } catch (error) {
      console.log(error);
      console.log("error here")
      throw error;
    }
  };
  

  //logout endpoint, not in use right now, 
  //but might use to persist user login with a database later
  export const logout = async () => {
    try {
      await axios.get(`/api/auth/logout`);
    } catch (error) {
      console.log(error);
    }
  };