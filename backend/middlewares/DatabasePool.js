
const dotenv = require('dotenv');
dotenv.config();
const mysql = require('mysql2');

const pool = mysql.createPool({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
});

pool.getConnection( (err, connection)=> {
    if (err){
      console.log(err);
    }else {
      console.log ("DB connected successful: " + connection.threadId);
    }
});

const runQuery = async (GivenQuery, parameters) => {
  let Data = [];
  try {
      Data = await pool.promise().query(
          GivenQuery,
          parameters
      )
  } catch(error) {
      console.log(error);
  };
  return Data;
}

module.exports = { runQuery };