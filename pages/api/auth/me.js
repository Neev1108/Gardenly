
import { connectToDatabase } from "../../../util/mongodb";

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