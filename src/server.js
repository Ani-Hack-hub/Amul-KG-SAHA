import { MongoClient } from "mongodb";
async function database(first_name, second_name, email_id, number, address) {
  let uri = "mongodb://localhost:27017/";
  const connection = new MongoClient(uri, {
    version: ServerApiVersion.v2,
    strict: false,
    deprecationErrors: false,
  });
  let data = {
    fname: first_name,
    sname: second_name,
    email: email_id,
    num: number,
    add: address,
  };
  try {
    await connection.connect();
    const db = connection.db("User_Profiles");
    const collection = db.collection("Sign_Up");
    collection.insertOne(data);
    console.log("data inserted");
  } catch (error) {
    console.log(error);
  } finally {
    connection.close();
  }
}
export default database;
