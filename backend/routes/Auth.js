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
    const [ Data ] = await pool.promise().query(
        "Select UserID, Username FROM UserAccounts WHERE Email = ?",
        [email]
    );
    return Data;
}

async function insertSignUpInfo(Name,Email,Username,Password){
    const [ maxUserID ] = await pool.promise().query(
        "Select MAX(UserID) as maxVal FROM UserAccounts"
    );
    await pool.promise().query(
        "INSERT INTO UserAccounts(UserID, Name, Email, Username, Password) VALUES (?, ?, ?, ?, ?)",
        [maxUserID[0].maxVal + 1, Name, Email, Username, Password]
    );
}

router.get('/verify', validateToken, (req, res) => {
    res.json({isValid: true});
})

router.post('/signup', async (req, res) => {
    const email = req.body.Email;
    const pass = req.body.Password;
    const name = req.body.Name;
    const username = req.body.Username;
    let Data = [1];
    try {
        Data = await checkIfUserExists(email);
    } catch(error) {
        console.log(error);
    }
    if (Data.length == 0){
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
        console.log("Valid details given, generated token "+ accessToken);

        res.json({token: accessToken, valid: true, username: Data[0].Username, id: Data[0].UserID});
    } else {
        console.log("invalid details");
        res.json({valid: false});
    }
});



module.exports = router;