const multer = require("multer")
const path = require("path")

const storage = multer.diskStorage({
    destination: (req, file, cb)=>{
      cb(null, 'public/uploads');
    },
    filename: (req, file, cb)=>{
      const pict = path.extname(file.originalname);
      cb(null, Date.now() + pict)
    }
  })

  module.exports = storage