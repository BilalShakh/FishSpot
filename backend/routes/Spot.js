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
        Data = await runQuery("INSERT INTO FishingSpots(Name, Feature, Description, LocLatitude, LocLongitude, UserLatitude, UserLongitude, UserID, Image_Key) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)", params);
    } catch(error) {
        console.log(error);
    };
}

async function getSpotDetails(id) {
  const params = [id]
  let Data = []
  try {
    Data = await runQuery("SELECT * FROM FishingSpots WHERE ObjectID = ?", params);
  } catch(error) {
    console.log(error);
  };
  return Data[0];
}

router.get('/images/:key', (req, res) => {
  console.log(req.params)
  const key = req.params.key
  const readStream = getFileStream(key)

  readStream.pipe(res)
})

router.get('/info/:id',  async (req, res) => {
  //console.log(req.params)
  const id = req.params.id
  const Data = await getSpotDetails(id);

  if (Data.length !== 0){
    res.send({
      isValid: true,
      SpotName:Data[0].Name,
      LocLatitude:Data[0].LocLatitude,
      LocLongitude:Data[0].LocLongitude,
      Description:Data[0].Description,
      ImageKey:Data[0].Image_Key
    });
  } else {
    res.send({ isValid: false });
  }
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