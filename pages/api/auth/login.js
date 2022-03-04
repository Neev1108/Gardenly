import { responseSymbol } from "next/dist/server/web/spec-compliant/fetch-event";
import { connectToDatabase } from "../../../util/mongodb";



/** 
* Brief description of the function here.
* @summary Login endpoint that will post user data and return a token in the middle ware
* @param {Request, Response} Request - user login data will come with the request like email and password
* @return {Token} The token will be returned
*/

export default async function handler(req, res) {
  const email = req.body.email
  const password = req.body.password

  //cross checks will databse and returns the objectID, email, password
  const { db } = await connectToDatabase();

  const user_token = await db
    .collection("users")
    .findOne({"email": email, "password": password}, {projection: {token: 1}})
    
    if (user_token){
      res.status(200).json(user_token)
      console.log("User found from login")
    }
    else {
      res.status(400).json(null)
      console.log("User not found in login")
    }


}
