const multer = require("multer")
const storage = require("../config/filesystem")
  
const upload = multer({storage:storage})

module.exports = upload