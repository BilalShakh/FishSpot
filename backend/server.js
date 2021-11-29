const express = require('express')
const dotenv = require('dotenv');
dotenv.config();
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(cors());

const authRouter = require("./routes/Auth");
app.use("/auth", authRouter);

const port = process.env.PORT || 8080
app.listen(port, () => console.log(`Listening on port ${port}`))
