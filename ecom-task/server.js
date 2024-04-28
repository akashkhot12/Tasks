const express = require('express');
const path  = require('path');
const bodyParser = require('body-parser')
const session = require("express-session");
const productData = require('./products.json')
const fs = require('fs')

const {v4:uuidv4}=require("uuid")
// const router = require('./router')

const app = express();

app.set("view engine",'ejs');

// load static assets
app.use('/static',express.static(path.join(__dirname,'public')))

app.use(bodyParser.urlencoded({extended:true}));

app.use(session({
    secret:uuidv4(),
    resave:false,
    saveUninitialized:true
}));

// app.use('/route',router)

// // home route
app.get('/', (req, res) => {
    // Read JSON data from file
    fs.readFile('products.json', 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading file:', err);
            return res.status(500).send('Error reading file');
        }
        // Parse JSON data
        const jsonData = JSON.parse(data);
        // Render the EJS template with JSON data
        res.render('ecomHomePage', { jsonData: jsonData });
    });
});

app.listen(5000,()=>{
    console.log("server is up on 5000 port");
})

