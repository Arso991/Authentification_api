var express = require('express');
var router = express.Router();
const DB = require('../facades');
const jwt = require("jsonwebtoken")
const dotenv = require("dotenv")

dotenv.config()

/* GET users listing. */
function generateAccessToken(user){
  return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, {expiresIn : "1000s"})
}

router.post('/', async function(req, res, next) {
  console.log('ok');
  try {
    const {email, password} = req.body
    const user = await DB.collection("users").findOne({"email":email, "password":password})
    if(!user){
      res.status(401).send("L'utilisateur n'est pas autorisé")
      return
    }

    const accessToken = generateAccessToken(user);
    
    res.send({accessToken});
  } catch (error) {
    console.error(error);
  }
  
});

module.exports = router;
