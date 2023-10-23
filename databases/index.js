const {MongoClient} = require("mongodb")
const url = "mongodb://localhost:27017/geographydb"
let client

async function getMongoClient(){
    if(client){
        console.log("Client exists !");
        return client
    }

    try {
        client = new MongoClient(url)
        await client.connect()
        return client
    } catch (error) {
        console.error(error);
    }
}

function getClient(){
    if(client) return client;
}

module.exports = { getMongoClient, getClient }