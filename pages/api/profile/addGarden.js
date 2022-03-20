
import { connectToDatabase } from "../../../util/mongodb";

export default async function handler(req, res) {
  const token = req.body.token
  const type = req.body.plant_type;
  const name = req.body.plant_name
  const age = req.body.plant_age


  //cross checks will databse and returns the objectID, email, password
  const { db } = await connectToDatabase();

 const result =  db.collection("gardens").updateOne({ token: token },  {
    $push: {
      plants: {PlantType: type, PlantName: name, PlantAge: age}, 
    },
  },
);

res.json(result)

}