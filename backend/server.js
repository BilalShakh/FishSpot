const express = require('express')
const dotenv = require('dotenv');
dotenv.config();
const cors = require("cors");
const https = require('https');
const fs = require('fs');
const path = require('path');
const app = express();

app.use(express.json());
app.use(cors());

const authRouter = require("./routes/Auth");
app.use("/auth", authRouter);

const port = process.env.PORT || 8080
//app.listen(port, () => console.log(`Listening on port ${port}`))
const sslServer = https.createServer({
    key: fs.readFileSync(path.join(__dirname, 'cert', 'key.pem')),
    cert: fs.readFileSync(path.join(__dirname, 'cert', 'cert.pem'))
}, app)

sslServer.listen(port, () => console.log(`Listening on port ${port}`))
