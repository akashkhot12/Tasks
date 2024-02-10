const express  = require("express");
const app = express();
const dbConnect = require("./database/connection");
const path = require('path');



const getData = async () => {
    let data = await dbConnect();
    const result = await data.find().toArray();
    if (!result) {
      console.log("something wrong");
    } else {
      console.log(result);
    }
  };

//   getData();

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname, 'forms/signUp.html'));
})

app.listen(5000,()=>{
    console.log("server is up go server ");
})