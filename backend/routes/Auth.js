const express = require("express");
const router = express.Router();
const { sign } = require("jsonwebtoken");
const { runQuery } = require("../middlewares/DatabasePool");
const { validateToken } = require('../middlewares/AuthMiddleware');
const dotenv = require('dotenv');
dotenv.config();

async function findCorrectDetails(email, pass){
    const params = [email, pass]
    let Data = []
    try {
        Data = await runQuery("Select UserID, Username FROM UserAccounts WHERE Email = ? and Password = ?", params);
    } catch(error) {
        console.log(error);
    };
    return Data;
}

async function checkIfUserExists(email){
    const params = [email];
    let Data = []
    try {
        Data = await runQuery("Select UserID, Username FROM UserAccounts WHERE Email = ?", params);
    } catch(error) {
        console.log(error);
    };
    return Data;
}

async function insertSignUpInfo(Name,Email,Username,Password){
    const params = [];
    let Data = []
    try {
        Data = await runQuery("Select MAX(UserID) as maxVal FROM UserAccounts", params);
    } catch(error) {
        console.log(error);
    };

    const params2 = [Data[0][0].maxVal + 1, Name, Email, Username, Password];
    let Data2 = []
    try {
        Data2 = await runQuery("INSERT INTO UserAccounts(UserID, Name, Email, Username, Password) VALUES (?, ?, ?, ?, ?)", params2);
    } catch(error) {
        console.log(error);
    };
}

// inseting record for objects(fish spots) in the database
async function insertFishSpotInfo(Name,Description,Latitude,Longitude,Image_File_Name){
    const param = [Name,Description,Latitude,Longitude,Image_File_Name]
    let Data  = []
    try {
        Data = await runQuery("INSERT INTO FISHSPOTS(Name, Description, Latitude, Longitude, Image_File_Name) VALUES (?, ?, ?, ?, ?)", param);
    } catch(error) {
        console.log(error);
    };
}

// inseting record for reviews in the database
async function insertReviewInfo(Content,UserID,ObjectID,Rating){
    const param = [Content,UserID,ObjectID,Rating]
    let Data  = []
    try {
        Data = await runQuery("INSERT INTO REVIEWS(Content, UserID, ObjectID, Rating) VALUES (?, ?, ?, ?)", param);
    } catch(error) {
        console.log(error);
    };
}


router.get('/verify', validateToken, (req, res) => {
    res.json({isValid: true});
})

router.post('/signup', async (req, res) => {
    const email = req.body.Email;
    const pass = req.body.Password;
    const name = req.body.Name;
    const username = req.body.Username;
    let Data = [];
    try {
        Data = await checkIfUserExists(email);
    } catch(error) {
        console.log(error);
    }
    if (Data[0].length == 0){
        await insertSignUpInfo(name,email,username,pass);
        res.json({status: true});
    } else {
        res.json({status: false, reason: "A user already exists with the given email"});
    }
});

router.post('/login', async (req, res) => {
    const email = req.body.Email;
    const pass = req.body.Password;
    let Data;
    try {
        Data = await findCorrectDetails(email, pass);
    } catch(error) {
        console.log(error);
    }
    //console.log("login called"+ email + pass);
    if (Data[0].length > 0){
        const accessToken = sign(
            {username: Data[0].Username, pass: Data[0].Password},
            process.env.JWT_SECRET
        );
        //console.log("Valid details given, generated token "+ accessToken);

        res.json({token: accessToken, valid: true, username: Data[0][0].Username, id: Data[0][0].UserID});
    } else {
        //console.log("invalid details");
        res.json({valid: false});
    }
});



module.exports = router;