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

pool.getConnection( (err, connection)=> {
  if (err){
    console.log(err)
  }else {
  console.log ("DB connected successful: " + connection.threadId)
  }
})

const port = process.env.PORT || 8080
app.listen(port, () => console.log(`Listening on port ${port}`))
