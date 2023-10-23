let {getMongoClient, getClient} = require("../databases")

getMongoClient()

const DB = {
    collection: (name) =>{
        const db = getClient().db()
        return db.collection(name);
    }
}

module.exports = DB