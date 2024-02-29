const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());
app.use(express.json());

app.get('/', (req, res)=>{
    res.send()
})
app.get('/users/sign-up', (req, res)=>{
    res.send()
    console.log("LISTENING at users/sign-up")
})

app.listen(5173, ()=>{
    console.log("listening")
})