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
  const params = [parseInt(id)]
  let Data = []
  try {
    Data = await runQuery("SELECT * FROM FishingSpots WHERE ObjectID = ?", params);
  } catch(error) {
    console.log(error);
  };
  return Data[0];
}

async function getReviews(ObjectID) {
  const numObjectID = parseInt(ObjectID);
  const params = [numObjectID]
  let Data = []
  try {
    Data = await runQuery("SELECT UserID, Rating, Description FROM Reviews WHERE ObjectID = ?", params);
  } catch(error) {
    console.log(error);
  };
  return Data[0];
}

async function getFullName(UserID) {
  const numUserID = parseInt(UserID);
  const params = [numUserID];
  let Data = [];
  try {
    Data = await runQuery("SELECT Name FROM UserAccounts WHERE UserID = ?", params);
  } catch(error) {
    console.log(error);
  };
  return Data[0];
}

async function insertReview(ObjectID, UserID, Rating, Description){
  const params = [ObjectID, UserID, Rating, Description]
  let Data = []
  try {
    Data = await runQuery("INSERT INTO Reviews(ObjectID, UserID, Rating, Description) VALUES (?, ?, ?, ?)", params);
  } catch(error) {
    console.log(error);
  };
  return Data[0];
}

async function checkIfReviewExists(ObjectID, UserID){
  const params = [ObjectID, UserID]
  let Data = []
  try {
    Data = await runQuery("SELECT * FROM Reviews WHERE ObjectID = ? and UserID = ?", params);
  } catch(error) {
    console.log(error);
  };
  return Data[0].length > 0;
}

router.get('/reviews/:id', async (req, res) => {
  //console.log(req.params)
  const id = req.params.id;
  const reviews = await getReviews(id);
  let resData = [];
  for (let i = 0; i < reviews.length; i++){
    const review = reviews[i];
    const FullName = await getFullName(review.UserID);
    const item = {
      Name: FullName[0].Name,
      Rating: review.Rating,
      Description: review.Description
    };
    resData.push(item);
  }
  if (resData.length > 0){
    res.send({foundReview: true, reviews: resData});
  } else{
    res.send({foundReview: false});
  }
})

router.post('/reviews/create', validateToken, async (req, res) => {
  //console.log(req.params)
  if (checkIfReviewExists(req.body.ObjectID, req.body.UserID)){
    res.send({valid: false, reason: "Already exists"});
  }else {
    await insertReview(req.body.ObjectID, req.body.UserID, req.body.Rating, req.body.Description);
    res.send({valid: true});
  }
})

router.get('/images/:key', (req, res) => {
  //console.log(req.params)
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
  //console.log(result)
  //const description = req.body.description
  const body = req.body;
  await insertSpotDetails(body.SpotName, body.Feature, body.Description, body.LocLatitude, body.LocLongitude, body.UserLatitude, body.UserLongitude, body.UserID, result.Key);

  res.send({valid: true});
})

module.exports = router;