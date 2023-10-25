var express = require("express");
var router = express.Router();
const DB = require("../facades");
const upload = require("../middlewares/uploads");

router.post("/", upload.single("file"), async (req, res) => {
  try {
    if (req.file) {
      const fileName = req.file.filename;
      
      const picture = await DB.collection("pictures").insertOne({
        path: fileName,
      });

      res.status(201).send({ picture, "path": fileName, msg: "Fichier enrégistrer avec succès" });
    } else {
      res.status(404);
      return;
    }
  } catch (error) {
    console.error(error);
  }
});

router.get("/", async (req, res) => {
  try {
    const resp = await DB.collection("pictures").find({}).toArray();
    const pictures = resp.map((picture) => {
      return {
        _id: picture._id,
        path: `http://localhost:8001/uploads/${picture.path}`,
      };
    });
    res.send(pictures);
  } catch (error) {
    console.error(error);
  }
});

module.exports = router;
