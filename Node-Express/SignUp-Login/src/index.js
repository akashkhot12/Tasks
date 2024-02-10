const express  = require("express");
const path = require("path");
const bcrypt = require("brcypt");

const app = express();

app.set('view engine', 'ejs');

app.get('/',(req,res)=>{
    res.render('login')
})

app.get('/signup',()=>{
    res.render('signup')
})


app.listen(5000,()=>{
    console.log("server running on port 5000");
})