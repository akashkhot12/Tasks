const express  = require("express");
const app = express();


app.get('/',(req,res)=>{
    res.send("<h1>hello your server is on </h1>")
    res.end();
})

app.listen(5000,()=>{
    console.log("server is up go server ");
})