import { connectToDatabase } from "../../../util/mongodb";

export default async function handler(req, res) {
  const token = req.body.token;
  const first_name = req.body.FirstName;
  const last_name = req.body.LastName;
  const phone_number = req.body.PhoneNumber;

  //cross checks will databse and returns the objectID, email, password
  const { db } = await connectToDatabase();

 await db
    .collection("users")
    .updateOne(
      { token: token },
      {
        $set: {
          FirstName: first_name,
          LastName: last_name,
          PhoneNumber: phone_number,
        },
      },
      function (err, res) {
        if (err) throw err;
        console.log("1 document updated");
        db.close();
        res.status(200)
      }
    );
}
