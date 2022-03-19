
import { connectToDatabase } from "../../../util/mongodb";

/** 
* Brief description of the function here.
* @summary The signup will insert the user data into a document in the database and return a token
* @param {Request} request.data - The request data will have the email, password, and token (which is created from the middleware)
* @return {Token} The token will be returned
*/

export default async function handler(req, res) {
  const email = req.body.email
  const password = req.body.password
  const token = req.body.token


  //cross checks will databse and returns the objectID, email, password
  const { db } = await connectToDatabase();

  db.collection("users").insertOne({email: email, password: password, 
    FirstName: "", LastName:"", PhoneNumber: "", token: token})

  db.collection("gardens").insertOne({token: token, plants: []})
    
  res.status(200).json({token: token})

}