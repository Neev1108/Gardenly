
import { connectToDatabase } from "../../../util/mongodb";

export default async function handler(req, res) {
  const token = req.body.token
  const type = req.body.plant_type;
  const name = req.body.plant_name
  const age = req.body.plant_age


  console.log(req.body)
  //cross checks will databse and returns the objectID, email, password
  const { db } = await connectToDatabase();

  db.collection("gardens").updateOne({ token: token },  {
    $set: {
      plants: {PlantType: type, PlantName: name, PlantAge: age}, 
    },
  },
  function (err, res) {
    if (err) throw err;
    console.log("1 plant updated");
  }
);
}