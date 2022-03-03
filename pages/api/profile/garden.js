
import { connectToDatabase } from "../../../util/mongodb";

export default async function handler(req, res) {
  const token = req.body.token;

  //cross checks will databse and returns the objectID, email, password
  const { db } = await connectToDatabase();

  const garden = await db
      .collection("users")
      .findOne({"token": token})



      if (garden){
        console.log("Garden Info found for profile")
        res.json(user)
      }
      else {
        console.log("Garden info not found for profile")
        res.json(null)
      }
}