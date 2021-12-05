const express = require("express");
const router = express.Router();
const { runQuery } = require("../middlewares/DatabasePool");

async function LookupSpotsByName(name) {
    const params = ['%'+name+'%']
    let Data = []
    try {
      Data = await runQuery("SELECT ObjectID, Name, Feature, Description, LocLatitude, LocLongitude, Image_Key  FROM FishingSpots WHERE Name LIKE ?", params);
    } catch(error) {
      console.log(error);
    };
    return Data[0];
}

async function LookupSpotsByRating(rating) {
    const params = [parseInt(rating)]
    let Data = []
    try {
      Data = await runQuery("SELECT ObjectID, Name, Feature, Description, LocLatitude, LocLongitude, Image_Key FROM FishingSpots WHERE ObjectID IN (SELECT ObjectID FROM (SELECT ObjectID, AVG(Rating) as avg FROM Reviews GROUP BY ObjectID) as alias2 WHERE FlOOR(alias2.avg) = ?) ", params);
    } catch(error) {
      console.log(error);
    };
    return Data[0];
}

async function getAllSpots() {
    const params = []
    let Data = []
    try {
      Data = await runQuery("SELECT ObjectID, Name, Feature, Description, LocLatitude, LocLongitude, Image_Key  FROM FishingSpots", params);
    } catch(error) {
      console.log(error);
    };
    return Data[0];
}

async function getReviewDetails(ObjectID) {
    const params = [ObjectID]
    let Data = []
    let ratingSum = 0;
    let reviewCounter = 0;
    try {
      Data = await runQuery("SELECT Rating FROM Reviews WHERE ObjectID = ?", params);
    } catch(error) {
      console.log(error);
    };
    Data[0].forEach(element => {
        ratingSum += element.Rating;
        reviewCounter++;
    });
    return {avgRating: ratingSum/reviewCounter, numReviews: reviewCounter};
}

function distance(lat1, lat2, lon1, lon2)
{
    lon1 =  lon1 * Math.PI / 180;
    lon2 = lon2 * Math.PI / 180;
    lat1 = lat1 * Math.PI / 180;
    lat2 = lat2 * Math.PI / 180;

    // Haversine formula
    let dlon = lon2 - lon1;
    let dlat = lat2 - lat1;
    let a = Math.pow(Math.sin(dlat / 2), 2) + Math.cos(lat1) * Math.cos(lat2) * Math.pow(Math.sin(dlon / 2),2);

    let c = 2 * Math.asin(Math.sqrt(a));

    let r = 6371;

    return(c * r);
}

router.get('/rating/:rating',  async (req, res) => {
    //console.log(req.params)
    let Data = [];
    if (rating === "All"){
        Data = await getAllSpots();
    } else {
        Data = await LookupSpotsByRating(rating);
    }
    const rating = req.params.rating
    const locationGiven = req.header("location");
    const longitude = req.header("lng");
    const latitude = req.header("lat");
    let ResData = []
  
    if (Data.length !== 0){
      if (locationGiven){
          for (let i = 0; i < Data.length; i++){
                let element = Data[i];
                const dist = distance(latitude, element.LocLatitude, longitude, element.LocLongitude);
                if (dist <= 100) {
                    let reviewDetails = await getReviewDetails(element.ObjectID);
                    ResData.push({
                        ObjectID: element.ObjectID,
                        Name: element.Name, 
                        Feature: element.Feature, 
                        Rating: reviewDetails.avgRating, 
                        NumReviews: reviewDetails.numReviews,
                        Latitude: element.LocLatitude,
                        Longitude: element.LocLongitude,
                        Description: element.Description.substring(0,50),
                        Image_key: element.Image_Key
                    });
                }
          }
          res.send({ found: true, cardData: ResData });
      } else {
        for (let i = 0; i < Data.length; i++){
            let element = Data[i];
            let reviewDetails = await getReviewDetails(element.ObjectID);
            ResData.push({
                ObjectID: element.ObjectID,
                Name: element.Name, 
                Feature: element.Feature, 
                Rating: reviewDetails.avgRating, 
                NumReviews: reviewDetails.numReviews,
                Latitude: element.LocLatitude,
                Longitude: element.LocLongitude,
                Description: element.Description.substring(0,50),
                Image_key: element.Image_Key
            });
        }
        //Data.forEach(await populateResArray(element));
        res.send({ found: true, cardData: ResData });
      }
    } else {
      res.send({ found: false });
    }
  })

router.get('/name/:term',  async (req, res) => {
    //console.log(req.params)
    const name = req.params.term
    const Data = await LookupSpotsByName(name);
    const locationGiven = req.header("location");
    const longitude = req.header("lng");
    const latitude = req.header("lat");
    let ResData = []
  
    if (Data.length !== 0){
      if (locationGiven){
          for (let i = 0; i < Data.length; i++){
                let element = Data[i];
                const dist = distance(latitude, element.LocLatitude, longitude, element.LocLongitude);
                if (dist <= 100) {
                    let reviewDetails = await getReviewDetails(element.ObjectID);
                    ResData.push({
                        ObjectID: element.ObjectID,
                        Name: element.Name, 
                        Feature: element.Feature, 
                        Rating: reviewDetails.avgRating, 
                        NumReviews: reviewDetails.numReviews,
                        Latitude: element.LocLatitude,
                        Longitude: element.LocLongitude,
                        Description: element.Description.substring(0,50),
                        Image_key: element.Image_Key
                    });
                }
          }
          res.send({ found: true, cardData: ResData });
      } else {
        for (let i = 0; i < Data.length; i++){
            let element = Data[i];
            let reviewDetails = await getReviewDetails(element.ObjectID);
            ResData.push({
                ObjectID: element.ObjectID,
                Name: element.Name, 
                Feature: element.Feature, 
                Rating: reviewDetails.avgRating, 
                NumReviews: reviewDetails.numReviews,
                Latitude: element.LocLatitude,
                Longitude: element.LocLongitude,
                Description: element.Description.substring(0,50),
                Image_key: element.Image_Key
            });
        }
        //Data.forEach(await populateResArray(element));
        res.send({ found: true, cardData: ResData });
      }
    } else {
      res.send({ found: false });
    }
  })

module.exports = router;