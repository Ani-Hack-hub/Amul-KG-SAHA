const express = require('express')
const app = express()

function listener(){
    app.get('/users/sign-up', (req, res) =>{
        console.log('hi')
    })
}
app.listen('5173')
export default listener;