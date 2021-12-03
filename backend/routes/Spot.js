const express = require("express");
const router = express.Router();
const { runQuery } = require("../middlewares/DatabasePool");
const { validateToken } = require('../middlewares/AuthMiddleware');
const fs = require('fs')
const util = require('util')
const unlinkFile = util.promisify(fs.unlink)
const multer = require('multer')
const upload = multer({ dest: 'uploads/' })

const { uploadFile, getFileStream } = require('../middlewares/s3')

async function insertSpotDetails(Name, Feature, Description, LocLatitude, LocLongitude, UserLatitude, UserLongitude, UserID, Image_Key){
    const params = [Name, Feature, Description, LocLatitude, LocLongitude, UserLatitude, UserLongitude, UserID, Image_Key];
    let Data = []
    try {
        Data = await runQuery("INSERT INTO FISHSINGSPOTS(Name, Feature, Description, LocLatitude, LocLongitude, UserLatitude, UserLongitude, UserID, Image_Key) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)", params);
    } catch(error) {
        console.log(error);
    };
}

router.get('/images/:key', (req, res) => {
  console.log(req.params)
  const key = req.params.key
  const readStream = getFileStream(key)

  readStream.pipe(res)
})

router.post('/create', validateToken, upload.single('Image'), async (req, res) => {
  const file = req.file
  //console.log(file)
  const result = await uploadFile(file)
  await unlinkFile(file.path)
  console.log(result)
  //const description = req.body.description
  const body = req.body;
  await insertSpotDetails(body.SpotName, body.Feature, body.Description, body.LocLatitude, body.LocLongitude, body.UserLatitude, body.UserLongitude, body.UserID, result.Key);

  res.send({valid: true});
})

module.exports = router;