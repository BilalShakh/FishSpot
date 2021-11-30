const { verify } = require("jsonwebtoken");
const dotenv = require('dotenv');
dotenv.config();

const validateToken = (req, res, next) => {
  const accessToken = req.header("accessToken");
  //console.log(accessToken)

  if (!accessToken) return res.json({ error: "User not logged in!" });
  //console.log(accessToken, process.env.JWT_SECRET);
  try {
    //console.log(process.env.JWT_SECRET)
    const validToken = verify(accessToken, process.env.JWT_SECRET);
    req.user = validToken;
    //console.log(validToken)
    if (validToken) {
      return next();
    }
  } catch (err) {
    return res.json({ error: err });
  }
};

module.exports = { validateToken };