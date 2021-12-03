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
const spotRouter = require("./routes/Spot");
app.use("/spot", spotRouter);

const port = process.env.PORT || 8080
//app.listen(port, () => console.log(`Listening on port ${port}`))
const sslServer = https.createServer({
    key: fs.readFileSync(process.env.SSL_KEY_LOC, 'utf8'),
    cert: fs.readFileSync(process.env.SSL_CERT_LOC, 'utf8')
}, app)

sslServer.listen(port, () => console.log(`Listening on port ${port}`))
