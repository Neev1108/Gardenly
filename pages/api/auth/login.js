import { responseSymbol } from "next/dist/server/web/spec-compliant/fetch-event";
import { connectToDatabase } from "../../../util/mongodb";

export default async function handler(req, res) {
  const email = req.body.email
  const password = req.body.password

  //cross checks will databse and returns the objectID, email, password
  const { db } = await connectToDatabase();

  const user_token = await db
    .collection("users")
    .findOne({"email": email, "password": password})
    .project({token: 1})
    
    console.log(user_token)
    if (user_token){
      res.json(user)
      console.log("User found from login")
    }
    else {
      res.json(null)
      console.log("User not found in login")
    }


}
