const jwt = require("jsonwebtoken");
const dotenv = require("dotenv")

dotenv.config()

const authentification = async (req, res, next) => {
    
    const authHeaders = req.headers.authorization
    if(!authHeaders){
        res.status(401).end()
    } else{
        const token = authHeaders.split(" ")[1];
        if(!token){
            return res.status(401)
        }
        jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, data) => {
            if(err){
                return res.status(401)
            }
            req.user = data
            next()
        })
    } 
}

module.exports = authentification