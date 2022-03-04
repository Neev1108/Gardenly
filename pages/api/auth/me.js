
import { connectToDatabase } from "../../../util/mongodb";

/** 
* Brief description of the function here.
* @summary If the description is long, write your summary here. Otherwise, feel free to remove this.
* @param {Request, Response} Request - The request for this api call will send the token and receive user data from
  the mongodb database.
* @return {JSON} Returns a JSON object of the user data
*/

export default async function handler(req, res) {
    const token = req.body.token
    
    const { db } = await connectToDatabase();
  
    const user = await db
      .collection("users")
      .findOne({"token": token})

      
      if (user){
        console.log("User info found for profile")
        res.json(user)
      }
      else {
        console.log("User info not found for profile")
        res.json(null)
      }
}