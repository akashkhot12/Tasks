const{MongoClient} = require("mongodb");
const url = "mongodb://localhost:27017";
const client = new MongoClient(url);
const database  = "SignUp";

const connections = async ()=>{
    const connect = await client.connect();
    const db = await connect.db(database);
    return collection.db("Details");
}

module.exports = connections;