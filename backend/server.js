const express = require('express')
const mysql = require('mysql2')
const dotenv = require('dotenv');
dotenv.config();

const app = express()

const pool = mysql.createPool({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
})

async function getLogInDetails(){
  const [ Data ] = await pool.promise().query(
    "Select Email, Password FROM UserAccounts"
  );
  let details = [];
  for (let i = 0; i < Data.length; i++){
    details[i] = [Data[i].Email, Data[i].Password];
  }
  return details;
}

pool.getConnection( (err, connection)=> {
  if (err){
    console.log(err);
  }else {
    console.log ("DB connected successful: " + connection.threadId);
  }
})

app.post('/login', async (req, res) => {
  let details = await getLogInDetails();
  for (let detail in details){
    if (detail[0] === req.body.Email){
      if (detail[1] === req.body.Password){
        res.send(true);
        res.end();
      }else {
        res.send(false);
        res.end();
      }
    }
  }
  res.send(false);
  res.end();
})

const port = process.env.PORT || 8080
app.listen(port, () => console.log(`Listening on port ${port}`))
