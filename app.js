const express = require("express");
const indexRouter = require("./routes/indexRourter");
const morgan = require("morgan");
const fs = require("fs");
const path = require("path");
const app = express();
require("dotenv").config();
const cors = require("cors");
const mongoose = require("mongoose");
const errorHandler = require("./middlewares/errorMiddleware");
const logger = require("./middlewares/loggerMiddleware");
const connectDB = require("./config/db");


//connect to db
connectDB();
app.use(cors());
app.use(express.json());
const logSysterm = fs.createWriteStream(path.join(__dirname, "log.txt"), {
  flags: "a",
});
app.use(morgan("combined", { stream: logSysterm }));

app.use("/api", indexRouter);
app.use(errorHandler);

console.log(process.env.ENV_MODE);
app.use(express.static("dist"));


module.exports= app
