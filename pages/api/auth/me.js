
import { connectToDatabase } from "../../../util/mongodb";

export default async function handler(req, res) {

    const email = req.body.email
    const password = req.body.password
  
    const { db } = await connectToDatabase();
  
    const token = await db
      .collection("users")
      .findOne({"email": email, "password": password})
      
      if (users){
        res.body = {"email": email, "password": password, LoggedIn: true}
      }
      else {
        res.body = false
      }
}