import mongoose from "mongoose";

const uri = "mongodb://localhost:27017/User_Profiles";  

async function Insert_Data(usr_name) {
  console.log("At server.js")
  try {
    await mongoose.connect(uri);

    const SignUp_schema = new mongoose.Schema({
      name: String,
      email: String,
    });
    const signup = mongoose.model('sign_ups', SignUp_schema);
    const new_user = new signup({
      name:usr_name,
      email:'aniruddhanarasimman@gmail.com'
    })
    new_user.save()
    console.log(await signup.find())
  } catch (error) {
    console.log(error)
  }
}
export default Insert_Data