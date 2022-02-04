
import { connectToDatabase } from "../../../util/mongodb";

export default async function handler(req, res) {
  const email = req.body.email
  const password = req.body.password
  const token = req.body.token


  //cross checks will databse and returns the objectID, email, password
  const { db } = await connectToDatabase();

  db.collection("users").insertOne({email: email, password: password, token: token})
    
  res.json({token: token})

}