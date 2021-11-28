const express = require('express')
const mysql = require('mysql2')

const app = express()

const pool = mysql.createPool({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
})

pool.getConnection( (err, connection)=> {
  if (err) throw (err)
  console.log ("DB connected successful: " + connection.threadId)
})