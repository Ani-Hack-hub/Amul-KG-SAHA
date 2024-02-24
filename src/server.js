import { MongoClient } from "mongodb";

const uri = "mongodb://localhost:27017/";
const connection = new MongoClient(uri);

async function database() {
  try {
    await connection.connect();
    const db = connection.db("new_tab");
    const coll = db.collection("new_tab");

    // Using toArray() to await the result
    const result = await coll.find().toArray();
    console.log(result);
  } catch (err) {
    console.error(err);
  } finally {
    connection.close();
  }
}

export default database;
