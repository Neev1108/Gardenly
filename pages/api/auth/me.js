
import { ObjectId } from "mongodb";
import { connectToDatabase } from "../../../util/mongodb";

export default async function handler(req, res) {

    const id = req.body.token
  
    const { db } = await connectToDatabase();
  
    const email = await db
      .collection("users")
      .findOne({"token": id})

      
      if (email){
        console.log("User info found for profile")
        res.json(email)
      }
      else {
        console.log("User info not found for profile")
        res.json(null)
      }
}